import { useEffect, useRef, useState } from 'react'

/**
 * Adds `is-visible` to an element the first time it scrolls into view.
 * Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}

/** Tracks which section is currently in the viewport, for nav highlighting. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark'
    return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked — theme still applies for this session */
    }
  }, [theme])

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}

/** Copy-to-clipboard with a short-lived "copied" flag for button feedback. */
export function useCopy() {
  const [copied, setCopied] = useState(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the mailto link is still there */
    }
  }

  return { copied, copy }
}
