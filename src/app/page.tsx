'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Download, ArrowRight, BarChart3, Smartphone, GitBranch, Star,
  ExternalLink, Bot, Brain, Layers, Server, Network, TrendingUp,
  X, Send, MessageCircle
} from 'lucide-react'

const TYPED_STRINGS = [
  'AI Engineer', 'FastAPI Architect', 'Multi-Agent Systems',
  'GPT Applications', 'LangGraph Expert',
]

function TypedText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = TYPED_STRINGS[index]
    let timeout: NodeJS.Timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else {
      setDeleting(false)
      setIndex((index + 1) % TYPED_STRINGS.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])
  return (
    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
      {displayed}<span className="typing-cursor" />
    </span>
  )
}

const stats = [
  { value: '3+', label: 'Years Experience', sub: 'AI & Backend Dev' },
  { value: '15+', label: 'AI Projects', sub: 'Production deployed' },
  { value: '50+', label: 'API Endpoints', sub: 'RESTful & GraphQL' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'Enterprise systems' },
]

const services = [
  { icon: Bot, title: 'AI-Powered Applications', desc: 'Chatbots, automation pipelines, RAG systems, and intelligent agents using GPT-4, LangChain & LangGraph.', color: '#38bdf8' },
  { icon: Server, title: 'Scalable Backend Systems', desc: 'High-performance FastAPI & Node.js architectures built for concurrency, reliability and growth.', color: '#818cf8' },
  { icon: Brain, title: 'GPT & Vector Search Integration', desc: 'Integrate semantic search with Pinecone, embed GPT into real products with fine-tuned prompting pipelines.', color: '#34d399' },
  { icon: Network, title: 'Multi-Agent Orchestration', desc: 'Design and deploy LangGraph-based multi-agent workflows that reason, plan and act autonomously.', color: '#f59e0b' },
  { icon: BarChart3, title: 'Data Analytics Dashboards', desc: 'Power BI, SQL, and DAX-powered BI solutions for real-time decision intelligence.', color: '#f472b6' },
  { icon: Layers, title: 'Full-Stack Web Apps', desc: 'Next.js 14 frontends paired with robust backends — from MVP to enterprise-grade systems.', color: '#38bdf8' },
]

