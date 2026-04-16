'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// EMAILJS CONFIGURATION
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_c9aa395'
const EMAILJS_TEMPLATE_ID = 'template_af7fajf'
const EMAILJS_PUBLIC_KEY  = 'uK4CfLQ1XLtEo_SsC'

type FormData = { name: string; email: string; subject: string; message: string }
type Status   = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})

  const update = (f: keyof FormData, v: string) => setForm(p => ({ ...p, [f]: v }))
  const touch = (f: keyof FormData) => setTouched(p => ({ ...p, [f]: true }))

  const errs: Partial<Record<keyof FormData, string>> = {}
  if (touched.name && !form.name.trim()) errs.name = 'Name is required'
  if (touched.email && !form.email.trim()) errs.email = 'Email is required'
  else if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
  if (touched.subject && !form.subject.trim()) errs.subject = 'Subject is required'
  if (touched.message && !form.message.trim()) errs.message = 'Message is required'

  const isValid = !!(
    form.name.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.subject.trim() &&
    form.message.trim()
  )

  const handleSend = async () => {
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!isValid) return

    setStatus('loading')
    setErrMsg('')

    try {
      const emailjs = await import('@emailjs/browser')
      const now = new Date()
      const formattedTime = now.toLocaleString('en-PK', {
        timeZone: 'Asia/Karachi',
        dateStyle: 'full',
        timeStyle: 'long'
      })

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          time: formattedTime
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTouched({})
    } catch (e: any) {
      console.error('EmailJS Error:', e)
      setStatus('error')
      setErrMsg('Could not send. Please email me directly: sohaibahmedmsa@gmail.com')
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sohaibahmedmsa@gmail.com', href: 'mailto:sohaibahmedmsa@gmail.com', color: '#38bdf8' },
    { icon: Phone, label: 'Phone', value: '+92 331 4827670', href: 'tel:+923314827670', color: '#34d399' },
    { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan', href: '#', color: '#818cf8' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 Hours', href: '#', color: '#f59e0b' },
  ]

  const socials = [
    { icon: Linkedin, label: 'LinkedIn', handle: 'sohaib-ahmed-msa', href: 'https://www.linkedin.com/in/sohaib-ahmed-msa', color: '#38bdf8' },
    { icon: Github, label: 'GitHub', handle: 'msa1979msa', href: 'https://github.com/msa1979msa', color: '#818cf8' },
    { icon: Twitter, label: 'Twitter', handle: '@sohaib79msa', href: 'https://twitter.com/sohaib79msa', color: '#34d399' },
  ]

  // Styles with actual colors instead of CSS variables
  const styles = {
    accent: '#38bdf8',
    border: 'rgba(255,255,255,0.1)',
    text: '#ffffff',
    muted: '#a0aec0',
    background: '#0f172a'
  }

  return (
    <div style={{ paddingTop: 70, background: styles.background, minHeight: '100vh' }}>
      {/* Header */}
      <section style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(56,189,248,0.06), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(56,189,248,0.1)', padding: '6px 14px', borderRadius: 100, marginBottom: 20, color: styles.accent, fontSize: 12, fontWeight: 600 }}>
            Get In Touch
          </div>
          <h1 style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 20, color: styles.text }}>
            Let's Build Something <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Together</span>
          </h1>
          <p style={{ color: styles.muted, fontSize: 18, lineHeight: 1.8 }}>
            Have an AI project, backend system, or enterprise app in mind? Let's talk.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section style={{ padding: '0 24px 100px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, alignItems: 'start' }}>

          {/* FORM CARD */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${styles.border}`, borderRadius: 20, padding: 40 }}>
            <h2 style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: 24, marginBottom: 6, color: styles.text }}>
              Send a Message
            </h2>
            <p style={{ color: styles.muted, fontSize: 14, marginBottom: 32 }}>
              Sent directly to{' '}
              <a href="mailto:sohaibahmedmsa@gmail.com" style={{ color: styles.accent, textDecoration: 'none' }}>
                sohaibahmedmsa@gmail.com
              </a>
            </p>

            {/* SUCCESS */}
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <CheckCircle size={64} style={{ color: '#34d399', margin: '0 auto 20px', display: 'block' }} />
                <h3 style={{ fontFamily: 'system-ui', fontWeight: 800, fontSize: 24, color: '#34d399', marginBottom: 12 }}>
                  Message Sent! 🎉
                </h3>
                <p style={{ color: styles.muted, fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                  Thanks for reaching out! I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); setTouched({}) }}
                  style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 100, color: styles.text, cursor: 'pointer' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <InputField
                    label="Your Name *"
                    placeholder="Muhammad Ali"
                    value={form.name}
                    error={errs.name}
                    onChange={v => update('name', v)}
                    onBlur={() => touch('name')}
                    accent={styles.accent}
                  />
                  <InputField
                    label="Email Address *"
                    placeholder="you@company.com"
                    type="email"
                    value={form.email}
                    error={errs.email}
                    onChange={v => update('email', v)}
                    onBlur={() => touch('email')}
                    accent={styles.accent}
                  />
                </div>

                {/* Subject */}
                <InputField
                  label="Subject *"
                  placeholder="AI Project · Backend System · General Inquiry"
                  value={form.subject}
                  error={errs.subject}
                  onChange={v => update('subject', v)}
                  onBlur={() => touch('subject')}
                  accent={styles.accent}
                />

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: 11, color: styles.accent, marginBottom: 8 }}>Message *</label>
                  <textarea
                    placeholder="Describe your project, goals, timeline, and any details..."
                    value={form.message}
                    rows={6}
                    onChange={e => update('message', e.target.value)}
                    onBlur={() => touch('message')}
                    style={{
                      width: '100%', padding: '13px 16px', borderRadius: 12,
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${errs.message ? '#f87171' : styles.border}`,
                      color: styles.text, fontSize: 15,
                      outline: 'none', resize: 'vertical', minHeight: 140,
                      boxSizing: 'border-box',
                    }}
                  />
                  {errs.message && <p style={{ color: '#f87171', fontSize: 12, marginTop: 5 }}>{errs.message}</p>}
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div style={{ display: 'flex', gap: 10, padding: '14px 16px', borderRadius: 10, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.3)' }}>
                    <AlertCircle size={16} style={{ color: '#f87171', flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: '#f87171', margin: 0 }}>{errMsg}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSend}
                  disabled={status === 'loading'}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    padding: '15px 28px', borderRadius: 100, width: '100%',
                    background: status === 'loading' ? 'rgba(56,189,248,0.4)' : 'linear-gradient(135deg, #38bdf8, #818cf8)',
                    color: '#050812', border: 'none', fontWeight: 700, fontSize: 16,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {status === 'loading' ? (
                    <>Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Contact info */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${styles.border}`, borderRadius: 18, padding: 28 }}>
              <div style={{ fontSize: 11, color: styles.accent, marginBottom: 20 }}>DIRECT CONTACT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14, padding: '11px 14px', borderRadius: 10, border: `1px solid ${styles.border}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: `${c.color}15`, border: `1px solid ${c.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <c.icon size={15} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: styles.muted }}>{c.label}</div>
                      <div style={{ fontSize: 13, color: styles.text }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${styles.border}`, borderRadius: 18, padding: 28 }}>
              <div style={{ fontSize: 11, color: styles.accent, marginBottom: 20 }}>SOCIAL PROFILES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 10, border: `1px solid ${s.color}25`, background: `${s.color}05` }}>
                    <s.icon size={18} style={{ color: s.color }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: styles.text }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: styles.muted }}>{s.handle}</div>
                    </div>
                    <ArrowRight size={13} style={{ color: s.color }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{ padding: 22, borderRadius: 18, background: 'linear-gradient(135deg, rgba(52,211,153,0.08), rgba(56,189,248,0.05))', border: '1px solid rgba(52,211,153,0.2)', textAlign: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 13px', borderRadius: 100, background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', marginBottom: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
                <span style={{ fontSize: 10, color: '#34d399' }}>AVAILABLE FOR HIRE</span>
              </span>
              <p style={{ fontSize: 13, color: styles.muted, lineHeight: 1.7, marginTop: 10 }}>
                Open to full-time, part-time remote & freelance.<br />
                <strong style={{ color: styles.text }}>Mon–Fri · 9AM–6PM PKT</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Input Field Component
function InputField({ label, placeholder, type = 'text', value, error, onChange, onBlur, accent }: {
  label: string; placeholder: string; type?: string
  value: string; error?: string
  onChange: (v: string) => void; onBlur: () => void
  accent: string
}) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, color: accent, marginBottom: 8 }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => { setFocused(false); onBlur() }}
        style={{
          width: '100%', padding: '13px 16px', borderRadius: 12,
          background: focused ? 'rgba(56,189,248,0.04)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${error ? '#f87171' : focused ? accent : 'rgba(255,255,255,0.1)'}`,
          color: '#ffffff', fontSize: 15,
          outline: 'none', boxSizing: 'border-box',
        }}
      />
      {error && <p style={{ color: '#f87171', fontSize: 12, marginTop: 5 }}>{error}</p>}
    </div>
  )
}