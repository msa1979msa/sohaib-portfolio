'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Brain, Shield, Globe, Heart, BarChart3, Code2, Smartphone, TrendingUp } from 'lucide-react'

const ALL_PROJECTS = [
  {
    slug: 'ameen-ai', category: 'AI',
    title: 'AMEEN AI — Islamic Banking Product Matcher',
    tagline: 'Shariah-compliant AI advisory system for Islamic finance — built for Techlogix',
    desc: 'AI-powered product matchmaking engine that recommends Murabaha, Ijarah, Diminishing Musharakah, Musharakah, Mudarabah, Salam, Istisna\'a, Wakalah and Musawamah based on customer needs. Zero external API cost — custom rule-based engine.',
    tags: ['Next.js 14','TypeScript','Custom AI Engine','AAOIFI','SBP IBD','Tailwind CSS'],
    badge: 'AI · Islamic Finance', badgeColor: '#059669', badgeBg: 'rgba(5,150,105,0.08)',
    icon: Brain, iconColor: '#059669',
    highlights: ['9 Islamic finance products','22 pages / routes','Custom rule-based AI engine','Staff copilot & Shariah assistant','AAOIFI & SBP IBD compliant'],
  },
  {
    slug: 'riskvision', category: 'AI',
    title: 'RiskVision AI — Cybercrime Detection',
    tagline: 'Banking SOC platform with 12-factor risk scoring, voice AI and real-time fraud detection',
    desc: 'Production-grade AI Security Operations Center for banking cybercrime detection. 12-factor risk scoring engine, animated SOC dashboard, voice-enabled AI chatbot, geolocation threat intelligence, PDF/CSV export and Power BI integration.',
    tags: ['Next.js 14','TypeScript','Anthropic Claude SDK','Recharts','Voice API','Power BI'],
    badge: 'Live · AI · Cybersecurity', badgeColor: '#DC2626', badgeBg: 'rgba(220,38,38,0.08)',
    icon: Shield, iconColor: '#DC2626',
    highlights: ['12-factor risk scoring','Voice-enabled AI assistant','Geolocation threat intel','Real-time fraud detection','PDF & CSV export'],
    liveUrl: 'https://riskvision-ai-ashen.vercel.app/',
  },
  {
    slug: 'orange-erp', category: 'Enterprise',
    title: 'Orange Consultant ERP — 3-Entity Global',
    tagline: 'Multi-entity ERP across Pakistan, UAE & Saudi Arabia with immutable GAAP ledger and AI assistant Mada',
    desc: 'Sophisticated multi-entity ERP with complete entity isolation via Supabase RLS. Immutable double-entry ledger, country-specific tax engines (FBR, VAT, Zakat), OCR compliance screening, AI chatbot Mada, and multi-currency support.',
    tags: ['Next.js 14','TypeScript','Supabase','PostgreSQL','RLS','OCR','Multi-Currency'],
    badge: 'Production · 3 Countries', badgeColor: '#EA580C', badgeBg: 'rgba(234,88,12,0.08)',
    icon: Globe, iconColor: '#EA580C',
    highlights: ['Pakistan · UAE · Saudi Arabia','Immutable GAAP ledger','AI assistant Mada','OCR compliance screening','PKR · AED · SAR currencies'],
    liveUrl: 'https://orange-erp.vercel.app',
  },
  {
    slug: 'healthcare', category: 'AI',
    title: 'AI Healthcare Management Platform',
    tagline: 'Hospital system with GPT integration, patient analytics & smart billing',
    desc: 'Secure healthcare system combining clinical data management with AI-driven decision support. GPT-based report summarization, smart billing anomaly detection, RBAC for Admin, Doctor, Finance and Staff.',
    tags: ['React','Node.js','PostgreSQL','GPT API','JWT','RBAC'],
    badge: 'AI · Healthcare', badgeColor: '#1B4FBD', badgeBg: 'rgba(27,79,189,0.08)',
    icon: Heart, iconColor: '#1B4FBD',
    highlights: ['GPT clinical summaries','AI billing anomaly detection','RBAC access control','Real-time analytics','Secure medical records'],
  },
  {
    slug: 'financeai', category: 'AI',
    title: 'FinanceAI — Intelligent Financial Advisor',
    tagline: 'RAG-powered stock predictions with ML ensemble & real-time market data',
    desc: 'Production-ready AI financial advisor combining RAG with RandomForest + GradientBoosting ensemble. FAISS vector store, live stock data via yfinance, 14 technical indicators and real-time chat with source citations.',
    tags: ['Python','FastAPI','RAG','FAISS','scikit-learn','yfinance'],
    badge: 'Live · AI · Finance', badgeColor: '#7C3AED', badgeBg: 'rgba(124,58,237,0.08)',
    icon: TrendingUp, iconColor: '#7C3AED',
    highlights: ['FAISS vector search','ML ensemble predictions','14 technical indicators','Live stock data','RAG chat interface'],
  },
  {
    slug: 'erp', category: 'Enterprise',
    title: 'Extreme MSA ERP System',
    tagline: 'GAAP-compliant ERP with double-entry accounting & real-time CRM',
    desc: 'Complete enterprise system built from scratch. Double-entry accounting, real-time CRM, multi-warehouse inventory, HR & payroll, and detailed financial reporting. Fully GAAP compliant.',
    tags: ['Next.js 14','Node.js','SQLite','TypeScript','GAAP','REST API'],
    badge: 'Production Ready', badgeColor: '#0891B2', badgeBg: 'rgba(8,145,178,0.08)',
    icon: Code2, iconColor: '#0891B2',
    highlights: ['Double-entry bookkeeping','Real-time CRM','Multi-module inventory','HR & payroll','Financial reporting'],
  },
  {
    slug: 'powerbi', category: 'Analytics',
    title: 'Power BI Business Analytics Suite',
    tagline: 'Advanced BI dashboards with predictive analytics & real-time KPIs',
    desc: 'Business intelligence platform with interactive Power BI dashboards, DAX-powered KPIs, SQL-based data pipelines and predictive analytics for enterprise decision-making.',
    tags: ['Power BI','DAX','SQL','Excel','Data Modeling'],
    badge: 'Live · Analytics', badgeColor: '#D97706', badgeBg: 'rgba(217,119,6,0.08)',
    icon: BarChart3, iconColor: '#D97706',
    highlights: ['Interactive dashboards','Real-time KPI tracking','Predictive analytics','SQL data pipelines','Executive reporting'],
  },
  {
    slug: 'mobile', category: 'Mobile',
    title: 'Cross-Platform Mobile Apps',
    tagline: 'Flutter & React Native with offline-first architecture',
    desc: 'High-performance mobile applications for iOS and Android with offline-first architecture, Firebase real-time sync, push notifications and REST API integration.',
    tags: ['Flutter','Dart','React Native','Firebase','Android','iOS'],
    badge: 'Published', badgeColor: '#059669', badgeBg: 'rgba(5,150,105,0.08)',
    icon: Smartphone, iconColor: '#059669',
    highlights: ['iOS & Android','Offline-first','Push notifications','Firebase sync','App Store published'],
  },
]

