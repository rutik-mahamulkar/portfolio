import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SiPython, SiJavascript, SiReact, SiHtml5, SiPhp, SiMysql, SiGit, SiGithub } from 'react-icons/si'
import { FaDatabase, FaCss3Alt, FaChartBar } from 'react-icons/fa'

const SKILLS = [
  { name: 'Python',     icon: <SiPython />,     level: 85, color: '#3776ab' },
  { name: 'SQL',        icon: <FaDatabase />,   level: 80, color: '#f29111' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 75, color: '#f7df1e' },
  { name: 'React.js',   icon: <SiReact />,      level: 80, color: '#61dafb' },
  { name: 'HTML5',      icon: <SiHtml5 />,      level: 90, color: '#e34f26' },
  { name: 'CSS3',       icon: <FaCss3Alt />,    level: 85, color: '#1572b6' },
  { name: 'PHP',        icon: <SiPhp />,        level: 65, color: '#777bb4' },
  { name: 'MySQL',      icon: <SiMysql />,      level: 80, color: '#00aff0' },
  { name: 'Git',        icon: <SiGit />,        level: 75, color: '#f05032' },
  { name: 'GitHub',     icon: <SiGithub />,     level: 78, color: '#94a3b8' },
  { name: 'Power BI',   icon: <FaChartBar />,   level: 70, color: '#f2c811' },
]

function SkillCard({ skill, inView, index }) {
  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      style={{ '--sc': skill.color }}
    >
      <div className="skill-top">
        <span className="skill-icon" style={{ color: skill.color }}>{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          style={{ background: skill.color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">

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
          Technologies I work with to build modern applications
        </motion.p>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} inView={inView} index={i} />
          ))}
        </div>

      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        .skill-card {
          padding: 1.25rem 1.25rem 1rem;
          cursor: default;
          border-radius: 14px;
        }
        .skill-card:hover {
          border-color: color-mix(in srgb, var(--sc) 40%, transparent);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--sc) 12%, transparent);
          transform: translateY(-4px);
        }
        .skill-top {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.9rem;
        }
        .skill-icon {
          font-size: 1.4rem;
          display: flex;
          flex-shrink: 0;
        }
        .skill-name {
          font-size: 0.9rem;
          font-weight: 600;
          flex: 1;
          color: var(--text-primary);
        }
        .skill-pct {
          font-size: 0.78rem;
          font-weight: 700;
          font-family: 'Fira Code', monospace;
        }
        .skill-bar-bg {
          height: 5px;
          background: rgba(255,255,255,0.08);
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
        }
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 380px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
