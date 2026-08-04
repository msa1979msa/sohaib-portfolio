'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, Database, Zap } from 'lucide-react'
export default function PowerBIPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: '#F5F3FF', color: '#7C3AED', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(124,58,237,0.25)', fontWeight: 600 }}>Live</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--surface)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Analytics</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,48px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>Power BI <span className="gradient-text">Business Analytics</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 700, marginBottom: 36 }}>Advanced business intelligence platform with interactive Power BI dashboards, DAX-powered KPIs, SQL-based data pipelines, and predictive analytics models for enterprise decision-making.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Power BI','DAX','SQL','Excel','Data Modeling','Tableau','Python'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['15+','Dashboards'],['Real-time','Data Sync'],['DAX','Powered'],['5+','Clients']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#7C3AED', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginBottom: 48 }}>
            {[
              { icon: BarChart3, title: 'Interactive Dashboards', desc: 'Fully interactive Power BI dashboards with drill-down capabilities, slicers, and dynamic filtering.', color: '#7C3AED' },
              { icon: TrendingUp, title: 'Predictive Analytics', desc: 'Machine learning-powered forecasting models integrated into dashboards for forward-looking decisions.', color: '#2563EB' },
              { icon: Database, title: 'SQL Data Pipelines', desc: 'Optimized SQL queries and data transformation pipelines feeding clean structured data into Power BI.', color: '#059669' },
              { icon: Zap, title: 'Real-Time KPIs', desc: 'Live KPI tracking with automated alerts when metrics cross defined thresholds.', color: '#D97706' },
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
