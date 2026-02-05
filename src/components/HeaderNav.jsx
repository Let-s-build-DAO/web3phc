import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { to: "/#mission", label: "Mission" },
  { to: "/#impact", label: "Impact" },
  { to: "/#tribe", label: "Tribe" },
  { to: "/conference", label: "Conference" },
  { to: "/#hello", label: "Say Hello" },
];

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
                onClick={(e) => {
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
                    <div className="flex flex-col h-full">
                        <nav className="flex flex-col gap-6 mt-4">
                            {NAV_LINKS.map(({ to, label }) => (
                                isHome && to.startsWith("/#") ? (
                                <a
                                    key={to}
                                    href={to}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl sm:text-5xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight"
                                >
                                    {label}
                                </a>
                                ) : (
                                <Link
                                    key={to}
                                    to={to}
                                    className="text-4xl sm:text-5xl font-bold text-white hover:text-brand-primary transition-colors tracking-tight"
                                >
                                    {label}
                                </Link>
                                )
                            ))}
                        </nav>
                        
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
