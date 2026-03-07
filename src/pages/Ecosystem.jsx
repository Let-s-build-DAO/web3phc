import { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaSearch, FaTelegram, FaGlobe, FaArrowRight } from "react-icons/fa";
import XIcon from "../components/XIcon";

const ECOSYSTEM_DATA = [
  {
    id: "lb-dao",
    name: "LB DAO",
    category: "Communities",
    description: "LB DAO’s mission is to power sustainable Web3 adoption by combining data intelligence, funding, and community support for builders and founders worldwide especially in emerging markets.",
    logo: "/projects/lbdao.jpg",
    website: "https://www.lbdao.xyz/",
    twitter: "https://x.com/letsbuild_dao",
    telegram: "https://t.me/lbdaocommunity",
    tags: ["DAO", "Community", "Builder"],
  },
  {
    id: "lb-academy",
    name: "LB Academy",
    category: "Education",
    description: "A self-learning engine that produces on-chain builders, contributors, and fundable projects.",
    logo: "/projects/lbdao.jpg", // Using same logo for now as placeholder or if generic
    website: "https://academy.lbdao.xyz",
    twitter: "https://x.com/letsbuild_dao",
    telegram: "https://t.me/lbdaocommunity",
    tags: ["Education", "Builder", "Contributor"],
  },
  {
    id: "soll-network",
    name: "The Soll Network",
    category: "Communities",
    description: "The Soll Network is an initiative focused on adoption, education, and collaboration for a sustainable world.",
    logo: "/projects/soll.png", // Using same logo for now as placeholder or if generic
    website: "https://x.com/thesollnetwork_",
    twitter: "https://x.com/thesollnetwork_",
    telegram: "https://x.com/thesollnetwork_",
    tags: ["Community", "Builder", "Contributor"],
  },
  {
    id: "lamba-card",
    name: "LambaCard",
    category: "Projects",
    description: "Cushioning the effect of inflation by rewarding brand customers limited crypto asset when they buy a product or service",
    logo: "/projects/lamba.png", // Using same logo for now as placeholder or if generic
    website: "https://card.lambatoken.com/",
    twitter: "https://x.com/lambatoken",
    telegram: "N/A",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "borderless",
    name: "Borderless",
    category: "Education",
    description: "We are an NGO raising youths to become relevant in the tech space.",
    logo: "/projects/borderless.png", // Using same logo for now as placeholder or if generic
    website: "https://borderlessbuild.dev",
    twitter: "https://x.com/borderlessdev",
    telegram: "https://t.me/borderlessbuilders",
    tags: ["Education", "Builder", "Contributor"],
  },
  {
    id: "slimepay",
    name: "Slimepay",
    category: "Projects",
    description: "People earn globally in crypto, but accessing that money locally is slow, stressful, and unreliable. With Slimepay, users don’t log into apps, don’t request withdrawals, and don’t wait days. They simply share their wallet address, receive payment, and the money lands in their bank account instantly.We’re building a non-custodial, multi-chain off-ramp that works quietly in the background for freelancers,onchain earners, traders, and platforms. Our goal is simple: make getting paid in Africa feel as effortless as receiving a bank transfer  without sacrificing speed, privacy, or control.",
    logo: "/projects/slime.jpeg", // Using same logo for now as placeholder or if generic
    website: "https://slimepay.com/",
    twitter: "https://x.com/slimepay_",
    telegram: "https://t.me/Slimepay_finance",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "buildthefutureonchain",
    name: "Build the Future Onchain",
    category: "Events/Media",
    description: "A community of creators, innovators and enthusiasts in the blockchain, AI and Crypto space.",
    logo: "/projects/btfoc.jpeg", // Using same logo for now as placeholder or if generic
    website: "https://www.instagram.com/buildthefutureonchain",
    twitter: "https://x.com/buildonchain_ng",
    telegram: "https://t.me/+032EzDuH9EdmM2Jk",
    tags: ["Events/Media", "Community", "Media"],
  },
  {
    id: "thedao",
    name: "The Dao Network",
    category: "Communities",
    description: "TDN started as a small circle of innovators who were tired of “networking communities” with no real outcomes. So we built our own — one focused on actual progress, not hype.",
    logo: "/projects/tdn.jpg", // Using same logo for now as placeholder or if generic
    website: "https://x.com/thedaonetwork_",
    twitter: "https://x.com/thedaonetwork_",
    telegram: "N/A",
    tags: ["Communities", "Builder", "Contributor"],
  },
  {
    id: "swiftransact",
    name: "Swiftransact",
    category: "Projects",
    description: "A crypto-off ramp payment platform that enable users make payments directly from their non-custodial wallet without p2p or exchanges.",
    logo: "/projects/swift.jpeg",
    website: "https://x.com/swiftransacthq",
    twitter: "https://x.com/swiftransacthq",
    telegram: "https://t.me/+B1NiCLB8TnA0Y2U0",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "onscript",
    name: "Onscript",
    category: "Projects",
    description: "Cross posting platform that lets you post from X to farcaster, Base App, Zora, Facebook and Instagram. Posting hasn't ever felt like this.",
    logo: "/projects/onscript.jpg",
    website: "https://onscript.xyz/",
    twitter: "https://x.com/Onscript_xyz",
    telegram: "n/a",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "bitsave",
    name: "Bitsave Protocol",
    category: "Projects",
    description: "Bitsave is the SaveFi protocol that helps web3 income earners save on-chain with stablecoins.",
    logo: "/projects/bitsave.png",
    website: "https://www.bitsave.io",
    twitter: "https://x.com/BitsaveProtocol",
    telegram: "https://t.me/bitsaveprotocol/1",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "streamlivr",
    name: "Streamlivr",
    category: "Projects",
    description: "Livestreaming and social network for creator and fans to earn crypto and connect globally.",
    logo: "/projects/streamlivr.png",
    website: "https://streamlivr.com",
    twitter: "https://x.com/streamlivr_app",
    telegram: "https://t.me/streamlivr",
    tags: ["Projects", "Builder", "Contributor"],
  },
  {
    id: "chainconnectng",
    name: "ChainConnectNG",
    category: "Communities",
    description: "ChainConnect NG is a DevRel-driven Web3 community empowering builders in South-South Nigeria through education, ecosystem partnerships, and hands-on opportunities.",
    logo: "/projects/chainconnect.jpeg",
    website: "https://linktr.ee/chainconnect01",
    twitter: "https://x.com/chainconnectng",
    telegram: "https://t.me/chainconnectng",
    tags: ["DevRel", "Education", "Governance", "Builder", "Contributor"],
  },
  {
    id: "planbok",
    name: "Planbok",
    category: "Projects",
    description: "Planbok is a programmable wallet infrastructure with built in payment rails designed to help businesses easily integrated blockchain based features in treasury management, payment & payroll.",
    logo: "/projects/planbok.png",
    website: "https://planbok.io/",
    twitter: "https://x.com/planbokHQ",
    telegram: "https://t.me/+a92pNyg2g5EwYTQ8",
    tags: ["Projects", "wallet", "infrastructure", "Builder", "Contributor"],
  },
  {
    id: "byteonchainnews",
    name: "ByteOnchain News",
    category: "Events/Media",
    description: "ByteOnchain News is a Web3-focused media platform amplifying blockchain innovation, projects, and opportunities across Africa, with a strong presence in Port Harcourt and the South-South ecosystem.",
    logo: "/projects/bon.jpg",
    website: "https://byteonchain.news",
    twitter: "https://x.com/ByteOnchain",
    telegram: "t.me/byteonchainnews",
    tags: ["Media", "Builder", "Contributor"],
  },
];

