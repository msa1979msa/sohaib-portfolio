'use client'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Code2, Database, Shield, Zap, ArrowRight } from 'lucide-react'

const features = [
  { title: 'Double-Entry Accounting', desc: 'Full GAAP-compliant double-entry bookkeeping with automatic journal entries, trial balance, and financial statements.', icon: Database },
  { title: 'Real-Time CRM', desc: 'Customer relationship management with lead tracking, pipeline management, and automated follow-up workflows.', icon: Zap },
  { title: 'Inventory Management', desc: 'Multi-warehouse inventory with real-time stock tracking, low stock alerts, and purchase order automation.', icon: Shield },
  { title: 'HR & Payroll', desc: 'Employee management, attendance tracking, leave management, and automated payroll calculation.', icon: Code2 },
  { title: 'Role-Based Access Control', desc: 'Granular permission system with department-level access control and audit logging.', icon: Shield },
  { title: 'Financial Reporting', desc: 'P&L statements, balance sheets, cash flow reports, and custom report builder with export to Excel/PDF.', icon: Database },
]

export default function ERPPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)' }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>Production Ready</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(56,189,248,0.08)', color: 'var(--muted)', border: '1px solid var(--border)' }}>Enterprise</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
            Extreme MSA <span className="gradient-text">ERP System</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 700, marginBottom: 32 }}>
            A complete, GAAP-compliant enterprise resource planning system built from scratch. Handles every aspect of business operations — from accounting to HR — in a single, unified platform.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {['Next.js 14', 'Node.js', 'SQLite', 'TypeScript', 'GAAP', 'REST API', 'RBAC', 'Tailwind CSS'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['10+', 'Core Modules'], ['50+', 'API Endpoints'], ['GAAP', 'Compliant'], ['99.9%', 'Uptime']].map(([v, l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--accent)' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="section-label" style={{ marginBottom: 16 }}>Core Modules</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, marginBottom: 40 }}>
            What's <span className="gradient-text">Included</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 64 }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{ padding: 26 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Architecture */}
          <div className="card border-glow" style={{ padding: 36, borderRadius: 20, marginBottom: 40 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Technical Architecture</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, marginBottom: 20 }}>System Design</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              {[
                { layer: 'Frontend', tech: 'Next.js 14 + TypeScript + Tailwind CSS', color: '#818cf8' },
                { layer: 'API Layer', tech: 'Node.js + Express + REST API', color: '#38bdf8' },
                { layer: 'Database', tech: 'SQLite with optimized indexing', color: '#f472b6' },
                { layer: 'Auth', tech: 'JWT + RBAC + Session Management', color: '#34d399' },
              ].map((a, i) => (
                <div key={i} style={{ padding: 16, borderRadius: 12, background: `${a.color}08`, border: `1px solid ${a.color}20` }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: a.color, letterSpacing: '0.1em', marginBottom: 6, textTransform: 'uppercase' }}>{a.layer}</div>
                  <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>{a.tech}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Discuss This Project <ArrowRight size={16} />
            </Link>
            <Link href="/projects" className="btn-secondary">
              <ArrowLeft size={16} /> All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
