import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
export default function NotFound() {
  return (
    <div style={{ paddingTop: 66, minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, fontWeight: 800, color: 'var(--border-dark)', lineHeight: 1, marginBottom: 20, letterSpacing: '-0.04em' }}>404</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, marginBottom: 14 }}>Page Not Found</h1>
        <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn-primary"><ArrowLeft size={15} /> Back to Home</Link>
      </div>
    </div>
  )
}
