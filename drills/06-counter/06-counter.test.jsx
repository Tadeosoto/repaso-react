import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, fireEvent, render } from "@testing-library/react"
import { Counter } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("06-counter", () => {
  it("starts at 0 and adds 1 on each click", () => {
    const view = render(<Counter />)
    assert.ok(view.getByText("0"))
    const button = view.getByRole("button", { name: "Add" })
    fireEvent.click(button)
    assert.ok(view.getByText("1"))
    fireEvent.click(button)
    assert.ok(view.getByText("2"))
  })
})
