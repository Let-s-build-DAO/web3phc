/* eslint-disable react/prop-types */
import { FaLaptopCode, FaUsers, FaChartLine, FaCheckCircle, FaRobot, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_ORIGIN, absoluteUrl } from '../config/site';
import DailyDrop from '../components/DailyDrop';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedNumber = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = null;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                setCount(Math.floor(easeOut * end));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, end, duration]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const RECONFIG_SEO_DESCRIPTION = "Re:Config 2026 is a six-day gathering in Port Harcourt engineered around Commercial Viability moving founders and developers past theoretical prototypes to ship real-world, scalable businesses that command liquidity and capture value across global internet capital markets.";

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
                    
                    {/* Hero Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Column */}
                        <div className="lg:col-start-2 lg:col-span-5 text-left text-slate-900 pt-2 lg:pt-4">
                            <div className="w-12 h-[2px] bg-brand-primary mb-8" />
                            <h1 className="text-5xl sm:text-6xl md:text-[50px] font-['Righteous'] font-normal text-slate-900 leading-[1.1] mb-8 md:mb-10 max-w-4xl tracking-wide">
                                Ship for the Open Market.
                            </h1>
                            <p className="text-[15px] text-slate-700 leading-relaxed mb-8 max-w-sm">
                                Six days uniting elite builders, market operators, and global protocols. Build scalable, market-ready businesses in Port Harcourt this Nov 30th - Dec 5th.
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
                        <div className="lg:col-span-6 flex justify-center gap-4 lg:gap-6">
                            <div className="w-1/2 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
                                <img src="/images/hero1.jpg" alt="Event" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-1/2 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border border-black/5">
                                <img src="/images/hero2.jpg" alt="Community" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>

            {/* ─── 2. THEME STATEMENT ─── */}
            <section id="about" className="border-b border-white/10 bg-[#0a0a0a]">
                {/* Editorial 2-col block */}
                <div className="custom-container max-w-6xl mx-auto px-4 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left: Headline */}
                    <div className="lg:border-r border-white/10 lg:pr-16 py-8 lg:py-0 flex flex-col justify-center">
                        <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-6">Re:Config 2026 Theme</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Righteous'] font-normal tracking-wide uppercase text-white leading-[1.05] mb-8">
                            Built for the Market,<br /><span className="text-brand-primary">Not the Repository.</span>
                        </h2>
                        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                            Re:Config 2026 is a definitive shift toward <span className="text-white font-semibold">Commercial Viability</span>. The biggest barriers we face are no longer about writing raw code they are about distribution, user acquisition, and building products that survive the open market.
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                            We are moving past empty testnet metrics and theoretical prototypes to engineer real-world, scalable businesses that unlock true economic value across the continent and beyond.
                        </p>
                        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 w-full max-h-[220px] opacity-80 hover:opacity-100 transition-opacity">
                            <img src={EVENT_IMAGES[0]} alt="Event Audience" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                    {/* Right: Fact cards */}
                    <div className="lg:pl-16 flex flex-col justify-center gap-0 border-t lg:border-t-0 border-white/10 pt-8 lg:pt-0">
                        <div className="border-b border-white/10 pb-8 mb-8">
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3">The Shift</p>
                            <p className="text-white font-semibold text-xl mb-2">Code is cheap. Distribution is the product.</p>
                            <p className="text-zinc-400 leading-relaxed">We pair technical builders with elite market operators from Day 1, eliminating the gap between engineering and commercial execution.</p>
                        </div>
                        <div>
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3">The Outcome</p>
                            <p className="text-white font-semibold text-xl mb-2">Launch viable digital assets, not side projects.</p>
                            <p className="text-zinc-400 leading-relaxed">Participants unlock direct access to global protocols, institutional capital, and real-world distribution networks.</p>
                        </div>
                    </div>
                </div>

                {/* Stat tiles row — ATE-style */}
                <div className="border-t border-white/10">
                    <div className="custom-container max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
                        <div className="border-r border-white/10 py-10 px-6 flex flex-col items-center text-center">
                            <span className="text-5xl md:text-6xl font-['Righteous'] text-white font-normal mb-2">
                                <AnimatedNumber end={6} />
                            </span>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Days of Execution</p>
                        </div>
                        <div className="border-r-0 md:border-r border-white/10 py-10 px-6 flex flex-col items-center text-center">
                            <span className="text-5xl md:text-6xl font-['Righteous'] text-white font-normal mb-2">
                                <AnimatedNumber end={2000} suffix="+" />
                            </span>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Builders & Founders</p>
                        </div>
                        <div className="border-t md:border-t-0 border-r border-white/10 py-10 px-6 flex flex-col items-center text-center">
                            <span className="text-5xl md:text-6xl font-['Righteous'] text-white font-normal mb-2">
                                <AnimatedNumber end={7} />
                            </span>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Ecosystem Tracks</p>
                        </div>
                        <div className="border-t md:border-t-0 border-white/10 py-10 px-6 flex flex-col items-center text-center">
                            <span className="text-5xl md:text-6xl font-['Righteous'] text-brand-primary font-normal mb-2">∞</span>
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Market Opportunity</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 3. THE 6-DAY JOURNEY (Timeline) ─── */}
            <section id="schedule" className="border-b border-white/10 bg-[#0a0a0a]">
                <div className="custom-container max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-white/10">
                        <div>
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4">Nov 30 – Dec 5, 2026 · Port Harcourt</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Righteous'] font-normal tracking-wide uppercase text-white leading-[1.05]">
                                From Deployment<br />to <span className="text-brand-primary">Dominance.</span>
                            </h2>
                        </div>
                        <p className="text-zinc-400 max-w-sm leading-relaxed md:text-right">
                            Six days. Real capital. Real protocols. Real distribution on the line.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {/* Days 1–3 */}
                        <div className="group border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors px-2">
                            <div className="md:col-span-3">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-1">Nov 30 – Dec 2</p>
                                <h3 className="text-2xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Days 1–3</h3>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-zinc-300 font-semibold">Re:Config Assembly</p>
                                <p className="text-zinc-500 text-sm mt-1">Market Intelligence</p>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-zinc-400 leading-relaxed">Intensive Go-To-Market tracks and founder-led strategy sessions. Builders engage directly with protocol teams across our 7 core ecosystems — identifying where real liquidity lives.
                                </p>
                                <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 w-full max-h-[160px] opacity-70 group-hover:opacity-100 transition-opacity">
                                    <img src={EVENT_IMAGES[2]} alt="Workshop" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="md:col-span-1 flex items-start justify-end">
                                <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_12px_rgba(254,101,0,0.8)] mt-1"></div>
                            </div>
                        </div>

                        {/* Days 3–4 */}
                        <div className="group border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors px-2">
                            <div className="md:col-span-3">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-1">Dec 2 – Dec 3</p>
                                <h3 className="text-2xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Days 3–4</h3>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-zinc-300 font-semibold">Co-working</p>
                                <p className="text-zinc-500 text-sm mt-1">Live On-Chain Deployment</p>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-zinc-400 leading-relaxed">Execution mode. Teams build on testnet before deploying to mainnet. Market operators embedded in every team close the gap between engineering and commercial reality.
                                </p>
                                <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 w-full max-h-[160px] opacity-70 group-hover:opacity-100 transition-opacity">
                                    <img src={EVENT_IMAGES[1]} alt="Build Sprint" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="md:col-span-1 flex items-start justify-end">
                                <div className="w-3 h-3 rounded-full border border-brand-primary mt-1"></div>
                            </div>
                        </div>

                        {/* Day 5 */}
                        <div className="group border-b border-white/10 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors px-2">
                            <div className="md:col-span-3">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-1">Dec 4</p>
                                <h3 className="text-2xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Day 5</h3>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-zinc-300 font-semibold">Demo Day</p>
                                <p className="text-zinc-500 text-sm mt-1">Pitch to the Market</p>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-zinc-400 leading-relaxed">Teams present to institutional capital, global protocol leads, and ecosystem investors. Not a demo day  a market validation session with capital allocators who write real checks.
                                </p>
                            </div>
                            <div className="md:col-span-1 flex items-start justify-end">
                                <div className="w-3 h-3 rounded-full border border-brand-primary mt-1"></div>
                            </div>
                        </div>

                        {/* Day 6 */}
                        <div className="group py-10 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors px-2">
                            <div className="md:col-span-3">
                                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-1">Dec 5</p>
                                <h3 className="text-2xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Day 6</h3>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-zinc-300 font-semibold">Re:Config Summit</p>
                                <p className="text-zinc-500 text-sm mt-1">Internet Capital Markets</p>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-zinc-400 leading-relaxed">The public summit. Where the next generation of founders ship for the Internet Capital Markets. Keynotes, ecosystem announcements, live product launches, and the connections that define careers.
                                </p>
                                <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 w-full max-h-[160px] opacity-70 group-hover:opacity-100 transition-opacity">
                                    <img src={EVENT_IMAGES[3]} alt="Summit" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="md:col-span-1 flex items-start justify-end">
                                <div className="w-3 h-3 rounded-full bg-brand-primary animate-pulse shadow-[0_0_12px_rgba(254,101,0,0.8)] mt-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 4. ECOSYSTEM PARTNERS ─── */}
            <section className="border-b border-white/10 bg-[#0a0a0a]">
                <div className="custom-container max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-white/10">
                        <h3 className="text-3xl md:text-4xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Backed by the Global <span className="text-brand-primary">Web3 Ecosystem.</span></h3>
                        <p className="text-zinc-400 max-w-sm leading-relaxed md:text-right text-sm">
                            Leading L1s, L2s, infrastructure protocols, and institutional capital partners  all aligned around one goal: commercial output.
                        </p>
                    </div>
                    <div className="w-full border border-white/10 rounded-2xl p-12 py-20 flex items-center justify-center">
                        <p className="text-zinc-600 font-mono text-sm tracking-widest uppercase">[ Protocol Logos &amp; Ecosystem Partners  Coming Soon ]</p>
                    </div>
                </div>
            </section>

            {/* ─── 5. WHAT YOU UNLOCK ─── */}
            <section id="offerings" className="border-b border-white/10 bg-[#0a0a0a]">
                <div className="custom-container max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-white/10">
                        <div>
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4">Re:Config 2026 — What You Unlock</p>
                            <h2 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white">Engineering Meets<br />Execution.</h2>
                        </div>
                        <p className="text-zinc-400 max-w-sm leading-relaxed md:text-right text-sm">Because code without distribution is just a hobby. We pair both from Day 1.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="py-10 md:py-0 md:pr-10">
                            <FaLaptopCode className="text-2xl text-brand-primary mb-6" />
                            <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">GTM Tracks</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Intensive Go-To-Market sessions covering AI & Autonomous Systems, Stablecoins & Digital Payments, RWAs, Consumer Crypto, DeFi, Gaming, and Startup Building.
                            </p>
                        </div>
                        <div className="py-10 md:py-0 md:px-10">
                            <FaUsers className="text-2xl text-brand-primary mb-6" />
                            <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">Market Operators</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Elite market operators embedded in every team from Day 1 bridging the gap between technical builders and commercial execution in real time.
                            </p>
                        </div>
                        <div className="py-10 md:py-0 md:pl-10">
                            <FaChartLine className="text-2xl text-brand-primary mb-6" />
                            <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase mb-4 text-white">Capital Access</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
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

            {/* ─── 7. WHY RE:CONFIG ─── */}
            <section className="border-b border-white/10 bg-[#0a0a0a]">
                <div className="custom-container max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-12 border-b border-white/10">
                        <div>
                            <p className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4">Re:Config 2026 — Why Re:Config</p>
                            <h2 className="text-4xl md:text-5xl font-['Righteous'] font-normal tracking-wide uppercase text-white">This Is Not<br />a Hackathon.</h2>
                        </div>
                        <p className="text-zinc-400 max-w-sm leading-relaxed md:text-right text-sm">Hackathons build for repositories. Re:Config builds for markets.</p>
                    </div>

                    <div className="space-y-0">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-2 group">
                            <div className="md:col-span-1 flex items-start">
                                <FaRobot className="text-xl text-brand-primary mt-1" />
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase text-white">Path to Mainnet</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="text-zinc-400 leading-relaxed">Participants build on testnet with the clear goal of deploying to mainnet. Real stakes, real users, real feedback preparing for the open market.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-2 group">
                            <div className="md:col-span-1 flex items-start">
                                <FaGlobe className="text-xl text-brand-primary mt-1" />
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase text-white">Global Distribution</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="text-zinc-400 leading-relaxed">Outstanding teams receive continued support, ecosystem introductions, direct protocol grants, and introductions to institutional capital allocators who write real checks.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 hover:bg-white/[0.02] transition-colors px-2 group">
                            <div className="md:col-span-1 flex items-start">
                                <FaCheckCircle className="text-xl text-brand-primary mt-1" />
                            </div>
                            <div className="md:col-span-4">
                                <h3 className="text-lg font-['Righteous'] font-normal tracking-wide uppercase text-white">Permanent Record</h3>
                            </div>
                            <div className="md:col-span-7">
                                <p className="text-zinc-400 leading-relaxed">Every session recorded and integrated into LB Academy. The knowledge built at Re:Config compounds across the entire African Web3 ecosystem permanently.</p>
                            </div>
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
