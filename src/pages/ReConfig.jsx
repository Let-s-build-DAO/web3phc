import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaUsers, FaGlobe, FaChartBar, FaBolt, FaLock, FaRobot } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const Counter = ({ from = 0, to, duration = 1, suffix = "" }) => {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    let startTime = null;
    const startVal = from;
    const endVal = to;
    const totalMs = duration * 1000;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / totalMs, 1);
      const current = startVal + (endVal - startVal) * easeOut(progress);
      if (suffix === " Tn") {
        setCount(parseFloat(current.toFixed(1)));
      } else {
        setCount(Math.round(current));
      }
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);

  const formatNumber = (num) => {
    if (suffix === " Tn") return num.toFixed(1);
    return Math.floor(num);
  };

  return <span>{formatNumber(count)}{suffix}</span>;
};

const SECTORS = [
  {
    tag: "RWA",
    label: "Real World Assets",
    stat: "$35B+",
    statLabel: "On-chain tokenized assets",
    body: "Tokenized treasuries, real estate, and credit instruments are going on-chain at speed. Africa's underserved asset base represents an untapped frontier for RWA issuers looking for real demand.",
    icon: <FaLock size={20} />,
  },
  {
    tag: "STABLECOINS",
    label: "Stable Finance",
    stat: "$300B",
    statLabel: "Global stablecoin market cap",
    body: "95% of Nigerians prefer stablecoins over the naira. With $92B in on-chain volume annually, Nigeria is already the continent's stablecoin capital — and Re:Config is the conversion layer.",
    icon: <FaChartBar size={20} />,
  },
  {
    tag: "DeFAI",
    label: "AI-Powered DeFi",
    stat: "$10B",
    statLabel: "DeFAI market cap target, 2025",
    body: "The fusion of AI and DeFi is creating autonomous financial systems. Our ecosystem ships vibe-coded agents and on-chain automation at a pace that established protocols can directly leverage.",
    icon: <FaRobot size={20} />,
  },
  {
    tag: "AI AGENTS",
    label: "Autonomous Agents",
    stat: "1M+",
    statLabel: "On-chain agents by end of 2025",
    body: "Blockchain networks will host over 1 million AI agents this year. Re:Config brings together the builders who are deploying them—giving protocols direct access to autonomous agent infrastructure talent.",
    icon: <FaBolt size={20} />,
  },
  {
    tag: "X402",
    label: "Internet-Native Payments",
    stat: "100M+",
    statLabel: "x402 transactions processed",
    body: "The x402 protocol (Coinbase/Cloudflare/Google/Visa) enables machine-to-machine stablecoin payments over HTTP. Re:Config builders are already integrating it. Be at the table when it scales.",
    icon: <FaGlobe size={20} />,
  },
];

