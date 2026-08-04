'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Code2, Database, Shield, Zap, CheckCircle } from 'lucide-react'
export default function ERPPage() {
  const features = [
    { icon: Database, title: 'Double-Entry Accounting', desc: 'Full GAAP-compliant double-entry bookkeeping with automatic journal entries, trial balance, and financial statements.', color: '#2563EB' },
    { icon: Zap,      title: 'Real-Time CRM',           desc: 'Customer relationship management with lead tracking, pipeline management, and automated follow-up workflows.', color: '#059669' },
    { icon: Shield,   title: 'Inventory Management',   desc: 'Multi-warehouse inventory with real-time stock tracking, low stock alerts, and purchase order automation.', color: '#7C3AED' },
    { icon: Code2,    title: 'HR & Payroll',            desc: 'Employee management, attendance tracking, leave management, and automated payroll calculation.', color: '#D97706' },
    { icon: Shield,   title: 'Role-Based Access',      desc: 'Granular permission system with department-level access control and full audit logging.', color: '#DC2626' },
    { icon: Database, title: 'Financial Reporting',    desc: 'P&L statements, balance sheets, cash flow reports, and custom report builder with Excel/PDF export.', color: '#0891B2' },
  ]
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--accent-light)', color: 'var(--accent)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(37,99,235,0.25)', fontWeight: 600 }}>Production Ready</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--surface)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Enterprise</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,48px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>Extreme MSA <span className="gradient-text">ERP System</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 700, marginBottom: 36 }}>A complete, GAAP-compliant enterprise resource planning system built from scratch. Handles every aspect of business operations — from accounting to HR — in a single unified platform.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Next.js 14','Node.js','SQLite','TypeScript','GAAP','REST API','RBAC','Tailwind CSS'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['10+','Core Modules'],['50+','API Endpoints'],['GAAP','Compliant'],['99.9%','Uptime']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--accent)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="section-label" style={{ marginBottom: 14 }}>Core Modules</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', marginBottom: 32 }}>What's <span className="gradient-text">Included</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginBottom: 56 }}>
            {features.map((f,i) => (
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
