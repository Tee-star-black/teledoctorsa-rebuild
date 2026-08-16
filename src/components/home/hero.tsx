"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  HeartPulse,
} from "lucide-react";

import {
  easings,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

export function Hero() {
  return (
    <section className="home-hero hero-background-layout">
      {/* Full background image */}
      <motion.div
        className="hero-background-image"
        initial={{
          opacity: 0,
          scale: 1.04,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
          ease: easings.premium,
        }}
      >
        <Image
          src="/images/home/hero-clinician.png"
          alt="Healthcare professional reviewing connected patient information"
          fill
          priority
          sizes="100vw"
          className="hero-main-image"
        />
      </motion.div>

      {/* Dark gradient for text readability */}
      <div className="hero-background-overlay" />

      {/* Main content */}
      <div className="hero-background-content">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="hero-eyebrow"
          >
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

          <motion.p
            variants={fadeUp}
            className="hero-description"
          >
            TeleDoctorSA helps healthcare professionals connect
            virtual care, ECG247, remote monitoring and
            longitudinal patient information into one continuous
            care experience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="hero-actions"
          >
            <Link
              href="/contact?type=demo"
              className="primary-button"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/platform"
              className="secondary-button"
            >
              Explore the Platform
              <ChevronRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hero-capabilities"
          >
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

      {/* Floating ECG card */}
      <motion.div
        className="patient-status-card hero-floating-card"
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.9,
          duration: 0.7,
          ease: easings.premium,
        }}
      >
        <div className="status-top">
          <div className="status-live">
            <span />
            Patient connected
          </div>

          <HeartPulse size={19} />
        </div>

        <div className="status-reading">
          <div>
            <small>Heart rate</small>

            <strong>
              72
              <span>bpm</span>
            </strong>
          </div>

          <Activity size={32} />
        </div>

        <div className="ecg-chart">
          <svg
            viewBox="0 0 400 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="
                M0 40
                H55
                L70 40
                L82 18
                L96 63
                L113 5
                L132 67
                L150 40
                H220
                L235 40
                L247 21
                L260 58
                L277 8
                L295 63
                L313 40
                H400
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1.1,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>

        <div className="status-footer">
          <span>Monitoring active</span>
          <strong>ECG247</strong>
        </div>
      </motion.div>

      <motion.div
        className="hero-photo-label hero-background-label"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 0.7,
        }}
      >
        <span>01</span>
        Care that continues
      </motion.div>
    </section>
  );
}