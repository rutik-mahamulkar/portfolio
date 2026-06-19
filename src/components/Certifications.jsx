import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAward, FiExternalLink, FiCalendar, FiCheck } from 'react-icons/fi'
import { HiBadgeCheck, HiSparkles, HiAcademicCap } from 'react-icons/hi'

const CERTS = [
  {
    id: 'py101',
    title: 'Python 101 for Data Science',
    fullTitle: 'Python 101 for Data Science',
    issuer: 'IBM',
    platform: 'Cognitive Class · IBM',
    emoji: '🐍',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    gradient: 'linear-gradient(135deg, #0c1a2e 0%, #1e3a5f 60%, #2563eb 100%)',
    skills: ['Python Basics', 'Data Types', 'Functions', 'Pandas'],
    year: '2024',
    credentialId: 'IBM-PY101-2024',
    category: 'Data Science',
  },
  {
    id: 'dap',
    title: 'Data Analysis with Python',
    fullTitle: 'Data Analysis with Python',
    issuer: 'IBM',
    platform: 'Cognitive Class · IBM',
    emoji: '📊',
    color: '#a78bfa',
    colorRgb: '167,139,250',
    gradient: 'linear-gradient(135deg, #13082a 0%, #2d1b69 60%, #7c3aed 100%)',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Data Wrangling'],
    year: '2024',
    credentialId: 'IBM-DAP-2024',
    category: 'Data Science',
  },
  {
    id: 'vtcc',
    title: 'Python Full Stack Web Development',
    fullTitle: 'VTCC Certified Python Full Stack Web Development',
    issuer: 'VTCC',
    platform: 'VTCC Institute',
    emoji: '🚀',
    color: '#4ecdc4',
    colorRgb: '78,205,196',
    gradient: 'linear-gradient(135deg, #051a18 0%, #0d3d3a 60%, #0f766e 100%)',
    skills: ['Python', 'Flask', 'MySQL', 'HTML/CSS/JS'],
    year: '2024',
    credentialId: 'VTCC-PFSWD-2024',
    category: 'Full Stack',
  },
]

