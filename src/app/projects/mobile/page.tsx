'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Smartphone, Wifi, Bell, Globe } from 'lucide-react'

export default function MobilePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)' }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(129,140,248,0.1)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.3)' }}>Published</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
            Cross-Platform <span className="gradient-text">Mobile Apps</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 700, marginBottom: 32 }}>
            High-performance mobile applications for iOS and Android built with Flutter and React Native, featuring offline-first architecture and real-time Firebase synchronization.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {['Flutter', 'Dart', 'React Native', 'Firebase', 'REST API', 'Android', 'iOS', 'Offline-First'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['iOS + Android', 'Platforms'], ['Offline', 'Support'], ['Firebase', 'Backend'], ['Published', 'Status']].map(([v, l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#34d399' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
            {[
              { icon: Globe, title: 'Cross-Platform', desc: 'Single codebase targeting iOS and Android with native performance and platform-specific UI components.', color: '#34d399' },
              { icon: Wifi, title: 'Offline-First', desc: 'Apps work fully offline and sync automatically when connectivity is restored using background sync workers.', color: '#38bdf8' },
              { icon: Bell, title: 'Push Notifications', desc: 'Firebase Cloud Messaging integration with segmented, targeted push notification campaigns.', color: '#818cf8' },
              { icon: Smartphone, title: 'App Store Ready', desc: 'Complete with app store optimization, icon sets, splash screens, and compliance with Apple/Google guidelines.', color: '#f59e0b' },
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: 26 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${f.color}10`, border: `1px solid ${f.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon size={20} style={{ color: f.color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Discuss This Project <ArrowRight size={16} /></Link>
            <Link href="/projects" className="btn-secondary"><ArrowLeft size={16} /> All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
