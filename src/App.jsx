import { useState } from "react"
import StudyPlanPanel from "./components/StudyPlanPanel.jsx"
import DrillsPanel from "./components/DrillsPanel.jsx"
import TheoryPanel from "./components/TheoryPanel.jsx"
import { DRILLS } from "./drills/registry.js"
import { TOPICS } from "./theory/registry.js"

const TABS = [
  { id: "plan", label: "1 · Plan", short: "Plan" },
  { id: "drills", label: "2 · React drills", short: "Drills" },
  { id: "theory", label: "3 · Mid React theory", short: "Theory" },
]

const App = () => {
  const [tab, setTab] = useState("plan")
  const [drillId, setDrillId] = useState(DRILLS[0].id)
  const [topicId, setTopicId] = useState(TOPICS[0].id)

  return (
    <div className="flex h-full min-h-0 flex-col bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-3 py-2 backdrop-blur supports-[padding:max(0px)]:pt-[max(0.5rem,env(safe-area-inset-top))]">
        <div className="mb-2 sm:mb-0 sm:mr-2 sm:inline-block">
          <p className="text-xs font-semibold uppercase tracking-wide text-prime-700">
            PRIME components
          </p>
          <p className="text-xs text-slate-500">React drills · mid theory</p>
        </div>
        <nav
          className="-mx-1 flex gap-1 overflow-x-auto pb-1 sm:mx-0 sm:inline-flex sm:pb-0"
          aria-label="Main sections"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-current={tab === t.id ? "page" : undefined}
              className={
                "shrink-0 rounded-full px-3 py-2 text-sm font-medium transition " +
                (tab === t.id ? "bg-prime-700 text-white" : "text-slate-600 hover:bg-slate-100")
              }
            >
              <span className="sm:hidden">{t.short}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <div className="flex min-h-0 flex-1">
        {tab === "plan" && (
          <main className="flex-1 overflow-y-auto">
            <StudyPlanPanel />
          </main>
        )}
        {tab === "drills" && <DrillsPanel drillId={drillId} onSelect={setDrillId} />}
        {tab === "theory" && <TheoryPanel topicId={topicId} onSelect={setTopicId} />}
      </div>
    </div>
  )
}

export default App
