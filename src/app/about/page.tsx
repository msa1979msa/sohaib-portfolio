'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, GraduationCap, Briefcase, Star, ChevronRight } from 'lucide-react'

const SKILLS = [
  { name: 'AI Engineering (LangGraph / GPT-4)',   pct: 92, color: '#2563EB' },
  { name: 'FastAPI & Backend Architecture',        pct: 90, color: '#7C3AED' },
  { name: 'Next.js 14 & Frontend (TypeScript)',    pct: 85, color: '#059669' },
  { name: 'Power BI & Data Analytics',             pct: 88, color: '#D97706' },
  { name: 'PostgreSQL & Database Design',           pct: 85, color: '#DC2626' },
  { name: 'Docker & DevOps',                       pct: 74, color: '#0891B2' },
  { name: 'Flutter & Mobile Development',          pct: 78, color: '#7C3AED' },
  { name: 'RAG & Vector Search (Pinecone)',        pct: 88, color: '#2563EB' },
]

const TIMELINE = [
  {
    type: 'work',
    role: 'AI Engineer | Backend Systems (FastAPI) | Multi-Agent Architect | GPT Applications',
    org: 'Freelance / Self-Employed',
    period: '2024 – Present',
    location: 'Karachi, Pakistan (Remote)',
    color: '#2563EB',
    points: [
      'Built production AI systems using LangGraph, GPT-4 and RAG pipelines for enterprise clients',
      'Architected FastAPI backends with PostgreSQL serving 50+ REST endpoints under high concurrency',
      'Developed an AI-enabled healthcare management platform with RBAC and GPT report summarization',
      'Delivered Power BI dashboards with real-time KPIs for finance decision-makers',
      'Created AMEEN AI — Islamic banking product matcher deployed at Techlogix',
    ],
  },
  {
    type: 'edu',
    role: 'Associate Degree in Computer Science',
    org: 'University of the People (USA)',
    period: '2026',
    location: 'Online',
    color: '#7C3AED',
    points: [],
  },
]

const CERTS = [
  { name: 'IBM AI Engineering Professional Certificate', issuer: 'IBM / Coursera',    color: '#2563EB' },
  { name: 'Google Data Analytics Certificate',           issuer: 'Google / Coursera', color: '#059669' },
  { name: 'Meta Back-End Developer Certificate',         issuer: 'Meta / Coursera',   color: '#7C3AED' },
  { name: 'IBM Data Science Certificate',                issuer: 'IBM / Coursera',    color: '#D97706' },
]

function SkillBar({ name, pct, color, visible }: { name: string; pct: number; color: string; visible: boolean }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-2)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: color, fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{ height: 7, background: 'var(--surface-2)', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 100,
          background: `linear-gradient(90deg, ${color}, ${color}90)`,
          width: visible ? `${pct}%` : '0%',
          transition: 'width 1.3s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
    </div>
  )
}

