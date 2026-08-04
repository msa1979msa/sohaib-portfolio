'use client'
import { useState, useEffect, useRef } from 'react'

const TERMINAL_LINES = [
  { text: '> INITIALIZING SOHAIB.AI...', color: '#AAAAAA' },
  { text: '> LOADING AI MODULES ████████████ 100%', color: '#AAAAAA' },
  { text: '> DECRYPTING PORTFOLIO DATA...', color: '#AAAAAA' },
  { text: '> VERIFYING IDENTITY...', color: '#AAAAAA' },
  { text: '> IDENTITY VERIFIED ✓', color: '#00FF41' },
  { text: '> ACCESS GRANTED — WELCOME', color: '#00FF41' },
]

type TermLine = { text: string; color: string }

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const calledRef  = useRef(false)          // prevent double-fire in StrictMode
  const [lines,  setLines]  = useState<TermLine[]>([])
  const [fading, setFading] = useState(false)
  const [gone,   setGone]   = useState(false)
  const [pct,    setPct]    = useState(0)

  /* ── Matrix rain ── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const FS   = 14
    const CHARS = '01アイウエオカキクケコ01サシスセソタチツテト01ナニヌネノ01'
    let drops: number[] = Array.from(
      { length: Math.ceil(canvas.width / FS) },
      () => Math.random() * -80
    )
    let animId: number

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${FS}px monospace`

      drops.forEach((d, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y  = d * FS
        ctx.fillStyle = Math.random() > 0.97 ? '#FFFFFF' : '#00FF41'
        ctx.fillText(ch, i * FS, y)
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  /* ── Loading bar ── */
  useEffect(() => {
    let v = 0
    const iv = setInterval(() => {
      v += Math.random() * 5 + 2
      if (v >= 100) { v = 100; clearInterval(iv) }
      setPct(Math.min(100, Math.round(v)))
    }, 55)
    return () => clearInterval(iv)
  }, [])

  /* ── Terminal lines — safe against StrictMode double invoke ── */
  useEffect(() => {
    if (calledRef.current) return   // already running, skip second call
    calledRef.current = true

    let cancelled = false
    const counter = { i: 0 }

    const addNext = () => {
      if (cancelled) return
      if (counter.i < TERMINAL_LINES.length) {
        const line = TERMINAL_LINES[counter.i]       // always defined
        setLines(prev => [...prev, line])
        counter.i++
        setTimeout(addNext, counter.i < 4 ? 460 : 580)
      }
    }

    const t0 = setTimeout(addNext, 350)
    const t1 = setTimeout(() => { if (!cancelled) setFading(true) }, 3800)
    const t2 = setTimeout(() => {
      if (!cancelled) { setGone(true); onComplete() }
    }, 4900)

    return () => {
      cancelled = true
      clearTimeout(t0); clearTimeout(t1); clearTimeout(t2)
    }
  }, [])   // intentionally empty — runs once

  if (gone) return null

  const filled = Math.floor(pct / 5)
  const bar    = '█'.repeat(filled) + '░'.repeat(20 - filled)

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#000000',
      opacity: fading ? 0 : 1,
      transition: 'opacity 1.1s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Matrix canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />

      {/* CRT scanlines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.015) 2px, rgba(0,255,65,0.015) 4px)',
      }} />

      {/* Terminal box */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgba(0,0,0,0.88)',
        border: '1px solid #00FF41',
        borderRadius: 10,
        padding: '28px 44px',
        minWidth: 460,
        maxWidth: '90vw',
        boxShadow: '0 0 50px rgba(0,255,65,0.2), inset 0 0 40px rgba(0,255,65,0.03)',
      }}>
        {/* Title bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 22, paddingBottom: 14, borderBottom: '1px solid rgba(0,255,65,0.12)' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28CA41' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#444', marginLeft: 10 }}>terminal — sohaib@portfolio:~</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: 10, color: 'rgba(0,255,65,0.5)', letterSpacing: '0.1em' }}>[ AI ENGINEER ]</span>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 18, fontFamily: 'monospace', fontSize: 12 }}>
          <span style={{ color: '#555' }}>BOOT </span>
          <span style={{ color: '#00FF41', textShadow: '0 0 6px #00FF41', letterSpacing: '-0.03em' }}>[{bar}]</span>
          <span style={{ color: '#00FF41', marginLeft: 8 }}>{pct}%</span>
        </div>

        {/* Terminal lines — guarded render */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {lines.map((ln, i) => {
            if (!ln) return null          // safety guard — prevents the crash
            return (
              <div key={i} style={{
                fontFamily: 'monospace', fontSize: 13,
                color: ln.color,
                textShadow: ln.color === '#00FF41' ? '0 0 12px #00FF41' : 'none',
                letterSpacing: '0.04em',
                animation: 'lineIn 0.15s ease',
              }}>
                {ln.text}
              </div>
            )
          })}
          {lines.length < TERMINAL_LINES.length && (
            <span style={{ fontFamily: 'monospace', color: '#00FF41', fontSize: 13, textShadow: '0 0 8px #00FF41', animation: 'blink 0.7s step-end infinite' }}>█</span>
          )}
        </div>

        {/* Hex noise row */}
        <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(0,255,65,0.1)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(0,255,65,0.28)', letterSpacing: '0.05em' }}>
              {`0x${Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')}`}
            </span>
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      {([['top','left'],['top','right'],['bottom','left'],['bottom','right']] as const).map(([v,h], i) => (
        <div key={i} style={{
          position: 'absolute', [v]: 24, [h]: 24,
          width: 36, height: 36,
          borderTop:    v === 'top'    ? '1.5px solid rgba(0,255,65,0.45)' : 'none',
          borderBottom: v === 'bottom' ? '1.5px solid rgba(0,255,65,0.45)' : 'none',
          borderLeft:   h === 'left'   ? '1.5px solid rgba(0,255,65,0.45)' : 'none',
          borderRight:  h === 'right'  ? '1.5px solid rgba(0,255,65,0.45)' : 'none',
        }} />
      ))}

      <style>{`
        @keyframes blink  { 0%,100%{opacity:1;} 50%{opacity:0;} }
        @keyframes lineIn { from{opacity:0; transform:translateX(-8px);} to{opacity:1; transform:none;} }
      `}</style>
    </div>
  )
}