function BannerOrbs({ color, colorRgb }) {
  return (
    <div className="cert-orbs" aria-hidden="true">
      {[80, 130, 180, 240].map((size, i) => (
        <div
          key={i}
          className="cert-orb"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, rgba(${colorRgb},${0.18 - i * 0.03}) 0%, transparent 70%)`,
            left: `${-10 + i * 18}%`,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
      ))}
      <div className="cert-grid-dots" />
    </div>
  )
}

function CertCard({ cert, inView, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="cert-outer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="cert-flipper"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >

        <div className="cert-face cert-front glass-card" style={{ '--cc': cert.color, '--cr': cert.colorRgb }}>
          <div className="cert-banner" style={{ background: cert.gradient }}>
            <BannerOrbs color={cert.color} colorRgb={cert.colorRgb} />

            <div className="cert-banner-top">
              <span className="cert-category-chip" style={{ color: cert.color, borderColor: `rgba(${cert.colorRgb},0.4)`, background: `rgba(${cert.colorRgb},0.15)` }}>
                <HiAcademicCap /> {cert.category}
              </span>
              <span className="cert-year-chip">
                <FiCalendar /> {cert.year}
              </span>
            </div>

            <div className="cert-banner-center">
              <motion.div
                className="cert-emoji"
                animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              >
                {cert.emoji}
              </motion.div>
              <div className="cert-seal" style={{ background: `rgba(${cert.colorRgb},0.2)`, borderColor: `rgba(${cert.colorRgb},0.5)` }}>
                <span style={{ color: cert.color }}>{cert.issuer}</span>
              </div>
            </div>

            <div className="cert-ribbon" style={{ background: cert.color }}>
              <FiCheck /> Verified
            </div>
          </div>

          <div className="cert-body">
            <div className="cert-verified-row">
              <HiBadgeCheck style={{ color: cert.color, fontSize: '1.1rem' }} />
              <span style={{ color: cert.color }}>Verified Certificate</span>
            </div>

            <h3 className="cert-title">{cert.title}</h3>

            <div className="cert-meta-row">
              <span className="cert-issuer-badge" style={{ background: `rgba(${cert.colorRgb},0.12)`, borderColor: `rgba(${cert.colorRgb},0.25)`, color: cert.color }}>
                <FiAward /> {cert.issuer}
              </span>
              <span className="cert-platform-text">{cert.platform}</span>
            </div>

            <div className="cert-skills-wrap">
              {cert.skills.map(s => (
                <span key={s} className="cert-skill"
                  style={{ background: `rgba(${cert.colorRgb},0.1)`, borderColor: `rgba(${cert.colorRgb},0.22)`, color: cert.color }}>
                  {s}
                </span>
              ))}
            </div>

            <button
              className="cert-flip-btn"
              style={{ '--cc': cert.color, '--cr': cert.colorRgb }}
              onClick={() => setFlipped(true)}
              aria-label="View credential details"
            >
              <HiSparkles /> View Details
            </button>
          </div>
        </div>

        <div
          className="cert-face cert-back glass-card"
          style={{ '--cc': cert.color, '--cr': cert.colorRgb, transform: 'rotateY(180deg)' }}
        >
          <div className="cert-back-accent" style={{ background: cert.color }} />
          <div className="cert-back-body">
            <div className="cert-back-seal" style={{ background: cert.gradient }}>
              <span className="cert-back-emoji">{cert.emoji}</span>
            </div>

            <h3 className="cert-back-title">{cert.fullTitle}</h3>

            <div className="cert-back-rows">
              {[
                { label: 'Issued by',    value: cert.issuer },
                { label: 'Platform',     value: cert.platform },
                { label: 'Year',         value: cert.year },
                { label: 'Credential',   value: cert.credentialId },
                { label: 'Category',     value: cert.category },
              ].map(({ label, value }) => (
                <div key={label} className="cert-back-row">
                  <span className="cert-back-label">{label}</span>
                  <span className="cert-back-value" style={{ color: cert.color }}>{value}</span>
                </div>
              ))}
            </div>

            <div className="cert-back-skills">
              {cert.skills.map(s => (
                <span key={s} className="cert-skill"
                  style={{ background: `rgba(${cert.colorRgb},0.1)`, borderColor: `rgba(${cert.colorRgb},0.22)`, color: cert.color }}>
                  <FiCheck style={{ fontSize: '0.7rem' }} /> {s}
                </span>
              ))}
            </div>

            <button
              className="cert-flip-btn back"
              style={{ '--cc': cert.color, '--cr': cert.colorRgb }}
              onClick={() => setFlipped(false)}
            >
              ← Back to Certificate
            </button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section certs-section" ref={ref}>
      <div className="container">

        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          Certifications
        </motion.h2>
        <motion.p className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}>
          Professional credentials earned through dedicated learning
        </motion.p>

        <motion.div className="certs-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}>
          {[
            { value: '3', label: 'Certificates',  color: '#6c63ff' },
            { value: '2', label: 'IBM Certified',  color: '#3b82f6' },
            { value: '1', label: 'VTCC Certified', color: '#4ecdc4' },
            { value: '2024', label: 'Latest Year',  color: '#a78bfa' },
          ].map(({ value, label, color }) => (
            <div key={label} className="certs-summary-item glass-card">
              <span className="certs-summary-value" style={{ color }}>{value}</span>
              <span className="certs-summary-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} inView={inView} index={i} />
          ))}
        </div>

        <motion.p className="certs-hint"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}>
          💡 Click "View Details" on any card to see credential info
        </motion.p>

      </div>

      <style>{`
        .certs-section {
          background: linear-gradient(180deg, transparent, rgba(78,205,196,0.03), transparent);
        }

        .certs-summary {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .certs-summary-item {
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          cursor: default;
        }
        .certs-summary-value {
          font-size: 1.5rem;
          font-weight: 900;
          font-family: 'Fira Code', monospace;
          line-height: 1;
        }
        .certs-summary-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          perspective: 1200px;
        }

        .cert-outer {
          perspective: 1200px;
          height: 480px;
        }
        .cert-flipper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .cert-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
        }

        .cert-banner {
          height: 190px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .cert-orbs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cert-orb {
          position: absolute;
          border-radius: 50%;
        }
        .cert-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .cert-banner-top {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 2;
        }
        .cert-category-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.22rem 0.65rem;
          border-radius: 50px;
          border: 1px solid;
          font-size: 0.68rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
        }
        .cert-year-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.22rem 0.65rem;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.7);
          font-family: 'Fira Code', monospace;
          backdrop-filter: blur(8px);
        }
        .cert-banner-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          z-index: 1;
        }
        .cert-emoji {
          font-size: 3.2rem;
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.4));
          line-height: 1;
        }
        .cert-seal {
          padding: 0.3rem 1rem;
          border-radius: 50px;
          border: 1.5px solid;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 1px;
          font-family: 'Fira Code', monospace;
          backdrop-filter: blur(8px);
        }
        .cert-ribbon {
          position: absolute;
          bottom: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.85rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #fff;
          border-radius: 6px 0 0 0;
        }

        .cert-body {
          padding: 1.2rem 1.3rem 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          flex: 1;
        }
        .cert-verified-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
        }
        .cert-title {
          font-size: 0.97rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .cert-meta-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .cert-issuer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.65rem;
          border-radius: 50px;
          border: 1px solid;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .cert-platform-text {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .cert-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .cert-skill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.18rem 0.6rem;
          border-radius: 50px;
          border: 1px solid;
          font-size: 0.68rem;
          font-weight: 500;
        }
        .cert-flip-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: rgba(var(--cr),0.12);
          border: 1px solid rgba(var(--cr),0.3);
          border-radius: 8px;
          color: var(--cc);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          margin-top: auto;
          transition: all 0.2s;
          width: 100%;
          justify-content: center;
        }
        .cert-flip-btn:hover {
          background: rgba(var(--cr),0.2);
          transform: translateY(-1px);
        }
        .cert-flip-btn.back {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
          color: var(--text-secondary);
        }
        .cert-flip-btn.back:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.1);
        }

        .cert-back-accent {
          height: 3px;
          flex-shrink: 0;
        }
        .cert-back-body {
          padding: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          flex: 1;
        }
        .cert-back-seal {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .cert-back-emoji { font-size: 2rem; }
        .cert-back-title {
          font-size: 0.88rem;
          font-weight: 800;
          line-height: 1.35;
        }
        .cert-back-rows {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.85rem;
          background: rgba(255,255,255,0.02);
        }
        .cert-back-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
        }
        .cert-back-label {
          color: var(--text-muted);
          font-weight: 500;
          flex-shrink: 0;
        }
        .cert-back-value {
          font-weight: 700;
          font-family: 'Fira Code', monospace;
          font-size: 0.7rem;
          text-align: right;
          word-break: break-all;
        }
        .cert-back-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .certs-hint {
          text-align: center;
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 960px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr); }
          .certs-summary { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr; }
          .cert-outer { height: auto; min-height: 480px; }
        }
      `}</style>
    </section>
  )
}
