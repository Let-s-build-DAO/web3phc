import React from "react";
import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white pt-32 pb-24 px-4 relative">
      <SEO
        title="Privacy Policy"
        url="/privacy"
        description="Privacy Policy for Web3PHC."
        type="website"
      />
      
      {/* Background Noise & Glow */}
      <div className="fixed inset-0 z-0 bg-noise opacity-5 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="custom-container max-w-3xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide text-white mb-6">
            Privacy <span className="text-brand-primary">Policy</span>
          </h1>
          <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-8 text-zinc-300 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              At Web3PHC, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you interact with our platform. By using our services, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We practice data minimization. When you use third-party authentication services on our platform (such as <strong>"Sign in with X"</strong>), we request and store only the absolute minimum data required to verify your identity.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong>Authentication IDs:</strong> We collect only your unique provider ID (e.g., your X/Twitter ID string) to maintain your login session and verify your account.</li>
              <li><strong>No Personal Data:</strong> We do NOT scrape, request, or store your email address, real name, friend lists, or timeline data from these providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>
              The minimal authentication ID we collect is used solely to provide access to secure areas of our platform, manage your sessions, and ensure the basic functionality of your account. We do not use this data for marketing, profiling, or tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your authentication data to outside parties. Your information is kept strictly confidential and is only shared when legally required to comply with law enforcement requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:hello@lbdao.xyz" className="text-brand-primary hover:underline">hello@lbdao.xyz</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
