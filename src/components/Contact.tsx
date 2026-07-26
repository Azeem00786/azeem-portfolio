import { profile } from '../content'
import { useCopy, useReveal } from '../hooks'
import SectionHead from './SectionHead'

export default function Contact() {
  const { copied, copy } = useCopy()
  const ref = useReveal<HTMLDivElement>()

  const subject = encodeURIComponent('Project enquiry')
  const body = encodeURIComponent(
    "Hi Azeem,\n\nWe're looking for help with:\n\nTimeline:\nBudget range:\n\n",
  )

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <SectionHead
          num="05"
          title="Let's build something"
          blurb="Agencies, founders and product teams — tell me what you're shipping and I'll tell you how I'd help."
        />

        <div className="contact__body reveal" ref={ref}>
          <a
            className="contact__mail"
            href={`mailto:${profile.email}?subject=${subject}&body=${body}`}
          >
            {profile.email}
          </a>

          <div className="contact__actions">
            <button className="btn btn--primary" onClick={() => copy(profile.email)}>
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn ↗
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub ↗
            </a>
            <a className="btn btn--ghost" href={profile.resume} download>
              Résumé ↓
            </a>
          </div>

          <ul className="contact__facts">
            <li>
              <span className="mono-tag">based</span>
              {profile.location}
            </li>
            <li>
              <span className="mono-tag">hours</span>
              {profile.timezone} — flexible for EU / US overlap
            </li>
            <li>
              <span className="mono-tag">status</span>
              {profile.availabilityNote}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
