import { services } from '../content'
import { useReveal } from '../hooks'
import SectionHead from './SectionHead'

function Card({ item, i }: { item: (typeof services)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="card reveal" ref={ref} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
      <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
      <h3 className="card__title">{item.title}</h3>
      <p className="card__body">{item.body}</p>
      <ul className="chips chips--sm">
        {item.tags.map((t) => (
          <li className="chip" key={t}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="wrap">
        <SectionHead
          num="02"
          title="What I take on"
          blurb="Engagements I can own end-to-end, from first scoping call to store release."
        />
        <div className="card-grid">
          {services.map((s, i) => (
            <Card key={s.title} item={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
