'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

type FD = { name: string; email: string; subject: string; message: string }
type ST = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm]       = useState<FD>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState<ST>('idle')
  const [errMsg, setErrMsg]   = useState('')
  const [touched, setTouched] = useState<Partial<Record<keyof FD, boolean>>>({})

  const upd   = (f: keyof FD, v: string) => setForm(p => ({ ...p, [f]: v }))
  const touch = (f: keyof FD) => setTouched(p => ({ ...p, [f]: true }))

  const errs: Partial<Record<keyof FD, string>> = {}
  if (touched.name    && !form.name.trim())    errs.name    = 'Name is required'
  if (touched.email   && !form.email.trim())   errs.email   = 'Email is required'
  else if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
  if (touched.subject && !form.subject.trim()) errs.subject = 'Subject is required'
  if (touched.message && !form.message.trim()) errs.message = 'Message is required'

  const isValid = !!(form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.subject.trim() && form.message.trim())

  const handleSend = async () => {
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!isValid) return
    setStatus('loading'); setErrMsg('')
    try {
      const ejs = await import('@emailjs/browser')
      await ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, reply_to: form.email }, EMAILJS_PUBLIC_KEY)
      setStatus('success')
    } catch (e) {
      setStatus('error'); setErrMsg('Could not send. Please email me directly: sohaibahmedmsa@gmail.com')
    }
  }

  const CONTACT_INFO = [
    { icon: Mail,  label: 'Email',         value: 'sohaibahmedmsa@gmail.com', href: 'mailto:sohaibahmedmsa@gmail.com', color: '#2563EB' },
    { icon: Phone, label: 'Phone',         value: '+92 331 4827670',          href: 'tel:+923314827670',              color: '#059669' },
    { icon: MapPin,label: 'Location',      value: 'Karachi, Pakistan',        href: '#',                              color: '#7C3AED' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 Hours',          href: '#',                              color: '#D97706' },
  ]
  const SOCIALS = [
    { icon: Linkedin, label: 'LinkedIn', handle: '/in/sohaib-ahmed-msa', href: 'https://www.linkedin.com/in/sohaib-ahmed-msa', color: '#2563EB' },
    { icon: Github,   label: 'GitHub',   handle: '/msa1979msa',          href: 'https://github.com/msa1979msa',                color: '#333' },
    { icon: Twitter,  label: 'Twitter',  handle: '@sohaib79msa',         href: 'https://twitter.com/sohaib79msa',              color: '#0EA5E9' },
  ]

  const INPUT = (field: keyof FD, label: string, ph: string, type = 'text') => {
    const [foc, setFoc] = useState(false)
    return (
      <div>
        <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 500 }}>{label}</label>
        <input type={type} placeholder={ph} value={form[field]} autoComplete={type === 'email' ? 'email' : 'off'}
          onChange={e => upd(field, e.target.value)}
          onFocus={() => setFoc(true)}
          onBlur={() => { setFoc(false); touch(field) }}
          style={{ width: '100%', padding: '12px 15px', borderRadius: 10, border: `1.5px solid ${errs[field] ? '#DC2626' : foc ? 'var(--accent)' : 'var(--border)'}`, background: foc ? 'var(--accent-light)' : 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box', display: 'block' }}
        />
        {errs[field] && <p style={{ color: '#DC2626', fontSize: 12, marginTop: 5, fontFamily: 'var(--font-mono)' }}>{errs[field]}</p>}
      </div>
    )
  }

  return (
    <div style={{ paddingTop: 66 }}>
      <section style={{ padding: '80px 24px 60px', background: 'linear-gradient(180deg,#F8FAFC 0%,#fff 100%)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: 16 }}>Get In Touch</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,5vw,52px)', letterSpacing: '-0.02em', marginBottom: 18 }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, lineHeight: 1.8 }}>Have an AI project, backend system, or enterprise app in mind? Let's talk.</p>
        </div>
      </section>

      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 36, alignItems: 'start' }} className="two-col">

          {/* Form */}
          <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, padding: 40, boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, marginBottom: 6 }}>Send a Message</h2>
            <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 32 }}>Sent directly to <a href="mailto:sohaibahmedmsa@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>sohaibahmedmsa@gmail.com</a></p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                <CheckCircle size={60} style={{ color: '#059669', margin: '0 auto 18px', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#059669', marginBottom: 12 }}>Message Sent! 🎉</h3>
                <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>Thanks! I'll get back to you within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name:'',email:'',subject:'',message:'' }); setTouched({}) }} className="btn-secondary" style={{ cursor: 'pointer' }}>Send Another</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {INPUT('name',    'Your Name *',     'Muhammad Ali')}
                  {INPUT('email',   'Email Address *', 'you@company.com', 'email')}
                </div>
                {INPUT('subject', 'Subject *', 'AI Project · Backend System · Inquiry')}
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 500 }}>Message *</label>
                  <textarea placeholder="Describe your project, goals, timeline..." value={form.message} rows={6}
                    onChange={e => upd('message', e.target.value)}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-light)' }}
                    onBlur={e => { touch('message'); e.currentTarget.style.borderColor = errs.message ? '#DC2626' : 'var(--border)'; e.currentTarget.style.background = 'var(--bg)' }}
                    style={{ width: '100%', padding: '12px 15px', borderRadius: 10, border: `1.5px solid ${errs.message ? '#DC2626' : 'var(--border)'}`, background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none', resize: 'vertical', minHeight: 130, transition: 'all 0.2s', boxSizing: 'border-box', display: 'block' }}
                  />
                  {errs.message && <p style={{ color: '#DC2626', fontSize: 12, marginTop: 5, fontFamily: 'var(--font-mono)' }}>{errs.message}</p>}
                </div>
                {status === 'error' && (
                  <div style={{ display: 'flex', gap: 10, padding: '12px 16px', borderRadius: 10, background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
                    <AlertCircle size={16} style={{ color: '#DC2626', flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 13, color: '#DC2626', lineHeight: 1.6 }}>{errMsg}</p>
                  </div>
                )}
                <button onClick={handleSend} disabled={status === 'loading'}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px', borderRadius: 100, width: '100%', background: status === 'loading' ? '#93C5FD' : 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, cursor: status === 'loading' ? 'not-allowed' : 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 12px rgba(37,99,235,0.25)' }}
                  onMouseOver={e => { if (status !== 'loading') (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)' }}
                  onMouseOut={e => { if (status !== 'loading') (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
                >
                  {status === 'loading'
                    ? <><span style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} /> Sending...</>
                    : <><Send size={16} /> Send Message</>}
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted-light)', fontFamily: 'var(--font-mono)' }}>🔒 Delivered to sohaibahmedmsa@gmail.com</p>
              </div>
            )}
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 18, padding: 24, boxShadow: 'var(--shadow-sm)' }}>
              <div className="section-label" style={{ marginBottom: 18 }}>Direct Contact</div>
              {CONTACT_INFO.map((c, i) => (
                <a key={i} href={c.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 13, padding: '11px 12px', borderRadius: 10, marginBottom: 8, border: '1px solid var(--border)', transition: 'all 0.2s' }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = c.color; (e.currentTarget as HTMLElement).style.background = c.color + '08' }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: c.color + '12', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.icon size={15} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{c.label}</div>
                    <div style={{ fontSize: 13, color: 'var(--text)', marginTop: 2, fontWeight: 500 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 18, padding: 24, boxShadow: 'var(--shadow-sm)' }}>
              <div className="section-label" style={{ marginBottom: 18 }}>Social Profiles</div>
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 10, marginBottom: 8, border: `1px solid ${s.color}25`, background: s.color + '05', transition: 'background 0.2s' }}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.background = s.color + '10'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.background = s.color + '05'}
                >
                  <s.icon size={17} style={{ color: s.color }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{s.handle}</div>
                  </div>
                  <ArrowRight size={13} style={{ color: s.color }} />
                </a>
              ))}
            </div>

            <div style={{ padding: 22, borderRadius: 18, background: '#ECFDF5', border: '1px solid rgba(5,150,105,0.2)', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 100, background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.3)', marginBottom: 12 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#059669', animation: 'pulse-dot 2s infinite', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#059669', letterSpacing: '0.07em' }}>AVAILABLE FOR HIRE</span>
              </div>
              <p style={{ fontSize: 13, color: '#065F46', lineHeight: 1.7 }}>
                Open to full-time, part-time remote & freelance.<br />
                <strong>Mon–Fri · 9AM–6PM PKT</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(5,150,105,0.4);}50%{box-shadow:0 0 0 5px rgba(5,150,105,0);}}`}</style>
    </div>
  )
}