const techStack = [
  { category: 'AI & ML', items: ['FastAPI', 'LangGraph', 'LangChain', 'GPT-4', 'OpenAI API', 'Pinecone', 'RAG', 'Embeddings'] },
  { category: 'Backend', items: ['Python', 'Node.js', 'Express', 'REST API', 'WebSockets', 'Redis', 'Celery'] },
  { category: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Pinecone', 'pgvector'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'CI/CD', 'Linux'] },
  { category: 'Analytics', items: ['Power BI', 'DAX', 'SQL', 'Tableau', 'Excel', 'Data Visualization'] },
]

const certifications = [
  { name: 'IBM AI Engineering', issuer: 'IBM / Coursera', color: '#38bdf8' },
  { name: 'Google Data Analytics', issuer: 'Google / Coursera', color: '#34d399' },
  { name: 'Meta Back-End Developer', issuer: 'Meta / Coursera', color: '#818cf8' },
  { name: 'CS Degree', issuer: 'University of the People (USA)', color: '#f59e0b' },
]

const projects = [
  {
    title: 'AI Healthcare Management Platform',
    desc: 'Secure hospital system with AI patient data analysis, GPT report summarization, smart billing anomaly detection, and role-based access.',
    tags: ['React', 'Node.js', 'GPT API', 'PostgreSQL'],
    badge: 'AI-Powered', badgeColor: '#34d399', href: '/projects/healthcare',
  },
  {
    title: 'MedAI Doctor — Multi-Agent Clinical System',
    desc: '5 specialized AI agents (Triage, Symptom Analyst, ICD-10 Coder, Lab Agent, Diagnosis Agent) delivering clinical-grade differential diagnosis, SOAP notes, drug lookup across 60K+ medications, and lab analysis via OpenRouter with auto model fallback.',
    tags: ['React', 'OpenRouter', 'Multi-Agent', 'LangGraph', 'ICD-10', 'HIPAA'],
    badge: 'Live · AI · Medical', badgeColor: '#00e5c8', href: '/projects/medai',
  },
  {
    title: 'Extreme MSA ERP System',
    desc: 'Enterprise-grade ERP with double-entry accounting, CRM, inventory & HR modules. GAAP compliant.',
    tags: ['Next.js', 'Node.js', 'SQLite', 'TypeScript'],
    badge: 'Production Ready', badgeColor: '#38bdf8', href: '/projects/erp',
  },
  {
    title: 'FinanceAI — Intelligent Financial Advisor',
    desc: 'RAG-powered financial advisor combining FAISS vector search, ML ensemble predictions, and real-time stock data to deliver personalised investment insights via a FastAPI backend.',
    tags: ['Python', 'FastAPI', 'RAG', 'FAISS', 'scikit-learn', 'yfinance'],
    badge: 'Live · AI', badgeColor: '#f5c542', href: '/projects/financeai',
  },
  {
    title: 'Power BI Business Analytics',
    desc: 'Advanced BI dashboards with predictive analytics, real-time data, and interactive visualizations.',
    tags: ['Power BI', 'DAX', 'SQL', 'Excel'],
    badge: 'Live', badgeColor: '#38bdf8', href: '/projects/powerbi',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    desc: 'Flutter & React Native apps with offline support, push notifications, and Firebase backend.',
    tags: ['Flutter', 'Dart', 'React Native', 'Firebase'],
    badge: 'Published', badgeColor: '#818cf8', href: '/projects/mobile',
  },
]

// ── Portfolio Chatbot ──────────────────────────────────────────────────────────
const PORTFOLIO_KB = [
  { q: ['who are you', 'about you', 'introduce'], a: "I'm Muhammad Sohaib Ahmed — an AI Engineer & Full-Stack Developer specialising in multi-agent orchestration, RAG pipelines, and enterprise backends using FastAPI, LangGraph, GPT-4, and Next.js 14." },
  { q: ['medai', 'doctor', 'medical', 'clinical', 'drug', 'lab', 'icd'], a: "MedAI Doctor is a multi-agent clinical intelligence system with 5 specialised AI agents — Triage, Symptom Analyst, ICD-10 Coder, Lab Agent, and Diagnosis Agent. It covers 60K+ medications, lab analysis, SOAP notes, differential diagnosis, and HIPAA-ready compliance. Powered by OpenRouter with auto model fallback." },
  { q: ['financeai', 'finance', 'stock', 'financial'], a: "FinanceAI is a RAG-powered financial advisor with a RandomForest + GradientBoosting ensemble ML model. It fetches live stock data via yfinance, uses FAISS vector search over 50+ financial concepts, and delivers next-day price predictions with confidence scores through a FastAPI backend." },
  { q: ['healthcare', 'hospital', 'billing'], a: "The AI Healthcare Management Platform features GPT-based clinical report summarization, smart billing anomaly detection, RBAC (Admin/Doctor/Finance), real-time patient analytics, and secure REST APIs built on Node.js + PostgreSQL." },
  { q: ['erp', 'enterprise', 'accounting'], a: "The Extreme MSA ERP is GAAP-compliant with double-entry bookkeeping, real-time CRM, multi-warehouse inventory, HR & payroll, and financial reporting — built with Next.js 14, Node.js, SQLite, and TypeScript." },
  { q: ['projects', 'work', 'portfolio', 'built'], a: "I've built 6 enterprise projects: AI Healthcare Platform, MedAI Doctor (multi-agent clinical AI), FinanceAI (RAG + ML), ERP System, Power BI Analytics, and Cross-Platform Mobile Apps. See the Projects page for full case studies!" },
  { q: ['skills', 'tech', 'stack', 'expertise'], a: "Core stack: FastAPI, LangGraph, LangChain, GPT-4, Pinecone, RAG (AI); Node.js, Express, REST APIs (Backend); Next.js 14, React 18, TypeScript (Frontend); PostgreSQL, MongoDB, FAISS, pgvector (Data); Docker, GitHub Actions, Vercel, AWS (DevOps)." },
  { q: ['multi-agent', 'agents', 'langgraph', 'orchestration'], a: "I design multi-agent systems using LangGraph for stateful orchestration. MedAI Doctor is the best example — 5 specialised agents working together: Triage → Symptom Analysis → ICD-10 Coding → Lab Review → Diagnosis, all orchestrated by a Supervisor Agent." },
  { q: ['openrouter', 'llm', 'model', 'gemini', 'llama'], a: "MedAI Doctor uses OpenRouter for LLM access — it auto-fetches live free models, tries the user's preferred model first, then falls back across all available free models automatically. No model is hardcoded." },
  { q: ['contact', 'hire', 'reach', 'available'], a: "I'm open to opportunities! Reach me through the Contact page or GitHub at github.com/msa1979msa. Available for full-time roles, freelance, and consulting." },
  { q: ['certifications', 'education', 'degree'], a: "IBM AI Engineering (Coursera), Google Data Analytics, Meta Back-End Developer, and a CS degree from University of the People (USA)." },
  { q: ['github', 'code', 'repository'], a: "GitHub: github.com/msa1979msa — 10+ repos, 50+ commits/month, 15K+ lines of code." },
  { q: ['hello', 'hi', 'hey'], a: "Hey! 👋 I'm Sohaib's AI portfolio assistant. Ask me about his projects, skills, experience, or how to hire him!" },
]

function getReply(msg: string): string {
  const lower = msg.toLowerCase()
  for (const entry of PORTFOLIO_KB) {
    if (entry.q.some(kw => lower.includes(kw))) return entry.a
  }
  return "Great question! I can best answer about Sohaib's projects (MedAI, FinanceAI, Healthcare, ERP), skills, experience, and contact. Try asking about MedAI Doctor or his multi-agent expertise! 😊"
}

function PortfolioChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "👋 Hi! I'm Sohaib's AI assistant. Ask me about MedAI Doctor, FinanceAI, his skills, or how to hire him!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, typing])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getReply(text) }])
    }, 700 + Math.random() * 400)
  }

  return (
    <>
      <button onClick={() => setOpen(o => !o)} aria-label="Open portfolio chatbot" style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 1000,
        width: 56, height: 56, borderRadius: '50%',
        background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 24px rgba(56,189,248,0.4)',
        transition: 'transform 0.2s',
      }}
        onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)' }}
        onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
      >
        {open ? <X size={22} color="white" /> : <MessageCircle size={22} color="white" />}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: 96, right: 28, zIndex: 999,
          width: 360, height: 500, background: '#0d1117',
          border: '1px solid rgba(56,189,248,0.2)', borderRadius: 20,
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
          overflow: 'hidden', animation: 'slideUp 0.25s ease',
        }}>
          <div style={{ padding: '16px 20px', background: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(129,140,248,0.08))', borderBottom: '1px solid rgba(56,189,248,0.15)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={18} color="white" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#f0f6fc' }}>Portfolio Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
                <span style={{ fontSize: 11, color: '#8b949e', fontFamily: 'var(--font-mono)' }}>Online · Sohaib's AI</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10, scrollbarWidth: 'thin', scrollbarColor: 'rgba(56,189,248,0.2) transparent' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '82%', padding: '10px 14px', fontSize: 13, lineHeight: 1.6, color: '#f0f6fc',
                  borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: m.role === 'user' ? 'linear-gradient(135deg,rgba(56,189,248,0.2),rgba(129,140,248,0.15))' : 'rgba(255,255,255,0.05)',
                  border: m.role === 'user' ? '1px solid rgba(56,189,248,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}>{m.text}</div>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex' }}>
                <div style={{ padding: '10px 16px', borderRadius: '14px 14px 14px 4px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 4 }}>
                  {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8', opacity: 0.6, display: 'inline-block', animation: `typingBounce 1.2s ease infinite ${i * 0.2}s` }} />)}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['MedAI Doctor', 'FinanceAI', 'Hire Sohaib'].map(s => (
              <button key={s} onClick={() => setInput(s)} style={{ padding: '4px 10px', borderRadius: 100, fontSize: 11, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', color: '#38bdf8', cursor: 'pointer', fontFamily: 'var(--font-mono)', transition: 'all 0.15s' }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.18)' }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(56,189,248,0.08)' }}
              >{s}</button>
            ))}
          </div>

          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 8 }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask about projects, skills..."
              style={{ flex: 1, padding: '9px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(56,189,248,0.2)', color: '#f0f6fc', fontSize: 13, outline: 'none', fontFamily: 'var(--font-body)' }} />
            <button onClick={send} style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: 'linear-gradient(135deg,#38bdf8,#818cf8)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.15s' }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            ><Send size={16} color="white" /></button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes typingBounce { 0%,60%,100%{transform:translateY(0);opacity:.4} 30%{transform:translateY(-5px);opacity:1} }
      `}</style>
    </>
  )
}

export default function HomePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(129,140,248,0.08) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="animate-in delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.06)', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#34d399', letterSpacing: '0.08em' }}>OPEN TO OPPORTUNITIES</span>
            </div>
            <div className="animate-in delay-2">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 10 }}>Muhammad Sohaib Ahmed</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}><TypedText /></h1>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }} className="gradient-text">FastAPI · LangGraph</h1>
            </div>
            <p className="animate-in delay-3" style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              I design and build <strong style={{ color: 'var(--text)' }}>production-ready AI systems</strong> and scalable backend architectures. Specializing in multi-agent orchestration, RAG pipelines, and enterprise software.
            </p>
            <div className="animate-in delay-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/projects" className="btn-primary">View My Work <ArrowRight size={16} /></Link>
              <a href="/resume.pdf" download className="btn-secondary"><Download size={16} /> Download Resume (PDF)</a>
            </div>
            <div className="animate-in delay-5" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['FastAPI', 'LangGraph', 'GPT-4', 'Next.js 14', 'Pinecone', 'Python'].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div className="animate-in delay-3" style={{ display: 'flex', justifyContent: 'center' }}><ArchDiagram /></div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 8, color: 'var(--text)' }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>What I Can Do For You</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', marginBottom: 16 }}>Solutions That Drive <span className="gradient-text">Real Business Value</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>Recruiters don't just want skills — they want solutions. Here's how I can help your company.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} className="card glow-box" style={{ padding: 28, cursor: 'default' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>Featured Work</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)' }}>Enterprise <span className="gradient-text">Projects</span></h2>
            </div>
            <Link href="/projects" className="btn-secondary">View All Projects <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
            {projects.map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="card glow-box" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '3px 10px', borderRadius: 100, background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`, letterSpacing: '0.05em' }}>{p.badge}</span>
                    <ExternalLink size={16} style={{ color: 'var(--muted)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Technical Expertise</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)' }}>Core <span className="gradient-text">Technology Stack</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {techStack.map((group, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>{group.category}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{group.items.map(item => <span key={item} className="tag">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Credentials & Trust</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4vw,40px)' }}>Certifications & <span className="gradient-text">Education</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {certifications.map((c, i) => (
              <div key={i} className="card border-glow" style={{ padding: 24, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={18} style={{ color: c.color }} /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-display)' }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{c.issuer}</div>
                  </div>
                </div>
                <div style={{ height: 3, borderRadius: 100, background: `linear-gradient(90deg,${c.color},transparent)` }} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, padding: 28, border: '1px solid var(--border)', borderRadius: 16, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <GitBranch size={24} style={{ color: 'var(--accent)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Active on GitHub</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>github.com/msa1979msa</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['15K+','Lines of Code'],['50+','Commits/Month'],['10+','Repositories'],['3+','Years Active']].map(([v,l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--accent)' }}>{v}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="https://github.com/msa1979msa" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13 }}>
              <ExternalLink size={14} /> View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ padding: '64px 48px', borderRadius: 24, textAlign: 'center', background: 'linear-gradient(135deg,rgba(56,189,248,0.08),rgba(129,140,248,0.08))', border: '1px solid rgba(56,189,248,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle,rgba(56,189,248,0.1),transparent 70%)' }} />
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Let's Build Together</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,4vw,40px)', marginBottom: 16 }}>Ready to Build Something <span className="gradient-text">Extraordinary?</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 36, lineHeight: 1.8 }}>Whether it's an AI agent pipeline, a scalable API, or a full enterprise system — I bring vision to production.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Start a Conversation <ArrowRight size={16} /></Link>
              <a href="/resume.pdf" download className="btn-secondary"><Download size={16} /> Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      <PortfolioChatbot />
    </div>
  )
}