export default function AboutPage() {
  const skillsRef = useRef<HTMLDivElement>(null)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true) }, { threshold: 0.15 })
    if (skillsRef.current) obs.observe(skillsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ paddingTop: 66 }}>

      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', background: 'linear-gradient(180deg,#F8FAFC 0%,#fff 100%)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 60, alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Professional Profile</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 52px)', letterSpacing: '-0.02em', marginBottom: 14, lineHeight: 1.1 }}>
              Muhammad <span className="gradient-text">Sohaib Ahmed</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', marginBottom: 22, letterSpacing: '0.03em' }}>
              AI Engineer · FastAPI · Multi-Agent Systems · GPT Applications
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 560, marginBottom: 18 }}>
              I'm a Full-Stack Developer and AI Engineer specializing in production-ready intelligent systems and scalable backend architectures. My work sits at the intersection of <strong style={{ color: 'var(--text)' }}>technical engineering and business intelligence</strong>.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, maxWidth: 560, marginBottom: 36 }}>
              From LangGraph multi-agent pipelines to Power BI dashboards, from Flutter mobile apps to FastAPI backends — I deliver end-to-end solutions that scale.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Let's Talk <ArrowRight size={15} /></Link>
              <a href="/resume.pdf" download className="btn-secondary"><Download size={15} /> Resume (PDF)</a>
            </div>
          </div>

          {/* Profile card */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, padding: 32, boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, overflow: 'hidden', border: '2px solid rgba(27,79,189,0.3)', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', flexShrink: 0 }}>
                <img src="/avatar3.png" alt="Sohaib Ahmed" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text)' }}>Muhammad Sohaib</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 2 }}>AI Engineer & Full-Stack Dev</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 6, padding: '3px 10px', borderRadius: 100, background: '#ECFDF5', border: '1px solid rgba(5,150,105,0.25)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#059669' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#059669', letterSpacing: '0.06em' }}>OPEN TO WORK</span>
                </div>
              </div>
            </div>
            {[
              { icon: MapPin,         label: 'Location',   val: 'Karachi, Pakistan (Remote)' },
              { icon: GraduationCap,  label: 'Education',  val: 'Associate CS, UoPeople USA' },
              { icon: Briefcase,      label: 'Experience', val: '3+ Years AI & Backend Dev' },
              { icon: Star,           label: 'Specialty',  val: 'LangGraph · FastAPI · GPT-4' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <r.icon size={14} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 2, fontWeight: 500 }}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <div style={{ padding: '0 24px', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 0', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,2.5vw,22px)', fontWeight: 600, color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.7 }}>
            "I bridge <span className="gradient-text">technical innovation</span> with business intelligence to create systems that are not just functional, but transformative."
          </p>
        </div>
      </div>

      {/* Skills with animated progress bars */}
      <section style={{ padding: '88px 24px' }} ref={skillsRef}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="two-col">
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Technical Skills</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,36px)', letterSpacing: '-0.02em', marginBottom: 36 }}>
              Core <span className="gradient-text">Expertise</span>
            </h2>
            {SKILLS.map((s, i) => <SkillBar key={i} {...s} visible={skillsVisible} />)}
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>What I Work With</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,36px)', letterSpacing: '-0.02em', marginBottom: 36 }}>
              Full <span className="gradient-text">Tech Stack</span>
            </h2>
            {[
              { cat: 'AI & ML',    items: ['LangGraph','LangChain','GPT-4','OpenAI API','Pinecone','RAG','Embeddings'],    color: '#2563EB' },
              { cat: 'Backend',    items: ['FastAPI','Node.js','Python','Express','REST API','Redis','WebSockets'],          color: '#7C3AED' },
              { cat: 'Frontend',   items: ['Next.js 14','React 18','TypeScript','Tailwind CSS'],                            color: '#059669' },
              { cat: 'Databases',  items: ['PostgreSQL','MongoDB','SQLite','pgvector','Pinecone'],                          color: '#D97706' },
              { cat: 'DevOps',     items: ['Docker','GitHub Actions','Vercel','AWS','CI/CD'],                               color: '#0891B2' },
            ].map((g, i) => (
              <div key={i} style={{ marginBottom: 18, padding: '16px 20px', background: 'var(--surface)', borderRadius: 12, border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: g.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{g.cat}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {g.items.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '0 24px 88px', background: 'var(--surface)', paddingTop: 88 }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Career & Education</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,36px)', letterSpacing: '-0.02em', marginBottom: 48 }}>
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div style={{ position: 'relative' }}>
            {/* Line */}
            <div style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 2, background: 'var(--border)', borderRadius: 1 }} />
            {TIMELINE.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 28, marginBottom: 36, position: 'relative' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, boxShadow: `0 0 0 4px #fff, 0 0 0 6px ${t.color}30` }}>
                  {t.type === 'work' ? <Briefcase size={17} style={{ color: '#fff' }} /> : <GraduationCap size={17} style={{ color: '#fff' }} />}
                </div>
                <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 28px', flex: 1, boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', lineHeight: 1.4 }}>{t.role}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{t.period}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginBottom: t.points.length > 0 ? 16 : 0, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, color: t.color, fontWeight: 600 }}>{t.org}</span>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>· {t.location}</span>
                  </div>
                  {t.points.map((p, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 7 }}>
                      <span style={{ color: t.color, flexShrink: 0 }}>▸</span> {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Trust Signals</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,36px)', letterSpacing: '-0.02em', marginBottom: 40 }}>
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CERTS.map((c, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: `${c.color}12`, border: `1px solid ${c.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Star size={18} style={{ color: c.color, fill: c.color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>{c.issuer}</div>
                  </div>
                </div>
                <div style={{ height: 3, borderRadius: 100, background: `linear-gradient(90deg, ${c.color}, transparent)`, marginTop: 18 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
