import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaGlobe, FaCode, FaArrowRight, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useEffect, useRef } from "react";

const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  // Use a spring for smoother animation
  const springValue = useSpring(from, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    duration: duration * 1000
  });

  const displayValue = useTransform(springValue, (current) => {
    // Round to whole numbers
    const rounded = Math.round(current);
    // Format based on magnitude (e.g., 1200 -> 1,200)
    return rounded.toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, to, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const ReConfig = () => {
  // Animation Variants
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <Helmet>
        <title>Re:Config Pitakwa | Web3PHC</title>
        <meta name="description" content="A global convergence point for builders & creators. 8 Days of Code, Culture, and Capital driving borderless innovation." />
        <meta property="og:title" content="Re:Config Pitakwa | Web3PHC" />
        <meta property="og:description" content="A global convergence point for builders & creators. 8 Days of Code, Culture, and Capital driving borderless innovation." />
        <meta property="og:image" content="/thumb.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* GLOBAL NOISE TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 1. HERO SECTION: ETHCC STYLE (MASSIVE TYPOGRAPHY) */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-20">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('/images/refinery-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="custom-container relative z-10 w-full px-4 md:px-8">
            <motion.div 
                className="max-w-7xl mx-auto"
                variants={container}
                initial="hidden"
                animate="visible"
            >
               {/* Date & Location Label (EthCC Style: Top Left or distinct) */}
               <motion.div variants={item} className="mb-6 flex flex-col md:flex-row md:items-center gap-4 text-zinc-400 font-mono text-sm md:text-base tracking-widest uppercase border-l-2 border-brand-primary pl-4">
                   <div className="flex items-center gap-2">
                       <FaCalendarAlt className="text-white" /> Oct 17 – 24, 2026
                   </div>
                   <span className="hidden md:block text-zinc-600">|</span>
                   <div className="flex items-center gap-2">
                       <MdLocationOn className="text-white" /> Pitakwa (PHC), Rivers State
                   </div>
               </motion.div>

               {/* Massive Title */}
               <motion.h1 variants={item} className="text-[14vw] sm:text-[12vw] leading-[0.8] font-display font-normal text-white tracking-tighter mb-8 mix-blend-difference relative">
                  RE:CONFIG<br/>
                  <span className="text-brand-primary italic pr-4">PITAKWA.</span>
               </motion.h1>

               {/* Positive Value Prop (Builder Focused) */}
               <motion.div variants={item} className="max-w-3xl">
                   <h2 className="text-2xl md:text-4xl text-white font-bold mb-6 leading-tight">
                       A Global Convergence Point for <span className="text-brand-primary">Builders & Creators</span>.
                   </h2>
                   <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-2xl">
                       An 8-day convergence of 1,200+ active builders ready to deploy on your protocol. We are the engine room for borderless innovation.
                   </p>
               </motion.div>

               {/* CTAs */}
               <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                  <button className="btn bg-brand-primary text-black hover:scale-105 transition-transform px-10 py-5 text-lg font-bold rounded-none skew-x-[-10deg] border-2 border-transparent">
                    <span className="skew-x-[10deg] inline-block">Get Tickets</span>
                  </button>
                  <button className="btn-outline text-white border-white/20 hover:bg-white text-lg px-10 py-5 font-bold rounded-none skew-x-[-10deg] hover:text-black transition-colors">
                     <span className="skew-x-[10deg] inline-block">Apply to Speak</span>
                  </button>
               </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 2. STATIC STATS GRID (ETHCC STYLE) */}
      <section className="bg-[#0a0a0a] text-white py-20 border-b border-[#262626]">
         <div className="custom-container">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                 <div className="flex flex-col border-l border-[#262626] pl-6">
                     <span className="text-5xl md:text-7xl font-display font-normal tracking-tighter mb-2 text-brand-primary">
                        <Counter from={0} to={1200} suffix="+" />
                     </span>
                     <span className="text-sm font-sans font-bold uppercase tracking-widest text-[#a3a3a3]">Active Builders</span>
                 </div>
                 <div className="flex flex-col border-l border-[#262626] pl-6">
                     <span className="text-5xl md:text-7xl font-display font-normal tracking-tighter mb-2 text-brand-primary">
                        <Counter from={0} to={20} suffix="+" />
                     </span>
                     <span className="text-sm font-sans font-bold uppercase tracking-widest text-[#a3a3a3]">Projects</span>
                 </div>
                 <div className="flex flex-col border-l border-[#262626] pl-6">
                     <span className="text-5xl md:text-7xl font-display font-normal tracking-tighter mb-2 text-brand-primary">
                        <Counter from={0} to={8} />
                     </span>
                     <span className="text-sm font-sans font-bold uppercase tracking-widest text-[#a3a3a3]">Days of innovation</span>
                 </div>
                 <div className="flex flex-col border-l border-[#262626] pl-6">
                     <span className="text-5xl md:text-7xl font-display font-normal tracking-tighter mb-2 text-brand-primary">
                        $<Counter from={0} to={50} suffix="k+" />
                     </span>
                     <span className="text-sm font-sans font-bold uppercase tracking-widest text-[#a3a3a3]">Total Valuation</span>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. THE VISION: UNTAPPED TALENT MINE */}
      <section className="py-24 bg-zinc-950 border-b border-white/10 relative overflow-hidden">
          <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-6">The Opportunity</h2>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.9] mb-8">
                      THE UNTAPPED <br/>
                      <span className="text-zinc-600">TALENT MINE.</span>
                  </h3>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8">
                      Port Harcourt is the cultural and technical heartbeat of the South-South—anchored by at least 6 higher institutions and a builder density that is aggressively hungry for scale. We aren&apos;t just building for the local neighborhood; our founders are engineering dApps and startups designed to serve both local needs and global markets from Day One.
                  </p>
                  <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                      We don&apos;t chase visibility; we deliver traction. By spotlighting these high-output teams, we make it effortless for global investors and protocols to discover builders who are solving real-world problems with borderless ambitions. The builders here aren&apos;t waiting for permission—they are shipping scalable code. Partnering with Re:Config means onboarding a pipeline of talent that is ready to service the world.
                  </p>
                  {/* <a href="#" className="inline-flex items-center gap-2 text-white border-b border-brand-primary pb-1 hover:text-brand-primary transition-colors font-bold uppercase tracking-widest text-sm">
                      Read the Manifesto <FaArrowRight />
                  </a> */}
              </div>
              <div className="relative h-[600px] w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-[url('/images/241.JPG')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-xl p-8 border-l-4 border-brand-primary max-w-sm shadow-2xl">
                       <p className="text-white text-xl md:text-2xl font-black leading-tight italic">&quot;It&apos;s raw in Ph, the energy, passion, and drive. And now it&apos;s globally connected.&quot;</p>
                       <div className="mt-6 text-sm text-brand-primary font-mono uppercase tracking-widest font-bold"><a href="https://x.com/greatAdams01" target="_blank" rel="noopener noreferrer" className="hover:underline">Great Adams</a> — Lead Web3PH</div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. THE TRACKS (PILLARS) */}
      <section className="py-24 bg-zinc-900 border-t border-black relative">
         <div className="custom-container">
             <div className="text-center mb-20">
                 <h2 className="text-[15vw] md:text-[8vw] font-display font-normal text-white/5 leading-none absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">PROGRAM</h2>
                 <h3 className="text-5xl md:text-6xl font-display font-normal text-white relative z-10">THREE PILLARS.</h3>
                 <p className="text-[#a3a3a3] mt-6 max-w-2xl mx-auto relative z-10 text-lg font-light">
                    Designed for builders, creatives, and policymakers to co-create the future.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                {/* Track 1: BUILD */}
                <div className="card group hover:border-brand-primary/50 flex flex-col h-full bg-[#121212]">
                    <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                        <span>Oct 17 – 22</span>
                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-brand-primary transition-colors">
                            <FaCode size={12} />
                        </div>
                    </div>
                    <h4 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6 group-hover:text-brand-primary transition-colors relative z-10">BUILD.</h4>
                    <p className="text-[#a3a3a3] leading-relaxed mb-8 relative z-10 flex-grow font-light">
                        <span className="text-white font-sans font-bold uppercase block mb-2 text-sm tracking-wider">The Garden City Residency.</span> 30 elite builders living together. 6 days of deep work. Protocol bootcamps. Shipping MVPs that solve real problems.
                    </p>
                    <ul className="space-y-4 text-sm font-sans text-[#a3a3a3] relative z-10 mt-auto border-t border-[#262626] pt-6">
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Hacker House</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Mentorship</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Demo Day</li>
                    </ul>
                </div>

                {/* Track 2: LEARN */}
                <div className="card group hover:border-white/50 flex flex-col h-full bg-[#121212]">
                    <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                        <span>Oct 17 – 23</span>
                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-white transition-colors">
                            <FaUsers size={12} />
                        </div>
                    </div>
                    <h4 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6 group-hover:text-white transition-colors relative z-10">LEARN.</h4>
                    <p className="text-[#a3a3a3] leading-relaxed mb-8 relative z-10 flex-grow font-light">
                        <span className="text-white font-sans font-bold uppercase block mb-2 text-sm tracking-wider">The Pop-Up City.</span> An open innovation hub for everyone. Daily workshops on DeFi, Governance, and Creative Tech. Onboarding the next 10,000.
                    </p>
                    <ul className="space-y-4 text-sm font-sans text-[#a3a3a3] relative z-10 mt-auto border-t border-[#262626] pt-6">
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white"></div> Workshops</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white"></div> Policy Lounge</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white"></div> Creator Studio</li>
                    </ul>
                </div>

                {/* Track 3: CONNECT */}
                <div className="card group hover:border-brand-primary/50 flex flex-col h-full bg-[#121212]">
                    <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                        <span>Oct 24</span>
                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-brand-primary transition-colors">
                            <FaGlobe size={12} />
                        </div>
                    </div>
                    <h4 className="text-4xl lg:text-5xl font-display font-normal text-white mb-6 group-hover:text-brand-primary transition-colors relative z-10">CONNECT.</h4>
                    <p className="text-[#a3a3a3] leading-relaxed mb-8 relative z-10 flex-grow font-light">
                        <span className="text-white font-sans font-bold uppercase block mb-2 text-sm tracking-wider">The Summit.</span> The grand finale. High-level panels with global leaders, government officials, and VCs. Ending with the "Garden City Glow" afterparty.
                    </p>
                    <ul className="space-y-4 text-sm font-sans text-[#a3a3a3] relative z-10 mt-auto border-t border-[#262626] pt-6">
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Main Stage</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Deal Flow</li>
                        <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Networking</li>
                    </ul>
                </div>
             </div>
         </div>
      </section>

      {/* 5. THE AUTHORITY: WHY WE BUILD HERE (BUILDER DENSITY) */}
      <section className="py-24 bg-white text-[#0a0a0a] border-y border-[#262626]">
         <div className="custom-container">
             <h2 className="text-4xl lg:text-5xl font-display font-normal text-[#0a0a0a] mb-16 max-w-md">WHY WE BUILD HERE.</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="group">
                   <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                      <FaUsers size={32} />
                   </div>
                   <h3 className="text-2xl font-display font-normal text-[#0a0a0a] mb-4">The Builder Density</h3>
                   <p className="font-sans text-[#737373] leading-relaxed font-light">Home to one of the largest concentrations of technical talent in West Africa. With at least 6 higher institutions within a 20km radius, our builders are designing scalable, borderless protocols that serve the world.</p>
                </div>
                <div className="group">
                    <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                      <FaCode size={32} />
                   </div>
                   <h3 className="text-2xl font-display font-normal text-[#0a0a0a] mb-4">The Talent Pipeline</h3>
                   <p className="font-sans text-[#737373] leading-relaxed font-light">From zero-to-one. Our ecosystem is a global factory for shipping products. We are organizing a world-class pipeline of founders ready to scale borderless solutions.</p>
                </div>
                <div className="group">
                    <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                      <FaGlobe size={32} />
                   </div>
                   <h3 className="text-2xl font-display font-normal text-[#0a0a0a] mb-4">The Cultural Heartbeat</h3>
                   <p className="font-sans text-[#737373] leading-relaxed font-light">From art to technology, we export culture globally. We represent the borderless Ownership Economy—giving creators tools to own and scale their future on-chain.</p>
                </div>
             </div>
         </div>
      </section>

      {/* 6. FOR BUSINESSES: THE CONSUMER LAYER */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#262626] relative overflow-hidden">
          <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] w-full bg-[#121212] rounded-[16px] overflow-hidden border border-[#262626] group">
                  <div className="absolute inset-0 bg-[url('/images/244.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                       <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg mb-6">
                            <FaGlobe size={24} className="text-[#0a0a0a]" />
                       </div>
                       <h4 className="text-3xl font-display font-normal text-white mb-2">Consumer Crypto Adoption</h4>
                       <p className="text-[#a3a3a3] font-sans font-light tracking-wide">The ultimate sandbox for real-world utilities.</p>
                  </div>
              </div>
              <div className="order-1 lg:order-2">
                  <h2 className="text-sm font-sans font-bold text-brand-primary uppercase tracking-widest mb-6">For Businesses</h2>
                  <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-normal text-white leading-[0.9] mb-8">
                      THE CONSUMER <br/>
                      <span className="text-[#737373] italic">LAYER.</span>
                  </h3>
                  <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed mb-8">
                      We aren&apos;t just a pipeline for developers—we are a massive distribution engine for consumer-facing Web3 apps. Acquire retail users looking for real-world utility in payments, social, and gaming through multiple high-visibility touchpoints:
                  </p>
                  <ul className="space-y-4 text-[#a3a3a3] font-sans text-base lg:text-lg mb-8 font-light">
                      <li className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-primary mt-2.5 flex-shrink-0"></div> 
                         <span><strong className="text-white font-medium">Digital Distribution:</strong> Millions of monthly impressions across our social media, dedicated newsletter blasts, and priority website features.</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-primary mt-2.5 flex-shrink-0"></div> 
                         <span><strong className="text-white font-medium">Physical Hubs:</strong> Direct user onboarding and product testing at our Pop-Up City Hubs and the Main Conference Day.</span>
                      </li>
                      <li className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 bg-brand-primary mt-2.5 flex-shrink-0"></div> 
                         <span><strong className="text-white font-medium">Bespoke Experiences:</strong> Request custom side-events, dedicated product tours, or private networking sessions tailored to your protocol.</span>
                      </li>
                  </ul>
                  <p className="text-lg md:text-xl text-[#a3a3a3] font-light leading-relaxed mb-10">
                      Skip the saturated markets—acquire retail users where the cost-per-acquisition is low and retention is structurally high. 
                  </p>
                  
                  {/* Business Metrics Row */}
                  <div className="flex flex-wrap gap-8 border-t border-[#262626] pt-8 mt-4">
                      <div>
                          <p className="text-4xl font-display font-normal text-white mb-1">4M+</p>
                          <p className="text-xs font-sans uppercase tracking-widest text-[#737373] font-bold">Social Impressions</p>
                      </div>
                      <div>
                          <p className="text-4xl font-display font-normal text-white mb-1">15k+</p>
                          <p className="text-xs font-sans uppercase tracking-widest text-[#737373] font-bold">Newsletter Subs</p>
                      </div>
                      <div>
                          <p className="text-4xl font-display font-normal text-white mb-1">90%</p>
                          <p className="text-xs font-sans uppercase tracking-widest text-[#737373] font-bold">Mobile First</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. PAST EDITIONS / GALLERY (NEW) */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#262626] relative">
          <div className="custom-container">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                   <div>
                       <h2 className="text-sm font-sans font-bold text-brand-primary uppercase tracking-widest mb-4">Past Editions</h2>
                       <h3 className="text-5xl md:text-6xl font-display font-normal text-white">HISTORY BEING MADE.</h3>
                   </div>
                   <div className="hidden md:block w-32 h-px bg-[#404040]"></div>
               </div>

                {/* 2024 Event Numbers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-[#262626] pb-16">
                    <div className="text-center md:text-left border-l border-[#262626] pl-6">
                        <div className="text-4xl md:text-5xl font-display font-normal text-white mb-2">1,200+</div>
                        <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#737373]">2024 Attendees</div>
                    </div>
                    <div className="text-center md:text-left border-l border-[#262626] pl-6">
                        <div className="text-4xl md:text-5xl font-display font-normal text-white mb-2">21+</div>
                        <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#737373]">Partners</div>
                    </div>
                    <div className="text-center md:text-left border-l border-[#262626] pl-6">
                        <div className="text-4xl md:text-5xl font-display font-normal text-white mb-2">10+</div>
                        <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#737373]">Web3 Projects</div>
                    </div>
                    <div className="text-center md:text-left border-l border-[#262626] pl-6">
                        <div className="text-4xl md:text-5xl font-display font-normal text-white mb-2">5</div>
                        <div className="text-xs font-sans font-bold uppercase tracking-widest text-[#737373]">Blockchains</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Main highlight image - big */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 relative h-64 md:h-96 bg-zinc-900 overflow-hidden rounded-sm group"
                    >
                         <div className="absolute inset-0 bg-[url('/images/242.JPG')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </motion.div>

                    {/* Secondary image */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-64 md:h-96 bg-zinc-900 overflow-hidden rounded-sm group"
                    >
                         <div className="absolute inset-0 bg-[url('/images/243.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </motion.div>

                    {/* Grid of smaller images */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative h-64 bg-zinc-900 overflow-hidden rounded-sm group"
                    >
                         <div className="absolute inset-0 bg-[url('/images/244.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative h-64 bg-zinc-900 overflow-hidden rounded-sm group"
                    >
                         <div className="absolute inset-0 bg-[url('/images/245.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </motion.div>

                     <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.5 }}
                         className="relative h-64 bg-zinc-900 overflow-hidden rounded-sm group"
                     >
                          <div className="absolute inset-0 bg-[url('/images/246.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                     </motion.div>
                </div>
          </div>
      </section>

      {/* 8. SPONSORSHIP (CLOSE) */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0a] text-white text-center border-t border-[#262626]">
         <div className="custom-container relative z-10">
             <h2 className="text-5xl lg:text-[7rem] font-display font-normal text-white mb-8 leading-none tracking-tight">JOIN THE MOVEMENT.</h2>
             <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-12 font-light">
                Partner with Web3 PH Re:Config to capture the highest-value developer and user market in Nigeria.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="btn bg-white text-black hover:bg-[#e5e5e5] px-12 py-5 text-lg font-bold">
                   <span>Download Deck</span>
                </button>
                <button className="btn-outline border-[#404040] text-white hover:border-white px-12 py-5 text-lg font-bold">
                   <span>Become a Partner</span>
                </button>
             </div>
         </div>
      </section>
    </>
  );
};
export default ReConfig;
