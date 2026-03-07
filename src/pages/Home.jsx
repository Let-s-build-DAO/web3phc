import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltRight, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import XIcon from "../components/XIcon";

/* NextBridge Africa–style flow: Hero → Trusted By → How We Drive Impact → Impact in Numbers → Testimonials → Be Part of the Movement → Conference teaser */

const COMMUNITY_LINKS = [
  { href: "https://x.com/web3PHC", label: "X", Icon: XIcon, sub: "Follow Us" },
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
  { title: "Ecosystem Visibility & Mapping", description: "We actively index and spotlight the deep pool of Web3 communities, startups, and builder groups alongside borderless projects. By rigorously documenting who is building what, we translate local talent into a discoverable hub for international investors and protocols." },
  { title: "Curated Gatherings & Builder Experiences", description: "We create high-signal environments where builders, founders, and global operators meet with exact purpose. From hackathons to flagship conferences, our spaces are designed to move straight into deep collaboration, learning, and deal flow." },
  { title: "Physical Infrastructure for Web3 Builders", description: "We are establishing a permanent, world-class blockchain hub in Port Harcourt as the engine room for borderless innovation. By equipping early-stage teams with mentorship and resources, we ensure Port Harcourt remains a high-yielding node on the global Web3 map." },
];

const TESTIMONIALS = [
  { 
    quote: "My experience with Web3Ph has been nothing short of exceptional. From community advocacy to event hosting and strategic partnerships, they consistently operate at the highest level. The executive team brings a rare blend of deep technical knowledge and operational expertise, ensuring members receive a perfect balance of theory and hands-on practice. For anyone looking to scale Web3 products in South-South Nigeria, Web3Ph is my top recommendation", 
    name: "Dikachi Ibekwe", 
    role: "CEO Lambabros Deals | Lead Ambassador Lambatoken", 
    image: "/images/dike.jpg", 
    handle: "@coachkach" 
  },
  { 
    quote: "To be honest, I didn’t expect much from Web3 events, many felt repetitive and lacked true innovation. But being part of the Web3 Port Harcourt team completely changed that perspective. I saw firsthand the power of great minds coming together, not to compete, but to collaborate and create meaningful solutions within the ecosystem. One thing I hope to see more of is this focus on building something new, rather than just hyping events.", 
    name: "Richard Hezekiah", 
    role: "Graphic Artist", 
    handle: "@iamcharddo" 
  },
  { 
    quote: "Witnessing a platform like Web3 Port Harcourt do what it does is like a breathe of fresh Air to the Web3 Ecosystem across the South-Southern part of Nigeria.There's so much that can happen when Web3 Enthusiasts, Professionals, communities, Project founders and investors all converge. Looking forward to what lies ahead of this great initiative.", 
    name: "Jehu Oreri", 
    role: "Web3 Business developer", 
    image: "/images/jehu.png", 
    handle: "@JehuTech" 
  },  
  { 
    quote: "I’m grateful to be part of a community that believes in empowerment, collaboration, and building real solutions for Africa and the world. Web3 Port Harcourt isn’t just a community, it’s a movement.", 
    name: "Nurudeen Hamzah", 
    role: "Web3 Builder-in-Training", 
    image: "/images/nuru.jpg", 
    handle: "@berare01" 
  },
  { 
    quote: "The Web3PH conference in 2024 was a remarkable event. The wealth of information shared was insightful.", 
    name: "Onyeka Adedayo", 
    role: "Founder, Creaitz", 
    image: "/images/onyeka.jpg", 
    handle: "@onyekaekwemozor" 
  },
  { 
    quote: "Web3PH is a groundbreaking initiative shaping the future of blockchain and decentralized technology. From Port Harcourt, I’ve seen how this ecosystem can empower communities, unlock new opportunities, and redefine the way we engage with digital ownership and collaboration.", 
    name: "Precious Micah", 
    role: "Founder, Straqa", 
    image: "/images/precious.jpg", 
    handle: "@Preciousrmicah" 
  },  
];

