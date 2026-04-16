'use client'
import Link from 'next/link'
import { ArrowRight, Download, MapPin, GraduationCap, Briefcase, Star, Code2, Brain, Zap } from 'lucide-react'

const skills = [
  { category: 'AI Engineering', level: 92, color: '#38bdf8', items: ['LangGraph', 'LangChain', 'GPT-4', 'RAG', 'Embeddings', 'Pinecone'] },
  { category: 'Backend Development', level: 90, color: '#818cf8', items: ['FastAPI', 'Node.js', 'Python', 'Express', 'REST API', 'Redis'] },
  { category: 'Frontend (Next.js)', level: 85, color: '#34d399', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Data & Analytics', level: 88, color: '#f59e0b', items: ['Power BI', 'DAX', 'SQL', 'Tableau', 'Excel'] },
  { category: 'Databases', level: 85, color: '#f472b6', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'pgvector'] },
  { category: 'DevOps & Cloud', level: 75, color: '#a78bfa', items: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'CI/CD'] },
]

const experience = [
  {
    role: 'AI Engineer | Backend Systems (FastAPI) | Multi-Agent Architect | GPT Applications',
    company: 'Freelance / Self-Employed',
    period: '2024 – Present',
    location: 'Karachi, Pakistan (Remote)',
    points: [
      'Built production AI systems using LangGraph, GPT-4, and RAG pipelines for enterprise clients',
      'Architected FastAPI backends with PostgreSQL serving 50+ REST endpoints under high concurrency',
      'Developed an ERP system with double-entry accounting, CRM, inventory and HR modules',
      'Delivered Power BI dashboards with real-time KPIs used by finance decision-makers',
      'Created cross-platform Flutter/React Native apps deployed to App Store & Google Play',
    ],
    color: '#38bdf8',
  },
]

const education = [
  {
    degree: 'Associate Degree in Computer Science',
    school: 'University of the People (USA)',
    period: '2026',
    color: '#818cf8',
  },
]

const certs = [
  { name: 'IBM AI Engineering Professional Certificate', issuer: 'IBM / Coursera', color: '#38bdf8' },
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google / Coursera', color: '#34d399' },
  { name: 'Meta Back-End Developer Certificate', issuer: 'Meta / Coursera', color: '#818cf8' },
  { name: 'IBM Data Science Professional Certificate', issuer: 'IBM / Coursera', color: '#f59e0b' },
]

const values = [
  { icon: Brain, title: 'Technical Excellence', desc: 'I believe every system should be architecturally sound, maintainable, and performant from day one.', color: '#38bdf8' },
  { icon: Zap, title: 'Shipping Fast', desc: 'Iterating quickly from prototype to production without sacrificing code quality or reliability.', color: '#34d399' },
  { icon: Code2, title: 'Business-Aware Engineering', desc: 'Bridging the gap between technical innovation and real business value — code that earns money.', color: '#818cf8' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(129,140,248,0.07) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Professional Profile</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 52px)', marginBottom: 20, lineHeight: 1.1 }}>
              Muhammad <span className="gradient-text">Sohaib Ahmed</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent)', marginBottom: 24 }}>
              AI Engineer · FastAPI · Multi-Agent Systems · GPT Applications
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, marginBottom: 28 }}>
              I'm a Full-Stack Developer and AI Engineer specializing in production-ready intelligent systems, scalable backend architectures, and enterprise software. My work sits at the intersection of <strong style={{ color: 'var(--text)' }}>technical engineering and business intelligence</strong> — I don't just build systems, I build systems that transform how companies operate.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.9, marginBottom: 36 }}>
              From LangGraph multi-agent pipelines to Power BI dashboards, from Flutter mobile apps to FastAPI backends — I deliver end-to-end solutions that scale.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                Let's Talk <ArrowRight size={16} />
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                <Download size={16} /> Resume (PDF)
              </a>
            </div>
          </div>
          {/* Profile card */}
          <div className="card border-glow" style={{ padding: 36, borderRadius: 20 }}>
            {/* Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <div style={{
                width: 80, height: 80, borderRadius: 20,
                background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 800, color: '#050812', fontSize: 28,
              }}>SA</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20 }}>Muhammad Sohaib</div>
                <div style={{ color: 'var(--muted)', fontSize: 14 }}>AI Engineer | FastAPI | Multi-Agent</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#34d399' }}>Open to Work</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <InfoRow icon={MapPin} label="Location" value="Karachi, Pakistan (Remote)" />
              <InfoRow icon={GraduationCap} label="Education" value="BSc Computer Science, UoPeople USA" />
              <InfoRow icon={Briefcase} label="Experience" value="3+ Years · AI & Backend Engineering" />
              <InfoRow icon={Star} label="Speciality" value="Multi-Agent AI · FastAPI · LangGraph" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '60px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Development Philosophy</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, marginBottom: 40 }}>
            What Drives <span className="gradient-text">My Work</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${v.color}15`, border: `1px solid ${v.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <v.icon size={22} style={{ color: v.color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ marginTop: 40, padding: '32px 40px', borderRadius: 16, background: 'linear-gradient(135deg, rgba(56,189,248,0.06), rgba(129,140,248,0.06))', border: '1px solid rgba(56,189,248,0.15)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontStyle: 'italic', lineHeight: 1.7, fontWeight: 600 }}>
              "I bridge <span className="gradient-text">technical innovation</span> with business intelligence to create systems that are not just functional, but <span className="gradient-text">transformative.</span>"
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Technical Expertise</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 48 }}>
            Core <span className="gradient-text">Skill Stack</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {skills.map((s, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{s.category}</div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: s.color }}>{s.level}%</span>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 100, marginBottom: 16, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.level}%`, background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`, borderRadius: 100, transition: 'width 1s ease' }} />
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.items.map(item => <span key={item} className="tag" style={{ borderColor: `${s.color}30`, color: s.color }}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Career Timeline</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 48 }}>
            Experience & <span className="gradient-text">Education</span>
          </h2>

          {experience.map((e, i) => (
            <div key={i} className="card border-glow" style={{ padding: 32, marginBottom: 24, borderRadius: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{e.role}</div>
                  <div style={{ color: e.color, fontWeight: 600, fontSize: 15 }}>{e.company}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>{e.period}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{e.location}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {e.points.map((pt, j) => (
                  <div key={j} style={{ display: 'flex', gap: 12, fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
                    <span style={{ color: e.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {education.map((e, i) => (
            <div key={i} className="card" style={{ padding: 28, borderRadius: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: `${e.color}15`, border: `1px solid ${e.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={22} style={{ color: e.color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{e.degree}</div>
                    <div style={{ color: e.color, fontSize: 14 }}>{e.school}</div>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Trust Signals</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 40 }}>
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {certs.map((c, i) => (
              <div key={i} className="card border-glow" style={{ padding: 24, borderRadius: 16 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Star size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-display)', marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{c.issuer}</div>
                  </div>
                </div>
                <div style={{ height: 3, borderRadius: 100, background: `linear-gradient(90deg, ${c.color}, transparent)`, marginTop: 16 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={14} style={{ color: 'var(--accent)' }} />
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
        <div style={{ fontSize: 14, color: 'var(--text)', marginTop: 2 }}>{value}</div>
      </div>
    </div>
  )
}
