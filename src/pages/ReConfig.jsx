import { FaLaptopCode, FaUsers, FaChartLine, FaCheckCircle, FaRobot, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_ORIGIN, absoluteUrl } from '../config/site';
import DailyDrop from '../components/DailyDrop';

const RECONFIG_SEO_DESCRIPTION = "Re:Config is Web3PHC's multi-day Web3 deployment event in Port Harcourt, Rivers State, Nigeria. Protocols and sponsors meet builders working across RWA, DeFAI, AI agents, stablecoins, and x402 payment rails.";

const EVENT_IMAGES = ["/images/243.jpg", "/images/247.jpg", "/images/246.jpg", "/images/242.JPG"];

const reconfigJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: "Web3PHC",
            url: SITE_ORIGIN,
            logo: absoluteUrl("/logo.png"),
            sameAs: ["https://x.com/web3PHC", "https://t.me/web3portharcourt"],
        },
        {
            "@type": "Event",
            "@id": `${SITE_ORIGIN}/reconfig#event`,
            name: "Re:Config",
            alternateName: "Re:Config Pitakwa",
            description: RECONFIG_SEO_DESCRIPTION,
            url: absoluteUrl("/reconfig"),
            image: absoluteUrl("/thumb.JPG"),
            startDate: "2026-11-30",
            endDate: "2026-12-05",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
                "@type": "Place",
                name: "Port Harcourt",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Port Harcourt",
                    addressRegion: "Rivers State",
                    addressCountry: "NG",
                },
            },
            organizer: { "@id": `${SITE_ORIGIN}/#organization` },
        },
    ],
};

