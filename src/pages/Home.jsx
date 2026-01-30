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

const IMPACT_PILLARS = [
  { title: "Education", description: "Demystifying Web3 & blockchain for Rivers State." },
  { title: "Community", description: "Grow together, connect, and share." },
  { title: "Visibility", description: "Highlighting Web3 projects and communities in the region." },
  { title: "Ecosystem Growth", description: "Making it easier to do Web3 in Rivers State." },
  { title: "Your Story", description: "Join the journey. Shape the next chapter." },
];

const TESTIMONIALS = [
  { quote: "Web3PHC brought our project the visibility and support we needed in Rivers State. The community is genuine and collaborative.", name: "Community Builder", role: "Web3 Developer" },
  { quote: "Finally a hub that connects all the Web3 dots in the region. Grateful for this community.", name: "Local Innovator", role: "Builder" },
  { quote: "The conference and ongoing initiatives make it easier to build and learn Web3 right here at home.", name: "Rivers State Member", role: "Community Member" },
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
      <section id="about" ref={aboutRef} className="hero-bg min-h-[85vh] flex items-center">
        <div className="custom-container w-full py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 lg:items-center">
            <motion.div className="flex flex-col justify-center text-center lg:text-left" variants={container} initial="hidden" animate="visible">
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]" variants={item}>
                Rivers State&apos;s Gateway to Web3.<br />Build. Learn. Lead.
              </motion.h1>
              
            </motion.div>
            <motion.div className="items-center justify-center lg:justify-start" variants={container} initial="hidden" animate="visible">
              <motion.p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-md text-center lg:text-left" variants={item}>
                <span className="font-semibold text-white">Web3 Port Harcourt (Web3PHC)</span> is a community that highlights Web3 communities and projects in Rivers State, Nigeria. We foster collaboration and make it easier to build, learn, and grow in Web3—through our flagship conference, events, and ongoing initiatives. Hosted by{" "}
                <a href="https://drive.google.com/file/d/13Ij0EO-pl-d4gdJAW14oRLf5iGVvoylh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-brand-yellow hover:underline">Let&apos;s Build Labs</a>.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-5" variants={item}>
                <a href="https://chat.whatsapp.com/CzhYZkaOySi9U1zfifXbbu?mode=gi_c" target="_blank" rel="noopener noreferrer" className="btn">
                  Join Community
                </a>
                <Link to="/conference" className="btn-outline btn inline-flex items-center gap-2">
                  Explore Programs <FaLongArrowAltRight />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Leading Web3 Brands – Brands We've Worked With */}
      <section className="py-16 lg:py-24 px-4 bg-[#0a0a0a]">
        <div className="custom-container">
          <h2 className="section-title">Trusted By Leading Web3 Brands</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Brands We&apos;ve Worked With</h3>
          <p className="section-subtitle mb-12">
            We&apos;ve partnered with leading Web3 protocols and brands to drive adoption, build communities, and create impact in Rivers State.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
            {PARTNER_LOGOS.map((src, i) => (
              <img key={i} src={src} alt="" className="h-10 lg:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <img src="/images/gdg.png" alt="GDG" className="h-12 lg:h-16 w-auto object-contain opacity-70 hidden md:block" />
            <img src="/images/gdgmobile.png" alt="GDG" className="h-12 w-auto object-contain opacity-70 md:hidden" />
          </div>
        </div>
      </section>

      {/* How We Drive Impact – From knowledge to community... + 5 cards */}
      <section id="impact" ref={impactRef} className="py-16 lg:py-24 px-4 bg-[#0f0f0f]">
        <div className="custom-container">
          <h2 className="section-title">How We Drive Impact</h2>
          <p className="section-subtitle mb-12">From knowledge to community, visibility, and beyond—explore our journey.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {IMPACT_PILLARS.slice(0, 3).map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:max-w-2xl lg:mx-auto">
            {IMPACT_PILLARS.slice(3, 5).map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="py-16 lg:py-24 px-4 bg-[#0a0a0a]">
        <div className="custom-container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-brand-yellow mb-1">{m.value}</div>
                <div className="text-sm font-semibold text-white">{m.label}</div>
                <div className="text-xs text-zinc-500 mt-1">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials – Trusted by Community */}
      <section id="community" ref={communityRef} className="py-16 lg:py-24 px-4 bg-[#0f0f0f]">
        <div className="custom-container">
          <h2 className="section-title">Testimonials</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Trusted by Community</h3>
          <p className="section-subtitle mb-12">Hear from the innovators and builders we&apos;ve empowered.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card">
                <p className="text-zinc-300 text-sm lg:text-base mb-4 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Be Part of The Movement – Join Us: X, WhatsApp, Events */}
      <section className="py-16 lg:py-24 px-4 bg-[#0a0a0a]">
        <div className="custom-container">
          <h2 className="section-title">Join Us</h2>
          <h3 className="text-lg font-semibold text-zinc-500 text-center mb-2">Be Part of The Movement</h3>
          <p className="section-subtitle mb-12">Connect with Web3 enthusiasts, builders, and innovators across Rivers State.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {COMMUNITY_LINKS.map(({ href, label, Icon, sub }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card text-center hover:border-brand-yellow/30 transition-colors">
                <Icon className="mx-auto mb-3 text-brand-yellow" size={28} />
                <p className="font-semibold text-white mb-1">{label.includes("X") ? "@web3PHC" : label}</p>
                <p className="text-sm text-zinc-500">{sub}</p>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/conference" className="btn-outline btn inline-flex items-center gap-2">
              View Events <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Conference teaser – NEXT ACADEMY style: Web3PHC Conference Coming Soon */}
      <section className="py-16 lg:py-24 px-4 bg-[#0f0f0f]">
        <div className="custom-container text-center max-w-2xl mx-auto">
          <p className="text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-2">Web3PHC Conference</p>
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">December 5th, 2026</h2>
          <p className="text-zinc-400 mb-8">Our flagship conference bringing together builders, projects, and partners from across Rivers State and beyond.</p>
          <Link to="/conference" className="btn inline-flex items-center gap-2">
            Learn More <FaLongArrowAltRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
