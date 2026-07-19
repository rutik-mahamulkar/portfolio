import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiLayers, FiCheckCircle, FiZap } from 'react-icons/fi'
import { HiSparkles, HiTag } from 'react-icons/hi'
import {
  SiPhp, SiHtml5, SiMysql, SiJavascript, SiPython, SiFlask,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'

const TECH_ICONS = {
  PHP:        { icon: <SiPhp />,        color: '#777bb4' },
  HTML:       { icon: <SiHtml5 />,      color: '#e34f26' },
  CSS:        { icon: <FaCss3Alt />,    color: '#1572b6' },
  JavaScript: { icon: <SiJavascript />, color: '#f7df1e' },
  MySQL:      { icon: <SiMysql />,      color: '#00aff0' },
  Python:     { icon: <SiPython />,     color: '#3776ab' },
  Flask:      { icon: <SiFlask />,      color: '#e2e8f0' },
}

const FEATURE_ICONS = {
  'CRUD Operations':        { icon: <FiLayers />,      color: '#6c63ff' },
  'Form Validation':        { icon: <FiCheckCircle />, color: '#22c55e' },
  'Database Integration':   { icon: <FiCode />,        color: '#3b82f6' },
  'Inventory Management':   { icon: <FiZap />,         color: '#f59e0b' },
  'ML Prediction Model':    { icon: <FiZap />,         color: '#a78bfa' },
  'Data Visualization':     { icon: <FiCode />,        color: '#3b82f6' },
  'Interactive Web UI':     { icon: <FiLayers />,      color: '#6c63ff' },
  'Real-time Prediction':   { icon: <FiCheckCircle />, color: '#22c55e' },
}

const PROJECTS = [
  {
    id: 'plant-pulse',
    title: 'Plant Pulse System',
    subtitle: 'Nursery Management Web App',
    emoji: '🌱',
    category: 'Web Application',
    status: 'Completed',
    year: '2024',
    description:
      'Developed a nursery management web application to manage plant inventory, customer records, and orders. Features a clean dashboard with real-time inventory tracking and full CRUD functionality.',
    features: [
      'CRUD Operations',
      'Form Validation',
      'Database Integration',
      'Inventory Management',
    ],
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/rutik-mahamulkar/PlantPulse',
    color: '#22c55e',
    accentColor: '#16a34a',
    gradient: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)',
    stats: [
      { label: 'Modules',   value: '4' },
      { label: 'DB Tables', value: '6' },
      { label: 'Features',  value: '12+' },
    ],
    lines: [
      { indent: 0, w: 80, c: '#86efac' },
      { indent: 1, w: 60, c: '#4ade80' },
      { indent: 1, w: 75, c: '#86efac' },
      { indent: 2, w: 50, c: '#22c55e' },
      { indent: 2, w: 65, c: '#4ade80' },
      { indent: 1, w: 40, c: '#86efac' },
      { indent: 0, w: 55, c: '#22c55e' },
    ],
  },
  {
    id: 'placement-predictor',
    title: 'Student Placement Predictor',
    subtitle: 'ML-Powered Prediction Web App',
    emoji: '🎓',
    category: 'Machine Learning',
    status: 'Completed',
    year: '2025',
    description:
      'Built a machine learning web application that predicts student placement chances based on academic performance, skills, and other factors. Uses a trained ML model served via Flask with an interactive frontend.',
    features: [
      'ML Prediction Model',
      'Data Visualization',
      'Interactive Web UI',
      'Real-time Prediction',
    ],
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rutik-mahamulkar/student-placement-predictor',
    color: '#a78bfa',
    accentColor: '#7c3aed',
    gradient: 'linear-gradient(135deg, #1e0a4a 0%, #2d1b69 50%, #4c1d95 100%)',
    stats: [
      { label: 'ML Model',   value: '1' },
      { label: 'Accuracy',   value: '85%' },
      { label: 'Features',   value: '8+' },
    ],
    lines: [
      { indent: 0, w: 75, c: '#c4b5fd' },
      { indent: 1, w: 55, c: '#a78bfa' },
      { indent: 1, w: 80, c: '#c4b5fd' },
      { indent: 2, w: 45, c: '#7c3aed' },
      { indent: 2, w: 60, c: '#a78bfa' },
      { indent: 1, w: 35, c: '#c4b5fd' },
      { indent: 0, w: 65, c: '#7c3aed' },
    ],
  },
]

