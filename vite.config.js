import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as esbuild from "esbuild"
import { spawn } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const drillsRoot = path.join(__dirname, "drills")

const ALLOWED = new Set([
  "01-status-text",
  "02-button-label",
  "03-loading-label",
  "04-name-list",
  "05-save-click",
  "06-counter",
  "07-name-field",
  "08-ready-effect",
  "09-badge",
  "10-details-toggle",
  "11-fruit-list",
  "12-watch-name",
])

const runDrillTest = async (drillId) => {
  const testFile = path.join(drillsRoot, drillId, `${drillId}.test.jsx`)
  const outdir = path.join(__dirname, ".tmp")
  fs.mkdirSync(outdir, { recursive: true })
  const outfile = path.join(outdir, `${drillId}.test.mjs`)

  try {
    await esbuild.build({
      entryPoints: [testFile],
      bundle: true,
      platform: "node",
      format: "esm",
      jsx: "automatic",
      outfile,
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "jsdom",
        "@testing-library/react",
      ],
    })
  } catch (err) {
    return { ok: false, output: String(err) }
  }

  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["--test", outfile], {
      cwd: __dirname,
      shell: false,
      env: { ...process.env },
    })
    let out = ""
    child.stdout.on("data", (d) => {
      out += d.toString()
    })
    child.stderr.on("data", (d) => {
      out += d.toString()
    })
    child.on("close", (code) => {
      fs.rmSync(outfile, { force: true })
      resolve({ ok: code === 0, output: out || `(exit ${code})` })
    })
    child.on("error", (err) => {
      resolve({ ok: false, output: String(err) })
    })
  })
}

const drillTestPlugin = () => ({
  name: "drill-test-api",
  configureServer(server) {
    server.middlewares.use("/api/drill-test", (req, res, next) => {
      if (req.method !== "POST") {
        next()
        return
      }

      let body = ""
      req.on("data", (chunk) => {
        body += chunk
      })
      req.on("end", async () => {
        let drillId = ""
        try {
          drillId = JSON.parse(body || "{}").drillId || ""
        } catch {
          drillId = ""
        }

        res.setHeader("Content-Type", "application/json")

        if (!ALLOWED.has(drillId)) {
          res.statusCode = 400
          res.end(JSON.stringify({ ok: false, output: `Unknown drill: ${drillId}` }))
          return
        }

        const result = await runDrillTest(drillId)
        res.end(JSON.stringify(result))
      })
    })
  },
})

export default defineConfig({
  plugins: [react(), drillTestPlugin()],
  server: {
    port: 5186,
    open: true,
  },
})
