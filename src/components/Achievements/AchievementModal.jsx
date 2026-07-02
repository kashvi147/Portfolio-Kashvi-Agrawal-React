import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./AchievementModal.css";
import useGithubProfile from "../../hooks/useGithubProfile";
import ActivityRing from "./ActivityRing";

function AchievementModal({ open, onClose }) {
  const { profile, loading } = useGithubProfile();

  if (!open) return null;
  if (loading) {
  return (
    <div className="achievement-overlay">
      <div className="achievement-dashboard">
        <h2>Loading GitHub Intelligence...</h2>
      </div>
    </div>
  );
}

if (!profile) {
  return (
    <div className="achievement-overlay">
      <div className="achievement-dashboard">
        Failed to load GitHub profile.
      </div>
    </div>
  );
}

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

           <ActivityRing
  value={profile.activityScore}
/>

            <p className="activity-title">
              Developer Activity Score
            </p>

          </div>

          {/* Stats */}

          <div className="stats-grid">

            <div className="stat-card">

              <span>📁</span>

              <h3>{profile.public_repos}</h3>

              <p>Repositories</p>

            </div>

            <div className="stat-card">

              <span>⭐</span>

              <h3>{profile.totalStars}</h3>

              <p>Stars</p>

            </div>

            <div className="stat-card">

              <span>👥</span>

              <h3>{profile.followers}</h3>

              <p>Followers</p>

            </div>

            <div className="stat-card">
🍴

<h3>{profile.totalForks}</h3>

<p>Forks</p>

            </div>

          </div>

          {/* Latest Repo */}

          <div className="latest-card">

            <p className="small-heading">
              Latest Repository
            </p>

            <h3>
              {profile.latestRepo.name}
            </h3>

            <span>
              {new Date(profile.latestRepo.updated_at).toLocaleDateString()}
            </span>

          </div>

          {/* Languages */}

          <div className="language-section">

            <p className="small-heading">
              Technologies
            </p>

            <div className="language-tags">

              {profile.languages.map((lang) => (

  <span key={lang.name}>
    {lang.name}
  </span>

))}

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