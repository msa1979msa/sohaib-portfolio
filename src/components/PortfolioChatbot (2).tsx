'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Zap } from 'lucide-react'

type Msg = { role: 'user' | 'assistant'; content: string }

const WELCOME: Msg = {
  role: 'assistant',
  content: "Hi! 👋 I'm Sohaib's AI assistant. Ask me anything — his skills, projects, availability, or how he can help your team!",
}

const SUGGESTIONS = [
  'What can Sohaib build?',
  'Is he available for hire?',
  'Tell me about his AI projects',
  'What tech does he use?',
]

export default function PortfolioChatbot() {
  const [open,    setOpen]    = useState(false)
  const [msgs,    setMsgs]    = useState<Msg[]>([WELCOME])
  const [input,   setInput]   = useState('')
  const [loading, setLoading] = useState(false)
  const [shown,   setShown]   = useState(false)     // notification badge
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  // Show notification dot after 3s
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 3000)
    return () => clearTimeout(t)
  }, [])

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, loading])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  const send = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || loading) return

    const userMsg: Msg = { role: 'user', content }
    const history = [...msgs, userMsg]
    setMsgs(history)
    setInput('')
    setLoading(true)
    setShown(false)

    try {
      // Only send user/assistant messages, not the initial welcome (which has no API history)
      const apiMessages = history.map(m => ({ role: m.role, content: m.content }))

      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })
      const data = await res.json()
      setMsgs(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', content: "Something went wrong! Email Sohaib at sohaibahmedmsa@gmail.com 😊" }])
    }

    setLoading(false)
  }

  return (
    <>
      {/* ── CHAT WINDOW ── */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 88, right: 24, zIndex: 9998,
          width: 360, height: 520,
          background: 'var(--bg)',
          borderRadius: 20,
          border: '1px solid var(--border)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 0 0 1px rgba(27,79,189,0.08)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'chatSlideUp 0.25s ease',
        }}>

          {/* Header */}
          <div style={{
            padding: '14px 18px',
            background: 'linear-gradient(135deg, #1B4FBD, #7C3AED)',
            display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Bot size={20} style={{ color: '#fff' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, lineHeight: 1.3 }}>
                Sohaib's AI Assistant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', display: 'inline-block', animation: 'dotPulse 2s infinite' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>Online · Powered by Claude</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'rgba(255,255,255,0.12)', border: 'none', borderRadius: 8, color: '#fff', cursor: 'pointer', padding: '5px 7px', display: 'flex', alignItems: 'center', transition: 'background 0.2s' }}
              onMouseOver={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.22)'}
              onMouseOut={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 6px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
                {/* Avatar */}
                <div style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: m.role === 'assistant' ? 'linear-gradient(135deg, #1B4FBD, #7C3AED)' : 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {m.role === 'assistant'
                    ? <Bot size={13} style={{ color: '#fff' }} />
                    : <User size={13} style={{ color: 'var(--muted)' }} />}
                </div>
                {/* Bubble */}
                <div style={{
                  maxWidth: '78%',
                  padding: '10px 13px',
                  borderRadius: m.role === 'user' ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                  background: m.role === 'user'
                    ? 'linear-gradient(135deg, #1B4FBD, #7C3AED)'
                    : 'var(--surface)',
                  color: m.role === 'user' ? '#fff' : 'var(--text)',
                  fontSize: 13, lineHeight: 1.75,
                  fontFamily: 'var(--font-body)',
                  border: m.role === 'assistant' ? '1px solid var(--border)' : 'none',
                  boxShadow: m.role === 'user' ? '0 2px 8px rgba(27,79,189,0.25)' : '0 1px 4px rgba(0,0,0,0.06)',
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #1B4FBD, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
                  <Bot size={13} style={{ color: '#fff' }} />
                </div>
                <div style={{ padding: '10px 14px', borderRadius: '4px 14px 14px 14px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 4, alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: `dotBounce 1.2s ${i * 0.18}s ease-in-out infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {msgs.length === 1 && (
            <div style={{ padding: '6px 14px', display: 'flex', gap: 6, flexWrap: 'wrap', flexShrink: 0 }}>
              {SUGGESTIONS.map((s, i) => (
                <button key={i} onClick={() => send(s)} style={{
                  padding: '5px 11px', borderRadius: 100,
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--accent)', fontSize: 11,
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer', transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)' }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding: '10px 14px 14px', borderTop: '1px solid var(--border)', display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
              placeholder="Ask about skills, projects..."
              style={{
                flex: 1, padding: '9px 14px', borderRadius: 100,
                border: '1.5px solid var(--border)',
                background: 'var(--surface)',
                fontFamily: 'var(--font-body)', fontSize: 13,
                color: 'var(--text)', outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              style={{
                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                background: input.trim() && !loading ? 'linear-gradient(135deg, #1B4FBD, #7C3AED)' : 'var(--surface-2)',
                border: `1px solid ${input.trim() && !loading ? 'transparent' : 'var(--border)'}`,
                cursor: input.trim() && !loading ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
                boxShadow: input.trim() && !loading ? '0 2px 8px rgba(27,79,189,0.3)' : 'none',
              }}
            >
              <Send size={14} style={{ color: input.trim() && !loading ? '#fff' : 'var(--muted)' }} />
            </button>
          </div>
        </div>
      )}

      {/* ── FLOATING BUTTON ── */}
      <button
        onClick={() => { setOpen(o => !o); setShown(false) }}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1B4FBD, #7C3AED)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(27,79,189,0.4), 0 0 0 0 rgba(27,79,189,0.3)',
          transition: 'all 0.3s ease',
          animation: 'chatPulse 3s ease-in-out infinite',
        }}
        onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(27,79,189,0.5)' }}
        onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(27,79,189,0.4)' }}
      >
        {open
          ? <X size={22} style={{ color: '#fff' }} />
          : <MessageCircle size={22} style={{ color: '#fff' }} />}
      </button>

      {/* Notification badge */}
      {shown && !open && (
        <div style={{
          position: 'fixed', bottom: 70, right: 24, zIndex: 9999,
          background: 'var(--bg)', border: '1px solid var(--border)',
          borderRadius: '12px 12px 4px 12px',
          padding: '8px 14px', fontSize: 12,
          fontFamily: 'var(--font-body)', color: 'var(--text)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          animation: 'chatSlideUp 0.3s ease',
          display: 'flex', alignItems: 'center', gap: 6,
          whiteSpace: 'nowrap',
        }}>
          <Zap size={12} style={{ color: 'var(--accent)' }} />
          Hi! Ask me anything about Sohaib 👋
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.35; }
          40%            { transform: scale(1.1); opacity: 1; }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatPulse {
          0%,100% { box-shadow: 0 8px 24px rgba(27,79,189,0.4), 0 0 0 0 rgba(27,79,189,0.2); }
          50%      { box-shadow: 0 8px 24px rgba(27,79,189,0.4), 0 0 0 10px rgba(27,79,189,0); }
        }
      `}</style>
    </>
  )
}
