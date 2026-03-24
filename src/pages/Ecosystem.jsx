import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaSearch, FaTelegram, FaArrowRight, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { ECOSYSTEM_DATA, CATEGORIES } from "../data/ecosystemData";
import XIcon from "../components/XIcon";
import SEO from "../components/SEO";

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
    theme: "amber",
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
    image: "/projects/lbdao.jpg",
    link: "https://academy.lbdao.xyz",
    cta: "Start Learning",
    ctaLink: "https://academy.lbdao.xyz",
    theme: "blue",
    stats: [
        { label: "Students", value: "120+" },
        { label: "Cohorts", value: "3", color: "text-blue-400" }
    ]
  }
];

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + FEATURED_ITEMS.length) % FEATURED_ITEMS.length);
  };

  const currentItem = FEATURED_ITEMS[currentIndex];
  
  return (
    <div className="font-sans relative overflow-hidden rounded-[16px] bg-[#0a0a0a] border border-[#262626] group transition-colors duration-300">
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
                        <span className="font-mono text-xs font-bold tracking-widest uppercase">{currentItem.subtitle}</span>
                    </div>
                    
                    <div className="relative">
                        <h2 className="text-[2.5rem] unbounded-title text-white mb-6 leading-[0.9]">
                            {currentItem.title}
                        </h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "80px" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-px bg-[#404040] mb-8" 
                        />
                        <p className="font-sans text-xl md:text-2xl text-[#a3a3a3] font-light leading-relaxed max-w-xl">
                            {currentItem.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <a 
                            href={currentItem.ctaLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn font-sans font-bold bg-white text-black hover:bg-[#e5e5e5] px-10 py-4 rounded-md text-lg"
                        >
                            {currentItem.cta}
                        </a>
                        <a 
                            href={currentItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group font-sans font-medium flex items-center gap-3 px-8 py-4 rounded-md border border-[#404040] text-white hover:bg-[#121212] transition-colors text-lg"
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
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] font-bold mb-1">{stat.label}</span>
                            <span className="font-sans text-xl font-black text-white">{stat.value}</span>
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

  const sortedData = useMemo(() => {
    return [...ECOSYSTEM_DATA].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredData = useMemo(() => {
    return sortedData.filter((item) => {
        const matchesCategory = activeCategory === "All" || 
                                (item.category === activeCategory) ||
                                (activeCategory === "Communities" && item.tags.includes("Community")) ||
                                (activeCategory === "Start-ups" && item.tags.includes("Start-ups"));
        
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, sortedData]);

  return (
    <div className="font-sans min-h-screen pt-20 relative overflow-hidden">
      <SEO
        title="Ecosystem"
        url="/ecosystem"
        description="Discover the communities, projects, and events driving borderless Web3 innovation from our ecosystem."
      />
      
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#fe6500]/10 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>

      <div className="custom-container relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 pt-12 md:pt-20">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-8"
          >
              <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase">[ WEB3PHC_NETWORK ]</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] unbounded-title text-white mb-8 tracking-tight leading-[0.9]"
          >
            THE <br /> ECOSYSTEM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[#a3a3a3] text-lg lg:text-xl leading-relaxed mb-8 font-light"
          >
            Discover the global convergence of communities, innovative projects, and events driving borderless Web3 innovation.
          </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-[1400px] mx-auto mb-24 relative z-20"
        >
             <FeaturedCarousel />
        </motion.div>
      </div>

      <section>
      <div className="relative bg-gradient-to-b from-[#ebecf0] to-[#cdd1dc] z-20 py-20 px-4 rounded-t-[48px] lg:rounded-t-[80px] -mt-12 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fe650020_1px,transparent_1px),linear-gradient(to_bottom,#0052ff20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_100%)]" />

        <div className="custom-container relative z-10 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 bg-white/50 backdrop-blur-sm border border-black/10 rounded-lg p-2 md:p-3 max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-md font-sans text-sm font-medium transition-all duration-300 ${
                                activeCategory === cat 
                                ? "bg-black text-white" 
                                : "text-black/60 hover:text-black hover:bg-black/5"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-72">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40" />
                    <input 
                        type="text" 
                        placeholder="Search ecosystem..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border border-black/10 hover:border-black/30 rounded-xl py-2.5 pl-10 pr-4 text-black placeholder-black/40 focus:outline-none focus:border-brand-primary/50 transition-all font-sans"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20 relative z-20">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white group flex flex-col h-full hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 border border-black/10 hover:border-black/20 p-8 lg:p-10 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-brand-primary/10 to-transparent -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                            
                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div className="w-20 h-20 rounded-xl bg-white p-2 border border-black/5 overflow-hidden group-hover:scale-105 group-hover:border-black/10 transition-all duration-300 shadow-sm">
                                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain rounded-lg mix-blend-multiply" />
                                </div>
                                <span className="px-3 py-1 rounded-sm text-xs font-mono font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20">
                                    {item.category}
                                </span>
                            </div>
                            
                            <h3 className="text-xl unbounded-title text-black mb-4 uppercase tracking-tighter leading-none group-hover:text-brand-primary transition-colors relative z-10">{item.name}</h3>
                            <p className="text-black/60 font-sans text-sm font-normal leading-relaxed mb-8 line-clamp-3 relative z-10 flex-1">
                                {item.description}
                            </p>

                            <div className="pt-6 border-t border-black/10 mt-auto relative z-10 flex items-center justify-between">
                                <div className="flex gap-4">
                                    {item.twitter && (
                                        <a href={item.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 hover:border-black/20 transition-all" aria-label={`Twitter/X for ${item.name}`}>
                                            <XIcon className="w-4 h-4" />
                                        </a>
                                    )}
                                    {item.telegram && item.telegram.toLowerCase() !== "n/a" && (
                                        <a href={item.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:bg-black/5 hover:border-black/20 transition-all" aria-label={`Telegram for ${item.name}`}>
                                            <FaTelegram className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                                
                                <Link 
                                    to={`/ecosystem/${item.id}`}
                                    className="px-4 py-2 rounded-full bg-black text-white text-[10px] font-mono font-black uppercase tracking-widest flex items-center gap-2 group/btn hover:bg-brand-primary transition-all duration-300"
                                >
                                    Read More
                                    <FaArrowRight className="text-[10px] transform -rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-white/50 backdrop-blur-sm border border-black/10 rounded-2xl">
                        <p className="text-black/60 font-mono text-sm uppercase tracking-widest">[ NO_RESULTS_FOUND ]</p>
                    </div>
                )}
            </div>
        </div>

        <div className="max-w-5xl mx-auto text-center bg-[#000] border border-white/10 rounded-none p-16 md:p-24 relative overflow-hidden mt-32 mb-16">
            <div className="absolute top-0 left-8 w-[1px] h-full bg-white/10 hidden md:block" />
            <div className="absolute top-0 right-8 w-[1px] h-full bg-white/10 hidden md:block" />
            
             <span className="font-mono text-xs tracking-widest text-[#a3a3a3] uppercase mb-6 inline-block">[ GET_INVOLVED ]</span>
             <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white mb-6 relative z-10 leading-[0.9] tracking-tighter uppercase">
                HAVE A PROJECT OR <br/> <span className="font-display italic font-light text-brand-primary lowercase">COMMUNITY?</span>
             </h2>
             <p className="text-[#a3a3a3] text-lg lg:text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-mono">
                _Join the growing Web3PHC ecosystem. List your project to get discovered by builders, investors, and community members worldwide.
             </p>
             <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScyU7PsF8zWkmuSce2nW2IP0IAiLNkcqaxd2-BHZvBm6H2q1Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer" 
              className="relative z-10 bg-white text-black font-sans font-bold text-sm uppercase tracking-wider px-10 py-5 hover:bg-[#e5e5e5] transition-colors inline-flex items-center gap-2 border border-white"
            >
              SUBMIT APPLICATION <FaArrowRight />
            </a>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Ecosystem;
