import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const PortfolioChatbot = dynamic(() => import('@/components/PortfolioChatbot'), { ssr: false })

export const metadata: Metadata = {
  title: 'Muhammad Sohaib Ahmed | AI Engineer & Full-Stack Developer',
  description: 'AI Engineer specializing in FastAPI, Multi-Agent Systems, GPT Applications, LangGraph and scalable backend architectures.',
  keywords: ['AI Engineer','FastAPI','Multi-Agent Systems','GPT','LangGraph','Next.js'],
  authors: [{ name: 'Muhammad Sohaib Ahmed' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* AI chatbot — answers questions about Sohaib */}
        <PortfolioChatbot />
      </body>
    </html>
  )
}
