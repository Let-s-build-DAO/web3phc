import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { to: "/#about", label: "About Us" },
  { to: "/#impact", label: "Impact" },
  { to: "/#community", label: "Community" },
  { to: "/conference", label: "Conference" },
];

const FooterNav = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 px-4">
      <div className="custom-container">
        {/* Ready to Bridge the Gap? – NextBridge style */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Ready to Bridge the Gap?</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8">
            Whether you&apos;re a Web3 project looking to expand into Rivers State or a builder ready to enter Web3, we&apos;re here to make it happen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/13Ij0EO-pl-d4gdJAW14oRLf5iGVvoylh/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Partner With Us
            </a>
            <Link to="/conference" className="btn-outline btn">
              Learn More
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16 pt-12 border-t border-white/5">
          <div>
            <p className="text-lg font-bold text-white mb-4">Web3 Port Harcourt</p>
            <p className="text-zinc-500 text-sm max-w-xs">
              Driving Web3 expansion in Rivers State through education, community, and collaboration.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
            <div>
              <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Quick Links</p>
              <ul className="space-y-2">
                {QUICK_LINKS.map(({ to, label }) =>
                  to.startsWith("/#") ? (
                    <li key={to}>
                      <a href={to} className="text-zinc-400 hover:text-white text-sm transition-colors">
                        {label}
                      </a>
                    </li>
                  ) : (
                    <li key={to}>
                      <Link to={to} className="text-zinc-400 hover:text-white text-sm transition-colors">
                        {label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Programs</p>
              <ul className="space-y-2">
                <li>
                  <Link to="/conference" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Conference
                  </Link>
                </li>
                <li>
                  <a href="http://letsbuilddao.org/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm transition-colors">
                    Let&apos;s Build Dao
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-zinc-600 text-sm text-center mt-12 pt-8 border-t border-white/5">
          © {new Date().getFullYear()} Web3 Port Harcourt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterNav;
