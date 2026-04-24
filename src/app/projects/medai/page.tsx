'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brain, Shield, CheckCircle, Zap, TrendingUp, Users, Network, GitBranch, ExternalLink, Activity } from 'lucide-react'

const aiCapabilities = [
  'Triage Agent — instantly classifies urgency as CRITICAL / HIGH / MODERATE / LOW with emergency referral logic and timeframe recommendations',
  'Symptom Analyst Agent — identifies all symptoms, affected body systems, duration assessment (acute/chronic), and red flag detection',
  'ICD-10 Coder Agent — generates complete ICD-10 codes for every identified condition with AI-powered clinical breakdowns and reference lookup',
  'Lab Agent — interprets lab results with per-test status (normal/high/low/critical), overall assessment, concerns, and urgency classification',
  'Diagnosis Agent — produces differential diagnosis with confidence scores, reasoning, condition categories, and medication interaction warnings',
  'Supervisor Orchestrator — coordinates all 5 agents, merges outputs into structured JSON, generates SOAP notes and patient education text',
]

const businessImpact = [
  { icon: Brain, text: 'Clinical-grade differential diagnosis with confidence scores and ICD-10 coding in seconds', color: '#00e5c8' },
  { icon: Shield, text: 'HIPAA-ready design with PII masking, audit trails, and compliance-first architecture', color: '#388cff' },
  { icon: Zap, text: 'OpenRouter auto model fallback — never fails; tries all available free models automatically', color: '#ffd93d' },
  { icon: Users, text: '60,000+ medication database covering cardiovascular, oncology, neurology, psychiatry, infectious disease, and more', color: '#ff6b6b' },
  { icon: Activity, text: 'Lab result analysis flags abnormalities automatically — routine, soon, or urgent urgency classification', color: '#818cf8' },
  { icon: TrendingUp, text: 'SOAP note generation (Subjective, Objective, Assessment, Plan) ready for clinical documentation', color: '#34d399' },
]

const modules = [
  { icon: '🩺', title: 'AI Doctor Chat', desc: 'Multi-agent clinical analysis powered by 5 specialised agents. Delivers triage, symptom analysis, differential diagnosis, medication review, SOAP notes, and follow-up questions — all in one structured response.', color: '#00e5c8' },
  { icon: '💊', title: 'Drug Database (60K+)', desc: 'World-class clinical pharmacology lookup covering 60,000+ medications. Returns drug class, indications, contraindications, interactions, adult/pediatric/renal dosing, pregnancy category, overdose management, and patient counselling tips.', color: '#388cff' },
  { icon: '🔬', title: 'Lab Report Analysis', desc: 'Upload or paste lab results — the Lab Agent interprets each test value, flags abnormals, provides clinical interpretation, overall assessment, concerns, and urgency-tiered recommendations.', color: '#ffd93d' },
  { icon: '📋', title: 'ICD-10 Code Reference', desc: 'Complete ICD-10 code browser with AI-powered clinical breakdowns. Map symptoms to codes instantly — covers chest pain, shortness of breath, hypertension, diabetes, pneumonia, UTI, anemia, and hundreds more.', color: '#ff6b6b' },
  { icon: '🔒', title: 'HIPAA-Ready Compliance', desc: 'Designed with healthcare compliance in mind — PII masking on all inputs, audit trail logging of clinical interactions, and responsible AI disclaimers throughout the interface.', color: '#818cf8' },
  { icon: '📊', title: 'Audit Trails', desc: 'Track all clinical interactions with timestamped logs. Every agent query, drug lookup, lab analysis, and diagnosis request is recorded for accountability and compliance review.', color: '#34d399' },
]

const techStack = [
  { layer: 'Multi-Agent AI', tech: 'Supervisor + 5 specialised agents (Triage, Symptom, ICD-10, Lab, Diagnosis) via structured JSON prompting', color: '#00e5c8' },
  { layer: 'LLM Provider', tech: 'OpenRouter API — live model discovery, preferred model + auto-fallback across all free models', color: '#388cff' },
  { layer: 'Drug Database', tech: 'In-app categorical database: 12 drug categories, 200+ medications + AI-extended lookups for 60,000+ worldwide drugs', color: '#ffd93d' },
  { layer: 'ICD-10 Engine', tech: 'Pre-mapped ICD-10 codes + AI-powered clinical breakdown generation on demand', color: '#ff6b6b' },
  { layer: 'Frontend', tech: 'React 18 with inline CSS-in-JS — dark clinical UI, Syne + DM Sans typography, responsive layout', color: '#818cf8' },
  { layer: 'Compliance', tech: 'PII masking, audit trail hooks, medical disclaimer enforcement, HIPAA-ready architecture patterns', color: '#34d399' },
]