const CATS = ['All','AI','Enterprise','Analytics','Mobile']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === active)

  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 60px', background: 'linear-gradient(180deg,var(--bg-2) 0%,var(--bg) 100%)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ display: 'block', marginBottom: 16 }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5vw,52px)', letterSpacing: '-0.02em', marginBottom: 18 }}>
            All Projects
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8 }}>
            8 production-grade systems spanning AI, enterprise ERP, analytics, mobile and Islamic finance.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap', paddingTop: 32 }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{
                padding: '8px 20px', borderRadius: 100,
                border: `1.5px solid ${active === c ? 'var(--accent)' : 'var(--border)'}`,
                background: active === c ? 'var(--accent)' : 'var(--surface-2)',
                color: active === c ? '#fff' : 'var(--muted)',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>{c}</button>
            ))}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', alignSelf: 'center', marginLeft: 8 }}>
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {filtered.map((p, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px' }}>
                  {/* Content */}
                  <div style={{ padding: '32px 36px' }}>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '3px 12px', borderRadius: 100, background: p.badgeBg, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, letterSpacing: '0.06em', fontWeight: 600 }}>
                        {p.badge}
                      </span>
                      {'liveUrl' in p && (
                        <a href={p.liveUrl as string} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                          onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
                          onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
                        >
                          <ExternalLink size={11} /> Live Demo
                        </a>
                      )}
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, marginBottom: 8, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{p.title}</h2>
                    <p style={{ color: 'var(--accent)', fontSize: 13, marginBottom: 12, fontStyle: 'italic' }}>{p.tagline}</p>
                    <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{p.desc}</p>
                    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 20 }}>
                      {p.tags.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                    </div>
                    <Link href={`/projects/${p.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: p.iconColor, fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-display)', textDecoration: 'none' }}>
                      View Full Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                  {/* Side panel */}
                  <div style={{ padding: '32px 24px', background: p.badgeBg, borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: p.iconColor+'15', border: `1px solid ${p.iconColor}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                      <p.icon size={22} style={{ color: p.iconColor }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: p.iconColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Highlights</div>
                    {p.highlights.map((h, j) => (
                      <div key={j} style={{ display: 'flex', gap: 9, fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: p.iconColor, flexShrink: 0, marginTop: 5 }} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
