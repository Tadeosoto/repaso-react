import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { StatusText } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("01-status-text", () => {
  it("shows the message", () => {
    const view = render(<StatusText message="Saved" />)
    assert.equal(view.getByText("Saved").tagName, "P")
  })
})
