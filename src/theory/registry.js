export const TOPICS = [
  {
    id: "what-react",
    category: "0 · Start",
    title: "What React is",
    plainEnglish:
      "React is a library that builds UI from components. You describe what the screen should look like for the current data. When data changes, React updates the DOM that changed.",
    steps: [
      "You write components, which are functions that return UI.",
      "Data in, UI out. Same data should produce the same UI.",
      "React keeps a description of the UI and updates the real DOM for you.",
      "It is not a full backend, not a router, and not a design system by itself.",
    ],
    atPrime:
      "The design system is a set of React components other teams import. You still only describe UI. Product teams pass props. React updates the button, field, or dialog when those props change.",
    sayOutLoud:
      "React lets me build UI as functions of data. I change state or props, and React re-renders the pieces that depend on that data.",
    questions: [
      {
        q: "What does React mainly do?",
        options: [
          "It stores files in a database",
          "It replaces HTML and CSS",
          "It builds UI from data and updates the DOM when that data changes",
          "It compiles TypeScript",
        ],
        correctIndex: 2,
        why: "React's job is the UI layer: describe it, then update it when data changes.",
      },
      {
        q: "A component's job is to…",
        options: [
          "Turn current props and state into UI",
          "Own the whole application database",
          "Replace the browser",
          "Run only once when the server starts",
        ],
        correctIndex: 0,
        why: "A component is a function of its inputs. New inputs, new UI.",
      },
    ],
  },
  {
    id: "jsx",
    category: "1 · Basics",
    title: "JSX and components",
    plainEnglish:
      "JSX looks like HTML inside JavaScript. It compiles to React elements. A component is a function whose name starts with a capital letter. <Button /> means “call Button and use what it returns.”",
    steps: [
      "Lowercase tags like <div> are host elements. Capitalized tags are your components.",
      "JSX must return one parent, or a fragment <>...</>.",
      "Use className, not class. Use htmlFor, not for.",
      "Put JavaScript inside curly braces: {label}.",
    ],
    atPrime:
      "A shared Button is a component. Teams write <Button variant=\"primary\">Save</Button>. Inside, you return a real <button>. That is the public API of the library.",
    sayOutLoud:
      "JSX is syntax for describing elements. A component is a function that returns those elements. Consumers pass props. We return a button, not a div pretending to be one.",
    questions: [
      {
        q: "Why is the component written <Button /> and not <button /> when it is your component?",
        options: [
          "Lowercase is faster",
          "A capital name tells React this is your component, not a DOM tag",
          "It does not matter",
          "Capital letters are required by HTML",
        ],
        correctIndex: 1,
        why: "React treats lowercase names as DOM tags and capitalized names as components.",
      },
    ],
  },
  {
    id: "props",
    category: "1 · Basics",
    title: "Props",
    plainEnglish:
      "Props are inputs a parent passes to a child. The child reads them. The child does not change the parent's props. If the parent passes a new value, the child renders again.",
    steps: [
      "Props are read-only in the child.",
      "Anything can be a prop: string, number, function, element.",
      "children is the prop for what sits between the tags.",
      "Default values can live in the function parameters.",
    ],
    atPrime:
      "variant, disabled, and onClick are props of Button. Product teams own the data. The design system owns how those props look and behave. You document that API so other teams do not guess.",
    sayOutLoud:
      "Props flow down. I treat them as read-only. If a parent needs a new value, the parent updates its own state and passes a new prop.",
    questions: [
      {
        q: "Who should change a prop value?",
        options: [
          "The child, by writing props.label = \"new\"",
          "The parent that passed it, by passing a new value",
          "The CSS file",
          "The browser, on every hover",
        ],
        correctIndex: 1,
        why: "Props are immutable inputs. The parent sends the next value.",
      },
    ],
  },
  {
    id: "state",
    category: "2 · State and hooks",
    title: "What state is",
    plainEnglish:
      "State is data that can change over time inside a component. When you update state, React renders that component again so the screen matches the new data.",
    steps: [
      "Props come from the parent. State is owned here.",
      "Use it for values that change: open dialog, input text, selected tab.",
      "Do not put a value in state if you can calculate it from props.",
      "Never change state by mutating the object or array you already have. Pass a new value.",
    ],
    atPrime:
      "A controlled TextField keeps the string in the parent's state. The design system component receives value and onChange. The library does not secretly store a second copy of the same text.",
    sayOutLoud:
      "State is the component's own changing data. Updating it schedules a re-render. I replace state, I do not mutate it.",
    questions: [
      {
        q: "What happens after you update state correctly?",
        options: [
          "The file is saved to git",
          "Nothing, until you refresh",
          "React re-renders so the UI can show the new data",
          "The component is deleted and the page reloads",
        ],
        correctIndex: 2,
        why: "setState exists so the UI updates. A manual reload is not required.",
      },
      {
        q: "Which update is correct for an array in state?",
        options: [
          "Create a new array, for example with filter or the spread syntax, and pass that to the setter",
          "Push into the existing array and hope React notices",
          "Edit the array, then do nothing",
          "Store the array on window",
        ],
        correctIndex: 0,
        why: "React looks at the next value you pass. Mutating the old array can skip an update.",
      },
    ],
  },
  {
    id: "hooks",
    category: "2 · State and hooks",
    title: "What a hook is",
    plainEnglish:
      "A hook is a function whose name starts with use. It lets a component use React features like state or effects. useState and useEffect are hooks. So is a custom useToggle you write.",
    steps: [
      "Call hooks at the top level of the component. Not inside if, for, or a nested function.",
      "Call them only from React components or from other hooks.",
      "React matches each hook call to the previous render by order. That is why the order must stay the same.",
      "Custom hooks are just functions that call other hooks, so you can reuse behavior.",
    ],
    atPrime:
      "A complex Select might use useId for a stable label id, useState for the open menu, and a custom useControllable for value/onChange. Those stay at the top of the component so every team gets the same behavior.",
    sayOutLoud:
      "Hooks are functions that connect a component to React. I call them unconditionally at the top. A custom hook is how we share logic without copying it into every component.",
    questions: [
      {
        q: "Which call is allowed?",
        options: [
          "useState inside a random helper that is not a component or a hook",
          "useState inside an if, only when the dialog is open",
          "useState after an early return, sometimes",
          "useState at the top of the component, on every render",
        ],
        correctIndex: 3,
        why: "The rules of hooks keep the call order stable between renders.",
      },
      {
        q: "Why can't the order of hook calls change between renders?",
        options: [
          "React pairs each call with the previous one by position",
          "Browsers reject functions named use",
          "TypeScript forbids it only on Tuesdays",
          "It is a style choice with no runtime effect",
        ],
        correctIndex: 0,
        why: "There is no name lookup. Position is the identity of that piece of state.",
      },
    ],
  },
  {
    id: "usestate",
    category: "2 · State and hooks",
    title: "useState",
    plainEnglish:
      "useState(initial) returns the current value and a setter. Call the setter with the next value, or with a function that receives the previous value. React then re-renders.",
    steps: [
      "const [open, setOpen] = useState(false)",
      "The initial value is used on the first render only.",
      "If the next value depends on the previous one, use setCount((n) => n + 1).",
      "Setting the same value will not bother to re-render.",
    ],
    atPrime:
      "An uncontrolled accordion can keep open in useState. A controlled one receives open and onOpenChange instead. The interview often asks which one the library should support. Mature components support both.",
    sayOutLoud:
      "useState gives me a value and a setter. I use the functional setter when the next value depends on the previous one, so I don't close over a stale number.",
    questions: [
      {
        q: "When does the argument to useState(0) run as the initial state?",
        options: [
          "On every render",
          "On the first render",
          "Only when you call the setter",
          "On unmount",
        ],
        correctIndex: 1,
        why: "Later renders reuse the stored state. The initial argument is ignored after mount.",
      },
    ],
  },
  {
    id: "lifecycle",
    category: "3 · Lifecycle",
    title: "Component lifecycle",
    plainEnglish:
      "A component is mounted (added), updated (rendered again because props or state changed), then unmounted (removed). Class components had lifecycle methods. Function components use useEffect for the same moments.",
    steps: [
      "Mount: first render, then effects run.",
      "Update: render again. Effects re-run only if their dependencies changed. The previous effect's cleanup runs first.",
      "Unmount: cleanup runs, then the component is gone.",
      "Class names you might still hear: componentDidMount, componentDidUpdate, componentWillUnmount.",
    ],
    atPrime:
      "A Tooltip measures position after it mounts, updates that position when the anchor moves, and removes listeners when it unmounts. That is the lifecycle, even though we write it as one effect plus a cleanup function.",
    sayOutLoud:
      "Mount, update, unmount. In function components I express that with useEffect: setup after paint, cleanup when deps change or the component goes away.",
    questions: [
      {
        q: "Which list is the lifecycle in the right order?",
        options: [
          "Unmount, then mount, then update",
          "Update, then mount",
          "Mount, then updates, then unmount",
          "Only unmount matters",
        ],
        correctIndex: 2,
        why: "The component appears, may render again, then leaves the screen.",
      },
      {
        q: "componentWillUnmount maps to which function-component idea?",
        options: [
          "The JSX return",
          "useState's initial value",
          "A click handler",
          "The cleanup function returned from useEffect",
        ],
        correctIndex: 3,
        why: "Cleanup is how you drop listeners and timers when the component leaves.",
      },
    ],
  },
  {
    id: "useeffect",
    category: "3 · Lifecycle",
    title: "useEffect",
    plainEnglish:
      "useEffect runs after the browser paints. Use it for things that are not pure rendering: subscriptions, timers, talking to a system outside React. The dependency array says when to re-run.",
    steps: [
      "No array: runs after every render. Rarely what you want.",
      "Empty array []: runs after mount, cleanup on unmount.",
      "[query]: runs when query changes. Cleanup runs before the next run and on unmount.",
      "Do not put the effect in the render body. That would run during render.",
    ],
    atPrime:
      "A docs search that fetches examples should fetch in an effect when the query changes, and ignore the response if the user already typed something else. That ignore flag belongs in the cleanup.",
    sayOutLoud:
      "useEffect is for side effects after paint. The dependency list is the contract: re-run when these values change, and clean up the previous run.",
    questions: [
      {
        q: "useEffect(fn, []) runs the setup…",
        options: [
          "During render, every time",
          "After the first paint, and the cleanup on unmount",
          "Only when props change",
          "Before the component function is called",
        ],
        correctIndex: 1,
        why: "An empty dependency list means mount and unmount.",
      },
      {
        q: "You fetch on query. Where do you ignore an old response?",
        options: [
          "In JSX",
          "By mutating props",
          "In the effect cleanup, so a stale response does not call setState",
          "In the CSS file",
        ],
        correctIndex: 2,
        why: "Cleanup runs before the effect runs again. That is the place to cancel or ignore the previous request.",
      },
    ],
  },
  {
    id: "events",
    category: "4 · Events and JavaScript",
    title: "How an event is handled",
    plainEnglish:
      "You pass a function to an event prop. React calls it when the event happens. onClick={handleClick} passes the function. onClick={handleClick()} calls it now, during render, which is wrong.",
    steps: [
      "The handler receives an event. event.target is the node that was actually clicked or typed in.",
      "event.currentTarget is the node the listener is attached to.",
      "For inputs, read event.target.value.",
      "event.preventDefault() stops the browser default, like a form submit.",
      "In React 17 and later, event fields still work after an await. The old event pooling story is outdated.",
    ],
    atPrime:
      "Button takes onClick. If disabled or loading, we do not call the consumer's handler. TextField takes onChange and forwards the next string, or the event, the same way on every screen so teams are not surprised.",
    sayOutLoud:
      "I pass the function, I don't call it in JSX. Inside the handler I read the event, and I block the action when the control is disabled.",
    questions: [
      {
        q: "Which JSX wires the handler correctly?",
        options: [
          "<button onClick={handleClick()}>Save</button>",
          "<button onclick=\"handleClick\">Save</button>",
          "<button handleClick={Save}>Save</button>",
          "<button onClick={handleClick}>Save</button>",
        ],
        correctIndex: 3,
        why: "You pass the function. Parentheses would run it during render.",
      },
      {
        q: "On a TextField change, where is the typed string?",
        options: [
          "event.target.value",
          "event.value in every React version by default",
          "event.currentTarget.innerHTML always",
          "props.children",
        ],
        correctIndex: 0,
        why: "The DOM input stores the text on target.value.",
      },
    ],
  },
  {
    id: "hoisting",
    category: "4 · Events and JavaScript",
    title: "Hoisting",
    plainEnglish:
      "JavaScript registers declarations before running the lines, but not all declarations behave the same. var and function declarations are hoisted. let and const exist in a temporal dead zone until their line runs. Using them earlier throws.",
    steps: [
      "function greet() {} can be called earlier in the same scope.",
      "var x is hoisted and starts as undefined. A use before the line logs undefined, it does not throw.",
      "let and const throw if you touch them before the declaration line. That window is the temporal dead zone.",
      "const and let are block scoped. var is function scoped.",
    ],
    atPrime:
      "In a component file, keep helpers as function declarations or as consts above the component. Don't reference a const component before its line and then tell review it \"should hoist\". It won't.",
    sayOutLoud:
      "Function declarations are hoisted. var is hoisted as undefined. let and const are not usable before their line — that is the temporal dead zone.",
    questions: [
      {
        q: "What happens if you read a const before its line in the same scope?",
        options: [
          "It is undefined, like var",
          "It is null",
          "It throws, because of the temporal dead zone",
          "It becomes a global",
        ],
        correctIndex: 2,
        why: "const and let are hoisted into the scope but stay uninitialized until the declaration.",
      },
      {
        q: "Which declaration can you call before its line in the same scope, without an error?",
        options: [
          "const arrow = () => {}",
          "let fn = function () {}",
          "A class used before its line, in the usual case",
          "A function declaration: function fn() {}",
        ],
        correctIndex: 3,
        why: "Function declarations are initialized during hoisting. const arrows are not.",
      },
    ],
  },
  {
    id: "stale",
    category: "4 · Events and JavaScript",
    title: "Closures and stale state",
    plainEnglish:
      "A function remembers the variables from the render that created it. If a timeout or effect captured count from an old render, it still sees that old count. That is a stale closure.",
    steps: [
      "Each render has its own props and state.",
      "A handler created in that render sees that render's values.",
      "Fix a stale update with the functional setter: setCount((n) => n + 1).",
      "Fix a stale effect by listing the values it uses in the dependency array.",
    ],
    atPrime:
      "A debounce inside a search field is a classic stale bug: the timer calls onChange with the query from three keystrokes ago. We clear the timer in cleanup and read the latest value, or store the latest callback in a ref.",
    sayOutLoud:
      "Closures capture the render they were born in. If I need the next state from the previous one, I use the functional setter so I don't freeze an old number.",
    questions: [
      {
        q: "A click handler does setCount(count + 1) twice in a row from the same render. What do you expect?",
        options: [
          "Both updates see the same count, so you may only gain 1 unless you use the functional form",
          "It always adds 2",
          "React throws",
          "count becomes a string",
        ],
        correctIndex: 0,
        why: "Both calls close over the same count. setCount((n) => n + 1) twice does add 2.",
      },
    ],
  },
  {
    id: "keys",
    category: "5 · UI patterns",
    title: "Lists and keys",
    plainEnglish:
      "When you render an array, each item needs a stable key so React can match the same item across renders. The key should be an id from the data, not the array index, if the list can reorder, insert, or delete.",
    steps: [
      "key goes on the element inside the map, not on a component inside that element only.",
      "Keys must be unique among siblings.",
      "Index keys break state when the list changes order. Inputs show the wrong value.",
      "Do not generate a random key during render. That remounts the item every time.",
    ],
    atPrime:
      "A component gallery and a Select menu are lists. If option ids swap but you keyed by index, the highlighted row and focus land on the wrong option. We key by the option id.",
    sayOutLoud:
      "I key list items with a stable id. Index keys are a last resort for a static list that never reorders.",
    questions: [
      {
        q: "Why are index keys risky in a reorderable list?",
        options: [
          "Indexes are illegal in React",
          "They are slower to type",
          "React requires keys to be UUIDs only",
          "React thinks the item at that index is the same one, so state sticks to the wrong row",
        ],
        correctIndex: 3,
        why: "The key is the identity. An index changes meaning when the list changes.",
      },
    ],
  },
  {
    id: "controlled",
    category: "5 · UI patterns",
    title: "Controlled vs uncontrolled",
    plainEnglish:
      "A controlled input's value lives in React state. The input shows that value, and onChange updates the state. An uncontrolled input keeps the value in the DOM. You read it with a ref when you need it.",
    steps: [
      "Controlled: value={text} onChange={(e) => setText(e.target.value)}",
      "Uncontrolled: defaultValue plus a ref, or just let the DOM hold it.",
      "Do not switch an input from uncontrolled to controlled by setting value from undefined to a string later.",
      "Design-system fields often support both: they are controlled when value is passed.",
    ],
    atPrime:
      "Product forms want controlled TextFields so they can validate while typing. A Storybook example might use defaultValue so the story stays short. The component must document which mode it is in.",
    sayOutLoud:
      "Controlled means React owns the value. Uncontrolled means the DOM owns it. I don't flip between them on the same input.",
    questions: [
      {
        q: "What makes an input controlled?",
        options: [
          "Adding a placeholder",
          "Using a class component",
          "Passing value and updating it from onChange",
          "Giving it an id",
        ],
        correctIndex: 2,
        why: "The React value prop is the source of truth. The DOM displays it.",
      },
    ],
  },
  {
    id: "typescript",
    category: "6 · Design-system skills",
    title: "TypeScript component props",
    plainEnglish:
      "You describe the component's public API as a type. Callers then get autocomplete and errors when they pass the wrong variant. This role expects you to write those types, not only reuse ones someone else wrote.",
    steps: [
      "type ButtonProps = { variant?: \"primary\" | \"secondary\" | \"ghost\"; disabled?: boolean; children: React.ReactNode; onClick?: () => void }",
      "A union is safer than string for variant. Unknown variants fail at compile time.",
      "Extend native button props when you forward them: React.ButtonHTMLAttributes<HTMLButtonElement>.",
      "Omit native fields you override, so disabled or children don't collide.",
    ],
    atPrime:
      "Every shared component has a typed props export next to the component. Reviewers reject any and object for the public API. Consumers in other repos depend on that type.",
    sayOutLoud:
      "I type the props myself. Variants are a union, children is ReactNode, and events are real function types. That is the contract other teams compile against.",
    questions: [
      {
        q: "Which prop type matches a Button that only allows three variants?",
        options: [
          "variant?: string",
          "variant?: \"primary\" | \"secondary\" | \"ghost\"",
          "variant?: any",
          "variant?: object",
        ],
        correctIndex: 1,
        why: "A union documents the real API and rejects typos like \"primry\" in the editor.",
      },
    ],
  },
  {
    id: "a11y",
    category: "6 · Design-system skills",
    title: "Accessibility",
    plainEnglish:
      "Accessible components use the right HTML element, a name that assistive tech can read, and keyboard support. A div with onClick is not a button. WCAG is the checklist. ARIA fills gaps. It does not replace a native element when one exists.",
    steps: [
      "Prefer <button>, <a>, <input>, <label> over div and span.",
      "Every control needs an accessible name: text content, aria-label, or a label element.",
      "Keyboard: Tab to reach it, Enter or Space to activate a button, Escape to close a dialog.",
      "Don't remove focus outlines unless you replace them with a visible focus style.",
    ],
    atPrime:
      "The library is where accessibility is implemented once. If Button is a real button with a visible focus ring, every product team gets that for free. If you ship a div, every team inherits the bug.",
    sayOutLoud:
      "I start with semantic HTML. I add ARIA only when the native element is not enough. Name, role, and keyboard behavior are the three things I check before review.",
    questions: [
      {
        q: "What should a clickable Save control be?",
        options: [
          "A div with a click listener",
          "A <button type=\"button\">",
          "An anchor with href=\"#\"",
          "A span with role=\"button\" as the first choice",
        ],
        correctIndex: 1,
        why: "A real button already has keyboard support and a role. type=\"button\" avoids submitting a form.",
      },
    ],
  },
  {
    id: "mui",
    category: "6 · Design-system skills",
    title: "MUI, theme, and variants",
    plainEnglish:
      "MUI is a React component set plus a theme. ThemeProvider puts colors, spacing, and typography in context. Components read those tokens. sx is a style prop. styled and the theme's component overrides are how a design system customizes MUI without copying every component.",
    steps: [
      "ThemeProvider wraps the app once.",
      "theme.palette.primary.main is a token, not a random hex in every file.",
      "variant on a MUI component selects a prepared style, the same idea as your drill.",
      "Emotion is the CSS-in-JS engine under current MUI. styled-components knowledge transfers.",
      "Don't fight the theme with one-off inline styles on every screen if the token already exists.",
    ],
    atPrime:
      "PRIME likely wraps MUI: one theme, shared variants, and a thin API so product teams don't each invent a button. Your job is to extend those components from a Figma spec and keep the theme as the source of color and spacing.",
    sayOutLoud:
      "MUI gives the components and the theme. I put brand decisions in the theme, expose a small variant API, and use sx or styled for one-off layout — not a new button per team.",
    questions: [
      {
        q: "Where should a brand color live so every component can use it?",
        options: [
          "Copied as a hex string inside each component",
          "Only in a Figma comment",
          "In the MUI theme, then read as a token",
          "In localStorage",
        ],
        correctIndex: 2,
        why: "The theme is the shared source. Components read tokens so a brand change happens once.",
      },
    ],
  },
  {
    id: "testing",
    category: "6 · Design-system skills",
    title: "Jest and React Testing Library",
    plainEnglish:
      "Tests check behavior a user can see, not private state. React Testing Library renders the component, finds it by role or label, and fires clicks and typing. Jest (or the test runner) asserts the result.",
    steps: [
      "Prefer getByRole(\"button\", { name: \"Save\" }) over querying a class.",
      "Use userEvent for clicks and typing when you can.",
      "Assert what changed on screen, or that a callback was called.",
      "A visual regression test takes a screenshot and fails when pixels change. You don't start there. Unit and interaction tests come first.",
    ],
    atPrime:
      "Every shared component needs tests before merge: disabled does not call onClick, the accessible name is present, the variant text shows. Storybook can host visual tests later. Reviewers ask for the test in the same PR as the component.",
    sayOutLoud:
      "I test what the user does. I query by role and name, click, and assert the outcome. I don't test implementation details like useState variable names.",
    questions: [
      {
        q: "What is the better query for a Save button?",
        options: [
          "getByRole(\"button\", { name: \"Save\" })",
          "container.querySelector(\".btn-3\")",
          "getByTestId as the first choice when a role exists",
          "Checking the hook's private variable",
        ],
        correctIndex: 0,
        why: "Role and name match how assistive tech and users find the control.",
      },
    ],
  },
  {
    id: "rerender",
    category: "5 · UI patterns",
    title: "Re-renders and memo",
    plainEnglish:
      "A component re-renders when its state changes, its props change, or its parent re-renders. That is normal. useMemo and useCallback save a value or function when the inputs did not change. They are not the first fix for a slow screen.",
    steps: [
      "Measure before memoizing. Most components are cheap.",
      "useMemo(fn, deps) caches a calculated value.",
      "useCallback(fn, deps) caches a function so a memoized child does not see a new prop every time.",
      "React.memo skips a child render when its props are the same by shallow compare.",
    ],
    atPrime:
      "A data grid or a heavy chart inside the docs site might need memo. A Button does not. In review, wrapping everything in useCallback is noise. Explain which child was re-rendering too often.",
    sayOutLoud:
      "Re-renders are how React works. I memoize when a measured child is expensive and its props are unstable, not by default.",
    questions: [
      {
        q: "When is useCallback most useful?",
        options: [
          "On every function, always",
          "When a memoized child would re-render only because it received a new function prop",
          "To make state update faster than setState",
          "To replace keys in a list",
        ],
        correctIndex: 1,
        why: "The cached function keeps the child's props stable. Alone, it does not speed up the parent.",
      },
    ],
  },
  {
    id: "review",
    category: "6 · Design-system skills",
    title: "Code review on a shared library",
    plainEnglish:
      "A design-system PR is used by other teams, so the review is stricter than a one-screen feature. You check the public API, accessibility, tests, docs, and whether the change belongs in the theme or in one product.",
    steps: [
      "Is the prop name consistent with existing components?",
      "Can keyboard and screen-reader users complete the task?",
      "Is there a test for the bug or the new behavior?",
      "Did we document the variant and an example?",
      "Is this a breaking change? If yes, it needs a version bump and a note. Semver: breaking is major, a new feature is minor, a fix is patch.",
    ],
    atPrime:
      "You will open and review PRs with the tech lead and seniors. A new prop that only one product needs might stay in that product. A pattern three teams copy belongs in the library, with tests and a Storybook example.",
    sayOutLoud:
      "In review I look at API consistency, accessibility, tests, and whether the change is breaking. Shared components are harder to undo because other teams already imported them.",
    questions: [
      {
        q: "A change removes a prop other teams already use. What kind of version change is that?",
        options: [
          "Patch, because the diff is small",
          "No version change if the component still compiles for you",
          "Minor, because it is a feature",
          "Major, because it is a breaking change",
        ],
        correctIndex: 3,
        why: "Removing or renaming public API breaks consumers. That is a major bump plus a migration note.",
      },
    ],
  },
]