const engineeringHighlights = [
  'Live model fetching from OpenRouter API on every session — never uses stale hardcoded model IDs',
  'callAIWithFallback() tries preferred model first, then iterates through ALL available free models until one succeeds',
  'All agent outputs return strict JSON — extractJSON() parser handles markdown contamination gracefully',
  'Drug lookup uses a two-tier approach: categorical in-app database + AI extended lookup for any drug worldwide',
  '45-second AbortController timeout per model call prevents hanging — fails fast and tries next model',
  'ICD-10 codes pre-mapped for 25 common symptoms — AI generates full clinical breakdowns for any code on demand',
]

const agents = [
  { name: 'Triage Agent', desc: 'CRITICAL / HIGH / MODERATE / LOW urgency with emergency referral', color: '#ff4444', emoji: '🚨' },
  { name: 'Symptom Analyst', desc: 'Body systems, red flags, duration assessment, symptom identification', color: '#ffd93d', emoji: '🔍' },
  { name: 'ICD-10 Coder', desc: 'Automatic ICD-10 coding for all identified conditions', color: '#388cff', emoji: '📋' },
  { name: 'Lab Agent', desc: 'Lab result interpretation with critical value flagging', color: '#00e5c8', emoji: '🔬' },
  { name: 'Diagnosis Agent', desc: 'Differential diagnosis with confidence scores and SOAP notes', color: '#818cf8', emoji: '🩺' },
]

const highlights = [
  ['5', 'AI Agents'],
  ['60K+', 'Medications'],
  ['25+', 'ICD-10 Codes'],
  ['HIPAA', 'Ready'],
]

