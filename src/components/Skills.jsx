import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  SiPython, SiJavascript, SiReact, SiHtml5,
  SiPhp, SiMysql, SiGit, SiGithub,
} from 'react-icons/si'
import { FaDatabase, FaCss3Alt, FaChartBar } from 'react-icons/fa'
import { HiCodeBracket, HiServer, HiCircleStack, HiWrenchScrewdriver, HiCpuChip } from 'react-icons/hi2'

const CATEGORIES = [
  {
    id: 'all',
    label: 'All',
    icon: <HiCpuChip />,
    color: '#6c63ff',
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: <HiCodeBracket />,
    color: '#6c63ff',
    skills: [
      {
        name: 'Python',
        icon: <SiPython />,
        level: 85,
        color: '#3776ab',
        bg: 'rgba(55,118,171,0.12)',
        tag: 'Advanced',
        tagColor: '#3776ab',
        desc: 'Data scripting, Flask, automation',
      },
      {
        name: 'SQL',
        icon: <FaDatabase />,
        level: 80,
        color: '#f29111',
        bg: 'rgba(242,145,17,0.12)',
        tag: 'Advanced',
        tagColor: '#f29111',
        desc: 'Queries, joins, stored procedures',
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript />,
        level: 75,
        color: '#f7df1e',
        bg: 'rgba(247,223,30,0.12)',
        tag: 'Intermediate',
        tagColor: '#f7df1e',
        desc: 'ES6+, DOM, async/await',
      },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <HiCpuChip />,
    color: '#3b82f6',
    skills: [
      {
        name: 'React.js',
        icon: <SiReact />,
        level: 80,
        color: '#61dafb',
        bg: 'rgba(97,218,251,0.12)',
        tag: 'Advanced',
        tagColor: '#61dafb',
        desc: 'Hooks, context, Framer Motion',
      },
      {
        name: 'HTML5',
        icon: <SiHtml5 />,
        level: 90,
        color: '#e34f26',
        bg: 'rgba(227,79,38,0.12)',
        tag: 'Expert',
        tagColor: '#e34f26',
        desc: 'Semantic markup, accessibility',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt />,
        level: 85,
        color: '#1572b6',
        bg: 'rgba(21,114,182,0.12)',
        tag: 'Advanced',
        tagColor: '#1572b6',
        desc: 'Flexbox, Grid, animations',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <HiServer />,
    color: '#a78bfa',
    skills: [
      {
        name: 'PHP',
        icon: <SiPhp />,
        level: 65,
        color: '#777bb4',
        bg: 'rgba(119,123,180,0.12)',
        tag: 'Intermediate',
        tagColor: '#777bb4',
        desc: 'Forms, sessions, MySQL integration',
      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: <HiCircleStack />,
    color: '#4ecdc4',
    skills: [
      {
        name: 'MySQL',
        icon: <SiMysql />,
        level: 80,
        color: '#00aff0',
        bg: 'rgba(0,175,240,0.12)',
        tag: 'Advanced',
        tagColor: '#00aff0',
        desc: 'Schema design, CRUD, relations',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: <HiWrenchScrewdriver />,
    color: '#ec4899',
    skills: [
      {
        name: 'Git',
        icon: <SiGit />,
        level: 75,
        color: '#f05032',
        bg: 'rgba(240,80,50,0.12)',
        tag: 'Intermediate',
        tagColor: '#f05032',
        desc: 'Version control, branching',
      },
      {
        name: 'GitHub',
        icon: <SiGithub />,
        level: 78,
        color: '#e2e8f0',
        bg: 'rgba(226,232,240,0.08)',
        tag: 'Intermediate',
        tagColor: '#94a3b8',
        desc: 'Repos, PRs, GitHub Pages',
      },
      {
        name: 'Power BI',
        icon: <FaChartBar />,
        level: 70,
        color: '#f2c811',
        bg: 'rgba(242,200,17,0.12)',
        tag: 'Intermediate',
        tagColor: '#f2c811',
        desc: 'Dashboards, DAX basics',
      },
    ],
  },
]

const ALL_SKILLS = CATEGORIES.filter(c => c.id !== 'all').flatMap(c =>
  c.skills.map(s => ({ ...s, categoryColor: c.color, categoryLabel: c.label }))
)

function levelLabel(n) {
  if (n >= 90) return { text: 'Expert',       color: '#22c55e' }
  if (n >= 80) return { text: 'Advanced',     color: '#3b82f6' }
  if (n >= 65) return { text: 'Intermediate', color: '#f59e0b' }
  return              { text: 'Beginner',     color: '#94a3b8' }
}

function ProgressBar({ level, color, inView, delay = 0 }) {
  return (
    <div className="pb-track">
      <motion.div
        className="pb-fill"
        style={{ '--bar-color': color }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
      >
        <span className="pb-glow" />
      </motion.div>
    </div>
  )
}

function SkillCard({ skill, inView, delay }) {
  const [hovered, setHovered] = useState(false)
  const lv = levelLabel(skill.level)

  return (
    <motion.div
      className="sk-card glass-card"
      style={{ '--c': skill.color, '--bg': skill.bg }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="sk-card-glow" />

      <div className="sk-top">
        <div className="sk-icon-box" style={{ background: skill.bg }}>
          <span className="sk-icon" style={{ color: skill.color }}>
            {skill.icon}
          </span>
        </div>

        <div className="sk-info">
          <div className="sk-name-row">
            <span className="sk-name">{skill.name}</span>
            <span
              className="sk-level-badge"
              style={{ color: lv.color, borderColor: `${lv.color}30`, background: `${lv.color}12` }}
            >
              {lv.text}
            </span>
          </div>
          <span className="sk-desc">{skill.desc}</span>
        </div>

        <div className="sk-percent-wrap">
          <svg className="sk-ring" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.5" className="sk-ring-track" />
            <motion.circle
              cx="18" cy="18" r="15.5"
              className="sk-ring-fill"
              stroke={skill.color}
              strokeDasharray="97.4"
              initial={{ strokeDashoffset: 97.4 }}
              animate={{ strokeDashoffset: inView ? 97.4 - (skill.level / 100) * 97.4 : 97.4 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: delay + 0.1 }}
            />
          </svg>
          <span className="sk-percent-text" style={{ color: skill.color }}>
            {skill.level}
          </span>
        </div>
      </div>

      <div className="sk-bar-section">
        <ProgressBar level={skill.level} color={skill.color} inView={inView} delay={delay + 0.05} />
        <div className="sk-bar-ends">
          <span>0%</span>
          <span style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="sk-shimmer"
            initial={{ x: '-100%', opacity: 0.6 }}
            animate={{ x: '150%', opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.55, ease: 'easeIn' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CategoryTab({ cat, active, onClick }) {
  return (
    <motion.button
      className={`cat-tab ${active ? 'active' : ''}`}
      style={{ '--tc': cat.color }}
      onClick={() => onClick(cat.id)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="cat-tab-icon">{cat.icon}</span>
      <span className="cat-tab-label">{cat.label}</span>
      {active && (
        <motion.div className="cat-tab-bar" layoutId="catBar" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
      )}
    </motion.button>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState('all')

  const tabs = CATEGORIES
  const activeCat = CATEGORIES.find(c => c.id === activeTab)
  const visibleSkills = activeTab === 'all' ? ALL_SKILLS : activeCat?.skills.map(s => ({
    ...s,
    categoryColor: activeCat.color,
    categoryLabel: activeCat.label,
  })) ?? []

        const totalSkills = ALL_SKILLS.length
  const avgLevel = Math.round(ALL_SKILLS.reduce((s, k) => s + k.level, 0) / totalSkills)

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">

        {/* heading */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Technologies
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies I work with to build modern, full-stack applications
        </motion.p>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {[
            { value: totalSkills, label: 'Technologies',    color: '#6c63ff' },
            { value: `${avgLevel}%`, label: 'Avg. Proficiency', color: '#3b82f6' },
            { value: CATEGORIES.length - 1, label: 'Categories',     color: '#a78bfa' },
            { value: '3+', label: 'Years Learning',  color: '#4ecdc4' },
          ].map(({ value, label, color }) => (
            <div key={label} className="summary-item glass-card">
              <span className="summary-value" style={{ color }}>{value}</span>
              <span className="summary-label">{label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="cat-tabs"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tabs.map(cat => (
            <CategoryTab
              key={cat.id}
              cat={cat}
              active={activeTab === cat.id}
              onClick={setActiveTab}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="skills-grid"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {visibleSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                inView={inView}
                delay={i * 0.06}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {activeTab === 'all' && (
          <motion.div
            className="cat-overview"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {CATEGORIES.filter(c => c.id !== 'all').map((cat, ci) => (
              <motion.div
                key={cat.id}
                className="cat-panel glass-card"
                whileHover={{ y: -4, borderColor: `${cat.color}50` }}
                onClick={() => setActiveTab(cat.id)}
                style={{ cursor: 'pointer', '--cp': cat.color }}
              >
                <div className="cat-panel-icon" style={{ color: cat.color, background: `${cat.color}15` }}>
                  {cat.icon}
                </div>
                <div className="cat-panel-body">
                  <span className="cat-panel-title" style={{ color: cat.color }}>{cat.label}</span>
                  <div className="cat-panel-names">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </div>
                </div>
                <div className="cat-panel-count" style={{ color: cat.color }}>
                  {cat.skills.length}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      <style>{`

        .skills-section {
          background: linear-gradient(180deg, transparent, rgba(59,130,246,0.03), transparent);
        }

        .skills-summary {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .summary-item {
          padding: 1.1rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          cursor: default;
        }
        .summary-value {
          font-size: 1.6rem;
          font-weight: 900;
          font-family: 'Fira Code', monospace;
          line-height: 1;
        }
        .summary-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .cat-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 0.5rem;
        }
        .cat-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border: none;
          border-radius: 10px;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s, background 0.2s;
          overflow: hidden;
        }
        .cat-tab:hover {
          color: var(--text-primary);
          background: rgba(255,255,255,0.05);
        }
        .cat-tab.active {
          color: var(--tc, var(--primary));
          background: color-mix(in srgb, var(--tc, var(--primary)) 12%, transparent);
          font-weight: 600;
        }
        .cat-tab-icon {
          font-size: 1rem;
          display: flex;
        }
        .cat-tab-bar {
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 2px;
          background: var(--tc, var(--primary));
          border-radius: 1px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 1.1rem;
          margin-bottom: 2.5rem;
        }

        .sk-card {
          padding: 1.35rem 1.4rem;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .sk-card:hover {
          border-color: color-mix(in srgb, var(--c) 40%, transparent);
          box-shadow: 0 8px 32px color-mix(in srgb, var(--c) 15%, transparent),
                      0 0 0 1px color-mix(in srgb, var(--c) 20%, transparent);
        }
        .sk-card-glow {
          position: absolute;
          top: -40%;
          right: -20%;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--bg, rgba(108,99,255,0.08)) 0%, transparent 70%);
          pointer-events: none;
          transition: opacity 0.3s;
          opacity: 0;
        }
        .sk-card:hover .sk-card-glow {
          opacity: 1;
        }

        .sk-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .sk-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .sk-card:hover .sk-icon-box {
          transform: scale(1.1) rotate(-4deg);
        }
        .sk-icon {
          font-size: 1.5rem;
          display: flex;
        }
        .sk-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .sk-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .sk-name {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .sk-level-badge {
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.15rem 0.55rem;
          border-radius: 50px;
          border: 1px solid;
          white-space: nowrap;
        }
        .sk-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .sk-percent-wrap {
          position: relative;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
        }
        .sk-ring {
          width: 42px;
          height: 42px;
          transform: rotate(-90deg);
        }
        .sk-ring-track {
          fill: none;
          stroke: rgba(255,255,255,0.07);
          stroke-width: 3;
        }
        .sk-ring-fill {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          filter: drop-shadow(0 0 3px var(--c));
        }
        .sk-percent-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.62rem;
          font-weight: 800;
          font-family: 'Fira Code', monospace;
        }

        .sk-bar-section {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .pb-track {
          height: 7px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
        }
        .pb-fill {
          height: 100%;
          border-radius: 4px;
          background: var(--bar-color);
          position: relative;
          box-shadow: 0 0 8px var(--bar-color);
        }
        .pb-glow {
          position: absolute;
          right: 0;
          top: -2px;
          width: 8px;
          height: 11px;
          background: #fff;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(2px);
        }
        .sk-bar-ends {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          font-family: 'Fira Code', monospace;
          color: var(--text-muted);
          font-weight: 500;
        }

        .sk-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%);
          pointer-events: none;
          z-index: 10;
        }

        .cat-overview {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.85rem;
        }
        .cat-panel {
          padding: 1rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          border-radius: 14px;
          transition: all 0.25s;
        }
        .cat-panel-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .cat-panel-body {
          flex: 1;
          min-width: 0;
        }
        .cat-panel-title {
          font-size: 0.82rem;
          font-weight: 700;
          display: block;
          margin-bottom: 0.15rem;
        }
        .cat-panel-names {
          font-size: 0.72rem;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .cat-panel-count {
          font-size: 1.4rem;
          font-weight: 900;
          font-family: 'Fira Code', monospace;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .skills-summary { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skills-summary { grid-template-columns: repeat(2, 1fr); }
          .cat-tabs { gap: 0.3rem; }
          .cat-tab { padding: 0.45rem 0.8rem; font-size: 0.8rem; }
          .cat-tab-label { display: none; }
          .cat-tab-icon { font-size: 1.1rem; }
          .cat-overview { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 400px) {
          .cat-overview { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
