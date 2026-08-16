"use client";

import { motion } from "motion/react";
import {
  Activity,
  BellRing,
  FileHeart,
  HeartPulse,
  MonitorSmartphone,
  Stethoscope,
  Video,
} from "lucide-react";

type Variant = "consult" | "ecg" | "ehr" | "pathways";

export function MedicalMotionVisual({ variant }: { variant: Variant }) {
  if (variant === "consult") return <ConsultVisual />;
  if (variant === "ehr") return <EhrVisual />;
  if (variant === "pathways") return <PathwayVisual />;
  return <EcgVisual />;
}

function ConsultVisual() {
  return (
    <div className="clinical-visual consult-visual" aria-hidden="true">
      <div className="diagram-node diagram-node-left">
        <MonitorSmartphone size={22} />
        <strong>Patient</strong>
        <span>Connected</span>
      </div>

      <motion.div
        className="diagram-line diagram-line-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />

      <motion.div
        className="diagram-center"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Video size={28} />
        <strong>Secure consult</strong>
      </motion.div>

      <motion.div
        className="diagram-line diagram-line-right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
      />

      <div className="diagram-node diagram-node-right">
        <Stethoscope size={22} />
        <strong>Clinician</strong>
        <span>Live review</span>
      </div>

      <motion.div
        className="consult-record"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FileHeart size={18} />
        Consultation saved to clinical record
      </motion.div>
    </div>
  );
}

function EcgVisual() {
  return (
    <div className="clinical-visual ecg-visual" aria-hidden="true">
      <div className="ecg-topline">
        <div>
          <span className="live-marker" />
          Monitoring active
        </div>
        <strong>DAY 1 - DAY 7</strong>
      </div>

      <motion.div
        className="ecg-bpm"
        animate={{ scale: [1, 1.045, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartPulse size={28} />
        <strong>72</strong>
        <span>BPM</span>
      </motion.div>

      <div className="ecg-motion-line">
        <svg viewBox="0 0 720 160" preserveAspectRatio="none">
          <path
            className="ecg-base-path"
            d="M0 84 H80 L105 84 L125 52 L145 112 L170 18 L196 126 L222 84 H330 L355 84 L374 57 L396 106 L420 24 L445 121 L470 84 H575 L600 84 L620 56 L642 108 L665 26 L690 119 L720 84"
          />
          <motion.path
            className="ecg-live-path"
            d="M0 84 H80 L105 84 L125 52 L145 112 L170 18 L196 126 L222 84 H330 L355 84 L374 57 L396 106 L420 24 L445 121 L470 84 H575 L600 84 L620 56 L642 108 L665 26 L690 119 L720 84"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0.2, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="rhythm-events">
        {[
          ["AF", "Screening"],
          ["SVT", "Screening"],
          ["PAUSE", "Screening"],
          ["PVC", "Screening"],
        ].map(([label, status], index) => (
          <motion.div
            key={label}
            animate={{ y: [0, index % 2 ? 4 : -4, 0] }}
            transition={{ duration: 3 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <Activity size={16} />
            <strong>{label}</strong>
            <span>{status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EhrVisual() {
  const nodes = [
    ["Vitals", Activity],
    ["ECG", HeartPulse],
    ["History", FileHeart],
    ["Alerts", BellRing],
  ] as const;

  return (
    <div className="clinical-visual ehr-visual" aria-hidden="true">
      <div className="ehr-center">
        <FileHeart size={30} />
        <strong>Clinical record</strong>
        <span>Longitudinal patient view</span>
      </div>

      {nodes.map(([label, Icon], index) => (
        <motion.div
          key={label}
          className={`ehr-node ehr-node-${index + 1}`}
          animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
          transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={19} />
          <strong>{label}</strong>
        </motion.div>
      ))}

      <span className="ehr-connector ehr-connector-1" />
      <span className="ehr-connector ehr-connector-2" />
      <span className="ehr-connector ehr-connector-3" />
      <span className="ehr-connector ehr-connector-4" />
    </div>
  );
}

function PathwayVisual() {
  return (
    <div className="clinical-visual pathway-visual" aria-hidden="true">
      <motion.div
        className="pathway-pulse"
        animate={{ scale: [0.85, 1.25], opacity: [0.5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      <div className="pathway-center">
        <BellRing size={28} />
        <strong>Clinical signal</strong>
        <span>Change requires review</span>
      </div>
      <div className="pathway-strip">
        <span>Patient trend</span>
        <b>→</b>
        <span>Care team</span>
        <b>→</b>
        <span>Review</span>
      </div>
    </div>
  );
}
