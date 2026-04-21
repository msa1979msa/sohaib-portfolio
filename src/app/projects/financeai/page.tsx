'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, TrendingUp, Brain, Database, Server, CheckCircle, Zap, BarChart3, Shield, Network, GitBranch } from 'lucide-react'

const aiCapabilities = [
  'Retrieval-Augmented Generation (RAG) pipeline with FAISS cosine-similarity search for real-time financial knowledge retrieval',
  'RandomForest + GradientBoosting VotingClassifier ensemble predicting next-day stock price direction (UP/DOWN)',
  '14 engineered technical indicators: RSI, MACD, Bollinger Bands, lagged returns, volume ratio, volatility, price position',
  'Live stock data ingestion via yfinance with retry logic and session handling for AAPL, MSFT, GOOGL, NVDA, META, TSLA, AMZN, AMD',
  'sentence-transformers embeddings (all-MiniLM-L6-v2) with FAISS IndexFlatIP for sub-millisecond vector search',
  'Real-time market news ingestion and indexing into the RAG knowledge base at startup',
]

const businessImpact = [
  { icon: TrendingUp, text: 'Personalised investment signals with confidence scores and risk level classification', color: '#f5c542' },
  { icon: Brain, text: 'AI chat powered by Claude (Anthropic API) grounded in retrieved financial context', color: '#38bdf8' },
  { icon: BarChart3, text: 'Live RSI, MACD, Bollinger Band position, and volume ratio displayed per ticker', color: '#34d399' },
  { icon: Shield, text: 'Graceful fallback to RAG-only responses when API is unavailable — always informative', color: '#818cf8' },
  { icon: Zap, text: 'Model trained on 2 years of multi-ticker data: ~2,800+ training rows from 6 stocks', color: '#f472b6' },
]

const modules = [
  { icon: '📊', title: 'ML Prediction Engine', desc: 'VotingClassifier ensemble (RF + GB) trained on 14 technical features. Outputs UP/DOWN direction, confidence %, up/down probabilities, and risk classification.', color: '#f5c542' },
  { icon: '🧠', title: 'RAG Knowledge Base', desc: 'FAISS vector index with 50+ pre-embedded financial concepts plus live news. Retrieves top-5 semantically relevant chunks per query using cosine similarity.', color: '#38bdf8' },
  { icon: '📡', title: 'Live Data Pipeline', desc: 'yfinance integration fetching real OHLCV data with retry logic. Computes RSI, MACD, Bollinger Bands, EMA crossovers, volatility, and volume metrics on-the-fly.', color: '#34d399' },
  { icon: '🚀', title: 'FastAPI Backend', desc: 'Async FastAPI server with CORS, /chat, /predict/{ticker}, /search, /health, and /refresh-news endpoints. Intent detection routes queries to prediction + RAG automatically.', color: '#818cf8' },
  { icon: '💬', title: 'AI Chat Interface', desc: 'Real-time chat calling Anthropic Claude with RAG context + ML prediction injected into the system prompt. Markdown rendering, source citation panel, typing indicators.', color: '#f472b6' },
  { icon: '📈', title: 'Live Prediction Panel', desc: 'Right-side dashboard showing real-time price, day change %, up/down probabilities, confidence bar, ML signal (BUY/SELL/HOLD), and risk level per selected ticker.', color: '#a78bfa' },
]

const techStack = [
  { layer: 'ML Model', tech: 'scikit-learn VotingClassifier — RandomForest + GradientBoosting ensemble', color: '#f5c542' },
  { layer: 'Vector Search', tech: 'FAISS IndexFlatIP + sentence-transformers all-MiniLM-L6-v2 embeddings', color: '#38bdf8' },
  { layer: 'Data Source', tech: 'yfinance 1.3.0 with curl_cffi session for Yahoo Finance rate-limit bypass', color: '#34d399' },
  { layer: 'Backend', tech: 'FastAPI + Uvicorn — async REST API with intent detection & CORS middleware', color: '#818cf8' },
  { layer: 'AI Chat', tech: 'Anthropic Claude (claude-sonnet-4) via httpx — context-grounded responses', color: '#f472b6' },
  { layer: 'Frontend', tech: 'Vanilla HTML/CSS/JS — dark obsidian theme, real-time WebSocket-free chat', color: '#a78bfa' },
]

