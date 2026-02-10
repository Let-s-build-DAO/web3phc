import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { to: "/#mission", label: "Mission" },
  { to: "/#impact", label: "Impact" },
  { to: "/#tribe", label: "Tribe" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/reconfig", label: "Re:Config" },
  { to: "/#hello", label: "Say Hello" },
];

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slang, setSlang] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Randomize Slang on Open
  useEffect(() => {
    if (isOpen) {
        const slangs = [
            "Based on say nah Ph levels you dey now ehen Abobi wida!!!",
            "Aboy you suppose know this matters nahhh Web3PH don mount this unit!!!"
        ];
        setSlang(slangs[Math.floor(Math.random() * slangs.length)]);
    }
  }, [isOpen]);

  // Lock Body Scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="custom-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo - Always visible, z-index higher than menu */}
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <img src="/logo.png" alt="Web3PHC" className="h-8 lg:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            isHome && to.startsWith("/#") ? (
              <a
                key={to}
                href={to}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                onClick={() => {
                    // Smooth scroll for anchor links
                    if (to.startsWith("/#")) {
                        // Let default behavior handle hash or use custom scroll
                    }
                }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={to}
                to={to}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
             <a
                href="https://t.me/web3portharcourt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-sm py-2 px-6"
            >
                Join Community
            </a>
        </div>

        {/* Mobile Toggle Button - Always visible, z-index higher than menu */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-50 p-2 text-white hover:text-brand-primary transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed inset-0 z-40 bg-black flex flex-col pt-24 px-6 md:hidden h-[100dvh]"
                >
                    <div className="flex flex-col h-full relative">
                        <nav className="flex flex-col gap-6 mt-4">
                            {NAV_LINKS.map(({ to, label }) => (
                                isHome && to.startsWith("/#") ? (
                                <a
                                    key={to}
                                    href={to}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl sm:text-3xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight"
                                >
                                    {label}
                                </a>
                                ) : (
                                <Link
                                    key={to}
                                    to={to}
                                    className="text-2xl sm:text-3xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight"
                                >
                                    {label}
                                </Link>
                                )
                            ))}
                        </nav>
                        
                        <div className="flex-1 flex flex-col justify-center w-full ">
                            {/* Mobile Only Slang Footer - Creative Style */}
                            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden group">
                                <div className="absolute top-0 right-0 p-3 opacity-20 text-brand-primary">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21H5.0166Z" />
                                    </svg>
                                </div>
                                
                                <span className="inline-block px-2 py-0.5 mb-2 text-[9px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 rounded-md border border-brand-primary/20">
                                    Street Wisdom
                                </span>
                                
                                <p className="text-zinc-300 text-xs font-medium italic leading-relaxed relative z-10">
                                    &quot;{slang}&quot;
                                </p>
                            </div>
                        </div>

                        <div className="mt-auto mb-10 w-full">
                            <a
                                href="https://t.me/web3portharcourt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn w-full py-4 text-center justify-center text-lg font-bold"
                            >
                                Join Community
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default HeaderNav;
