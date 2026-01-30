import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/#about", label: "About" },
  { to: "/#impact", label: "Impact" },
  { to: "/#community", label: "Community" },
  { to: "/conference", label: "Conference" },
];

const HeaderNav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="custom-container flex items-center justify-between h-16 lg:h-18">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Web3PHC" className="h-8 lg:h-9 w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            isHome && to.startsWith("/#") ? (
              <a
                key={to}
                href={to}
                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
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
        <a
          href="https://chat.whatsapp.com/CzhYZkaOySi9U1zfifXbbu?mode=gi_c"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-sm py-2 px-4"
        >
          Join Community
        </a>
      </div>
    </header>
  );
};

export default HeaderNav;
