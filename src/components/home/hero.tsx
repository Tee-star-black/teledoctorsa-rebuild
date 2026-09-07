"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Activity, ArrowRight, HeartPulse } from "lucide-react";

import { easings, fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="home-hero hero-background-layout">
      <motion.div className="hero-background-image" initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easings.premium }}>
        <Image src="/images/home/hero-clinician.png" alt="Healthcare professional reviewing connected patient information" fill priority sizes="100vw" className="hero-main-image" />
      </motion.div>

      <div className="hero-background-overlay" />

      <div className="hero-background-content">
        <motion.div className="hero-content" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="hero-eyebrow"><span className="eyebrow-line" />Connected clinical technology</motion.div>
          <motion.h1 variants={fadeUp}>One connected care environment for modern medical practices.</motion.h1>
          <motion.p variants={fadeUp} className="hero-description">Bring virtual care, ECG247 monitoring, patient records and follow-up workflows into one clinical platform designed around the way care teams work.</motion.p>

          <motion.div variants={fadeUp} className="hero-actions">
            <Link href="/demo" className="primary-button">Book a Demo <ArrowRight size={18} /></Link>
            <Link href="/services" className="secondary-button">Explore the Platform <ArrowRight size={18} /></Link>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-trust-anchor">
            <span>Virtual care</span>
            <span>ECG247 workflows</span>
            <span>Electronic health records</span>
            <span>Remote monitoring</span>
            <div className="hero-trust-logo" aria-label="Cloud technology">
              <Image src="/images/home/GCP.png" alt="Google Cloud" width={170} height={54} sizes="170px" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="patient-status-card hero-floating-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.7, ease: easings.premium }}>
        <div className="status-top"><div className="status-live"><span />ECG247 workflow</div><HeartPulse size={19} /></div>
        <div className="status-reading"><div><small>Illustrative rhythm view</small><strong>72<span>bpm</span></strong></div><Activity size={32} /></div>
        <div className="ecg-chart">
          <svg viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">
            <motion.path d="M0 40 H55 L70 40 L82 18 L96 63 L113 5 L132 67 L150 40 H220 L235 40 L247 21 L260 58 L277 8 L295 63 L313 40 H400" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" initial={{ pathLength: 0 }} animate={{ pathLength: [0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
          </svg>
        </div>
        <div className="status-footer"><span>Extended monitoring</span><strong>Clinical review</strong></div>
      </motion.div>
    </section>
  );
}
