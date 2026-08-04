'use client'
import { useEffect, useRef } from 'react'

export default function NeuralBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Use window dimensions — reliable unlike offsetWidth which can be 0
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const W = canvas.width
    const H = canvas.height

    const COLORS = [
      'rgba(27,79,189',
      'rgba(5,150,105',
      'rgba(124,58,237',
    ]

    const nodes = Array.from({ length: 50 }, () => ({
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.25,
      vy:    (Math.random() - 0.5) * 0.25,
      r:     Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x
          const dy   = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            ctx.beginPath()
            ctx.strokeStyle = `${nodes[i].color},${0.15 * (1 - dist / 180)})`
            ctx.lineWidth   = 0.8
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes with glow
      for (const n of nodes) {
        n.pulse += 0.02
        const pr = n.r + Math.sin(n.pulse) * 0.8

        // Outer glow
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 5)
        g.addColorStop(0, `${n.color},0.2)`)
        g.addColorStop(1, `${n.color},0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr * 5, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(n.x, n.y, pr, 0, Math.PI * 2)
        ctx.fillStyle = `${n.color},0.4)`
        ctx.fill()

        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
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
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