const engineeringHighlights = [
  'Ensemble model trained on 2,800+ rows from 6 tickers (AAPL, MSFT, GOOGL, NVDA, META, AMZN) over 2 years',
  'FAISS index persisted to disk (faiss_index.bin + chunks.pkl) for instant warm startup after first run',
  'StandardScaler fitted on training data — prediction uses named DataFrame to suppress sklearn warnings',
  'Intent detection regex identifies ticker symbols and prediction keywords to auto-route chat queries',
  'Retry logic with exponential backoff for yfinance data fetches; graceful degradation on 429 errors',
  'Both "prediction" and "direction" keys returned for API compatibility across frontend versions',
]

const highlights = [
  ['8', 'Live Tickers'],
  ['14', 'ML Features'],
  ['50+', 'RAG Concepts'],
  ['6', 'API Endpoints'],
]

// FinanceAI Architecture Diagram
function FinanceAIArchDiagram() {
  return (
    <div style={{ width: '100%', background: 'rgba(245,197,66,0.03)', border: '1px solid rgba(245,197,66,0.2)', borderRadius: 20, padding: 28, fontFamily: 'var(--font-mono)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 24, color: '#f5c542', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Network size={16} /> FinanceAI Data Flow
      </div>
      <svg viewBox="0 0 520 380" style={{ width: '100%' }}>
        {/* Lines */}
        <line x1="260" y1="52" x2="260" y2="80" stroke="rgba(245,197,66,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="200" y1="128" x2="120" y2="156" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="320" y1="128" x2="400" y2="156" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="120" y1="204" x2="120" y2="232" stroke="rgba(56,189,248,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="400" y1="204" x2="400" y2="232" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="160" y1="280" x2="260" y2="308" stroke="rgba(244,114,182,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
        <line x1="360" y1="280" x2="260" y2="308" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* Nodes */}
        <FANode x={260} y={32} label="User Chat Query" color="#f5c542" emoji="💬" width={160} />
        <FANode x={260} y={110} label="FastAPI Backend" color="#38bdf8" emoji="🚀" width={150} />
        <FANode x={120} y={184} label="RAG Engine (FAISS)" color="#38bdf8" emoji="🧠" width={160} />
        <FANode x={400} y={184} label="ML Predictor" color="#34d399" emoji="📊" width={150} />
        <FANode x={120} y={262} label="Knowledge Base" color="#818cf8" emoji="📚" width={150} />
        <FANode x={400} y={262} label="yfinance Data" color="#f472b6" emoji="📡" width={140} />
        <FANode x={260} y={340} label="Claude AI Response" color="#a78bfa" emoji="🤖" width={170} />
      </svg>
      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[['#f5c542', 'User → API'], ['#38bdf8', 'RAG Retrieval'], ['#34d399', 'ML Prediction'], ['#a78bfa', 'AI Response']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--muted)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: c, display: 'inline-block' }} />
            {l}
          </div>
        ))}
      </div>
    </div>
  )
}

function FANode({ x, y, label, color, emoji, width }: { x: number; y: number; label: string; color: string; emoji: string; width: number }) {
  const hw = width / 2
  return (
    <g>
      <rect x={x - hw} y={y - 20} width={width} height={40} rx={8} fill={`${color}10`} stroke={`${color}40`} strokeWidth="1" />
      <text x={x - hw + 10} y={y + 4} fontSize="13" dominantBaseline="middle">{emoji}</text>
      <text x={x - hw + 28} y={y + 4} fontSize="10" fill={color} dominantBaseline="middle" fontFamily="var(--font-mono)">{label}</text>
    </g>
  )
}

