import { JSDOM } from "jsdom"

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
})

const setGlobal = (key, value) => {
  Object.defineProperty(globalThis, key, {
    configurable: true,
    writable: true,
    value,
  })
}

setGlobal("window", dom.window)
setGlobal("document", dom.window.document)
setGlobal("navigator", dom.window.navigator)
setGlobal("HTMLElement", dom.window.HTMLElement)
setGlobal("Node", dom.window.Node)
setGlobal("IS_REACT_ACT_ENVIRONMENT", true)