const PARTNER_LOGOS = [
  "/images/sahara.png", "/images/bitsave.png", "/images/borderless.png",
  "/images/streamlivr.png", "/images/gameverse.png", "/images/dao.png",
  "/images/nacos.png", "/images/blockchainuniport.png", "/images/nerdnetwork.png",
  "/images/superteam.png", "/images/brsu.png", "/images/wid.png",
  "/images/gdg.png", 
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
      <section id="about" ref={aboutRef} className="hero-bg min-h-[100dvh] lg:min-h-[90vh] flex items-center relative overflow-hidden pt-12 lg:pt-0">
        {/* Animated Glow Blobs */}
        <div className="glow-blob-animated w-96 h-96 bg-brand-primary/20 top-0 left-[-100px] blur-[120px]" />
        <div className="glow-blob-animated w-96 h-96 bg-purple-600/20 bottom-0 right-[-100px] blur-[120px]" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-[25vw] sm:text-[20vw] text-white/5 select-none pointer-events-none z-0 whitespace-nowrap opacity-20">
            WEB3PHC
        </div>

        <div className="custom-container w-full py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div className="flex flex-col justify-center text-center lg:text-left" variants={container} initial="hidden" animate="visible">
              <motion.h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] font-display font-normal tracking-tight text-white mb-8 leading-[0.9]" variants={item}>
                From Pitakwa,<br />
                <span className="text-brand-primary italic pr-4">To The World.</span>
              </motion.h1>
              <motion.p className="text-[#a3a3a3] text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light pb-8" variants={item}>
                <strong>Web3 Port Harcourt</strong> is a global convergence point for founders, builders, investors, and ecosystem leaders. Anchored in Port Harcourt. Scaling borderless innovation to the rest of the world.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start" variants={item}>
                <a href="https://t.me/web3portharcourt" target="_blank" rel="noopener noreferrer" className="btn shadow-lg shadow-brand-primary/20 min-w-[180px] justify-center text-center">
                  Follow Who Know Road
                </a>
                <Link to="/reconfig" className="btn-outline btn inline-flex items-center justify-center gap-2 min-w-[180px] text-center">
                  Re:Config 2026 <FaLongArrowAltRight />
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
      <section className="py-20 lg:py-32 px-4 relative border-t border-[#262626] bg-[#0a0a0a]">
        <div className="custom-container relative z-10">
          <h2 className="section-title text-center text-4xl lg:text-5xl font-display font-normal text-white mb-16">Trusted By Ecosystem Leaders</h2>
          <div className="relative w-full overflow-hidden mask-gradient-x">
             {/* Stronger Gradient Masks for a premium fade effect */}
             <div className="absolute top-0 left-0 h-full w-24 lg:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
             <div className="absolute top-0 right-0 h-full w-24 lg:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-12 lg:gap-24 items-center flex-nowrap py-4"
                animate={{ x: "-50%" }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 30, // Adjust speed here
                }}
              >
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
                  <div key={i} className="flex-shrink-0">
                     <img 
                        src={src} 
                        alt="Partner" 
                        className="h-10 lg:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" 
                     />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Drive Impact – From knowledge to community... + 5 cards */}
      <section id="mission"  ref={impactRef} className="py-20 lg:py-32 px-4 relative border-t border-[#262626] bg-[#0a0a0a]">
        <div className="custom-container relative z-10">
          <h2 className="section-title text-center text-4xl lg:text-5xl font-display font-normal text-white mb-6">Our Mission</h2>
          <p className="section-subtitle mb-16 max-w-3xl text-[#a3a3a3] font-light">We don&apos;t just convene conversations—we build the foundational infrastructure that allows our tech talent to seamlessly integrate with the global digital economy.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {STRATEGIC_PILLARS.map((p, i) => (
              <div key={p.title} className="card group flex flex-col h-auto min-h-[300px]">
                 <div className="w-12 h-12 mb-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary/20 transition-all duration-300">
                    <span className="text-brand-primary font-display font-normal text-xl">{i + 1}</span>
                </div>
                <h3 className="text-3xl font-display font-normal text-white mb-4 group-hover:text-brand-primary transition-colors">{p.title}</h3>
                <p className="text-zinc-400 text-sm lg:text-base leading-relaxed tracking-wide">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section id="impact" className="py-20 lg:py-32 px-4 relative border-y border-[#262626] bg-[#0a0a0a]">
        <div className="custom-container">
          <h2 className="section-title text-center text-4xl lg:text-5xl font-display font-normal text-white mb-16">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-12 card !bg-[#121212]">
            {IMPACT_METRICS.map((m) => (
              <div key={m.label} className="text-center group p-4 border-l border-[#262626] first:border-l-0">
                <div className="text-5xl lg:text-6xl font-display font-normal text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">{m.value}</div>
                <div className="text-sm font-sans font-bold text-[#a3a3a3] uppercase tracking-wider mb-1">{m.label}</div>
                <div className="text-xs font-sans text-[#737373]">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials – Trusted by Community */}


      <section ref={communityRef} className="py-20 lg:py-32 px-4 relative overflow-hidden border-t border-[#262626] bg-[#0a0a0a]">
        <div className="custom-container relative z-10">
          <h2 className="section-title text-center text-4xl lg:text-5xl font-display font-normal text-white mb-6">Wetin Men Dey Talk</h2>
          <p className="section-subtitle mb-16 max-w-3xl text-[#a3a3a3] font-light">Hear from the innovators and builders we&apos;ve empowered.</p>
          
          <div className="relative max-w-[100vw] lg:max-w-6xl mx-auto -mx-4 px-4 lg:mx-auto">
            {/* Scroll Container */}
            <div className="flex overflow-x-auto py-8 lg:py-12 gap-6 lg:gap-8 snap-x snap-mandatory scrollbar-hide pb-16">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="min-w-[85%] md:min-w-[45%] lg:min-w-[380px] snap-center flex pt-4">
                        <div className="card hover:border-[#404040] flex flex-col h-full w-full p-8 lg:p-10 transition-all duration-300">
                            <div className="absolute -top-6 left-8 bg-[#1a1a1a] border border-[#262626] w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                                <span className="text-white text-4xl font-display mt-2">&ldquo;</span>
                            </div>
                            
                            <div className="mb-6 flex justify-end">
                                {/* X/Twitter Link */}
                                <a 
                                    href={t.handle ? `https://x.com/${t.handle.replace('@', '')}` : '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full bg-white/5 hover:bg-brand-primary/20 hover:text-brand-primary transition-all duration-300 group/icon border border-transparent hover:border-brand-primary/30"
                                    aria-label={`Visit ${t.name} on X`}
                                >
                                    {/* X Logo SVG */}
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-zinc-400 group-hover/icon:text-brand-primary fill-current transition-colors" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                            </div>
                            
                            <p className="text-zinc-300 text-sm lg:text-base mb-8 italic leading-relaxed flex-grow relative z-10 break-words whitespace-normal">
                                {t.quote}
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#262626]">
                                {t.image ? (
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-sm font-bold text-white shrink-0">
                                        {t.name.charAt(0)}
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <p className="font-bold text-white text-base truncate">{t.name}</p>
                                    <div className="flex flex-col">
                                        <p className="text-xs text-brand-primary truncate leading-tight tracking-wide font-medium mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black to-transparent pointer-events-none hidden lg:block z-20"></div>
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black to-transparent pointer-events-none hidden lg:block z-20"></div>
          </div>
        </div>
      </section>

      {/* Be Part of The Movement – Join Us: X, WhatsApp, Events */}
      <section id="tribe" className="py-20 lg:py-32 px-4 relative overflow-hidden border-t border-[#262626] bg-[#0a0a0a]">
        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-[25vw] sm:text-[20vw] text-white/5 select-none pointer-events-none z-0 whitespace-nowrap opacity-10">
            CONNECT
        </div>
        <div className="custom-container relative z-10">
          <h2 className="section-title text-center text-4xl lg:text-5xl font-display font-normal text-white mb-6">Join The Tribe</h2>
          <p className="section-subtitle mb-16 max-w-3xl text-[#a3a3a3] font-light">Connect with a global network of Web3 enthusiasts, builders, and innovators.</p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {COMMUNITY_LINKS.map(({ href, label, Icon, sub }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card block w-full text-center hover:bg-[#121212] transition-colors group p-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 rounded-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-300">
                    <Icon className="text-white w-6 h-6 lg:w-8 lg:h-8 fill-current group-hover:text-brand-primary transition-colors" />
                </div>
                <p className="font-sans font-bold text-white mb-2 text-base lg:text-lg break-words">{label.includes("X") ? "@web3PHC" : label}</p>
                <p className="text-xs lg:text-sm text-zinc-400 group-hover:text-zinc-300 break-words">{sub}</p>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/reconfig" className="btn-outline btn inline-flex items-center gap-2 px-8 py-3">
              Lap this Unit!! <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="hello" className="py-16 lg:py-24 px-4 relative">
        <div className="custom-container">
            <h2 className="section-title">Say Who goes!!!</h2>
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
               <p className="text-brand-primary font-bold text-xs uppercase tracking-[0.2em]">Web3PHC Re:Config</p>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">October 24th, 2026</h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-xl mx-auto">Our flagship conference bringing together builders, projects, and partners from across Rivers State and beyond.</p>
          <Link to="/reconfig" className="btn inline-flex items-center gap-2 transform hover:scale-105 transition-transform">
            Learn More <FaLongArrowAltRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
