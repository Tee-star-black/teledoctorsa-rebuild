"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageCircleMore } from "lucide-react";

const whatsappNumber = "27780336394";
const emailAddress = "info@teledoctorsa.co.za";

export function DemoForm() {
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const practice = String(data.get("practice") || "");
    const role = String(data.get("role") || "");
    const clinicians = String(data.get("clinicians") || "");
    const interests = data.getAll("interests").map(String).join(", ");
    const notes = String(data.get("notes") || "");

    const message = [
      "Hello TeleDoctorSA, I would like to request a platform demo.",
      `Name: ${name}`,
      `Practice / organisation: ${practice}`,
      `Role: ${role}`,
      `Approx. clinical team size: ${clinicians}`,
      `Areas of interest: ${interests || "General platform overview"}`,
      notes ? `Additional context: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (channel === "email") {
      const params = new URLSearchParams({
        subject: `TeleDoctorSA demo request - ${practice || name}`,
        body: message,
      });
      window.location.href = `mailto:${emailAddress}?${params.toString()}`;
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div className="demo-form-grid">
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" required placeholder="Full name" />
        </label>
        <label>
          <span>Practice / organisation</span>
          <input name="practice" autoComplete="organization" required placeholder="Practice or organisation name" />
        </label>
        <label>
          <span>Your role</span>
          <select name="role" required defaultValue="">
            <option value="" disabled>Select role</option>
            <option>Doctor / Specialist</option>
            <option>Nurse / Care Team</option>
            <option>Practice Manager</option>
            <option>Healthcare Executive</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          <span>Clinical team size</span>
          <select name="clinicians" required defaultValue="">
            <option value="" disabled>Select size</option>
            <option>1-5</option>
            <option>6-20</option>
            <option>21-50</option>
            <option>51+</option>
          </select>
        </label>
      </div>

      <fieldset className="demo-interests">
        <legend>What would you like to see?</legend>
        <label><input type="checkbox" name="interests" value="Virtual Care" /> Virtual Care</label>
        <label><input type="checkbox" name="interests" value="ECG247" /> ECG247</label>
        <label><input type="checkbox" name="interests" value="Remote Monitoring" /> Remote Monitoring</label>
        <label><input type="checkbox" name="interests" value="Electronic Health Record" /> EHR</label>
        <label><input type="checkbox" name="interests" value="Practice Workflow" /> Practice Workflow</label>
      </fieldset>

      <label className="demo-notes">
        <span>Anything we should know before the demo?</span>
        <textarea name="notes" rows={5} placeholder="Current workflow, priorities, deployment questions, or anything else useful." />
      </label>

      <div className="demo-channel" aria-label="Preferred contact method">
        <button type="button" className={channel === "whatsapp" ? "is-active" : ""} onClick={() => setChannel("whatsapp")}>
          <MessageCircleMore size={17} /> WhatsApp
        </button>
        <button type="button" className={channel === "email" ? "is-active" : ""} onClick={() => setChannel("email")}>
          <Mail size={17} /> Email
        </button>
      </div>

      <button type="submit" className="demo-submit">
        Prepare demo request <ArrowRight size={18} />
      </button>
      <p className="demo-privacy-note">Your details stay in your browser until you choose to send the prepared WhatsApp or email message.</p>
    </form>
  );
}
