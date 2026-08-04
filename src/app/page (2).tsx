'use client'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const NeuralBackground = dynamic(() => import('@/components/NeuralBackground'), { ssr: false })
import Link from 'next/link'
import { Mail, Linkedin, Twitter, Github, Home as HomeIcon, ArrowRight, ExternalLink, Download, ChevronRight, Star, Quote } from 'lucide-react'

/* ─── Typewriter ─── */
const TYPED = ['I_build_AI_systems.py', 'I_architect_APIs.ts', 'I_ship_products.sh', 'I_love_LangGraph.py']

function TypeWriter() {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = TYPED[idx]
    let t: NodeJS.Timeout
    if (!del && txt.length < cur.length)       t = setTimeout(() => setTxt(cur.slice(0, txt.length + 1)), 78)
    else if (!del && txt.length === cur.length) t = setTimeout(() => setDel(true), 2200)
    else if (del && txt.length > 0)             t = setTimeout(() => setTxt(txt.slice(0, -1)), 38)
    else { setDel(false); setIdx((idx + 1) % TYPED.length) }
    return () => clearTimeout(t)
  }, [txt, del, idx])
  return <span style={{ fontFamily: 'var(--font-mono)' }} className="typing-cursor">{txt}</span>
}

/* ─── Skill Icon ─── */
const SKILLS = [
  { name: 'Python',     slug: 'python',             pct: 95, color: '#3776AB' },
  { name: 'FastAPI',    slug: 'fastapi',             pct: 90, color: '#009688' },
  { name: 'OpenAI',     slug: 'openai',              pct: 92, color: '#10A37F', label: 'GPT' },
  { name: 'Next.js',    slug: 'nextdotjs',           pct: 86, color: '#000000' },
  { name: 'React',      slug: 'react',               pct: 85, color: '#61DAFB' },
  { name: 'TypeScript', slug: 'typescript',          pct: 83, color: '#3178C6' },
  { name: 'Node.js',    slug: 'nodedotjs',           pct: 82, color: '#339933' },
  { name: 'PostgreSQL', slug: 'postgresql',          pct: 86, color: '#4169E1' },
  { name: 'MongoDB',    slug: 'mongodb',             pct: 80, color: '#47A248' },
  { name: 'Docker',     slug: 'docker',              pct: 75, color: '#2496ED' },
  { name: 'AWS',        slug: 'amazonwebservices',   pct: 70, color: '#FF9900' },
  { name: 'Flutter',    slug: 'flutter',             pct: 78, color: '#02569B' },
  { name: 'Firebase',   slug: 'firebase',            pct: 76, color: '#FFCA28' },
  { name: 'Git',        slug: 'git',                 pct: 92, color: '#F05032' },
  { name: 'Redis',      slug: 'redis',               pct: 73, color: '#DC382D' },
  { name: 'TensorFlow', slug: 'tensorflow',          pct: 66, color: '#FF6F00' },
  { name: 'Power BI',   slug: 'microsoftpowerbi',    pct: 88, color: '#F2C811', label: 'PBI' },
  { name: 'LangChain',  slug: 'langchain',           pct: 87, color: '#1C7A4A', label: 'LC'  },
  { name: 'LangGraph',  slug: 'langgraph',           pct: 88, color: '#7C3AED', label: 'LG'  },
  { name: 'Pinecone',   slug: 'pinecone',            pct: 85, color: '#1B4FBD', label: 'PC'  },
]

function SkillIcon({ name, slug, pct, label, color }: {
  name: string; slug: string; pct: number; label?: string; color?: string
}) {
  const [hov, setHov] = useState(false)
  const [err, setErr] = useState(false)   // image failed to load

  const showLabel = err || !!label        // show text if error or explicit label

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div
        className="skill-circle"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        title={`${name} — ${pct}%`}
      >
        {hov ? (
          /* Hover: show % */
          <span className="skill-pct">{pct}%</span>

        ) : showLabel ? (
          /* Fallback / custom label */
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: label && label.length > 2 ? 11 : 14,
            fontWeight: 700,
            color: color || 'var(--muted)',
            letterSpacing: '-0.02em',
            textShadow: color ? `0 0 12px ${color}40` : 'none',
          }}>
            {label || name.slice(0, 2).toUpperCase()}
          </span>

        ) : (
          /* Try CDN icon */
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={name}
            className="skill-img"
            onError={() => setErr(true)}   // on fail → show label
          />
        )}
      </div>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', textAlign: 'center' }}>{name}</span>
    </div>
  )
}