const ReConfig = () => {

    return (
        <div className="bg-[#050505] min-h-screen font-sans text-white selection:bg-brand-primary selection:text-black">
            <SEO
                title="Re:Config"
                url="/reconfig"
                description={RECONFIG_SEO_DESCRIPTION}
                type="website"
                schemaData={reconfigJsonLd}
            />

            {/* ─── 1. HERO (Exact Screenshot Clone & Custom Nav) ─── */}
            <header className="relative pt-6 pb-24 md:pt-8 md:pb-32 px-4 overflow-hidden min-h-[90vh] flex flex-col bg-gradient-to-br from-white via-orange-50 to-orange-100">
                
                {/* Geometric Grid Pattern from Home Page */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fe650015_1px,transparent_1px),linear-gradient(to_bottom,#fe650015_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

                {/* Custom ReConfig Navigation */}
                <nav className="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-center mb-6">
                    <div className="font-['Righteous'] text-2xl text-slate-900 tracking-wide">
                        Re:<span className="text-brand-primary">Config</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-[15px] font-['Righteous'] font-normal text-slate-700 uppercase tracking-wide">
                        <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
                        <a href="#schedule" className="hover:text-brand-primary transition-colors">Schedule</a>
                        <a href="#offerings" className="hover:text-brand-primary transition-colors">Offerings</a>
                        <a href="#sponsor" className="hover:text-brand-primary transition-colors">Sponsor</a>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a href="#sponsor" className="inline-block px-3 sm:px-6 py-2 sm:py-2.5 bg-white text-black font-['Righteous'] font-normal tracking-wide rounded-xl shadow-md hover:bg-zinc-200 transition-colors text-[13px] sm:text-[15px]">
                            Sponsor Us
                        </a>
                        <a href="https://ticketdaddy.io/ev/eventiRQJPuWKYc" target="_blank" rel="noopener noreferrer" className="inline-block px-3 sm:px-6 py-2 sm:py-2.5 bg-black text-white font-['Righteous'] font-normal tracking-wide rounded-xl shadow-md hover:bg-slate-800 transition-colors text-[13px] sm:text-[15px]">
                            Get Tickets
                        </a>
                    </div>
                </nav>

                <div className="custom-container relative z-10 w-full max-w-6xl mx-auto flex-grow flex flex-col justify-center">
                    
                    {/* Top Row: Dash and Headline */}
                    <div className="w-12 h-[2px] bg-brand-primary mb-8" />
                    <h1 className="text-5xl sm:text-6xl md:text-[50px] font-['Righteous'] font-normal text-slate-900 leading-[1.1] mb-12 md:mb-16 max-w-4xl tracking-wide">
                        The Proving Ground for Web3 Startups.
                    </h1>
                    
                    {/* Bottom Row: Text/Button (Left) & Images (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                        
                        {/* Left Column */}
                        <div className="lg:col-span-4 text-left text-slate-900 pt-2 lg:pt-4">
                            <p className="text-[15px] text-slate-700 leading-relaxed mb-8 max-w-sm">
                                Join us for a 6-day build sprint uniting global protocols and elite Web3 talent in Port Harcourt this Nov 30th - Dec 5th.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                    <a href="https://ticketdaddy.io/ev/eventiRQJPuWKYc" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-[#fe6500] text-white font-bold rounded-xl shadow-md hover:bg-[#e55a00] transition-colors inline-block">
                                        Get Tickets
                                    </a>
                                    <a href="#sponsor" className="px-8 py-3 bg-black text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-colors inline-block">
                                        Become a Sponsor
                                    </a>
                                </div>
                                <Link to="/speakers" className="text-slate-900 font-semibold underline underline-offset-4 decoration-2 decoration-brand-primary hover:text-brand-primary transition-colors inline-block">
                                    Apply to Speak/Mentor →
                                </Link>
                            </div>
                        </div>

                        {/* Right Column (Twin Images side-by-side) */}
                        <div className="lg:col-span-8 flex justify-start lg:justify-end gap-4 lg:gap-6">
                            <div className="w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
                                <img src={EVENT_IMAGES[3]} alt="Event" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
                                <img src={EVENT_IMAGES[1]} alt="Community" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>

            {/* ─── 2. THE JOURNEY (Chronological Timeline) ─── */}
            <section className="py-24 md:py-32 px-4 relative bg-[#0a0a0a] border-b border-white/5">
                <div className="custom-container max-w-4xl mx-auto">
                    <div className="mb-20 text-center flex flex-col items-center">
                        <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 font-bold">{"// The 6-Day Journey"}</p>
                        <h2 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white leading-tight">
                            From Learning to <span className="text-brand-primary">Launching.</span>
                        </h2>
                        <p className="mt-6 text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Across 6 days, Re:Config takes builders through an immersive journey—from hands-on protocol workshops to building MVPs, culminating in a public showcase.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-brand-primary/30 pl-8 md:pl-12 space-y-16 ml-4 md:ml-0">
                        {/* Day 1-3 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full ring-4 ring-black group-hover:scale-125 transition-transform" />
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Days 1–3</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-blue-400 mb-4">The Foundation.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed mb-6">
                                The Re:Config Assembly begins. Dive deep into technical workshops covering Smart Contracts, AI Agents, and Real World Assets. Engage in founder discussions and ecosystem learning.
                            </p>
                            <div className="rounded-2xl overflow-hidden border border-white/10 w-full sm:w-2/3 max-h-64 opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src={EVENT_IMAGES[2]} alt="Workshop" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Day 3-4 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-zinc-800 rounded-full border-2 border-brand-primary group-hover:bg-brand-primary ring-4 ring-black transition-all" />
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Days 3–4</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-blue-400 mb-4">Get Busy.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                Execution time. Hackathon energy takes over as teams form around ideas identified during the learning phase and begin actively building out their decentralized infrastructure with direct mentorship from protocol teams.
                            </p>
                        </div>

                        {/* Day 5 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-zinc-800 rounded-full border-2 border-brand-primary group-hover:bg-brand-primary ring-4 ring-black transition-all" />
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Day 5</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-blue-400 mb-4">Demo Day.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                Teams pitch to investors and judges. A showcase of live product demonstrations, technical architecture reviews, and market opportunity validation.
                            </p>
                        </div>

                        {/* Day 6 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full ring-4 ring-black animate-pulse" />
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Day 6</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-blue-400 mb-4">The Summit.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                The public finale. Builders, founders, creators, students, and global ecosystem leaders come together to explore the products built. Featuring keynotes, panels, and deep networking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. ITINERARY CARDS & PROTOCOLS ─── */}
            <section className="py-20 px-4 bg-black border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="custom-container max-w-5xl mx-auto">
                    
                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 relative z-10">
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col justify-center hover:border-brand-primary/50 transition-colors">
                            <h4 className="text-brand-primary font-['Righteous'] font-normal tracking-wide text-2xl uppercase mb-2">Nov 30–Dec 4</h4>
                            <p className="text-white font-bold text-lg mb-1">Re:Config Assembly</p>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Port Harcourt, NG</p>
                        </div>
                        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col justify-center hover:border-brand-primary/50 transition-colors">
                            <h4 className="text-brand-primary font-['Righteous'] font-normal tracking-wide text-2xl uppercase mb-2">Dec 5</h4>
                            <p className="text-white font-bold text-lg mb-1">Re:Config Summit</p>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Port Harcourt, NG</p>
                        </div>
                    </div>

                    {/* Protocol Banner */}
                    <div className="text-center relative z-10">
                        <h3 className="text-2xl md:text-3xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-8">Trusted by the global <span className="text-brand-primary">Web3 Ecosystem.</span></h3>
                        <p className="text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
                            Re:Config is backed by leading L1s, L2s, infrastructure projects, and the African Web3 ecosystem.
                        </p>
                        
                        <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 py-16 flex items-center justify-center">
                            <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase">
                                [ Protocol Logos & Ecosystem Partners will appear here ]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4. OFFERINGS GRID ─── */}
            <section className="py-24 md:py-32 px-4 bg-[#0a0a0a] border-b border-white/5">
                <div className="custom-container max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-4">Explore Our Offerings</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">Signal over noise. We are laser-focused on verified, on-chain execution.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#111] border border-white/5 p-10 rounded-2xl hover:bg-white/5 transition-all">
                            <FaLaptopCode className="text-4xl text-brand-primary mb-6" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">Targeted Sectors</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Building specifically for RWA (Real World Assets), DeFi, Infrastructure, AI Agents, and Stablecoin payment rails.
                            </p>
                        </div>
                        <div className="bg-[#111] border border-white/5 p-10 rounded-2xl hover:bg-white/5 transition-all">
                            <FaUsers className="text-4xl text-brand-primary mb-6" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">1,200+ Builders</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Bringing together Africa&apos;s most active Web3 builder base, elite AI coders, and top global protocol decision-makers.
                            </p>
                        </div>
                        <div className="bg-[#111] border border-white/5 p-10 rounded-2xl hover:bg-white/5 transition-all">
                            <FaChartLine className="text-4xl text-brand-primary mb-6" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">Commercially Viable</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Unlike traditional hackathons yielding disposable projects, we focus strictly on scalable, market-ready dApps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 5. BECOME A SPONSOR ─── */}
            <section id="sponsor" className="py-24 px-4 bg-brand-primary text-black text-center relative overflow-hidden border-y border-brand-primary">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />
                <div className="custom-container max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Righteous'] font-normal tracking-wide uppercase mb-6">
                        Become a Sponsor
                    </h2>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto opacity-90">
                        Partner with Re:Config to gain direct access to Africa&apos;s most active Web3 builder base and global protocol leaders. Let&apos;s build the future together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="https://t.me/GreatAdams" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 min-w-[250px] justify-center">
                            Message on Telegram
                        </a>
                        <a href="mailto:great@lbdao.xyz" className="px-8 py-4 bg-black text-white hover:bg-slate-900 font-black uppercase tracking-widest text-sm rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 min-w-[250px] justify-center">
                            great@lbdao.xyz
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── 6. DIFFERENTIATORS (Continuity) ─── */}
            <section className="py-24 md:py-32 px-4 bg-black">
                <div className="custom-container max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-4">What Sets Us Apart</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">Re:Config doesn&apos;t end when the event concludes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-white/10 rounded-2xl p-8 relative overflow-hidden bg-gradient-to-b from-[#111] to-black group hover:border-blue-500/50 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full" />
                            <FaRobot className="text-3xl text-white mb-6 group-hover:text-blue-400 transition-colors" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-white">Permanent Learning</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                All technical content is recorded and integrated into LB Academy, creating a permanent resource for developers.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-8 relative overflow-hidden bg-gradient-to-b from-[#111] to-black group hover:border-brand-primary/50 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-full" />
                            <FaGlobe className="text-3xl text-white mb-6 group-hover:text-brand-primary transition-colors" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-white">Global Visibility</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Outstanding builders and teams receive continued support, ecosystem introductions, and direct grant opportunities.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-8 relative overflow-hidden bg-gradient-to-b from-[#111] to-black group hover:border-blue-500/50 transition-all sm:col-span-2 lg:col-span-1">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full" />
                            <FaCheckCircle className="text-3xl text-white mb-6 group-hover:text-blue-400 transition-colors" />
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-white">Community Driven</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Rooted deeply in the Web3PHC ecosystem, ensuring that growth translates into real-world local impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── 8. DAILY DROP GAME (floating launcher + modal) ─── */}
            <DailyDrop />
        </div>
    );
};

export default ReConfig;
