import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, fireEvent, render } from "@testing-library/react"
import { NameField } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("07-name-field", () => {
  it("shows what was typed", () => {
    const view = render(<NameField />)
    const input = view.getByRole("textbox")
    fireEvent.change(input, { target: { value: "Ana" } })
    assert.equal(input.value, "Ana")
  })
})
