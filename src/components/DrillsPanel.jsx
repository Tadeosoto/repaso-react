import { useState } from "react"
import { DRILLS } from "../drills/registry.js"

const DrillsPanel = ({ drillId, onSelect }) => {
  const drill = DRILLS.find((d) => d.id === drillId) || DRILLS[0]
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const handleRun = async () => {
    setRunning(true)
    setOutput(null)
    try {
      const res = await fetch("/api/drill-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ drillId: drill.id }),
      })
      const data = await res.json()
      setOutput(data)
    } catch (err) {
      setOutput({ ok: false, output: String(err) })
    } finally {
      setRunning(false)
    }
  }

  const handleSelect = (id) => {
    onSelect(id)
    setOutput(null)
    setNavOpen(false)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col md:flex-row">
      <div className="border-b border-slate-200 bg-white px-3 py-2 md:hidden">
        <button
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-left text-sm font-medium text-slate-800"
          aria-expanded={navOpen}
        >
          <span>{drill.title}</span>
          <span className="text-slate-500">{navOpen ? "Hide" : "Drills"}</span>
        </button>
        {navOpen && (
          <nav className="mt-2 max-h-56 overflow-y-auto rounded-xl border border-slate-200 p-1">
            {DRILLS.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => handleSelect(d.id)}
                className={
                  "block w-full rounded-lg px-3 py-2.5 text-left text-sm " +
                  (d.id === drill.id
                    ? "bg-prime-600 text-white"
                    : "text-slate-700 hover:bg-slate-100")
                }
              >
                {d.title}
              </button>
            ))}
          </nav>
        )}
      </div>

      <aside className="hidden w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-white md:block">
        <div className="border-b border-slate-200 bg-prime-800 p-4 text-white">
          <h1 className="text-lg font-bold">React drills</h1>
          <p className="text-xs text-violet-100">Edit task.jsx · run tests</p>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          {DRILLS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => handleSelect(d.id)}
              className={
                "rounded px-2 py-2 text-left text-sm " +
                (d.id === drill.id
                  ? "bg-prime-600 text-white"
                  : "text-slate-700 hover:bg-slate-100")
              }
            >
              {d.title}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <header className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{drill.title}</h2>
              <span className="rounded bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                {drill.level}
              </span>
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                {drill.duration}
              </span>
            </div>
            <p className="mt-2 break-all font-mono text-xs text-slate-500">{drill.file}</p>
          </header>

          <section>
            <h3 className="text-lg font-bold text-slate-900">Lesson</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{drill.lesson}</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100 sm:p-4 sm:text-sm">
              {drill.example}
            </pre>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-bold text-slate-900">Assignment</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{drill.story}</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-800">
              {drill.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-slate-600">
              Write it in <code className="rounded bg-slate-100 px-1">task.jsx</code>. Leave the
              test file alone. Then press Run tests.
            </p>
          </section>

          <section className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <h3 className="text-lg font-bold text-amber-950">Tip</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-950">{drill.tip}</p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs text-slate-100 sm:p-4 sm:text-sm">
              {drill.tipCode}
            </pre>
          </section>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleRun}
              disabled={running}
              className="min-h-11 rounded-xl bg-prime-700 px-4 py-2.5 text-sm font-medium text-white disabled:opacity-60"
            >
              {running ? "Running…" : "Run tests"}
            </button>
            {output && (
              <span
                className={
                  "rounded px-2 py-0.5 text-xs font-semibold " +
                  (output.ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")
                }
              >
                {output.ok ? "ALL PASS" : "FAILING"}
              </span>
            )}
          </div>

          {output && (
            <pre className="max-h-64 overflow-auto rounded-lg bg-slate-900 p-3 text-[11px] leading-relaxed text-slate-100 sm:max-h-80 sm:p-4 sm:text-xs">
              {output.output}
            </pre>
          )}
        </div>
      </main>
    </div>
  )
}

export default DrillsPanel
