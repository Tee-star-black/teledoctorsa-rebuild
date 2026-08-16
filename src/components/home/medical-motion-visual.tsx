"use client";

import { motion } from "motion/react";
import {
  Activity,
  BellRing,
  Droplets,
  HeartPulse,
  LineChart,
  MonitorSmartphone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

type MedicalMotionVisualProps = {
  variant: "ecg" | "monitoring" | "chronic" | "alerts";
};

const orbitTransition = {
  duration: 12,
  repeat: Infinity,
  ease: "linear" as const,
};

export function MedicalMotionVisual({
  variant,
}: MedicalMotionVisualProps) {
  if (variant === "ecg") {
    return <EcgVisual />;
  }

  if (variant === "monitoring") {
    return <MonitoringVisual />;
  }

  if (variant === "chronic") {
    return <ChronicCareVisual />;
  }

  return <AlertVisual />;
}

/* =========================================
   ECG
========================================= */

function EcgVisual() {
  return (
    <div
      className="medical-motion medical-motion-ecg"
      aria-hidden="true"
    >
      <div className="medical-grid" />

      <motion.div
        className="medical-pulse-ring medical-pulse-ring-one"
        animate={{
          scale: [0.9, 1.18, 0.9],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="medical-pulse-ring medical-pulse-ring-two"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.1, 0.35, 0.1],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      <motion.div
        className="medical-center-node"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeartPulse size={38} strokeWidth={1.7} />

        <span>72</span>
        <small>BPM</small>
      </motion.div>

      <div className="medical-ecg-line">
        <svg
          viewBox="0 0 700 180"
          preserveAspectRatio="none"
        >
          <path
            className="medical-ecg-track"
            d="
              M0 90
              H80
              L110 90
              L130 60
              L155 125
              L185 20
              L215 145
              L245 90
              H345
              L375 90
              L395 65
              L420 120
              L450 28
              L480 140
              L510 90
              H700
            "
          />

          <motion.path
            className="medical-ecg-active"
            d="
              M0 90
              H80
              L110 90
              L130 60
              L155 125
              L185 20
              L215 145
              L245 90
              H345
              L375 90
              L395 65
              L420 120
              L450 28
              L480 140
              L510 90
              H700
            "
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              times: [0, 0.8, 1],
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <motion.div
        className="medical-orbit medical-orbit-one"
        animate={{ rotate: 360 }}
        transition={orbitTransition}
      >
        <span className="medical-orbit-icon medical-orbit-icon-a">
          <Activity size={18} />
        </span>

        <span className="medical-orbit-icon medical-orbit-icon-b">
          <LineChart size={18} />
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================
   REMOTE MONITORING
========================================= */

function MonitoringVisual() {
  const bars = [38, 55, 47, 68, 62, 78, 72];

  return (
    <div
      className="medical-motion medical-motion-monitoring"
      aria-hidden="true"
    >
      <div className="medical-grid" />

      <div className="monitoring-device">
        <div className="monitoring-device-header">
          <div>
            <small>Patient monitoring</small>
            <strong>7 day trend</strong>
          </div>

          <motion.span
            className="monitoring-live-dot"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="monitoring-bars">
          {bars.map((height, index) => (
            <motion.span
              key={index}
              style={{ height: `${height}%` }}
              initial={{
                scaleY: 0,
                transformOrigin: "bottom",
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
            />
          ))}
        </div>

        <div className="monitoring-metrics">
          <div>
            <small>Heart rate</small>
            <strong>72 bpm</strong>
          </div>

          <div>
            <small>Trend</small>
            <strong>Stable</strong>
          </div>
        </div>
      </div>

      <motion.div
        className="monitoring-floating-card monitoring-floating-card-one"
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <HeartPulse size={20} />

        <div>
          <strong>72 BPM</strong>
          <small>Heart rate</small>
        </div>
      </motion.div>

      <motion.div
        className="monitoring-floating-card monitoring-floating-card-two"
        animate={{
          y: [7, -7, 7],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MonitorSmartphone size={20} />

        <div>
          <strong>Connected</strong>
          <small>Patient device</small>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================
   CHRONIC CARE
========================================= */

function ChronicCareVisual() {
  return (
    <div
      className="medical-motion medical-motion-chronic"
      aria-hidden="true"
    >
      <svg
        className="care-network-lines"
        viewBox="0 0 600 600"
      >
        <motion.path
          d="M300 300 L155 155"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.path
          d="M300 300 L445 150"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        />

        <motion.path
          d="M300 300 L470 400"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        />

        <motion.path
          d="M300 300 L140 420"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.45,
          }}
        />
      </svg>

      <motion.div
        className="care-network-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Stethoscope size={30} />

        <strong>Patient</strong>

        <small>
          Longitudinal care
        </small>
      </motion.div>

      <FloatingCareNode
        className="care-node-heart"
        icon={<HeartPulse size={20} />}
        title="Cardiac"
        label="72 BPM"
        delay={0}
      />

      <FloatingCareNode
        className="care-node-glucose"
        icon={<Droplets size={20} />}
        title="Chronic"
        label="Monitoring"
        delay={0.5}
      />

      <FloatingCareNode
        className="care-node-alert"
        icon={<BellRing size={20} />}
        title="Alerts"
        label="Clinical review"
        delay={1}
      />

      <FloatingCareNode
        className="care-node-record"
        icon={<ShieldCheck size={20} />}
        title="History"
        label="Continuous"
        delay={1.5}
      />
    </div>
  );
}

function FloatingCareNode({
  className,
  icon,
  title,
  label,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`care-network-node ${className}`}
      animate={{
        y: [-6, 6, -6],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span>{icon}</span>

      <div>
        <strong>{title}</strong>
        <small>{label}</small>
      </div>
    </motion.div>
  );
}

/* =========================================
   ALERTS
========================================= */

function AlertVisual() {
  return (
    <div
      className="medical-motion medical-motion-alert"
      aria-hidden="true"
    >
      <motion.div
        className="alert-ring alert-ring-one"
        animate={{
          scale: [0.7, 1.5],
          opacity: [0.65, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="alert-ring alert-ring-two"
        animate={{
          scale: [0.7, 1.5],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          delay: 0.7,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="alert-center"
        animate={{
          rotate: [0, -5, 5, -3, 3, 0],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <BellRing size={35} />

        <span>1</span>
      </motion.div>

      <motion.div
        className="alert-card"
        animate={{
          y: [6, -6, 6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="alert-card-indicator" />

        <div>
          <small>Clinical signal</small>

          <strong>
            Change from baseline
          </strong>

          <p>
            Patient flagged for review
          </p>
        </div>
      </motion.div>
    </div>
  );
}