import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // The browser resolves #hash before React has mounted the sections, so a
  // shared deep link would otherwise land at the top of the page.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
