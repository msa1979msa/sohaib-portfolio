'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { Mic, MicOff, Search, FileText, Globe, Brain, ArrowRight, CheckCircle, AlertCircle, Loader, Copy, X, ExternalLink } from 'lucide-react'

/* ══════════════════════════════════════
   PORTFOLIO SEARCH DATA
══════════════════════════════════════ */
const PORTFOLIO_DATA = [
  { title: 'AMEEN AI — Islamic Banking',  type: 'Project', href: '/projects/ameen-ai',  tags: ['islamic','banking','fintech','ai','shariah','murabaha','ijarah','musharakah','techlogix','next.js','typescript'], desc: 'Shariah-compliant product matcher built for Techlogix' },
  { title: 'RiskVision AI — Cybercrime',  type: 'Project', href: '/projects/riskvision', tags: ['cybersecurity','fraud','banking','soc','risk','ai','voice','claude','anthropic','recharts'],              desc: 'Banking SOC with 12-factor risk scoring and voice AI' },
  { title: 'Orange Consultant ERP',       type: 'Project', href: '/projects/orange-erp', tags: ['erp','accounting','gaap','supabase','postgresql','multi-entity','pakistan','uae','saudi','ocr','ai'],    desc: 'Multi-entity ERP across 3 countries with AI assistant' },
  { title: 'AI Healthcare Platform',      type: 'Project', href: '/projects/healthcare',  tags: ['healthcare','hospital','gpt','ai','node.js','postgresql','rbac','billing','medical'],                      desc: 'Hospital system with GPT summaries and AI anomaly detection' },
  { title: 'FinanceAI Advisor',           type: 'Project', href: '/projects/financeai',   tags: ['finance','stocks','rag','fastapi','faiss','machine learning','python','yfinance','vector'],               desc: 'RAG-powered financial advisor with ML ensemble' },
  { title: 'Extreme MSA ERP',            type: 'Project', href: '/projects/erp',          tags: ['erp','accounting','crm','hr','next.js','sqlite','gaap','typescript'],                                    desc: 'GAAP-compliant ERP with double-entry accounting and CRM' },
  { title: 'Power BI Analytics',         type: 'Project', href: '/projects/powerbi',      tags: ['power bi','analytics','dax','sql','dashboard','bi','data','reporting'],                                  desc: 'Predictive BI dashboards with real-time KPIs' },
  { title: 'Mobile Apps',                type: 'Project', href: '/projects/mobile',        tags: ['flutter','react native','mobile','android','ios','firebase','offline'],                                  desc: 'Cross-platform mobile apps with offline-first architecture' },
  /* AI & ML Skills */
  { title: 'Python',           type:'Skill', href:'/about', tags:['python','backend','scripting','ml','ai','automation'],              desc:'95% — primary AI/backend language' },
  { title: 'FastAPI',          type:'Skill', href:'/about', tags:['fastapi','api','backend','python','rest','async'],                  desc:'90% — high-performance async API framework' },
  { title: 'LangGraph',        type:'Skill', href:'/about', tags:['langgraph','ai','agents','multi-agent','orchestration','graph'],    desc:'88% — multi-agent AI workflow orchestration' },
  { title: 'LangChain',        type:'Skill', href:'/about', tags:['langchain','ai','llm','chain','rag','tools'],                      desc:'87% — LLM application framework' },
  { title: 'GPT-4 / OpenAI',  type:'Skill', href:'/about', tags:['gpt','openai','llm','ai','gpt-4','chatgpt','api'],                 desc:'92% — large language model applications' },
  { title: 'RAG Pipelines',    type:'Skill', href:'/about', tags:['rag','retrieval','augmented','generation','vector','embedding'],   desc:'90% — retrieval-augmented generation systems' },
  { title: 'Embeddings',       type:'Skill', href:'/about', tags:['embedding','vector','semantic','search','openai'],                 desc:'88% — text embedding and vector representations' },
  { title: 'Pinecone',         type:'Skill', href:'/about', tags:['pinecone','vector','database','similarity','search'],              desc:'85% — vector database for AI applications' },
  { title: 'FAISS',            type:'Skill', href:'/about', tags:['faiss','vector','similarity','search','facebook','ml'],            desc:'85% — Facebook AI similarity search' },
  { title: 'Multi-Agent Systems',type:'Skill',href:'/about',tags:['multi-agent','autonomous','ai','agents','planning','tools'],       desc:'88% — autonomous AI agent architectures' },
  { title: 'Prompt Engineering',type:'Skill',href:'/about', tags:['prompt','engineering','llm','gpt','few-shot','chain-of-thought'],  desc:'92% — advanced LLM prompting techniques' },
  { title: 'Machine Learning',  type:'Skill',href:'/about', tags:['machine learning','ml','scikit-learn','sklearn','classification'], desc:'80% — ML algorithms and model training' },
  { title: 'TensorFlow',        type:'Skill',href:'/about', tags:['tensorflow','deep learning','neural','keras','ml'],               desc:'66% — deep learning framework' },
  { title: 'NLP',               type:'Skill',href:'/about', tags:['nlp','natural language','text','processing','transformers'],       desc:'82% — natural language processing' },
  /* Backend Skills */
  { title: 'Node.js',          type:'Skill', href:'/about', tags:['node.js','nodejs','javascript','backend','express','runtime'],    desc:'82% — JavaScript runtime for backend' },
  { title: 'Express.js',       type:'Skill', href:'/about', tags:['express','expressjs','node.js','rest','api','middleware'],        desc:'82% — Node.js web framework' },
  { title: 'REST API Design',  type:'Skill', href:'/about', tags:['rest','api','http','json','endpoint','design'],                   desc:'92% — RESTful API architecture and design' },
  { title: 'WebSockets',       type:'Skill', href:'/about', tags:['websocket','real-time','socket','streaming','live'],              desc:'78% — real-time bidirectional communication' },
  { title: 'Redis',            type:'Skill', href:'/about', tags:['redis','cache','queue','celery','session','pub-sub'],             desc:'73% — in-memory data store and caching' },
  { title: 'Celery',           type:'Skill', href:'/about', tags:['celery','task','queue','worker','async','background'],            desc:'72% — distributed task queue' },
  { title: 'JWT / Auth',       type:'Skill', href:'/about', tags:['jwt','authentication','authorization','oauth','security','token'],desc:'88% — token-based authentication systems' },
  { title: 'Microservices',    type:'Skill', href:'/about', tags:['microservices','architecture','services','api','distributed'],    desc:'76% — microservice architecture patterns' },
  /* Frontend Skills */
  { title: 'Next.js 14',       type:'Skill', href:'/about', tags:['next.js','nextjs','react','ssr','frontend','app-router'],        desc:'86% — full-stack React framework' },
  { title: 'React 18',         type:'Skill', href:'/about', tags:['react','reactjs','hooks','frontend','component','state'],        desc:'85% — component-based UI library' },
  { title: 'TypeScript',       type:'Skill', href:'/about', tags:['typescript','ts','typed','javascript','types','interfaces'],     desc:'83% — typed JavaScript development' },
  { title: 'JavaScript',       type:'Skill', href:'/about', tags:['javascript','js','es6','frontend','dom','async'],                desc:'87% — core web programming language' },
  { title: 'Tailwind CSS',     type:'Skill', href:'/about', tags:['tailwind','css','styling','responsive','design','utility'],      desc:'88% — utility-first CSS framework' },
  { title: 'Recharts',         type:'Skill', href:'/about', tags:['recharts','chart','graph','visualization','react','data'],       desc:'85% — React charting library' },
  /* Database Skills */
  { title: 'PostgreSQL',       type:'Skill', href:'/about', tags:['postgresql','postgres','sql','database','relational','rls'],     desc:'86% — production relational database' },
  { title: 'MongoDB',          type:'Skill', href:'/about', tags:['mongodb','nosql','document','database','atlas','mongoose'],      desc:'80% — NoSQL document database' },
  { title: 'SQLite',           type:'Skill', href:'/about', tags:['sqlite','sql','database','lightweight','embedded'],              desc:'85% — lightweight relational database' },
  { title: 'Supabase',         type:'Skill', href:'/about', tags:['supabase','postgresql','rls','auth','storage','realtime'],      desc:'82% — open-source Firebase alternative' },
  { title: 'SQL',              type:'Skill', href:'/about', tags:['sql','query','database','joins','aggregate','index'],            desc:'88% — structured query language' },
  /* Cloud & DevOps */
  { title: 'Docker',           type:'Skill', href:'/about', tags:['docker','container','devops','compose','dockerfile','deploy'],   desc:'75% — containerization platform' },
  { title: 'AWS',              type:'Skill', href:'/about', tags:['aws','amazon','cloud','ec2','s3','lambda','serverless'],        desc:'70% — Amazon Web Services cloud platform' },
  { title: 'Vercel',           type:'Skill', href:'/about', tags:['vercel','deployment','hosting','next.js','serverless','cdn'],   desc:'90% — Next.js deployment platform' },
  { title: 'GitHub Actions',   type:'Skill', href:'/about', tags:['github','actions','ci','cd','pipeline','workflow','automation'],desc:'78% — CI/CD automation workflows' },
  { title: 'Git / GitHub',     type:'Skill', href:'/about', tags:['git','github','version control','branching','commit','merge'],  desc:'92% — version control and collaboration' },
  /* Mobile Skills */
  { title: 'Flutter',          type:'Skill', href:'/about', tags:['flutter','dart','mobile','cross-platform','android','ios'],     desc:'78% — cross-platform mobile framework' },
  { title: 'React Native',     type:'Skill', href:'/about', tags:['react native','mobile','ios','android','javascript','expo'],    desc:'75% — JavaScript mobile framework' },
  { title: 'Firebase',         type:'Skill', href:'/about', tags:['firebase','google','realtime','auth','firestore','storage'],    desc:'76% — Google app development platform' },
  { title: 'Dart',             type:'Skill', href:'/about', tags:['dart','flutter','mobile','language','oop'],                    desc:'76% — Dart programming language' },
  /* Analytics Skills */
  { title: 'Power BI',         type:'Skill', href:'/about', tags:['power bi','powerbi','analytics','dashboard','reporting','bi'],  desc:'88% — Microsoft business intelligence tool' },
  { title: 'DAX',              type:'Skill', href:'/about', tags:['dax','power bi','measure','calculated','formula','analytics'],  desc:'85% — Data Analysis Expressions for Power BI' },
  { title: 'SQL Analytics',    type:'Skill', href:'/about', tags:['sql','analytics','aggregation','window','etl','reporting'],     desc:'88% — advanced analytical SQL queries' },
  { title: 'Data Visualization',type:'Skill',href:'/about', tags:['visualization','chart','graph','dashboard','tableau','data'],  desc:'85% — interactive data visualization design' },
  { title: 'Tableau',          type:'Skill', href:'/about', tags:['tableau','visualization','analytics','bi','dashboard'],         desc:'72% — business intelligence visualization' },
  { title: 'Excel / VBA',      type:'Skill', href:'/about', tags:['excel','vba','spreadsheet','pivot','formula','microsoft'],      desc:'80% — advanced Excel and automation' },
  /* Domain Expertise */
  { title: 'ERP Development',  type:'Skill', href:'/about', tags:['erp','enterprise','resource','planning','accounting','gaap'],   desc:'85% — enterprise resource planning systems' },
  { title: 'Double-Entry Accounting',type:'Skill',href:'/about',tags:['accounting','gaap','ledger','journal','bookkeeping','erp'],desc:'82% — GAAP-compliant accounting systems' },
  { title: 'Islamic Finance',  type:'Skill', href:'/about', tags:['islamic','finance','shariah','murabaha','ijarah','aaoifi'],    desc:'88% — Shariah-compliant product design' },
  { title: 'Healthcare IT',    type:'Skill', href:'/about', tags:['healthcare','hospital','medical','clinical','ehr','rbac'],      desc:'80% — healthcare management systems' },
  { title: 'FinTech',          type:'Skill', href:'/about', tags:['fintech','finance','banking','payment','fraud','anomaly'],      desc:'82% — financial technology solutions' },
  { title: 'Cybersecurity AI', type:'Skill', href:'/about', tags:['cybersecurity','fraud','detection','soc','risk','threat'],     desc:'78% — AI-powered security systems' },
  { title: 'OCR / Document AI',type:'Skill', href:'/about', tags:['ocr','document','extraction','scanning','text','recognition'],  desc:'75% — optical character recognition' },
  { title: 'Anthropic Claude', type:'Skill', href:'/about', tags:['anthropic','claude','ai','sdk','llm','api'],                   desc:'90% — Claude AI SDK integration' },
]

