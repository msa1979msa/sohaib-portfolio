'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Smartphone, Wifi, Bell, Globe } from 'lucide-react'
export default function MobilePage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: '#FFFBEB', color: '#D97706', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(217,119,6,0.25)', fontWeight: 600 }}>Published</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--surface)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Mobile</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,48px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>Cross-Platform <span className="gradient-text">Mobile Apps</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 700, marginBottom: 36 }}>High-performance mobile applications for iOS and Android built with Flutter and React Native, featuring offline-first architecture and real-time Firebase synchronization.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Flutter','Dart','React Native','Firebase','REST API','Android','iOS','Offline-First'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['iOS+Android','Platforms'],['Offline','Support'],['Firebase','Backend'],['Published','Status']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#D97706', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginBottom: 48 }}>
            {[
              { icon: Globe,      title: 'Cross-Platform',   desc: 'Single codebase targeting iOS and Android with native performance and platform-specific UI.',           color: '#059669' },
              { icon: Wifi,       title: 'Offline-First',    desc: 'Apps work fully offline and sync automatically when connectivity is restored using background workers.',  color: '#2563EB' },
              { icon: Bell,       title: 'Push Notifications',desc: 'Firebase Cloud Messaging integration with segmented, targeted push notification campaigns.',              color: '#7C3AED' },
              { icon: Smartphone, title: 'App Store Ready',  desc: 'Complete with app store optimization, icon sets, splash screens, and Apple/Google compliance.',           color: '#D97706' },
            ].map((f,i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: f.color+'10', border: `1px solid ${f.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><f.icon size={19} style={{ color: f.color }} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <Link href="/contact" className="btn-primary">Discuss This Project <ArrowRight size={15} /></Link>
            <Link href="/projects" className="btn-secondary"><ArrowLeft size={15} /> All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
