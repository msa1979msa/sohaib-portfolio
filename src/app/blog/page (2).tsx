'use client'
import Link from 'next/link'
import { ArrowRight, Clock, BookOpen, Tag, ChevronRight } from 'lucide-react'

const POSTS = [
  {
    slug: 'building-multi-agent-ai-langgraph',
    title: 'Building Multi-Agent AI Systems with LangGraph',
    excerpt: 'A deep dive into designing production-ready multi-agent workflows using LangGraph — from state machines to tool-calling agents that reason and act in real business environments.',
    date: 'July 28, 2026',
    readTime: '8 min read',
    tag: 'AI Engineering',
    tagColor: '#2563EB',
    tagBg: '#EFF6FF',
    featured: true,
  },
  {
    slug: 'fastapi-vs-django-ai-apps',
    title: 'FastAPI vs Django: The Right Choice for AI Applications',
    excerpt: 'After building 15+ AI systems, here\'s my honest take on why FastAPI consistently wins for high-concurrency AI backends — and the edge cases where Django still shines.',
    date: 'July 15, 2026',
    readTime: '6 min read',
    tag: 'Backend',
    tagColor: '#7C3AED',
    tagBg: '#F5F3FF',
    featured: false,
  },
  {
    slug: 'rag-pipelines-zero-to-production',
    title: 'RAG Pipelines: From Zero to Production',
    excerpt: 'Building Retrieval-Augmented Generation systems that actually work in production — chunking strategies, embedding models, Pinecone setup and the mistakes I made along the way.',
    date: 'June 30, 2026',
    readTime: '10 min read',
    tag: 'AI Engineering',
    tagColor: '#2563EB',
    tagBg: '#EFF6FF',
    featured: false,
  },
  {
    slug: 'islamic-banking-needs-ai',
    title: 'Why Islamic Banking Needs AI: Lessons from AMEEN AI',
    excerpt: 'Building an AI-powered Islamic finance product matcher taught me that the intersection of Shariah compliance and machine learning is both technically challenging and deeply impactful.',
    date: 'June 12, 2026',
    readTime: '7 min read',
    tag: 'FinTech',
    tagColor: '#059669',
    tagBg: '#ECFDF5',
    featured: false,
  },
]

export default function BlogPage() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <div style={{ paddingTop: 66 }}>
      {/* Header */}
      <section style={{ padding: '80px 24px 60px', background: 'linear-gradient(180deg,#F8FAFC 0%,#fff 100%)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Articles & Insights</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5vw,52px)', letterSpacing: '-0.02em', marginBottom: 18 }}>
            The <span className="gradient-text">Blog</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8 }}>
            Practical insights on AI engineering, backend architecture and building systems that actually work in production.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          {/* Featured post */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div className="section-label">Featured Article</div>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px' }} className="two-col">
                {/* Preview */}
                <div style={{ background: 'linear-gradient(135deg, #EFF6FF, #F5F3FF)', padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 260 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: 72, height: 72, borderRadius: 20, background: 'white', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <BookOpen size={32} style={{ color: '#2563EB' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>Featured Article</div>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ padding: '3px 10px', borderRadius: 100, background: featured.tagBg, color: featured.tagColor, fontSize: 11, fontFamily: 'var(--font-mono)', border: `1px solid ${featured.tagColor}20` }}>{featured.tag}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} />{featured.readTime}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted-light)' }}>{featured.date}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text)', marginBottom: 14, lineHeight: 1.35, letterSpacing: '-0.01em' }}>{featured.title}</h2>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>{featured.excerpt}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* All posts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {rest.map((post, i) => (
              <div key={i} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ padding: '3px 10px', borderRadius: 100, background: post.tagBg, color: post.tagColor, fontSize: 10, fontFamily: 'var(--font-mono)', border: `1px solid ${post.tagColor}20` }}>{post.tag}</span>
                  <span style={{ fontSize: 11, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} />{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text)', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{post.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 12, color: 'var(--muted-light)' }}>{post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--accent)', fontSize: 13, fontWeight: 600 }}>
                    Read <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon */}
          <div style={{ marginTop: 48, padding: '40px', background: 'var(--surface)', borderRadius: 20, border: '1px solid var(--border)', textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <BookOpen size={22} style={{ color: 'var(--accent)' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 10 }}>More Articles Coming Soon</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 400, margin: '0 auto' }}>
              Writing about AI systems, backend patterns and real-world engineering lessons every two weeks.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
