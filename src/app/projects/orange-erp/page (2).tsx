'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, Shield, Database, Zap, Users, FileText, BarChart3, Bot, CheckCircle } from 'lucide-react'

const ENTITIES = [
  { name: '🇵🇰 Pakistan Entity',   currency: 'PKR', tax: 'FBR / Sales Tax',     color: '#059669', highlight: 'Multi-warehouse inventory + payroll' },
  { name: '🇦🇪 UAE Entity',        currency: 'AED', tax: 'VAT 5%',              color: '#1B4FBD', highlight: 'VAT-compliant billing & reporting' },
  { name: '🇸🇦 Saudi Arabia Entity',currency: 'SAR', tax: 'VAT 15% / Zakat',    color: '#D97706', highlight: 'Zakat-aware financial reporting' },
]

const FEATURES = [
  { icon: Globe,      title: 'Multi-Entity Architecture',      desc: 'Three completely isolated entities (Pakistan, UAE, Saudi Arabia) with Row Level Security. Each entity has its own chart of accounts, currency, tax rules and users.',                    color: '#1B4FBD' },
  { icon: Database,   title: 'Immutable Double-Entry Ledger',  desc: 'GAAP-compliant immutable ledger with cryptographic hash chaining. Every journal entry is permanently recorded and tamper-proof — no edits, only reversals.',                            color: '#7C3AED' },
  { icon: Shield,     title: 'Tax Centre',                     desc: 'Country-specific tax engines: FBR/Sales Tax for Pakistan, VAT 5% for UAE, VAT 15% + Zakat for Saudi Arabia. Automated tax calculations and regulatory reporting.',                       color: '#059669' },
  { icon: FileText,   title: 'Compliance Screening with OCR',  desc: 'AI-assisted document scanning using OCR. Automatically extracts, validates and flags compliance-sensitive information from uploaded contracts and financial documents.',                  color: '#D97706' },
  { icon: Bot,        title: 'AI Entry Assistant (Mada)',      desc: 'Mada — a floating rule-based AI chatbot character that assists accountants with journal entry classification, account mapping and compliance queries in real time.',                        color: '#DC2626' },
  { icon: Users,      title: 'Role-Based Access Control',      desc: 'Granular RBAC with Supabase RLS policies. Each user is scoped to their entity and role — Admin, Accountant, Auditor, Manager — with zero cross-entity data leakage.',                   color: '#0891B2' },
  { icon: BarChart3,  title: 'Financial Reporting Suite',      desc: 'Real-time P&L, Balance Sheet, Cash Flow statements, Trial Balance and customizable management reports across single or consolidated entities.',                                            color: '#7C3AED' },
  { icon: Zap,        title: 'Multi-Currency Transactions',    desc: 'Native multi-currency support with real-time exchange rate fetching. Transactions in PKR, AED and SAR with automatic conversion to base reporting currency.',                            color: '#059669' },
]

const TECH = [
  ['Frontend',  'Next.js 14 + TypeScript + Tailwind CSS',  '#1B4FBD'],
  ['Backend',   'Supabase (PostgreSQL + RLS + Auth)',       '#059669'],
  ['AI (Mada)', 'Custom Rule-Based AI Chatbot Engine',      '#DC2626'],
  ['OCR',       'Document Scanning & Text Extraction',      '#D97706'],
  ['Auth',      'Supabase Auth + JWT + Row Level Security', '#7C3AED'],
  ['Reports',   'Real-time Financial Statements Engine',    '#0891B2'],
]

export default function OrangeERPPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(251,146,60,0.1)', color: '#EA580C', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(251,146,60,0.3)', fontWeight: 600 }}>🟠 Production Ready</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(27,79,189,0.08)', color: 'var(--accent)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(27,79,189,0.2)' }}>Multi-Entity ERP</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--bg-2)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>3 Countries · AI-Powered</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,50px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>
            Orange Consultant <span style={{ color: '#EA580C' }}>ERP</span> —<br />3-Entity Global System
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            A sophisticated multi-entity enterprise resource planning system built for Orange Consultant, spanning Pakistan, UAE and Saudi Arabia. Features an immutable double-entry ledger, country-specific tax compliance, AI-assisted accounting (Mada), OCR-based document screening and complete financial reporting.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 720, marginBottom: 28, fontStyle: 'italic' }}>
            ⚠️ Note: Supabase secret key was identified as exposed during development — key rotation is required before production deployment.
          </p>

          {/* Live link */}
          <a href="https://orange-erp.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 18px', borderRadius: 100, background: 'rgba(234,88,12,0.08)', border: '1px solid rgba(234,88,12,0.25)', color: '#EA580C', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: 12, marginBottom: 36, transition: 'all 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(234,88,12,0.12)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(234,88,12,0.08)'}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#EA580C', display: 'inline-block' }} />
            orange-erp.vercel.app <ArrowRight size={13} />
          </a>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Next.js 14','TypeScript','Supabase','PostgreSQL','RLS','Tailwind CSS','OCR','JWT','GAAP','Multi-Currency'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['3','Countries / Entities'],['GAAP','Immutable Ledger'],['AI (Mada)','Chat Assistant'],['3','Currencies (PKR/AED/SAR)']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--surface-2)', padding: '22px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#EA580C', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* 3 Entities */}
          <div style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>Multi-Entity Structure</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 28 }}>
              3 Isolated <span style={{ color: '#EA580C' }}>Entities</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
              {ENTITIES.map((e, i) => (
                <div key={i} style={{ padding: '28px', background: 'var(--surface-2)', border: `1px solid ${e.color}25`, borderRadius: 16, borderLeft: `4px solid ${e.color}` }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 16 }}>{e.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <div style={{ display: 'flex', gap: 10, fontSize: 13 }}>
                      <span style={{ color: 'var(--muted)', width: 70, flexShrink: 0 }}>Currency</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: e.color }}>{e.currency}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, fontSize: 13 }}>
                      <span style={{ color: 'var(--muted)', width: 70, flexShrink: 0 }}>Tax</span>
                      <span style={{ color: 'var(--text-2)' }}>{e.tax}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, fontSize: 13 }}>
                      <span style={{ color: 'var(--muted)', width: 70, flexShrink: 0 }}>Highlight</span>
                      <span style={{ color: 'var(--text-2)' }}>{e.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>System Features</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 28 }}>
              Core <span style={{ color: '#EA580C' }}>Capabilities</span>
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

          {/* Tech stack */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 48 }}>
            {TECH.map(([l,v,c],i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: (c as string)+'08', border: `1px solid ${c as string}20` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c as string, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>{l}</div>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://orange-erp.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary">View Live Demo <ArrowRight size={15} /></a>
            <Link href="/contact" className="btn-secondary">Discuss This Project</Link>
            <Link href="/projects" className="btn-secondary"><ArrowLeft size={15} /> All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
