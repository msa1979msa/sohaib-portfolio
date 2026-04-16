import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ paddingTop: 70, minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 80, fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: 16, opacity: 0.3 }}>
          404
        </div>
        <AlertCircle size={48} style={{ color: 'var(--accent)', margin: '0 auto 20px', display: 'block' }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, marginBottom: 16 }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}
