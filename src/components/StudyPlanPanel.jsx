import { PLAN } from "../study/registry.js"

const StudyPlanPanel = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:gap-6 sm:p-6 md:p-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-prime-700">
          PRIME design system
        </p>
        <h1 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
          Start with the easy drills
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Each drill teaches one React idea, then asks you to use it in a component. You write the
          component in
          <code className="rounded bg-slate-100 px-1"> task.jsx</code>. JavaScript and TypeScript
          practice stays in your Boot.dev course. The theory tab is for questions an interviewer
          might ask out loud.
        </p>
      </header>

      {PLAN.map((block) => (
        <section key={block.id} className="rounded-lg border border-slate-200 bg-white p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">{block.title}</h2>
            <span className="text-xs text-slate-500">{block.time}</span>
          </div>
          <p className="mt-1 text-sm text-slate-600">{block.goal}</p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-800">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}

export default StudyPlanPanel
