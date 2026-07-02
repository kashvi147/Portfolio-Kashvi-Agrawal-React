import { motion } from "framer-motion";

function ActivityRing({ value }) {
  const radius = 60;
  const stroke = 8;
  const circumference = 2 * Math.PI * radius;

  const progress = circumference - (value / 100) * circumference;

  return (
    <div className="activity-ring-wrapper">
      <svg width="150" height="150">

        <circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#24313D"
          strokeWidth={stroke}
          fill="none"
        />

        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          stroke="#56CFA2"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: progress }}
          transition={{ duration: 1.5 }}
          transform="rotate(-90 75 75)"
        />

      </svg>

      <div className="activity-value">

        {value}%

      </div>
    </div>
  );
}

export default ActivityRing;