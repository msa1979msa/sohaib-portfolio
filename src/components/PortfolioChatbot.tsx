'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Send, ChevronDown } from 'lucide-react'

/* ══════════════════════════════════════════
   RULE-BASED RESPONSES — Zero API cost
   All responses written in first person
   as if Sohaib is answering himself
══════════════════════════════════════════ */
type Rule = { keywords: string[]; response: string }

const RULES: Rule[] = [
  /* ── Who is Sohaib ── */
  {
    keywords: ['who are you','who is sohaib','tell me about yourself','introduce yourself','about you','about sohaib','yourself'],
    response: "Hey! 👋 I'm **Muhammad Sohaib Ahmed** — an AI Engineer and Full-Stack Developer based in Karachi, Pakistan, working remotely with clients worldwide.\n\nI specialize in building production-ready AI systems using LangGraph, GPT-4, RAG pipelines, and FastAPI backends. With 3+ years of experience, I've delivered enterprise systems across banking, healthcare, Islamic finance, and analytics.\n\nCurrently open to remote roles and freelance projects! 🌍"
  },
  {
    keywords: ['specialize','specialization','focus on','what do you do','what you do'],
    response: "I specialize in 3 core areas:\n\n🧠 **AI Engineering** — LangGraph multi-agent systems, RAG pipelines, GPT-4 integrations, vector databases (Pinecone/FAISS)\n\n⚡ **Backend Architecture** — FastAPI, Node.js, REST APIs, PostgreSQL, Redis\n\n🚀 **Full-Stack Development** — Next.js 14, TypeScript, React 18, enterprise ERP and healthcare systems\n\nI build things that actually work in production — not just demos."
  },
  {
    keywords: ['hire you','why hire','why should','what makes you','different from','stand out','unique'],
    response: "Great question! Here's what makes me different: 🎯\n\n1. **AI + Business** — I don't just build AI, I build AI that solves real business problems (banking fraud, Islamic finance, healthcare)\n\n2. **Full delivery** — I handle everything from backend API to frontend UI to deployment\n\n3. **Proven track record** — 8+ production systems deployed, including AMEEN AI (Techlogix), RiskVision AI, and multi-entity ERP\n\n4. **Zero fluff** — clean code, production-ready architecture, on-time delivery\n\nWant to see my projects? Just ask! 🚀"
  },
  /* ── Projects ── */
  {
    keywords: ['projects','what have you built','portfolio','what have you worked on','work you have done'],
    response: "Here are my 8 production projects: 📂\n\n🕌 **AMEEN AI** — Islamic banking product matcher (Techlogix)\n🔒 **RiskVision AI** — Banking cybercrime detection SOC\n🟠 **Orange ERP** — Multi-entity ERP (Pakistan/UAE/Saudi)\n🏥 **AI Healthcare** — Hospital system with GPT summaries\n💹 **FinanceAI** — RAG-powered stock advisor with ML ensemble\n📊 **MSA ERP** — GAAP-compliant ERP with double-entry accounting\n📈 **Power BI Suite** — Predictive BI dashboards with DAX\n📱 **Mobile Apps** — Flutter & React Native (App Store published)\n\nAsk me about any specific project for details!"
  },
  {
    keywords: ['riskvision','risk vision','cybercrime','fraud detection','soc','banking fraud','security'],
    response: "RiskVision AI is one of my most impressive builds! 🔒\n\nIt's a **Banking SOC Platform** for real-time cybercrime detection:\n\n• **12-factor AI risk scoring engine** across behavioral, transactional and geolocation data\n• **Voice-enabled AI chatbot** for SOC analysts\n• **Live geolocation threat intel** — maps attack origins worldwide\n• **Animated dashboard** with real-time alert queues\n• **PDF/CSV export** + Power BI integration\n\n**Tech:** Next.js 14, TypeScript, Anthropic Claude SDK, Recharts\n\n🌐 Live at: riskvision-ai-ashen.vercel.app\n\nBuilt for Mr. Muzaffar as a POC — delivered and presented successfully!"
  },
  {
    keywords: ['ameen','islamic','shariah','murabaha','ijarah','musharakah','banking product','techlogix'],
    response: "AMEEN AI — my Islamic Banking project built for **Techlogix**! 🕌\n\nFull name: **Adaptive Matchmaking Engine for Ethical & Noble Finance**\n\nIt matches banking customers with the right Shariah-compliant product:\n• Murabaha • Ijarah • Diminishing Musharakah\n• Musharakah • Mudarabah • Salam • Istisna'a • Wakalah • Musawamah\n\n**22 pages** covering:\n✅ AI Advisor Chat\n✅ Staff Copilot\n✅ Shariah Knowledge Assistant\n✅ Eligibility Wizard + Payment Calculator\n✅ Admin Rule Management\n\n**Tech:** Next.js 14, TypeScript, custom rule-based AI engine (zero API cost)\n\nFully AAOIFI and SBP IBD compliant! 📋"
  },
  {
    keywords: ['orange erp','orange consultant','multi-entity','mada','erp pakistan','erp uae','erp saudi'],
    response: "Orange Consultant ERP is a **3-country enterprise system**! 🟠\n\n**3 fully isolated entities:**\n🇵🇰 Pakistan (PKR, FBR tax)\n🇦🇪 UAE (AED, VAT 5%)\n🇸🇦 Saudi Arabia (SAR, VAT 15% + Zakat)\n\n**Key features:**\n• **Immutable GAAP ledger** — cryptographic hash chaining, no edits ever\n• **AI assistant Mada** — floating chatbot for accountants\n• **OCR compliance screening** — scans uploaded documents\n• **Multi-currency** — PKR, AED, SAR with real-time conversion\n• **Supabase RLS** — zero cross-entity data leakage\n\n🌐 Live at: orange-erp.vercel.app"
  },
  {
    keywords: ['healthcare','hospital','medical','clinical','patient','billing anomaly'],
    response: "The AI Healthcare Platform is a full hospital management system! 🏥\n\n**AI capabilities:**\n🤖 GPT-based clinical report summarization\n📊 AI billing anomaly detection\n🔍 Patient data analysis for early risk detection\n\n**6 core modules:**\n• Patient Management (centralized records)\n• Billing & Finance (AI anomaly detection)\n• Role-Based Access (Admin/Doctor/Finance/Staff)\n• Clinical Data Processing\n• Appointment & Scheduling\n• Reporting & Analytics\n\n**Tech:** React, Node.js, PostgreSQL, GPT API, JWT, RBAC\n\nSecure, scalable, and designed for real hospital operations! 💪"
  },
  {
    keywords: ['financeai','finance ai','stock','investment','rag advisor','financial advisor'],
    response: "FinanceAI is a RAG-powered intelligent financial advisor! 💹\n\n**How it works:**\n1. You ask a financial question\n2. FAISS vector search finds relevant financial knowledge\n3. ML ensemble (RandomForest + GradientBoosting) predicts trends\n4. GPT synthesizes everything with 14 technical indicators\n5. Response comes with source citations\n\n**14 technical indicators:** RSI, MACD, Bollinger Bands, EMA, SMA, Volume analysis...\n\n**Real-time data:** Live stock prices via yfinance\n\n**Tech:** Python, FastAPI, LangChain, FAISS, scikit-learn, OpenAI API\n\nProduction-ready, not just a demo! 🎯"
  },
  /* ── Skills ── */
  {
    keywords: ['programming language','what language','what do you code','coding language','tech stack'],
    response: "My core tech stack: 💻\n\n**AI/ML:** Python, LangChain, LangGraph, GPT-4, RAG, FAISS, Pinecone\n\n**Backend:** FastAPI, Node.js, Express, REST API, WebSockets, Redis\n\n**Frontend:** Next.js 14, React 18, TypeScript, JavaScript, Tailwind CSS\n\n**Databases:** PostgreSQL, MongoDB, SQLite, Supabase, Redis\n\n**Mobile:** Flutter, Dart, React Native, Firebase\n\n**Cloud/DevOps:** AWS, Docker, Vercel, GitHub Actions, CI/CD\n\n**Analytics:** Power BI, DAX, SQL, Tableau, Excel\n\nPython is my primary language — I use it for everything AI-related! 🐍"
  },
  {
    keywords: ['full stack','fullstack','full-stack','frontend and backend','both frontend'],
    response: "Yes, I'm a proper full-stack developer! 🚀\n\n**Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS — I build beautiful, responsive UIs\n\n**Backend:** FastAPI, Node.js, REST APIs, PostgreSQL — I design scalable API architectures\n\n**AI Layer:** LangGraph, GPT-4, RAG pipelines — I integrate AI into real products\n\n**Database:** PostgreSQL, MongoDB, Supabase — I design production database schemas\n\nMost of my projects are end-to-end — I handle everything from UI design to API to deployment to database. No need for a separate team! 💪"
  },
  {
    keywords: ['react','next.js','nextjs','frontend','tailwind','ui developer','web developer'],
    response: "Yes! Frontend is one of my strongest areas 🎨\n\n**Next.js 14** — 86% proficiency. I use the App Router, Server Components, API routes, and SSR/SSG extensively\n\n**React 18** — 85% proficiency. Hooks, context, custom hooks, performance optimization\n\n**TypeScript** — 83% proficiency. Strongly typed everything for production code\n\n**Tailwind CSS** — 88% proficiency. Utility-first styling, responsive design\n\nEverything you see in my portfolio is built with Next.js 14 + TypeScript + Tailwind. This very page! 😄"
  },
  {
    keywords: ['python','flask','django','fastapi','backend python'],
    response: "Python is my primary language — 95% proficiency! 🐍\n\n**FastAPI** — 90% proficiency. My go-to backend framework for AI applications. Async by default, auto-generates OpenAPI docs, perfect for high-concurrency AI endpoints\n\n**Django** — basic familiarity. I prefer FastAPI for new projects.\n\n**Flask** — know it, but FastAPI is better for APIs.\n\nWith Python I build:\n• AI/ML pipelines\n• REST API backends\n• Data processing scripts\n• Automation systems\n• RAG pipelines and vector search\n\nPython + FastAPI is my standard combo for AI-powered backends! ⚡"
  },
  {
    keywords: ['ai chatbot','chatbot','build chatbot','chatbot development'],
    response: "Absolutely! Building AI chatbots is one of my specialties 🤖\n\nTypes of chatbots I've built:\n\n**RAG Chatbots** — chat with your documents, PDFs, knowledge bases (like this portfolio assistant!)\n\n**Domain Expert Bots** — AMEEN AI (Islamic banking), healthcare assistant, financial advisor\n\n**Voice Assistants** — RiskVision AI has a voice-enabled SOC analyst chatbot\n\n**Rule-based Bots** — fast, free, no API costs (like the one you're talking to right now!)\n\n**Tech used:** LangChain, LangGraph, OpenAI API, Anthropic Claude, FAISS, Pinecone\n\nWant a chatbot for your business? Let's talk! 📞"
  },
  {
    keywords: ['langchain','openai api','gpt api','ai api','llm','used openai','anthropic'],
    response: "Yes, extensively! These are my daily tools 🔧\n\n**OpenAI API** — GPT-4, GPT-3.5, embeddings, function calling. Used in Healthcare (clinical summaries), FinanceAI (market analysis), and Orange ERP (AI assistant Mada)\n\n**LangChain** — 87% proficiency. Chains, agents, memory, document loaders, vector stores\n\n**LangGraph** — 88% proficiency. Multi-agent workflows, state machines, complex agent orchestration\n\n**Anthropic Claude** — Used in RiskVision AI for real-time threat analysis\n\n**Hugging Face** — model inference, embeddings, transformers\n\nI've integrated these into 5+ production systems — not just toy projects! 🎯"
  },
  {
    keywords: ['database','databases','sql','postgresql','mongodb','nosql'],
    response: "Yes, databases are a core skill! 🗄️\n\n**PostgreSQL** — 86% proficiency. My primary DB. GAAP-compliant ledgers, complex joins, RLS (Row Level Security), pgvector for AI\n\n**MongoDB** — 80% proficiency. Document storage, aggregation pipelines\n\n**SQLite** — 85% proficiency. Used in my ERP system (lightweight, fast)\n\n**Supabase** — 82% proficiency. PostgreSQL + Auth + RLS + real-time — used in Orange ERP for multi-entity isolation\n\n**Redis** — 73% proficiency. Caching, sessions, pub/sub\n\n**SQL** — 88% proficiency. Complex queries, window functions, stored procedures, indexing\n\nI design database schemas that scale — not just the happy path! 📐"
  },
  /* ── AI & Automation ── */
  {
    keywords: ['ai agent','build agent','autonomous','multi-agent','agentic'],
    response: "Yes! Multi-agent AI systems are my specialty 🧠\n\n**What I build:**\n• Agents that plan, reason, and take actions autonomously\n• Multi-agent pipelines where agents collaborate\n• Tool-using agents (web search, database queries, API calls)\n• Supervisor → worker agent hierarchies\n\n**Tech:** LangGraph (primary), LangChain Agents, OpenAI function calling\n\n**Real examples:**\n• AMEEN AI — rule-based agent that matches customers to banking products\n• RiskVision AI — autonomous risk scoring agent analyzing 12 factors\n• FinanceAI — research agent combining RAG + ML predictions\n\nMulti-agent systems are the future of enterprise AI — I'm ahead of the curve! 🚀"
  },
  {
    keywords: ['integrate chatgpt','chatgpt website','add chatgpt','gpt website','openai website','ai into website'],
    response: "Yes, integrating ChatGPT into websites is exactly what I do! 🔌\n\n**How I approach it:**\n\n1. **Define the use case** — customer support, product advisor, document Q&A, etc.\n2. **Build a RAG pipeline** — connect GPT to your actual data\n3. **FastAPI backend** — handles API calls, rate limiting, conversation memory\n4. **Next.js frontend** — streaming UI with typing indicators\n5. **Deploy** — Vercel + serverless functions\n\n**Examples in my portfolio:**\n• AMEEN AI — GPT-powered Islamic banking advisor\n• AI Healthcare — GPT clinical report summarizer\n• FinanceAI — GPT + ML stock analysis chatbot\n\nI can integrate AI into your existing website or build from scratch! 💪"
  },
  {
    keywords: ['automate','automation','business process','workflow','rpa','automated'],
    response: "Automation is one of my strong suits! ⚙️\n\n**Types I've built:**\n\n📊 **Document Automation** — OCR extraction + AI classification (Orange ERP compliance screening)\n\n💰 **Financial Automation** — automated double-entry journal entries, tax calculations, payroll (MSA ERP)\n\n🔔 **Alert Automation** — real-time fraud alerts, anomaly detection (RiskVision AI)\n\n📅 **Workflow Automation** — appointment scheduling, approval workflows, document generation\n\n🤖 **AI Automation** — LangGraph agents that autonomously process data, make decisions, and take actions\n\nI use Python (Celery for task queues), FastAPI (webhooks), and LangGraph (AI workflows). What process do you want to automate? 🎯"
  },
  {
    keywords: ['rag','retrieval augmented','retrieval-augmented','rag system','rag pipeline'],
    response: "RAG (Retrieval-Augmented Generation) is one of my core specialties! 📚\n\n**My RAG pipeline approach:**\n1. **Ingest documents** — PDFs, CSVs, databases, web pages\n2. **Chunk + embed** — split into semantic chunks, create embeddings with OpenAI/HuggingFace\n3. **Store in vector DB** — Pinecone or FAISS\n4. **Query time** — embed user question, find top-k similar chunks\n5. **Generate** — GPT generates answer grounded in retrieved context with citations\n\n**Built in production:**\n• **FinanceAI** — RAG over financial research documents\n• **AMEEN AI** — RAG over Islamic banking policies and Shariah guidelines\n• **Shariah Knowledge Assistant** — RAG over bank-approved product documents\n\n90% proficiency in RAG systems — I know all the tricks! 🎯"
  },
  {
    keywords: ['fraud detection','fraud','anomaly detection','risk scoring','banking security'],
    response: "Yes! Fraud detection is one of my specialized domains 🔒\n\n**RiskVision AI — my flagship fraud detection system:**\n\n**12-factor risk scoring:**\n1. Transaction velocity & amount\n2. Geographic location anomaly\n3. Device fingerprinting\n4. Time-of-day behavioral pattern\n5. Account age & history\n6. Recipient risk score\n7. Login pattern deviation\n8. IP reputation check\n9. Session duration analysis\n10. Multi-channel correlation\n11. Network anomaly score\n12. Historical fraud similarity\n\n**Real-time detection** — scores every transaction in milliseconds\n\n**Tech:** Next.js 14, Anthropic Claude SDK, custom ML scoring engine\n\n🌐 Live at: riskvision-ai-ashen.vercel.app"
  },
  /* ── Education & Certs ── */
  {
    keywords: ['education','degree','university','study','studied','qualification','academic'],
    response: "My academic background: 🎓\n\n**Associate Degree in Computer Science**\nUniversity of the People (USA) — 2026\n\n**Professional Certifications:**\n🏅 IBM AI Engineering Professional Certificate (Coursera)\n🏅 Google Data Analytics Professional Certificate (Coursera)\n🏅 Meta Back-End Developer Certificate (Coursera)\n🏅 IBM Data Science Professional Certificate (Coursera)\n\n3+ years of hands-on experience building real production systems — I believe in learning by building! 💪"
  },
  /* ── Availability & Contact ── */
  {
    keywords: ['available','hire','availability','freelance','open to work','looking for work','remote','job','opportunity'],
    response: "Yes, I'm currently **open to opportunities**! 🟢\n\n**What I'm looking for:**\n✅ Full-time remote roles\n✅ Part-time contracts\n✅ Freelance projects\n✅ Consulting engagements\n\n**My working hours:** Mon–Fri, 9AM–6PM PKT (Pakistan Time)\n\n**Response time:** Within 24 hours guaranteed\n\n**To start a conversation:**\n📧 sohaibahmedmsa@gmail.com\n📱 +92 331 4827670\n💼 linkedin.com/in/sohaib-ahmed-msa\n\nI'm based in Karachi but work remotely with clients worldwide 🌍\n\nFeel free to reach out — I'd love to discuss how I can help your team!"
  },
  {
    keywords: ['contact','email','reach','phone','linkedin','whatsapp','get in touch','connect'],
    response: "Here's how to reach me: 📞\n\n📧 **Email:** sohaibahmedmsa@gmail.com\n📱 **Phone:** +92 331 4827670\n💼 **LinkedIn:** linkedin.com/in/sohaib-ahmed-msa\n🐙 **GitHub:** github.com/msa1979msa\n🐦 **Twitter:** @sohaib79msa\n\n**Best method:** Email or LinkedIn for professional inquiries\n\nI guarantee a response within **24 hours** on business days. Let's build something great together! 🚀"
  },
  /* ── Banking experience ── */
  {
    keywords: ['banking','bank','banking experience','financial sector','finance sector'],
    response: "Yes, I have real banking domain experience! 🏦\n\n**Projects in banking/finance:**\n\n🔒 **RiskVision AI** — Banking SOC platform for cybercrime detection. 12-factor real-time risk scoring for transaction monitoring.\n\n🕌 **AMEEN AI** — Islamic banking product matcher deployed at Techlogix. Covers 9 Shariah-compliant products across all major banking channels.\n\n💹 **FinanceAI** — AI financial advisor with ML-powered stock analysis and RAG over financial knowledge bases.\n\n🏧 **Orange ERP** — Multi-entity financial system with GAAP-compliant immutable ledger across Pakistan, UAE, and Saudi Arabia.\n\nI understand compliance, audit trails, financial data integrity, and the regulatory requirements of the banking sector. 📋"
  },
  /* ── Current role ── */
  {
    keywords: ['current role','current job','where do you work','employer','company','currently working'],
    response: "Currently I work as a **Freelance AI Engineer & Full-Stack Developer** (2024 – Present) 💼\n\nI work independently with clients across:\n• Pakistan 🇵🇰\n• UAE 🇦🇪\n• Saudi Arabia 🇸🇦\n• And remotely for international clients\n\nPrevious notable work includes building AMEEN AI for **Techlogix** — a leading technology company in Pakistan.\n\nI'm currently open to joining a team full-time or continuing with project-based engagements. What kind of role are you looking to fill? 🎯"
  },
  /* ── Salary/Rate ── */
  {
    keywords: ['salary','rate','cost','price','how much','budget','charge','fee'],
    response: "I prefer to discuss compensation after understanding the scope of work! 💬\n\nFor a proper quote, it helps to know:\n1. **Type of engagement** — full-time, part-time, or project-based?\n2. **Scope** — what needs to be built?\n3. **Timeline** — when do you need it?\n4. **Tech stack** — any preferences?\n\nPlease reach out directly:\n📧 sohaibahmedmsa@gmail.com\n\nI'm flexible and focused on finding the right fit for both sides. Let's have a conversation! 🤝"
  },
]

