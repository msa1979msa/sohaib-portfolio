'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download, Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react'

const LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/projects', label: 'Projects' },
  { href: '/ai-lab',   label: '🤖 AI Lab' },
  { href: '/about',    label: 'About'    },
  { href: '/contact',  label: 'Contact'  },
]
const SOCIALS = [
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/sohaib-ahmed-msa',  label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://twitter.com/sohaib79msa',               label: 'Twitter'  },
  { icon: Github,    href: 'https://github.com/msa1979msa',                 label: 'GitHub'   },
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
      background: scrolled ? 'rgba(236,236,236,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Left: SA logo + socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fff', fontSize: 12 }}>SA</div>
              <div className="hide-mobile">
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text)', lineHeight: 1.2 }}>Sohaib Ahmed</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.04em' }}>AI Engineer | FastAPI | Multi-Agent | GPT</div>
              </div>
            </Link>

            {/* Divider */}
            <div className="hide-mobile" style={{ width: 1, height: 20, background: 'var(--border)' }} />

            {/* Social icons */}
            <div className="hide-mobile" style={{ display: 'flex', gap: 4 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" title={s.label}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Nav links */}
          <div className="hide-mobile" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {LINKS.map(l => {
              const active = pathname === l.href
              return (
                <Link key={l.href} href={l.href} style={{
                  textDecoration: 'none',
                  padding: '6px 14px', borderRadius: 7,
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                  color: active ? 'var(--accent)' : 'var(--muted)',
                  background: active ? 'var(--accent-light)' : 'transparent',
                  transition: 'all 0.15s',
                }}>{l.label}</Link>
              )
            })}
          </div>

          {/* Right: GET IN TOUCH + Resume */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', textTransform: 'uppercase' }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
            >
              <Mail size={13} /> Get In Touch
            </Link>
            <a href="https://raw.githubusercontent.com/msa1979msa/sohaib-portfolio/master/public/Sohaib_Ahmed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '7px 18px', fontSize: 13 }}>
              <Download size={13} /> Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 7, color: 'var(--text)', cursor: 'pointer', padding: '6px 8px' }} className="show-mobile">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div style={{ padding: '12px 0 20px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {LINKS.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', padding: '10px 12px', borderRadius: 8, color: pathname === l.href ? 'var(--accent)' : 'var(--text-2)', fontWeight: 500, fontSize: 15, background: pathname === l.href ? 'var(--accent-light)' : 'transparent' }}>{l.label}</Link>
            ))}
            <div style={{ display: 'flex', gap: 10, padding: '10px 12px' }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon"><s.icon size={16} /></a>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`.show-mobile{display:none;} @media(max-width:768px){.show-mobile{display:flex!important;}.hide-mobile{display:none!important;}}`}</style>
    </header>
  )
}
