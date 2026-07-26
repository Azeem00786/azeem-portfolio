import { experience } from '../content'
import { useReveal } from '../hooks'
import SectionHead from './SectionHead'

function Entry({ item }: { item: (typeof experience)[number] }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="exp reveal" ref={ref}>
      <div className="exp__when">
        <span className="exp__period">{item.period}</span>
        <span className="exp__place">{item.place}</span>
      </div>
      <div className="exp__what">
        <h3 className="exp__role">{item.role}</h3>
        <p className="exp__org">{item.org}</p>
        <ul className="exp__points">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="wrap">
        <SectionHead
          num="04"
          title="Background"
          blurb="Four years inside a product company — testing it, releasing it, then building it. That's where the delivery discipline comes from."
        />

        <div className="exp-list">
          {experience.map((e) => (
            <Entry key={e.role} item={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