/* ─── Experience ─── */
const EXP = [
  {
    role: 'AI Engineer | Multi-Agent Architect | GPT Applications',
    company: 'Freelance / Self-Employed',
    period: '2024 – Present',
    color: '#1B4FBD',
    points: [
      'Built production AI systems using LangGraph, GPT-4 and RAG pipelines for enterprise clients',
      'Architected FastAPI backends with PostgreSQL serving 50+ REST endpoints under high concurrency',
      'Developed AI-enabled Healthcare Management Platform with GPT report summarization & RBAC',
      'Created AMEEN AI — Islamic banking product matcher deployed at Techlogix',
      'Delivered Power BI dashboards with real-time KPIs for finance decision-makers',
      'Created cross-platform Flutter/React Native apps deployed to App Store & Google Play',
    ],
    tech: ['LangGraph', 'FastAPI', 'GPT-4', 'PostgreSQL', 'Next.js 14', 'Flutter'],
  },
]

/* ─── Projects ─── */
const PROJECTS = [
  { title: 'AMEEN AI — Islamic Banking',  tag: 'AI · Islamic Finance', color: '#059669', desc: 'Shariah-compliant product matcher for Techlogix. Matches customers to Murabaha, Ijarah, Musharakah and 6 more products using a custom AI engine.', href: '/projects/ameen-ai',   tech: ['Next.js 14','TypeScript','Custom AI Engine'] },
  { title: 'RiskVision AI — Cybercrime',  tag: 'AI · Cybersecurity',   color: '#DC2626', desc: '12-factor risk scoring SOC platform for banking fraud detection with voice AI, geolocation threat intel, PDF/CSV export and Power BI integration.',  href: '/projects/riskvision', tech: ['Next.js 14','Claude SDK','Recharts'] },
  { title: 'Orange Consultant ERP',        tag: 'Enterprise · 3 Countries', color: '#EA580C', desc: 'Multi-entity ERP across Pakistan, UAE & Saudi Arabia with immutable GAAP ledger, AI assistant Mada, OCR compliance screening and multi-currency.', href: '/projects/orange-erp', tech: ['Next.js 14','Supabase','PostgreSQL'] },
  { title: 'AI Healthcare Platform',      tag: 'AI · Healthcare',      color: '#1B4FBD', desc: 'Hospital system with GPT summaries, AI anomaly detection, smart billing and RBAC for Admin, Doctor, Finance and Staff.',                             href: '/projects/healthcare', tech: ['Node.js','GPT API','PostgreSQL'] },
  { title: 'FinanceAI Advisor',           tag: 'AI · Finance',         color: '#7C3AED', desc: 'RAG-powered financial advisor with ML ensemble, FAISS vector search and real-time stock data via yfinance.',                                          href: '/projects/financeai',  tech: ['FastAPI','RAG','FAISS'] },
  { title: 'Extreme MSA ERP System',      tag: 'Enterprise',           color: '#0891B2', desc: 'GAAP-compliant ERP with double-entry accounting, real-time CRM, multi-module inventory and HR.',                                                      href: '/projects/erp',        tech: ['Next.js 14','SQLite','TypeScript'] },
  { title: 'Power BI Analytics Suite',    tag: 'Analytics',            color: '#D97706', desc: 'Predictive BI dashboards with real-time KPIs, DAX measures and SQL data pipelines for enterprise decision-making.',                                   href: '/projects/powerbi',    tech: ['Power BI','DAX','SQL'] },
  { title: 'Cross-Platform Mobile Apps',  tag: 'Mobile',               color: '#059669', desc: 'Flutter & React Native apps with offline-first architecture, Firebase sync and push notifications.',                                                   href: '/projects/mobile',     tech: ['Flutter','Firebase','React Native'] },
]

/* ─── Socials ─── */
const SOCIALS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sohaib-ahmed-msa' },
  { icon: Twitter,  href: 'https://twitter.com/sohaib79msa' },
  { icon: Github,   href: 'https://github.com/msa1979msa' },
]

