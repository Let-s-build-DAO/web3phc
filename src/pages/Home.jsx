import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLongArrowAltRight, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import XIcon from "../components/XIcon";

/* NextBridge Africa–style flow: Hero → Trusted By → How We Drive Impact → Impact in Numbers → Testimonials → Be Part of the Movement → Conference teaser */

const HERO_IMAGES = [
  "/images/243.jpg",
  "/images/247.jpg", 
  "/images/246.jpg",
  "/images/248.jpg",
  "/images/249.jpg"
];

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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hash = location.hash?.slice(1);
    const el = hash === "about" ? aboutRef.current : hash === "impact" ? impactRef.current : hash === "community" ? communityRef.current : null;
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <section id="about" ref={aboutRef} className="bg-black min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
        
        {/* Full Bleed Image Background Slider */}
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImage}
              src={HERO_IMAGES[currentImage]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="Web3PHC Event" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] lg:object-[center_20%] scale-105" 
            />
          </AnimatePresence>
          {/* Lightened Overlay for readability without hiding the image */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
        </div>

        <div className="w-full relative z-10 px-4 lg:px-12 xl:px-20 max-w-[1600px] mx-auto">
          <motion.div className="w-full flex flex-col " variants={container} initial="hidden" animate="visible">
            
            {/* Responsive Hero Grid */}
            <div className="custom-container px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] w-full gap-y-6 lg:gap-y-0 lg:items-end mt-16 md:mt-24 lg:mt-0">
              
              {/* Massive Title */}
              <motion.h1 
                className="order-1 lg:col-start-1 lg:row-start-1 text-[1.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[7rem] unbounded-title text-white tracking-tight leading-[0.9] mix-blend-overlay drop-shadow-2xl" 
                style={{ textShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
                variants={item}
              >
                Web3PHC
              </motion.h1>

              {/* Subtext - Centered Below Title horizontally */}
              <div className="order-2 lg:col-start-1 lg:row-start-2 px-0 lg:px-4 mt-2 lg:mt-[50px] pointer-events-none">
                <motion.p className="text-[#e5e5e5] text-sm md:text-base leading-snug max-w-[300px] sm:max-w-sm lg:max-w-md font-sans drop-shadow-lg text-left" variants={item}>
                  A global movement transforming Nigeria into a hub for innovation in Web3, and frontier technologies.
                </motion.p>
              </div>

              {/* Floating Side Action */}
              <motion.div className="order-3 lg:col-start-2 lg:row-start-1 flex flex-row items-end justify-end gap-3 lg:gap-4 mt-4 lg:mt-0 lg:-mb-[2%] xl:-mb-[3%] lg:h-[150px] w-full" variants={item}>
                <div className="mb-[80px] lg:mb-[120px]">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 w-6 h-6">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                   </svg>
                </div>
                <h2 className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.8rem] font-sans font-normal tracking-wide text-white leading-[1.1] text-left uppercase drop-shadow-lg">
                  BRING<br />
                  NIGERIA<br />
                  ONCHAIN
                </h2>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Collaborative Ecosystem */}
      <section className="py-20 px-4 relative bg-[#f8f9fa] z-20 rounded-t-[48px] lg:rounded-t-[80px] -mt-20 md:-mt-40 overflow-hidden text-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        {/* Geometric Grid Pattern - Edges Only */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fe650020_1px,transparent_1px),linear-gradient(to_bottom,#0052ff20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_100%)]" />
        
        {/* Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#fe6500]/20 to-transparent blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0052ff]/10 to-transparent blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        
        <div className="custom-container relative z-10 w-full px-4 lg:px-12 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start max-w-[90rem] mx-auto w-full">
            <div className="flex flex-col gap-6 max-w-4xl">
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-sans font-medium leading-[1.05] tracking-tight text-black">
                Web3 PHC is a <span className="font-serif italic font-light text-[#fe6500]">collaborative ecosystem</span> designed to elevate both technical and creative talent.
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl font-sans font-normal leading-snug text-zinc-600 max-w-3xl">
                We drive high-impact collaboration and amplify the global visibility of our builders, creators, and startups.
              </p>
            </div>
            <div className="hidden lg:flex w-32 h-32 items-center justify-center flex-shrink-0">
               <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="5 5 19 5 19 19"></polyline>
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Three Pillars */}
      <section id="mission"  className="py-20 lg:py-32 px-4 relative bg-[#ebecf0] border-t border-black/10 overflow-hidden">
        {/* Geometric Grid Pattern - Edges Only */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0052ff20_1px,transparent_1px),linear-gradient(to_bottom,#fe650020_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_100%)]" />

        {/* Ambient Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-to-r from-[#0052ff]/10 to-transparent blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-[#fe6500]/15 to-transparent blur-[120px] rounded-full translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="custom-container relative z-10 w-full px-4 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start mb-20 max-w-[90rem] mx-auto w-full border-b border-black/20 pb-12">
            <h2 className="text-4xl lg:text-5xl font-sans font-normal text-black uppercase tracking-tight max-w-2xl leading-[1.1]">
              OUR <span className="font-bold italic font-serif">MISSION</span> STANDS ON <span className="font-bold italic font-serif">THREE</span> PILLARS:
            </h2>
            <div className="hidden lg:flex mt-4 lg:mt-0">
               <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="5 5 19 5 19 19"></polyline>
               </svg>
            </div>
          </div>

          <div className="flex flex-col max-w-[90rem] mx-auto w-full">
            {STRATEGIC_PILLARS.map((p, i) => (
              <div key={p.title} className="flex flex-col lg:flex-row items-start lg:items-center py-10 lg:py-16 border-b border-black/20 last:border-b-0 group">
                 <div className="w-full lg:w-32 flex-shrink-0 mb-4 lg:mb-0">
                    <span className="font-mono text-xl lg:text-2xl text-black/90 font-medium">/0{i + 1}</span>
                 </div>
                 <div className="w-full lg:w-1/3 pr-8 mb-4 lg:mb-0">
                   <h3 className="text-2xl lg:text-3xl font-sans font-normal text-black capitalize">{p.title}</h3>
                 </div>
                 <div className="w-full lg:w-1/2 ml-auto">
                   <p className="text-[#404040] text-lg lg:text-xl leading-relaxed font-sans font-medium">_{p.description}</p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* In Order To Accomplish This Section */}
      {/* <section className="py-24 lg:py-32 px-4 relative bg-gradient-to-b from-[#ebecf0] to-[#cdd1dc] border-t border-black/10">
        <div className="custom-container relative z-10 w-full px-4 lg:px-12 flex flex-col items-start max-w-[90rem] mx-auto">
          <h2 className="text-5xl lg:text-7xl font-sans font-normal uppercase text-black max-w-5xl leading-[1.05] tracking-tighter">
            IN ORDER TO <span className="font-bold italic font-serif">ACCOMPLISH</span> THIS, <br className="hidden md:block"/> WEB3PHC <span className="font-bold italic font-serif">PROVIDES</span>:
          </h2>
          <div className="w-full flex justify-end mt-12 lg:-mt-20 opacity-80">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="5 5 19 5 19 19"></polyline>
               </svg>
          </div>
        </div>
      </section> */}



      {/* Our Impact in Numbers */}
      <section id="impact" className="py-20 lg:py-32 px-4 relative border-t border-white/10 bg-[#000]">
        
        {/* Abstract Brutalist Lines */}
        <div className="absolute right-8 lg:right-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        <div className="absolute left-8 lg:left-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />

        <div className="custom-container relative z-10 pl-4 pr-4 lg:pl-24 lg:pr-24">
          <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
            <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-4">[ IMPACT_METRICS ]</span>
            <h2 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6">
              <span className="font-sans font-bold block mb-2">BY THE</span> 
              <span className="font-serif italic font-light text-[#d4d4d4] block">NUMBERS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 bg-[#0a0a0a]">
            {IMPACT_METRICS.map((m, i) => (
              <div key={m.label} className="text-left group p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 hover:bg-[#121212] transition-colors">
                <div className="font-mono text-xs text-brand-primary mb-6">/0{i + 1}</div>
                <div className="text-5xl lg:text-6xl font-sans font-black text-white mb-4 group-hover:text-brand-primary transition-colors duration-300 tracking-tighter">{m.value}</div>
                <div className="text-sm font-mono font-bold text-[#e5e5e5] uppercase tracking-widest mb-2">{m.label}</div>
                <div className="text-xs font-mono text-[#808080]">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials – Trusted by Community */}
      <section ref={communityRef} className="py-20 lg:py-32 px-4 relative overflow-hidden border-t border-white/10 bg-[#000]">
        <div className="absolute right-8 lg:right-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        <div className="absolute left-8 lg:left-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />

        <div className="custom-container relative z-10 pl-4 pr-4 lg:pl-24 lg:pr-24">
          <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
            <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-4">_COMMUNITY SIGNALS</span>
            <h2 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6">
              <span className="font-sans font-bold block mb-2">WHAT THEY</span> 
              <span className="font-serif italic font-light text-[#d4d4d4] block">SAY.</span>
            </h2>
            <p className="max-w-3xl text-[#a3a3a3] font-mono text-sm leading-relaxed">
              Hear from the innovators and builders we've empowered.
            </p>
          </div>
          
          <div className="relative max-w-[100vw] lg:max-w-6xl -mx-4 px-4 lg:mx-0 lg:px-0">
            {/* Scroll Container */}
            <div className="flex overflow-x-auto py-8 lg:py-12 gap-6 snap-x snap-mandatory scrollbar-hide pb-16">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="min-w-[85%] md:min-w-[45%] lg:min-w-[400px] snap-center flex">
                        <div className="bg-[#0a0a0a] border border-white/10 hover:border-white/30 flex flex-col h-full w-full p-8 lg:p-10 transition-all duration-300 relative group">
                            <div className="absolute top-8 right-8 text-white/10 text-6xl font-serif font-black pointer-events-none group-hover:text-white/20 transition-colors">
                                "
                            </div>
                            
                            <div className="mb-6 flex justify-end relative z-10">
                                {/* X/Twitter Link */}
                                <a 
                                    href={t.handle ? `https://x.com/${t.handle.replace('@', '')}` : '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2.5 bg-transparent hover:bg-white text-[#a3a3a3] hover:text-black transition-all duration-300 border border-white/20 hover:border-white"
                                    aria-label={`Visit ${t.name} on X`}
                                >
                                    {/* X Logo SVG */}
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-colors" aria-hidden="true">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </svg>
                                </a>
                            </div>
                            
                            <p className="text-[#d4d4d4] text-sm lg:text-base mb-8 font-mono leading-relaxed flex-grow relative z-10 break-words whitespace-normal">
                                {t.quote}
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                                {t.image ? (
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-none grayscale object-cover shrink-0 border border-white/20" />
                                ) : (
                                    <div className="w-12 h-12 rounded-none bg-[#1a1a1a] flex items-center justify-center text-sm font-mono font-bold text-white shrink-0 border border-white/20">
                                        {t.name.charAt(0)}
                                    </div>
                                )}
                                <div className="min-w-0 flex-1">
                                    <p className="font-bold font-sans text-white text-base truncate uppercase tracking-widest">{t.name}</p>
                                    <div className="flex flex-col">
                                        <p className="text-xs font-mono text-[#808080] truncate leading-tight tracking-wide mt-1">__{t.role}</p>
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
      <section id="tribe" className="py-20 lg:py-32 px-4 relative overflow-hidden border-t border-white/10 bg-[#000]">
        <div className="absolute right-8 lg:right-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        <div className="absolute left-8 lg:left-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />

        <div className="custom-container relative z-10 pl-4 pr-4 lg:pl-24 lg:pr-24">
          <div className="flex flex-col mb-16 border-b border-white/10 pb-8 text-center items-center">
            <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-4">[ JOIN_THE_TRIBE ]</span>
            <h2 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6">
              <span className="font-sans font-bold block mb-2">BUILD</span> 
              <span className="font-serif italic font-light text-[#d4d4d4] block">WITH US.</span>
            </h2>
            <p className="max-w-xl text-[#a3a3a3] font-mono text-sm leading-relaxed">
              Connect with a global network of Web3 enthusiasts, builders, and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#0a0a0a]">
            {COMMUNITY_LINKS.map(({ href, label, Icon, sub }, i) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block text-center hover:bg-[#121212] transition-colors group p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 relative overflow-hidden">
                <div className="absolute top-6 left-6 font-mono text-xs text-brand-primary">/0{i + 1}</div>
                <div className="w-16 h-16 mx-auto mb-8 bg-[#1a1a1a] flex items-center justify-center transition-transform duration-300 rounded-none border border-white/20 group-hover:border-white/50">
                    <Icon className="text-white w-8 h-8 fill-current group-hover:text-brand-primary transition-colors" />
                </div>
                <p className="font-sans font-bold text-white mb-2 text-xl tracking-tight uppercase">{label.includes("X") ? "@web3PHC" : label}</p>
                <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300">_{sub}</p>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/reconfig" className="bg-white text-black font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#e5e5e5] transition-colors inline-flex flex-row items-center gap-2 border border-white">
              LAP THIS UNIT!! <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us - Adapted to Brutalist/Metrics Style */}
      <section id="hello" className="py-20 lg:py-32 px-4 relative border-t border-white/10 bg-[#000]">
        
        {/* Abstract Brutalist Lines */}
        <div className="absolute right-8 lg:right-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        <div className="absolute left-8 lg:left-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />

        <div className="custom-container relative z-10 pl-4 pr-4 lg:pl-24 lg:pr-24">
            <div className="flex flex-col mb-16 border-b border-white/10 pb-8">
                <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-4">[ DIRECT_CONTACT ]</span>
                <h2 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6">
                  <span className="font-sans font-bold block mb-2">SAY WHO</span> 
                  <span className="font-serif italic font-light text-[#d4d4d4] block">GOES!!!</span>
                </h2>
                <p className="max-w-xl text-[#a3a3a3] font-mono text-sm leading-relaxed">
                  Got questions or want to partner with us? Reach out directly.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#0a0a0a]">
                <a href="mailto:hello@lbdao.xyz" className="block text-center hover:bg-[#121212] transition-colors group p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
                    <div className="absolute top-6 left-6 font-mono text-xs text-brand-primary">/01</div>
                    <div className="w-16 h-16 mx-auto mb-8 bg-[#1a1a1a] flex items-center justify-center transition-transform duration-300 rounded-none border border-white/20 group-hover:border-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:text-brand-primary transition-colors">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                    <p className="font-sans font-bold text-white mb-2 text-lg tracking-tight uppercase">General Inquiries</p>
                    <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300">_hello@lbdao.xyz</p>
                </a>
                 <a href="mailto:adams@lbdao.xyz" className="block text-center hover:bg-[#121212] transition-colors group p-8 lg:p-12 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
                    <div className="absolute top-6 left-6 font-mono text-xs text-brand-primary">/02</div>
                    <div className="w-16 h-16 mx-auto mb-8 bg-[#1a1a1a] flex items-center justify-center transition-transform duration-300 rounded-none border border-white/20 group-hover:border-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:text-brand-primary transition-colors">
                          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="font-sans font-bold text-white mb-2 text-lg tracking-tight uppercase">Direct Contact</p>
                    <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300">_adams@lbdao.xyz</p>
                </a>
                 <a href="tel:+2349050811584" className="block text-center hover:bg-[#121212] transition-colors group p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-6 left-6 font-mono text-xs text-brand-primary">/03</div>
                    <div className="w-16 h-16 mx-auto mb-8 bg-[#1a1a1a] flex items-center justify-center transition-transform duration-300 rounded-none border border-white/20 group-hover:border-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:text-brand-primary transition-colors">
                          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="font-sans font-bold text-white mb-2 text-lg tracking-tight uppercase">Phone</p>
                    <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300">_+234 905 081 1584</p>
                </a>
            </div>
        </div>
      </section>

      {/* Conference teaser – NEXT ACADEMY style Adapted to Metrics Style */}
      <section className="py-24 lg:py-40 px-4 relative mt-0 border-t border-white/10 bg-[#000] overflow-hidden">
        {/* Abstract Brutalist Lines */}
        <div className="absolute right-8 lg:right-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        <div className="absolute left-8 lg:left-16 top-0 w-[1px] h-full bg-white/10 hidden md:block" />
        
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-[#fe6500]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="custom-container text-center max-w-3xl mx-auto relative z-10 pl-4 pr-4 lg:pl-24 lg:pr-24">
            <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-6 inline-block">[ FLAGSHIP_EVENT ]</span>
            <h2 className="text-5xl lg:text-7xl font-display font-normal text-white mb-8">
              <span className="font-sans font-bold block mb-2 leading-[0.9] tracking-tight">ROAD TO</span> 
              <span className="font-serif italic font-light text-[#fe6500] block">RE:CONFIG.</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg lg:text-xl font-mono mb-12 max-w-2xl mx-auto leading-relaxed">
              The premier gathering for Web3 founders, builders, and investors in Nigeria.
            </p>
            
            <Link to="/reconfig" className="bg-white text-black font-sans font-bold text-sm uppercase tracking-wider px-10 py-5 hover:bg-[#e5e5e5] transition-colors inline-block border border-white">
              DISCOVER RE:CONFIG
            </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
