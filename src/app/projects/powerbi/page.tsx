'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, Database, Zap } from 'lucide-react'

export default function PowerBIPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)' }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.3)' }}>Live</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
            Power BI <span className="gradient-text">Business Analytics</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 700, marginBottom: 32 }}>
            Advanced business intelligence platform with interactive dashboards, real-time KPIs, and predictive analytics for data-driven enterprise decision-making.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {['Power BI', 'DAX', 'SQL', 'Excel', 'Data Modeling', 'Tableau', 'Python'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['15+', 'Dashboards'], ['Real-time', 'Data Sync'], ['DAX', 'Powered'], ['5+', 'Clients']].map(([v, l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: '#818cf8' }}>{v}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 48 }}>
            {[
              { icon: BarChart3, title: 'Interactive Dashboards', desc: 'Fully interactive Power BI dashboards with drill-down capabilities, slicers, and dynamic filtering for deep data exploration.', color: '#818cf8' },
              { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Machine learning-powered forecasting models integrated into dashboards for forward-looking business decisions.', color: '#38bdf8' },
              { icon: Database, title: 'SQL Data Pipelines', desc: 'Optimized SQL queries and data transformation pipelines that feed clean, structured data into Power BI.', color: '#34d399' },
              { icon: Zap, title: 'Real-Time KPIs', desc: 'Live KPI tracking with automated alerts when metrics cross defined thresholds, keeping stakeholders informed.', color: '#f59e0b' },
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