/* ══════════════════════════════════════
   SKILLS MASTER LIST — for Resume Analyzer
   sohaib:true  = Sohaib HAS this skill
   sohaib:false = Sohaib does NOT have it
   w = weight (how important is it in a JD)
══════════════════════════════════════ */
const ALL_SKILLS = [
  /* Languages */
  { key:'python',         label:'Python',          sohaib:true,  w:3 },
  { key:'javascript',     label:'JavaScript',      sohaib:true,  w:1 },
  { key:'typescript',     label:'TypeScript',      sohaib:true,  w:2 },
  { key:'java',           label:'Java',            sohaib:false, w:2 },
  { key:'c++',            label:'C++',             sohaib:false, w:2 },
  { key:'golang',         label:'Go/Golang',       sohaib:false, w:2 },
  { key:'rust',           label:'Rust',            sohaib:false, w:2 },
  { key:'dart',           label:'Dart',            sohaib:true,  w:2 },
  { key:'kotlin',         label:'Kotlin',          sohaib:false, w:2 },
  { key:'swift',          label:'Swift',           sohaib:false, w:2 },
  /* Frontend */
  { key:'react',          label:'React',           sohaib:true,  w:2 },
  { key:'next.js',        label:'Next.js',         sohaib:true,  w:2 },
  { key:'nextjs',         label:'Next.js',         sohaib:true,  w:2 },
  { key:'vue',            label:'Vue.js',          sohaib:false, w:2 },
  { key:'angular',        label:'Angular',         sohaib:false, w:2 },
  { key:'svelte',         label:'Svelte',          sohaib:false, w:2 },
  { key:'tailwind',       label:'Tailwind CSS',    sohaib:true,  w:1 },
  /* Backend */
  { key:'fastapi',        label:'FastAPI',         sohaib:true,  w:3 },
  { key:'node.js',        label:'Node.js',         sohaib:true,  w:2 },
  { key:'nodejs',         label:'Node.js',         sohaib:true,  w:2 },
  { key:'express',        label:'Express.js',      sohaib:true,  w:2 },
  { key:'django',         label:'Django',          sohaib:false, w:2 },
  { key:'flask',          label:'Flask',           sohaib:false, w:2 },
  { key:'spring',         label:'Spring Boot',     sohaib:false, w:2 },
  { key:'laravel',        label:'Laravel',         sohaib:false, w:2 },
  /* AI / ML */
  { key:'langchain',      label:'LangChain',       sohaib:true,  w:3 },
  { key:'langgraph',      label:'LangGraph',       sohaib:true,  w:3 },
  { key:'openai',         label:'OpenAI API',      sohaib:true,  w:3 },
  { key:'gpt',            label:'GPT',             sohaib:true,  w:3 },
  { key:'rag',            label:'RAG Pipelines',   sohaib:true,  w:3 },
  { key:'llm',            label:'LLM',             sohaib:true,  w:3 },
  { key:'machine learning',label:'Machine Learning',sohaib:true, w:2 },
  { key:'deep learning',  label:'Deep Learning',   sohaib:true,  w:2 },
  { key:'tensorflow',     label:'TensorFlow',      sohaib:true,  w:2 },
  { key:'pytorch',        label:'PyTorch',         sohaib:false, w:2 },
  { key:'scikit',         label:'scikit-learn',    sohaib:true,  w:2 },
  { key:'nlp',            label:'NLP',             sohaib:true,  w:2 },
  { key:'computer vision',label:'Computer Vision', sohaib:false, w:2 },
  { key:'embedding',      label:'Embeddings',      sohaib:true,  w:2 },
  { key:'vector',         label:'Vector DB',       sohaib:true,  w:2 },
  { key:'pinecone',       label:'Pinecone',        sohaib:true,  w:3 },
  { key:'faiss',          label:'FAISS',           sohaib:true,  w:3 },
  { key:'agent',          label:'AI Agents',       sohaib:true,  w:3 },
  { key:'multi-agent',    label:'Multi-Agent',     sohaib:true,  w:3 },
  /* Databases */
  { key:'postgresql',     label:'PostgreSQL',      sohaib:true,  w:2 },
  { key:'mongodb',        label:'MongoDB',         sohaib:true,  w:2 },
  { key:'mysql',          label:'MySQL',           sohaib:false, w:1 },
  { key:'redis',          label:'Redis',           sohaib:true,  w:1 },
  { key:'sqlite',         label:'SQLite',          sohaib:true,  w:1 },
  { key:'supabase',       label:'Supabase',        sohaib:true,  w:2 },
  { key:'elasticsearch',  label:'Elasticsearch',   sohaib:false, w:2 },
  { key:'sql',            label:'SQL',             sohaib:true,  w:1 },
  /* Cloud / DevOps */
  { key:'aws',            label:'AWS',             sohaib:true,  w:2 },
  { key:'azure',          label:'Azure',           sohaib:false, w:2 },
  { key:'gcp',            label:'Google Cloud',    sohaib:false, w:2 },
  { key:'docker',         label:'Docker',          sohaib:true,  w:2 },
  { key:'kubernetes',     label:'Kubernetes',      sohaib:false, w:2 },
  { key:'terraform',      label:'Terraform',       sohaib:false, w:2 },
  { key:'ci/cd',          label:'CI/CD',           sohaib:true,  w:1 },
  /* Mobile */
  { key:'flutter',        label:'Flutter',         sohaib:true,  w:2 },
  { key:'react native',   label:'React Native',    sohaib:true,  w:2 },
  { key:'firebase',       label:'Firebase',        sohaib:true,  w:2 },
  { key:'android',        label:'Android',         sohaib:true,  w:1 },
  { key:'ios',            label:'iOS',             sohaib:true,  w:1 },
  /* APIs */
  { key:'rest api',       label:'REST API',        sohaib:true,  w:1 },
  { key:'graphql',        label:'GraphQL',         sohaib:false, w:2 },
  { key:'microservices',  label:'Microservices',   sohaib:true,  w:2 },
  { key:'websocket',      label:'WebSockets',      sohaib:true,  w:1 },
  { key:'api',            label:'API Development', sohaib:true,  w:1 },
  /* Analytics */
  { key:'power bi',       label:'Power BI',        sohaib:true,  w:2 },
  { key:'tableau',        label:'Tableau',         sohaib:true,  w:1 },
  { key:'dax',            label:'DAX',             sohaib:true,  w:2 },
  /* Domain */
  { key:'full stack',     label:'Full-Stack Dev',  sohaib:true,  w:1 },
  { key:'full-stack',     label:'Full-Stack Dev',  sohaib:true,  w:1 },
  { key:'backend',        label:'Backend Dev',     sohaib:true,  w:1 },
  { key:'frontend',       label:'Frontend Dev',    sohaib:true,  w:1 },
  { key:'erp',            label:'ERP Systems',     sohaib:true,  w:2 },
  { key:'fintech',        label:'FinTech',         sohaib:true,  w:2 },
  { key:'healthcare',     label:'Healthcare Tech', sohaib:true,  w:2 },
  { key:'chatbot',        label:'Chatbots',        sohaib:true,  w:2 },
  { key:'blockchain',     label:'Blockchain',      sohaib:false, w:2 },
  { key:'devops',         label:'DevOps',          sohaib:true,  w:2 },
]

