'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Download, ArrowRight, Cpu, Globe, Database, Zap, Shield, Code2,
  BarChart3, Smartphone, GitBranch, Star, ExternalLink, ChevronRight,
  Bot, Brain, Layers, Server, Network
} from 'lucide-react'

const TYPED_STRINGS = [
  'AI Engineer',
  'FastAPI Architect',
  'Multi-Agent Systems',
  'GPT Applications',
  'LangGraph Expert',
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
    } else if (deleting && displayed.length === 0) {
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
    badge: 'AI-Powered',
    badgeColor: '#34d399',
    href: '/projects/healthcare',
  },
  {
    title: 'Extreme MSA ERP System',
    desc: 'Enterprise-grade ERP with double-entry accounting, CRM, inventory & HR modules. GAAP compliant.',
    tags: ['Next.js', 'Node.js', 'SQLite', 'TypeScript'],
    badge: 'Production Ready',
    badgeColor: '#38bdf8',
    href: '/projects/erp',
  },
  {
    title: 'Power BI Business Analytics',
    desc: 'Advanced BI dashboards with predictive analytics, real-time data, and interactive visualizations.',
    tags: ['Power BI', 'DAX', 'SQL', 'Excel'],
    badge: 'Live',
    badgeColor: '#38bdf8',
    href: '/projects/powerbi',
  },
  {
    title: 'Cross-Platform Mobile Apps',
    desc: 'Flutter & React Native apps with offline support, push notifications, and Firebase backend.',
    tags: ['Flutter', 'Dart', 'React Native', 'Firebase'],
    badge: 'Published',
    badgeColor: '#818cf8',
    href: '/projects/mobile',
  },
]

// Architecture diagram nodes
const archNodes = [
  { id: 'user', label: 'User / Client', x: 50, y: 20, color: '#38bdf8', icon: '👤' },
  { id: 'frontend', label: 'Next.js 14\nFrontend', x: 50, y: 38, color: '#818cf8', icon: '⚡' },
  { id: 'api', label: 'FastAPI\nBackend', x: 50, y: 56, color: '#38bdf8', icon: '🚀' },
  { id: 'agents', label: 'LangGraph\nAI Agents', x: 18, y: 74, color: '#34d399', icon: '🧠' },
  { id: 'gpt', label: 'GPT-4 / LLM', x: 18, y: 92, color: '#f59e0b', icon: '🤖' },
  { id: 'db', label: 'PostgreSQL\n/ MongoDB', x: 82, y: 74, color: '#f472b6', icon: '🗄️' },
  { id: 'vector', label: 'Pinecone\nVector DB', x: 82, y: 92, color: '#a78bfa', icon: '📦' },
]

