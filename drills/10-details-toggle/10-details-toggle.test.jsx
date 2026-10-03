import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, fireEvent, render } from "@testing-library/react"
import { DetailsToggle } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("10-details-toggle", () => {
  it("hides and shows the details", () => {
    const view = render(<DetailsToggle />)
    assert.ok(view.getByText("Details"))
    fireEvent.click(view.getByRole("button", { name: "Hide" }))
    assert.equal(view.queryByText("Details"), null)
    fireEvent.click(view.getByRole("button", { name: "Show" }))
    assert.ok(view.getByText("Details"))
  })
})
