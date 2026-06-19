import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap, HiSparkles } from 'react-icons/hi'
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiCheckCircle } from 'react-icons/fi'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

const EDUCATION = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Chhatrapati Shivaji Maharaj University',
    location: 'Kolhapur, Maharashtra',
    period: '2023 – 2026',
    year: '2023',
    endYear: '2026',
    status: 'completed',
    cgpa: '7.12',
    maxCgpa: 10,
    progress: 55,
    emoji: '🎓',
    color: '#6c63ff',
    colorRgb: '108,99,255',
    description:
      'Focused on full-stack web development, database management, data structures, and algorithms. Actively building projects with Python, React.js, and MySQL.',
    subjects: ['Web Development', 'Database Management', 'Data Structures', 'Algorithms', 'Python Programming', 'Software Engineering'],
    highlights: [
      { icon: <FiAward />,     text: 'CGPA 7.12 / 10' },
      { icon: <FiBookOpen />,  text: '3-year program' },
      { icon: <FiCheckCircle />, text: 'Graduated 2026' },
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate',
    short: 'HSC (12th)',
    institution: 'Maharashtra State Board',
    location: 'Maharashtra',
    period: '2021 – 2023',
    year: '2021',
    endYear: '2023',
    status: 'completed',
    emoji: '📚',
    color: '#3b82f6',
    colorRgb: '59,130,246',
    description:
      'Completed higher secondary education with a science stream focus, building a strong foundation in mathematics and physics for computer science studies.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Computer Science'],
    highlights: [
      { icon: <FiCheckCircle />, text: 'Science Stream' },
      { icon: <FiBookOpen />,    text: '2-year program' },
      { icon: <FiCalendar />,    text: 'Passed 2023' },
    ],
  },
]

function CgpaStars({ cgpa, max = 10 }) {
  const stars = 5
  const filled = Math.round((cgpa / max) * stars * 2) / 2
  return (
    <div className="cgpa-stars">
      {[...Array(stars)].map((_, i) => {
        if (i + 1 <= filled)
          return <BsStarFill key={i} className="star full" />
        if (i + 0.5 <= filled)
          return <BsStarHalf key={i} className="star half" />
        return <BsStarFill key={i} className="star empty" />
      })}
    </div>
  )
}

