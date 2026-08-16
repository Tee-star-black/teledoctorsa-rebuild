"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="registration-success" role="status">
        <CheckCircle2 size={28} />
        <div>
          <strong>Registration details captured in this prototype.</strong>
          <p>
            The production submission endpoint still needs to be connected before
            this form can send data to the TeleDoctorSA onboarding team.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="fullName">Full Name &amp; Professional Title</label>
        <input id="fullName" name="fullName" type="text" required autoComplete="name" />
      </div>

      <div className="field-group">
        <label htmlFor="registrationNumber">Council Registration Number (HPCSA / SANC)</label>
        <input id="registrationNumber" name="registrationNumber" type="text" required />
      </div>

      <div className="field-group">
        <label htmlFor="practice">Practice / Facility Name &amp; Location</label>
        <input id="practice" name="practice" type="text" required />
      </div>

      <div className="registration-form-grid">
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field-group">
          <label htmlFor="phone">Direct Phone Number</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="objective">Primary Objective</label>
        <select id="objective" name="objective" defaultValue="" required>
          <option value="" disabled>Select an objective</option>
          <option value="ecg247">Integrate ECG247</option>
          <option value="virtual-consultations">Virtual Consultations</option>
          <option value="remote-ehr">Remote EHR</option>
          <option value="partnership">General Partnership</option>
        </select>
      </div>

      <button type="submit" className="registration-submit">
        Verify &amp; Complete Registration
        <ArrowRight size={18} />
      </button>

      <p className="registration-note">
        Your registration number and practice details should only be submitted
        once the production onboarding endpoint is connected.
      </p>
    </form>
  );
}
