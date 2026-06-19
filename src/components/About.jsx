import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap, HiCode, HiLightBulb, HiTrendingUp, HiSparkles } from 'react-icons/hi'
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiTarget } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'

function useCounter(target, duration = 1500, inView = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

const STATS = [
  { icon: <HiCode />,        rawValue: 3,  suffix: '+', label: 'Years Learning',  color: '#6c63ff', bg: 'rgba(108,99,255,0.12)'  },
  { icon: <HiAcademicCap />, rawValue: 71, suffix: '%', label: 'CGPA Score',      color: '#3b82f6', bg: 'rgba(59,130,246,0.12)'  },
  { icon: <HiLightBulb />,   rawValue: 5,  suffix: '+', label: 'Projects Built',  color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  { icon: <HiTrendingUp />,  rawValue: 10, suffix: '+', label: 'Technologies',    color: '#4ecdc4', bg: 'rgba(78,205,196,0.12)'  },
]

function StatCard({ icon, rawValue, suffix, label, color, bg, inView }) {
  const count = useCounter(rawValue, 1400, inView)
  return (
    <motion.div
      className="stat-card glass-card"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="stat-icon-wrap" style={{ background: bg, color }}>
        {icon}
      </div>
      <div className="stat-number" style={{ color }}>
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

function TimelineDot({ color }) {
  return (
    <div className="tl-dot-wrap">
      <div className="tl-dot" style={{ background: color }} />
      <div className="tl-dot-ring" style={{ borderColor: color }} />
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 36 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">

        <motion.h2 className="section-title" {...fadeUp(0)}>About Me</motion.h2>
        <motion.p  className="section-subtitle" {...fadeUp(0.1)}>
          A passionate developer on a journey from code to innovation
        </motion.p>

        <div className="about-row1">

          <motion.div className="profile-card glass-card" {...fadeUp(0.15)}>
            <div className="avatar-wrap">
              <div className="avatar-circle">RM</div>
              <div className="avatar-ring" />
              <div className="status-dot" title="Open to opportunities" />
            </div>

            <div className="profile-info">
              <h3 className="profile-name">Rutik Santosh Mahamulkar</h3>
              <p className="profile-title">
                <HiSparkles className="spark" />
                Full Stack Developer
              </p>
              <div className="profile-meta">
                <span><FiMapPin /> Satara, Maharashtra</span>
                <span><FiCalendar /> 2023 – Present</span>
              </div>
            </div>

          <div className="profile-chips">
              {['React.js', 'Python', 'MySQL', 'Power BI', 'ML (Learning)'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="bio-card glass-card" {...fadeUp(0.25)}>
            <div className="bio-header">
              <FiBookOpen className="bio-icon" />
              <span>My Story</span>
            </div>

            <p className="bio-text">
              Motivated <strong>BCA final-year student</strong> with hands-on experience in
              full-stack web development, database management, and data visualization.
              Passionate about building scalable applications and continuously learning
              new technologies.
            </p>
            <p className="bio-text">
              Aspiring <strong>Python Full Stack Developer</strong> with a long-term goal
              of becoming a <strong>Machine Learning Engineer</strong>. I thrive on turning
              complex problems into elegant, user-friendly solutions that make a real
              difference.
            </p>

            <div className="bio-goals">
              <div className="goal-item">
                <FiTarget className="goal-icon" style={{ color: '#6c63ff' }} />
                <span>Short-term: Land a Full Stack Developer role</span>
              </div>
              <div className="goal-item">
                <FiTarget className="goal-icon" style={{ color: '#a78bfa' }} />
                <span>Long-term: Become a Machine Learning Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="stats-row" {...fadeUp(0.3)}>
          {STATS.map(s => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </motion.div>

        <motion.div className="edu-section" {...fadeUp(0.4)}>
          <div className="edu-section-label">
            <HiAcademicCap className="edu-label-icon" />
            <span>Education</span>
          </div>

          <div className="edu-timeline">

            <motion.div
              className="edu-entry glass-card current"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              whileHover={{ y: -3 }}
            >
              <TimelineDot color="#6c63ff" />

              <div className="edu-entry-body">
                <div className="edu-entry-top">
                  <div className="edu-entry-left">
                    <div className="edu-degree-row">
                      <span className="edu-emoji">🎓</span>
                      <div>
                        <h4 className="edu-degree">Bachelor of Computer Applications (BCA)</h4>
                        <p className="edu-university">Chhatrapati Shivaji Maharaj University, Kolhapur</p>
                      </div>
                    </div>
                  </div>

                  <div className="edu-entry-right">
                    <div className="cgpa-badge">
                      <div className="cgpa-stars">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill key={i} style={{ color: i < 4 ? '#f59e0b' : '#374151', fontSize: '0.65rem' }} />
                        ))}
                      </div>
                      <span className="cgpa-value">7.12</span>
                      <span className="cgpa-label">CGPA</span>
                    </div>
                  </div>
                </div>

                <p className="edu-desc">
                  Focused on full-stack web development, database management, data structures,
                  and algorithms. Actively building projects combining Python, React.js, and MySQL.
                </p>

                <div className="edu-entry-footer">
                  <span className="edu-period-badge">
                    <FiCalendar /> 2023 – 2026
                  </span>
                  <span className="edu-status completed">
                    <FiAward /> Completed 2026
                  </span>
                  <div className="edu-skills">
                    {['Full Stack Dev', 'Databases', 'Data Viz', 'Algorithms'].map(s => (
                      <span key={s} className="edu-skill-chip">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

        {/* vertical connector */}
        <motion.div
              className="tl-connector"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
            />

            <motion.div
              className="edu-entry glass-card"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ y: -3 }}
            >
              <TimelineDot color="#3b82f6" />

              <div className="edu-entry-body">
                <div className="edu-entry-top">
                  <div className="edu-entry-left">
                    <div className="edu-degree-row">
                      <span className="edu-emoji">📚</span>
                      <div>
                        <h4 className="edu-degree">HSC — 12th Standard</h4>
                        <p className="edu-university">Maharashtra State Board</p>
                      </div>
                    </div>
                  </div>

                  <div className="edu-entry-right">
                    <span className="edu-year-pill">2023</span>
                  </div>
                </div>

                <p className="edu-desc">
                  Completed higher secondary education with a focus on science and
                  mathematics, building a strong foundation for computer science studies.
                </p>

                <div className="edu-entry-footer">
                  <span className="edu-period-badge">
                    <FiCalendar /> Completed 2023
                  </span>
                  <span className="edu-status completed">
                    <FiAward /> Completed
                  </span>
                  <div className="edu-skills">
                    {['Science Stream', 'Mathematics', 'Physics'].map(s => (
                      <span key={s} className="edu-skill-chip">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      <style>{`

        .about-section {
          background: linear-gradient(180deg, transparent, rgba(108,99,255,0.03), transparent);
        }

        .about-row1 {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          align-items: stretch;
        }

        .profile-card {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.2rem;
        }
        .avatar-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          flex-shrink: 0;
        }
        .avatar-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: var(--gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.7rem;
          font-weight: 900;
          color: #fff;
          position: relative;
          z-index: 1;
          letter-spacing: 1px;
        }
        .avatar-ring {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          background: var(--gradient) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: ringRotate 5s linear infinite;
          z-index: 0;
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .status-dot {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 14px;
          height: 14px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid var(--bg-primary);
          z-index: 2;
          animation: statusPulse 2.5s ease infinite;
        }
        @keyframes statusPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        .profile-name {
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.3;
        }
        .profile-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent);
        }
        .spark { font-size: 1rem; color: #f59e0b; }
        .profile-meta {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          align-items: center;
        }
        .profile-meta span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        .profile-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          justify-content: center;
        }
        .chip {
          padding: 0.25rem 0.75rem;
          background: rgba(108,99,255,0.12);
          border: 1px solid rgba(108,99,255,0.22);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--accent);
          transition: all 0.2s;
        }
        .chip:hover {
          background: rgba(108,99,255,0.22);
          transform: translateY(-1px);
        }

        .bio-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .bio-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .bio-icon {
          font-size: 1rem;
          color: var(--primary);
        }
        .bio-text {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.8;
        }
        .bio-text strong {
          color: var(--text-primary);
          font-weight: 700;
        }
        .bio-goals {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          border-top: 1px solid var(--border);
          padding-top: 1rem;
        }
        .goal-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .goal-icon {
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .stat-card {
          padding: 1.5rem 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.55rem;
          cursor: default;
        }
        .stat-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }
        .stat-number {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
          font-family: 'Fira Code', monospace;
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.78rem;
          font-weight: 500;
        }

        .edu-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .edu-section-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
        }
        .edu-label-icon {
          font-size: 1rem;
          color: var(--primary);
        }
        .edu-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tl-connector {
          width: 2px;
          height: 28px;
          background: linear-gradient(to bottom, #6c63ff, #3b82f6);
          margin-left: 21px;
          transform-origin: top;
          border-radius: 1px;
        }

        .edu-entry {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          position: relative;
        }
        .edu-entry.current {
          border-color: rgba(108,99,255,0.25);
          background: rgba(108,99,255,0.04);
        }

        .tl-dot-wrap {
          position: relative;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .tl-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          position: relative;
          z-index: 1;
        }
        .tl-dot-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px solid;
          opacity: 0.4;
          animation: dotPulse 2.5s ease infinite;
        }
        @keyframes dotPulse {
          0%,100% { transform: scale(1); opacity: 0.4; }
          50%      { transform: scale(1.3); opacity: 0.15; }
        }

        .edu-entry-body {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .edu-entry-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .edu-entry-left { flex: 1; min-width: 0; }
        .edu-degree-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .edu-emoji {
          font-size: 1.6rem;
          line-height: 1;
          flex-shrink: 0;
        }
        .edu-degree {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.2rem;
        }
        .edu-university {
          color: var(--accent);
          font-size: 0.82rem;
          font-weight: 500;
        }

        .edu-entry-right {
          flex-shrink: 0;
        }

        .cgpa-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.85rem 1.1rem;
          background: linear-gradient(135deg, rgba(245,158,11,0.12), rgba(251,191,36,0.08));
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 14px;
          min-width: 80px;
        }
        .cgpa-stars {
          display: flex;
          gap: 2px;
        }
        .cgpa-value {
          font-size: 1.6rem;
          font-weight: 900;
          color: #f59e0b;
          line-height: 1;
          font-family: 'Fira Code', monospace;
        }
        .cgpa-label {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #d97706;
        }

        .edu-year-pill {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(59,130,246,0.15);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #3b82f6;
          font-family: 'Fira Code', monospace;
        }

        .edu-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.65;
        }

        .edu-entry-footer {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .edu-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.28rem 0.8rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.76rem;
          color: var(--text-muted);
        }
        .edu-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.28rem 0.8rem;
          border-radius: 50px;
          font-size: 0.76rem;
          font-weight: 600;
        }
        .edu-status.pursuing {
          background: rgba(34,197,94,0.1);
          border: 1px solid rgba(34,197,94,0.25);
          color: #22c55e;
        }
        .edu-status.completed {
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          color: #3b82f6;
        }
        .pursuing-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: statusPulse 2s ease infinite;
        }
        .edu-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .edu-skill-chip {
          padding: 0.2rem 0.6rem;
          background: rgba(108,99,255,0.1);
          border: 1px solid rgba(108,99,255,0.18);
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--accent);
        }

        @media (max-width: 960px) {
          .about-row1 {
            grid-template-columns: 1fr;
          }
          .profile-card {
            flex-direction: row;
            text-align: left;
            gap: 1.5rem;
          }
          .profile-chips { justify-content: flex-start; }
          .profile-meta { align-items: flex-start; }
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .edu-entry-top {
            flex-direction: column;
          }
          .cgpa-badge {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            width: 100%;
          }
          .cgpa-value { font-size: 1.2rem; }
        }
        @media (max-width: 480px) {
          .profile-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .profile-chips { justify-content: center; }
          .profile-meta { align-items: center; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .edu-degree-row { flex-direction: column; gap: 0.4rem; }
        }
      `}</style>
    </section>
  )
}