const FEATURED_ITEMS = [
  {
    id: 1,
    title: "LB DAO",
    subtitle: "Featured Community",
    description: "LB DAO’s mission is to power sustainable Web3 adoption by combining data intelligence, funding, and community support for builders and founders worldwide especially in emerging markets.",
    image: "/projects/lbdao.jpg",
    link: "https://www.lbdao.xyz/",
    cta: "Join Community",
    ctaLink: "https://t.me/lbdaocommunity",
    theme: "amber", // Custom theme color
    stats: [
        { label: "Members", value: "500+" },
        { label: "Status", value: "Active", color: "text-green-400" }
    ]
  },
  {
    id: 2,
    title: "LB Academy",
    subtitle: "Featured Education",
    description: "Master Web3 development with our cohort-based learning paths. From zero to shipping dApps on Stylus, Solana, and more.",
    image: "/projects/lbdao.jpg", // Placeholder
    link: "https://academy.lbdao.xyz",
    cta: "Start Learning",
    ctaLink: "https://academy.lbdao.xyz",
    theme: "blue", // Custom theme color
    stats: [
        { label: "Students", value: "120+" },
        { label: "Cohorts", value: "3", color: "text-blue-400" }
    ]
  }
];

const CATEGORIES = ["All", "Communities", "Projects", "Education", "Events/Media"];