const LANGUAGES = [
  { code:'ur', name:'Urdu',    flag:'🇵🇰', dir:'rtl' },
  { code:'ar', name:'Arabic',  flag:'🇸🇦', dir:'rtl' },
  { code:'fr', name:'French',  flag:'🇫🇷', dir:'ltr' },
  { code:'de', name:'German',  flag:'🇩🇪', dir:'ltr' },
  { code:'es', name:'Spanish', flag:'🇪🇸', dir:'ltr' },
  { code:'tr', name:'Turkish', flag:'🇹🇷', dir:'ltr' },
  { code:'zh', name:'Chinese', flag:'🇨🇳', dir:'ltr' },
  { code:'hi', name:'Hindi',   flag:'🇮🇳', dir:'ltr' },
]

const TRANSLATE_TEXTS = [
  { id:'role',  en:'AI Engineer | FastAPI | Multi-Agent Systems | GPT Applications' },
  { id:'bio',   en:'I build production-ready AI systems and scalable backend architectures. Specializing in multi-agent orchestration, RAG pipelines, and enterprise software that transforms how businesses operate.' },
  { id:'avail', en:'Open to full-time remote roles, part-time contracts, and freelance projects. Response guaranteed within 24 hours.' },
  { id:'cta',   en:"Ready to build something extraordinary together? Let's talk." },
]

