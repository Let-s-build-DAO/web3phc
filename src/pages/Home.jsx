import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltRight, FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

/* NextBridge Africa–style flow: Hero → Trusted By → How We Drive Impact → Impact in Numbers → Testimonials → Be Part of the Movement → Conference teaser */

const COMMUNITY_LINKS = [
  { href: "https://x.com/web3PHC", label: "X (Twitter)", Icon: FaTwitter, sub: "Follow Us" },
  { href: "https://chat.whatsapp.com/CzhYZkaOySi9U1zfifXbbu?mode=gi_c", label: "WhatsApp", Icon: FaWhatsapp, sub: "Join Community" },
  { href: "https://t.me/web3portharcourt", label: "Telegram", Icon: FaTelegram, sub: "Join Community" },
];

const IMPACT_METRICS = [
  { value: "1,200", label: "Community reach", sub: "Through workshops, events, and online" },
  { value: "21+", label: "Community partners", sub: "Across Rivers State and beyond" },
  { value: "10+", label: "Web3 projects", sub: "Highlighted and supported" },
  { value: "5", label: "Blockchains", sub: "Sponsors from 5 blockchains" },
];

const STRATEGIC_PILLARS = [
  { title: "Ecosystem Visibility & Mapping", description: "We actively spotlight Web3 communities, startups, and builder groups. By documenting who is building what, we turn fragmented efforts into a discoverable ecosystem for global investors and protocols." },
  { title: "Curated Gatherings", description: "We create intentional spaces—from mixers and founder roundtables to our flagship conference—designed for shared knowledge, deal flow, and real collaboration among builders and operators." },
  { title: "Physical Infrastructure", description: "We are establishing a physical blockchain hub in Port Harcourt—a home for builders to work, learn, and experiment. This creates continuity between events and ensures long-term ecosystem growth." },
];

const TESTIMONIALS = [
  { quote: "Finally a hub that connects all the Web3 dots in the region. Grateful for this community.", name: "Local Innovator", role: "Builder" },
  { quote: "The conference and ongoing initiatives make it easier to build and learn Web3 right here at home.", name: "Rivers State Member", role: "Community Member" },
  { quote: "My experience with Web3Ph has been nothing short of exceptional. From community advocacy to event hosting and strategic partnerships, they consistently operate at the highest level. The executive team brings a rare blend of deep technical knowledge and operational expertise, ensuring members receive a perfect balance of theory and hands-on practice. For anyone looking to scale Web3 products in South-South Nigeria, Web3Ph is my top recommendation.", name: "Engr. Dickachi", role: "CEO Lambabros Deals | Lead Ambassador Lambatoken", image: "/images/dike.jpg" },
];

const PARTNER_LOGOS = [
  "/images/sahara.png", "/images/bitsave.png", "/images/borderless.png",
  "/images/streamlivr.png", "/images/gameverse.png", "/images/dao.png",
  "/images/nacos.png", "/images/blockchainuniport.png", "/images/nerdnetwork.png",
  "/images/superteam.png", "/images/brsu.png", "/images/wid.png",
];

