/**
 * Speaker & Mentor application submission.
 *
 * Two destinations, both best-effort:
 *   1. Firestore `speakerApplications` collection — a durable record you can read
 *      in the Firebase console (free Spark plan; no Cloud Functions needed).
 *   2. EmailJS — an automated email notification sent straight from the browser
 *      (no server). Configure VITE_EMAILJS_* and design the template recipient/body.
 *
 * Firebase + EmailJS are loaded dynamically so they stay out of the main bundle.
 * Submission succeeds if EITHER destination accepts it; it only fails if both do.
 */

// Public EmailJS client config (safe to ship). Env vars override for staging.
const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export const emailjsConfigured = Boolean(
  EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey
);

const asText = (v) => (Array.isArray(v) ? v.join(", ") : v ?? "");

async function sendEmail(data) {
  if (!emailjsConfigured) return false;
  // Flatten arrays so they read nicely in the email template.
  const template_params = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, asText(v)])
  );
  template_params.submitted_at = new Date().toLocaleString();

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS.serviceId,
      template_id: EMAILJS.templateId,
      user_id: EMAILJS.publicKey,
      template_params,
    }),
  });
  if (!res.ok) throw new Error(`Email failed (${res.status})`);
  return true;
}

async function storeInFirestore(data) {
  const [{ app }, fs] = await Promise.all([
    import("../config/firebase"),
    import("firebase/firestore"),
  ]);
  const db = fs.getFirestore(app);
  await fs.addDoc(fs.collection(db, "speakerApplications"), {
    ...data,
    createdAt: fs.serverTimestamp(),
  });
  return true;
}

export async function submitSpeakerApplication(data) {
  let stored = false;
  let emailed = false;
  let lastError = null;

  try {
    stored = await storeInFirestore(data);
  } catch (err) {
    lastError = err;
  }

  try {
    emailed = await sendEmail(data);
  } catch (err) {
    lastError = err;
  }

  if (!stored && !emailed) {
    throw new Error(lastError?.message || "Could not submit your application. Please try again.");
  }
  return { stored, emailed };
}
