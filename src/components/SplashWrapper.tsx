'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const SplashScreen = dynamic(() => import('./SplashScreen'), { ssr: false })

export default function SplashWrapper() {
  const [show, setShow] = useState(true)
  if (!show) return null
  return <SplashScreen onComplete={() => setShow(false)} />
}
