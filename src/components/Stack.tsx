import { skills } from '../content'
import { useReveal } from '../hooks'
import SectionHead from './SectionHead'

function Group({ group, items }: { group: string; items: string[] }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="stack-row reveal" ref={ref}>
      <h3 className="stack-row__label">{group}</h3>
      <ul className="stack-row__items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <SectionHead num="03" title="Stack" blurb="Tools I reach for, grouped by what they're for." />
        <div className="stack">
          {skills.map((s) => (
            <Group key={s.group} group={s.group} items={s.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
