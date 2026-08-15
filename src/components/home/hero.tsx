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
    <section className="home-hero">
      <div className="hero-left">
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

            <span>
              consultation.
            </span>
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
              <strong>
                Virtual care
              </strong>

              <span>
                Connect remotely
              </span>
            </div>

            <div>
              <strong>
                Remote monitoring
              </strong>

              <span>
                Follow patients over time
              </span>
            </div>

            <div>
              <strong>
                Connected records
              </strong>

              <span>
                Preserve continuity
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{
          opacity: 0,
          scale: 1.035,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.25,
          ease: easings.premium,
        }}
      >
        <motion.div
          className="hero-image-scale"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/home/hero-clinician.jpg"
            alt="Healthcare professional reviewing connected patient information"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="hero-main-image"
          />
        </motion.div>

        <div className="hero-photo-tint" />

        <motion.div
          className="patient-status-card"
          initial={{
            opacity: 0,
            x: 35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.8,
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
              <small>
                Heart rate
              </small>

              <strong>
                72
                <span>
                  bpm
                </span>
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
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  delay: 1.1,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          <div className="status-footer">
            <span>
              Monitoring active
            </span>

            <strong>
              ECG247
            </strong>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-label"
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
          <span>
            01
          </span>

          Care that continues
        </motion.div>
      </motion.div>
    </section>
  );
}