// MedAI Architecture Diagram
function MedAIArchDiagram() {
  return (
    <div style={{ width: '100%', background: 'rgba(0,229,200,0.03)', border: '1px solid rgba(0,229,200,0.2)', borderRadius: 20, padding: 28 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 24, color: '#00e5c8', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Network size={16} /> Multi-Agent Architecture
      </div>
      <svg viewBox="0 0 520 440" style={{ width: '100%' }}>
        {/* Lines from user to supervisor */}
        <line x1="260" y1="50" x2="260" y2="78" stroke="rgba(0,229,200,0.5)" strokeWidth="2" strokeDasharray="5,3" />
        {/* Supervisor to each agent */}
        <line x1="180" y1="130" x2="80" y2="170" stroke="rgba(255,68,68,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="220" y1="132" x2="180" y2="170" stroke="rgba(255,217,61,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="260" y1="134" x2="260" y2="170" stroke="rgba(56,140,255,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="300" y1="132" x2="340" y2="170" stroke="rgba(0,229,200,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="340" y1="130" x2="440" y2="170" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        {/* All agents to OpenRouter */}
        <line x1="80" y1="222" x2="180" y2="300" stroke="rgba(56,140,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="180" y1="222" x2="220" y2="300" stroke="rgba(56,140,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="260" y1="222" x2="260" y2="300" stroke="rgba(56,140,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="340" y1="222" x2="300" y2="300" stroke="rgba(56,140,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="440" y1="222" x2="340" y2="300" stroke="rgba(56,140,255,0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        {/* OpenRouter to output */}
        <line x1="260" y1="352" x2="260" y2="380" stroke="rgba(0,229,200,0.5)" strokeWidth="2" strokeDasharray="5,3" />

        {/* Nodes */}
        <MedNode x={260} y={30} label="Patient Input" color="#00e5c8" emoji="👤" width={140} />
        <MedNode x={260} y={110} label="Supervisor Agent" color="#00e5c8" emoji="🎯" width={160} />

        {/* 5 agents */}
        <MedNode x={80} y={200} label="Triage" color="#ff4444" emoji="🚨" width={110} />
        <MedNode x={180} y={200} label="Symptom" color="#ffd93d" emoji="🔍" width={110} />
        <MedNode x={260} y={200} label="ICD-10" color="#388cff" emoji="📋" width={110} />
        <MedNode x={340} y={200} label="Lab Agent" color="#00e5c8" emoji="🔬" width={110} />
        <MedNode x={440} y={200} label="Diagnosis" color="#818cf8" emoji="🩺" width={110} />

        {/* OpenRouter */}
        <MedNode x={260} y={330} label="OpenRouter + Auto Fallback" color="#388cff" emoji="🤖" width={210} />

        {/* Output */}
        <MedNode x={260} y={410} label="Clinical Report + SOAP Note" color="#34d399" emoji="📊" width={210} />
      </svg>

      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[['#00e5c8','Orchestration'],['#ff4444','Triage'],['#388cff','LLM Layer'],['#34d399','Output']].map(([c,l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--muted)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: c, display: 'inline-block' }} />{l}
          </div>
        ))}
      </div>
    </div>
  )
}

function MedNode({ x, y, label, color, emoji, width }: { x: number; y: number; label: string; color: string; emoji: string; width: number }) {
  const hw = width / 2
  return (
    <g>
      <rect x={x-hw} y={y-20} width={width} height={40} rx={8} fill={`${color}12`} stroke={`${color}45`} strokeWidth="1.2" />
      <text x={x-hw+8} y={y+4} fontSize="13" dominantBaseline="middle">{emoji}</text>
      <text x={x-hw+26} y={y+4} fontSize="9.5" fill={color} dominantBaseline="middle" fontFamily="var(--font-mono)">{label}</text>
    </g>
  )
}

export default function MedAIPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(0,229,200,0.06) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(56,140,255,0.05) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
          ><ArrowLeft size={16} /> Back to Projects</Link>

          <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(0,229,200,0.1)', color: '#00e5c8', border: '1px solid rgba(0,229,200,0.3)' }}>✦ Live · AI · Medical</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(56,140,255,0.08)', color: 'var(--muted)', border: '1px solid var(--border)' }}>Multi-Agent</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(129,140,248,0.08)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.25)' }}>HIPAA-Ready</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.1, marginBottom: 20 }}>
            MedAI Doctor — <span className="gradient-text">Multi-Agent Clinical Intelligence</span>
          </h1>

          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            A production-ready multi-agent clinical AI system powered by 5 specialised agents orchestrated by a Supervisor Agent. Delivers clinical-grade triage, differential diagnosis with confidence scores, SOAP notes, 60,000+ medication lookups, lab result analysis, and ICD-10 coding — all via OpenRouter with intelligent auto model fallback so it never goes offline.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 720, marginBottom: 36, fontStyle: 'italic' }}>
            Built for informational and educational use. Designed with HIPAA-ready patterns, PII masking, and full audit trails. Always consult a qualified healthcare provider for medical decisions.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 52 }}>
            {['React 18', 'Multi-Agent AI', 'OpenRouter', 'LLM Orchestration', 'ICD-10', 'Drug Database', 'Lab Analysis', 'SOAP Notes', 'HIPAA-Ready', 'JavaScript', 'CSS-in-JS'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 72 }}>
            {highlights.map(([v,l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#00e5c8', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot + Architecture */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

            {/* Screenshot */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#00e5c8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Live Interface</div>
              <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,229,200,0.2)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
                {/* Mock screenshot of the MedAI interface */}
                <div style={{ background: '#050a14', padding: '0' }}>
                  {/* Top bar */}
                  <div style={{ background: '#080f1e', borderBottom: '1px solid rgba(56,140,255,0.15)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(135deg,#388cff,#00e5c8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🧬</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: '#e8f0ff' }}>Med<span style={{ color: '#00e5c8' }}>AI</span></div>
                      <div style={{ fontSize: 9, color: '#4a5f84', letterSpacing: '0.5px' }}>MULTI-AGENT CLINICAL SYSTEM</div>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, padding: '3px 10px', background: 'rgba(0,229,200,0.1)', border: '1px solid rgba(0,229,200,0.25)', borderRadius: 20 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00e5c8' }} />
                      <span style={{ fontSize: 10, color: '#00e5c8' }}>All Agents Online</span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div style={{ padding: '18px 20px', display: 'flex', gap: 14 }}>
                    {/* Sidebar mini */}
                    <div style={{ width: 130, flexShrink: 0 }}>
                      <div style={{ fontSize: 9, color: '#4a5f84', letterSpacing: '1px', marginBottom: 8, textTransform: 'uppercase' }}>Core Modules</div>
                      {[['🩺','AI Doctor Chat',true],['💊','Drug Database',false],['🔬','Lab Analysis',false],['📋','ICD-10 Codes',false]].map(([icon,name,active]) => (
                        <div key={name as string} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 9px', borderRadius: 8, marginBottom: 3, background: active ? 'rgba(56,140,255,0.12)' : 'transparent', border: active ? '1px solid rgba(56,140,255,0.2)' : '1px solid transparent', fontSize: 11, color: active ? '#388cff' : '#8a9dc4' }}>
                          <span style={{ fontSize: 13 }}>{icon as string}</span>{name as string}
                        </div>
                      ))}
                      <div style={{ marginTop: 10, fontSize: 9, color: '#4a5f84', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>Agent Status</div>
                      {['Triage Agent','Symptom Analyst','ICD-10 Coder','Lab Agent','Diagnosis Agent'].map(a => (
                        <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: '#8a9dc4', marginBottom: 4 }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00e5c8', flexShrink: 0 }} />{a}
                        </div>
                      ))}
                    </div>

                    {/* Main chat area */}
                    <div style={{ flex: 1 }}>
                      <div style={{ background: 'linear-gradient(135deg,rgba(13,21,38,0.8),rgba(17,29,51,0.8))', border: '1px solid rgba(56,140,255,0.12)', borderRadius: 14, padding: '18px', textAlign: 'center', marginBottom: 12 }}>
                        <div style={{ fontSize: 28, marginBottom: 8 }}>🧬</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#e8f0ff', marginBottom: 6 }}>MedAI Clinical Assistant</div>
                        <div style={{ fontSize: 10, color: '#8a9dc4', lineHeight: 1.5, marginBottom: 12 }}>5 specialized agents — triage, symptom analysis, differential diagnosis, medication review, and SOAP notes.</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
                          {['I have chest pain','My BP is 150/95','Headache 3 days with fever'].map(s => (
                            <div key={s} style={{ padding: '5px 10px', border: '1px solid rgba(56,140,255,0.2)', borderRadius: 14, fontSize: 9, color: '#8a9dc4' }}>{s}</div>
                          ))}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div style={{ flex: 1, background: 'rgba(13,21,38,0.8)', border: '1px solid rgba(56,140,255,0.15)', borderRadius: 10, padding: '8px 12px', fontSize: 10, color: '#4a5f84' }}>Describe symptoms or ask about medications...</div>
                        <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,#388cff,#00e5c8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>↑</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[['#00e5c8','LangGraph Orchestration'],['#388cff','60K+ Medications'],['#818cf8','hy3-preview']].map(([c,l]) => (
                  <div key={l} style={{ padding: '4px 10px', borderRadius: 100, fontSize: 10, background: `${c}10`, border: `1px solid ${c}25`, color: c as string, fontFamily: 'var(--font-mono)' }}>{l as string}</div>
                ))}
              </div>
            </div>

            {/* Architecture Diagram */}
            <MedAIArchDiagram />
          </div>
        </div>
      </section>

      {/* 5 Agents showcase */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg,rgba(0,229,200,0.05),rgba(56,140,255,0.04))', border: '1px solid rgba(0,229,200,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,229,200,0.12)', border: '1px solid rgba(0,229,200,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Brain size={22} style={{ color: '#00e5c8' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>🧠 5 Specialised AI Agents</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 14 }}>
              {agents.map((agent, i) => (
                <div key={i} style={{ padding: '18px', borderRadius: 12, background: `${agent.color}08`, border: `1px solid ${agent.color}25` }}>
                  <div style={{ fontSize: 22, marginBottom: 8 }}>{agent.emoji}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: agent.color, marginBottom: 6 }}>{agent.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{agent.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities + Business Impact */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg,rgba(0,229,200,0.06),rgba(56,140,255,0.04))', border: '1px solid rgba(0,229,200,0.2)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 24 }}>🔬 AI Capabilities</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {aiCapabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={15} style={{ color: '#00e5c8', flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.7 }}>{cap}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg,rgba(129,140,248,0.06),rgba(244,114,182,0.04))', border: '1px solid rgba(129,140,248,0.18)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 24 }}>📊 Business Impact</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {businessImpact.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <item.icon size={15} style={{ color: item.color, flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section style={{ padding: '72px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>System Architecture</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 12 }}>
            ⚙️ Core <span className="gradient-text">Modules</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 44 }}>Six purpose-built modules covering every clinical workflow — from first symptom to final SOAP note.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {modules.map((m, i) => (
              <div key={i} className="card glow-box" style={{ padding: 28, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${m.color}12`, border: `1px solid ${m.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{m.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>{m.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{m.desc}</p>
                <div style={{ marginTop: 16, height: 2, borderRadius: 100, background: `linear-gradient(90deg,${m.color}60,transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Architecture */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Under the Hood</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 44 }}>
            🏗️ Technical <span className="gradient-text">Architecture</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, marginBottom: 56 }}>
            {techStack.map((t, i) => (
              <div key={i} style={{ padding: '20px 22px', borderRadius: 14, background: `${t.color}08`, border: `1px solid ${t.color}22` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: t.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{t.layer}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, fontWeight: 500 }}>{t.tech}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '40px', borderRadius: 20, border: '1px solid var(--border)', background: 'var(--surface)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 28 }}>💡 Key Engineering Highlights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {engineeringHighlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(0,229,200,0.1)', border: '1px solid rgba(0,229,200,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#00e5c8', fontWeight: 700 }}>{i+1}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Use Cases */}
      <section style={{ padding: '0 24px 72px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', paddingTop: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Roadmap</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 44 }}>
            🚀 Future <span className="gradient-text">Use Cases</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
            {[
              { icon: '🏥', title: 'Hospital EMR Integration', desc: 'Connect to Electronic Medical Record systems (Epic, Cerner) for real patient data context.', color: '#00e5c8' },
              { icon: '🌍', title: 'Multi-Language Support', desc: 'Clinical AI assistance in Arabic, Urdu, Spanish, French — serving global patient populations.', color: '#388cff' },
              { icon: '📱', title: 'Mobile Clinical App', desc: 'React Native companion app for bedside diagnosis, drug lookup, and lab review on mobile devices.', color: '#818cf8' },
              { icon: '🧬', title: 'Genomics Integration', desc: 'Incorporate pharmacogenomics data for personalised drug dosing based on genetic markers.', color: '#ffd93d' },
              { icon: '🔗', title: 'EHR API Connector', desc: 'FHIR-compliant API layer for bidirectional data exchange with existing health information systems.', color: '#ff6b6b' },
              { icon: '🤝', title: 'Telemedicine Platform', desc: 'Real-time AI clinical decision support for telehealth providers during live patient consultations.', color: '#34d399' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 22 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: item.color, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub strip */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ padding: 28, border: '1px solid rgba(0,229,200,0.2)', borderRadius: 16, background: 'rgba(0,229,200,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <GitBranch size={24} style={{ color: '#00e5c8' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>View Source on GitHub</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>github.com/msa1979msa/medai-doctor</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[['React','Frontend'],['OpenRouter','LLM'],['Multi-Agent','AI'],['HIPAA','Compliance']].map(([v,l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, color: '#00e5c8' }}>{v}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="https://github.com/msa1979msa/medai-doctor" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13 }}>
              <ExternalLink size={14} /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ padding: '24px 32px', borderRadius: 14, background: 'rgba(255,68,68,0.05)', border: '1px solid rgba(255,68,68,0.2)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#ff6b6b', marginBottom: 8 }}>⚕️ Medical Disclaimer</div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>
              MedAI Doctor is designed for <strong style={{ color: 'var(--text)' }}>informational and educational purposes only</strong>. It does NOT replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions. The AI outputs are generated by language models and may contain inaccuracies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">Discuss This Project <ArrowRight size={16} /></Link>
          <Link href="/projects" className="btn-secondary"><ArrowLeft size={16} /> All Projects</Link>
        </div>
      </section>
    </div>
  )
}
