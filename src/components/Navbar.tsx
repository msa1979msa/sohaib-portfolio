'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download, Zap } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5,8,18,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56,189,248,0.1)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800, color: '#050812', fontSize: 16,
            }}>
              SA
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text)', lineHeight: 1.2 }}>
                Sohaib Ahmed
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent)', letterSpacing: '0.05em' }}>
                AI Engineer | FastAPI | Multi-Agent | GPT
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  textDecoration: 'none',
                  padding: '6px 16px',
                  borderRadius: 100,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: pathname === l.href ? 'var(--accent)' : 'var(--muted)',
                  background: pathname === l.href ? 'rgba(56,189,248,0.08)' : 'transparent',
                  border: pathname === l.href ? '1px solid rgba(56,189,248,0.2)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Sohaib_Ahmed_Resume.pdf"
              download
              className="btn-primary"
              style={{ padding: '8px 20px', fontSize: 13, marginLeft: 8 }}
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: 4 }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div style={{
            padding: '16px 0 24px',
            borderTop: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: 'none',
                  padding: '10px 16px',
                  borderRadius: 10,
                  color: pathname === l.href ? 'var(--accent)' : 'var(--text)',
                  fontWeight: 500,
                  background: pathname === l.href ? 'rgba(56,189,248,0.08)' : 'transparent',
                }}
              >
                {l.label}
              </Link>
            ))}
            <a href="/Sohaib_Ahmed_Resume.pdf" download className="btn-primary" style={{ margin: '8px 16px 0', justifyContent: 'center' }}>
              <Download size={14} /> Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
