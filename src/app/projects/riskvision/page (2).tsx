'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield, Brain, AlertTriangle, BarChart3, Mic, FileDown, Globe, Zap, CheckCircle, Activity } from 'lucide-react'

const FEATURES = [
  { icon: Brain,       title: '12-Factor Risk Scoring Engine',    desc: 'Sophisticated multi-dimensional risk scoring across 12 behavioral, transactional and contextual factors. Generates real-time threat scores for every banking event.', color: '#1B4FBD' },
  { icon: AlertTriangle,'title':'Real-Time Fraud Detection',      desc: 'Live anomaly detection on transaction streams. Identifies suspicious patterns, unusual geolocation activity, velocity spikes and behavioral deviations instantly.',    color: '#DC2626' },
  { icon: Globe,       title: 'Geolocation-Based Threat Intel',   desc: 'Idle screensaver with live geolocation awareness. Detects login attempts from high-risk jurisdictions and maps threat origins on an interactive world map.',          color: '#7C3AED' },
  { icon: Mic,         title: 'Voice-Enabled AI Chatbot',         desc: 'Floating voice-activated AI assistant for SOC analysts. Ask questions about alerts, incidents and risk scores using natural language voice commands.',                   color: '#059669' },
  { icon: Activity,    title: 'Animated SOC Dashboard',           desc: 'Live-updating Security Operations Center dashboard with animated threat timelines, alert queues, incident trackers and real-time KPI counters.',                          color: '#D97706' },
  { icon: FileDown,    title: 'PDF & CSV Export',                 desc: 'One-click export of risk reports, incident summaries and alert logs in PDF and CSV formats for regulatory reporting and management review.',                               color: '#0891B2' },
  { icon: BarChart3,   title: 'Power BI Integration',             desc: 'Seamless integration with Power BI for advanced analytics, executive dashboards and custom report creation beyond the built-in analytics.',                             color: '#7C3AED' },
  { icon: Shield,      title: 'Cybercrime Pattern Library',       desc: 'Built-in library of known cybercrime patterns, attack signatures, and fraud typologies mapped to banking-specific threat intelligence frameworks.',                       color: '#DC2626' },
]

const RISK_FACTORS = [
  'Transaction velocity & amount', 'Geographic location anomaly', 'Device fingerprinting',
  'Time-of-day behavioral pattern', 'Account age & history', 'Recipient risk score',
  'Login pattern deviation', 'IP reputation check', 'Session duration analysis',
  'Multi-channel correlation', 'Network anomaly score', 'Historical fraud similarity',
]

export default function RiskVisionPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(220,38,38,0.08)', color: '#DC2626', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(220,38,38,0.25)', fontWeight: 600 }}>🔴 Live · Production</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(27,79,189,0.08)', color: 'var(--accent)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(27,79,189,0.2)' }}>AI · Cybersecurity</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--bg-2)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Banking SOC</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,50px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>
            RiskVision AI — <span style={{ color: '#DC2626' }}>Cybercrime</span><br />Detection Platform
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            A production-grade AI-powered Security Operations Center (SOC) platform for banking cybercrime detection. Uses a 12-factor risk scoring engine to detect fraud, anomalies and cyber threats in real-time across banking transaction streams.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 720, marginBottom: 28, fontStyle: 'italic' }}>
            Built for Mr. Muzaffar — POC delivered and presented. Live deployment available.
          </p>

          {/* Live link */}
          <a href="https://riskvision-ai-ashen.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 100, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', color: '#DC2626', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 36, transition: 'all 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(220,38,38,0.12)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(220,38,38,0.08)'}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#DC2626', display: 'inline-block' }} />
            riskvision-ai-ashen.vercel.app <ArrowRight size={13} />
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Next.js 14','TypeScript','Tailwind CSS','Recharts','Anthropic Claude SDK','Voice API','PDF Export','CSV Export','Power BI'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['12','Risk Factors'],['Real-time','Threat Detection'],['Voice','AI Assistant'],['SOC','Dashboard']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--surface-2)', padding: '22px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: '#DC2626', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>Platform Features</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 28 }}>
              Core <span style={{ color: '#DC2626' }}>Capabilities</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 18 }}>
              {FEATURES.map((f, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: f.color+'12', border: `1px solid ${f.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <f.icon size={19} style={{ color: f.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 12 Risk Factors */}
          <div style={{ marginBottom: 48, padding: '32px 36px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 18 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>Risk Engine</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginBottom: 24 }}>12 Risk Scoring Factors</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
              {RISK_FACTORS.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-2)' }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: '#DC2626', fontWeight: 700, flexShrink: 0 }}>{i+1}</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Tech architecture */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 48 }}>
            {[
              ['Frontend','Next.js 14 + TypeScript + Tailwind CSS','#1B4FBD'],
              ['AI Engine','Anthropic Claude SDK + Custom Scoring','#DC2626'],
              ['Voice','Web Speech API + Voice Recognition','#059669'],
              ['Analytics','Recharts + Power BI Integration','#7C3AED'],
              ['Export','PDF Generation + CSV Export Engine','#D97706'],
            ].map(([l,v,c],i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: (c as string)+'08', border: `1px solid ${c as string}20` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c as string, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>{l}</div>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://riskvision-ai-ashen.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">View Live Demo <ArrowRight size={15} /></a>
            <Link href="/contact" className="btn-secondary">Discuss This Project</Link>
            <Link href="/projects" className="btn-secondary"><ArrowLeft size={15} /> All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