function ProgressBar({ value, color, inView, delay = 0 }) {
  return (
    <div className="edu-progress-track">
      <motion.div
        className="edu-progress-fill"
        style={{ background: color, boxShadow: `0 0 8px rgba(${color === '#6c63ff' ? '108,99,255' : '59,130,246'},0.5)` }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="edu-progress-dot" />
      </motion.div>
    </div>
  )
}

function EduCard({ edu, side, inView, index }) {

  return (
    <div className={`tl-row ${side}`}>

      <motion.div
        className="edu-card glass-card"
        style={{ '--ec': edu.color, '--ecr': edu.colorRgb }}
        initial={{ opacity: 0, x: side === 'left' ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.3 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
      >
        <div className="edu-card-accent" style={{ background: edu.color }} />

        <div className="edu-card-header">
          <div className="edu-emoji-wrap" style={{ background: `rgba(${edu.colorRgb},0.12)` }}>
            <span className="edu-emoji">{edu.emoji}</span>
          </div>

          <div className="edu-header-text">
            <div className="edu-status-row">
                  <span className="edu-badge completed">
                    <FiCheckCircle /> Completed
                  </span>
              <span className="edu-period-chip">
                <FiCalendar /> {edu.period}
              </span>
            </div>

            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-short">{edu.short}</p>
          </div>
        </div>

        <div className="edu-institution-row">
          <HiAcademicCap className="inst-icon" style={{ color: edu.color }} />
          <div>
            <p className="edu-institution" style={{ color: edu.color }}>{edu.institution}</p>
            <p className="edu-location"><FiMapPin /> {edu.location}</p>
          </div>
        </div>

        <p className="edu-desc">{edu.description}</p>

        {edu.cgpa && (
          <div className="edu-cgpa-block">
            <div className="cgpa-left">
              <span className="cgpa-value" style={{ color: edu.color }}>{edu.cgpa}</span>
              <span className="cgpa-slash">/10</span>
              <span className="cgpa-label">CGPA</span>
            </div>
            <CgpaStars cgpa={parseFloat(edu.cgpa)} />
          </div>
        )}

        {edu.progress && (
          <div className="edu-progress-section">
            <div className="edu-progress-label">
              <span>Degree Progress</span>
              <span style={{ color: edu.color }}>{edu.progress}%</span>
            </div>
            <ProgressBar value={edu.progress} color={edu.color} inView={inView} delay={0.5 + index * 0.2} />
            <div className="edu-progress-years">
              <span>{edu.year}</span>
              <span style={{ color: edu.color }}>Year {Math.ceil(edu.progress / 33.3)}/3</span>
              <span>{edu.endYear}</span>
            </div>
          </div>
        )}

        <div className="edu-highlights">
          {edu.highlights.map(({ icon, text }) => (
            <span key={text} className="edu-highlight-chip" style={{ '--ec': edu.color, '--ecr': edu.colorRgb }}>
              <span className="chip-icon" style={{ color: edu.color }}>{icon}</span>
              {text}
            </span>
          ))}
        </div>

        <div className="edu-subjects">
          <span className="subjects-label">Key Subjects</span>
          <div className="subjects-wrap">
            {edu.subjects.map(s => (
              <span key={s} className="subject-tag">{s}</span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="tl-spacer" />
    </div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section edu-section" ref={ref}>
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My academic journey and qualifications
        </motion.p>

        <div className="tl-wrapper">

          <div className="tl-line-track">
            <motion.div
              className="tl-line-fill"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id + '-year'}
              className="tl-year-label"
              style={{ top: `${i * 52 + 4}%`, '--ec': edu.color }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.25 }}
            >
              <div className="tl-spine-dot" style={{ background: edu.color }}>
                <HiAcademicCap />
              </div>
              <div className="tl-spine-ring" style={{ borderColor: edu.color }} />
            </motion.div>
          ))}

          {EDUCATION.map((edu, i) => (
            <EduCard
              key={edu.id}
              edu={edu}
              side={i % 2 === 0 ? 'left' : 'right'}
              inView={inView}
              index={i}
            />
          ))}

          <motion.div
            className="tl-cap"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <span>🏁</span>
          </motion.div>

        </div>
      </div>

      <style>{`

        .edu-section {
          background: linear-gradient(180deg, transparent, rgba(108,99,255,0.03), transparent);
        }

        .tl-wrapper {
          position: relative;
          max-width: 960px;
          margin: 0 auto;
          padding: 1rem 0 3rem;
        }

        .tl-line-track {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255,255,255,0.05);
          transform: translateX(-50%);
          overflow: hidden;
          border-radius: 1px;
        }
        .tl-line-fill {
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #6c63ff, #3b82f6, #4ecdc4);
          transform-origin: top;
          border-radius: 1px;
        }

        .tl-year-label {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }
        .tl-spine-dot {
          position: relative;
          z-index: 2;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          color: #fff;
          box-shadow: 0 0 0 4px var(--bg-primary),
                      0 0 20px color-mix(in srgb, var(--ec) 50%, transparent);
        }
        .tl-spine-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1.5px solid;
          opacity: 0.3;
          animation: ringPulse 2.5s ease-in-out infinite;
        }
        @keyframes ringPulse {
          0%,100% { transform: scale(1);   opacity: 0.3; }
          50%      { transform: scale(1.3); opacity: 0.08; }
        }

        .tl-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-bottom: 3rem;
          align-items: center;
        }
        .tl-row.left  .edu-card  { grid-column: 1; margin-right: 3.5rem; }
        .tl-row.left  .tl-spacer { grid-column: 2; }
        .tl-row.right .tl-spacer { grid-column: 1; }
        .tl-row.right .edu-card  { grid-column: 2; margin-left: 3.5rem; }

        .edu-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .edu-card:hover {
          border-color: color-mix(in srgb, var(--ec) 40%, transparent);
          box-shadow: 0 16px 48px color-mix(in srgb, var(--ec) 12%, transparent);
        }

        .edu-card-accent {
          height: 3px;
          width: 100%;
          flex-shrink: 0;
        }

        .edu-card > *:not(.edu-card-accent) {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .edu-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding-top: 1.4rem;
          padding-bottom: 0;
        }
        .edu-emoji-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .edu-emoji { font-size: 1.6rem; line-height: 1; }

        .edu-header-text { flex: 1; min-width: 0; }
        .edu-status-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.45rem;
        }

        .edu-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.2rem 0.7rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .edu-badge.pursuing {
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.28);
          color: #22c55e;
        }
        .edu-badge.completed {
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.28);
          color: #3b82f6;
        }
        .badge-pulse-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: dotPulse 2s ease infinite;
        }
        @keyframes dotPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(.75); }
        }
        .edu-period-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.65rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: 'Fira Code', monospace;
        }

        .edu-degree {
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 0.15rem;
        }
        .edu-short {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--ec);
          font-family: 'Fira Code', monospace;
          letter-spacing: 0.5px;
        }

        .edu-institution-row {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding-top: 1rem;
          padding-bottom: 0;
          border-top: 1px solid var(--border);
          margin-top: 1rem;
        }
        .inst-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .edu-institution {
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .edu-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .edu-desc {
          color: var(--text-secondary);
          font-size: 0.87rem;
          line-height: 1.65;
          padding-top: 0.9rem;
          padding-bottom: 0;
        }

        .edu-cgpa-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          background: rgba(255,255,255,0.03);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin-top: 0.9rem;
        }
        .cgpa-left {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
        }
        .cgpa-value {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
          font-family: 'Fira Code', monospace;
        }
        .cgpa-slash { font-size: 0.85rem; color: var(--text-muted); }
        .cgpa-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .cgpa-stars {
          display: flex;
          gap: 3px;
        }
        .star { font-size: 0.85rem; }
        .star.full  { color: #f59e0b; }
        .star.half  { color: #f59e0b; }
        .star.empty { color: rgba(255,255,255,0.12); }

        .edu-progress-section {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 1rem;
          padding-bottom: 0;
        }
        .edu-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
        }
        .edu-progress-track {
          height: 8px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
        }
        .edu-progress-fill {
          height: 100%;
          border-radius: 4px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .edu-progress-dot {
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          right: -1px;
          opacity: 0.8;
          filter: blur(1px);
        }
        .edu-progress-years {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          font-family: 'Fira Code', monospace;
          color: var(--text-muted);
        }

        .edu-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding-top: 1rem;
          padding-bottom: 0;
        }
        .edu-highlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.28rem 0.75rem;
          background: color-mix(in srgb, var(--ec) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ec) 25%, transparent);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .chip-icon {
          font-size: 0.85rem;
          display: flex;
        }

        .edu-subjects {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 0.9rem;
          padding-bottom: 1.4rem;
        }
        .subjects-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
        }
        .subjects-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .subject-tag {
          padding: 0.2rem 0.65rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: all 0.2s;
        }
        .subject-tag:hover {
          background: rgba(108,99,255,0.1);
          border-color: rgba(108,99,255,0.25);
          color: var(--accent);
        }

        .tl-cap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          font-size: 1.2rem;
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }

        @media (max-width: 768px) {
          .tl-line-track { left: 22px; }
          .tl-year-label { left: 22px; transform: none; }
          .tl-wrapper { padding-left: 0; }

          .tl-row {
            display: block;
            padding-left: 64px;
            margin-bottom: 2rem;
          }
          .tl-row.left  .edu-card,
          .tl-row.right .edu-card {
            grid-column: unset;
            margin-left: 0;
            margin-right: 0;
          }
          .tl-spacer { display: none; }
          .tl-cap { margin-left: 22px; }
        }
        @media (max-width: 480px) {
          .edu-cgpa-block { flex-direction: column; gap: 0.6rem; align-items: flex-start; }
        }
      `}</style>
    </section>
  )
}
