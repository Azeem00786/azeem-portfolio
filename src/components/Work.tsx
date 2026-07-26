import { useState } from 'react'
import { projects, type Project } from '../content'
import SectionHead from './SectionHead'

function Row({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.featured === true)
  const panelId = `panel-${project.id}`

  // Deliberately not scroll-revealed: rows are clickable, and a row still
  // faded to opacity 0 would expand into blank space when toggled open.
  return (
    <article className={`proj ${open ? 'is-open' : ''}`}>
      <button
        className="proj__head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="proj__index">{project.index}</span>
        <span className="proj__title">{project.title}</span>
        <span className="proj__kind">{project.kind}</span>
        <span className="proj__year">{project.year}</span>
        <span className="proj__toggle" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>

      <div className="proj__panel" id={panelId} hidden={!open}>
        <div className="proj__panel-inner">
          <p className="proj__summary">{project.summary}</p>

          <ul className="proj__detail">
            {project.detail.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <div className="proj__meta">
            <ul className="chips">
              {project.stack.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>

            {project.link && (
              <a
                className="proj__link"
                href={project.link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
            {project.note && <p className="proj__note">{project.note}</p>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Selected work"
          blurb="Products in production — live web platforms, store-published apps, and the admin panels and pipelines behind them."
        />
        <div className="proj-list">
          {projects.map((p) => (
            <Row key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
