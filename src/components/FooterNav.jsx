import { Link } from "react-router-dom";
import { FaTelegram, FaLinkedin, FaInstagram } from "react-icons/fa";
import XIcon from "./XIcon";

const FooterNav = () => {
  return (
    <footer className="bg-black pt-20 pb-0 px-4 mt-auto overflow-hidden relative border-t border-white/5">
        <div className="custom-container relative z-10 flex flex-col h-full">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 lg:mb-32">
                <div className="col-span-2 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 mb-6">
                        <img src="/logo.png" alt="Web3PHC" className="h-10 w-auto object-contain" />
                    </Link>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        Convening founders, builders, and investors to drive meaningful innovation in South-South Nigeria.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Community</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><a href="https://t.me/web3portharcourt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Telegram Member</a></li>
                         <li><a href="https://x.com/web3PHC" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-2">Twitter (X) <XIcon className="w-3 h-3"/></a></li>
                        <li><a href="https://chat.whatsapp.com/CzhYZkaOySi9U1zfifXbbu?mode=gi_c" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">WhatsApp</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-bold text-white mb-6">Resources</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><Link to="/conference" className="hover:text-brand-primary transition-colors">Conference 2026</Link></li>
                        <li><a href="https://labs.lbdao.xyz/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Let's Build Labs</a></li>
                         <li><a href="mailto:hello@lbdao.xyz" className="hover:text-brand-primary transition-colors">Contact Support</a></li>
                    </ul>
                </div>

                 {/* <div>
                    <h4 className="font-bold text-white mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-zinc-400">
                        <li><span className="cursor-not-allowed opacity-50">Privacy Policy</span></li>
                        <li><span className="cursor-not-allowed opacity-50">Terms of Service</span></li>
                         <li><span className="cursor-not-allowed opacity-50">Cookie Preferences</span></li>
                    </ul>
                </div> */}
            </div>

            {/* Bottom - Massive Logo */}
            <div className="w-full flex justify-center mt-auto pb-24">
                <img 
                    src="/images/footerWhite.png" 
                    alt="WEB3 PORT HARCOURT" 
                    className="w-full max-w-[90%] md:max-w-[80%] object-contain translate-y-[20%]" 
                />
            </div>
        </div>
    </footer>
  );
};

export default FooterNav;
