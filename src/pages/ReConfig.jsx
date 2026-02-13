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
        <meta name="description" content="The Largest Gathering of Builders & Creators in the South-South. 12 Days of Code, Culture, and Capital in the Oil & Gas Capital." />
        <meta property="og:title" content="Re:Config Pitakwa | Web3PHC" />
        <meta property="og:description" content="The Largest Gathering of Builders & Creators in the South-South. 12 Days of Code, Culture, and Capital in the Oil & Gas Capital." />
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
                       <FaCalendarAlt className="text-white" /> Oct 13 – 24, 2026
                   </div>
                   <span className="hidden md:block text-zinc-600">|</span>
                   <div className="flex items-center gap-2">
                       <MdLocationOn className="text-white" /> Pitakwa (PHC), Rivers State
                   </div>
               </motion.div>

               {/* Massive Title */}
               <motion.h1 variants={item} className="text-[12vw] leading-[0.8] font-black text-white tracking-tighter mb-8 mix-blend-difference">
                  RE:CONFIG<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500">PITAKWA.</span>
               </motion.h1>

               {/* Positive Value Prop (Builder Focused) */}
               <motion.div variants={item} className="max-w-3xl">
                   <h2 className="text-2xl md:text-4xl text-white font-bold mb-6 leading-tight">
                       The Largest Gathering of <span className="text-brand-primary">Builders & Creators</span> in the South-South.
                   </h2>
                   <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-2xl">
                       The sleeper network is awake. A 12-day convergence of 1,200+ active builders ready to deploy on your protocol. We are the engine room of Nigeria’s next crypto wave.
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
      <section className="bg-white text-black py-20 border-b border-zinc-200">
         <div className="custom-container">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                 <div className="flex flex-col border-l-4 border-brand-primary pl-6">
                     <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                        <Counter from={0} to={1200} suffix="+" />
                     </span>
                     <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Active Builders</span>
                 </div>
                 <div className="flex flex-col border-l-4 border-black pl-6">
                     <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                        <Counter from={0} to={20} suffix="+" />
                     </span>
                     <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Projects</span>
                 </div>
                 <div className="flex flex-col border-l-4 border-black pl-6">
                     <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                        <Counter from={0} to={12} />
                     </span>
                     <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Days of innovation</span>
                 </div>
                 <div className="flex flex-col border-l-4 border-black pl-6">
                     <span className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
                        $<Counter from={0} to={50} suffix="k+" />
                     </span>
                     <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Total Valuation</span>
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
                      Pitakwa is hungry. With 6 higher institutions and a thriving network of active DAOs, we are the engine room of Nigeria’s next crypto wave.
                  </p>
                   <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                      Don&apos;t just sponsor an event. Onboard a movement. The builders here aren&apos;t just looking for swag; they represent your next 10,000 active users.
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
                       <p className="text-white text-xl md:text-2xl font-black leading-tight italic">&quot;The energy in Pitakwa is different. It&apos;s raw, it&apos;s hungry, and it&apos;s ready.&quot;</p>
                       <div className="mt-6 text-sm text-brand-primary font-mono uppercase tracking-widest font-bold">Great Adams — Lead Web3PHC</div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. THE TRACKS (PILLARS) */}
      <section className="py-24 bg-zinc-900 border-t border-black relative">
         <div className="custom-container">
             <div className="text-center mb-20">
                 <h2 className="text-[15vw] md:text-[8vw] font-black text-white/5 leading-none absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">PROGRAM</h2>
                 <h3 className="text-4xl md:text-5xl font-black text-white relative z-10">THREE PILLARS.</h3>
                 <p className="text-zinc-400 mt-4 max-w-2xl mx-auto relative z-10 text-lg">
                    Designed for builders, creatives, and policymakers to co-create the future.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Track 1: BUILD */}
                <div className="group border-t-2 border-white/20 pt-8 hover:border-brand-primary transition-colors">
                    <div className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-widest">Oct 13 – 22</div>
                    <h4 className="text-3xl font-black text-white mb-4 group-hover:text-brand-primary transition-colors">BUILD.</h4>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        **The Garden City Residency.**<br/> 50 elite builders living together. 10 days of deep work. Protocol bootcamps. Shipping MVPs that solve real problems.
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-500">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Hacker House</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Mentorship</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary"></div> Demo Day</li>
                    </ul>
                </div>

                {/* Track 2: LEARN */}
                <div className="group border-t-2 border-white/20 pt-8 hover:border-purple-500 transition-colors">
                    <div className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-widest">Oct 13 – 23</div>
                    <h4 className="text-3xl font-black text-white mb-4 group-hover:text-purple-500 transition-colors">LEARN.</h4>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        **The Pop-Up City.**<br/> An open innovation hub for everyone. Daily workshops on DeFi, Governance, and Creative Tech. Onboarding the next 10,000.
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-500">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500"></div> Workshops</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500"></div> Policy Lounge</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500"></div> Creator Studio</li>
                    </ul>
                </div>

                {/* Track 3: CONNECT */}
                <div className="group border-t-2 border-white/20 pt-8 hover:border-green-500 transition-colors">
                    <div className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-widest">Oct 24</div>
                    <h4 className="text-3xl font-black text-white mb-4 group-hover:text-green-500 transition-colors">CONNECT.</h4>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        **The Summit.**<br/> The grand finale. High-level panels with global leaders, government officials, and VCs. Ending with the "Garden City Glow" afterparty.
                    </p>
                    <ul className="space-y-2 text-sm text-zinc-500">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500"></div> Main Stage</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500"></div> Deal Flow</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500"></div> Networking</li>
                    </ul>
                </div>
             </div>
         </div>
      </section>

      {/* 5. THE AUTHORITY: WHY WE BUILD HERE (BUILDER DENSITY) */}
      <section className="py-24 bg-white text-black border-y border-zinc-200">
         <div className="custom-container">
             <h2 className="text-4xl lg:text-5xl font-black text-black mb-16 max-w-md">WHY WE BUILD HERE.</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="group">
                   <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center rounded-none mb-6 text-brand-primary skew-x-[-10deg]">
                      <FaUsers size={32} className="skew-x-[10deg]" />
                   </div>
                   <h3 className="text-2xl font-bold text-black mb-4">The Builder Density</h3>
                   <p className="text-zinc-600 leading-relaxed">Home to the largest concentration of technical talent. We have 6 higher institutions within a 20km radius. We don&apos;t just trade; we build.</p>
                </div>
                <div className="group">
                    <div className="w-16 h-16 bg-purple-500/10 flex items-center justify-center rounded-none mb-6 text-purple-500 skew-x-[-10deg]">
                      <FaCode size={32} className="skew-x-[10deg]" />
                   </div>
                   <h3 className="text-2xl font-bold text-black mb-4">The Talent Pipeline</h3>
                   <p className="text-zinc-600 leading-relaxed">From zero-to-one. Our ecosystem is a factory for shipping products. The &quot;Treasure Base&quot; of human capital is ready to build the next unicorn.</p>
                </div>
                <div className="group">
                    <div className="w-16 h-16 bg-green-500/10 flex items-center justify-center rounded-none mb-6 text-green-500 skew-x-[-10deg]">
                      <FaGlobe size={32} className="skew-x-[10deg]" />
                   </div>
                   <h3 className="text-2xl font-bold text-black mb-4">The Cultural Heartbeat</h3>
                   <p className="text-zinc-600 leading-relaxed">From Afrobeats to Highlife, we export culture. We represent the Ownership Economy—giving artists tools to own their future on-chain.</p>
                </div>
             </div>
         </div>
      </section>

      {/* 6. PAST EDITIONS / GALLERY (NEW) */}
      <section className="py-24 bg-zinc-950 border-b border-white/10 relative">
          <div className="custom-container">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                   <div>
                       <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Past Editions</h2>
                       <h3 className="text-4xl md:text-5xl font-black text-white">HISTORY BEING MADE.</h3>
                   </div>
                   <div className="hidden md:block w-32 h-1 bg-white/20"></div>
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

      {/* 7. SPONSORSHIP (CLOSE) */}
      <section className="py-32 relative overflow-hidden bg-zinc-950 text-white text-center">
         <div className="custom-container relative z-10">
             <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter">JOIN THE MOVEMENT.</h2>
             <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
                Partner with Web3 PH Re:Config to capture the highest-value developer and user market in Nigeria.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="btn bg-white text-black hover:bg-zinc-200 px-12 py-6 text-xl font-bold rounded-none skew-x-[-10deg]">
                   <span className="skew-x-[10deg] inline-block">Download Deck</span>
                </button>
                <button className="btn-outline border-zinc-700 text-white hover:border-white px-12 py-6 text-xl font-bold rounded-none skew-x-[-10deg]">
                   <span className="skew-x-[10deg] inline-block">Become a Partner</span>
                </button>
             </div>
         </div>
      </section>
    </>
  );
};
export default ReConfig;
