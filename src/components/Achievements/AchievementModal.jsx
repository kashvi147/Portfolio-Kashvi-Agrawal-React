import { AnimatePresence, motion } from "framer-motion";
import "./AchievementModal.css";

function AchievementModal({ open, onClose }) {

  if (!open) return null;

  return (
    <AnimatePresence>

      <motion.div
        className="achievement-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        <motion.div
          className="achievement-dashboard"
          onClick={(e) => e.stopPropagation()}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }}
          transition={{
            duration: .35
          }}
        >

          {/* Header */}

          <div className="dashboard-header">

            <div>

              <p className="dashboard-tag">
                KA-OS v2.0
              </p>

              <h2>
                GitHub Intelligence
              </h2>

            </div>

            <button
              className="close-achievement"
              onClick={onClose}
            >
              ✕
            </button>

          </div>

          {/* Activity Ring */}

          <div className="activity-section">

            <div className="activity-ring">

              <div className="activity-value">
                91%
              </div>

            </div>

            <p className="activity-title">
              Developer Activity Score
            </p>

          </div>

          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-card">

              <span>📁</span>

              <h3>17</h3>

              <p>Repositories</p>

            </div>

            <div className="stat-card">

              <span>⭐</span>

              <h3>42</h3>

              <p>Stars</p>

            </div>

            <div className="stat-card">

              <span>👥</span>

              <h3>12</h3>

              <p>Followers</p>

            </div>

            <div className="stat-card">

              <span>🔥</span>

              <h3>High</h3>

              <p>Activity</p>

            </div>

          </div>

          {/* Latest Repo */}

          <div className="latest-card">

            <p className="small-heading">
              Latest Repository
            </p>

            <h3>
              Portfolio_Kashvi_React
            </h3>

            <span>
              Updated 2 days ago
            </span>

          </div>

          {/* Languages */}

          <div className="language-section">

            <p className="small-heading">
              Technologies
            </p>

            <div className="language-tags">

              <span>React</span>

              <span>Python</span>

              <span>C++</span>

              <span>Arduino</span>

            </div>

          </div>

          <a
            href="https://github.com/kashvi147"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >

            Open GitHub Profile →

          </a>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default AchievementModal;