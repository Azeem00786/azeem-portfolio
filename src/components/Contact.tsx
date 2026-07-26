import { bookingHref, bookingIsScheduler, profile } from '../content'
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

          <a className="contact__phone" href={profile.phoneHref}>
            {profile.phone}
          </a>

          <div className="contact__actions">
            <a
              className="btn btn--primary"
              href={bookingHref}
              {...(bookingIsScheduler ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            >
              Book a call →
            </a>
            <a
              className="btn"
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp ↗
            </a>
            <button className="btn" onClick={() => copy(profile.email)}>
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
            <li>
              <span className="mono-tag">calls</span>
              15-minute intro call, any hour that suits your timezone
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
