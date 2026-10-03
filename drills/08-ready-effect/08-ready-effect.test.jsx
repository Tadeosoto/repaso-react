import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { ReadyNote } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("08-ready-effect", () => {
  it("calls onReady once", () => {
    let calls = 0
    const onReady = () => {
      calls += 1
    }
    const view = render(<ReadyNote onReady={onReady} />)
    assert.equal(calls, 1)
    view.rerender(<ReadyNote onReady={onReady} />)
    assert.equal(calls, 1)
  })
})
