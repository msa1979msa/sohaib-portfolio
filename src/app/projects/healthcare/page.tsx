'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brain, TrendingUp, Shield, FileText, Calendar, BarChart3, CheckCircle, Zap } from 'lucide-react'
export default function HealthcarePage() {
  const ai = ['AI-driven patient data analysis for early risk detection and pattern recognition','Intelligent medical assistant for handling patient and staff queries in real time','Automated clinical report summarization using GPT-based models','Smart billing anomaly detection to identify unusual or fraudulent transactions','Predictive insights for patient trends, hospital load, and operational efficiency']
  const modules = [
    { icon:'🩺', title:'Patient Management', desc:'Centralized patient records, medical history tracking, and real-time clinical data access.', color:'#2563EB' },
    { icon:'💳', title:'Billing & Finance',   desc:'Secure billing system with AI-based anomaly detection and comprehensive financial tracking.', color:'#059669' },
    { icon:'👨‍⚕️', title:'Role-Based Access', desc:'Granular permissions for Admin, Doctors, Finance, and Staff using JWT authentication.', color:'#7C3AED' },
    { icon:'🧾', title:'Clinical Data',       desc:'AI-assisted processing, structuring, and summarization of medical reports and records.', color:'#D97706' },
    { icon:'📅', title:'Appointments',        desc:'Efficient scheduling system for managing appointments, availability, and workflows.', color:'#DC2626' },
    { icon:'📊', title:'Reporting',           desc:'Real-time dashboards for hospital performance, financial reports, and patient insights.', color:'#0891B2' },
  ]
  const tech = [['Frontend','React + Tailwind CSS','#7C3AED'],['Backend','Node.js + Express + REST APIs','#2563EB'],['Database','PostgreSQL with optimized schema','#059669'],['Security','JWT + RBAC + Secure Middleware','#D97706'],['AI','GPT API for intelligent processing','#DC2626']]
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.15s' }} onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'} onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}><ArrowLeft size={15} /> Back to Projects</Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: '#ECFDF5', color: '#059669', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(5,150,105,0.25)', fontWeight: 600 }}>✦ AI-Powered</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--surface)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Healthcare · Enterprise</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,48px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>AI-Enabled Healthcare <span className="gradient-text">Management Platform</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 760, marginBottom: 12 }}>A secure, scalable, and intelligent healthcare system combining clinical data management with AI-driven decision support. Built to modernize hospital operations, enhance patient care, and deliver real-time insights.</p>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, maxWidth: 700, marginBottom: 36, fontStyle: 'italic' }}>Designed by combining strong backend engineering with practical healthcare and financial system expertise.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['React','Node.js','Express','PostgreSQL','JWT','RBAC','GPT API','REST API','Tailwind CSS'].map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['5+','Core Modules'],['30+','API Endpoints'],['AI','Decision Support'],['RBAC','Secure Access']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--accent)', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }} className="two-col">
            <div style={{ padding: 32, borderRadius: 18, background: '#EFF6FF', border: '1px solid rgba(37,99,235,0.15)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}><Brain size={20} style={{ color: 'var(--accent)' }} /> 🧠 AI Capabilities</h3>
              {ai.map((a,i) => <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}><CheckCircle size={15} style={{ color: '#059669', flexShrink: 0, marginTop: 3 }} /><p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{a}</p></div>)}
            </div>
            <div style={{ padding: 32, borderRadius: 18, background: '#F5F3FF', border: '1px solid rgba(124,58,237,0.15)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}><TrendingUp size={20} style={{ color: '#7C3AED' }} /> 📊 Business Impact</h3>
              {['Enhanced decision-making through AI-assisted insights','Reduced manual workload via intelligent automation','Improved patient experience with faster processing','Strengthened financial control with anomaly detection','Enabled scalable, multi-role hospital operations'].map((a,i) => <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}><Zap size={14} style={{ color: '#7C3AED', flexShrink: 0, marginTop: 4 }} /><p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{a}</p></div>)}
            </div>
          </div>
          <div className="section-label" style={{ marginBottom: 14 }}>Core Modules</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', marginBottom: 32 }}>⚙️ System <span className="gradient-text">Modules</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginBottom: 56 }}>
            {modules.map((m,i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>{m.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{m.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>{m.desc}</p>
                <div style={{ height: 3, borderRadius: 100, background: `linear-gradient(90deg, ${m.color}, transparent)`, marginTop: 16 }} />
              </div>
            ))}
          </div>
          <div className="section-label" style={{ marginBottom: 14 }}>Technical Architecture</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', marginBottom: 32 }}>🏗️ Tech <span className="gradient-text">Stack</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 48 }}>
            {tech.map(([l,v,c],i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: c+'08', border: `1px solid ${c}20` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>{l}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{v}</div>
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
