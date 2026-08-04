'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brain, Shield, CheckCircle, Zap, Users, BookOpen, Settings, BarChart3 } from 'lucide-react'

const PRODUCTS = [
  { name: 'Murabaha',              use: 'Asset/inventory purchase financing',       color: '#1B4FBD' },
  { name: 'Ijarah',               use: 'Car & equipment leasing',                  color: '#7C3AED' },
  { name: 'Diminishing Musharakah',use: 'Home & property financing',               color: '#059669' },
  { name: 'Musharakah',           use: 'Business partnership financing',            color: '#D97706' },
  { name: 'Mudarabah',            use: 'Investment & savings accounts',             color: '#DC2626' },
  { name: 'Salam',                use: 'Agriculture advance sale financing',        color: '#0891B2' },
  { name: "Istisna'a",            use: 'Construction & manufacturing finance',      color: '#7C3AED' },
  { name: 'Wakalah',              use: 'Agency-based investment & trade finance',   color: '#059669' },
  { name: 'Musawamah',            use: 'General goods purchase (no cost disclosure)',color: '#D97706' },
]

const FEATURES = [
  { icon: Brain,    title: 'AI Need Analyzer',          desc: 'Understands customer requirements through intelligent questioning — car financing, home purchase, business investment, working capital and more.',        color: '#1B4FBD' },
  { icon: Zap,      title: 'Smart Product Matcher',     desc: 'Maps customer needs to the most suitable Shariah-compliant product using a sophisticated rule-based engine aligned with AAOIFI standards.',              color: '#7C3AED' },
  { icon: BookOpen, title: 'Shariah Knowledge Base',    desc: 'RAG-powered assistant answers staff questions using bank-approved Islamic banking policies and Shariah Supervisory Board-approved documents.',           color: '#059669' },
  { icon: Users,    title: 'Staff Copilot',             desc: 'Helps branch officers, relationship managers and call center agents explain Islamic products in customer-friendly language with full confidence.',         color: '#D97706' },
  { icon: Shield,   title: 'Eligibility Engine',        desc: 'Checks DBR (Debt Burden Ratio), income, credit bureau score, existing liabilities and risk rating against SBP IBD guidelines.',                        color: '#DC2626' },
  { icon: Settings, title: 'Admin Rule Management',     desc: 'Product teams can update product rules, eligibility criteria, document checklists, pricing and disclaimers without engineering support.',                color: '#0891B2' },
  { icon: BarChart3,'title': 'Analytics & Audit Trail', desc: 'Full audit logging of every recommendation, eligibility check and customer interaction for Shariah governance and regulatory compliance.',              color: '#7C3AED' },
  { icon: CheckCircle,'title':'Document Checklist',     desc: 'Automatically generates a tailored document checklist based on the selected Islamic finance product and customer profile.',                             color: '#059669' },
]

const PAGES = [
  'Landing Page', 'Role-Based Login (Customer/Staff/Admin)', 'Customer Dashboard',
  'AI Advisor Chat', 'Islamic Products Catalog', 'Eligibility Wizard',
  'Payment Calculator', 'Document Checklist Generator', 'Staff Copilot',
  'Shariah Knowledge Assistant', 'Admin Product Rule Management', 'Audit Trail', 'Analytics Dashboard',
]

const ROLES = ['Retail Banking Customers','SME Customers','Corporate Customers','Branch Officers','Relationship Managers','Islamic Banking Officers','Call Center Agents','Credit Officers','Product Teams']

export default function AmeenAIPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(5,150,105,0.1)', color: '#059669', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(5,150,105,0.25)', fontWeight: 600 }}>✦ AI-Powered</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(27,79,189,0.08)', color: 'var(--accent)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(27,79,189,0.2)' }}>Islamic Finance</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--bg-2)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Techlogix</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,50px)', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1 }}>
            AMEEN AI — <span style={{ color: 'var(--accent)' }}>Islamic Banking</span><br />Product Matcher
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', marginBottom: 16, letterSpacing: '0.02em' }}>
            Adaptive Matchmaking Engine for Ethical & Noble Finance
          </p>
          <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            An AI-powered Islamic banking advisory system that matches customers with the most suitable Shariah-compliant financial products based on their specific needs. Built for Techlogix to modernize Islamic banking advisory across branch, mobile, internet banking and call center channels.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 720, marginBottom: 36, fontStyle: 'italic' }}>
            Shariah governance-compliant · AAOIFI standards · SBP IBD guidelines · Zero external API cost (custom rule-based engine)
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Next.js 14','TypeScript','Tailwind CSS','Recharts','Lucide React','Custom AI Engine','AAOIFI','SBP IBD'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['22','Pages / Routes'],['9','Islamic Products'],['14','Need Categories'],['0','External API Cost']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--surface-2)', padding: '22px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--accent)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* Islamic Products Table */}
          <div style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>Islamic Products Covered</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 28 }}>
              9 Shariah-Compliant <span style={{ color: 'var(--accent)' }}>Products</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
              {PRODUCTS.map((p, i) => (
                <div key={i} style={{ padding: '16px 20px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{p.use}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16, display: 'block' }}>Key Features</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', marginBottom: 28 }}>
              Core <span style={{ color: 'var(--accent)' }}>Capabilities</span>
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

          {/* Pages + Target Users */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
            <div style={{ padding: '28px 32px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18 }}>22 Pages / Routes</div>
              {PAGES.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', marginBottom: 8 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>{p}
                </div>
              ))}
            </div>
            <div style={{ padding: '28px 32px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18 }}>Target Users</div>
              {ROLES.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-2)', marginBottom: 8 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>{r}
                </div>
              ))}
              <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(27,79,189,0.06)', border: '1px solid rgba(27,79,189,0.15)', borderRadius: 10, fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, fontStyle: 'italic' }}>
                "This recommendation is based on available information and bank-approved Islamic banking product guidelines. Final approval is subject to eligibility, documentation, credit assessment, regulatory requirements, and Shariah governance approval."
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Discuss This Project <ArrowRight size={15} /></Link>
            <Link href="/projects" className="btn-secondary"><ArrowLeft size={15} /> All Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
