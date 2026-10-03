import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { WatchName } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("12-watch-name", () => {
  it("reports the name on mount and when it changes", () => {
    const seen = []
    const onName = (name) => {
      seen.push(name)
    }
    const view = render(<WatchName name="Ana" onName={onName} />)
    assert.deepEqual(seen, ["Ana"])
    view.rerender(<WatchName name="Luis" onName={onName} />)
    view.rerender(<WatchName name="Luis" onName={onName} />)
    assert.deepEqual(seen, ["Ana", "Luis"])
  })
})
