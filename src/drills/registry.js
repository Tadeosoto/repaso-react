export const DRILLS = [
  {
    id: "01-status-text",
    title: "1 · Show a message",
    level: "Easy",
    duration: "15m",
    file: "drills/01-status-text/task.jsx",
    lesson: "A component is a function that returns JSX. The name in the tag must start with a capital letter.",
    example: `function Hello() {
  return <p>Hi</p>
}`,
    story: "A small status line under a form should show whatever message the parent passes in.",
    steps: [
      "Finish StatusText in task.jsx.",
      "It receives message.",
      "Render that message inside a <p>.",
      "StatusText message=\"Saved\" shows the text Saved.",
    ],
    tip: "Put the prop between the tags with curly braces.",
    tipCode: `function Hello() {
  return <p>Hi</p>
}`,
  },
  {
    id: "02-button-label",
    title: "2 · Button label",
    level: "Easy",
    duration: "15m",
    file: "drills/02-button-label/task.jsx",
    lesson: "Props are the inputs. The parent passes them. The component reads them. It does not change them.",
    example: `function Greeting({ name }) {
  return <p>Hi {name}</p>
}

<Greeting name="Ana" />`,
    story: "Every shared button shows the label the screen passed in. It must be a real button, not a div.",
    steps: [
      "Finish PrimeButton.",
      "It receives label.",
      "Return a <button type=\"button\"> whose text is label.",
      "The button name a user sees is Save when label is \"Save\".",
    ],
    tip: "type=\"button\" keeps it from submitting a form.",
    tipCode: `<button type="button">Hi</button>`,
  },
  {
    id: "03-loading-label",
    title: "3 · Loading text",
    level: "Easy",
    duration: "15m",
    file: "drills/03-loading-label/task.jsx",
    lesson: "You can choose what to render with if. One branch returns one element. The other branch returns the other.",
    example: `function Door({ open }) {
  if (open) return <p>Open</p>
  return <p>Shut</p>
}`,
    story: "While a save is running, the control should say Loading... instead of the normal label.",
    steps: [
      "Finish LoadingLabel. It receives loading and label.",
      "When loading is true, show the text Loading...",
      "When loading is false, show label.",
      "Use a <p> for either text.",
    ],
    tip: "Check loading first. Return early.",
    tipCode: `if (open) return <p>Open</p>`,
  },
  {
    id: "04-name-list",
    title: "4 · Render a list",
    level: "Easy",
    duration: "20m",
    file: "drills/04-name-list/task.jsx",
    lesson: "map walks an array and returns a new array. In React, each item needs a key so React can tell the rows apart.",
    example: `const scores = [1, 2]
scores.map((score) => score * 2)
// [2, 4]`,
    story: "A docs page gets an array of names and should show one row per name.",
    steps: [
      "Finish NameList. It receives names, an array of strings.",
      "Render a <ul>.",
      "Inside it, one <li> per name. Use the name as the key.",
      "[\"Ana\", \"Luis\"] shows those two rows.",
    ],
    tip: "key goes on the <li>, the element you return from map.",
    tipCode: `scores.map((score) => score)`,
  },
  {
    id: "05-save-click",
    title: "5 · Handle a click",
    level: "Easy",
    duration: "15m",
    file: "drills/05-save-click/task.jsx",
    lesson: "onClick wants the function itself. Parentheses would call it while rendering, which is too early.",
    example: `function Bell({ onRing }) {
  return <button type="button" onClick={onRing}>Ring</button>
}`,
    story: "The Save button does not know how to save. The parent passes a function. The button only calls it when the user clicks.",
    steps: [
      "Finish SaveButton. It receives onSave.",
      "Render a button whose text is Save.",
      "When the user clicks, call onSave.",
      "Do not call onSave while the component is rendering.",
    ],
    tip: "onClick={onSave} passes the function. onClick={onSave()} calls it now.",
    tipCode: `<button type="button" onClick={onRing}>Ring</button>`,
  },
  {
    id: "06-counter",
    title: "6 · Count with state",
    level: "Easy",
    duration: "20m",
    file: "drills/06-counter/task.jsx",
    lesson: "useState gives you a value and a setter. Calling the setter asks React to render again with the new value.",
    example: `const [open, setOpen] = useState(false)

setOpen(true)`,
    story: "A small counter on a story page starts at 0. Each click of Add goes up by one.",
    steps: [
      "Finish Counter.",
      "Start the count at 0.",
      "Show the number as text.",
      "A button named Add adds 1 each click.",
    ],
    tip: "If the next number depends on the current one, use the setter function form: setCount((n) => n + 1).",
    tipCode: `const [open, setOpen] = useState(false)`,
  },
  {
    id: "07-name-field",
    title: "7 · Controlled input",
    level: "Easy",
    duration: "20m",
    file: "drills/07-name-field/task.jsx",
    lesson: "A controlled input shows React state. The typed text lives in state. onChange writes the next value.",
    example: `const [open, setOpen] = useState(false)`,
    story: "A name field should show exactly what the person typed. The text is not stuck in the DOM by itself.",
    steps: [
      "Finish NameField.",
      "Keep the text in useState. Start with \"\".",
      "Render an input whose value is that state.",
      "When the input changes, save event.target.value.",
    ],
    tip: "value={text} and onChange together make it controlled.",
    tipCode: `event.target.value`,
  },
  {
    id: "08-ready-effect",
    title: "8 · Run once on mount",
    level: "Easy",
    duration: "20m",
    file: "drills/08-ready-effect/task.jsx",
    lesson: "useEffect runs after paint. An empty dependency list means after the first paint, not on every update.",
    example: `useEffect(() => {
  console.log("ready")
}, [])`,
    story: "When a panel appears, it should tell the parent it is ready. Later re-renders must not send that notice again.",
    steps: [
      "Finish ReadyNote. It receives onReady.",
      "Call onReady once, after the first render.",
      "A later render with the same component must not call it again.",
      "You can return an empty <p>.",
    ],
    tip: "The empty array is the list of things that would make this run again. Nothing is in it.",
    tipCode: `useEffect(() => {
  console.log("ready")
}, [])`,
  },
  {
    id: "09-badge",
    title: "9 · Repeat · Badge",
    level: "Repeat",
    duration: "15m",
    file: "drills/09-badge/task.jsx",
    lesson: "Same idea as the button label. Props in, text on the screen. This one is a span, not a button.",
    example: `function Greeting({ name }) {
  return <p>Hi {name}</p>
}`,
    story: "A badge in the corner shows a short label such as New or Pro.",
    steps: [
      "Finish Badge. It receives text.",
      "Render a <span> with that text.",
      "Badge text=\"New\" shows New.",
    ],
    tip: "You already did this with a button. Change the tag.",
    tipCode: `<span>Hi</span>`,
  },
  {
    id: "10-details-toggle",
    title: "10 · Repeat · Show and hide",
    level: "Repeat",
    duration: "20m",
    file: "drills/10-details-toggle/task.jsx",
    lesson: "Same idea as the counter. State is a yes or no this time, not a number.",
    example: `const [open, setOpen] = useState(false)`,
    story: "A details block starts visible. One button hides it, and the same button shows it again.",
    steps: [
      "Finish DetailsToggle.",
      "Start visible.",
      "While it is visible, show a paragraph Details, and the button text is Hide.",
      "After a click, the paragraph is gone and the button text is Show.",
      "Another click brings the paragraph back.",
    ],
    tip: "One boolean is enough. Flip it on click.",
    tipCode: `setOpen((open) => !open)`,
  },
  {
    id: "11-fruit-list",
    title: "11 · Repeat · Another list",
    level: "Repeat",
    duration: "15m",
    file: "drills/11-fruit-list/task.jsx",
    lesson: "Same idea as the name list. map, a <ul>, one <li> per item, and a key.",
    example: `const scores = [1, 2]
scores.map((score) => score)`,
    story: "Another screen has fruits instead of names. The markup is the same.",
    steps: [
      "Finish FruitList. It receives fruits.",
      "Render a <ul> with one <li> per fruit.",
      "Use the fruit string as the key.",
      "[\"Apple\", \"Pear\"] shows those two rows.",
    ],
    tip: "One <li> per fruit, inside a <ul>.",
    tipCode: `scores.map((score) => score)`,
  },
  {
    id: "12-watch-name",
    title: "12 · Repeat · Effect when a prop changes",
    level: "Repeat",
    duration: "20m",
    file: "drills/12-watch-name/task.jsx",
    lesson: "If you list a value in the dependency array, the effect runs again when that value changes. It also runs on the first render.",
    example: `useEffect(() => {
  console.log(query)
}, [query])`,
    story: "A preview panel should report the current name when it first shows, and again only when the name changes.",
    steps: [
      "Finish WatchName. It receives name and onName.",
      "Call onName with the current name after render.",
      "Call it again when name changes.",
      "Do not call it again if the parent re-renders with the same name.",
    ],
    tip: "Put name in the dependency array. Call onName(name) inside the effect.",
    tipCode: `useEffect(() => {
  console.log(query)
}, [query])`,
  },
]