const SUGGESTIONS = [
  {
    cat: '👋 Getting to Know',
    items: ['Who is Sohaib?','What do you specialize in?','Why should I hire you?','What makes you different?'],
  },
  {
    cat: '💼 Projects',
    items: ['What projects have you built?','Tell me about RiskVision AI.','Tell me about AMEEN AI.','Do you have banking experience?'],
  },
  {
    cat: '🛠️ Skills',
    items: ['What programming languages do you know?','Are you a full-stack developer?','Do you work with React or Next.js?','Have you used LangChain or OpenAI APIs?'],
  },
  {
    cat: '🤖 AI & Automation',
    items: ['Can you build AI agents?','Can you integrate ChatGPT into websites?','Have you worked with RAG systems?','Can you build fraud detection systems?'],
  },
  {
    cat: '📞 Availability',
    items: ['Is he available for hire?','How do I contact Sohaib?','What is your current role?','What are your working hours?'],
  },
]

const WELCOME = "Hi! 👋 I'm Sohaib's AI assistant.\n\nI can answer questions about his experience, projects, technical skills, education, and availability. Feel free to ask anything — or pick a suggestion below!"

const FALLBACK = "I'm not sure I have a specific answer for that. Try asking about:\n\n• My **projects** (RiskVision AI, AMEEN AI, ERP systems)\n• My **skills** (Python, FastAPI, LangGraph, Next.js)\n• My **availability** for hire\n• How to **contact** me\n\nOr email directly: sohaibahmedmsa@gmail.com 📧"

