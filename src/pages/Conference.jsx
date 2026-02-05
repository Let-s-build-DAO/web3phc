import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { FaLongArrowAltRight, FaCalendarAlt } from "react-icons/fa";

const CATEGORIES = [
  { title: "Smart Contract Security Tools & ID Verification DApps", focus: "Ensuring security in smart contracts and identity verification.", examples: "Security auditing tools, KYC platforms for decentralized identity solutions." },
  { title: "Real World Assets (RWA) & Decentralized Finance (DeFi)", focus: "Tokenizing physical assets and enhancing financial inclusion.", examples: "Asset-backed tokens, decentralized lending platforms, fractional ownership solutions." },
  { title: "Educational DApps & Public Good Projects", focus: "Educational resources and social impact.", examples: "Blockchain-based learning platforms, decentralized certification systems, community-driven initiatives." },
  { title: "On-chain Gaming and Collectibles", focus: "Merging gaming with blockchain for true ownership of in-game assets.", examples: "Play-to-earn games, NFT marketplaces, decentralized gaming ecosystems." },
];

const Conference = () => {
  return (
    <>
      {/* Hero – NextBridge style: centered, minimal */}
      <section className="bgoverlay2 flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-20">
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4">
          Web3 Port Harcourt Conference
        </h1>
        <p className="text-brand-primary text-lg mb-6">Next conference: December 5th, 2026</p>
        <div className="flex justify-center mb-8">
          <CountdownTimer
            background="bg-brand-primary"
            boxshadow=""
            padding="px-6 py-3 lg:px-8 lg:py-4"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="http://www.ticketsbyallin.com/Web3ph" target="_blank" rel="noopener noreferrer" className="btn">
            Register Now
          </a>
          <a href="http://www.ticketsbyallin.com/Web3ph" target="_blank" rel="noopener noreferrer" className="btn-outline btn inline-flex items-center gap-2">
            Learn More <FaLongArrowAltRight />
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 px-4 bg-[#0a0a0a]">
        <div className="custom-container">
          <h2 className="section-title">Overview</h2>
          <p className="section-subtitle mt-4 max-w-3xl mx-auto">
            The <span className="font-semibold text-white">Web3 Port Harcourt Conference</span> is our flagship event—a hackathon and conference aimed at creating impactful projects with real-world applications. Participants form teams of 3–7 members, with builders from across Rivers State and beyond.
            <br /><br />
            Categories include Real World Assets & DeFi, On-chain Gaming, Educational DApps, and Smart Contract Security Tools. The event fosters innovation in tokenizing assets, decentralized finance, gaming, and education, focusing on social impact and security.
          </p>
        </div>
      </section>

      {/* Categories – card grid */}
      <section className="py-16 lg:py-24 px-4 bg-[#0f0f0f]">
        <div className="custom-container">
          <h2 className="section-title">Categories</h2>
          <p className="section-subtitle mb-12">Product categories for the buildathon</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="card">
                <h3 className="text-base font-semibold text-white mb-3">{c.title}</h3>
                <p className="text-zinc-400 text-sm mb-2"><span className="text-zinc-500">Focus:</span> {c.focus}</p>
                <p className="text-zinc-400 text-sm mb-4"><span className="text-zinc-500">Examples:</span> {c.examples}</p>
                <a href="http://www.ticketsbyallin.com/Web3ph" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-primary hover:text-brand-primary-light transition-colors">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="py-16 lg:py-24 px-4 bg-[#0a0a0a]">
        <div className="custom-container">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCalendarAlt className="text-brand-primary" size={28} />
            <h2 className="section-title mb-0">Event Schedule</h2>
          </div>
          <p className="section-subtitle mb-12">December 2026. Full schedule will be announced closer to the date.</p>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="card">
              <img src="/images/event1.png" alt="" className="w-20 h-20 object-contain mx-auto mb-4" />
              <h4 className="text-base font-semibold text-white text-center mb-2">Registration</h4>
              <p className="text-zinc-400 text-sm text-center mb-4">Details coming soon.</p>
              <a href="http://www.ticketsbyallin.com/Web3ph" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center justify-center font-semibold text-brand-primary hover:text-brand-primary-light transition-colors text-sm">
                Register now <FaLongArrowAltRight />
              </a>
            </div>
            <div className="card bg-brand-primary/10 border-brand-primary/30">
              <img src="/images/event2.png" alt="" className="w-20 h-20 object-contain mx-auto mb-4" />
              <h4 className="text-base font-semibold text-white text-center mb-2">Conference & Buildathon</h4>
              <p className="text-zinc-300 text-sm text-center">Saturday, December 5th, 2026</p>
            </div>
            <div className="card">
              <img src="/images/event3.png" alt="" className="w-20 h-20 object-contain mx-auto mb-4" />
              <h4 className="text-base font-semibold text-white text-center mb-2">Invitations & admissions</h4>
              <p className="text-zinc-400 text-sm text-center">Details coming soon.</p>
            </div>
            <div className="card">
              <img src="/images/event4.png" alt="" className="w-20 h-20 object-contain mx-auto mb-4" />
              <h4 className="text-base font-semibold text-white text-center mb-2">Review and Results</h4>
              <p className="text-zinc-400 text-sm text-center">Details coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-16 lg:py-24 px-4 bg-[#0f0f0f]">
        <div className="custom-container">
          <h2 className="section-title">Rewards</h2>
          <div className="flex flex-col lg:flex-row-reverse lg:gap-12 lg:items-center mt-12">
            <div className="flex justify-center lg:w-2/5">
              <img src="/images/award.png" alt="" className="w-48 lg:w-72 floating" />
            </div>
            <div className="lg:w-3/5 text-center lg:text-left">
              <p className="text-xl lg:text-2xl font-bold text-white mb-4">Win from a N1,600,000.00 prize pool</p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Ready to build the future of Web3? Join the Web3 Port Harcourt Conference and compete for a <span className="font-bold text-brand-primary">N1,600,000.00</span> prize pool.
                <br /><br />
                Develop groundbreaking projects in DeFi, gaming, education, and security, all while gaining mentorship and showcasing your ideas to industry leaders. Don&apos;t miss it!
              </p>
              <a href="http://www.ticketsbyallin.com/Web3ph" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center gap-2">
                Learn More <FaLongArrowAltRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conference;