const VOICE_COMMANDS: Record<string, { msg:string; action:()=>void }> = {
  projects:   { msg:'🚀 Opening Projects...', action:()=>{ window.location.href='/projects' } },
  project:    { msg:'🚀 Opening Projects...', action:()=>{ window.location.href='/projects' } },
  about:      { msg:'👤 Opening About page...', action:()=>{ window.location.href='/about' } },
  contact:    { msg:'📬 Opening Contact page...', action:()=>{ window.location.href='/contact' } },
  hire:       { msg:'📬 Opening Contact page...', action:()=>{ window.location.href='/contact' } },
  skills:     { msg:'💡 Going to Skills...', action:()=>{ window.location.href='/#skills' } },
  home:       { msg:'🏠 Going Home...', action:()=>{ window.location.href='/' } },
  ameen:      { msg:'🕌 Opening AMEEN AI...', action:()=>{ window.location.href='/projects/ameen-ai' } },
  riskvision: { msg:'🔒 Opening RiskVision...', action:()=>{ window.location.href='/projects/riskvision' } },
  erp:        { msg:'📊 Opening ERP project...', action:()=>{ window.location.href='/projects/erp' } },
}

const TABS = [
  { id:'voice',    icon:Mic,      label:'Voice Assistant',  sub:'Speak to navigate'       },
  { id:'search',   icon:Search,   label:'Portfolio Search', sub:'Find anything instantly' },
  { id:'resume',   icon:FileText, label:'Resume Analyzer',  sub:'Match your job post'     },
  { id:'language', icon:Globe,    label:'AI Translator',    sub:'Translate to 8 languages'},
] as const
type TabId = typeof TABS[number]['id']

