/**
 * Anvayaa Contact Form — Zoho Mail Integration
 * -----------------------------------------------
 * Sends the form payload to the backend proxy at /api/contact.
 * The backend (aaharya-backend.onrender.com) handles Zoho Mail API OAuth
 * so no secrets are ever exposed in this static site.
 *
 * Backend endpoint expected: POST /api/contact
 * Payload: { name, email, phone, subject, message }
 * Response: { success: true } or { success: false, error: "..." }
 */

(function () {
  // ── Config ──────────────────────────────────────────────────────────────────
  // Point this to your deployed backend. For local dev use http://localhost:3000
  const API_BASE =
    typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.BACKEND_URL
      ? SITE_CONFIG.BACKEND_URL
      : "https://aaharya-backend.onrender.com";

  const CONTACT_ENDPOINT = `${API_BASE}/api/contact`;

  // ── DOM refs ─────────────────────────────────────────────────────────────────
  const form       = document.getElementById("contact-form");
  const alertBox   = document.getElementById("contact-alert-box");
  const submitBtn  = form ? form.querySelector('button[type="submit"]') : null;

  if (!form) return; // safety guard if loaded on another page

  // ── Utility: show alert ──────────────────────────────────────────────────────
  function showAlert(type, message) {
    alertBox.className =
      type === "success"
        ? "mb-4 p-3 rounded-3 bg-success-subtle text-success small border border-success-subtle"
        : "mb-4 p-3 rounded-3 bg-danger-subtle text-danger small border border-danger-subtle";
    alertBox.innerHTML =
      type === "success"
        ? `<i class="bi bi-check-circle-fill me-2"></i>${message}`
        : `<i class="bi bi-exclamation-triangle-fill me-2"></i>${message}`;
    alertBox.style.display = "block";
    alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ── Utility: toggle button state ─────────────────────────────────────────────
  function setSubmitting(isSubmitting) {
    if (!submitBtn) return;
    if (isSubmitting) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Transmitting…';
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="bi bi-send-fill me-2"></i>Transmit Inquiry to Concierge';
    }
  }

  // ── Form submit handler ───────────────────────────────────────────────────────
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Hide previous alerts
    alertBox.style.display = "none";

    // Gather values
    const name    = document.getElementById("contact-name")?.value.trim();
    const email   = document.getElementById("contact-email")?.value.trim();
    const phone   = document.getElementById("contact-phone")?.value.trim() || "";
    const subject = document.getElementById("contact-subject")?.value || "";
    const message = document.getElementById("contact-message")?.value.trim();

    // Client-side validation
    if (!name || !email || !message) {
      showAlert("error", "Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showAlert(
          "success",
          "Thank you! Your inquiry has been transmitted to our concierge desk. We typically respond within 24 business hours."
        );
        form.reset();
      } else {
        throw new Error(data.error || "Server error. Please try again.");
      }
    } catch (err) {
      console.error("[Anvayaa Contact] Submission error:", err);
      showAlert(
        "error",
        err.message === "Failed to fetch"
          ? "Unable to reach our server. Please try again later or email us directly at support@anvayaa.store."
          : err.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  });
})();
