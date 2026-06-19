import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiSend,
  FiUser, FiMessageSquare, FiGithub, FiLinkedin,
  FiCheck, FiAlertCircle, FiInstagram,
} from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

const CONTACT_INFO = [
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 8459627009',
    href: 'tel:+918459627009',
    color: '#22c55e',
    colorRgb: '34,197,94',
    desc: 'Call or WhatsApp',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'rutikmahamulkar74@gmail.com',
    href: 'mailto:rutikmahamulkar74@gmail.com',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    desc: 'Reply within 24 hours',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Satara, Maharashtra',
    href: null,
    color: '#a78bfa',
    colorRgb: '167,139,250',
    desc: 'India (IST · UTC+5:30)',
  },
]

const SOCIALS = [
  { icon: <FiGithub />,    href: 'https://github.com/rutik-mahamulkar',          label: 'GitHub',    color: '#e2e8f0' },
  { icon: <FiLinkedin />,  href: 'https://www.linkedin.com/in/rutikmahamulkar/', label: 'LinkedIn',  color: '#0a66c2' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/_.mr_rutik._',       label: 'Instagram', color: '#e1306c' },
  { icon: <FiMail />,      href: 'mailto:rutikmahamulkar74@gmail.com',            label: 'Email',     color: '#3b82f6' },
]

function FloatingInput({ id, name, label, type = 'text', placeholder, value, onChange, required, icon, multiline }) {
  const [focused, setFocused] = useState(false)
  const hasValue = value.length > 0
  const Tag = multiline ? 'textarea' : 'input'

  return (
    <div className={`fi-wrap ${focused ? 'focused' : ''} ${hasValue ? 'filled' : ''}`}>
      <label htmlFor={id} className="fi-label">
        <span className="fi-label-icon">{icon}</span>
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        type={multiline ? undefined : type}
        className={`fi-input ${multiline ? 'fi-textarea' : ''}`}
        placeholder={focused ? placeholder : ''}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={multiline ? 5 : undefined}
        autoComplete={name}
      />
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setForm({ name: '', email: '', message: '' })
      }, 3500)
    }, 1200)
  }

  const fadeIn = (delay = 0, x = 0) => ({
    initial: { opacity: 0, x, y: x === 0 ? 30 : 0 },
    animate: inView ? { opacity: 1, x: 0, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">

        <motion.h2 className="section-title" {...fadeIn(0)}>Get In Touch</motion.h2>
        <motion.p className="section-subtitle" {...fadeIn(0.1)}>
          Have a project in mind? Let's build something great together
        </motion.p>

        <div className="contact-layout">

          <motion.div className="contact-left" {...fadeIn(0.15, -40)}>

            <div className="contact-intro glass-card">
              <div className="contact-intro-icon">
                <HiSparkles />
              </div>
              <div>
                <h3 className="contact-intro-title">Let's work together</h3>
                <p className="contact-intro-text">
                  I'm open to new opportunities, freelance projects, and collaborations.
                  Whether you have a question or just want to say hi — my inbox is always open!
                </p>
              </div>
            </div>

            <div className="contact-info-list">
              {CONTACT_INFO.map(({ icon, label, value, href, color, colorRgb, desc }, i) => (
                <motion.div
                  key={label}
                  className="contact-info-card glass-card"
                  style={{ '--cic': color, '--cicr': colorRgb }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="cic-icon-wrap">
                    <span className="cic-icon" style={{ color, background: `rgba(${colorRgb},0.15)` }}>{icon}</span>
                    <div className="cic-icon-ring" style={{ borderColor: `rgba(${colorRgb},0.3)` }} />
                  </div>
                  <div className="cic-text">
                    <span className="cic-label">{label}</span>
                    {href ? (
                      <a className="cic-value" href={href} style={{ color }}>
                        {value}
                      </a>
                    ) : (
                      <span className="cic-value" style={{ color }}>{value}</span>
                    )}
                    <span className="cic-desc">{desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

          <motion.div
              className="contact-socials glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <span className="socials-label">Find me on</span>
              <div className="socials-row">
                {SOCIALS.map(({ icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={label}
                    title={label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.93 }}
                    style={{ '--sc': color }}
                  >
                    {icon}
                    <span>{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-right" {...fadeIn(0.25, 40)}>
            <div className="contact-form-card glass-card">

              <div className="form-header">
                <h3 className="form-heading">Send a Message</h3>
                <p className="form-subheading">I'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="contact-form">

                <FloatingInput
                  id="name" name="name" label="Your Name" icon={<FiUser />}
                  placeholder="e.g. John Doe"
                  value={form.name} onChange={handleChange} required
                />
                <FloatingInput
                  id="email" name="email" type="email" label="Email Address" icon={<FiMail />}
                  placeholder="you@example.com"
                  value={form.email} onChange={handleChange} required
                />
                <FloatingInput
                  id="message" name="message" label="Your Message" icon={<FiMessageSquare />}
                  placeholder="Tell me about your project or idea..."
                  value={form.message} onChange={handleChange} required multiline
                />

                <motion.button
                  type="submit"
                  className={`form-submit-btn ${status}`}
                  disabled={status !== 'idle'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.97 } : {}}
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.span key="idle" className="btn-inner"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                        <FiSend /> Send Message
                      </motion.span>
                    )}
                    {status === 'sending' && (
                      <motion.span key="sending" className="btn-inner"
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                        <span className="btn-spinner" /> Sending...
                      </motion.span>
                    )}
                    {status === 'sent' && (
                      <motion.span key="sent" className="btn-inner"
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                        <FiCheck /> Message Sent!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="form-note">
                  <FiAlertCircle /> UI-only form — for direct contact use the email or phone above.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, transparent, rgba(108,99,255,0.04), transparent);
        }
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 2rem;
          align-items: start;
        }

        .contact-left { display: flex; flex-direction: column; gap: 1.1rem; }

        .contact-intro {
          padding: 1.4rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .contact-intro-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(108,99,255,0.15);
          border: 1px solid rgba(108,99,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .contact-intro-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-intro-text {
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.65;
        }

        .contact-info-list { display: flex; flex-direction: column; gap: 0.7rem; }
        .contact-info-card {
          padding: 1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .contact-info-card:hover {
          border-color: rgba(var(--cicr), 0.35);
          box-shadow: 0 4px 20px rgba(var(--cicr), 0.1);
        }
        .cic-icon-wrap { position: relative; flex-shrink: 0; }
        .cic-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }
        .cic-icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          border: 1px solid;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .contact-info-card:hover .cic-icon-ring { opacity: 1; }
        .cic-text { display: flex; flex-direction: column; gap: 0.1rem; min-width: 0; }
        .cic-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
        }
        .cic-value {
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          word-break: break-all;
          transition: opacity 0.2s;
        }
        a.cic-value:hover { opacity: 0.75; }
        .cic-desc { font-size: 0.72rem; color: var(--text-muted); }

        .contact-socials {
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .socials-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .socials-row { display: flex; gap: 0.6rem; flex: 1; justify-content: flex-end; }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .social-btn:hover {
          color: var(--sc, var(--primary));
          border-color: var(--sc, var(--primary));
          background: rgba(255,255,255,0.08);
        }

        .contact-right {}
        .contact-form-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-header {}
        .form-heading {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
        }
        .form-subheading {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .fi-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .fi-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 0.45rem;
          transition: color 0.2s;
        }
        .fi-label-icon { font-size: 0.85rem; display: flex; }
        .fi-wrap.focused .fi-label { color: var(--primary); }
        .fi-input {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          resize: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .fi-input::placeholder { color: var(--text-muted); }
        .fi-input:focus {
          border-color: var(--primary);
          background: rgba(108,99,255,0.05);
          box-shadow: 0 0 0 3px rgba(108,99,255,0.1);
        }
        .fi-textarea { min-height: 130px; resize: vertical; }

        .form-submit-btn {
          width: 100%;
          padding: 0.9rem 1.5rem;
          border-radius: 10px;
          border: none;
          background: var(--gradient);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(108,99,255,0.35);
          transition: all 0.3s;
          min-height: 48px;
          position: relative;
          overflow: hidden;
        }
        .form-submit-btn:disabled { cursor: not-allowed; }
        .form-submit-btn.sending {
          background: linear-gradient(135deg, #4c4490, #2563eb);
          box-shadow: none;
        }
        .form-submit-btn.sent {
          background: linear-gradient(135deg, #15803d, #22c55e);
          box-shadow: 0 4px 20px rgba(34,197,94,0.35);
        }
        .btn-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .form-note {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.72rem;
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .contact-form-card { padding: 1.4rem; }
          .socials-row { flex-wrap: wrap; justify-content: flex-start; }
        }
      `}</style>
    </section>
  )
}