function BrowserMockup({ project }) {
  return (
    <div className="browser-frame">
      {/* title bar */}
      <div className="browser-bar">
        <div className="browser-dots">
          <span style={{ background: '#ff5f57' }} />
          <span style={{ background: '#febc2e' }} />
          <span style={{ background: '#28c840' }} />
        </div>
        <div className="browser-url">
          <span className="url-lock">🔒</span>
          <span>localhost/{project.id}</span>
        </div>
        <div className="browser-menu">⋯</div>
      </div>

      {/* screen */}
      <div className="browser-screen" style={{ background: project.gradient }}>
        {/* floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${12 + i * 11}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              background: `rgba(134,239,172,${0.15 + (i % 4) * 0.07})`,
            }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        ))}

        {/* center content */}
        <div className="screen-center">
          <motion.div
            className="screen-emoji"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {project.emoji}
          </motion.div>
          <div className="screen-title">{project.title}</div>

          {/* fake code lines */}
          <div className="screen-code">
            {project.lines.map((l, i) => (
              <motion.div
                key={i}
                className="screen-line"
                style={{ marginLeft: `${l.indent * 12}px`, width: `${l.w}%`, background: l.c }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${l.w}%`, opacity: 0.45 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
              />
            ))}
          </div>
        </div>

        {/* corner badge */}
        <div className="screen-badge" style={{ color: project.color }}>
          <HiSparkles /> {project.category}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, inView }) {
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <motion.div
      className="proj-card glass-card"
      style={{ '--pc': project.color }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <BrowserMockup project={project} />
      <div className="proj-body">

        <div className="proj-header">
          <div className="proj-header-left">
            <div className="proj-badges">
              <span className="proj-status-badge">
                <span className="proj-status-dot" /> {project.status}
              </span>
              <span className="proj-year-badge">
                <HiTag /> {project.year}
              </span>
            </div>
            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-subtitle">{project.subtitle}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-github-icon"
            aria-label="View on GitHub"
          >
            <FiGithub />
          </a>
        </div>

        <p className="proj-desc">{project.description}</p>

        <div className="proj-stats">
          {project.stats.map(({ label, value }) => (
            <div key={label} className="proj-stat">
              <span className="proj-stat-value" style={{ color: project.color }}>{value}</span>
              <span className="proj-stat-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="proj-section">
          <div className="proj-section-label">
            <FiLayers /> Key Features
          </div>
          <div className="proj-features-grid">
            {project.features.map(f => {
              const fi = FEATURE_ICONS[f] || { icon: <FiCheckCircle />, color: '#6c63ff' }
              return (
                <motion.div
                  key={f}
                  className={`feat-chip ${activeFeature === f ? 'active' : ''}`}
                  style={{ '--fc': fi.color }}
                  onHoverStart={() => setActiveFeature(f)}
                  onHoverEnd={() => setActiveFeature(null)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="feat-chip-icon" style={{ color: fi.color }}>{fi.icon}</span>
                  <span className="feat-chip-text">{f}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="proj-section">
          <div className="proj-section-label">
            <FiCode /> Tech Stack
          </div>
          <div className="proj-tech-row">
            {project.tech.map(t => {
              const ti = TECH_ICONS[t] || { icon: null, color: '#6c63ff' }
              return (
                <motion.div
                  key={t}
                  className="tech-pill"
                  style={{ '--tc': ti.color }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {ti.icon && <span className="tech-pill-icon" style={{ color: ti.color }}>{ti.icon}</span>}
                  <span className="tech-pill-name">{t}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="proj-actions">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary proj-btn-main"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiGithub /> View on GitHub
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline proj-btn-sec"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiExternalLink /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function ComingSoonCard({ inView }) {
  const TYPING = ['React + Python...', 'Flask REST API...', 'ML Dashboard...']
  const [tIdx, setTIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cIdx, setCIdx] = useState(0)

  React.useEffect(() => {
    const current = TYPING[tIdx]
    let timeout
    if (!deleting && cIdx < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, cIdx + 1)); setCIdx(c => c + 1) }, 90)
    } else if (!deleting && cIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && cIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, cIdx - 1)); setCIdx(c => c - 1) }, 50)
    } else if (deleting && cIdx === 0) {
      setDeleting(false); setTIdx(i => (i + 1) % TYPING.length)
    }
    return () => clearTimeout(timeout)
  }, [cIdx, deleting, tIdx])

  return (
    <motion.div
      className="coming-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="coming-top">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="coming-dot"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.8, delay: i * 0.15, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="coming-body">
        <div className="coming-rocket">🚀</div>
        <h3 className="coming-title">More Projects Coming Soon</h3>

        <div className="coming-typing">
          <span className="coming-prompt">Working on: </span>
          <span className="coming-typed">
            {displayed}<span className="coming-cursor">|</span>
          </span>
        </div>

        <p className="coming-text">
          Currently building new projects. Check back soon or visit my GitHub for the latest work.
        </p>

        <a
          href="https://github.com/rutik-mahamulkar"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline coming-btn"
        >
          <FiGithub /> Visit GitHub Profile
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Real-world applications I've built and shipped
        </motion.p>

        <div className="projects-grid">
          {PROJECTS.map(p => (
            <ProjectCard key={p.id} project={p} inView={inView} />
          ))}
          <ComingSoonCard inView={inView} />
        </div>

      </div>

      {/* ════ STYLES ════ */}
      <style>{`
        .projects-section {
          background: linear-gradient(180deg, transparent, rgba(167,139,250,0.03), transparent);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 2rem;
          align-items: start;
        }

        .browser-frame {
          border-radius: 12px 12px 0 0;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .browser-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          background: rgba(15,15,25,0.95);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .browser-dots {
          display: flex;
          gap: 5px;
          flex-shrink: 0;
        }
        .browser-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: block;
        }
        .browser-url {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 0.25rem 0.75rem;
          font-size: 0.72rem;
          color: var(--text-muted);
          font-family: 'Fira Code', monospace;
        }
        .url-lock { font-size: 0.65rem; }
        .browser-menu {
          color: var(--text-muted);
          font-size: 1rem;
          letter-spacing: 1px;
          flex-shrink: 0;
        }
        .browser-screen {
          height: 220px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .screen-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          z-index: 1;
        }
        .screen-emoji {
          font-size: 3.5rem;
          filter: drop-shadow(0 0 20px rgba(34,197,94,0.5));
          line-height: 1;
        }
        .screen-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.5px;
        }
        .screen-code {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 160px;
        }
        .screen-line {
          height: 5px;
          border-radius: 3px;
        }
        .screen-badge {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.7rem;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(8px);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .proj-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .proj-card:hover {
          border-color: color-mix(in srgb, var(--pc) 35%, transparent);
          box-shadow: 0 20px 60px color-mix(in srgb, var(--pc) 12%, transparent);
        }
        .proj-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          flex: 1;
        }

        .proj-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .proj-header-left { flex: 1; min-width: 0; }
        .proj-badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }
        .proj-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.65rem;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #22c55e;
        }
        .proj-status-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulseDot 2s ease infinite;
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.5; transform:scale(.8); }
        }
        .proj-year-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.65rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-muted);
        }
        .proj-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
          line-height: 1.2;
        }
        .proj-subtitle {
          font-size: 0.82rem;
          color: var(--pc, var(--primary));
          font-weight: 500;
        }
        .proj-github-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 1.1rem;
          text-decoration: none;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .proj-github-icon:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text-primary);
          transform: scale(1.08);
        }

        .proj-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .proj-stats {
          display: flex;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }
        .proj-stat {
          flex: 1;
          padding: 0.7rem 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          border-right: 1px solid var(--border);
          cursor: default;
        }
        .proj-stat:last-child { border-right: none; }
        .proj-stat-value {
          font-size: 1.2rem;
          font-weight: 900;
          font-family: 'Fira Code', monospace;
          line-height: 1;
        }
        .proj-stat-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .proj-section { display: flex; flex-direction: column; gap: 0.6rem; }
        .proj-section-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
        }

        .proj-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .feat-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.85rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 10px;
          cursor: default;
          transition: all 0.2s;
        }
        .feat-chip:hover, .feat-chip.active {
          background: color-mix(in srgb, var(--fc) 10%, transparent);
          border-color: color-mix(in srgb, var(--fc) 35%, transparent);
        }
        .feat-chip-icon {
          font-size: 0.95rem;
          display: flex;
          flex-shrink: 0;
        }
        .feat-chip-text {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .feat-chip:hover .feat-chip-text { color: var(--text-primary); }

        .proj-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.85rem;
          background: color-mix(in srgb, var(--tc) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--tc) 25%, transparent);
          border-radius: 50px;
          cursor: default;
          transition: all 0.2s;
        }
        .tech-pill:hover {
          background: color-mix(in srgb, var(--tc) 18%, transparent);
          box-shadow: 0 0 12px color-mix(in srgb, var(--tc) 20%, transparent);
        }
        .tech-pill-icon {
          font-size: 0.95rem;
          display: flex;
        }
        .tech-pill-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--tc);
        }

        .proj-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: auto;
          padding-top: 0.25rem;
        }
        .proj-btn-main {
          flex: 1;
          justify-content: center;
          min-width: 140px;
        }
        .proj-btn-sec {
          padding: 0.75rem 1.25rem;
        }

        .coming-card {
          display: flex;
          flex-direction: column;
          border: 2px dashed rgba(108,99,255,0.2);
          min-height: 420px;
          overflow: hidden;
        }
        .coming-top {
          display: flex;
          justify-content: space-around;
          padding: 1rem 1.5rem 0.5rem;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .coming-dot {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
        }
        .coming-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem 2rem 2rem;
          text-align: center;
        }
        .coming-rocket {
          font-size: 3rem;
          animation: rocketFloat 3s ease-in-out infinite;
        }
        @keyframes rocketFloat {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50%      { transform: translateY(-10px) rotate(5deg); }
        }
        .coming-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .coming-typing {
          font-size: 0.82rem;
          font-family: 'Fira Code', monospace;
          background: rgba(108,99,255,0.1);
          border: 1px solid rgba(108,99,255,0.2);
          border-radius: 8px;
          padding: 0.4rem 0.9rem;
        }
        .coming-prompt { color: var(--text-muted); }
        .coming-typed  { color: var(--accent); }
        .coming-cursor {
          color: var(--primary);
          animation: cursorBlink 1s step-end infinite;
        }
        @keyframes cursorBlink {
          0%,100% { opacity:1; } 50% { opacity:0; }
        }
        .coming-text {
          color: var(--text-muted);
          font-size: 0.85rem;
          max-width: 260px;
          line-height: 1.6;
        }
        .coming-btn { font-size: 0.88rem; }

        @media (max-width: 860px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .proj-features-grid { grid-template-columns: 1fr; }
          .proj-stats { flex-wrap: wrap; }
          .proj-stat { min-width: 30%; }
        }
      `}</style>
    </section>
  )
}
