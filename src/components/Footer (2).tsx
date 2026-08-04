'use client'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 24px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fff', fontSize: 11 }}>SA</div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>Muhammad Sohaib Ahmed · AI Engineer</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { icon: Github,   href: 'https://github.com/msa1979msa' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-ahmed-msa' },
            { icon: Twitter,  href: 'https://twitter.com/sohaib79msa' },
            { icon: Mail,     href: 'mailto:sohaibahmedmsa@gmail.com' },
          ].map((s,i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">
              <s.icon size={15} />
            </a>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>© 2026 · Built with Next.js 14 & TypeScript</p>
      </div>
    </footer>
  )
}