/* ══════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════ */
export default function Home() {
  return (
    <div style={{ paddingTop: 64 }}>

      {/* ── SVG Motion Blur Filters ── */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="mb-lo" x="-15%" y="0%" width="130%" height="100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3 0" />
          </filter>
          <filter id="mb-mid" x="-15%" y="0%" width="130%" height="100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
          </filter>
          <filter id="mb-hi" x="-20%" y="0%" width="140%" height="100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8 0" />
          </filter>
        </defs>
      </svg>

      {/* ════ HERO ════ */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '0 24px', position: 'relative',
        background: 'linear-gradient(180deg, #E8E8E8 0%, #ECECEC 100%)',
      }}>
        {/* Neural network - rendered by canvas component */}
        <NeuralBackground />

        {/* Grid overlay */}
        <div style={{ position: 'absolute', top:0,left:0,right:0,bottom:0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg,rgba(0,0,0,0.025) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 1 }} />

        {/* Gradient orbs — inline styles, no CSS class dependency */}
        <div style={{ position:'absolute', width:450, height:450, borderRadius:'50%', background:'radial-gradient(circle, rgba(27,79,189,0.12) 0%, transparent 70%)', filter:'blur(70px)', top:'5%', left:'3%', pointerEvents:'none', zIndex:1, animation:'driftOrb1 14s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle, rgba(5,150,105,0.09) 0%, transparent 70%)',   filter:'blur(70px)', top:'25%', right:'5%', pointerEvents:'none', zIndex:1, animation:'driftOrb2 18s ease-in-out infinite' }} />
        <div style={{ position:'absolute', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',  filter:'blur(70px)', bottom:'10%', left:'28%', pointerEvents:'none', zIndex:1, animation:'driftOrb3 22s ease-in-out infinite' }} />

        {/* Fixed social icons - left */}
        <div className="hide-mobile" style={{ position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 12, zIndex: 100 }}>
          {SOCIALS.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">
              <s.icon size={16} />
            </a>
          ))}
          <div style={{ width: 1, height: 50, background: 'linear-gradient(transparent, var(--border))', margin: '4px auto' }} />
        </div>

        {/* Fixed GET IN TOUCH - right */}
        <Link href="/contact" className="hide-mobile" style={{
          position: 'fixed', right: 24, top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.18em', color: 'var(--muted)',
          textDecoration: 'none', transition: 'color 0.2s',
          zIndex: 100, textTransform: 'uppercase',
        }}
          onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--text)'}
          onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
        >
          GET IN TOUCH <Mail size={12} style={{ transform: 'rotate(-90deg)' }} />
        </Link>

        {/* Center: oval + content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}>

          {/* ── OVAL RING ── */}
          <div className="hero-oval">

            {/* ── PHOTO with motion blur ── */}
            <div
              className="hero-photo animate-fadeUp delay-1"
              style={{
                width: 190, height: 190,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(27,79,189,0.5)',
                marginBottom: 28,
                flexShrink: 0,
                position: 'relative',
                boxShadow: '0 0 0 6px rgba(27,79,189,0.08), 0 0 40px rgba(27,79,189,0.2), 0 8px 32px rgba(0,0,0,0.25)',
              }}
            >
              {/* Ghost blur layers for motion effect */}
              <img
                src="/avatar3.png" alt=""
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'url(#mb-hi)',
                  opacity: 0.12,
                  transform: 'translateX(-14px)',
                }}
              />
              <img
                src="/avatar3.png" alt=""
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  filter: 'url(#mb-mid)',
                  opacity: 0.18,
                  transform: 'translateX(-7px)',
                }}
              />
              {/* Sharp main photo */}
              <img
                src="/avatar3.png"
                alt="Muhammad Sohaib Ahmed"
                style={{
                  position: 'relative', zIndex: 1,
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>

            {/* Role */}
            <p className="animate-fadeUp delay-2" style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.28em', color: 'var(--muted)',
              marginBottom: 18, textTransform: 'uppercase',
            }}>
              A I &nbsp;&nbsp; E N G I N E E R
            </p>

            {/* Typewriter */}
            <h1 className="animate-fadeUp delay-3" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(18px, 2.8vw, 28px)',
              fontWeight: 700, letterSpacing: '-0.02em',
              color: 'var(--text)', lineHeight: 1.3,
              marginBottom: 36, padding: '0 28px',
              minHeight: 40,
            }}>
              <TypeWriter />
            </h1>

            {/* Section nav */}
            <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: 28 }}>
              {['ABOUT','EXPERIENCE','SKILLS','PROJECTS'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
              ))}
            </div>
          </div>

          {/* Sub-text below oval */}
          <p className="animate-fadeUp delay-4" style={{
            fontFamily: 'var(--font-body)', fontSize: 15,
            color: 'var(--muted)', marginTop: 36, maxWidth: 500, lineHeight: 1.9,
          }}>
            Building <strong style={{ color: 'var(--text)' }}>production-ready AI systems</strong> & scalable backend architectures. FastAPI · LangGraph · GPT-4 · Next.js 14.
          </p>

          {/* CTAs */}
          <div className="animate-fadeUp delay-5" style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/projects" className="btn-primary">
              View My Work <ArrowRight size={15} />
            </Link>
            <a href="https://raw.githubusercontent.com/msa1979msa/sohaib-portfolio/master/public/Sohaib_Ahmed_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Download size={15} /> Resume
            </a>
          </div>

          {/* Scroll line */}
          <div style={{ marginTop: 52, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.35 }}>
            <div style={{ width: 1, height: 44, background: 'linear-gradient(var(--border-dark), transparent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)', letterSpacing: '0.2em' }}>SCROLL</span>
          </div>
        </div>
      </section>

      {/* ════ ABOUT ════ */}
      <div className="divider" />
      <section id="about" style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: 52 }}>About</div>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'center' }}>
            {/* Photo */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 20, overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              }}>
                {/* Motion blur ghost layers */}
                <div style={{ position: 'relative' }}>
                  <img src="/avatar3.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#mb-hi)', opacity: 0.1, transform: 'translateX(-10px)' }} />
                  <img src="/avatar3.png" alt="Muhammad Sohaib Ahmed" style={{ position: 'relative', width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>
              {/* Availability badge */}
              <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 100, background: 'rgba(255,255,255,0.95)', border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#16A34A', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#16A34A', letterSpacing: '0.07em' }}>OPEN TO WORK</span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.15 }}>
                Hey 👋 Here's a little<br />background about me
              </h2>
              <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.9, marginBottom: 16 }}>
                I'm an <strong style={{ color: 'var(--text)' }}>AI Engineer and Full-Stack Developer</strong> based in Karachi, Pakistan, working remotely with clients worldwide. I specialize in building production-ready AI systems, intelligent multi-agent pipelines, and enterprise-grade backend architectures.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
                I absolutely love everything about AI, backend systems and building software that solves real problems. From LangGraph multi-agent workflows to Power BI dashboards, from FastAPI backends to Flutter mobile apps — I deliver full-stack solutions that scale.
              </p>
              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 24 }}>
                {[['3+','Years Exp'],['15+','AI Projects'],['50+','APIs Built'],['99.9%','Uptime']].map(([v,l]) => (
                  <div key={l} style={{ padding: '14px 12px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 12, textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 20, color: 'var(--accent)' }}>{v}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ EXPERIENCE ════ */}
      <div className="divider" />
      <section id="experience" style={{ padding: '88px 24px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: 52 }}>Experience</div>
          {EXP.map((e, i) => (
            <div key={i} className="card" style={{ padding: '36px 40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, lineHeight: 1.3, marginBottom: 6 }}>{e.role}</h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: e.color, fontWeight: 600 }}>{e.company}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', padding: '4px 12px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 100, alignSelf: 'flex-start' }}>{e.period}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {e.points.map((p, j) => (
                  <div key={j} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
                    <span style={{ color: e.color, flexShrink: 0 }}>▸</span><span>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {e.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ SKILLS ════ */}
      <div className="divider" />
      <section id="skills" style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: 14 }}>Skills</div>
          <p style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 52 }}>
            Hover over a skill for current proficiency
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '28px 16px', justifyItems: 'center' }}>
            {SKILLS.map((s, i) => <SkillIcon key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* ════ PROJECTS ════ */}
      <div className="divider" />
      <section id="projects" style={{ padding: '88px 24px', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: 14 }}>Projects</div>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,38px)', letterSpacing: '-0.02em' }}>Production Work</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
            {PROJECTS.map((p, i) => (
              <Link key={i} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: 26, height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ height: 3, borderRadius: 100, background: p.color, width: '40%' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: p.color, background: p.color + '12', padding: '3px 10px', borderRadius: 100, border: `1px solid ${p.color}25`, letterSpacing: '0.06em' }}>{p.tag}</span>
                    <ExternalLink size={14} style={{ color: 'var(--muted)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', lineHeight: 1.35 }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tech.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/projects" className="btn-secondary">View All Projects <ChevronRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ════ AI LAB TEASER ════ */}
      <div className="divider" />
      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg, rgba(27,79,189,0.04), rgba(124,58,237,0.04))' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 14px', borderRadius: 100, background: 'var(--accent-light)', border: '1px solid rgba(27,79,189,0.2)', marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em' }}>✦ FREE · NO API COST</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,38px)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              🤖 Try the <span style={{ color: 'var(--accent)' }}>AI Lab</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>
              4 interactive AI tools that run entirely in your browser — zero cost, zero signup. Voice commands, smart portfolio search, resume analyzer and multilingual translation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {['🎤 Voice Assistant — navigate by speaking', '🔍 Smart Search — find anything instantly', '📄 Resume Analyzer — match your job post', '🌐 AI Translator — 8 languages supported'].map((f,i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-2)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />{f}
                </div>
              ))}
            </div>
            <Link href="/ai-lab" className="btn-primary" style={{ fontSize: 15, padding: '13px 28px', display: 'inline-flex' }}>
              Open AI Lab <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { icon: '🎤', title: 'Voice', sub: 'Web Speech API', color: '#1B4FBD' },
              { icon: '🔍', title: 'Search', sub: 'Fuzzy matching', color: '#7C3AED' },
              { icon: '📄', title: 'Analyzer', sub: 'Rule-based AI', color: '#059669' },
              { icon: '🌐', title: 'Translator', sub: '8 languages', color: '#D97706' },
            ].map((c,i) => (
              <div key={i} style={{ padding: '22px', background: 'var(--bg)', border: `1px solid ${c.color}22`, borderRadius: 16, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.color, letterSpacing: '0.06em' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CONTACT ════ */}
      <div className="divider" />
      <section id="contact" style={{ padding: '88px 24px 110px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <div className="section-label" style={{ display: 'block', marginBottom: 20 }}>Contact</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3.5vw,40px)', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.2 }}>
            I've got just what you need.<br />Let's talk.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
            Available for full-time remote roles, part-time contracts and freelance projects.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 44 }}>
            <Link href="/contact" className="btn-primary"><Mail size={15} /> Get In Touch</Link>
            <a href="https://www.linkedin.com/in/sohaib-ahmed-msa" target="_blank" rel="noopener noreferrer" className="btn-secondary"><Linkedin size={15} /> LinkedIn</a>
          </div>
          <div style={{ display: 'flex', gap: 36, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['+92 331 4827670','sohaibahmedmsa@gmail.com','Karachi, Pakistan'].map((c,i) => (
              <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Home button (like Mitchell) ── */}
      <a href="#hero" className="home-btn" title="Back to top">
        <HomeIcon size={18} />
      </a>

      {/* Keyframes for orb animations and pulse effects */}
      <style>{`
        @keyframes driftOrb1 {
          0%,100% { transform: translate(0px, 0px);   }
          33%      { transform: translate(55px,-45px); }
          66%      { transform: translate(-35px,30px); }
        }
        @keyframes driftOrb2 {
          0%,100% { transform: translate(0px, 0px);    }
          40%      { transform: translate(-45px, 35px); }
          80%      { transform: translate(30px, -25px); }
        }
        @keyframes driftOrb3 {
          0%,100% { transform: translate(0px, 0px);   }
          50%      { transform: translate(40px,-40px); }
        }
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.4); }
          50%      { box-shadow: 0 0 0 6px rgba(22,163,74,0); }
        }
      `}</style>
    </div>
  )
}
