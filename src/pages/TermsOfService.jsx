import React from "react";
import SEO from "../components/SEO";

const TermsOfService = () => {
  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white pt-32 pb-24 px-4 relative">
      <SEO
        title="Terms of Service"
        url="/terms"
        description="Terms of Service for Web3PHC."
        type="website"
      />
      
      {/* Background Noise & Glow */}
      <div className="fixed inset-0 z-0 bg-noise opacity-5 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="custom-container max-w-3xl mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide text-white mb-6">
            Terms of <span className="text-brand-primary">Service</span>
          </h1>
          <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-8 text-zinc-300 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Web3PHC website and platform, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of the Platform</h2>
            <p>
              Web3PHC provides a collaborative ecosystem for builders, creators, and startups. You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Authentication and Accounts</h2>
            <p>
              When you authenticate using third-party services (such as "Sign in with X/Twitter"), you authorize us to access basic identifier information required to verify your identity. You are responsible for maintaining the security of your third-party accounts used to access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              The content, design, and structure of the Web3PHC platform are owned by or licensed to us. You may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties, either express or implied. We do not guarantee continuous, uninterrupted, or secure access to our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes by updating the date at the top of this document. Continued use of the platform after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
