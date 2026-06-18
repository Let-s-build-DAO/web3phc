import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { submitSpeakerApplication } from "../lib/speakerSubmit";

const PARTICIPATION = [
  "Speaker",
  "Mentor",
  "Workshop Facilitator",
  "Panelist",
  "Judge",
  "Founder Roundtable Participant",
];

const EXPERTISE = [
  "AI & Autonomous Systems",
  "AI-Assisted Development",
  "Blockchain Infrastructure",
  "Smart Contracts",
  "DeFi",
  "Stablecoins & Payments",
  "Real World Assets (RWAs)",
  "Consumer Crypto",
  "Gaming",
  "Product Design",
  "Startup Building",
  "Fundraising",
  "Growth & Marketing",
  "Community Building",
  "Creator Economy",
  "Research",
  "Other",
];

const DAYS = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6 (Summit)"];

const ROLE_EXAMPLES =
  "e.g. Founder, Developer Advocate, Investor, Researcher, Product Designer, Community Lead, Engineer, Creator";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  role: "",
  organization: "",
  website: "",
  x_profile: "",
  linkedin: "",
  github: "",
  participation: [],
  expertise: [],
  background: "",
  experience: "",
  spoken_before: "",
  previous_links: "",
  topic: "",
  topic_importance: "",
  practical_outcomes: "",
  mentorship_help: "",
  common_mistakes: "",
  availability: [],
  attendance: "",
  why_contribute: "",
};

// ─── Small presentational helpers ───
const Section = ({ title, children }) => (
  <fieldset className="border-t border-white/10 pt-8 mt-8 first:border-0 first:pt-0 first:mt-0">
    <legend className="sr-only">{title}</legend>
    <h2 className="font-['Righteous'] text-xl md:text-2xl uppercase tracking-wide text-brand-primary mb-6">
      {title}
    </h2>
    <div className="space-y-5">{children}</div>
  </fieldset>
);

const Field = ({ label, hint, required, children }) => (
  <label className="block">
    <span className="block text-sm font-medium text-white mb-1.5">
      {label} {required && <span className="text-brand-primary">*</span>}
      {!required && <span className="text-zinc-600 text-xs font-normal">(optional)</span>}
    </span>
    {hint && <span className="block text-xs text-zinc-500 mb-2 leading-relaxed">{hint}</span>}
    {children}
  </label>
);

const inputCls =
  "w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary/40 transition-colors";

