import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaUsers, FaGlobe, FaChartBar, FaBolt, FaLock, FaRobot } from 'react-icons/fa';
import SEO from '../components/SEO';
import { SITE_ORIGIN, absoluteUrl } from '../config/site';


const HERO_TERMS = ["config", "peat", "frame", "route", "deploy"];

const RECONFIG_SEO_DESCRIPTION =
    "Re:Config is Web3PHC's multi-day Web3 deployment event in Port Harcourt, Rivers State, Nigeria. Protocols and sponsors meet builders working across RWA, DeFAI, AI agents, stablecoins, and x402 payment rails.";

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
            startDate: "2026-10-17",
            endDate: "2026-10-24",
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
    const [activeTerm, setActiveTerm] = useState(HERO_TERMS[0]);
    const [themeClicks, setThemeClicks] = useState(0);
    const [isThemeUnveiled, setIsThemeUnveiled] = useState(false);

    const handleThemeClick = () => {
        if (isThemeUnveiled) return;
        const newClicks = themeClicks + 1;
        setThemeClicks(newClicks);
        if (newClicks >= 2000) {
            setIsThemeUnveiled(true);
            setTimeout(() => {
                setIsThemeUnveiled(false);
                setThemeClicks(0);
            }, 3000);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTerm((current) => {
                const currentIndex = HERO_TERMS.indexOf(current);
                const nextIndex = (currentIndex + 1) % HERO_TERMS.length;
                return HERO_TERMS[nextIndex];
            });
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } }
    };
    const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

    return (
        <div
            className="bg-black min-h-screen selection:bg-brand-primary selection:text-black"
            aria-labelledby="reconfig-hero-title"
        >
            <SEO
                title="Re:Config"
                url="/reconfig"
                description={RECONFIG_SEO_DESCRIPTION}
                type="website"
                schemaData={reconfigJsonLd}
            />

            {/* ─── HERO ─── */}
            <header className="relative min-h-[100dvh] md:h-screen flex items-end overflow-hidden border-b border-white/10 bg-[#050505] isolate mb-60">
                {/* Single paint layer: one gradient + subtle vignette (no tiled grid — cheaper on mobile GPU) */}
                <div
                    className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f0f0f] via-[#060606] to-black"
                    aria-hidden
                />
                <div
                    className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(254,101,0,0.18),transparent_55%)]"
                    aria-hidden
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" aria-hidden />

                <div className="custom-container relative z-20 pb-16 pt-24 sm:pt-28 w-full px-4">
                    <motion.div variants={container} initial="hidden" animate="show">
                        
                        <motion.h1 id="reconfig-hero-title" variants={item} className="text-5xl md:text-8xl lg:text-[7rem] font-sans font-black text-white leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            <span className="inline-flex items-baseline gap-3 md:gap-5">
                                <span className="text-white">re:</span>
                                <span className="relative inline-block min-w-[7ch] text-brand-primary lowercase tabular-nums">
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={activeTerm}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            className="block font-serif italic font-light"
                                        >
                                            {activeTerm}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </span>
                        </motion.h1>
                        <motion.p variants={item} className="text-xl md:text-2xl text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mb-10">
                            Re:Config is where blockchain protocols meet Africa&apos;s most active Web3 builder base. Deploy, test, and scale across RWA, DeFAI, AI Agents, Stablecoins, and x402—with a crowd that ships.
                        </motion.p>
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-brand-primary text-black hover:bg-white transition-colors px-10 py-5 text-sm uppercase font-sans font-black tracking-widest flex items-center gap-2">
                                SPONSOR US <FaArrowRight />
                            </button>
                            <button className="bg-transparent text-white border-2 border-white/20 hover:bg-white hover:text-black transition-colors px-10 py-5 text-sm uppercase font-sans font-bold tracking-widest">
                                GET TICKETS
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </header>
            {/* ─── THE FUTURE (INTRODUCTION) ─── */}
            <section
                className="py-24 px-4 relative bg-[#f8f9fa] z-20 rounded-t-[48px] lg:rounded-t-[80px] -mt-20 md:-mt-40 overflow-hidden text-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
                aria-labelledby="intro-heading"
            >
                {/* Geometric grid + radial mask */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#fe650020_1px,transparent_1px),linear-gradient(to_bottom,#0052ff20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_100%)]"
                    aria-hidden
                />
                
                <div className="custom-container relative z-10 w-full px-4 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <button onClick={handleThemeClick} className="font-mono text-xs tracking-widest text-[#525252] uppercase mb-6 hover:text-brand-primary transition-colors focus:outline-none">
                            [ THEME: {isThemeUnveiled ? "THE_FUTURE" : `CLASSIFIED (${themeClicks}/2000)`} ]
                        </button>
                        <h2 id="intro-heading" className="text-4xl md:text-6xl font-sans font-black text-black leading-tight tracking-tighter uppercase mb-8">
                            A six-day <span className="text-brand-primary">builder experience.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-600 font-sans font-medium leading-relaxed mb-6">
                            Designed to help founders, developers, creators, and ecosystem leaders learn, collaborate, build, and showcase the technologies shaping the future of the internet.
                        </p>
                        <p className="text-lg md:text-xl text-zinc-600 font-sans font-medium leading-relaxed">
                            Unlike traditional conferences where attendees spend most of their time listening, Re:Config is built around participation. Every stage of the experience is designed to move builders from learning and exploration to execution, public demonstration, and long-term ecosystem support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white border border-black/5 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full mb-6">Days 1–5</span>
                                <h3 className="text-2xl font-sans font-black text-black uppercase mb-4">Re:Config Assembly</h3>
                                <p className="text-zinc-600">The intensive, execution-focused builder experience. Curated pods, deep-dive workshops, and the Forge build phase.</p>
                            </div>
                        </div>
                        <div className="bg-black text-white border border-white/10 p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-brand-primary text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full mb-6">Day 6</span>
                                <h3 className="text-2xl font-sans font-black uppercase mb-4">Re:Config Summit</h3>
                                <p className="text-zinc-400">The public ecosystem gathering. Global keynotes, panels, and project showcases open to the wider tech community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── STAGE 1: ASSEMBLY ─── */}
            <section className="py-24 px-4 relative bg-[#050505] z-30 rounded-t-[48px] lg:rounded-t-[80px] -mt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] text-white">
                <div className="custom-container w-full px-4 lg:px-12">
                    <div className="mb-20">
                        <p className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-4">[ STAGE 1 ]</p>
                        <h2 className="text-5xl md:text-7xl font-sans font-black leading-[0.9] tracking-tighter uppercase mb-6">
                            RE:CONFIG<br />
                            <span className="font-serif italic font-light lowercase text-zinc-500">assembly.</span>
                        </h2>
                    </div>

                    {/* Days 1-3 */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                            <h3 className="text-3xl font-sans font-black uppercase">Days 1–3: Learning & Exploration</h3>
                            <span className="hidden sm:inline-block px-3 py-1 bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full">Foundation</span>
                        </div>
                        <p className="text-xl text-zinc-400 mb-12 max-w-3xl">The first three days focus on helping participants understand the technologies, opportunities, and business models shaping the next generation of Web3.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-brand-primary/30 transition-colors">
                                <FaCode className="text-3xl text-brand-primary mb-6" />
                                <h4 className="text-xl font-sans font-black uppercase mb-4">Technical Workshops</h4>
                                <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> AI-assisted development</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> AI agents & autonomous systems</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Smart contract development</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Stablecoins & digital payments</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> DeFi & Real World Assets</li>
                                </ul>
                            </div>
                            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-brand-primary/30 transition-colors">
                                <FaUsers className="text-3xl text-brand-primary mb-6" />
                                <h4 className="text-xl font-sans font-black uppercase mb-4">Founder Discussions</h4>
                                <ul className="space-y-3 text-sm text-zinc-400 font-medium">
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Building startups from scratch</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Product development & validation</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Growth & user acquisition</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Fundraising & grants</li>
                                    <li className="flex gap-3"><span className="text-brand-primary">/</span> Operating in emerging markets</li>
                                </ul>
                            </div>
                            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-brand-primary/30 transition-colors">
                                <FaGlobe className="text-3xl text-brand-primary mb-6" />
                                <h4 className="text-xl font-sans font-black uppercase mb-4">Ecosystem Sessions</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Protocol partners and ecosystem teams will introduce participants to available tools, grants, infrastructure, and opportunities within their ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Days 3-4 */}
                    <div className="mb-24 relative">
                        <div className="absolute -inset-x-4 inset-y-0 bg-brand-primary/5 rounded-3xl -z-10" />
                        <div className="flex items-center gap-4 mb-10 border-b border-brand-primary/20 pb-6 pt-8 px-4">
                            <h3 className="text-3xl font-sans font-black uppercase text-brand-primary">Days 3–4: Build Phase</h3>
                            <span className="hidden sm:inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest rounded-full">Execution</span>
                        </div>
                        <div className="px-4 pb-8">
                            <p className="text-xl text-zinc-300 mb-12 max-w-3xl">After the learning sessions, participants move into execution. Teams form around ideas identified during the first half of the week and begin actively building.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="text-lg font-sans font-black uppercase text-white mb-3">Product Development</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">Focusing on MVPs, prototypes, AI-powered applications, consumer crypto products, infrastructure, and developer tooling.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-sans font-black uppercase text-white mb-3">Collaboration</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">Developers, designers, founders, and creators working in cross-functional pods to transform ideas into working products.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-sans font-black uppercase text-white mb-3">Mentorship</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">Direct support from technical mentors, experienced founders, ecosystem partners, and protocol DevRel teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 5 */}
                    <div className="bg-brand-primary text-black rounded-3xl p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <h3 className="text-4xl font-sans font-black uppercase">Day 5: Demo Day</h3>
                                </div>
                                <p className="text-xl font-medium mb-8">Demo Day is where teams present everything they have built throughout the week before judges, ecosystem partners, and founders.</p>
                                <p className="text-lg font-bold mb-4">Teams Present:</p>
                                <ul className="space-y-2 font-medium">
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full" /> Problem & Solution</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full" /> Live Product Demonstrations</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full" /> Technical Architecture</li>
                                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full" /> Market Opportunity & Roadmap</li>
                                </ul>
                            </div>
                            <div className="bg-black/10 rounded-2xl p-8 backdrop-blur-sm border border-black/10">
                                <p className="text-lg font-bold mb-6">Evaluation Criteria:</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Technical Execution', 'Product Vision', 'Innovation', 'User Relevance', 'Growth Potential'].map(crit => (
                                        <div key={crit} className="bg-white/50 px-4 py-3 rounded-lg font-bold text-sm">{crit}</div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-black/10">
                                    <p className="font-bold italic">Demo Day serves as a launchpad for projects that may continue receiving support after Re:Config.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ─── STAGE 2: SUMMIT ─── */}
            <section className="py-24 px-4 relative bg-white z-40 rounded-t-[48px] lg:rounded-t-[80px] -mt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] text-black">
                <div className="custom-container w-full px-4 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <div className="sticky top-24">
                                <p className="font-mono text-xs tracking-widest text-[#525252] uppercase mb-4">[ STAGE 2 ]</p>
                                <h2 className="text-5xl md:text-7xl font-sans font-black leading-[0.9] tracking-tighter uppercase mb-6">
                                    RE:CONFIG<br />
                                    <span className="font-serif italic font-light lowercase text-zinc-400">summit.</span>
                                </h2>
                                <p className="text-xl text-zinc-600 mb-8 font-medium">The Summit is where the broader community joins the conversation.</p>
                                <p className="text-lg text-zinc-500 mb-8">Builders, founders, creators, students, protocol teams, and ecosystem leaders come together to explore the ideas and products emerging from Re:Config Assembly.</p>
                                <button className="bg-black text-white hover:bg-zinc-800 transition-colors px-8 py-4 text-sm uppercase font-sans font-black tracking-widest flex items-center gap-2">
                                    ATTEND THE SUMMIT <FaArrowRight />
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="border border-black/10 p-8 rounded-3xl hover:shadow-md transition-shadow bg-[#f8f9fa]">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                                        <FaRobot size={20} />
                                    </div>
                                    <h4 className="text-xl font-sans font-black text-black uppercase mb-3">Keynotes</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">Industry leaders share perspectives on the future of AI, Web3, digital ownership, decentralized infrastructure, and building globally from Africa.</p>
                                </div>
                                <div className="border border-black/10 p-8 rounded-3xl hover:shadow-md transition-shadow bg-[#f8f9fa]">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                                        <FaUsers size={20} />
                                    </div>
                                    <h4 className="text-xl font-sans font-black text-black uppercase mb-3">Panels & Conversations</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">Interactive discussions featuring founders and operators covering startup building, consumer adoption, funding, and ecosystem growth.</p>
                                </div>
                                <div className="border border-brand-primary p-8 rounded-3xl shadow-sm bg-brand-primary/5">
                                    <div className="w-12 h-12 bg-brand-primary text-black rounded-full flex items-center justify-center mb-6">
                                        <FaCode size={20} />
                                    </div>
                                    <h4 className="text-xl font-sans font-black text-black uppercase mb-3">Project Showcase</h4>
                                    <p className="text-zinc-800 text-sm leading-relaxed">Selected teams from Re:Config Assembly demonstrate the products they built. Interact directly with the builders and their code.</p>
                                </div>
                                <div className="border border-black/10 p-8 rounded-3xl hover:shadow-md transition-shadow bg-[#f8f9fa]">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                                        <FaGlobe size={20} />
                                    </div>
                                    <h4 className="text-xl font-sans font-black text-black uppercase mb-3">Networking</h4>
                                    <p className="text-zinc-600 text-sm leading-relaxed">Connect with founders, developers, creators, protocol partners, and ecosystem operators. The bridge between the products and the ecosystem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── BEYOND RE:CONFIG ─── */}
            <section className="py-24 px-4 relative bg-[#050505] z-50 rounded-t-[48px] lg:rounded-t-[80px] -mt-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-primary/10 via-black to-black pointer-events-none" />
                
                <div className="custom-container relative z-10 w-full px-4 lg:px-12 text-center max-w-4xl mx-auto">
                    <p className="font-mono text-xs tracking-widest text-[#525252] uppercase mb-6">[ CONTINUITY ]</p>
                    <h2 className="text-4xl md:text-6xl font-sans font-black leading-tight tracking-tighter uppercase mb-8">
                        BEYOND <span className="text-brand-primary">RE:CONFIG</span>
                    </h2>
                    <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
                        Re:Config does not end when the event concludes. Outstanding builders and teams continue through the Web3PHC ecosystem.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {['Mentorship', 'Community Support', 'Ecosystem Introductions', 'Grant Opportunities', 'Visibility across Web3PHC channels', 'Future Builder Programs'].map(perk => (
                            <span key={perk} className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                                {perk}
                            </span>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl text-left flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h4 className="text-2xl font-sans font-black uppercase mb-4 text-white">Permanent Learning Infrastructure</h4>
                            <p className="text-zinc-400 leading-relaxed">
                                All workshops, founder sessions, and technical content are recorded and integrated into <strong className="text-brand-primary">LB Academy</strong>, creating a permanent learning resource that continues to support developers and founders long after Re:Config ends.
                            </p>
                        </div>
                        <div className="md:w-1/3 text-center md:text-right">
                            <p className="text-sm font-bold italic text-zinc-500 mb-4">&quot;From learning, to building, to launching.&quot;</p>
                            <button className="bg-brand-primary text-black hover:bg-white transition-colors px-8 py-4 text-xs uppercase font-sans font-black tracking-widest">
                                BECOME A PARTNER
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReConfig;
