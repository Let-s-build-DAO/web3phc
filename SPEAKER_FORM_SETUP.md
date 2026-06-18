# Speaker & Mentor Application — setup

The form lives at **`/speakers`** ([src/pages/SpeakerApplication.jsx](src/pages/SpeakerApplication.jsx)).
On submit it does two things, both best-effort (succeeds if either works):

1. **Saves to Firestore** `speakerApplications` (durable record, free Spark plan).
2. **Emails you** via **EmailJS** (browser-side, no server/Blaze).

Code: [src/lib/speakerSubmit.js](src/lib/speakerSubmit.js).

## 1. Firestore (storage)
1. Firebase console → project **web3phc-5d851** → **Build → Firestore Database → Create database**
   (Production mode is fine — our rules handle access).
2. Deploy the rules in [firestore.rules](firestore.rules):
   ```bash
   npm i -g firebase-tools   # if needed
   firebase login
   firebase deploy --only firestore:rules
   ```
   Rules allow anyone to **create** a well-formed application and **nobody** to read/edit
   from the client. Read submissions in the Firebase console → Firestore → `speakerApplications`.

## 2. EmailJS (the email notification)
1. Create a free account at **emailjs.com**.
2. **Email Services** → add a service (Gmail, Outlook, or custom SMTP) → note the **Service ID**.
3. **Email Templates** → create a template:
   - **To Email:** `hello@lbdao.xyz` (where applications are received).
   - **Reply To:** `{{email}}` (so you can reply straight to the applicant).
   - **Subject / body:** use the variables below, e.g. `New speaker application: {{fullName}}`.
   - Note the **Template ID**.
4. **Account → General** → copy the **Public Key**.
5. Put the three IDs in `.env` (and Netlify env). They're public/safe to expose:
   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```
6. EmailJS → **Account → Security**: add your site domain(s) to **Allowed origins**
   (e.g. `https://web3phc.lbdao.xyz`, `http://localhost:5173`).

### Template variables available
`fullName`, `email`, `phone`, `location`, `role`, `organization`, `website`,
`x_profile`, `linkedin`, `github`, `participation`, `expertise`, `background`,
`experience`, `spoken_before`, `previous_links`, `topic`, `topic_importance`,
`practical_outcomes`, `mentorship_help`, `common_mistakes`, `availability`,
`attendance`, `why_contribute`, `submitted_at`

(Multi-select fields — `participation`, `expertise`, `availability` — arrive as
comma-separated text.)

## Notes
- If EmailJS env vars are unset, submissions still save to Firestore (no email sent).
- If Firestore isn't enabled, submissions still email (if EmailJS is configured).
- Firebase + Firestore SDKs are lazy-loaded, so this doesn't bloat the main bundle.
