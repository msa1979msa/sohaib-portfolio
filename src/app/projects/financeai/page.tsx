'use client'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Brain, TrendingUp, Database, Zap, BarChart3, Code2 } from 'lucide-react'

export default function FinanceAIPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: 'var(--muted)', textDecoration: 'none', fontSize: 13, marginBottom: 40, fontFamily: 'var(--font-mono)', transition: 'color 0.15s' }}
            onMouseOver={e => (e.currentTarget as HTMLElement).style.color='var(--accent)'}
            onMouseOut={e => (e.currentTarget as HTMLElement).style.color='var(--muted)'}
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>

          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'rgba(124,58,237,0.08)', color: '#7C3AED', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid rgba(124,58,237,0.25)', fontWeight: 600 }}>✦ AI · Finance</span>
            <span style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--bg-2)', color: 'var(--muted)', fontSize: 11, fontFamily: 'var(--font-mono)', border: '1px solid var(--border)' }}>Live · Production</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,4.5vw,50px)', letterSpacing: '-0.02em', marginBottom: 18, lineHeight: 1.1 }}>
            FinanceAI — <span style={{ color: 'var(--accent)' }}>Intelligent</span><br />Financial Advisor
          </h1>
          <p style={{ color: 'var(--text-2)', fontSize: 16, lineHeight: 1.9, maxWidth: 780, marginBottom: 36 }}>
            A production-ready AI financial advisor that combines Retrieval-Augmented Generation (RAG) with a machine learning ensemble to deliver intelligent stock analysis, market insights, and investment guidance with source citations.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 52 }}>
            {['Python','FastAPI','LangChain','RAG','FAISS','scikit-learn','RandomForest','GradientBoosting','yfinance','OpenAI API','Pinecone'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 1, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--border)', marginBottom: 64 }}>
            {[['RAG','Powered'],['ML Ensemble','Predictions'],['14+','Tech Indicators'],['Real-time','Stock Data']].map(([v,l]) => (
              <div key={l} style={{ background: 'var(--bg)', padding: '22px 14px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: '#7C3AED', lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginBottom: 48 }}>
            {[
              { icon: Brain,     title: 'RAG Pipeline',           desc: 'FAISS vector store with semantic search over financial documents. Retrieves relevant context for every user query with source citations.',                         color: '#7C3AED' },
              { icon: TrendingUp,'title': 'ML Ensemble',          desc: 'RandomForest + GradientBoosting ensemble with 14 technical indicators (RSI, MACD, Bollinger Bands, EMA) for stock price prediction.',                           color: '#2563EB' },
              { icon: Database,  title: 'Real-Time Market Data',  desc: 'Live stock data via yfinance — prices, volume, historical data, and financial statements for any publicly traded company.',                                          color: '#059669' },
              { icon: Zap,       title: 'FastAPI Backend',         desc: 'High-performance FastAPI backend with async endpoints, request validation, and streaming responses for real-time AI advisor conversations.',                         color: '#D97706' },
              { icon: BarChart3, title: 'Market Analysis',         desc: 'Comprehensive technical and fundamental analysis combining AI insights with quantitative metrics for informed investment decisions.',                               color: '#DC2626' },
              { icon: Code2,     title: 'Vector Search',           desc: 'Pinecone and FAISS vector databases for semantic similarity search across thousands of financial documents and research reports.',                                   color: '#0891B2' },
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${f.color}12`, border: `1px solid ${f.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <f.icon size={19} style={{ color: f.color }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 48 }}>
            {[
              ['AI Layer',  'LangChain + RAG + FAISS Vector Search', '#7C3AED'],
              ['Backend',   'FastAPI + Python + Async REST API',      '#2563EB'],
              ['ML Models', 'RandomForest + GradientBoosting Ensemble','#059669'],
              ['Data',      'yfinance + Pinecone + OpenAI Embeddings', '#D97706'],
            ].map(([l,v,c],i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: `${c}08`, border: `1px solid ${c}20` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 7 }}>{l}</div>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5 }}>{v}</div>
              </div>
            ))}
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