export default function FinanceAIPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(245,197,66,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 14, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color = 'var(--accent)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(245,197,66,0.1)', color: '#f5c542', border: '1px solid rgba(245,197,66,0.3)' }}>✦ Live · AI · Finance</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(56,189,248,0.08)', color: 'var(--muted)', border: '1px solid var(--border)' }}>RAG + ML</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '4px 14px', borderRadius: 100, background: 'rgba(52,211,153,0.08)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}>Python · FastAPI</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4.5vw, 52px)', lineHeight: 1.1, marginBottom: 20 }}>
            FinanceAI — Intelligent <span className="gradient-text">Financial Advisor</span>
          </h1>

          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.9, maxWidth: 780, marginBottom: 12 }}>
            A production-ready AI financial advisor combining Retrieval-Augmented Generation (RAG) with a machine learning ensemble model. Fetches real-time stock market data, indexes financial knowledge in a FAISS vector store, and delivers next-day price direction predictions with confidence scores — all through a FastAPI backend and an intelligent chat interface powered by Claude.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, maxWidth: 720, marginBottom: 36, fontStyle: 'italic' }}>
            Built end-to-end with Python — from data ingestion and feature engineering to vector embeddings, ML training, and REST API deployment.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 52 }}>
            {['Python', 'FastAPI', 'RAG', 'FAISS', 'scikit-learn', 'sentence-transformers', 'yfinance', 'RandomForest', 'GradientBoosting', 'Anthropic Claude', 'HTML/CSS/JS', 'REST API'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Stats bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 72 }}>
            {highlights.map(([v, l]) => (
              <div key={l} style={{ background: 'var(--surface)', padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#f5c542', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram + AI Capabilities */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>

            {/* Left: Architecture Diagram */}
            <FinanceAIArchDiagram />

            {/* Right: AI Capabilities */}
            <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(245,197,66,0.06), rgba(56,189,248,0.04))', border: '1px solid rgba(245,197,66,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(245,197,66,0.12)', border: '1px solid rgba(245,197,66,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={22} style={{ color: '#f5c542' }} />
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>🧠 AI Capabilities</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {aiCapabilities.map((cap, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: '#f5c542', flexShrink: 0, marginTop: 3 }} />
                    <p style={{ fontSize: 13.5, color: 'var(--text)', lineHeight: 1.7 }}>{cap}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ padding: '40px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(129,140,248,0.06), rgba(244,114,182,0.04))', border: '1px solid rgba(129,140,248,0.18)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={22} style={{ color: '#818cf8' }} />
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>📊 Business Impact</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {businessImpact.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <item.icon size={16} style={{ color: item.color, flexShrink: 0, marginTop: 3 }} />
                  <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
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
          <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 44 }}>Six purpose-built components covering data ingestion, ML prediction, RAG retrieval, and AI chat delivery.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {modules.map((m, i) => (
              <div key={i} className="card glow-box" style={{ padding: 28, borderRadius: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${m.color}12`, border: `1px solid ${m.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{m.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>{m.title}</h3>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{m.desc}</p>
                <div style={{ marginTop: 16, height: 2, borderRadius: 100, background: `linear-gradient(90deg, ${m.color}60, transparent)` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Under the Hood</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, marginBottom: 44 }}>
            🏗️ Technical <span className="gradient-text">Architecture</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 56 }}>
            {techStack.map((t, i) => (
              <div key={i} style={{ padding: '20px 22px', borderRadius: 14, background: `${t.color}08`, border: `1px solid ${t.color}22` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: t.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>{t.layer}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6, fontWeight: 500 }}>{t.tech}</div>
              </div>
            ))}
          </div>

          {/* Engineering Highlights */}
          <div style={{ padding: '40px', borderRadius: 20, border: '1px solid var(--border)', background: 'var(--surface)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 28 }}>💡 Key Engineering Highlights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {engineeringHighlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: 'rgba(245,197,66,0.1)', border: '1px solid rgba(245,197,66,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#f5c542', fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.7 }}>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub strip */}
      <section style={{ padding: '0 24px 72px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ padding: 28, border: '1px solid rgba(245,197,66,0.2)', borderRadius: 16, background: 'rgba(245,197,66,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <GitBranch size={24} style={{ color: '#f5c542' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>View Source on GitHub</div>
                <div style={{ color: 'var(--muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>github.com/msa1979msa/financeai-advisor</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {[['Python', 'Language'], ['FastAPI', 'Backend'], ['FAISS', 'Vector DB'], ['scikit-learn', 'ML']].map(([v, l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: '#f5c542' }}>{v}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>
            <a href="https://github.com/msa1979msa/financeai-advisor" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '8px 20px', fontSize: 13 }}>
              View on GitHub
            </a>
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