function matchRule(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const rule of RULES) {
    if (rule.keywords.some(kw => lower.includes(kw))) {
      return rule.response
    }
  }
  return FALLBACK
}

/* ── Format response with bold and newlines ── */
function FormatText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2,-2)}</strong>
        }
        return part.split('\n').map((line, j) => (
          <span key={`${i}-${j}`}>{line}{j < part.split('\n').length - 1 && <br />}</span>
        ))
      })}
    </>
  )
}

type Msg = { role: 'user' | 'bot'; text: string }

export default function PortfolioChatbot() {
  const [open,     setOpen]     = useState(false)
  const [msgs,     setMsgs]     = useState<Msg[]>([{ role:'bot', text: WELCOME }])
  const [input,    setInput]    = useState('')
  const [showSugg, setShowSugg] = useState(true)
  const [shown,    setShown]    = useState(false)
  const [typing,   setTyping]   = useState(false)
  const [selCat,   setSelCat]   = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 3500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120)
  }, [open])

  const sendMsg = (text: string) => {
    const q = text.trim()
    if (!q) return
    setMsgs(prev => [...prev, { role:'user', text: q }])
    setInput('')
    setShowSugg(false)
    setTyping(true)

    // Simulate typing delay
    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      setTyping(false)
      setMsgs(prev => [...prev, { role:'bot', text: matchRule(q) }])
    }, delay)
  }

  return (
    <>
      {/* ── CHAT WINDOW ── */}
      {open && (
        <div style={{
          position:'fixed', bottom:88, right:24, zIndex:9998,
          width:380, maxHeight:580,
          background:'#FFFFFF',
          borderRadius:20,
          border:'1px solid var(--border)',
          boxShadow:'0 24px 80px rgba(0,0,0,0.18)',
          display:'flex', flexDirection:'column',
          overflow:'hidden',
          animation:'chatUp 0.25s ease',
        }}>
          {/* Header */}
          <div style={{ padding:'14px 18px', background:'linear-gradient(135deg,#1B4FBD,#7C3AED)', display:'flex', alignItems:'center', gap:12, flexShrink:0 }}>
            <div style={{ width:40, height:40, borderRadius:'50%', overflow:'hidden', border:'2px solid rgba(255,255,255,0.35)', flexShrink:0 }}>
              <img src="/avatar.png" alt="Sohaib AI" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
            </div>
            <div style={{ flex:1 }}>
              <div style={{ color:'#fff', fontFamily:'var(--font-display)', fontWeight:700, fontSize:14, lineHeight:1.3 }}>Sohaib's AI Assistant</div>
              <div style={{ display:'flex', alignItems:'center', gap:5, marginTop:2 }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#34D399', display:'inline-block' }} />
                <span style={{ color:'rgba(255,255,255,0.75)', fontSize:11, fontFamily:'var(--font-mono)' }}>Online · Rule-based · Free</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:'rgba(255,255,255,0.15)', border:'none', borderRadius:8, color:'#fff', cursor:'pointer', padding:'5px 7px', display:'flex', alignItems:'center' }}>
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex:1, overflowY:'auto', padding:'14px 14px 6px', display:'flex', flexDirection:'column', gap:12 }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display:'flex', gap:8, alignItems:'flex-end', flexDirection:m.role==='user' ? 'row-reverse' : 'row' }}>
                {/* Avatar */}
                {m.role === 'bot' && (
                  <div style={{ width:28, height:28, borderRadius:'50%', overflow:'hidden', border:'1.5px solid var(--border)', flexShrink:0 }}>
                    <img src="/avatar.png" alt="AI" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
                  </div>
                )}
                {m.role === 'user' && (
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'linear-gradient(135deg,#1B4FBD,#7C3AED)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontFamily:'var(--font-mono)', fontWeight:700, color:'#fff', fontSize:11 }}>
                    U
                  </div>
                )}
                {/* Bubble */}
                <div style={{
                  maxWidth:'78%',
                  padding:'10px 13px',
                  borderRadius: m.role==='user' ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                  background: m.role==='user' ? 'linear-gradient(135deg,#1B4FBD,#7C3AED)' : 'var(--surface)',
                  color: m.role==='user' ? '#fff' : 'var(--text)',
                  fontSize:13, lineHeight:1.8,
                  fontFamily:'var(--font-body)',
                  border: m.role==='bot' ? '1px solid var(--border)' : 'none',
                  boxShadow: m.role==='user' ? '0 2px 8px rgba(27,79,189,0.25)' : '0 1px 4px rgba(0,0,0,0.06)',
                }}>
                  {m.role === 'bot' ? <FormatText text={m.text} /> : m.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display:'flex', gap:8, alignItems:'flex-end' }}>
                <div style={{ width:28, height:28, borderRadius:'50%', overflow:'hidden', border:'1.5px solid var(--border)', flexShrink:0 }}>
                  <img src="/avatar.png" alt="AI" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
                </div>
                <div style={{ padding:'10px 14px', borderRadius:'4px 14px 14px 14px', background:'var(--surface)', border:'1px solid var(--border)', display:'flex', gap:4, alignItems:'center' }}>
                  {[0,1,2].map(i => <div key={i} style={{ width:6, height:6, borderRadius:'50%', background:'var(--accent)', animation:`dotBounce 1.2s ${i*0.18}s ease-in-out infinite` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {showSugg && msgs.length < 3 && (
            <div style={{ flexShrink:0, borderTop:'1px solid var(--border)', background:'var(--surface)' }}>
              {/* Category tabs */}
              <div style={{ display:'flex', overflowX:'auto', padding:'8px 12px 4px', gap:6, scrollbarWidth:'none' }}>
                {SUGGESTIONS.map((s, i) => (
                  <button key={i} onClick={() => setSelCat(i)} style={{
                    padding:'4px 10px', borderRadius:100, border:`1.5px solid ${selCat===i ? 'var(--accent)' : 'var(--border)'}`,
                    background: selCat===i ? 'var(--accent)' : 'transparent',
                    color: selCat===i ? '#fff' : 'var(--muted)',
                    fontFamily:'var(--font-mono)', fontSize:10, cursor:'pointer',
                    whiteSpace:'nowrap', flexShrink:0, transition:'all 0.15s',
                  }}>
                    {s.cat}
                  </button>
                ))}
              </div>
              {/* Items */}
              <div style={{ padding:'4px 12px 10px', display:'flex', flexDirection:'column', gap:4 }}>
                {SUGGESTIONS[selCat].items.map((item, i) => (
                  <button key={i} onClick={() => sendMsg(item)} style={{
                    padding:'7px 12px', borderRadius:8, border:'1px solid var(--border)',
                    background:'var(--bg)', color:'var(--text)',
                    fontFamily:'var(--font-body)', fontSize:12, cursor:'pointer',
                    textAlign:'left', transition:'all 0.15s',
                  }}
                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.background='var(--accent-light)'; (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'; (e.currentTarget as HTMLElement).style.color='var(--accent)' }}
                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.background='var(--bg)'; (e.currentTarget as HTMLElement).style.borderColor='var(--border)'; (e.currentTarget as HTMLElement).style.color='var(--text)' }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div style={{ padding:'10px 14px 14px', borderTop:'1px solid var(--border)', display:'flex', gap:8, alignItems:'center', flexShrink:0, background:'#fff' }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key==='Enter' && !e.shiftKey && sendMsg(input)}
              placeholder="Ask me anything..."
              style={{ flex:1, padding:'9px 14px', borderRadius:100, border:'1.5px solid var(--border)', background:'var(--surface)', fontFamily:'var(--font-body)', fontSize:13, color:'var(--text)', outline:'none', transition:'border-color 0.2s' }}
              onFocus={e => e.target.style.borderColor='var(--accent)'}
              onBlur={e => e.target.style.borderColor='var(--border)'}
            />
            <button onClick={() => sendMsg(input)} disabled={!input.trim() || typing}
              style={{ width:36, height:36, borderRadius:'50%', flexShrink:0, background:input.trim() && !typing ? 'linear-gradient(135deg,#1B4FBD,#7C3AED)' : 'var(--surface-2)', border:`1px solid ${input.trim() && !typing ? 'transparent' : 'var(--border)'}`, cursor:input.trim() && !typing ? 'pointer' : 'default', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}>
              <Send size={14} style={{ color:input.trim() && !typing ? '#fff' : 'var(--muted)' }} />
            </button>
          </div>
        </div>
      )}

      {/* ── FLOATING BUTTON with cyborg avatar ── */}
      <button
        onClick={() => { setOpen(o => !o); setShown(false) }}
        style={{
          position:'fixed', bottom:24, right:24, zIndex:9999,
          width:60, height:60, borderRadius:'50%',
          background:'linear-gradient(135deg,#1B4FBD,#7C3AED)',
          border:'3px solid #fff',
          cursor:'pointer', padding:0, overflow:'hidden',
          boxShadow:'0 8px 24px rgba(27,79,189,0.4)',
          transition:'all 0.3s ease',
          animation:'chatPulse 3s ease-in-out infinite',
        }}
        onMouseOver={e => { (e.currentTarget as HTMLElement).style.transform='scale(1.1)'; (e.currentTarget as HTMLElement).style.boxShadow='0 12px 36px rgba(27,79,189,0.5)' }}
        onMouseOut={e => { (e.currentTarget as HTMLElement).style.transform='scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow='0 8px 24px rgba(27,79,189,0.4)' }}
        title="Chat with Sohaib's AI"
      >
        {open ? (
          <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(135deg,#1B4FBD,#7C3AED)' }}>
            <X size={22} style={{ color:'#fff' }} />
          </div>
        ) : (
          <img src="/avatar.png" alt="Chat with Sohaib" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
        )}
      </button>

      {/* Notification bubble */}
      {shown && !open && (
        <div style={{ position:'fixed', bottom:76, right:28, zIndex:9999, background:'#fff', border:'1px solid var(--border)', borderRadius:'12px 12px 4px 12px', padding:'8px 14px', fontSize:12, color:'var(--text)', boxShadow:'0 4px 20px rgba(0,0,0,0.12)', animation:'chatUp 0.3s ease', whiteSpace:'nowrap', display:'flex', alignItems:'center', gap:6 }}>
          👋 Ask me anything about Sohaib!
        </div>
      )}

      <style>{`
        @keyframes dotBounce { 0%,80%,100%{transform:scale(0.5);opacity:0.35;} 40%{transform:scale(1.1);opacity:1;} }
        @keyframes chatUp    { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }
        @keyframes chatPulse { 0%,100%{box-shadow:0 8px 24px rgba(27,79,189,0.4),0 0 0 0 rgba(27,79,189,0.2);} 50%{box-shadow:0 8px 24px rgba(27,79,189,0.4),0 0 0 10px rgba(27,79,189,0);} }
      `}</style>
    </>
  )
}
