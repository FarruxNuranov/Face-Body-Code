import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const links = [
  { href: '#services', label: 'Услуги' },
  { href: '#masters', label: 'Мастера' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#about', label: 'О студии' },
  { href: '#contact', label: 'Контакты' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img className="logo__img" src={logo} alt="Face &amp; Body Code" />
          <span className="logo__text">
            Face Body Code<span className="logo__sub">beauty &amp; aesthetics</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="https://instagram.com/face_body.code"
            target="_blank"
            rel="noreferrer"
            className="btn btn--gold nav__cta"
            onClick={() => setOpen(false)}
          >
            Instagram
          </a>
        </nav>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
