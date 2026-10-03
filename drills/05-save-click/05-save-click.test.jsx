import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, fireEvent, render } from "@testing-library/react"
import { SaveButton } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("05-save-click", () => {
  it("calls onSave when the button is clicked", () => {
    let calls = 0
    const view = render(<SaveButton onSave={() => { calls += 1 }} />)
    assert.equal(calls, 0)
    fireEvent.click(view.getByRole("button", { name: "Save" }))
    assert.equal(calls, 1)
  })
})
