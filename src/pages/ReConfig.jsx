import { motion } from "framer-motion";
import { FaGlobe, FaCode, FaIndustry, FaMusic, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ReConfig = () => {
  // Animation Variants
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      {/* GLOBAL NOISE TEXTURE */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* Split Background */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
           {/* Left: Industrial (Gritty, Darker) */}
           <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative">
              <div className="absolute inset-0 bg-[url('/images/refinery-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-black/60"></div>
           </div>
           {/* Right: Tech (Neon, Sleek) */}
           <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-gradient-to-bl from-brand-primary/20 via-black to-black relative">
               <div className="absolute inset-0 bg-[url('/images/code-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-screen"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-l"></div>
           </div>
        </div>

        <div className="custom-container relative z-10 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
            {/* Left Content */}
            <motion.div 
                className="text-center lg:text-left pt-10 lg:pt-0"
                variants={container}
                initial="hidden"
                animate="visible"
            >
              <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
                RE:CONFIG<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-white to-zinc-600 block text-4xl sm:text-5xl lg:text-6xl mt-2 tracking-tight">PITAKWA.</span>
              </motion.h1>
              
              <motion.p variants={item} className="text-zinc-400 text-lg lg:text-xl font-light max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed tracking-wide">
                The South-South’s Premier Convergence. We are reclaiming the narrative of the Garden City.
              </motion.p>
              
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="btn px-8 py-4 text-base font-bold shadow-[0_0_30px_rgba(254,101,0,0.4)] hover:shadow-[0_0_50px_rgba(254,101,0,0.6)] hover:scale-105 transition-all duration-300 bg-brand-primary text-black border-none rounded-xl">
                    Get Tickets
                  </button>
                  <button className="btn-outline px-8 py-4 text-white text-base font-bold hover:bg-white/10 border-white/20 hover:border-white rounded-xl transition-all duration-300">
                     Apply for Garden City Residency
                  </button>
              </motion.div>
              
              <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-zinc-500 font-mono">
                 <span className="flex items-center gap-2"><FaCalendarAlt className="text-brand-primary"/> Oct 13 – 24, 2026</span>
                 <span className="hidden sm:block">|</span>
                 <span className="flex items-center gap-2"><MdLocationOn className="text-brand-primary"/> Pitakwa (PHC), Rivers State</span>
              </motion.div>
            </motion.div>

             {/* Right Visual */}
            <motion.div 
               className="relative lg:h-screen flex items-center justify-center"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
            >
               <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 border-[1px] border-brand-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border-[1px] border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-32 h-32 bg-brand-primary/20 blur-[50px] rounded-full animate-pulse"></div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE TRACTION BAR */}
      <section className="bg-brand-primary py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
         <div className="inline-flex animate-[marquee_20s_linear_infinite] gap-12 font-bold text-black uppercase tracking-widest text-sm lg:text-base items-center">
            <span>{`//`} 2024 LEGACY: 1,200+ ATTENDEES</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} 21 STRATEGIC PARTNERSHIPS</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} 9 GROUNDBREAKING PROJECTS</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} WE AREN’T GUESSING. WE ARE SCALING.</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
             <span>{`//`} 2024 LEGACY: 1,200+ ATTENDEES</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} 21 STRATEGIC PARTNERSHIPS</span>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} 9 GROUNDBREAKING PROJECTS</span>
             <span className="w-2 h-2 bg-black rounded-full"></span>
            <span>{`//`} WE AREN’T GUESSING. WE ARE SCALING.</span>
         </div>
      </section>

      {/* 3. THE PROBLEM: "THE BLUE OCEAN" (MOVED TO TOP) */}
      <section className="py-24 bg-white text-black relative border-b border-black/10">
          <div className="custom-container text-center max-w-4xl">
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-6">The Capital Has Shifted</h2>
              <h3 className="text-5xl md:text-7xl font-black text-black leading-none mb-8 tracking-tighter">
                  LAGOS IS SATURATED.<br/>
                  <span className="text-zinc-500">PITAKWA IS THE BLUE OCEAN.</span>
              </h3>
              <p className="text-xl md:text-2xl text-zinc-700 font-medium leading-relaxed mb-12">
                  The market is crowded in the West. The South-South is the untaped frontier. Web3 PH Re:Config is your gateway to capture the highest-value developer and user market in Nigeria before the rest of the world wakes up.
              </p>
              <div className="flex justify-center">
                  <FaArrowRight className="text-4xl text-black animate-bounce" />
              </div>
          </div>
      </section>

      {/* 4. THE SOLUTION: THE EXPERIENCE (Timeline) (MOVED UP) */}
      <section className="py-20 lg:py-32 bg-zinc-950 border-t border-white/20">
         <div className="custom-container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div className="max-w-xl">
                    <h2 className="section-title mb-4">12 Days to ReConfig the System</h2>
                    <p className="text-zinc-400 text-lg">
                       This is not a conference. It is a temporary autonomous zone for builders.
                    </p>
                 </div>
                 <button className="btn-outline text-white border-white/20 hover:bg-white/10 shrink-0">
                    View Full Schedule
                 </button>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
               {[
                  { phase: "PHASE 1", title: "THE GARDEN CITY RESIDENCY", date: "Oct 13 – 22", who: "50 Elite Builders & Founders", vibe: "Monk Mode", desc: "Selected fellows live together in a secure, fully serviced estate. 10 days of deep work, protocol bootcamps, and zero distractions. Goal: Ship a market-ready MVP." },
                  { phase: "PHASE 2", title: "THE POP-UP CITY", date: "Oct 13 – 23", who: "Students, Creatives, & Community", vibe: "Living Lab", desc: "An open-access innovation hub featuring daily workshops, a Creator’s Studio for artists, and a Policy Lounge for government dialogue. Goal: Onboard the next 10,000 users." },
                  { phase: "PHASE 3", title: "THE SUMMIT & AFTERPARTY", date: "Oct 24", who: "Investors, Policymakers, Everyone", vibe: "The Celebration", desc: "High-level panels, Founder Demos, and Deal Flow. Followed by 'The Garden City Glow'—a massive fusion of Tech and Sound." }
               ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-primary bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(254,101,0,0.5)] z-10 text-brand-primary font-bold text-xs">
                         {i + 1}
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 lg:p-10 border border-white/10 bg-white/[0.02] rounded-3xl hover:border-brand-primary/50 transition-all duration-300">
                         <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold tracking-widest text-brand-primary uppercase">{item.phase}</span>
                            <span className="text-xs font-mono text-zinc-500">{item.date}</span>
                         </div>
                         <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{item.title}</h3>
                         <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/5">{item.who}</span>
                            <span className="px-2 py-1 bg-white/5 rounded text-xs text-zinc-300 border border-white/5">{item.vibe}</span>
                         </div>
                         <p className="text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {item.desc}
                         </p>
                      </div>
                  </div>
               ))}
            </div>

            <div className="mt-16 text-center">
                 <button className="btn px-10 py-5 text-xl font-bold shadow-[0_0_40px_rgba(254,101,0,0.3)] hover:shadow-[0_0_60px_rgba(254,101,0,0.5)] bg-brand-primary text-black border-none rounded-2xl hover:scale-105 transition-all">
                    Apply for Residency Structure
                  </button>
            </div>
         </div>
      </section>

      {/* 5. THE PROOF: GALLERY */}
      <section className="py-20 lg:py-32 bg-white text-black relative overflow-hidden">
          {/* Subtle Gradient/Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-multiply"></div>
          
          <div className="custom-container relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div className="max-w-xl">
                    <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">The Proof</h2>
                    <h3 className="text-4xl lg:text-6xl font-black text-black leading-none mb-4">
                       MEMORIES FROM <br/> THE TREASURE BASE.
                    </h3>
                    <p className="text-zinc-600 text-lg">
                       We don&apos;t just talk about community; we build it. Here is a glimpse of the energy, the builders, and the vibe from 2024.
                    </p>
                 </div>
                 <button className="btn bg-black text-white hover:bg-zinc-800 border-none shrink-0 shadow-lg hover:shadow-xl transition-shadow">
                    View Full Gallery
                 </button>
              </div>

              {/* Masonry-style Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                 <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm relative group hover:shadow-xl transition-all duration-500">
                    <div className="absolute inset-0 bg-zinc-100"></div>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                    {/* Placeholder for large image */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-300 font-bold text-4xl bg-[url('/images/241.JPG')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700">2024</div>
                 </div>
                 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm relative group hover:shadow-lg transition-all duration-500">
                     <div className="absolute inset-0 bg-gray-200 bg-[url('/images/242.JPG')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                 </div>
                 <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden bg-zinc-900 relative group hover:shadow-xl transition-all duration-500">
                     <div className="absolute inset-0 bg-[url('/images/243.jpg')] bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl z-20 tracking-widest mix-blend-overlay">VIBE</div>
                 </div>
                 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden bg-brand-primary/10 border border-brand-primary/20 relative group hover:shadow-lg transition-all duration-500">
                     <div className="absolute inset-0 bg-[url('/images/244.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                 </div>
                 <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm relative group hover:shadow-lg transition-all duration-500">
                     <div className="absolute inset-0 bg-[url('/images/245.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                 </div>
              </div>
          </div>
      </section>

      {/* 6. THE AUTHORITY: WHY PITAKWA (MOVED DOWN) */}
      <section className="py-20 lg:py-32 bg-black border-y border-white/10 relative">
         <div className="custom-container">
             <div className="text-center mb-16">
                <h2 className="section-title text-white">Why We Build Here</h2>
                <p className="section-subtitle text-zinc-400">The Strategic Advantage of the Niger Delta</p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="text-center lg:text-left p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-colors bg-zinc-900/50">
                   <div className="w-16 h-16 mx-auto lg:mx-0 bg-brand-primary/10 flex items-center justify-center rounded-2xl mb-6 text-brand-primary">
                      <FaIndustry size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">The Industrial Sandbox</h3>
                   <p className="text-zinc-400 leading-relaxed">Rivers State is the HQ of Nigeria’s Oil & Gas industry. The ultimate testing ground for RWA and Supply Chain innovation. Build for logistics giants by day, deploy by night.</p>
                </div>
                <div className="text-center lg:text-left p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-colors bg-zinc-900/50">
                    <div className="w-16 h-16 mx-auto lg:mx-0 bg-purple-500/10 flex items-center justify-center rounded-2xl mb-6 text-purple-500">
                      <FaMusic size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">The Cultural Heartbeat</h3>
                   <p className="text-zinc-400 leading-relaxed">From Afrobeats to Highlife, we export culture. We represent the Ownership Economy—giving artists tools to own their future on-chain.</p>
                </div>
                <div className="text-center lg:text-left p-8 rounded-3xl border border-white/10 hover:border-green-500/50 transition-colors bg-zinc-900/50">
                    <div className="w-16 h-16 mx-auto lg:mx-0 bg-green-500/10 flex items-center justify-center rounded-2xl mb-6 text-green-500">
                      <FaGlobe size={32} />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">The Talent Pipeline</h3>
                   <p className="text-zinc-400 leading-relaxed">With 5 major universities, the South-South is teeming with hungry students. The &quot;Treasure Base&quot; of human capital is ready to build the next unicorn.</p>
                </div>
             </div>
         </div>
      </section>

      {/* 7. THE MISSION */}
      <section className="py-20 lg:py-32 bg-zinc-950 relative overflow-hidden">
          <div className="custom-container relative z-10">
             <div className="max-w-3xl mb-20">
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Initializing The Next Era</h2>
                <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-none">
                   FROM EXTRACTION <br/>
                   <span className="text-zinc-600">TO PRODUCTION.</span>
                </h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                   Pitakwa is the commercial engine of Nigeria’s wealth, but the definition of wealth is changing. We are moving from extracting resources to building systems. Web3 PH Re:Config is a 12-day ecosystem reset.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                   { icon: FaGlobe, title: "Export Talent", desc: "We don't just train developers; we launch careers. Top teams win Global Mobility Grants to represent Nigeria at Devcon and Breakpoint." },
                   { icon: FaCode, title: "Solve Real Problems", desc: "Deploying blockchain solutions for Supply Chain, Real World Assets (RWA), and the Creative Economy." },
                   { icon: FaIndustry, title: "Establish Roots", desc: "This event is the seed for the Web3 PH Nexus—a permanent innovation hub launching in 2027." }
                ].map((item, i) => (
                  <div key={i} className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] transition-all duration-500 rounded-3xl hover:border-brand-primary/40 relative overflow-hidden backdrop-blur-sm">
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute top-0 right-0 p-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-brand-primary">
                        <item.icon size={32} />
                     </div>
                     <h4 className="text-2xl font-bold text-white mb-4 mt-8 relative z-10">{item.title}</h4>
                     <p className="text-zinc-400 leading-relaxed text-sm relative z-10 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </section>

      {/* 8. SPONSORSHIP (CLOSE) */}
      <section className="py-24 relative overflow-hidden bg-white text-black">
         {/* Background Effects */}
         <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100 to-zinc-50"></div>
         <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-multiply"></div>
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px]"></div>
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-[80px]"></div>

         <div className="custom-container relative z-10 text-center">
             <h2 className="text-4xl lg:text-6xl font-black text-black mb-6 tracking-tight">OWN THE TREASURE BASE.</h2>
             <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Partner with Web3 PH Re:Config to capture the highest-value developer and user market in Nigeria.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn bg-brand-primary text-black hover:bg-brand-primary/90 border-none shadow-[0_0_20px_rgba(254,101,0,0.2)]">
                   Download Sponsorship Deck
                </button>
                <button className="btn-outline border-zinc-300 text-black hover:bg-black hover:text-white hover:border-black">
                   Partner with us
                </button>
             </div>
             
             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {[
                   { title: "The Protocol House", desc: "Own a dedicated Hacker House in the Garden City Residency." },
                   { title: "The Track Sponsor", desc: "Lead the Industrial or Creative Hackathon tracks." },
                   { title: "Global Mobility Partner", desc: "Sponsor the travel grants for our winning teams." }
                ].map((item, i) => (
                   <div key={i} className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-300 group">
                      <h4 className="font-bold text-black mb-3 text-xl group-hover:text-brand-primary transition-colors">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                ))}
             </div>
         </div>
      </section>
    </>
  );
};
export default ReConfig;