function ArchDiagram() {
  return (
    <div style={{ width: '100%', maxWidth: 420, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 24, fontFamily: 'var(--font-mono)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 20, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Network size={16} /> System Architecture
      </div>
      <svg viewBox="0 0 380 420" style={{ width: '100%' }}>
        <line x1="190" y1="58" x2="190" y2="85" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="190" y1="135" x2="190" y2="162" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="150" y1="210" x2="105" y2="240" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="230" y1="210" x2="275" y2="240" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="85" y1="292" x2="85" y2="318" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="295" y1="292" x2="295" y2="318" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <ArchNode x={190} y={30} label="User / Client" color="#38bdf8" emoji="👤" width={130} />
        <ArchNode x={190} y={110} label="Next.js 14 Frontend" color="#818cf8" emoji="⚡" width={160} />
        <ArchNode x={190} y={190} label="FastAPI Backend" color="#38bdf8" emoji="🚀" width={150} />
        <ArchNode x={85} y={270} label="LangGraph Agents" color="#34d399" emoji="🧠" width={140} />
        <ArchNode x={85} y={348} label="GPT-4 / LLM" color="#f59e0b" emoji="🤖" width={120} />
        <ArchNode x={295} y={270} label="PostgreSQL / MongoDB" color="#f472b6" emoji="🗄️" width={150} />
        <ArchNode x={295} y={348} label="Pinecone Vector DB" color="#a78bfa" emoji="📦" width={145} />
      </svg>
      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {[['#38bdf8','API Layer'],['#34d399','AI Agents'],['#818cf8','Frontend'],['#f472b6','Storage']].map(([c,l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--muted)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: c, display: 'inline-block' }} />{l}
          </div>
        ))}
      </div>
    </div>
  )
}

function ArchNode({ x, y, label, color, emoji, width }: { x: number; y: number; label: string; color: string; emoji: string; width: number }) {
  const hw = width / 2
  return (
    <g>
      <rect x={x-hw} y={y-22} width={width} height={44} rx={10} fill={`${color}10`} stroke={`${color}50`} strokeWidth="1" />
      <text x={x-hw+12} y={y+5} fontSize="14" dominantBaseline="middle">{emoji}</text>
      <text x={x-hw+32} y={y+5} fontSize="10" fill={color} dominantBaseline="middle" fontFamily="var(--font-mono)">{label}</text>
    </g>
  )
}
