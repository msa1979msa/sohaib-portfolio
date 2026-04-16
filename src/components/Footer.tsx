'use client'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Zap } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/msa1979msa', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-ahmed-msa', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/sohaib79msa', label: 'Twitter' },
  { icon: Mail, href: 'mailto:sohaibahmedmsa@gmail.com', label: 'Email' },
]

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--surface)',
      padding: '48px 24px 32px',
      marginTop: 80,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, color: '#050812', fontSize: 16,
              }}>SA</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Muhammad Sohaib Ahmed</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 260 }}>
              AI Engineer building production-ready intelligent systems and scalable backend architectures.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 38, height: 38, borderRadius: 8, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', transition: 'all 0.2s ease', background: 'transparent',
                }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} style={{
                  textDecoration: 'none', color: 'var(--muted)', fontSize: 14,
                  transition: 'color 0.2s ease',
                }}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Core Stack</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['FastAPI', 'LangGraph', 'Next.js 14', 'TypeScript', 'Python', 'PostgreSQL', 'Pinecone', 'GPT-4'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
            © 2026 Muhammad Sohaib Ahmed. All rights reserved.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            Built with <Zap size={12} style={{ color: 'var(--accent)' }} /> Next.js 14, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