export default function HomePage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow orbs */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '20%', right: '10%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
        }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <div className="animate-in delay-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(52,211,153,0.3)', background: 'rgba(52,211,153,0.06)', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399', display: 'inline-block' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#34d399', letterSpacing: '0.08em' }}>
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* Headline */}
            <div className="animate-in delay-2">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 10 }}>
                Muhammad Sohaib Ahmed
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>
                <TypedText />
              </h1>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }} className="gradient-text">
                FastAPI · LangGraph
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="animate-in delay-3" style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 36, maxWidth: 520 }}>
              I design and build <strong style={{ color: 'var(--text)' }}>production-ready AI systems</strong> and scalable backend architectures used in real-world applications. Specializing in multi-agent orchestration, RAG pipelines, and enterprise software.
            </p>

            {/* CTA buttons */}
            <div className="animate-in delay-4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Download Resume (PDF)
              </a>
            </div>

            {/* Quick tech tags */}
            <div className="animate-in delay-5" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['FastAPI', 'LangGraph', 'GPT-4', 'Next.js 14', 'Pinecone', 'Python'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: Architecture Diagram */}
          <div className="animate-in delay-3" style={{ display: 'flex', justifyContent: 'center' }}>
            <ArchDiagram />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ STATS ═══════════════════════════ */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: 'var(--surface)', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--accent)', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 8, color: 'var(--text)' }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ WHAT I CAN DO ═══════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>What I Can Do For You</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
              Solutions That Drive <span className="gradient-text">Real Business Value</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
              Recruiters don't just want skills — they want solutions. Here's how I can help your company.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} className="card glow-box" style={{ padding: 28, cursor: 'default' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${s.color}15`,
                  border: `1px solid ${s.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ FEATURED PROJECTS ═══════════════════════════ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>Featured Work</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 40px)' }}>
                Enterprise <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link href="/projects" className="btn-secondary">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {projects.map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="card glow-box" style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11, padding: '3px 10px', borderRadius: 100,
                      background: `${p.badgeColor}15`, color: p.badgeColor, border: `1px solid ${p.badgeColor}30`,
                      letterSpacing: '0.05em',
                    }}>
                      {p.badge}
                    </span>
                    <ExternalLink size={16} style={{ color: 'var(--muted)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TECH STACK ═══════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Technical Expertise</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Core <span className="gradient-text">Technology Stack</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {techStack.map((group, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 16, textTransform: 'uppercase' }}>
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {group.items.map(item => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ TRUST SIGNALS ═══════════════════════════ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Credentials & Trust</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Certifications & <span className="gradient-text">Education</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {certifications.map((c, i) => (
              <div key={i} className="card border-glow" style={{ padding: 24, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Star size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-display)' }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{c.issuer}</div>
                  </div>
                </div>
                <div style={{ height: 3, borderRadius: 100, background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </div>
            ))}
          </div>

          {/* GitHub stats strip */}
          <div style={{ marginTop: 40, padding: 28, border: '1px solid var(--border)', borderRadius: 16, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <GitBranch size={24} style={{ color: 'var(--accent)' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>Active on GitHub</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>github.com/msa1979msa</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[['15K+', 'Lines of Code'], ['50+', 'Commits/Month'], ['10+', 'Repositories'], ['3+', 'Years Active']].map(([v, l]) => (
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

      {/* ═══════════════════════════ CTA ═══════════════════════════ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            padding: '64px 48px', borderRadius: 24, textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(129,140,248,0.08))',
            border: '1px solid rgba(56,189,248,0.2)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.1), transparent 70%)' }} />
            <div className="section-label" style={{ justifyContent: 'center', marginBottom: 20 }}>Let's Build Together</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 40px)', marginBottom: 16 }}>
              Ready to Build Something <span className="gradient-text">Extraordinary?</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 36, lineHeight: 1.8 }}>
              Whether it's an AI agent pipeline, a scalable API, or a full enterprise system — I bring vision to production.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ─── Architecture Diagram Component ───
function ArchDiagram() {
  return (
    <div style={{
      width: '100%', maxWidth: 420,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 20,
      padding: 24,
      fontFamily: 'var(--font-mono)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 20, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Network size={16} /> System Architecture
      </div>

      {/* Diagram SVG */}
      <svg viewBox="0 0 380 420" style={{ width: '100%' }}>
        {/* Connection lines */}
        {/* User → Frontend */}
        <line x1="190" y1="58" x2="190" y2="85" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* Frontend → API */}
        <line x1="190" y1="135" x2="190" y2="162" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* API → Agents */}
        <line x1="150" y1="210" x2="105" y2="240" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* API → DB */}
        <line x1="230" y1="210" x2="275" y2="240" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* Agents → GPT */}
        <line x1="85" y1="292" x2="85" y2="318" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* DB → Vector */}
        <line x1="295" y1="292" x2="295" y2="318" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* User */}
        <ArchNode x={190} y={30} label="User / Client" color="#38bdf8" emoji="👤" width={130} />
        {/* Frontend */}
        <ArchNode x={190} y={110} label="Next.js 14 Frontend" color="#818cf8" emoji="⚡" width={160} />
        {/* API */}
        <ArchNode x={190} y={190} label="FastAPI Backend" color="#38bdf8" emoji="🚀" width={150} />
        {/* Agents */}
        <ArchNode x={85} y={270} label="LangGraph Agents" color="#34d399" emoji="🧠" width={140} />
        {/* GPT */}
        <ArchNode x={85} y={348} label="GPT-4 / LLM" color="#f59e0b" emoji="🤖" width={120} />
        {/* DB */}
        <ArchNode x={295} y={270} label="PostgreSQL / MongoDB" color="#f472b6" emoji="🗄️" width={150} />
        {/* Vector */}
        <ArchNode x={295} y={348} label="Pinecone Vector DB" color="#a78bfa" emoji="📦" width={145} />
      </svg>

      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {[['#38bdf8', 'API Layer'], ['#34d399', 'AI Agents'], ['#818cf8', 'Frontend'], ['#f472b6', 'Storage']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--muted)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: c, display: 'inline-block' }} />
            {l}
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
      <rect
        x={x - hw} y={y - 22}
        width={width} height={44}
        rx={10}
        fill={`${color}10`}
        stroke={`${color}50`}
        strokeWidth="1"
      />
      <text x={x - hw + 12} y={y + 5} fontSize="14" dominantBaseline="middle">{emoji}</text>
      <text x={x - hw + 32} y={y + 5} fontSize="10" fill={color} dominantBaseline="middle" fontFamily="var(--font-mono)">
        {label}
      </text>
    </g>
  )
}
