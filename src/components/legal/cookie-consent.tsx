"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./cookie-consent.module.css";

type ConsentState = "accepted" | "essential-only";

const STORAGE_KEY = "tdsa-cookie-consent-v1";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!saved);
  }, []);

  function saveConsent(value: ConsentState) {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(
      new CustomEvent("tdsa-cookie-consent", { detail: { value } }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className={styles.banner} aria-label="Cookie preferences">
      <div className={styles.copy}>
        <strong>Privacy preferences</strong>
        <p>
          We use essential browser storage to remember your preferences. Any
          future non-essential analytics or marketing technologies should only
          be enabled in line with your consent choices.
        </p>
        <Link href="/cookies">Read the Cookie Policy</Link>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={() => saveConsent("essential-only")}>
          Essential only
        </button>
        <button
          type="button"
          className={styles.primary}
          onClick={() => saveConsent("accepted")}
        >
          Accept all
        </button>
      </div>
    </aside>
  );
}
