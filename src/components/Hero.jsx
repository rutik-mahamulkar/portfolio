import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMessageSquare, FiInstagram } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'

const TYPING_TEXTS = [
  'Full Stack Developer',
  'React.js Enthusiast',
  'Python Developer',
  'ML Aspirant',
]

function TypingEffect({ texts }) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = texts[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 45)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts])

  return (
    <span className="typing-text">
      {displayed}
      <span className="cursor">|</span>
    </span>
  )
}

// Floating background code snippets
const CODE_SNIPPETS = [
  'const dev = "Rutik"',
  'import React from...',
  'def solve(): ...',
  'SELECT * FROM...',
  'git commit -m "feat"',
  'npm run build',
  '<Component />',
  'async/await',
  'useState()',
  'Flask.route()',
]

export default function Hero() {
  const handleContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      <div className="floating-codes" aria-hidden="true">
        {CODE_SNIPPETS.map((snippet, i) => (
          <motion.div
            key={i}
            className="floating-code"
            style={{
              left: `${(i * 11) % 90}%`,
              top: `${(i * 13 + 10) % 85}%`,
              animationDelay: `${i * 0.7}s`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.06, 0.14, 0.06],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      <div className="container hero-container">
        <motion.div className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <HiCode className="badge-icon" />
          <span>Available for opportunities</span>
          <span className="badge-dot" />
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Hi, I'm <span className="gradient-text">Rutik</span>
          <br />
          <span className="hero-lastname">Mahamulkar</span>
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TypingEffect texts={TYPING_TEXTS} />
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          Building Modern Web Applications with <span className="tag-highlight">React</span>,{' '}
          <span className="tag-highlight">Python</span> &amp; <span className="tag-highlight">SQL</span>
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/Rutik_Mahamulkar_Resume.pdf"
            className="btn btn-primary"
            download="Rutik_Mahamulkar_Resume.pdf"
            aria-label="Download Resume"
          >
            <FiDownload /> Download Resume
          </a>
          <button
            className="btn btn-outline"
            onClick={handleContact}
          >
            <FiMessageSquare /> Contact Me
          </button>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
        >
          {[
            { icon: <FiGithub />, href: 'https://github.com/rutik-mahamulkar', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/rutikmahamulkar/', label: 'LinkedIn' },
            { icon: <FiInstagram />, href: 'https://www.instagram.com/_.mr_rutik._', label: 'Instagram' },
            { icon: <FiMail />, href: 'mailto:rutikmahamulkar74@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: var(--navbar-height);
        }
        .hero-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 4rem;
          padding-bottom: 6rem;
          gap: 1.5rem;
        }
        .floating-codes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .floating-code {
          position: absolute;
          font-family: 'Fira Code', monospace;
          font-size: 0.75rem;
          color: var(--primary);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.2rem;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.25);
          border-radius: 50px;
          font-size: 0.85rem;
          color: var(--accent);
          position: relative;
          z-index: 1;
        }
        .badge-icon {
          font-size: 1rem;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .hero-name {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 900;
          line-height: 1.05;
          position: relative;
          z-index: 1;
          letter-spacing: -2px;
        }
        .hero-lastname {
          color: var(--text-secondary);
        }
        .hero-role {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          font-weight: 600;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
          height: 2.5rem;
          display: flex;
          align-items: center;
        }
        .typing-text {
          color: var(--text-primary);
        }
        .cursor {
          animation: cursorBlink 1s step-end infinite;
          color: var(--primary);
          font-weight: 300;
          margin-left: 2px;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-tagline {
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 550px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }
        .tag-highlight {
          color: var(--accent);
          font-weight: 600;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .hero-socials {
          display: flex;
          gap: 1rem;
          position: relative;
          z-index: 1;
          margin-top: 0.5rem;
        }
        .social-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(108, 99, 255, 0.1);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.75rem;
        }
        .scroll-mouse {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }
        .scroll-wheel {
          width: 3px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
          animation: scrollDown 2s ease infinite;
        }
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @media (max-width: 480px) {
          .hero-cta { flex-direction: column; align-items: center; }
          .hero-cta .btn { width: 200px; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
