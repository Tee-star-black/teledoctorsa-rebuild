"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import {
  easings,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

export function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-left">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="hero-eyebrow">
            <span className="eyebrow-line" />
            Connected healthcare technology
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Extend care
            <br />
            beyond the
            <br />
            <span>consultation.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-description">
            TeleDoctorSA helps healthcare professionals connect virtual care,
            ECG247, remote monitoring and longitudinal patient information into
            one continuous care experience.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <Link href="/contact?type=demo" className="primary-button">
              Book a Demo
              <ArrowRight size={18} />
            </Link>

            <Link href="/platform" className="secondary-button">
              Explore the Platform
              <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-capabilities">
            <div>
              <strong>Virtual care</strong>
              <span>Connect remotely</span>
            </div>
            <div>
              <strong>Remote monitoring</strong>
              <span>Follow patients over time</span>
            </div>
            <div>
              <strong>Connected records</strong>
              <span>Preserve continuity</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: easings.premium }}
      >
        <div className="absolute inset-0 bg-[#351330]" />
        <div className="absolute inset-x-[8%] top-[16%] border border-white/10 bg-[#2d1029] p-5 sm:p-7 lg:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">Connected care overview</span>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg">Patient monitoring session</p>
            </div>
            <div className="grid h-10 w-10 place-items-center bg-[#ee7b3b] text-[#200d1e]">
              <HeartPulse size={20} />
            </div>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            <div className="bg-[#2d1029] py-6 pr-5 sm:px-5">
              <span className="text-xs text-white/40">Heart rate</span>
              <strong className="mt-2 block text-4xl tracking-[-0.05em] text-white">72 <small className="text-[10px] font-medium text-white/35">bpm</small></strong>
            </div>
            <div className="bg-[#2d1029] py-6 sm:px-5">
              <span className="text-xs text-white/40">Monitoring</span>
              <strong className="mt-3 flex items-center gap-2 text-sm text-[#f29662]"><Activity size={16} /> Active</strong>
            </div>
            <div className="bg-[#2d1029] py-6 sm:px-5">
              <span className="text-xs text-white/40">Care status</span>
              <strong className="mt-3 flex items-center gap-2 text-sm text-white"><ShieldCheck size={16} className="text-[#f29662]" /> Connected</strong>
            </div>
          </div>

          <div className="mt-7 border-y border-white/10 py-6">
            <svg viewBox="0 0 500 100" className="h-24 w-full text-[#ee7b3b]" aria-label="Illustrative ECG waveform">
              <motion.path
                d="M0 52 H60 L78 52 L92 26 L108 75 L128 9 L149 78 L169 52 H255 L272 52 L286 30 L301 71 L322 12 L343 76 L364 52 H500"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 p-4">
              <Stethoscope size={18} className="text-[#ee7b3b]" />
              <p className="mt-5 text-sm font-semibold text-white">Clinician connected</p>
              <span className="mt-1 block text-xs leading-5 text-white/40">Virtual care and follow-up in one workflow.</span>
            </div>
            <div className="border border-white/10 p-4">
              <Activity size={18} className="text-[#ee7b3b]" />
              <p className="mt-5 text-sm font-semibold text-white">Longitudinal view</p>
              <span className="mt-1 block text-xs leading-5 text-white/40">Monitoring information stays connected over time.</span>
            </div>
          </div>
        </div>

        <motion.div
          className="hero-photo-label"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <span>01</span>
          Care that continues
        </motion.div>
      </motion.div>
    </section>
  );
}
