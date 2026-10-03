import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { Badge } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("09-badge", () => {
  it("shows the text in a span", () => {
    const view = render(<Badge text="New" />)
    assert.equal(view.getByText("New").tagName, "SPAN")
  })
})