import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_ITEMS.length) % FEATURED_ITEMS.length);
  };

  const currentItem = FEATURED_ITEMS[currentIndex];
  
  // Dynamic glow color based on theme
  const glowColor = currentItem.theme === "blue" ? "bg-blue-600/20" : "bg-amber-600/20";
  const accentColor = currentItem.theme === "blue" ? "text-blue-400" : "text-amber-400";
  const buttonClass = currentItem.theme === "blue" 
      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-blue-900/40" 
      : "bg-white text-black hover:bg-zinc-200 shadow-white/10";

  return (
    <div className="relative overflow-hidden rounded-[16px] bg-[#0a0a0a] border border-[#262626] group transition-colors duration-300">
        
         {/* Dynamic Background Glow Removed for Flat Mode */}
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-50 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 lg:p-16 relative z-10 items-center min-h-[500px]">
            {/* Text Content */}
            <motion.div 
                key={`text-${currentIndex}`}
                className="lg:col-span-6 flex flex-col items-start gap-8 relative z-10"
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-md border border-[#262626] bg-[#121212] text-[#a3a3a3]">
                        <span className="text-sm font-sans font-bold tracking-widest uppercase">{currentItem.subtitle}</span>
                    </div>
                    
                    <div className="relative">
                        <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-display font-normal text-white mb-6 leading-[0.9]">
                            {currentItem.title}
                        </h2>
                        {/* Creative Decorative Line */}
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-px bg-[#404040] mb-8" 
                        />
                        <p className="text-xl md:text-2xl text-[#a3a3a3] font-light leading-relaxed max-w-xl">
                            {currentItem.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <a 
                            href={currentItem.ctaLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn bg-white text-black hover:bg-[#e5e5e5] px-10 py-4 rounded-md text-lg font-bold"
                        >
                            {currentItem.cta}
                        </a>
                        <a 
                            href={currentItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-3 px-8 py-4 rounded-md border border-[#404040] text-white hover:bg-[#121212] transition-colors font-medium text-lg"
                        >
                            <span>Visit Website</span>
                            <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100 transition-opacity -translate-y-px group-hover:translate-x-1" />
                        </a>
                    </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
                key={`img-${currentIndex}`}
                className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden border border-[#262626] bg-[#121212]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "backOut" }}
            >
                <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
                
                {/* Stats Overlay */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-md bg-[#1a1a1a] border border-[#262626] flex items-center justify-between">
                     {currentItem.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col px-2">
                            <span className="text-[10px] font-sans uppercase tracking-widest text-[#737373] font-bold mb-1">{stat.label}</span>
                            <span className="text-xl font-display font-normal text-white">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex items-center gap-6 z-20">
             <div className="flex gap-2">
                <button 
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95"
                >
                    <FaChevronLeft />
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95"
                >
                    <FaChevronRight />
                </button>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex gap-2">
                {FEATURED_ITEMS.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white w-8" : "bg-white/20 w-4 hover:bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

const Ecosystem = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort data alphabetically by name
  const sortedData = useMemo(() => {
    return [...ECOSYSTEM_DATA].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredData = useMemo(() => {
    return sortedData.filter((item) => {
        const matchesCategory = activeCategory === "All" || 
                                (item.category === activeCategory) ||
                                (activeCategory === "Communities" && item.tags.includes("Community")) ||
                                (activeCategory === "Projects" && item.tags.includes("Projects"));
        
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, sortedData]);

  return (
    <div className="min-h-screen pt-20 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Ecosystem | Web3PHC</title>
        <meta name="description" content="Discover the communities, projects, and events driving borderless Web3 innovation from Port Harcourt to the world." />
        <meta property="og:title" content="Ecosystem | Web3PHC" />
        <meta property="og:description" content="Discover the communities, projects, and events driving borderless Web3 innovation from Port Harcourt to the world." />
        <meta property="og:image" content="/thumb.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Background Blobs Removed for flat mode */}
      <div className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-0"></div>

      <div className="custom-container relative z-10 px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#262626] bg-[#121212] mb-6"
          >
              <span className="text-[#a3a3a3] text-xs font-sans font-bold uppercase tracking-wider">The Web3PHC Network</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-normal text-white mb-6"
          >
            Ecosystem.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a3a3a3] text-lg lg:text-xl leading-relaxed mb-8 font-light"
          >
            Discover the global convergence of communities, innovative projects, and events driving borderless Web3 innovation.
          </motion.p>
          
        </div>

        {/* Featured Carousel Section - Wider & More Creative */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="w-full max-w-[1400px] mx-auto mb-24 relative z-20"
        >
             <FeaturedCarousel />
        </motion.div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#121212] border border-[#262626] rounded-lg p-2 md:p-3 max-w-7xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-300 ${
                            activeCategory === cat 
                            ? "bg-white text-black" 
                            : "text-[#a3a3a3] hover:text-white hover:bg-[#1a1a1a]"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" />
                <input 
                    type="text" 
                    placeholder="Search ecosystem..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-primary/50 transition-all font-outfit"
                />
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 relative z-20">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card group flex flex-col h-full hover:border-[#404040]"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 rounded-lg bg-[#1a1a1a] p-1 border border-[#262626] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                <img src={item.logo} alt={item.name} className="w-full h-full object-cover rounded-md opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                            </div>
                            <span className="px-3 py-1 rounded-sm text-xs font-sans font-semibold bg-[#1a1a1a] text-[#737373] border border-[#262626]">
                                {item.category}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-display font-normal text-white mb-3 group-hover:text-brand-primary transition-colors">{item.name}</h3>
                        <p className="text-[#a3a3a3] font-sans text-sm font-light leading-relaxed mb-6 line-clamp-3 flex-1">
                            {item.description}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-[#262626] mt-auto">
                            <div className="flex gap-4">
                                {item.website && (
                                    <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-white transition-colors">
                                        <FaGlobe />
                                    </a>
                                )}
                                {item.twitter && (
                                    <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-white transition-colors">
                                        <XIcon />
                                    </a>
                                )}
                                {item.telegram && (
                                    <a href={item.telegram} target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-white transition-colors">
                                        <FaTelegram />
                                    </a>
                                )}
                            </div>
                            <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-xs font-sans font-bold text-white hover:text-[#d4d4d4] uppercase tracking-widest flex items-center gap-2 group/link transition-colors">
                                Visit <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                ))
            ) : (
                <div className="col-span-full text-center py-20">
                    <p className="text-zinc-500 text-lg">No results found matching your criteria.</p>
                </div>
            )}
        </div>

        {/* CTA Section (Bottom) */}
        <div className="max-w-4xl mx-auto text-center bg-[#121212] border border-[#262626] rounded-[16px] p-12 md:p-16 relative overflow-hidden">
             
             <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-display font-normal text-white mb-6 relative z-10 leading-[0.9]">
                Have a project or community?
             </h2>
             <p className="text-[#a3a3a3] text-lg lg:text-xl mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed font-light">
                Join the growing Web3PHC ecosystem. List your project to get discovered by builders, investors, and community members worldwide.
             </p>
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScyU7PsF8zWkmuSce2nW2IP0IAiLNkcqaxd2-BHZvBm6H2q1Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer" 
              className="relative z-10 btn bg-white text-black hover:bg-[#e5e5e5] px-10 py-4 text-lg font-bold inline-flex items-center gap-2 transition-colors"
            >
              Add Your Project <FaArrowRight />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
