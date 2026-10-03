import "../setup-dom.js"
import { afterEach, describe, it } from "node:test"
import assert from "node:assert/strict"
import { cleanup, render } from "@testing-library/react"
import { NameList } from "./task.jsx"

afterEach(() => {
  cleanup()
})

describe("04-name-list", () => {
  it("shows one row per name", () => {
    const view = render(<NameList names={["Ana", "Luis"]} />)
    const items = view.getAllByRole("listitem")
    assert.deepEqual(
      items.map((item) => item.textContent),
      ["Ana", "Luis"]
    )
  })
})
