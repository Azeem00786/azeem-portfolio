import { useEffect, useState } from 'react'
import { bookingHref, bookingIsScheduler, profile, sections } from '../content'
import { useActiveSection, useTheme } from '../hooks'

const ids = sections.map((s) => s.id)

export default function Nav() {
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__mark" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark-glyph">MA</span>
          <span className="nav__mark-name">{profile.name}</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link ${active === s.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav__link-num">{s.num}</span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary btn--sm nav__book"
            href={bookingHref}
            {...(bookingIsScheduler ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            Book a call
          </a>
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-btn nav__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? '✕' : '≡'}
          </button>
        </div>
      </div>
    </header>
  )
}
