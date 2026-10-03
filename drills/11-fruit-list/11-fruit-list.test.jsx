import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { FruitList } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("11-fruit-list", () => {
  it("shows one row per fruit", () => {
    const view = render(<FruitList fruits={["Apple", "Pear"]} />)
    const items = view.getAllByRole("listitem")
    assert.deepEqual(
      items.map((item) => item.textContent),
      ["Apple", "Pear"]
    )
  })
})
