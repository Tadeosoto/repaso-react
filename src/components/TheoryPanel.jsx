import { useEffect, useState } from "react"
import { TOPICS } from "../theory/registry.js"

const TheoryPanel = ({ topicId, onSelect }) => {
  const topic = TOPICS.find((t) => t.id === topicId) || TOPICS[0]
  const [answers, setAnswers] = useState({})
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    setAnswers({})
  }, [topic.id])

  const handlePick = (qIndex, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }))
  }

  const handleSelect = (id) => {
    onSelect(id)
    setNavOpen(false)
  }

  const grouped = TOPICS.reduce((acc, t) => {
    const key = t.category || "Other"
    if (!acc[key]) acc[key] = []
    acc[key].push(t)
    return acc
  }, {})

  return (
    <div className="flex min-h-0 flex-1 flex-col md:flex-row">
      <div className="border-b border-slate-200 bg-white px-3 py-2 md:hidden">
        <button
          type="button"
          onClick={() => setNavOpen((open) => !open)}
          className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 text-left text-sm font-medium text-slate-800"
          aria-expanded={navOpen}
        >
          <span className="min-w-0 truncate">{topic.title}</span>
          <span className="ml-2 shrink-0 text-slate-500">{navOpen ? "Hide" : "Topics"}</span>
        </button>
        {navOpen && (
          <nav className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-slate-200 p-2">
            {Object.entries(grouped).map(([category, list]) => (
              <div key={category} className="mb-3 last:mb-0">
                <h2 className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {category}
                </h2>
                {list.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelect(t.id)}
                    className={
                      "block w-full rounded-lg px-3 py-2.5 text-left text-sm " +
                      (t.id === topic.id
                        ? "bg-prime-600 text-white"
                        : "text-slate-700 hover:bg-slate-100")
                    }
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>

      <aside className="hidden w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white md:block">
        <div className="border-b border-slate-200 bg-prime-800 p-4 text-white">
          <h1 className="text-lg font-bold">Mid React theory</h1>
          <p className="text-xs text-violet-100">Say it out loud · then check</p>
        </div>
        <nav className="flex flex-col gap-4 p-3">
          {Object.entries(grouped).map(([category, list]) => (
            <div key={category} className="flex flex-col gap-1">
              <h2 className="px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {category}
              </h2>
              {list.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelect(t.id)}
                  className={
                    "rounded px-2 py-1.5 text-left text-sm " +
                    (t.id === topic.id
                      ? "bg-prime-600 text-white"
                      : "text-slate-700 hover:bg-slate-100")
                  }
                >
                  {t.title}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-6 md:p-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <header className="border-b border-slate-200 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-prime-700">
              {topic.category}
            </p>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{topic.title}</h2>
          </header>

          <section className="rounded-lg border border-prime-100 bg-prime-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-prime-800">
              In plain English
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-800">{topic.plainEnglish}</p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
              Steps to remember
            </h3>
            <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-800">
              {topic.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-lg border border-violet-200 bg-violet-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-violet-900">
              How this shows up at PRIME
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-violet-950">{topic.atPrime}</p>
          </section>

          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-900">
              Say in the interview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-emerald-950">{topic.sayOutLoud}</p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Quick check
            </h3>
            {topic.questions.map((item, qIndex) => {
              const picked = answers[qIndex]
              const revealed = picked !== undefined
              const isCorrect = picked === item.correctIndex

              return (
                <div
                  key={qIndex}
                  className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-sm font-medium text-slate-900">
                    {qIndex + 1}. {item.q}
                  </p>
                  <div className="flex flex-col gap-2">
                    {item.options.map((opt, optIndex) => {
                      let styles = "border-slate-200 hover:bg-slate-50"
                      if (revealed && optIndex === item.correctIndex) {
                        styles = "border-green-500 bg-green-50"
                      } else if (revealed && optIndex === picked && !isCorrect) {
                        styles = "border-red-400 bg-red-50"
                      } else if (picked === optIndex) {
                        styles = "border-prime-600 bg-prime-50"
                      }

                      return (
                        <button
                          key={optIndex}
                          type="button"
                          onClick={() => handlePick(qIndex, optIndex)}
                          className={`min-h-11 rounded border px-3 py-2.5 text-left text-sm ${styles}`}
                        >
                          {String.fromCharCode(65 + optIndex)}. {opt}
                        </button>
                      )
                    })}
                  </div>
                  {revealed && (
                    <p className={"text-sm " + (isCorrect ? "text-green-700" : "text-red-700")}>
                      {isCorrect ? "Correct. " : "Not quite. "}
                      {item.why}
                    </p>
                  )}
                </div>
              )
            })}
          </section>
        </div>
      </main>
    </div>
  )
}

export default TheoryPanel