function fuzzySearch(q: string, data: typeof PORTFOLIO_DATA) {
  const words = q.toLowerCase().trim().split(/\s+/)
  if (!words[0]) return []
  return data
    .map(item => {
      const str = [item.title, item.desc, ...item.tags].join(' ').toLowerCase()
      const score = words.reduce((s, w) => s + (str.includes(w) ? 1 : 0), 0)
      return { item, score }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => r.item)
}

/* ══════════════════════════════════════ VOICE ══════════════════════════════════════ */
function VoiceAssistant() {
  const [listening,  setListening]  = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response,   setResponse]   = useState('')
  const [supported,  setSupported]  = useState(true)
  const [mode,       setMode]       = useState<'command'|'dictate'>('command')
  const recRef = useRef<any>(null)

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) setSupported(false)
  }, [])

  const start = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) return
    const rec = new SR()
    recRef.current = rec
    rec.lang = 'en-US'; rec.continuous = false; rec.interimResults = true
    rec.onstart  = () => setListening(true)
    rec.onresult = (e: any) => setTranscript(Array.from(e.results as any[]).map((r:any) => r[0].transcript).join(''))
    rec.onend    = () => { setListening(false); if (mode === 'command') processCommand(transcript) }
    rec.onerror  = () => setListening(false)
    rec.start()
  }
  const stop = () => { recRef.current?.stop(); setListening(false) }

  const processCommand = (text: string) => {
    const lower = text.toLowerCase()
    for (const [kw, { msg, action }] of Object.entries(VOICE_COMMANDS)) {
      if (lower.includes(kw)) { setResponse(msg); setTimeout(action, 1200); return }
    }
    setResponse(`🤔 Not recognized: "${text}". Try: "show projects", "open contact", "about Sohaib"`)
  }

  const CMDS = ['"show projects"','"open contact"','"about Sohaib"','"show skills"','"AMEEN AI"','"go home"']

  return (
    <div style={{ maxWidth:640, margin:'0 auto' }}>
      <div style={{ display:'flex', gap:10, marginBottom:32, background:'var(--surface)', padding:5, borderRadius:12, border:'1px solid var(--border)' }}>
        {(['command','dictate'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} style={{ flex:1, padding:'10px 20px', borderRadius:9, border:'none', cursor:'pointer', background:mode===m ? 'linear-gradient(135deg,#1B4FBD,#7C3AED)' : 'transparent', color:mode===m ? '#fff' : 'var(--muted)', fontFamily:'var(--font-display)', fontWeight:600, fontSize:14, transition:'all 0.2s' }}>
            {m === 'command' ? '🧭 Voice Commands' : '✍️ Dictate Text'}
          </button>
        ))}
      </div>
      {!supported ? (
        <div style={{ padding:32, background:'#FEF2F2', border:'1px solid #FCA5A5', borderRadius:16, textAlign:'center' }}>
          <AlertCircle size={32} style={{ color:'#DC2626', margin:'0 auto 12px', display:'block' }} />
          <p style={{ color:'#DC2626', fontWeight:600 }}>Speech Recognition not supported</p>
          <p style={{ color:'#991B1B', fontSize:14, marginTop:8 }}>Please use Chrome or Microsoft Edge for this feature.</p>
        </div>
      ) : (
        <>
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <div style={{ position:'relative', display:'inline-block' }}>
              {listening && (
                <>
                  <div style={{ position:'absolute', inset:-16, borderRadius:'50%', border:'2px solid rgba(27,79,189,0.3)', animation:'ripple 1.5s ease-out infinite' }} />
                  <div style={{ position:'absolute', inset:-32, borderRadius:'50%', border:'2px solid rgba(27,79,189,0.15)', animation:'ripple 1.5s 0.5s ease-out infinite' }} />
                </>
              )}
              <button onClick={listening ? stop : start} style={{ width:100, height:100, borderRadius:'50%', background:listening ? 'linear-gradient(135deg,#DC2626,#9B1C1C)' : 'linear-gradient(135deg,#1B4FBD,#7C3AED)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:listening ? '0 0 40px rgba(220,38,38,0.4)' : '0 8px 32px rgba(27,79,189,0.35)', transition:'all 0.3s ease', position:'relative' }}>
                {listening ? <MicOff size={36} style={{ color:'#fff' }} /> : <Mic size={36} style={{ color:'#fff' }} />}
              </button>
            </div>
            <p style={{ marginTop:20, fontFamily:'var(--font-mono)', fontSize:13, color:listening ? '#DC2626' : 'var(--muted)', letterSpacing:'0.1em' }}>
              {listening ? '● LISTENING...' : 'CLICK TO SPEAK'}
            </p>
          </div>
          {transcript && (
            <div style={{ padding:'16px 20px', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, marginBottom:16 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.08em' }}>You said</div>
              <p style={{ fontSize:16, color:'var(--text)', fontStyle:'italic' }}>"{transcript}"</p>
            </div>
          )}
          {response && (
            <div style={{ padding:'16px 20px', background:'var(--accent-light)', border:'1px solid rgba(27,79,189,0.2)', borderRadius:14, marginBottom:24, display:'flex', alignItems:'center', gap:12 }}>
              <Brain size={20} style={{ color:'var(--accent)', flexShrink:0 }} />
              <p style={{ fontSize:15, color:'var(--accent)', fontWeight:600 }}>{response}</p>
            </div>
          )}
          {mode === 'command' && (
            <div style={{ padding:'20px 24px', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16 }}>
              <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', marginBottom:14, textTransform:'uppercase', letterSpacing:'0.08em' }}>Available voice commands</p>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {CMDS.map(c => <span key={c} style={{ padding:'5px 12px', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:8, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--accent)' }}>{c}</span>)}
              </div>
            </div>
          )}
          {mode === 'dictate' && transcript && (
            <div style={{ padding:'16px 20px', background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:10 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>Dictated text</span>
                <button onClick={() => navigator.clipboard.writeText(transcript)} style={{ display:'flex', alignItems:'center', gap:5, background:'none', border:'none', color:'var(--accent)', cursor:'pointer', fontSize:12 }}><Copy size={13} /> Copy</button>
              </div>
              <p style={{ fontSize:15, color:'var(--text)', lineHeight:1.8 }}>{transcript}</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

/* ══════════════════════════════════════ SEARCH ══════════════════════════════════════ */
function SmartSearch() {
  const [query,  setQuery]  = useState('')
  const [filter, setFilter] = useState<'All'|'Project'|'Skill'>('All')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => { inputRef.current?.focus() }, [])

  const data    = filter === 'All' ? PORTFOLIO_DATA : PORTFOLIO_DATA.filter(d => d.type === filter)
  const results = useMemo(() => fuzzySearch(query, data), [query, data])

  const typeColor = (t: string) => t === 'Project' ? '#1B4FBD' : '#059669'
  const typeBg    = (t: string) => t === 'Project' ? 'rgba(27,79,189,0.08)' : 'rgba(5,150,105,0.08)'

  return (
    <div style={{ maxWidth:680, margin:'0 auto' }}>
      <div style={{ position:'relative', marginBottom:20 }}>
        <Search size={18} style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', color:'var(--muted)' }} />
        <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)}
          placeholder='Try: "AI banking", "FastAPI", "mobile", "PostgreSQL"...'
          style={{ width:'100%', padding:'15px 16px 15px 48px', borderRadius:14, border:'2px solid var(--border)', background:'var(--bg)', color:'var(--text)', fontFamily:'var(--font-body)', fontSize:15, outline:'none', transition:'border-color 0.2s', boxSizing:'border-box', boxShadow:'0 2px 12px rgba(0,0,0,0.06)' }}
          onFocus={e => e.target.style.borderColor='var(--accent)'}
          onBlur={e => e.target.style.borderColor='var(--border)'}
        />
        {query && <button onClick={() => setQuery('')} style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'var(--muted)' }}><X size={16} /></button>}
      </div>
      <div style={{ display:'flex', gap:8, marginBottom:24 }}>
        {(['All','Project','Skill'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding:'6px 16px', borderRadius:100, border:`1.5px solid ${filter===f ? 'var(--accent)' : 'var(--border)'}`, background:filter===f ? 'var(--accent)' : 'var(--bg)', color:filter===f ? '#fff' : 'var(--muted)', fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, cursor:'pointer', transition:'all 0.2s' }}>
            {f === 'All' ? `All (${PORTFOLIO_DATA.length})` : `${f}s`}
          </button>
        ))}
        {query && <span style={{ marginLeft:'auto', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--muted)', alignSelf:'center' }}>{results.length} result{results.length !== 1 ? 's' : ''}</span>}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {query ? (
          results.length > 0 ? results.map((r, i) => (
            <Link key={i} href={r.href} style={{ textDecoration:'none' }}>
              <div className="card" style={{ padding:'16px 20px', display:'flex', alignItems:'center', gap:14 }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                    <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:15, color:'var(--text)' }}>{r.title}</span>
                    <span style={{ padding:'2px 8px', borderRadius:100, fontSize:10, fontFamily:'var(--font-mono)', background:typeBg(r.type), color:typeColor(r.type), border:`1px solid ${typeColor(r.type)}25` }}>{r.type}</span>
                  </div>
                  <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.5 }}>{r.desc}</p>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginTop:8 }}>
                    {r.tags.slice(0,5).map(t => <span key={t} className="tag" style={{ fontSize:10 }}>{t}</span>)}
                  </div>
                </div>
                <ExternalLink size={16} style={{ color:'var(--muted)', flexShrink:0 }} />
              </div>
            </Link>
          )) : (
            <div style={{ padding:40, textAlign:'center', color:'var(--muted)' }}>
              <Search size={32} style={{ margin:'0 auto 12px', display:'block', opacity:0.3 }} />
              <p>No results for "<strong>{query}</strong>"</p>
              <p style={{ fontSize:13, marginTop:8 }}>Try: python, AI, banking, mobile, analytics...</p>
            </div>
          )
        ) : (
          data.slice(0,8).map((r, i) => (
            <Link key={i} href={r.href} style={{ textDecoration:'none' }}>
              <div className="card" style={{ padding:'14px 18px', display:'flex', alignItems:'center', gap:12 }}>
                <span style={{ padding:'2px 8px', borderRadius:100, fontSize:10, fontFamily:'var(--font-mono)', background:typeBg(r.type), color:typeColor(r.type), border:`1px solid ${typeColor(r.type)}25`, flexShrink:0 }}>{r.type}</span>
                <span style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:14, color:'var(--text)', flex:1 }}>{r.title}</span>
                <ExternalLink size={14} style={{ color:'var(--muted)', flexShrink:0 }} />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════ RESUME ANALYZER ══════════════════════════════════════ */
type AnalysisResult = { score:number; matched:string[]; missing:string[]; extras:string[]; msg:string }

function ResumeAnalyzer() {
  const [jd,      setJd]      = useState('')
  const [result,  setResult]  = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = () => {
    if (!jd.trim()) return
    setLoading(true)

    setTimeout(() => {
      const lower = jd.toLowerCase()

      /* Step 1 — find every skill the JD requires (deduplicated by label) */
      const seenLabels = new Set<string>()
      const jdReqs = ALL_SKILLS.filter(s => {
        if (!lower.includes(s.key)) return false
        if (seenLabels.has(s.label)) return false
        seenLabels.add(s.label)
        return true
      })

      if (jdReqs.length === 0) {
        setResult({ score:65, matched:['General Engineering','Problem Solving'], missing:[], extras:[], msg:"💡 Couldn't detect specific tech requirements. Sohaib brings strong full-stack engineering skills." })
        setLoading(false); return
      }

      /* Step 2 — which does Sohaib have? */
      const matched = jdReqs.filter(s => s.sohaib)
      const missing = jdReqs.filter(s => !s.sohaib)

      /* Step 3 — weighted score = matched weight / total JD weight */
      const totalW   = jdReqs.reduce((s, r) => s + r.w, 0)
      const matchedW = matched.reduce((s, r) => s + r.w, 0)
      const score    = Math.min(98, Math.max(Math.round((matchedW / Math.max(totalW, 1)) * 100), 20))

      /* Step 4 — Sohaib's bonus skills beyond the JD */
      const jdLabels = new Set(jdReqs.map(r => r.label))
      const extras   = ALL_SKILLS
        .filter(s => s.sohaib && !jdLabels.has(s.label))
        .slice(0, 10).map(s => s.label)

      const msg =
        score >= 90 ? '🔥 Perfect match! Sohaib is exceptionally qualified for this role.' :
        score >= 80 ? '✅ Excellent match! Sohaib covers nearly all requirements.' :
        score >= 70 ? '👍 Strong match! Sohaib has solid relevant experience.' :
        score >= 55 ? '🤝 Good match! Sohaib meets the core technical requirements.' :
        score >= 40 ? '💡 Partial match. Sohaib brings complementary and transferable skills.' :
                      '🌱 Some overlap found. Sohaib may bring unique value to this role.'

      setResult({ score, matched: matched.map(s => s.label), missing: missing.map(s => s.label), extras, msg })
      setLoading(false)
    }, 800)
  }

  const C = 2 * Math.PI * 52

  return (
    <div style={{ maxWidth:740, margin:'0 auto' }}>
      {!result ? (
        <>
          <p style={{ color:'var(--muted)', fontSize:15, marginBottom:16, lineHeight:1.7 }}>
            Paste a job description below — the analyzer checks each required skill against Sohaib's stack and gives you an <strong style={{ color:'var(--text)' }}>accurate weighted match score</strong>.
          </p>
          <textarea value={jd} onChange={e => setJd(e.target.value)} rows={10}
            placeholder={"Paste the job description here...\n\nExample: We are looking for a Senior AI Engineer with experience in Python, FastAPI, LangChain, RAG pipelines, multi-agent systems, PostgreSQL, and Docker. Experience with OpenAI API and building production LLM applications is required..."}
            style={{ width:'100%', padding:'16px', borderRadius:14, border:'2px solid var(--border)', background:'var(--bg)', color:'var(--text)', fontFamily:'var(--font-body)', fontSize:14, outline:'none', resize:'vertical', lineHeight:1.8, transition:'border-color 0.2s', boxSizing:'border-box', boxShadow:'0 2px 12px rgba(0,0,0,0.06)' }}
            onFocus={e => e.target.style.borderColor='var(--accent)'}
            onBlur={e => e.target.style.borderColor='var(--border)'}
          />
          <div style={{ display:'flex', gap:12, marginTop:16, alignItems:'center' }}>
            <button onClick={analyze} disabled={!jd.trim() || loading} className="btn-primary"
              style={{ fontSize:15, padding:'13px 28px', cursor:jd.trim() ? 'pointer' : 'not-allowed', opacity:jd.trim() ? 1 : 0.5 }}>
              {loading
                ? <><Loader size={16} style={{ animation:'spin 1s linear infinite' }} /> Analyzing...</>
                : <><Brain size={16} /> Analyze Match</>}
            </button>
            <span style={{ fontSize:13, color:'var(--muted)' }}>{jd.trim() ? `${jd.trim().split(/\s+/).length} words` : 'Paste job description above'}</span>
          </div>
        </>
      ) : (
        <div>
          {/* Score ring */}
          <div style={{ display:'flex', gap:32, marginBottom:28, flexWrap:'wrap', alignItems:'center' }}>
            <div style={{ textAlign:'center', flexShrink:0 }}>
              <svg width={130} height={130} style={{ transform:'rotate(-90deg)' }}>
                <circle cx={65} cy={65} r={52} fill="none" stroke="var(--border)" strokeWidth={10} />
                <circle cx={65} cy={65} r={52} fill="none"
                  stroke={result.score >= 80 ? '#059669' : result.score >= 60 ? '#1B4FBD' : '#D97706'}
                  strokeWidth={10} strokeLinecap="round"
                  strokeDasharray={C} strokeDashoffset={C * (1 - result.score / 100)}
                  style={{ transition:'stroke-dashoffset 1.5s ease' }}
                />
              </svg>
              <div style={{ marginTop:-85, fontFamily:'var(--font-display)', fontWeight:800, fontSize:36, color: result.score >= 80 ? '#059669' : result.score >= 60 ? '#1B4FBD' : '#D97706' }}>
                {result.score}%
              </div>
              <div style={{ marginTop:42, fontFamily:'var(--font-mono)', fontSize:11, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase' }}>Match Score</div>
            </div>
            <div style={{ flex:1, minWidth:200 }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, marginBottom:10 }}>Analysis Complete</h3>
              <p style={{ fontSize:15, color:'var(--text-2)', lineHeight:1.8, marginBottom:8 }}>{result.msg}</p>
              <p style={{ fontSize:13, color:'var(--muted)', marginBottom:18 }}>
                <strong style={{ color:'var(--text)' }}>{result.matched.length}</strong> of <strong style={{ color:'var(--text)' }}>{result.matched.length + result.missing.length}</strong> JD requirements matched
              </p>
              <div style={{ display:'flex', gap:10 }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize:14, padding:'10px 20px' }}>Contact Sohaib <ArrowRight size={14} /></Link>
                <button onClick={() => setResult(null)} className="btn-secondary" style={{ fontSize:14, padding:'10px 16px', cursor:'pointer' }}>Analyze Again</button>
              </div>
            </div>
          </div>

          {/* Matched */}
          {result.matched.length > 0 && (
            <div style={{ marginBottom:16, padding:'20px 24px', background:'rgba(5,150,105,0.06)', border:'1px solid rgba(5,150,105,0.2)', borderRadius:16 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'#059669', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>
                ✅ {result.matched.length} Requirement{result.matched.length !== 1 ? 's' : ''} Matched
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {result.matched.map(s => (
                  <span key={s} style={{ display:'flex', alignItems:'center', gap:5, padding:'4px 12px', borderRadius:100, background:'rgba(5,150,105,0.1)', border:'1px solid rgba(5,150,105,0.25)', fontSize:13, color:'#059669' }}>
                    <CheckCircle size={12} /> {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Missing */}
          {result.missing.length > 0 && (
            <div style={{ marginBottom:16, padding:'20px 24px', background:'rgba(220,38,38,0.04)', border:'1px solid rgba(220,38,38,0.15)', borderRadius:16 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'#DC2626', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>
                ⚠️ {result.missing.length} Requirement{result.missing.length !== 1 ? 's' : ''} Not in Sohaib's Stack
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {result.missing.map(s => (
                  <span key={s} style={{ padding:'4px 12px', borderRadius:100, background:'rgba(220,38,38,0.08)', border:'1px solid rgba(220,38,38,0.2)', fontSize:13, color:'#DC2626' }}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Extras */}
          {result.extras.length > 0 && (
            <div style={{ padding:'20px 24px', background:'rgba(27,79,189,0.04)', border:'1px solid rgba(27,79,189,0.15)', borderRadius:16 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--accent)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:12 }}>
                💡 Additional Skills Sohaib Brings (beyond JD requirements)
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {result.extras.map(s => <span key={s} className="tag" style={{ fontSize:12 }}>{s}</span>)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════ TRANSLATOR ══════════════════════════════════════ */
function LanguageTranslator() {
  const [selected,     setSelected]     = useState<typeof LANGUAGES[number] | null>(null)
  const [translations, setTranslations] = useState<Record<string,string>>({})
  const [loading,      setLoading]      = useState(false)
  const [error,        setError]        = useState('')
  const [copied,       setCopied]       = useState(false)

  const translate = async (lang: typeof LANGUAGES[number]) => {
    setSelected(lang); setLoading(true); setError(''); setTranslations({})
    try {
      const results: Record<string,string> = {}
      for (const item of TRANSLATE_TEXTS) {
        const res  = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(item.en)}&langpair=en|${lang.code}`)
        const data = await res.json()
        results[item.id] = data.responseData?.translatedText || item.en
        await new Promise(r => setTimeout(r, 150))
      }
      setTranslations(results)
    } catch { setError('Translation service unavailable. Please try again.') }
    setLoading(false)
  }

  const allDone     = Object.keys(translations).length === TRANSLATE_TEXTS.length
  const combinedTxt = Object.values(translations).join('\n\n')

  return (
    <div style={{ maxWidth:720, margin:'0 auto' }}>
      <p style={{ color:'var(--muted)', fontSize:14, marginBottom:24, lineHeight:1.7 }}>
        Translate Sohaib's portfolio content into your language. Free — powered by MyMemory API, no API key needed.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:28 }}>
        {LANGUAGES.map(lang => (
          <button key={lang.code} onClick={() => translate(lang)} disabled={loading} style={{ padding:'16px 12px', borderRadius:14, cursor:loading ? 'wait' : 'pointer', border:`2px solid ${selected?.code === lang.code ? 'var(--accent)' : 'var(--border)'}`, background:selected?.code === lang.code ? 'var(--accent-light)' : 'var(--bg)', transition:'all 0.2s', textAlign:'center', boxShadow:selected?.code === lang.code ? '0 2px 12px rgba(27,79,189,0.15)' : 'none' }}>
            <div style={{ fontSize:28, marginBottom:6 }}>{lang.flag}</div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, color:selected?.code === lang.code ? 'var(--accent)' : 'var(--text)' }}>{lang.name}</div>
          </button>
        ))}
      </div>
      {loading && (
        <div style={{ padding:32, textAlign:'center' }}>
          <Loader size={32} style={{ color:'var(--accent)', margin:'0 auto 12px', display:'block', animation:'spin 1s linear infinite' }} />
          <p style={{ color:'var(--muted)', fontFamily:'var(--font-mono)', fontSize:13 }}>Translating to {selected?.name}...</p>
        </div>
      )}
      {error && <div style={{ padding:'16px 20px', background:'#FEF2F2', border:'1px solid #FCA5A5', borderRadius:12 }}><p style={{ color:'#DC2626', fontSize:14 }}>{error}</p></div>}
      {allDone && selected && !loading && (
        <div style={{ border:'1px solid var(--border)', borderRadius:16, overflow:'hidden' }}>
          <div style={{ padding:'14px 20px', background:'linear-gradient(135deg,#1B4FBD,#7C3AED)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <span style={{ color:'#fff', fontFamily:'var(--font-display)', fontWeight:700 }}>{selected.flag} Portfolio in {selected.name}</span>
            <button onClick={() => { navigator.clipboard.writeText(combinedTxt); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
              style={{ background:'rgba(255,255,255,0.15)', border:'none', borderRadius:8, color:'#fff', cursor:'pointer', padding:'6px 12px', fontSize:12, display:'flex', alignItems:'center', gap:6 }}>
              <Copy size={13} /> {copied ? 'Copied!' : 'Copy All'}
            </button>
          </div>
          <div style={{ padding:24, display:'flex', flexDirection:'column', gap:16, direction:(selected.dir as any) }}>
            {TRANSLATE_TEXTS.map(item => (
              <div key={item.id} style={{ padding:'16px 20px', background:'var(--surface)', borderRadius:12, border:'1px solid var(--border)' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--accent)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:8, direction:'ltr' }}>{item.id}</div>
                <p style={{ fontSize:15, color:'var(--text)', lineHeight:1.9, fontWeight:item.id === 'role' ? 600 : 400 }}>{translations[item.id]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════ MAIN PAGE ══════════════════════════════════════ */
export default function AILabPage() {
  const [tab, setTab] = useState<TabId>('voice')

  return (
    <div style={{ paddingTop:66 }}>
      <section style={{ padding:'72px 24px 48px', background:'linear-gradient(180deg,var(--bg-2) 0%,var(--bg) 100%)', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:500, height:300, background:'radial-gradient(ellipse, rgba(27,79,189,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 16px', borderRadius:100, background:'var(--accent-light)', border:'1px solid rgba(27,79,189,0.25)', marginBottom:20 }}>
            <Brain size={14} style={{ color:'var(--accent)' }} />
            <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--accent)', letterSpacing:'0.1em' }}>FREE · NO API KEY · RUNS IN BROWSER</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'clamp(32px,5vw,52px)', letterSpacing:'-0.02em', marginBottom:16, lineHeight:1.1 }}>
            AI <span style={{ color:'var(--accent)' }}>Lab</span>
          </h1>
          <p style={{ color:'var(--muted)', fontSize:17, maxWidth:560, margin:'0 auto', lineHeight:1.8 }}>
            4 interactive AI-powered tools built with zero cost. Voice, search, analysis and translation — all running in your browser.
          </p>
        </div>
      </section>

      <div style={{ borderBottom:'1px solid var(--border)', background:'var(--bg)', position:'sticky', top:66, zIndex:100 }}>
        <div style={{ maxWidth:1060, margin:'0 auto', padding:'0 24px', display:'flex', gap:0 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ flex:1, padding:'18px 12px', border:'none', borderBottom:`3px solid ${tab===t.id ? 'var(--accent)' : 'transparent'}`, background:'transparent', cursor:'pointer', transition:'all 0.2s', textAlign:'center' }}>
              <t.icon size={20} style={{ color:tab===t.id ? 'var(--accent)' : 'var(--muted)', display:'block', margin:'0 auto 6px' }} />
              <div style={{ fontFamily:'var(--font-display)', fontWeight:600, fontSize:13, color:tab===t.id ? 'var(--accent)' : 'var(--text)' }}>{t.label}</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--muted)', letterSpacing:'0.05em', marginTop:2 }} className="hide-mobile">{t.sub}</div>
            </button>
          ))}
        </div>
      </div>

      <section style={{ padding:'52px 24px 100px', minHeight:'60vh' }}>
        <div style={{ maxWidth:1060, margin:'0 auto' }}>
          {tab === 'voice'    && <VoiceAssistant />}
          {tab === 'search'   && <SmartSearch />}
          {tab === 'resume'   && <ResumeAnalyzer />}
          {tab === 'language' && <LanguageTranslator />}
        </div>
      </section>

      <style>{`
        @keyframes ripple { 0%{transform:scale(0.9);opacity:0.7;} 100%{transform:scale(1.8);opacity:0;} }
        @keyframes spin   { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
