import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { PrimeButton } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("02-button-label", () => {
  it("renders a button with the label", () => {
    const view = render(<PrimeButton label="Save" />)
    const button = view.getByRole("button", { name: "Save" })
    assert.equal(button.tagName, "BUTTON")
    assert.equal(button.getAttribute("type"), "button")
  })
})
