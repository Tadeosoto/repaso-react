import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { LoadingLabel } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("03-loading-label", () => {
  it("shows Loading... or the label", () => {
    const view = render(<LoadingLabel loading={true} label="Save" />)
    assert.equal(view.getByText("Loading...").tagName, "P")
    view.rerender(<LoadingLabel loading={false} label="Save" />)
    assert.equal(view.getByText("Save").tagName, "P")
  })
})
