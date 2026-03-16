import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaUsers, FaGlobe, FaChartBar } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    let start = from;
    const end = to;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = (totalMiliseconds / Math.abs(end - start));

    let timer = setInterval(() => {
      start += (end > from ? 0.1 : -0.1);
      setCount(start);
      if (Math.abs(start - end) < 0.1) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  const formatNumber = (num) => {
    if (suffix === " Tn") return num.toFixed(1);
    return Math.floor(num);
  };

  return <span>{formatNumber(count)}{suffix}</span>;
};

const ReConfig = () => {
    // Framer Motion Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-black min-h-screen selection:bg-brand-primary selection:text-black">
            <Helmet>
                <title>Re:Config | Web3PH Conference</title>
            </Helmet>
            
            <SEO 
                title="Re:Config | Garden City Residency & Summit"
                description="The ultimate engine room for builders in Africa. Join the 8-day residency and global summit in Port Harcourt."
                type="website"
            />

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img 
                        src="/images/243.jpg" 
                        alt="ReConfig Context" 
                        className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
                    />
                </div>

                <div className="custom-container relative z-20">
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="max-w-4xl"
                    >
                        <motion.div variants={item} className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full mb-8">
                            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                            <span className="text-brand-primary font-mono text-xs font-bold uppercase tracking-widest">Oct 17 – 24, 2024</span>
                        </motion.div>

                        <motion.h1 variants={item} className="text-7xl md:text-9xl font-sans font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
                            RE: <br/>
                            <span className="font-serif italic font-light lowercase text-[#737373]">config.</span>
                        </motion.h1>

                        <motion.div variants={item} className="mb-12">
                            <p className="text-xl md:text-2xl text-white font-sans font-light leading-relaxed max-w-2xl">
                                An 8-day engine room for borderless innovation. Join 1,200+ active builders ready to deploy on your protocol. Don&apos;t chase visibility; deliver traction.
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                           <button className="bg-white text-black hover:bg-[#e5e5e5] transition-colors border-2 border-transparent px-10 py-5 text-sm uppercase font-sans font-bold tracking-widest flex justify-center items-center gap-2 text-center">
                             GET TICKETS <FaArrowRight />
                           </button>
                           <button className="bg-transparent text-white border-2 border-white/20 hover:bg-white hover:text-black transition-colors px-10 py-5 text-sm uppercase font-sans font-bold tracking-widest flex justify-center items-center text-center">
                             APPLY TO SPEAK
                           </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. STATS GRID */}
            <section className="bg-black text-white py-20 border-b border-white/10 relative">
               <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/10 hidden lg:block" />
               <div className="absolute top-0 right-1/2 w-[1px] h-full bg-white/10 hidden lg:block" />
               <div className="absolute top-0 right-[75%] w-[1px] h-full bg-white/10 hidden lg:block" />
               <div className="custom-container relative z-10">
                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:-mx-12">
                       <div className="flex flex-col lg:px-12">
                           <span className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-2 text-white">
                              <Counter from={0} to={1200} suffix="+" />
                           </span>
                           <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737373]">Active Builders</span>
                       </div>
                       <div className="flex flex-col lg:px-12">
                           <span className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-2 text-white">
                              <Counter from={0} to={20} suffix="+" />
                           </span>
                           <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737373]">Projects Demoed</span>
                       </div>
                       <div className="flex flex-col lg:px-12">
                           <span className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-2 text-white">
                              <Counter from={0} to={8} />
                           </span>
                           <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737373]">Days of Innovation</span>
                       </div>
                       <div className="flex flex-col lg:px-12">
                           <span className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-2 text-white">
                              $<Counter from={0} to={50} suffix="k+" />
                           </span>
                           <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#737373]">Total Valuation</span>
                       </div>
                   </div>
               </div>
            </section>

            {/* NEW: WHY ATTEND? (MARKET STATS) */}
            <section className="py-24 bg-zinc-950 border-b border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
                <div className="custom-container">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                          <h2 className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-6">[ WHY_ATTEND? ]</h2>
                          <h3 className="text-5xl md:text-7xl font-sans font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
                              ACCESS AFRICA&apos;S <br/>
                              <span className="font-serif italic font-light lowercase text-[#737373]">$3.3tn market.</span>
                          </h3>
                          <p className="text-xl text-zinc-400 font-sans font-light leading-relaxed">
                              70% of attendees are decision makers—from protocol founders to government officials. Re:Config is your direct gateway to the highest-yielding Web3 market on the continent.
                          </p>
                        </div>
                        <div className="hidden lg:block pb-4">
                            <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center text-white/20 animate-pulse">
                                <FaArrowRight size={24} className="rotate-45" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                            <div className="text-5xl font-sans font-black text-white mb-4 group-hover:text-brand-primary transition-colors">
                              <Counter from={0} to={57} suffix="%" />
                            </div>
                            <p className="text-sm font-mono font-bold uppercase tracking-widest text-white mb-2">Nigerians Unbanked</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-tight">Prime Web3 adoption potential</p>
                        </div>
                        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                            <div className="text-5xl font-sans font-black text-white mb-4 group-hover:text-brand-primary transition-colors">
                              <Counter from={0} to={70} suffix="%" />
                            </div>
                            <p className="text-sm font-mono font-bold uppercase tracking-widest text-white mb-2">Under 30</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-tight">Prime Web3 demographic</p>
                        </div>
                        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                            <div className="text-5xl font-sans font-black text-white mb-4 group-hover:text-brand-primary transition-colors">
                              $<Counter from={0} to={3.3} suffix=" Tn" />
                            </div>
                            <p className="text-sm font-mono font-bold uppercase tracking-widest text-white mb-2">Global Market Cap</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-tight">Africa holds a massive piece</p>
                        </div>
                        <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors">
                            <div className="text-5xl font-sans font-black text-white mb-4 group-hover:text-brand-primary transition-colors">
                              <Counter from={0} to={30} suffix="+" />
                            </div>
                            <p className="text-sm font-mono font-bold uppercase tracking-widest text-white mb-2">African Countries</p>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-tight">Your gateway to the entire market</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE VISION: UNTAPPED TALENT MINE */}
            <section className="py-24 bg-zinc-950 border-b border-white/10 relative overflow-hidden">
                <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-mono text-sm tracking-widest text-[#a3a3a3] uppercase mb-6">[ MARKET_CONVERGENCE ]</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
                            THE GLOBAL <br/>
                            <span className="font-serif italic font-light lowercase text-[#737373]">web3 bridge.</span>
                        </h3>
                        <p className="text-xl text-zinc-400 font-sans font-light leading-relaxed mb-8">
                            The African tech scene is no longer just a frontier; it is the most active laboratory for Web3 utility. With Nigeria leading global adoption, Re:Config is positioned at the intersection of high-density engineering and real-world demand. We are moving beyond speculation, tapping into a market where on-chain intelligence and decentralized finance solve systemic infrastructure gaps.
                        </p>
                        <p className="text-xl text-zinc-400 font-sans font-light leading-relaxed mb-12">
                            Re:Config acts as the critical architectural layer—connecting the raw technical drive of Port Harcourt with the scale of the African continent and the liquidity of global protocols. By bringing together local builders and international stakeholders, we are ensuring that the next billion users aren&apos;t just consuming Web3; they are building the protocols that define it. This is where local traction meets global scaling.
                        </p>
                    </div>
                    <div className="relative h-[600px] w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-[url('/images/241.JPG')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-xl p-8 border-l-4 border-brand-primary max-w-sm shadow-2xl">
                             <p className="text-white text-xl md:text-2xl font-black leading-tight italic">&quot;It&apos;s raw in Ph, the energy, passion, and drive. And now it&apos;s globally connected.&quot;</p>
                             <div className="mt-6 text-sm text-brand-primary font-mono uppercase tracking-widest font-bold"><a href="https://x.com/greatAdams01" target="_blank" rel="noopener noreferrer" className="hover:underline text-brand-primary">Great Adams</a> — Lead Web3PH</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE TRACKS (PILLARS) */}
            <section className="py-24 bg-zinc-900 border-t border-black relative">
               <div className="custom-container">
                   <div className="text-center mb-20">
                       <h2 className="text-[15vw] md:text-[8vw] font-sans font-black tracking-tighter text-white/5 leading-none absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none uppercase">PROGRAM</h2>
                       <h3 className="text-5xl md:text-6xl font-sans font-black tracking-tighter text-white relative z-10 uppercase text-center w-full">
                          THREE <br className="md:hidden" />
                          <span className="font-serif italic font-light lowercase text-brand-primary">pillars.</span>
                       </h3>
                       <p className="text-[#a3a3a3] mt-6 max-w-2xl mx-auto relative z-10 text-lg font-light text-center">
                          Designed for builders, creatives, and policymakers to co-create the future.
                       </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                      {/* Track 1: BUILD */}
                      <div className="card group hover:border-brand-primary/50 flex flex-col h-full bg-[#121212] p-8 border border-white/5 rounded-xl transition-all">
                          <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                              <span>Oct 17 – 22</span>
                              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-brand-primary transition-colors">
                                  <FaCode size={12} />
                              </div>
                          </div>
                          <h4 className="text-4xl lg:text-5xl font-sans font-black tracking-tight text-white mb-6 group-hover:text-brand-primary transition-colors relative z-10">BUILD.</h4>
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
                      <div className="card group hover:border-white/50 flex flex-col h-full bg-[#121212] p-8 border border-white/5 rounded-xl transition-all">
                          <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                              <span>Oct 17 – 23</span>
                              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-white transition-colors">
                                  <FaUsers size={12} />
                              </div>
                          </div>
                          <h4 className="text-4xl lg:text-5xl font-sans font-black tracking-tight text-white mb-6 group-hover:text-white transition-colors relative z-10">LEARN.</h4>
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
                      <div className="card group hover:border-brand-primary/50 flex flex-col h-full bg-[#121212] p-8 border border-white/5 rounded-xl transition-all">
                          <div className="text-xs font-bold font-sans text-[#737373] mb-6 uppercase tracking-widest relative z-10 flex items-center justify-between">
                              <span>Oct 24</span>
                              <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-brand-primary transition-colors">
                                  <FaGlobe size={12} />
                              </div>
                          </div>
                          <h4 className="text-4xl lg:text-5xl font-sans font-black tracking-tight text-white mb-6 group-hover:text-brand-primary transition-colors relative z-10">CONNECT.</h4>
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

            {/* NEW: THE AI & VIBE CODERS ENGINE ROOM */}
            <section className="py-32 bg-black relative overflow-hidden">
                {/* Decorative code elements */}
                <div className="absolute top-1/4 right-0 font-mono text-[10vw] text-white/[0.02] select-none pointer-events-none leading-none -rotate-12">
                    npm install @web3phc/agents
                </div>
                
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <h2 className="font-mono text-xs tracking-widest text-brand-secondary uppercase mb-6">[ ECOSYSTEM_STRENGTH ]</h2>
                            <h3 className="text-5xl md:text-7xl font-sans font-black text-white leading-[0.85] tracking-tighter uppercase mb-10">
                                THE AI & <br/>
                                <span className="font-serif italic font-light lowercase text-brand-primary">vibe coder</span> engine.
                            </h3>
                            <p className="text-xl text-zinc-400 font-sans font-light leading-relaxed mb-10">
                                We don&apos;t just Hack; we ship. Our ecosystem is powered by a high-density cluster of <strong>AI Agents</strong> and <strong>Vibe Coders</strong>—rapid deployment experts who use cutting-edge tools to build protocols at terminal velocity.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-primary transition-colors">
                                        <FaCode className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-tight mb-1">Autonomous Agents</h4>
                                        <p className="text-sm text-zinc-500">Deploying on-chain intelligence that manages liquidity, governance, and user interactions 24/7.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-primary transition-colors">
                                        <FaGlobe className="text-brand-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-tight mb-1">Vibe Coding Culture</h4>
                                        <p className="text-sm text-zinc-500">High-speed builders who translate vibes into scalable architectures using Cursor, Bolt, and proprietary toolsets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative bg-zinc-900 border border-white/10 p-1 rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square">
                                <div className="absolute inset-0 bg-[url('/images/246.jpg')] bg-cover bg-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
                                        <p className="text-white text-lg font-bold mb-2">&quot;Protocol discovery happens here.&quot;</p>
                                        <p className="text-zinc-400 text-sm font-mono">Founders are integrating AI agents directly into the Garden City Residency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE AUTHORITY: WHY WE BUILD HERE (BUILDER DENSITY) */}
            <section className="py-24 bg-white text-[#0a0a0a] border-y border-[#262626]">
               <div className="custom-container">
                   <h2 className="text-4xl lg:text-5xl font-sans font-black tracking-tight uppercase text-[#0a0a0a] mb-16 max-w-md">
                       WHY WE BUILD <br />
                       <span className="font-serif italic font-light lowercase text-brand-primary">here.</span>
                   </h2>
                   
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      <div className="group">
                         <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                            <FaUsers size={32} />
                         </div>
                         <h3 className="text-2xl font-sans font-black tracking-tighter text-[#0a0a0a] mb-4">The Builder Density</h3>
                         <p className="font-sans text-[#737373] leading-relaxed font-light">Home to one of the largest concentrations of technical talent in West Africa. With at least 6 higher institutions within a 20km radius, our builders are designing scalable, borderless protocols that serve the world.</p>
                      </div>
                      <div className="group">
                          <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                            <FaCode size={32} />
                         </div>
                         <h3 className="text-2xl font-sans font-black tracking-tighter text-[#0a0a0a] mb-4">The Talent Pipeline</h3>
                         <p className="font-sans text-[#737373] leading-relaxed font-light">From zero-to-one. Our ecosystem is a global factory for shipping products. We are organizing a world-class pipeline of founders ready to scale borderless solutions.</p>
                      </div>
                      <div className="group">
                          <div className="w-16 h-16 bg-[#f5f5f5] flex items-center justify-center rounded-lg mb-6 text-[#0a0a0a] transition-transform duration-300 group-hover:scale-105 border border-[#e5e5e5]">
                            <FaChartBar size={32} />
                         </div>
                         <h3 className="text-2xl font-sans font-black tracking-tighter text-[#0a0a0a] mb-4">Global Convergence</h3>
                         <p className="font-sans text-[#737373] leading-relaxed font-light">Where global protocols meet local traction. Re:Config is the bridge for ecosystems looking to onboard high-output teams and deep technical roots in Africa.</p>
                      </div>
                   </div>
               </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary opacity-[0.03] z-0" />
                <div className="custom-container relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-sans font-black tracking-tighter uppercase mb-12">
                        READY TO <br/>
                        <span className="font-serif italic font-light lowercase text-brand-primary">re:config?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-xl mx-auto">
                        <button className="bg-white text-black font-sans font-bold py-6 px-12 uppercase tracking-widest text-sm hover:bg-brand-primary transition-colors text-center">
                            GET TICKETS
                        </button>
                        <button className="bg-transparent border-2 border-white/20 text-white font-sans font-bold py-6 px-12 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors text-center">
                            PARTNER WITH US
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReConfig;