const Home = () => {
  const aboutRef = useRef(null);
  const impactRef = useRef(null);
  const communityRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    const el = hash === "about" ? aboutRef.current : hash === "impact" ? impactRef.current : hash === "community" ? communityRef.current : null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      {/* Hero – split 50/50, aligned */}
      {/* Hero – split 50/50, aligned */}
      {/* Hero – split 50/50, aligned */}
      <section id="about" ref={aboutRef} className="hero-bg min-h-[100dvh] lg:min-h-[90vh] flex items-center relative overflow-hidden pt-20 lg:pt-0">
        {/* Glow Blobs */}
        <div className="glow-blob w-96 h-96 bg-brand-primary/20 top-0 left-[-100px] blur-[120px]" />
        <div className="glow-blob w-96 h-96 bg-purple-600/20 bottom-0 right-[-100px] blur-[120px]" />

        <div className="custom-container w-full py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div className="flex flex-col justify-center text-center lg:text-left" variants={container} initial="hidden" animate="visible">
               <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/5 w-fit mx-auto lg:mx-0 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  <span className="text-brand-primary text-[10px] md:text-xs font-semibold uppercase tracking-wider">The Web3 Community for South-South Nigeria</span>
               </motion.div>
              <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]" variants={item}>
                Home grown,<br />
                <span className="text-gradient-gold">Global impact.</span>
              </motion.h1>
              <motion.p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mbrand-secondary" variants={item}>
                <strong>Web3 Port Harcourt</strong> convenes founders, builders, investors, and ecosystem leaders to drive meaningful innovation. We connect local talent to global capital, foster inclusion, and help shape the opportunities that define the ecosystem beyond the conference.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" variants={item}>
                <a href="https://t.me/web3portharcourt" target="_blank" rel="noopener noreferrer" className="btn shadow-lg shadow-brand-primary/20">
                  Join Community
                </a>
                <Link to="/conference" className="btn-outline btn inline-flex items-center gap-2">
                  Explore Programs <FaLongArrowAltRight />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero Image / Visual */}
            <motion.div className="relative flex justify-center lg:justify-end" variants={container} initial="hidden" animate="visible">
                <div className="relative z-10 w-full max-w-md lg:max-w-full">
                    <img src="/images/hero.png" alt="Web3PHC" className="w-32 h-32 lg:w-48 lg:h-48 object-contain mx-auto floating opacity-90" />
                    {/* Placeholder for a more dynamic 3D element if desired later */}
                </div>
                 <div className="glow-blob w-80 h-80 bg-brand-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Web3 Brands – Brands We've Worked With */}
      <section className="py-16 lg:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="custom-container relative z-10">
          <h2 className="section-title">Trusted By Leading Web3 Brands</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Brands We&apos;ve Worked With</h3>
          <p className="section-subtitle mb-12">
            We&apos;ve partnered with leading Web3 protocols and brands to drive adoption, build communities, and create impact in Rivers State.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {PARTNER_LOGOS.map((src, i) => (
              <img key={i} src={src} alt="" className="h-10 lg:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <img src="/images/gdg.png" alt="GDG" className="h-12 lg:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 hidden md:block" />
            <img src="/images/gdgmobile.png" alt="GDG" className="h-12 w-auto object-contain opacity-60 md:hidden" />
          </div>
        </div>
      </section>

      {/* How We Drive Impact – From knowledge to community... + 5 cards */}
      <section id="impact" ref={impactRef} className="py-16 lg:py-24 px-4 relative">
         <div className="glow-blob w-[500px] h-[500px] bg-purple-900/10 top-1/2 left-[-200px] blur-[120px]" />
        <div className="custom-container relative z-10">
          <h2 className="section-title">How We Do This</h2>
          <p className="section-subtitle mb-12">We don&apos;t just convene conversations—we build the infrastructure that allows Web3 talent to grow.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STRATEGIC_PILLARS.map((p, i) => (
              <div key={p.title} className="card group flex flex-col h-full hover:border-brand-primary/30">
                 <div className="w-12 h-12 mb-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-300">
                    <span className="text-brand-primary font-display font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-brand-primary transition-colors">{p.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="py-16 lg:py-24 px-4 relative border-y border-white/5 bg-white/[0.01]">
        <div className="custom-container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 bg-white/[0.02] rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300" style={{ backgroundImage: "linear-gradient(to bottom, var(--brand), #f97316)" }}>{m.value}</div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">{m.label}</div>
                <div className="text-xs text-zinc-500">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials – Trusted by Community */}
      <section id="community" ref={communityRef} className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="glow-blob w-64 h-64 lg:w-[500px] lg:h-[500px] bg-brand-primary/5 bottom-0 right-[-100px] lg:right-[-200px] blur-[80px] lg:blur-[120px]" />
        <div className="custom-container relative z-10">
          <h2 className="section-title">Testimonials</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Trusted by Community</h3>
          <p className="section-subtitle mb-12">Hear from the innovators and builders we&apos;ve empowered.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card hover:border-brand-primary/30 flex flex-col h-full">
                <div className="mb-4 text-brand-primary text-4xl opacity-30">&ldquo;</div>
                <p className="text-zinc-300 text-sm lg:text-base mb-6 italic leading-relaxed relative z-10 break-words whitespace-normal">{t.quote}</p>
                <div className="flex items-center gap-3 mt-auto">
                    {t.image ? (
                        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0" />
                    ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-xs font-bold text-white shrink-0">
                            {t.name.charAt(0)}
                        </div>
                    )}
                    <div className="min-w-0 flex-1">
                        <p className="font-bold text-white text-sm truncate">{t.name}</p>
                        <p className="text-xs text-brand-primary break-words whitespace-normal leading-tight">{t.role}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be Part of The Movement – Join Us: X, WhatsApp, Events */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none" />
        <div className="custom-container relative z-10">
          <h2 className="section-title">Join Us</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Be Part of The Movement</h3>
          <p className="section-subtitle mb-12">Connect with Web3 enthusiasts, builders, and innovators across Rivers State.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {COMMUNITY_LINKS.map(({ href, label, Icon, sub }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card text-center hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-all group p-4 lg:p-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-primary/20">
                    <Icon className="text-brand-primary w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <p className="font-bold text-white mb-1 text-sm lg:text-base break-words">{label.includes("X") ? "@web3PHC" : label}</p>
                <p className="text-xs lg:text-sm text-zinc-400 group-hover:text-zinc-300 break-words">{sub}</p>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/conference" className="btn-outline btn inline-flex items-center gap-2 px-8 py-3">
              View Events <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 lg:py-24 px-4 relative">
        <div className="custom-container">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle mb-12">Got questions or want to partner with us? Reach out directly.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a href="mailto:hello@lbdao.xyz" className="card group text-center hover:border-brand-primary/30">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                    <p className="font-semibold text-white mb-1">General Inquiries</p>
                    <p className="text-zinc-400 text-sm group-hover:text-brand-primary transition-colors">hello@lbdao.xyz</p>
                </a>
                 <a href="mailto:adams@lbdao.xyz" className="card group text-center hover:border-brand-primary/30">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="font-semibold text-white mb-1">Direct Contact</p>
                    <p className="text-zinc-400 text-sm group-hover:text-brand-primary transition-colors">adams@lbdao.xyz</p>
                </a>
                 <a href="tel:+2349050811584" className="card group text-center hover:border-brand-primary/30">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <p className="text-zinc-400 text-sm group-hover:text-brand-primary transition-colors">+234 905 081 1584</p>
                </a>
            </div>
        </div>
      </section>

      {/* Conference teaser – NEXT ACADEMY style: Web3PHC Conference Coming Soon */}
      <section className="py-24 lg:py-32 px-4 relative mt-12">
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-brand-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="custom-container text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-brand-primary/30 bg-black/50 backdrop-blur-md mb-6">
               <p className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em]">Web3PHC Conference</p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">December 5th, 2026</h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-xl mx-auto">Our flagship conference bringing together builders, projects, and partners from across Rivers State and beyond.</p>
          <Link to="/conference" className="btn inline-flex items-center gap-2 transform hover:scale-105 transition-transform">
            Learn More <FaLongArrowAltRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
