import { FaLaptopCode, FaUsers, FaChartLine, FaCheckCircle, FaRobot, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_ORIGIN, absoluteUrl } from '../config/site';
import DailyDrop from '../components/DailyDrop';

const RECONFIG_SEO_DESCRIPTION = "Re:Config 2026 is a six-day gathering in Port Harcourt engineered around Commercial Viability — moving founders and developers past theoretical prototypes to ship real-world, scalable businesses that command liquidity and capture value across global internet capital markets.";

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
                        <a href="#sponsor" className="inline-block px-3 sm:px-6 py-2 sm:py-2.5 bg-[#e55a00] text-white font-['Righteous'] font-normal tracking-wide rounded-xl shadow-md hover:bg-zinc-200 transition-colors text-[13px] sm:text-[15px]">
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

            {/* ─── 2. THEME STATEMENT ─── */}
            <section id="about" className="py-24 md:py-32 px-4 relative bg-white border-b border-zinc-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="custom-container max-w-5xl mx-auto">
                    <div className="mb-6">
                        <p className="text-brand-primary font-mono text-sm tracking-widest uppercase font-bold">// Re:Config 2026 Theme</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-slate-900 leading-tight mb-8">
                                Built for the Market,<br /><span className="text-brand-primary">Not the Repository.</span>
                            </h2>
                            <p className="text-slate-600 font-light text-lg leading-relaxed mb-6">
                                Re:Config 2026 is a definitive shift toward <span className="text-slate-900 font-semibold">Commercial Viability</span>. The biggest barriers we face are no longer about writing raw code — they are about distribution, user acquisition, and building products that survive the open market.
                            </p>
                            <p className="text-slate-600 font-light text-lg leading-relaxed">
                                We are moving past empty testnet metrics and theoretical prototypes to engineer real-world, scalable businesses that unlock true economic value across the continent and beyond.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="border border-zinc-200 rounded-2xl p-6 bg-orange-50 hover:border-brand-primary/60 hover:shadow-md transition-all">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">The Shift</p>
                                <p className="text-slate-900 font-semibold text-lg">Code is cheap. Distribution is the product.</p>
                                <p className="text-slate-500 font-light mt-2">We eliminate the gap between engineering and execution by pairing technical builders with elite market operators from Day 1.</p>
                            </div>
                            <div className="border border-zinc-200 rounded-2xl p-6 bg-orange-50 hover:border-brand-primary/60 hover:shadow-md transition-all">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">The Outcome</p>
                                <p className="text-slate-900 font-semibold text-lg">Launch viable digital assets, not side projects.</p>
                                <p className="text-slate-500 font-light mt-2">Participants unlock direct access to global protocols, institutional capital, and real-world distribution networks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. THE 6-DAY JOURNEY (Timeline) ─── */}
            <section id="schedule" className="py-24 md:py-32 px-4 relative bg-[#0d0d0d] border-b border-white/5 overflow-hidden">
                <div className="absolute left-0 top-1/3 w-[400px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute right-0 bottom-1/4 w-[300px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="custom-container max-w-4xl mx-auto relative z-10">
                    <div className="mb-20 text-center flex flex-col items-center">
                        <p className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 font-bold">// The 6-Day Journey</p>
                        <h2 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white leading-tight">
                            From Deployment to <span className="text-brand-primary">Dominance.</span>
                        </h2>
                        <p className="mt-6 text-zinc-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                            Six days engineered to take founders from technical depth to market-ready launch — with real capital, real protocols, and real distribution on the line.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-brand-primary/50 pl-8 md:pl-12 space-y-16 ml-4 md:ml-0">
                        {/* Days 1–3 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full ring-4 ring-[#0d0d0d] group-hover:scale-125 transition-transform shadow-[0_0_20px_rgba(254,101,0,0.6)]" />
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">Nov 30 – Dec 2</p>
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Days 1–3</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-zinc-200 mb-4">Re:Config Assembly — Market Intelligence.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed mb-6">
                                Intensive Go-To-Market tracks and founder-led strategy sessions. Builders engage directly with protocol teams on RWA, DeFAI, AI Agents, and Stablecoin payment rails — identifying where real liquidity lives and how to capture it.
                            </p>
                            <div className="rounded-2xl overflow-hidden border border-white/10 w-full sm:w-2/3 max-h-64 opacity-80 group-hover:opacity-100 transition-opacity">
                                <img src={EVENT_IMAGES[2]} alt="Workshop" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Days 3–4 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-zinc-800 rounded-full border-2 border-brand-primary group-hover:bg-brand-primary ring-4 ring-[#0d0d0d] transition-all" />
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">Dec 2 – Dec 3</p>
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Days 3–4</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-zinc-200 mb-4">Build Sprint — Live On-Chain Deployment.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                Execution mode. Teams ship working products on mainnet — not testnet. Market operators embedded in every team eliminate the gap between engineering and commercial reality from the first line of code.
                            </p>
                        </div>

                        {/* Day 4–5 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-zinc-800 rounded-full border-2 border-brand-primary group-hover:bg-brand-primary ring-4 ring-[#0d0d0d] transition-all" />
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">Dec 4</p>
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Day 5</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-zinc-200 mb-4">Capital Day — Pitch to the Market.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                Teams present to institutional capital, global protocol leads, and ecosystem investors. This is not a demo day — it is a market validation session with capital allocators who write real checks.
                            </p>
                        </div>

                        {/* Day 6 */}
                        <div className="relative group">
                            <div className="absolute -left-[42px] md:-left-[58px] top-0 w-5 h-5 md:w-6 md:h-6 bg-brand-primary rounded-full ring-4 ring-[#0d0d0d] animate-pulse shadow-[0_0_20px_rgba(254,101,0,0.6)]" />
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-2">Dec 5</p>
                            <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white mb-3">Day 6</h3>
                            <h4 className="text-xl font-['Righteous'] font-normal tracking-wide text-zinc-200 mb-4">The Summit — Internet Capital Markets.</h4>
                            <p className="text-zinc-400 font-light text-lg leading-relaxed">
                                The public summit. Where the next generation of founders ship for the Internet Capital Markets. Keynotes, ecosystem announcements, live product launches, and the connections that define careers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4. DATES & PROTOCOLS ─── */}
            <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-amber-50 border-b border-zinc-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="custom-container max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 relative z-10">
                        <div className="bg-white border border-zinc-200 shadow-md rounded-2xl p-8 flex flex-col justify-center hover:border-brand-primary/60 hover:shadow-xl transition-all">
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3">Re:Config Assembly</p>
                            <h4 className="text-slate-900 font-['Righteous'] font-normal tracking-wide text-3xl uppercase mb-2">Nov 30–Dec 4</h4>
                            <p className="text-slate-600 font-light">Five days of GTM tracks, build sprints, and protocol integration — engineered for commercial output.</p>
                            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-4">Port Harcourt, NG</p>
                        </div>
                        <div className="bg-white border border-zinc-200 shadow-md rounded-2xl p-8 flex flex-col justify-center hover:border-brand-primary/60 hover:shadow-xl transition-all">
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3">Re:Config Summit</p>
                            <h4 className="text-slate-900 font-['Righteous'] font-normal tracking-wide text-3xl uppercase mb-2">Dec 5</h4>
                            <p className="text-slate-600 font-light">The public summit where the next generation of founders ship for the Internet Capital Markets.</p>
                            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-4">Port Harcourt, NG</p>
                        </div>
                    </div>

                    <div className="text-center relative z-10">
                        <h3 className="text-2xl md:text-3xl font-['Righteous'] font-normal tracking-wide uppercase text-slate-900 mb-8">Backed by the Global <span className="text-brand-primary">Web3 Ecosystem.</span></h3>
                        <p className="text-slate-600 font-light mb-12 max-w-2xl mx-auto">
                            Leading L1s, L2s, infrastructure protocols, and institutional capital partners — all aligned around one goal: commercial output.
                        </p>
                        <div className="w-full bg-white border border-zinc-200 rounded-3xl p-10 py-16 flex items-center justify-center shadow-sm">
                            <p className="text-zinc-400 font-mono text-sm tracking-widest uppercase">
                                [ Protocol Logos &amp; Ecosystem Partners will appear here ]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 5. WHAT YOU GET ─── */}
            <section id="offerings" className="py-24 md:py-32 px-4 bg-white border-b border-zinc-100">
                <div className="custom-container max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 font-bold">// What You Unlock</p>
                        <h2 className="text-3xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-slate-900 mb-4">Engineering Meets Execution</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Because code without distribution is just a hobby. We pair both from Day 1.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-zinc-50 border border-zinc-200 p-10 rounded-2xl hover:border-brand-primary/50 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                                <FaLaptopCode className="text-2xl text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-slate-900">GTM Tracks</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Intensive Go-To-Market sessions covering RWA, DeFAI, AI Agents, and Stablecoin payment rails — built around distribution, not just deployment.
                            </p>
                        </div>
                        <div className="bg-zinc-50 border border-zinc-200 p-10 rounded-2xl hover:border-brand-primary/50 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                                <FaUsers className="text-2xl text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-slate-900">Market Operators</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Elite market operators embedded in every team from Day 1 — bridging the gap between technical builders and commercial execution in real time.
                            </p>
                        </div>
                        <div className="bg-zinc-50 border border-zinc-200 p-10 rounded-2xl hover:border-brand-primary/50 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                                <FaChartLine className="text-2xl text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-slate-900">Capital Access</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Direct access to global protocols, institutional capital, and real-world distribution networks. Build for Internet Capital Markets, not the repository.
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

            {/* ─── 7. DIFFERENTIATORS ─── */}
            <section className="py-24 md:py-32 px-4 bg-gradient-to-br from-orange-50 via-white to-zinc-100">
                <div className="custom-container max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 font-bold">// Why Re:Config</p>
                        <h2 className="text-3xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-slate-900 mb-4">This Is Not a Hackathon.</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">Hackathons build for repositories. Re:Config builds for markets.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-zinc-200 rounded-2xl p-8 relative overflow-hidden bg-white group hover:border-brand-primary/50 hover:shadow-xl transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full" />
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                <FaRobot className="text-2xl text-brand-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-slate-900">Mainnet. Not Testnet.</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Participants deploy on live networks from day one. Real stakes, real users, real feedback — no simulations.
                            </p>
                        </div>
                        <div className="border border-zinc-200 rounded-2xl p-8 relative overflow-hidden bg-white group hover:border-brand-primary/50 hover:shadow-xl transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full" />
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                <FaGlobe className="text-2xl text-brand-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-slate-900">Global Distribution</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Outstanding teams receive continued support, ecosystem introductions, direct protocol grants, and introductions to institutional capital allocators.
                            </p>
                        </div>
                        <div className="border border-zinc-200 rounded-2xl p-8 relative overflow-hidden bg-white group hover:border-brand-primary/50 hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full" />
                            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                                <FaCheckCircle className="text-2xl text-brand-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-['Righteous'] font-normal tracking-wide uppercase mb-3 text-slate-900">Permanent Record</h3>
                            <p className="text-slate-500 font-light leading-relaxed">
                                Every session recorded and integrated into LB Academy. The knowledge built at Re:Config compounds across the entire African Web3 ecosystem.
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
