'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

/* ═══════════════════════════════════════════
   🐍 CYBORG SNAKE
═══════════════════════════════════════════ */
const COLS = 18, ROWS = 18, CELL = 26
const SW = COLS * CELL, SH = ROWS * CELL

const TECH_FOOD = [
  { name: 'Python',     sym: '🐍', col: '#3776AB' },
  { name: 'FastAPI',    sym: '⚡', col: '#009688' },
  { name: 'LangGraph',  sym: '🧠', col: '#8B5CF6' },
  { name: 'GPT-4',      sym: '🤖', col: '#10A37F' },
  { name: 'Next.js',    sym: '▲',  col: '#E2E8F0' },
  { name: 'React',      sym: '⚛',  col: '#61DAFB' },
  { name: 'Postgres',   sym: '🐘', col: '#4169E1' },
  { name: 'Docker',     sym: '🐳', col: '#2496ED' },
  { name: 'AWS',        sym: '☁',  col: '#FF9900' },
  { name: 'Pinecone',   sym: '🌲', col: '#7C3AED' },
  { name: 'Redis',      sym: '🔴', col: '#DC382D' },
  { name: 'Flutter',    sym: '💙', col: '#02569B' },
]

const WHACK_BUGS = [
  { sym: '🐛', name: 'Bug',          pts: 10, dur: 1800 },
  { sym: '❌', name: '404 Error',    pts: 20, dur: 1400 },
  { sym: '⚠️', name: 'Null Pointer', pts: 30, dur: 1100 },
  { sym: '☠️', name: 'Legacy Code',  pts: 50, dur: 800  },
  { sym: '💣', name: 'Memory Leak',  pts: 40, dur: 950  },
]

type WBug = typeof WHACK_BUGS[0]
type Hole = { id: number; bug: WBug | null; up: boolean; squashed: boolean }

