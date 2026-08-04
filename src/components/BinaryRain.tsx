'use client'
import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

/* ─── Single side rain canvas ─── */
function RainCanvas({ side }: { side: 'left' | 'right' }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W  = 110
    const FS = 13
    canvas.width  = W
    canvas.height = window.innerHeight

    const cols  = Math.floor(W / FS)
    const drops = Array.from({ length: cols }, () => Math.random() * -60)

    let animId: number

    const draw = () => {
      /* Fade background — must match page bg color #ECECEC */
      ctx.fillStyle = 'rgba(236, 236, 236, 0.13)'
      ctx.fillRect(0, 0, W, canvas.height)

      ctx.font = `bold ${FS}px monospace`

      for (let i = 0; i < cols; i++) {
        const y   = drops[i] * FS
        const bit = Math.random() > 0.5 ? '1' : '0'

        /* Head of each stream = bright blue, rest = green */
        if (drops[i] < 1 || Math.random() > 0.92) {
          ctx.fillStyle = 'rgba(27, 79, 189, 0.95)'   // blue head
        } else {
          ctx.fillStyle = 'rgba(5, 150, 105, 0.7)'    // green trail
        }

        ctx.fillText(bit, i * FS + 2, y)

        /* Reset drop to top randomly */
        if (y > canvas.height && Math.random() > 0.97) drops[i] = 0
        drops[i] += 0.4   /* fall speed — slow & smooth */
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => { canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        [side]: 0,
        top: 0,
        width: 110,
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.75,
      }}
    />
  )
}

/* ─── Exported component — renders both sides ─── */
export default function BinaryRain() {
  return (
    <>
      <RainCanvas side="left"  />
      <RainCanvas side="right" />
    </>
  )
}
