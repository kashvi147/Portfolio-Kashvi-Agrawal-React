import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hackathons from "../../data/hackathons";
import "./HackathonModal.css";

function HackathonModal({ open, onClose }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) =>
      prev === hackathons.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? hackathons.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!open) return null;

  const hackathon = hackathons[current];

  return (
    <AnimatePresence>
      <motion.div
        className="hackathon-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="hackathon-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          transition={{ duration: 0.35 }}
        >
          {/* Header */}

          <div className="hackathon-header">
            <h2>🏆 Hackathon Journey</h2>

            <button
              className="close-btn"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Animated Content */}

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <motion.img
                src={hackathon.image}
                alt={hackathon.title}
                className="hackathon-image"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
              />

              <h3 className="hackathon-title">
                {hackathon.title}
              </h3>

              <p className="hackathon-location">
                {hackathon.location}
              </p>

              <p className="hackathon-description">
                {hackathon.description}
              </p>

              <div className="hackathon-details">
                <div>
                  ⏱ {hackathon.duration}
                </div>

                <div>
                  👥 {hackathon.team}
                </div>

                <div>
                  🏆 {hackathon.achievement}
                </div>
              </div>

              <div className="hackathon-tech">
                {hackathon.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}

          <div className="hackathon-navigation">
            <button onClick={previous}>
              ←
            </button>

            <div className="hackathon-dots">
              {hackathons.map((_, index) => (
                <motion.span
                  key={`dot-${index}`}
                  className={
                    current === index
                      ? "dot active"
                      : "dot"
                  }
                  animate={{
                    scale: current === index ? 1.4 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />
              ))}
            </div>

            <button onClick={next}>
              →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HackathonModal;