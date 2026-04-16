'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brain, BarChart3, Shield, FileText, Calendar, Database, Server, Lock, Cpu, Users, TrendingUp, CheckCircle, Zap } from 'lucide-react'

const aiCapabilities = [
  'AI-driven patient data analysis for early risk detection and pattern recognition',
  'Intelligent medical assistant for handling patient and staff queries in real time',
  'Automated clinical report summarization using GPT-based models',
  'Smart billing anomaly detection to identify unusual or fraudulent transactions',
  'Predictive insights for patient trends, hospital load, and operational efficiency',
]

const businessImpact = [
  { icon: Brain, text: 'Enhanced decision-making through AI-assisted insights', color: '#38bdf8' },
  { icon: Zap, text: 'Reduced manual workload via intelligent automation', color: '#34d399' },
  { icon: Users, text: 'Improved patient experience with faster response and processing', color: '#818cf8' },
  { icon: Shield, text: 'Strengthened financial control with anomaly detection', color: '#f59e0b' },
  { icon: TrendingUp, text: 'Enabled scalable, multi-role hospital operations', color: '#f472b6' },
]

const modules = [
  {
    icon: '🩺',
    title: 'Patient Management',
    desc: 'Centralized patient records, medical history tracking, and real-time access to clinical data.',
    color: '#38bdf8',
  },
  {
    icon: '💳',
    title: 'Billing & Finance',
    desc: 'Secure billing system with integrated AI-based anomaly detection and financial tracking.',
    color: '#34d399',
  },
  {
    icon: '👨‍⚕️',
    title: 'Role-Based Access Control',
    desc: 'Granular permission system for Admin, Doctors, Finance, and Staff using JWT authentication.',
    color: '#818cf8',
  },
  {
    icon: '🧾',
    title: 'Clinical Data Processing',
    desc: 'AI-assisted processing, structuring, and summarization of medical reports and records.',
    color: '#f59e0b',
  },
  {
    icon: '📅',
    title: 'Appointment & Scheduling',
    desc: 'Efficient scheduling system for managing appointments, availability, and workflows.',
    color: '#f472b6',
  },
  {
    icon: '📊',
    title: 'Reporting & Analytics',
    desc: 'Real-time dashboards for hospital performance, financial reports, and patient insights.',
    color: '#a78bfa',
  },
]

const engineeringHighlights = [
  'Designed modular backend architecture for healthcare scalability',
  'Implemented secure API layers for sensitive medical and financial data',
  'Integrated AI capabilities without compromising performance or security',
  'Built system supporting real-time operations and concurrent users',
]

const techStack = [
  { layer: 'Frontend', tech: 'React + Tailwind CSS', color: '#818cf8' },
  { layer: 'Backend', tech: 'Node.js + Express + REST APIs', color: '#38bdf8' },
  { layer: 'Database', tech: 'PostgreSQL with optimized relational schema', color: '#f472b6' },
  { layer: 'Security', tech: 'JWT Authentication + RBAC + Secure Middleware', color: '#34d399' },
  { layer: 'AI Integration', tech: 'GPT APIs for intelligent processing, automation, and insights', color: '#f59e0b' },
]

const highlights = [
  ['5+', 'Core Modules'],
  ['30+', 'API Endpoints'],
  ['AI-Assisted', 'Decision Support'],
  ['RBAC', 'Secure Access'],
]

export default function HealthcarePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>
              ✦ AI-Powered
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(56,189,248,0.08)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              Healthcare
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(129,140,248,0.08)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.25)' }}>
              Enterprise
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1, marginBottom: 20 }}>
            AI-Enabled Healthcare <span className="gradient-text">Management Platform</span>
          </h1>

          {/* Description */}
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            A secure, scalable, and intelligent healthcare system that combines clinical data management with AI-driven decision support. Built to modernize hospital operations, enhance patient care, and deliver real-time insights across medical and administrative workflows.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 720, marginBottom: 36, fontStyle: 'italic' }}>
            Designed by combining strong backend engineering with practical healthcare and financial system expertise.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 52 }}>
            {['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'RBAC', 'GPT API', 'REST API', 'Tailwind CSS', 'AI Integration'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 72 }}>
            {highlights.map(([v, l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--accent)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
            {/* Left: AI capabilities */}
            <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(56,189,248,0.06), rgba(52,211,153,0.04))', border: '1px solid rgba(56,189,248,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={22} style={{ color: '#38bdf8' }} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>
                  🧠 AI Capabilities
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {aiCapabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: '#34d399', flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{cap}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Business Impact */}
            <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(129,140,248,0.06), rgba(244,114,182,0.04))', border: '1px solid rgba(129,140,248,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={22} style={{ color: '#818cf8' }} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>
                  📊 Business Impact
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {businessImpact.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <item.icon size={16} style={{ color: item.color, flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section style={{ padding: '0 24px 72px', background: 'var(--surface)', paddingTop: 72 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>System Architecture</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 12 }}>
            ⚙️ Core <span className="gradient-text">Modules</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 44 }}>Six purpose-built modules covering every aspect of hospital operations.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {modules.map((m, i) => (
              <div key={i} className="card glow-box" style={{ padding: 28, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${m.color}12`, border: `1px solid ${m.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                    {m.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>{m.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{m.desc}</p>
                <div style={{ marginTop: 16, height: 2, borderRadius: 100, background: `linear-gradient(90deg, ${m.color}60, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Under the Hood</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 44 }}>
            🏗️ Technical <span className="gradient-text">Architecture</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 56 }}>
            {techStack.map((t, i) => (
              <div key={i} style={{ padding: '20px 22px', borderRadius: 14, background: `${t.color}08`, border: `1px solid ${t.color}22` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: t.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{t.layer}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, fontWeight: 500 }}>{t.tech}</div>
              </div>
            ))}
          </div>

          {/* Key Engineering Highlights */}
          <div style={{ padding: '40px', borderRadius: 20, border: '1px solid var(--border)', background: 'var(--surface)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 28 }}>
              💡 Key Engineering Highlights
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {engineeringHighlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">
            Discuss This Project <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn-secondary">
            <ArrowLeft size={16} /> All Projects
          </Link>
        </div>
      </section>
    </div>
  )
}