const ReConfig = () => {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
    };

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
    };
    const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

    return (
        <div className="bg-black min-h-screen selection:bg-brand-primary selection:text-black">
            <Helmet>
                <title>Re:Config | Build the Next Web3 Frontier</title>
            </Helmet>
            <SEO
                title="Re:Config | Where Protocols Find Traction"
                description="Re:Config is Africa's premier Web3 deployment event. Connect your protocol with 1,200+ builders across RWA, DeFAI, AI Agents, Stablecoins, and x402."
                type="website"
            />

            {/* ─── HERO ─── */}
            <section className="relative h-screen flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        src="/eventvid.mp4"
                        autoPlay loop muted playsInline
                        preload="none"
                        style={{ willChange: 'transform' }}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                </div>

                {/* Sound toggle */}
                <button
                    onClick={toggleMute}
                    className="absolute top-8 right-8 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label={muted ? 'Unmute' : 'Mute'}
                >
                    {muted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.347 2.595.341 1.24 1.518 1.905 2.659 1.905H6.44l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.347 2.595.341 1.24 1.518 1.905 2.659 1.905H6.44l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                            <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                        </svg>
                    )}
                </button>

                <div className="custom-container relative z-20 pb-20 w-full">
                    <motion.div variants={container} initial="hidden" animate="show">
                        <motion.p variants={item} className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-6">
                            [ RE:CONFIG · OCT 17–24 · PORT HARCOURT ]
                        </motion.p>
                        <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-black text-white leading-[0.85] tracking-tighter uppercase mb-8 max-w-5xl">
                            YOUR PROTOCOL.<br />
                            <span className="font-serif italic font-light lowercase text-brand-primary">1,200 builders.</span>
                        </motion.h1>
                        <motion.p variants={item} className="text-xl md:text-2xl text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mb-10">
                            Re:Config is where blockchain protocols meet Africa&apos;s most active Web3 builder base. Deploy, test, and scale across RWA, DeFAI, AI Agents, Stablecoins, and x402—with a crowd that ships.
                        </motion.p>
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-brand-primary text-black hover:bg-white transition-colors px-10 py-5 text-sm uppercase font-sans font-black tracking-widest flex items-center gap-2">
                                PARTNER WITH US <FaArrowRight />
                            </button>
                            <button className="bg-transparent text-white border-2 border-white/20 hover:bg-white hover:text-black transition-colors px-10 py-5 text-sm uppercase font-sans font-bold tracking-widest">
                                GET TICKETS
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ─── MARKET SIGNAL TICKER ─── */}
            <section className="bg-brand-primary py-4 overflow-hidden border-y border-brand-primary">
                <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
                    {[
                        "🇳🇬 Nigeria #2 Global Crypto Adoption · Chainalysis 2024",
                        "💰 $92B Nigeria On-Chain Volume · Annual",
                        "📈 52% Sub-Saharan Africa YoY Growth",
                        "🏦 95% of Nigerians Prefer Stablecoins Over Naira",
                        "🌍 RWA On-Chain: $35B+ and growing",
                        "🤖 1M+ AI Agents On-Chain by End of 2025",
                        "⚡ x402: 100M+ Transactions · Backed by Google, Visa & Cloudflare",
                        "📊 Stablecoin Market Cap: $300B · Tx Volume: $33T",
                        "🧠 DeFAI: $1B → $10B in 2025",
                    ].concat([
                        "🇳🇬 Nigeria #2 Global Crypto Adoption · Chainalysis 2024",
                        "💰 $92B Nigeria On-Chain Volume · Annual",
                        "📈 52% Sub-Saharan Africa YoY Growth",
                        "🏦 95% of Nigerians Prefer Stablecoins Over Naira",
                        "🌍 RWA On-Chain: $35B+ and growing",
                        "🤖 1M+ AI Agents On-Chain by End of 2025",
                        "⚡ x402: 100M+ Transactions · Backed by Google, Visa & Cloudflare",
                        "📊 Stablecoin Market Cap: $300B · Tx Volume: $33T",
                        "🧠 DeFAI: $1B → $10B in 2025",
                    ]).map((text, i) => (
                        <span key={i} className="text-black font-mono text-xs font-bold uppercase tracking-wider">{text}</span>
                    ))}
                </div>
            </section>

            {/* ─── THE PROBLEM / PITCH ─── */}
            <section className="py-28 bg-black border-b border-white/10">
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-6">[ THE_OPPORTUNITY ]</h2>
                            <h3 className="text-5xl md:text-6xl font-sans font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                                FIVE SECTORS.<br />
                                <span className="font-serif italic font-light lowercase text-zinc-500">one deployment event.</span>
                            </h3>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                                The biggest sectors in global Web3—RWA, DeFAI, AI Agents, Stablecoins, and x402—all share one critical need: <strong className="text-white">builders who can ship</strong>. Africa is not just a market to enter; it is the laboratory where these primitives find their highest-stakes, real-world use.
                            </p>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                Re:Config is the deployment event. Protocols that want traction, not just visibility, partner with us to put their stack in front of 1,200+ developers, founders, and decision-makers who build for a living.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { v: "#2", l: "Nigeria globally", sub: "Chainalysis Adoption Index 2024" },
                                { v: "$92B+", l: "Nigeria on-chain", sub: "Annual crypto volume" },
                                { v: "52%", l: "Sub-Saharan growth", sub: "YoY on-chain volume" },
                                { v: "95%", l: "prefer stablecoins", sub: "over the naira" },
                            ].map((s) => (
                                <div key={s.l} className="border border-white/10 bg-zinc-950 p-6 rounded-lg">
                                    <div className="text-4xl font-sans font-black text-white mb-1">{s.v}</div>
                                    <div className="text-sm font-mono font-bold uppercase text-white tracking-widest mb-1">{s.l}</div>
                                    <div className="text-xs font-mono text-zinc-500 uppercase">{s.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTOR GRID ─── */}
            <section className="py-28 bg-zinc-950 border-b border-white/10">
                <div className="custom-container">
                    <div className="mb-16">
                        <h2 className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-4">[ BUILD_ON ]</h2>
                        <h3 className="text-5xl md:text-6xl font-sans font-black text-white leading-[0.9] tracking-tighter uppercase">
                            WHAT WE&apos;RE<br />
                            <span className="font-serif italic font-light lowercase text-zinc-500">building this year.</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                        {SECTORS.map((sector) => (
                            <div key={sector.tag} className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary rounded">
                                        {sector.icon}
                                    </div>
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-primary">{sector.tag}</span>
                                </div>
                                <div className="text-4xl font-sans font-black text-white mb-1 group-hover:text-brand-primary transition-colors">{sector.stat}</div>
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-tight mb-4">{sector.statLabel}</div>
                                <h4 className="text-lg font-sans font-black text-white uppercase tracking-tight mb-3">{sector.label}</h4>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">{sector.body}</p>
                            </div>
                        ))}
                        {/* CTA cell */}
                        <div className="bg-brand-primary p-10 flex flex-col justify-between group">
                            <div>
                                <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 mb-4">[ YOUR_PROTOCOL ]</p>
                                <h4 className="text-3xl font-sans font-black text-black uppercase leading-tight mb-4">Be the infrastructure they build on.</h4>
                                <p className="text-sm text-black/70 font-light">Integrate your stack, sponsor a track, or run a live hackathon challenge. Get your protocol in front of builders who actually deploy.</p>
                            </div>
                            <button className="mt-8 bg-black text-white hover:bg-zinc-900 transition-colors px-6 py-4 text-xs uppercase font-mono font-bold tracking-widest flex items-center gap-2 self-start">
                                BECOME A PARTNER <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── THE BUILDER PIPELINE ─── */}
            <section className="py-28 bg-black border-b border-white/10">
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative h-[580px] w-full bg-zinc-900 rounded-xl overflow-hidden border border-white/10 group order-last lg:order-first">
                            <div className="absolute inset-0 bg-[url('/images/241.JPG')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex gap-3 flex-wrap">
                                    {["Solidity", "Rust", "Move", "TypeScript", "Python", "Go"].map(lang => (
                                        <span key={lang} className="bg-white/10 backdrop-blur border border-white/10 px-3 py-1 text-xs font-mono text-white rounded-full">{lang}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-6">[ THE_BUILDERS ]</h2>
                            <h3 className="text-5xl md:text-6xl font-sans font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                                1,200+<br />
                                <span className="font-serif italic font-light lowercase text-zinc-500">ready to ship.</span>
                            </h3>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                                Our builder community spans Port Harcourt&apos;s 6+ universities, distributed teams across 30+ African countries, and global contributors shipping on Solana, EVM, Move, and beyond. These are not passive attendees — they are protocol contributors, open-source maintainers, and DeFi founders.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mb-10">
                                {[
                                    { v: "1,200+", l: "Builders" },
                                    { v: "30+", l: "Countries" },
                                    { v: "8", l: "Days" },
                                ].map((s) => (
                                    <div key={s.l} className="border border-white/10 p-4 rounded-lg text-center">
                                        <div className="text-3xl font-sans font-black text-white mb-1">{s.v}</div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Every Re:Config track—Residency, Hackathon, and Summit—is structured to generate protocol integrations, not just conversations. Your stack goes from pitch to pull request in 8 days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── THREE PILLARS (PROGRAM) ─── */}
            <section className="py-28 bg-zinc-900 border-b border-black">
                <div className="custom-container">
                    <div className="text-center mb-20 relative">
                        <h2 className="text-[15vw] md:text-[8vw] font-sans font-black tracking-tighter text-white/5 leading-none absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none uppercase">PROGRAM</h2>
                        <p className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-4 relative z-10">[ THE_PROGRAM ]</p>
                        <h3 className="text-5xl md:text-6xl font-sans font-black tracking-tighter text-white relative z-10 uppercase">
                            THREE <span className="font-serif italic font-light lowercase text-brand-primary">pillars.</span>
                        </h3>
                        <p className="text-zinc-400 mt-4 max-w-xl mx-auto relative z-10 text-lg font-light">
                            Designed to move protocols from exposure to integration in one continuous arc.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                date: "Oct 17",
                                title: "RESIDENCY.",
                                sub: "The Launchpad.",
                                desc: "An 8-day deep-work residency where curated builder cohorts work directly with protocol mentors, documentation, and SDKs. Ends with live demos on your chain.",
                                items: ["Protocol Workshops", "SDK Integration", "Builder Cohorts"],
                            },
                            {
                                date: "Oct 20",
                                title: "HACK.",
                                sub: "The Build Sprint.",
                                desc: "A focused multi-day hackathon with tracks mapped to RWA, DeFAI, AI Agents, and x402. Protocols set bounties, judges evaluate live deployments.",
                                items: ["Live Bounties", "On-Chain Deployments", "Track Prizes"],
                            },
                            {
                                date: "Oct 24",
                                title: "CONNECT.",
                                sub: "The Summit.",
                                desc: "High-level panels with global protocol leads, VCs, and government officials. Builder showcases, deal flow, and the Garden City Glow afterparty.",
                                items: ["Main Stage", "Deal Flow", "Networking"],
                            },
                        ].map((pillar) => (
                            <div key={pillar.title} className="card group hover:border-brand-primary/50 flex flex-col h-full bg-[#121212] p-8 border border-white/5 rounded-xl transition-all">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="font-mono text-xs text-brand-primary font-bold uppercase tracking-widest">{pillar.date}</span>
                                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:text-brand-primary transition-colors">
                                        <FaGlobe size={12} />
                                    </div>
                                </div>
                                <h4 className="text-4xl lg:text-5xl font-sans font-black tracking-tight text-white mb-2 group-hover:text-brand-primary transition-colors">{pillar.title}</h4>
                                <p className="text-brand-primary font-mono text-xs uppercase tracking-widest font-bold mb-4">{pillar.sub}</p>
                                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow font-light">{pillar.desc}</p>
                                <ul className="space-y-3 text-sm font-sans text-zinc-400 mt-auto border-t border-white/5 pt-6">
                                    {pillar.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand-primary flex-shrink-0" />{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── AI AGENTS & VIBE CODERS ENGINE ROOM ─── */}
            <section className="py-28 bg-black border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-mono text-xs tracking-widest text-brand-primary uppercase mb-6">[ AI_VIBE_CODERS ]</h2>
                            <h3 className="text-5xl md:text-6xl font-sans font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
                                THE ENGINE<br />
                                <span className="font-serif italic font-light lowercase text-zinc-500">room.</span>
                            </h3>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                                Our ecosystem has a growing army of <strong className="text-white">AI agent builders</strong> and <strong className="text-white">vibe coders</strong>—developers who ship entire products in hours using AI-assisted development workflows. They are not hobbyists; they are deploying on-chain agents, automating DeFi strategies, and building x402-integrated APIs right now.
                            </p>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                                For protocols that need fast integration partners, this is the talent pool that delivers. Re:Config gives you structured access to this community: workshops, bounties, and residency cohorts purpose-built around your stack.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <FaRobot />, title: "Autonomous Agents", desc: "On-chain agents for DeFi, data, and governance automation." },
                                    { icon: <FaCode />, title: "Vibe Coding Culture", desc: "AI-assisted dev teams shipping protocols at startup speed." },
                                    { icon: <FaBolt />, title: "x402 Ready", desc: "Builders already integrating HTTP-native stablecoin payments." },
                                    { icon: <FaUsers />, title: "Protocol Talent", desc: "Direct pipeline to developers ready to build on your stack." },
                                ].map((card) => (
                                    <div key={card.title} className="border border-white/10 bg-zinc-950 p-5 rounded-lg group hover:border-brand-primary/30 transition-colors">
                                        <div className="text-brand-primary mb-3">{card.icon}</div>
                                        <h5 className="text-white font-sans font-black text-sm uppercase tracking-tight mb-2">{card.title}</h5>
                                        <p className="text-zinc-500 text-xs font-light leading-relaxed">{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-brand-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-zinc-900 border border-white/10 p-1 rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square">
                                <div className="absolute inset-0 bg-[url('/images/246.jpg')] bg-cover bg-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
                                        <p className="text-white text-base font-bold mb-2">&quot;Protocol discovery happens here.&quot;</p>
                                        <p className="text-zinc-400 text-xs font-mono">Founders are integrating AI agents directly into the Garden City Residency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section className="py-28 bg-white text-black">
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="font-mono text-xs tracking-widest text-black/40 uppercase mb-6">[ YOUR_MOVE ]</p>
                            <h3 className="text-5xl md:text-6xl font-sans font-black leading-[0.9] tracking-tighter uppercase mb-8">
                                GET YOUR<br />
                                <span className="font-serif italic font-light lowercase">protocol in the room.</span>
                            </h3>
                            <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                                Sponsorship, track hosting, bounty integration, or just show up. Re:Config gives you structured access to Africa&apos;s most active builder community—and the markets they are building for.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-black text-white hover:bg-zinc-800 transition-colors px-10 py-5 text-sm uppercase font-sans font-black tracking-widest flex items-center gap-2">
                                    PARTNER WITH US <FaArrowRight />
                                </button>
                                <button className="bg-transparent text-black border-2 border-black/20 hover:bg-black hover:text-white transition-colors px-10 py-5 text-sm uppercase font-sans font-bold tracking-widest">
                                    GET TICKETS
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: <FaCode className="text-xl" />, title: "Track Sponsorship", desc: "Own a vertical. Run your own hackathon track themed around your protocol&apos;s key use case." },
                                { icon: <FaBolt className="text-xl" />, title: "Bounty Program", desc: "Post live integration bounties. Builders compete to deploy on your stack during the Hackathon." },
                                { icon: <FaUsers className="text-xl" />, title: "Residency Partner", desc: "Get 8 days of dedicated engineering time from curated builder cohorts working on your protocol." },
                            ].map((opt) => (
                                <div key={opt.title} className="border border-black/10 p-6 rounded-xl hover:border-black/30 transition-colors flex gap-4">
                                    <div className="text-black/40 mt-1 flex-shrink-0">{opt.icon}</div>
                                    <div>
                                        <h5 className="font-sans font-black text-black uppercase tracking-tight mb-1">{opt.title}</h5>
                                        <p className="text-zinc-500 text-sm font-light leading-relaxed">{opt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReConfig;
