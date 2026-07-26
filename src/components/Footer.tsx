import { profile } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer__mid">Built with React &amp; a lot of opinions about spacing</span>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