const SpeakerApplication = () => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [hp, setHp] = useState(""); // honeypot — bots fill this, humans never see it

  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const toggle = (name, value) =>
    setForm((f) => {
      const arr = f[name];
      return {
        ...f,
        [name]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hp) {
      setSubmitted(true); // silently swallow bot submissions
      return;
    }
    if (form.participation.length === 0) {
      setError("Please select at least one participation type.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await submitSpeakerApplication(form);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const Pill = ({ active, onClick, children }) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
        active
          ? "bg-brand-primary text-black border-brand-primary"
          : "bg-[#111] text-zinc-300 border-white/10 hover:border-brand-primary/50"
      }`}
    >
      {children}
    </button>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4 pt-24 pb-16">
        <SEO title="Application Received" url="/speakers" description="Re:Config 2026 speaker & mentor application." />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center bg-[#0a0a0a] border-2 border-brand-primary/40 rounded-3xl p-10"
        >
          <div className="text-5xl mb-4">🎤</div>
          <h1 className="font-['Righteous'] text-3xl uppercase tracking-wide text-white mb-3">
            Application received
          </h1>
          <p className="text-zinc-400 leading-relaxed">
            Thanks for applying to contribute to Re:Config 2026. Our team will review your
            submission and reach out via email if there&apos;s a fit.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 sm:pt-32 pb-20 px-4">
      <SEO
        title="Speaker & Mentor Application"
        url="/speakers"
        description="Apply to speak, mentor, or facilitate at Re:Config 2026 in Port Harcourt, Nigeria."
        type="website"
      />

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-brand-primary text-sm tracking-widest uppercase mb-3 font-bold">
            {"// Re:Config 2026"}
          </p>
          <h1 className="font-['Righteous'] text-3xl md:text-5xl uppercase tracking-wide text-white leading-tight">
            Speaker & Mentor Application
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            Share your expertise with Africa&apos;s most active Web3 builder base. Tell us how
            you&apos;d like to contribute.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 sm:p-10"
        >
          {/* Honeypot — hidden from humans, catches bots */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
          />

          {/* Basic Information */}
          <Section title="Basic Information">
            <Field label="Full Name" required>
              <input
                className={inputCls}
                name="fullName"
                value={form.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                required
              />
            </Field>
            <Field label="Email Address" required>
              <input
                type="email"
                className={inputCls}
                name="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                required
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                type="tel"
                className={inputCls}
                name="phone"
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                required
              />
            </Field>
            <Field label="City & Country" required>
              <input
                className={inputCls}
                name="location"
                value={form.location}
                onChange={(e) => setField("location", e.target.value)}
                required
              />
            </Field>
            <Field label="Current Role / Title" hint={ROLE_EXAMPLES} required>
              <input
                className={inputCls}
                name="role"
                value={form.role}
                onChange={(e) => setField("role", e.target.value)}
                required
              />
            </Field>
            <Field
              label="Organization / Company"
              hint="What organization, startup, protocol, community, or initiative are you currently associated with?"
              required
            >
              <input
                className={inputCls}
                name="organization"
                value={form.organization}
                onChange={(e) => setField("organization", e.target.value)}
                required
              />
            </Field>
            <Field label="Website / Portfolio">
              <input
                type="url"
                className={inputCls}
                name="website"
                placeholder="https://"
                value={form.website}
                onChange={(e) => setField("website", e.target.value)}
              />
            </Field>
          </Section>

          {/* Social Profiles */}
          <Section title="Social Profiles">
            <Field label="X (Twitter)">
              <input
                className={inputCls}
                name="x_profile"
                placeholder="@handle or URL"
                value={form.x_profile}
                onChange={(e) => setField("x_profile", e.target.value)}
              />
            </Field>
            <Field label="LinkedIn">
              <input
                className={inputCls}
                name="linkedin"
                placeholder="Profile URL"
                value={form.linkedin}
                onChange={(e) => setField("linkedin", e.target.value)}
              />
            </Field>
            <Field label="GitHub">
              <input
                className={inputCls}
                name="github"
                placeholder="Profile URL (if applicable)"
                value={form.github}
                onChange={(e) => setField("github", e.target.value)}
              />
            </Field>
          </Section>

          {/* Participation Type */}
          <Section title="Participation Type">
            <p className="text-sm text-zinc-400 -mt-2">How would you like to contribute? (Select all that apply)</p>
            <div className="flex flex-wrap gap-2">
              {PARTICIPATION.map((p) => (
                <Pill key={p} active={form.participation.includes(p)} onClick={() => toggle("participation", p)}>
                  {p}
                </Pill>
              ))}
            </div>
          </Section>

          {/* Areas of Expertise */}
          <Section title="Areas of Expertise">
            <p className="text-sm text-zinc-400 -mt-2">
              Which topics are you most comfortable speaking or mentoring on? (Select multiple)
            </p>
            <div className="flex flex-wrap gap-2">
              {EXPERTISE.map((x) => (
                <Pill key={x} active={form.expertise.includes(x)} onClick={() => toggle("expertise", x)}>
                  {x}
                </Pill>
              ))}
            </div>
          </Section>

          {/* Professional Background */}
          <Section title="Professional Background">
            <Field
              label="Briefly tell us about yourself"
              hint="Who are you, what do you do, and what are you currently building or working on?"
              required
            >
              <textarea
                rows={4}
                className={inputCls}
                name="background"
                value={form.background}
                onChange={(e) => setField("background", e.target.value)}
                required
              />
            </Field>
            <Field
              label="Experience"
              hint="What projects, companies, communities, or initiatives have you contributed to? Links are welcome."
            >
              <textarea
                rows={4}
                className={inputCls}
                name="experience"
                value={form.experience}
                onChange={(e) => setField("experience", e.target.value)}
              />
            </Field>
            <Field label="Have you spoken, mentored, or taught before?" required>
              <div className="flex gap-2">
                {["Yes", "No"].map((opt) => (
                  <Pill key={opt} active={form.spoken_before === opt} onClick={() => setField("spoken_before", opt)}>
                    {opt}
                  </Pill>
                ))}
              </div>
            </Field>
            {form.spoken_before === "Yes" && (
              <Field
                label="Share links to previous talks, podcasts, articles, workshops, or events"
              >
                <textarea
                  rows={3}
                  className={inputCls}
                  name="previous_links"
                  value={form.previous_links}
                  onChange={(e) => setField("previous_links", e.target.value)}
                />
              </Field>
            )}
          </Section>

          {/* Contribution to Re:Config */}
          <Section title="Contribution to Re:Config">
            <Field label="What topic would you like to speak about or mentor builders on?" required>
              <textarea
                rows={3}
                className={inputCls}
                name="topic"
                value={form.topic}
                onChange={(e) => setField("topic", e.target.value)}
                required
              />
            </Field>
            <Field label="Why is this topic important right now?" required>
              <textarea
                rows={3}
                className={inputCls}
                name="topic_importance"
                value={form.topic_importance}
                onChange={(e) => setField("topic_importance", e.target.value)}
                required
              />
            </Field>
            <Field
              label="What practical outcomes should participants leave with after your session?"
              hint="Re:Config prioritizes actionable knowledge."
              required
            >
              <textarea
                rows={3}
                className={inputCls}
                name="practical_outcomes"
                value={form.practical_outcomes}
                onChange={(e) => setField("practical_outcomes", e.target.value)}
                required
              />
            </Field>
          </Section>

          {/* Mentorship Quality */}
          <Section title="Mentorship Quality">
            <Field label="How do you typically help founders or builders when they are stuck?">
              <textarea
                rows={3}
                className={inputCls}
                name="mentorship_help"
                value={form.mentorship_help}
                onChange={(e) => setField("mentorship_help", e.target.value)}
              />
            </Field>
            <Field label="What common mistakes do early-stage founders or builders make that more people should avoid?">
              <textarea
                rows={3}
                className={inputCls}
                name="common_mistakes"
                value={form.common_mistakes}
                onChange={(e) => setField("common_mistakes", e.target.value)}
              />
            </Field>
          </Section>

          {/* Availability */}
          <Section title="Availability">
            <Field label="Which days are you available?" required>
              <div className="flex flex-wrap gap-2">
                {DAYS.map((d) => (
                  <Pill key={d} active={form.availability.includes(d)} onClick={() => toggle("availability", d)}>
                    {d}
                  </Pill>
                ))}
              </div>
            </Field>
            <Field label="Will you be attending physically or virtually?" required>
              <div className="flex gap-2">
                {["Physical", "Virtual"].map((opt) => (
                  <Pill key={opt} active={form.attendance === opt} onClick={() => setField("attendance", opt)}>
                    {opt}
                  </Pill>
                ))}
              </div>
            </Field>
          </Section>

          {/* Final Question */}
          <Section title="Final Question">
            <Field label="Why would you like to contribute to Re:Config 2026?" required>
              <textarea
                rows={4}
                className={inputCls}
                name="why_contribute"
                value={form.why_contribute}
                onChange={(e) => setField("why_contribute", e.target.value)}
                required
              />
            </Field>
          </Section>

          {error && <p className="mt-6 text-sm text-red-400 font-medium">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full py-4 bg-brand-primary text-black font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#e55a00] transition-colors disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Submit Application"}
          </button>

          {/* Bottom note */}
          <p className="mt-8 text-sm text-zinc-500 leading-relaxed border-t border-white/10 pt-6">
            Re:Config is designed for people who actively contribute. We value practical
            experience, curiosity, and a willingness to help others more than titles or
            credentials. Whether you&apos;re a founder, operator, researcher, investor, creator,
            or engineer, we welcome diverse perspectives that can help builders grow.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SpeakerApplication;
