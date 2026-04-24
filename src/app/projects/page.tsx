'use client'
import Link from 'next/link'
import { ArrowRight, BarChart3, Smartphone, Code2, Heart, TrendingUp, Stethoscope } from 'lucide-react'

const projects = [
  {
    slug: 'healthcare',
    title: 'AI Healthcare Management Platform',
    tagline: 'AI-powered hospital system with GPT integration, patient analytics & smart billing',
    desc: 'A secure, scalable, and intelligent healthcare system combining clinical data management with AI-driven decision support. Features GPT-based report summarization, anomaly detection, and real-time patient insights.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'GPT API', 'JWT', 'RBAC', 'REST API'],
    badge: 'AI-Powered', badgeColor: '#34d399', icon: Heart, iconColor: '#34d399',
    highlights: ['AI patient data analysis', 'GPT clinical report summarization', 'Smart billing anomaly detection', 'RBAC: Admin / Doctor / Finance', 'Real-time hospital analytics'],
    category: 'AI · Healthcare',
  },
  {
    slug: 'medai',
    title: 'MedAI Doctor — Multi-Agent Clinical System',
    tagline: '5 specialised AI agents delivering clinical-grade diagnosis, SOAP notes, drug lookup & lab analysis',
    desc: 'A production-ready multi-agent clinical intelligence system with 5 specialized AI agents — Triage, Symptom Analyst, ICD-10 Coder, Lab Agent, and Diagnosis Agent — all orchestrated by a Supervisor Agent. Covers 60,000+ medications, full lab result interpretation, differential diagnosis, SOAP notes, and HIPAA-ready compliance via OpenRouter with automatic model fallback.',
    tags: ['React', 'OpenRouter', 'Multi-Agent', 'ICD-10', 'Drug Database', 'Lab Analysis', 'HIPAA', 'JavaScript'],
    badge: 'Live · AI · Medical', badgeColor: '#00e5c8', icon: Stethoscope, iconColor: '#00e5c8',
    highlights: ['5 specialised AI agents with Supervisor orchestration', '60,000+ medication database with interactions & dosing', 'Lab result analysis with automatic abnormality flagging', 'ICD-10 code reference with AI clinical breakdowns', 'OpenRouter auto model fallback — never goes offline', 'HIPAA-ready with PII masking & audit trails'],
    category: 'AI · Clinical · Medical',
  },
  {
    slug: 'erp',
    title: 'Extreme MSA ERP System',
    tagline: 'Enterprise resource planning with double-entry accounting & real-time CRM',
    desc: 'A complete, GAAP-compliant enterprise system built from scratch. Handles double-entry accounting, real-time CRM, multi-warehouse inventory, HR & payroll, and detailed financial reporting.',
    tags: ['Next.js 14', 'Node.js', 'SQLite', 'TypeScript', 'GAAP', 'REST API'],
    badge: 'Production Ready', badgeColor: '#38bdf8', icon: Code2, iconColor: '#38bdf8',
    highlights: ['Double-entry bookkeeping', 'Real-time CRM pipeline', 'Multi-module inventory', 'Role-based access control', 'Financial reporting & P&L'],
    category: 'Enterprise',
  },
  {
    slug: 'financeai',
    title: 'FinanceAI — Intelligent Financial Advisor',
    tagline: 'RAG-powered stock predictions with ML ensemble models & real-time market data',
    desc: 'A production-ready AI financial advisor combining RAG with a RandomForest + GradientBoosting ensemble. Fetches live stock data via yfinance, indexes 50+ financial concepts in a FAISS vector store, and delivers next-day price direction predictions with confidence scores through a FastAPI backend.',
    tags: ['Python', 'FastAPI', 'RAG', 'FAISS', 'scikit-learn', 'yfinance', 'sentence-transformers', 'ML'],
    badge: 'Live · AI · Finance', badgeColor: '#f5c542', icon: TrendingUp, iconColor: '#f5c542',
    highlights: ['Live stock data: AAPL, MSFT, GOOGL, NVDA, META, TSLA, AMZN, AMD', 'ML ensemble: RandomForest + GradientBoosting VotingClassifier', '14 technical indicators: RSI, MACD, Bollinger Bands, volatility', 'FAISS vector store with sentence-transformer embeddings', 'Real-time RAG chat with source citation panel'],
    category: 'AI · Finance',
  },
  {
    slug: 'powerbi',
    title: 'Power BI Business Analytics',
    tagline: 'Advanced BI dashboards with predictive analytics & real-time data',
    desc: 'Business intelligence platform with interactive Power BI dashboards, DAX-powered KPIs, SQL-based data pipelines, and predictive analytics models for enterprise decision-making.',
    tags: ['Power BI', 'DAX', 'SQL', 'Excel', 'Data Modeling', 'Tableau'],
    badge: 'Live', badgeColor: '#818cf8', icon: BarChart3, iconColor: '#818cf8',
    highlights: ['Interactive dashboards', 'Real-time KPI tracking', 'Predictive analytics', 'SQL data pipelines', 'Executive reporting'],
    category: 'Analytics',
  },
  {
    slug: 'mobile',
    title: 'Cross-Platform Mobile Apps',
    tagline: 'Flutter & React Native apps with offline support and Firebase backend',
    desc: 'High-performance cross-platform mobile applications built with Flutter and React Native, featuring offline-first architecture, push notifications, Firebase real-time sync, and REST API integration.',
    tags: ['Flutter', 'Dart', 'React Native', 'Firebase', 'REST API', 'Android'],
    badge: 'Published', badgeColor: '#a78bfa', icon: Smartphone, iconColor: '#a78bfa',
    highlights: ['iOS & Android support', 'Offline-first architecture', 'Push notifications', 'Firebase real-time sync', 'App Store ready'],
    category: 'Mobile',
  },
]

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse,rgba(56,189,248,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,5vw,56px)', marginBottom: 20 }}>Featured <span className="gradient-text">Projects</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8 }}>Enterprise-grade solutions built with modern technologies, AI integration, and production-ready practices.</p>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {projects.map((p, i) => (
            <div key={i} className="card glow-box" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1fr 300px' : '300px 1fr' }}>
                <div style={{ padding: '40px 44px', order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 12px', borderRadius: 100, background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, letterSpacing: '0.06em' }}>{p.badge}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', padding: '4px 12px', border: '1px solid var(--border)', borderRadius: 100 }}>{p.category}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, marginBottom: 10 }}>{p.title}</h2>
                  <p style={{ color: 'var(--accent)', fontSize: 14, marginBottom: 16, fontStyle: 'italic' }}>{p.tagline}</p>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <Link href={`/projects/${p.slug}`} className="btn-primary" style={{ display: 'inline-flex' }}>
                    View Full Case Study <ArrowRight size={16} />
                  </Link>
                </div>
                <div style={{
                  padding: '40px 28px',
                  background: `linear-gradient(135deg,${p.iconColor}08,${p.badgeColor}05)`,
                  borderLeft: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderRight: i % 2 !== 0 ? '1px solid var(--border)' : 'none',
                  display: 'flex', flexDirection: 'column', gap: 12,
                  order: i % 2 === 0 ? 1 : 0,
                }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${p.iconColor}15`, border: `1px solid ${p.iconColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                    <p.icon size={24} style={{ color: p.iconColor }} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>Key Features</div>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.iconColor, flexShrink: 0, marginTop: 5 }} />{h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '56px 40px', border: '1px solid var(--border)', borderRadius: 24, background: 'var(--surface)' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Next Step</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, marginBottom: 16 }}>Have a Project in Mind?</h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.8 }}>Let's discuss how I can build something impactful for you or your company.</p>
          <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
