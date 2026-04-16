import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Muhammad Sohaib Ahmed | AI Engineer & Full-Stack Developer',
  description: 'AI Engineer specializing in FastAPI, Multi-Agent Systems, GPT Applications, and scalable backend architectures. Building production-ready AI systems.',
  keywords: ['AI Engineer', 'FastAPI', 'Multi-Agent Systems', 'GPT', 'LangGraph', 'Full-Stack Developer', 'Pakistan'],
  authors: [{ name: 'Muhammad Sohaib Ahmed' }],
  openGraph: {
    title: 'Muhammad Sohaib Ahmed | AI Engineer',
    description: 'Building production-ready AI systems and scalable backend architectures.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise">
        <div className="grid-bg min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
