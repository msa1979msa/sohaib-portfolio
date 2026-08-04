'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download, Linkedin, Twitter, Github } from 'lucide-react'

const NAV = [
  { href: '/',         label: 'Home'     },
  { href: '/projects', label: 'Projects' },
  { href: '/ai-lab',   label: 'AI Lab'   },
  { href: '/games',    label: 'Games'    },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
]

const SOCIALS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-ahmed-msa', label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://twitter.com/sohaib79msa',              label: 'Twitter'  },
  { icon: Github,   href: 'https://github.com/msa1979msa',                label: 'GitHub'   },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(236,236,236,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 62, gap: 0 }}>

          {/* ── Logo: cyborg avatar ── */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0, marginRight: 16 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)', flexShrink: 0, boxShadow: '0 0 10px rgba(27,79,189,0.25)' }}>
              <img src="/avatar.png" alt="Sohaib" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
            </div>
            <div className="hide-mobile">
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--text)', lineHeight: 1.2, whiteSpace: 'nowrap' }}>Sohaib Ahmed</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8.5, color: 'var(--accent)', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>AI Engineer · FastAPI · Multi-Agent · GPT</div>
            </div>
          </Link>

          {/* ── Divider ── */}
          <div className="hide-mobile" style={{ width: 1, height: 18, background: 'var(--border)', marginRight: 12, flexShrink: 0 }} />

          {/* ── Social icons ── */}
          <div className="hide-mobile" style={{ display: 'flex', gap: 2, marginRight: 12, flexShrink: 0 }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
                onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="hide-mobile" style={{ width: 1, height: 18, background: 'var(--border)', marginRight: 12, flexShrink: 0 }} />

          {/* ── Nav links (center) ── */}
          <div className="hide-mobile" style={{ display: 'flex', gap: 2, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {NAV.map(l => {
              const active = pathname === l.href
              return (
                <Link key={l.href} href={l.href} style={{
                  textDecoration: 'none',
                  padding: '5px 12px', borderRadius: 7,
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
                  color: active ? 'var(--accent)' : 'var(--muted)',
                  background: active ? 'var(--accent-light)' : 'transparent',
                  transition: 'all 0.15s', whiteSpace: 'nowrap',
                }}
                  onMouseOver={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = 'var(--text)' } }}
                  onMouseOut={e => { if (!active) { (e.currentTarget as HTMLElement).style.color = 'var(--muted)' } }}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>

          {/* ── Resume button ── */}
          <a href="https://raw.githubusercontent.com/msa1979msa/sohaib-portfolio/master/public/Sohaib_Ahmed_Resume.pdf"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary hide-mobile"
            style={{ padding: '7px 16px', fontSize: 12, marginLeft: 12, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={12} /> Resume
          </a>

          {/* ── Mobile toggle ── */}
          <button onClick={() => setOpen(!open)} className="show-mobile"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 7, color: 'var(--text)', cursor: 'pointer', padding: '5px 7px', marginLeft: 'auto' }}>
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ padding: '10px 0 18px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ textDecoration: 'none', padding: '9px 12px', borderRadius: 8, color: pathname === l.href ? 'var(--accent)' : 'var(--text-2)', fontWeight: 500, fontSize: 14, background: pathname === l.href ? 'var(--accent-light)' : 'transparent' }}>
                {l.label}
              </Link>
            ))}
            <a href="https://raw.githubusercontent.com/msa1979msa/sohaib-portfolio/master/public/Sohaib_Ahmed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ margin: '8px 0 0', justifyContent: 'center' }}>
              <Download size={13} /> Resume
            </a>
          </div>
        )}
      </div>
      <style>{`.show-mobile{display:none;} @media(max-width:768px){.show-mobile{display:flex!important;}.hide-mobile{display:none!important;}}`}</style>
    </header>
  )
}
