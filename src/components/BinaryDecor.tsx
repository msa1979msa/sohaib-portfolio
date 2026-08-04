'use client'
import { useState, useEffect, useCallback } from 'react'

const genBinary  = () => Array.from({ length: 8 }, () => Math.round(Math.random())).join(' ')
const genHex     = () => '0x' + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6,'0')
const genDecrypt = () => {
  const words = ['DECRYPT','NEURAL','CIPHER','MATRIX','ENCODE','NEURAL','AGENT']
  return words[Math.floor(Math.random() * words.length)]
}

export default function BinaryDecor() {
  const [left,  setLeft]  = useState<string[]>([])
  const [right, setRight] = useState<string[]>([])

  useEffect(() => {
    setLeft(Array.from({ length: 18 }, genBinary))
    setRight(Array.from({ length: 18 }, (_, i) => i % 3 === 0 ? genDecrypt() : genHex()))

    const iv = setInterval(() => {
      setLeft(p  => p.map(l  => Math.random() > 0.55 ? genBinary()  : l))
      setRight(p => p.map((l,i) => Math.random() > 0.6 ? (i % 3 === 0 ? genDecrypt() : genHex()) : l))
    }, 120)

    return () => clearInterval(iv)
  }, [])

  const colStyle = (side: 'left'|'right'): React.CSSProperties => ({
    position: 'absolute',
    [side]: 0,
    top: 0, bottom: 0,
    width: 110,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
    padding: '0 16px',
    pointerEvents: 'none',
    userSelect: 'none',
    overflow: 'hidden',
  })

  const lineStyle = (i: number, isRight: boolean, text: string): React.CSSProperties => {
    const isWord = isRight && i % 3 === 0
    const base   = isRight ? '#1B4FBD' : '#059669'
    const bright = isWord  ? '#DC2626' : base
    return {
      fontFamily: 'monospace',
      fontSize: isWord ? 9 : 10,
      color: bright,
      letterSpacing: isWord ? '0.12em' : '0.06em',
      textShadow: `0 0 8px ${bright}`,
      opacity: 0,
      animation: `binaryFade ${1.2 + (i % 4) * 0.4}s ease-in-out infinite`,
      animationDelay: `${i * 0.06}s`,
      animationFillMode: 'both',
      lineHeight: 1.7,
      fontWeight: isWord ? 700 : 400,
      whiteSpace: 'nowrap',
    }
  }

  return (
    <>
      {/* Left: binary */}
      <div className="hide-mobile" style={colStyle('left')}>
        {left.map((l, i) => <span key={i} style={lineStyle(i, false, l)}>{l}</span>)}
      </div>

      {/* Right: hex + words */}
      <div className="hide-mobile" style={{ ...colStyle('right'), textAlign: 'right' }}>
        {right.map((l, i) => <span key={i} style={lineStyle(i, true, l)}>{l}</span>)}
      </div>

      <style>{`
        @keyframes binaryFade {
          0%   { opacity: 0;    }
          30%  { opacity: 0.45; }
          70%  { opacity: 0.45; }
          100% { opacity: 0;    }
        }
      `}</style>
    </>
  )
}
