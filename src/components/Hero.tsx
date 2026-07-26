import { profile, stats } from '../content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />

      <div className="wrap hero__inner">
        <div className="hero__status">
          <span className={`dot ${profile.available ? 'dot--live' : ''}`} aria-hidden="true" />
          <span>{profile.availabilityNote}</span>
          <span className="hero__status-sep">/</span>
          <span>{profile.timezone}</span>
        </div>

        <h1 className="hero__name">
          Mohammad
          <br />
          <span className="hero__name-accent">Azeem</span>
        </h1>

        <p className="hero__role">
          <span className="mono-tag">role</span>
          {profile.role}
        </p>

        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#contact">
            Start a project
          </a>
          <a className="btn" href="#work">
            See the work
          </a>
          <a className="btn btn--ghost" href={profile.resume} download>
            Résumé ↓
          </a>
        </div>

        <dl className="hero__stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="stat__value">{s.value}</dt>
              <dd className="stat__label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