function WhackABug() {
  const HOLES = 9
  const blank = (): Hole[] => Array.from({ length: HOLES }, (_, i) => ({ id: i, bug: null, up: false, squashed: false }))

  const [holes,    setHoles]    = useState<Hole[]>(blank())
  const [score,    setScore]    = useState(0)
  const [best,     setBest]     = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [phase,    setPhase]    = useState<'idle'|'playing'|'over'>('idle')
  const [hits,     setHits]     = useState(0)
  const [reaction, setReaction] = useState('🤖')
  const [popup,    setPopup]    = useState<{id:number;pts:number} | null>(null)

  const scoreRef  = useRef(0)
  const phaseRef  = useRef<'idle'|'playing'|'over'>('idle')
  const diffRef   = useRef(1)
  const hideRefs  = useRef<Record<number, ReturnType<typeof setTimeout>>>({})
  const spawnRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const clockRef  = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const b = parseInt(localStorage.getItem('whack-best') || '0')
    setBest(b)
    return () => cleanup()
  }, [])

  const cleanup = () => {
    Object.values(hideRefs.current).forEach(clearTimeout)
    hideRefs.current = {}
    if (spawnRef.current) clearInterval(spawnRef.current)
    if (clockRef.current) clearInterval(clockRef.current)
  }

  const popBug = (id: number) => {
    const bug = WHACK_BUGS[Math.floor(Math.random() * WHACK_BUGS.length)]
    const dur = Math.max(450, bug.dur / diffRef.current)

    setHoles(prev => prev.map(h => h.id === id ? { ...h, bug, up: true, squashed: false } : h))

    hideRefs.current[id] = setTimeout(() => {
      setHoles(prev => {
        const hole = prev.find(h => h.id === id)
        if (hole?.up && !hole.squashed) setReaction('😤')
        return prev.map(h => h.id === id ? { ...h, up: false, bug: null, squashed: false } : h)
      })
      setTimeout(() => setReaction('🤖'), 500)
    }, dur)
  }

  const startGame = () => {
    cleanup()
    scoreRef.current = 0; diffRef.current = 1
    phaseRef.current = 'playing'
    setScore(0); setHits(0); setTimeLeft(60); setReaction('🤖')
    setPopup(null); setPhase('playing'); setHoles(blank())

    // Spawn loop
    spawnRef.current = setInterval(() => {
      if (phaseRef.current !== 'playing') return
      setHoles(prev => {
        const empty = prev.filter(h => !h.up)
        if (empty.length === 0) return prev
        const pick = empty[Math.floor(Math.random() * empty.length)]
        popBug(pick.id)
        // Maybe spawn a 2nd bug at high difficulty
        if (diffRef.current > 1.5 && empty.length > 1) {
          const pick2 = empty.filter(h => h.id !== pick.id)[Math.floor(Math.random() * (empty.length - 1))]
          if (pick2) setTimeout(() => popBug(pick2.id), 200)
        }
        return prev
      })
    }, 650)

    // Countdown
    clockRef.current = setInterval(() => {
      setTimeLeft(t => {
        const next = t - 1
        diffRef.current = 1 + ((60 - next) / 60) * 2.5
        if (next <= 0) {
          cleanup()
          phaseRef.current = 'over'
          setPhase('over')
          setHoles(blank())
          setBest(b => {
            const nb = Math.max(b, scoreRef.current)
            localStorage.setItem('whack-best', String(nb))
            return nb
          })
          return 0
        }
        return next
      })
    }, 1000)
  }

  const whack = (hole: Hole) => {
    if (!hole.up || !hole.bug || hole.squashed || phaseRef.current !== 'playing') return
    clearTimeout(hideRefs.current[hole.id])

    const pts = hole.bug.pts
    scoreRef.current += pts
    setScore(s => s + pts)
    setHits(h => h + 1)
    setReaction('😄')
    setPopup({ id: hole.id, pts })
    setHoles(prev => prev.map(h => h.id === hole.id ? { ...h, squashed: true } : h))

    setTimeout(() => {
      setHoles(prev => prev.map(h => h.id === hole.id ? { ...h, up: false, bug: null, squashed: false } : h))
      setReaction('🤖')
      setPopup(null)
    }, 380)
  }

  const timerColor = timeLeft <= 10 ? '#DC2626' : timeLeft <= 20 ? '#F59E0B' : 'var(--accent)'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

      {/* ── IDLE SCREEN ── */}
      {phase === 'idle' && (
        <div style={{ textAlign: 'center', padding: '32px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, maxWidth: 380 }}>
          <img src="/avatar.png" alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '3px solid var(--accent)', boxShadow: '0 0 24px rgba(27,79,189,0.3)', marginBottom: 16 }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Whack-a-Bug! 🔨</div>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 8 }}>
            Bugs are attacking the codebase!<br/>
            Click/tap to squash them before they escape.<br/>
            60 seconds. How many can you get?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
            {WHACK_BUGS.map(b => <span key={b.name} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{b.sym} +{b.pts}</span>)}
          </div>
          <button onClick={startGame} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '12px 0', cursor: 'pointer' }}>
            🔨 Start Squashing!
          </button>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', marginTop: 12 }}>🏆 BEST: {best}</p>
        </div>
      )}

      {/* ── PLAYING SCREEN ── */}
      {phase === 'playing' && (
        <>
          {/* HUD */}
          <div style={{ width: '100%', maxWidth: 440, display: 'flex', gap: 12, alignItems: 'center' }}>
            {/* Cyborg avatar reacting */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', overflow: 'hidden', border: '2.5px solid var(--accent)', boxShadow: '0 0 14px rgba(27,79,189,0.3)', transition: 'box-shadow 0.2s' }}>
                <img src="/avatar.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <div style={{ position: 'absolute', top: -6, right: -6, fontSize: 20, transition: 'all 0.15s' }}>{reaction}</div>
            </div>
            {/* Score + timer */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--accent)' }}>SCORE: {score}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: timerColor }}>{timeLeft}s ⏱</span>
              </div>
              <div style={{ height: 8, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(timeLeft / 60) * 100}%`, background: timerColor, borderRadius: 4, transition: 'width 1s linear, background 0.5s' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>🎯 {hits} squashed</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)' }}>🏆 BEST: {best}</span>
              </div>
            </div>
          </div>

          {/* 3×3 Hole Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 130px)', gap: 14,
            padding: 28, borderRadius: 22,
            background: 'linear-gradient(180deg, #1a4a2e 0%, #0f2d1a 100%)',
            border: '3px solid #2d6a4f',
            boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
          }}>
            {holes.map(hole => (
              <div key={hole.id} onClick={() => whack(hole)} style={{
                width: 130, height: 110,
                position: 'relative',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                cursor: hole.up && !hole.squashed ? 'pointer' : 'default',
                overflow: 'hidden',
              }}>
                {/* Ground/hole */}
                <div style={{
                  position: 'absolute', bottom: 0, left: '12%', right: '12%', height: 32,
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse, #060f08 50%, #0d1f10 100%)',
                  boxShadow: 'inset 0 -8px 16px rgba(0,0,0,0.9), 0 2px 0 rgba(255,255,255,0.05)',
                  border: '1.5px solid rgba(255,255,255,0.05)',
                }} />

                {/* Bug / squash effect */}
                {hole.up && hole.bug && (
                  <div style={{
                    position: 'absolute', bottom: 14, fontSize: 54,
                    lineHeight: 1, userSelect: 'none', zIndex: 2,
                    transform: hole.squashed ? 'scale(0.05) translateY(40px)' : 'translateY(0)',
                    opacity: hole.squashed ? 0 : 1,
                    transition: hole.squashed ? 'transform 0.32s ease-in, opacity 0.32s' : 'transform 0.14s cubic-bezier(0.17,0.67,0.42,1.5)',
                    filter: hole.squashed ? 'blur(4px)' : 'drop-shadow(0 -6px 10px rgba(0,0,0,0.5))',
                  }}>
                    {hole.bug.sym}
                  </div>
                )}
                {hole.squashed && (
                  <div style={{ position: 'absolute', bottom: 14, fontSize: 48, zIndex: 3, animation: 'popIn 0.3s ease', userSelect: 'none' }}>💥</div>
                )}

                {/* +pts popup */}
                {popup?.id === hole.id && (
                  <div style={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 18, color: '#34D399', whiteSpace: 'nowrap', zIndex: 4, animation: 'floatUp 0.4s ease forwards' }}>
                    +{popup.pts}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── GAME OVER SCREEN ── */}
      {phase === 'over' && (
        <div style={{ textAlign: 'center', padding: '32px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, maxWidth: 380 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{score >= best && score > 0 ? '🏆' : '😅'}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, marginBottom: 6 }}>
            {score >= best && score > 0 ? 'NEW HIGH SCORE!' : 'Time\'s Up!'}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 36, fontWeight: 800, color: 'var(--accent)', marginBottom: 4 }}>{score}</div>
          <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 16 }}>
            🎯 {hits} bugs squashed &nbsp;·&nbsp; 🏆 Best: {best}
          </div>
          <div style={{ padding: '10px 16px', background: 'var(--bg)', borderRadius: 10, border: '1px solid var(--border)', marginBottom: 20 }}>
            {hits === 0 && <p style={{ color: 'var(--muted)', fontSize: 13 }}>Next time try clicking the bugs! 😄</p>}
            {hits > 0 && hits < 10 && <p style={{ color: 'var(--muted)', fontSize: 13 }}>Good start! Try clicking faster next time ⚡</p>}
            {hits >= 10 && hits < 20 && <p style={{ color: 'var(--muted)', fontSize: 13 }}>Nice work! The bugs are scared of you 😤</p>}
            {hits >= 20 && <p style={{ color: 'var(--accent)', fontSize: 13 }}>🔥 Bug slayer! The codebase is clean!</p>}
          </div>
          <button onClick={startGame} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '12px 0', cursor: 'pointer' }}>
            🔨 Play Again
          </button>
        </div>
      )}

      <style>{`
        @keyframes floatUp { from{opacity:1;transform:translateX(-50%) translateY(0);} to{opacity:0;transform:translateX(-50%) translateY(-32px);} }
        @keyframes popIn   { from{transform:scale(0.3);opacity:0;} to{transform:scale(1);opacity:1;} }
      `}</style>
    </div>
  )
}

/* ═══════════════════════════════════════════
   🎯 BUG BLASTER
═══════════════════════════════════════════ */
const BW = 460, BH = 540
const BUG_TYPES = [
  { sym: '🐛', name: 'Bug',          pts: 10, col: '#22C55E', hp: 1 },
  { sym: '❌', name: '404 Error',    pts: 20, col: '#F59E0B', hp: 1 },
  { sym: '⚠️', name: 'Null Pointer', pts: 30, col: '#8B5CF6', hp: 1 },
  { sym: '☠️', name: 'Legacy Code',  pts: 50, col: '#DC2626', hp: 2 },
  { sym: '💣', name: 'Memory Leak',  pts: 40, col: '#EC4899', hp: 2 },
]

type Bullet = { x: number; y: number }
type Enemy  = { x: number; y: number; vx: number; vy: number; cfg: typeof BUG_TYPES[0]; hp: number }
type Spark  = { x: number; y: number; vx: number; vy: number; col: string; life: number }

function BugBlaster() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef    = useRef<HTMLImageElement | null>(null)
  const frameRef  = useRef(0)
  const keysRef   = useRef(new Set<string>())

  const gs = useRef({
    px: BW / 2, bullets: [] as Bullet[], enemies: [] as Enemy[], sparks: [] as Spark[],
    score: 0, best: 0, lives: 3, wave: 1,
    running: false, over: false,
    fireTick: 0, waveText: '', waveAlpha: 0,
  })

  const [ui, setUi] = useState({ score: 0, best: 0, lives: 3, wave: 1, over: false, idle: true })

  useEffect(() => {
    const img = new Image(); img.src = '/avatar.png'
    img.onload = () => { imgRef.current = img }
    const best = parseInt(typeof window !== 'undefined' ? localStorage.getItem('bugs-best') || '0' : '0')
    gs.current.best = best
    setUi(u => ({ ...u, best }))
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  const spawnWave = useCallback(() => {
    const g = gs.current
    const rows = Math.min(3, 1 + Math.floor((g.wave - 1) / 2))
    const cols = 6
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cfg = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)]
        g.enemies.push({ x: 40 + c * 65, y: -50 - r * 75, vx: (Math.random() > 0.5 ? 1 : -1) * (0.8 + g.wave * 0.1), vy: 0.6 + g.wave * 0.12, cfg, hp: cfg.hp })
      }
    }
    g.waveText = `WAVE ${g.wave}`; g.waveAlpha = 1.5
  }, [])

  const gameLoop = useCallback(() => {
    const c = canvasRef.current; if (!c) return
    const ctx = c.getContext('2d')!
    const g = gs.current
    if (!g.running) return

    // Move player
    const spd = 5
    if (keysRef.current.has('ArrowLeft')  && g.px > 28)       g.px -= spd
    if (keysRef.current.has('ArrowRight') && g.px < BW - 28)  g.px += spd

    // Auto fire
    g.fireTick++
    if (g.fireTick % 16 === 0 || keysRef.current.has(' ')) {
      g.bullets.push({ x: g.px, y: BH - 70 })
    }

    // Move bullets
    g.bullets = g.bullets.filter(b => b.y > 0)
    g.bullets.forEach(b => { b.y -= 9 })

    // Move enemies
    g.enemies.forEach(e => {
      e.x += e.vx; e.y += e.vy
      if (e.x < 20 || e.x > BW - 20) e.vx *= -1
    })

    // Bullet-enemy collision
    g.bullets = g.bullets.filter(b => {
      const idx = g.enemies.findIndex(e => Math.abs(b.x - e.x) < 24 && Math.abs(b.y - e.y) < 24)
      if (idx >= 0) {
        g.enemies[idx].hp--
        if (g.enemies[idx].hp <= 0) {
          const e = g.enemies[idx]
          for (let i = 0; i < 10; i++) {
            g.sparks.push({ x: e.x, y: e.y, vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8, col: e.cfg.col, life: 1 })
          }
          g.score += e.cfg.pts
          g.enemies.splice(idx, 1)
          setUi(u => ({ ...u, score: g.score }))
        }
        return false
      }
      return true
    })

    // Enemy reaches bottom
    g.enemies = g.enemies.filter(e => {
      if (e.y > BH - 50) {
        g.lives--
        for (let i = 0; i < 8; i++) g.sparks.push({ x: g.px, y: BH - 60, vx: (Math.random() - 0.5) * 5, vy: -Math.random() * 6, col: '#F87171', life: 1 })
        setUi(u => ({ ...u, lives: g.lives }))
        if (g.lives <= 0) {
          g.running = false; g.over = true
          if (g.score > g.best) { g.best = g.score; localStorage.setItem('bugs-best', String(g.score)) }
          setUi(u => ({ ...u, score: g.score, best: g.best, over: true, idle: false }))
        }
        return false
      }
      return true
    })

    // Next wave
    if (g.enemies.length === 0 && g.running) { g.wave++; setUi(u => ({ ...u, wave: g.wave, score: g.score })); spawnWave() }

    // Sparks
    g.sparks = g.sparks.filter(s => s.life > 0)
    g.sparks.forEach(s => { s.x += s.vx; s.y += s.vy; s.vy += 0.2; s.life -= 0.04 })

    /* ── DRAW ── */
    ctx.fillStyle = '#060B14'; ctx.fillRect(0, 0, BW, BH)

    // Starfield
    ctx.fillStyle = 'rgba(255,255,255,0.4)'
    for (let i = 0; i < 40; i++) { ctx.fillRect((i * 97 + 13) % BW, (i * 137 + Date.now() * 0.015) % BH, 1, 1) }

    // Enemies
    ctx.font = '26px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    g.enemies.forEach(e => {
      ctx.fillText(e.cfg.sym, e.x, e.y)
      if (e.hp > 1) {
        ctx.font = '10px serif'; ctx.fillStyle = '#F87171'
        ctx.fillText('❤️'.repeat(e.hp), e.x, e.y + 22)
        ctx.font = '26px serif'
      }
    })

    // Bullets (cyan laser beams)
    g.bullets.forEach(b => {
      ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(b.x, b.y + 16)
      ctx.strokeStyle = '#38BDF8'; ctx.lineWidth = 3; ctx.stroke()
      ctx.beginPath(); ctx.arc(b.x, b.y, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'; ctx.fill()
    })

    // Sparks
    g.sparks.forEach(s => {
      ctx.beginPath(); ctx.arc(s.x, s.y, Math.max(1, 4 * s.life), 0, Math.PI * 2)
      const hex = Math.floor(s.life * 255).toString(16).padStart(2, '0')
      ctx.fillStyle = s.col + hex; ctx.fill()
    })

    // Player avatar
    const py = BH - 50, pr = 24
    ctx.save()
    ctx.beginPath(); ctx.arc(g.px, py, pr, 0, Math.PI * 2); ctx.clip()
    if (imgRef.current) { ctx.drawImage(imgRef.current, g.px - pr, py - pr, pr * 2, pr * 2) }
    else { ctx.fillStyle = '#1B4FBD'; ctx.fill() }
    ctx.restore()
    ctx.beginPath(); ctx.arc(g.px, py, pr, 0, Math.PI * 2)
    ctx.strokeStyle = '#38BDF8'; ctx.lineWidth = 2.5; ctx.stroke()

    // Thruster flame
    const flicker = 0.7 + Math.sin(Date.now() * 0.02) * 0.3
    const grad = ctx.createLinearGradient(g.px, py + pr, g.px, py + pr + 18 * flicker)
    grad.addColorStop(0, '#38BDF8aa'); grad.addColorStop(1, 'transparent')
    ctx.beginPath()
    ctx.moveTo(g.px - 8, py + pr - 4)
    ctx.lineTo(g.px + 8, py + pr - 4)
    ctx.lineTo(g.px, py + pr + 18 * flicker)
    ctx.fillStyle = grad; ctx.fill()

    // HUD top bar
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(0, 0, BW, 34)
    ctx.font = 'bold 12px monospace'; ctx.textAlign = 'left'; ctx.fillStyle = '#38BDF8'
    ctx.fillText(`SCORE: ${g.score}`, 10, 22)
    ctx.textAlign = 'center'; ctx.fillStyle = '#F59E0B'
    ctx.fillText(`WAVE ${g.wave}`, BW / 2, 22)
    ctx.textAlign = 'right'; ctx.fillStyle = '#F87171'
    ctx.fillText('❤️'.repeat(Math.max(0, g.lives)), BW - 10, 22)

    // Wave announcement
    if (g.waveAlpha > 0) {
      const a = Math.min(1, g.waveAlpha)
      ctx.globalAlpha = a
      ctx.font = 'bold 40px monospace'; ctx.textAlign = 'center'; ctx.fillStyle = '#38BDF8'
      ctx.fillText(g.waveText, BW / 2, BH / 2)
      g.waveAlpha -= 0.022
      ctx.globalAlpha = 1
    }

    frameRef.current = requestAnimationFrame(gameLoop)
  }, [spawnWave])

  const startGame = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    const best = gs.current.best
    Object.assign(gs.current, { px: BW / 2, bullets: [], enemies: [], sparks: [], score: 0, lives: 3, wave: 1, running: true, over: false, fireTick: 0, waveText: '', waveAlpha: 0, best })
    setUi(u => ({ ...u, score: 0, lives: 3, wave: 1, over: false, idle: false }))
    spawnWave()
    frameRef.current = requestAnimationFrame(gameLoop)
  }, [spawnWave, gameLoop])

  useEffect(() => {
    const dn = (e: KeyboardEvent) => {
      keysRef.current.add(e.key)
      if ([' ', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault()
    }
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key)
    window.addEventListener('keydown', dn)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', dn); window.removeEventListener('keyup', up) }
  }, [])

  const onMouseMove = useCallback((clientX: number) => {
    const c = canvasRef.current; if (!c || !gs.current.running) return
    const rect = c.getBoundingClientRect()
    gs.current.px = Math.max(28, Math.min(BW - 28, (clientX - rect.left) * (BW / rect.width)))
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ position: 'relative', touchAction: 'none' }}
        onMouseMove={e => onMouseMove(e.clientX)}
        onTouchMove={e => { e.preventDefault(); onMouseMove(e.touches[0].clientX) }}
      >
        <canvas ref={canvasRef} width={BW} height={BH} style={{ borderRadius: 16, border: '2px solid rgba(220,38,38,0.4)', display: 'block', boxShadow: '0 0 50px rgba(220,38,38,0.15)' }} />

        {/* IDLE */}
        {ui.idle && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)', borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <img src="/avatar.png" alt="" style={{ width: 72, height: 72, borderRadius: '50%', border: '3px solid #DC2626', objectFit: 'cover', objectPosition: 'top center', boxShadow: '0 0 30px rgba(220,38,38,0.5)' }} />
            <div style={{ fontFamily: 'monospace', fontSize: 26, fontWeight: 800, color: '#F87171', letterSpacing: '0.08em' }}>BUG BLASTER</div>
            <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#94A3B8', textAlign: 'center', lineHeight: 2 }}>
              🖱️ Move mouse to aim<br/>
              🕹️ Arrow keys ← → to move<br/>
              Auto-fires! Destroy the bugs! 🐛❌⚠️☠️💣
            </div>
            <button onClick={startGame} style={{ padding: '12px 36px', borderRadius: 100, background: 'linear-gradient(135deg,#DC2626,#F59E0B)', border: 'none', color: '#fff', fontFamily: 'monospace', fontWeight: 800, fontSize: 16, cursor: 'pointer', letterSpacing: '0.1em', boxShadow: '0 4px 20px rgba(220,38,38,0.4)' }}>
              ▶ START BLASTING
            </button>
            <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#F59E0B' }}>🏆 BEST: {ui.best}</div>
          </div>
        )}

        {/* GAME OVER */}
        {ui.over && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', borderRadius: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 800, color: '#F87171', letterSpacing: '0.08em' }}>BUGS WON! 😱</div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#94A3B8' }}>The legacy code broke through...</div>
            <div style={{ fontFamily: 'monospace', fontSize: 16, color: '#38BDF8' }}>SCORE: {ui.score} &nbsp; 🏆 BEST: {ui.best}</div>
            <button onClick={startGame} style={{ padding: '12px 36px', borderRadius: 100, background: 'linear-gradient(135deg,#DC2626,#F59E0B)', border: 'none', color: '#fff', fontFamily: 'monospace', fontWeight: 800, fontSize: 16, cursor: 'pointer', letterSpacing: '0.1em', marginTop: 8 }}>
              ▶ BLAST AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Bug legend */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {BUG_TYPES.map(b => <span key={b.name} style={{ fontFamily: 'monospace', fontSize: 11, color: '#475569' }}>{b.sym} {b.name} +{b.pts}</span>)}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   GAMES HUB PAGE
═══════════════════════════════════════════ */
export default function GamesPage() {
  const [game, setGame] = useState<'snake' | 'bugs'>('snake')

  return (
    <div style={{ paddingTop: 66, minHeight: '100vh', background: '#060B14' }}>

      {/* Hero */}
      <section style={{ padding: '48px 24px 28px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#475569', textDecoration: 'none', fontSize: 13, fontFamily: 'monospace', marginBottom: 24 }}>
          ← Back to Portfolio
        </Link>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
          <span style={{ padding: '4px 16px', borderRadius: 100, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.2)', fontFamily: 'monospace', fontSize: 11, color: '#38BDF8', letterSpacing: '0.1em' }}>
            🎮 ARCADE LAB · BUILT WITH REACT CANVAS
          </span>
        </div>
        <h1 style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 'clamp(28px,5vw,52px)', color: '#F1F5F9', marginBottom: 10, letterSpacing: '-0.02em' }}>
          <span style={{ color: '#38BDF8' }}>Arcade</span> Lab 🕹️
        </h1>
        <p style={{ color: '#475569', fontSize: 15, fontFamily: 'monospace' }}>
          Two games. One cyborg AI engineer. Infinite fun. 😄
        </p>
      </section>

      {/* Tabs */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', display: 'flex' }}>
          {[
            { id: 'snake', label: '🔨 Whack-a-Bug',  sub: 'Squash the bugs!'   },
            { id: 'bugs',  label: '🎯 Bug Blaster',  sub: 'Destroy the bugs'  },
          ].map(t => (
            <button key={t.id} onClick={() => setGame(t.id as any)} style={{
              flex: 1, padding: '18px 12px', border: 'none', cursor: 'pointer',
              borderBottom: `3px solid ${game === t.id ? '#38BDF8' : 'transparent'}`,
              background: 'transparent', transition: 'all 0.2s', textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: 16, color: game === t.id ? '#38BDF8' : '#64748B' }}>{t.label}</div>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#374151', marginTop: 4 }}>{t.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Game area */}
      <section style={{ padding: '36px 24px 80px', display: 'flex', justifyContent: 'center' }}>
        <div>
          <p style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 11, color: '#374151', letterSpacing: '0.08em', marginBottom: 20 }}>
            {game === 'snake'
              ? '🕹️ ARROW KEYS / WASD TO MOVE · COLLECT TECH LOGOS TO GROW'
              : '🖱️ MOVE MOUSE OVER GAME · AUTO-FIRES · ← → TO MOVE'}
          </p>
          {game === 'snake' ? <WhackABug /> : <BugBlaster />}
        </div>
      </section>
    </div>
  )
}
