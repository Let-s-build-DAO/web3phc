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
    telegram: "https://t.me/letsbuilddaocommunity",
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
    telegram: "https://t.me/letsbuilddaocommunity",
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
    ctaLink: "https://t.me/letsbuilddaocommunity",
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

const CATEGORIES = ["All", "Communities", "Projects", "Education", "Events"];

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
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#080808] border border-white/5 group shadow-2xl shadow-black/80">
        
         {/* Dynamic Background Glow */}
        <div className={`absolute top-0 right-0 w-[800px] h-[600px] ${glowColor} blur-[150px] rounded-full pointer-events-none transition-colors duration-1000`} />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 lg:p-16 relative z-10 items-center min-h-[500px]">
            {/* Text Content */}
            <motion.div 
                key={`text-${currentIndex}`}
                className="lg:col-span-6 flex flex-col items-start gap-8 relative z-10"
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "circOut" }}
            >
                    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md ${accentColor} shadow-[0_4px_20px_rgba(0,0,0,0.2)]`}>
                        <span className="relative flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentItem.theme === 'blue' ? 'bg-blue-400' : 'bg-amber-400'}`}></span>
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${currentItem.theme === 'blue' ? 'bg-blue-500' : 'bg-amber-500'}`}></span>
                        </span>
                        <span className="text-sm font-bold tracking-widest uppercase">{currentItem.subtitle}</span>
                    </div>
                    
                    <div className="relative">
                        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] drop-shadow-2xl">
                            {currentItem.title}
                        </h2>
                        {/* Creative Decorative Line */}
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "120px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className={`h-2 rounded-full mb-6 ${currentItem.theme === 'blue' ? 'bg-blue-500' : 'bg-amber-500'}`} 
                        />
                        <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed max-w-xl drop-shadow-lg">
                            {currentItem.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <a 
                            href={currentItem.ctaLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`btn px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 ${buttonClass}`}
                        >
                            {currentItem.cta}
                        </a>
                        <a 
                            href={currentItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center gap-3 px-8 py-5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all font-medium text-lg hover:border-white/30"
                        >
                            <span>Visit Website</span>
                            <FaExternalLinkAlt className="text-sm opacity-50 group-hover:opacity-100 transition-opacity -translate-y-px group-hover:translate-x-1" />
                        </a>
                    </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div 
                key={`img-${currentIndex}`}
                className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm"
                initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: "backOut" }}
            >
                <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover opacity-90 transition-all duration-700" />
                
                {/* Stats Overlay */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                     {currentItem.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col px-2">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">{stat.label}</span>
                            <span className={`text-xl font-bold ${stat.color || 'text-white'}`}>{stat.value}</span>
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
        <meta name="description" content="Discover the thriving communities, innovative projects, and events shaping the Web3 landscape in the South-South." />
        <meta property="og:title" content="Ecosystem | Web3PHC" />
        <meta property="og:description" content="Discover the thriving communities, innovative projects, and events shaping the Web3 landscape in the South-South." />
        <meta property="og:image" content="/thumb.JPG" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Background Blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-brand-primary/10 top-0 left-[-200px] blur-[120px]" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-900/10 bottom-0 right-[-200px] blur-[120px]" />

      <div className="custom-container relative z-10 px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/5 mb-6"
          >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-brand-primary text-xs font-semibold uppercase tracking-wider">The Web3PHC Network</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Ecosystem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-lg leading-relaxed mb-8"
          >
            Discover the thriving communities, innovative projects, and events shaping the Web3 landscape in the South-South.
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white/5 border border-white/10 rounded-2xl p-2 md:p-3 backdrop-blur-sm max-w-7xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            activeCategory === cat 
                            ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25" 
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
            {filteredData.length > 0 ? (
                filteredData.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card group flex flex-col h-full hover:border-brand-primary/30 bg-zinc-900/50"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 p-1 border border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                <img src={item.logo} alt={item.name} className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-zinc-400 border border-white/5">
                                {item.category}
                            </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{item.name}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                            {item.description}
                        </p>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                            <div className="flex gap-4">
                                {item.website && (
                                    <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                        <FaGlobe />
                                    </a>
                                )}
                                {item.twitter && (
                                    <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                        <XIcon />
                                    </a>
                                )}
                                {item.telegram && (
                                    <a href={item.telegram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                        <FaTelegram />
                                    </a>
                                )}
                            </div>
                            <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-brand-primary uppercase tracking-wider flex items-center gap-1 group/link">
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
        <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 blur-[80px] rounded-full pointer-events-none" />
             
             <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Have a project or community?</h2>
             <p className="text-zinc-400 mb-8 max-w-xl mx-auto relative z-10">
                Join the growing Web3PHC ecosystem. List your project to get discovered by builders, investors, and community members.
             </p>
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScyU7PsF8zWkmuSce2nW2IP0IAiLNkcqaxd2-BHZvBm6H2q1Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer" 
              className="relative z-10 btn inline-flex items-center gap-2 transform hover:scale-105 transition-transform shadow-lg shadow-brand-primary/25"
            >
              Add Your Project <FaArrowRight />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
