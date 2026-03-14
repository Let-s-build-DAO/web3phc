import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaTelegram, FaGlobe, FaArrowLeft, FaArrowRight, FaTwitter } from "react-icons/fa";
import { ECOSYSTEM_DATA } from "../data/ecosystemData";
import XIcon from "../components/XIcon";
import SEO from "../components/SEO";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = ECOSYSTEM_DATA.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white font-sans">
        <div className="text-center">
          <h1 className="text-4xl unbounded-title mb-6">PROJECT NOT FOUND</h1>
          <Link to="/ecosystem" className="btn bg-white text-black px-8 py-3 rounded-md uppercase tracking-widest text-xs font-bold">
            Back to Ecosystem
          </Link>
        </div>
      </div>
    );
  }

  // DiceBear Bitmoji-style avatar logic - Using robust 7.x parameters
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(project.founder || project.name)}&backgroundColor=b6e3f4,c0aede,d1d4f9${project.founderGender === 'male' ? '&top=dreads,fro,shavedSides,shortCurly,shortFlat,shortRound,shortWaved,sides' : '&top=bigHair,bob,bun,curly,curvy,frida,froBand,hijab,longButNotTooLong,miaWallace,straightAndStrand,straight01,straight02,turban'}&radius=50`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": project.category === "Start-ups" ? "SoftwareApplication" : "Organization",
    "name": project.name,
    "description": project.description,
    "url": project.website || `https://web3phc.com/ecosystem/${project.id}`,
    "applicationCategory": project.tags?.join(", "),
    "operatingSystem": "Web"
  };

  return (
    <div className="min-h-screen pt-32 pb-32 bg-black text-white font-sans overflow-hidden">
      <SEO 
        title={`${project.name} | Ecosystem`}
        description={project.description}
        schemaData={projectSchema}
      />

      {/* Hero Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="custom-container relative z-10">
        {/* Breadcrumb Navigation */}
        <Link to="/ecosystem" className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white transition-colors mb-16 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest">[ BACK_TO_ECOSYSTEM ]</span>
        </Link>

        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-2xl bg-white p-3 border border-white/10 shadow-xl overflow-hidden flex-shrink-0">
                    <img src={project.logo} alt={project.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div>
                    <span className="inline-block px-3 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 mb-3">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl unbounded-title text-white tracking-tighter uppercase leading-none">
                        {project.name}
                    </h1>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center mb-12">
                {project.website && (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#e5e5e5] transition-all group/btn">
                        <FaGlobe className="opacity-40" />
                        Website
                        <FaArrowRight className="transform -rotate-45 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                )}
                <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" />
                {project.twitter && (
                    <a href={project.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group/social">
                        <XIcon className="w-4 h-4 text-white/60 group-hover/social:text-white transition-colors" />
                    </a>
                )}
                {project.telegram && project.telegram.toLowerCase() !== "n/a" && (
                     <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group/social">
                        <FaTelegram className="w-5 h-5 text-white/60 group-hover/social:text-white transition-colors" />
                    </a>
                )}
            </div>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-16"
            >
              <section>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-primary/30" />
                    [ MISSION_AND_IMPACT ]
                </h4>
                <div className="space-y-8">
                    <p className="text-2xl md:text-3xl text-white font-sans font-light leading-relaxed max-w-4xl tracking-tight">
                        {project.fullDescription}
                    </p>
                </div>
              </section>

              <section>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-white/10" />
                    [ ECOSYSTEM_TAGS ]
                </h4>
                <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-5 py-2.5 rounded-full border border-white/5 bg-[#121212] font-mono text-[11px] text-white/60 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
              </section>
            </motion.div>
          </div>

          <div className="lg:col-span-4 self-center lg:self-start">
             {/* Secondary Sidebar Visual / Info */}
          </div>
        </div>

        {/* Founder Section - Dedicated and Beautiful */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-white/5 pt-20"
        >
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 p-12 lg:p-16 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-brand-primary/20 to-blue-500/20 p-[2px] overflow-hidden flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-[#0a0a0a] overflow-hidden relative">
                            <img 
                                src={avatarUrl} 
                                alt={project.founder} 
                                className="w-full h-full object-cover scale-[1.3] translate-y-[10%]" 
                            />
                        </div>
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-brand-primary font-bold mb-4 inline-block tracking-[0.2em]">[ MEET_THE_FOUNDER ]</span>
                        <h2 className="text-5xl md:text-6xl font-sans font-bold text-white mb-6 leading-none tracking-tighter">
                            {project.founder}
                        </h2>
                        <p className="font-sans text-[#a3a3a3] text-xl leading-relaxed max-w-xl mb-10 font-medium">
                            Driving {project.name}'s mission forward and contributing to the borderless innovation of the Web3PHC ecosystem.
                        </p>

                        {project.founderContact && (
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {project.founderContact.split(/[/,]/).map((contact, index) => {
                                    const cleanedContact = contact.trim();
                                    if (!cleanedContact) return null;

                                    const isEmail = cleanedContact.includes("@") && !cleanedContact.startsWith("@");
                                    const isTelegram = cleanedContact.startsWith("@") || cleanedContact.startsWith("t.me") || (!isEmail && cleanedContact.length > 0);
                                    
                                    let href = "";
                                    let label = "";

                                    if (isEmail) {
                                        href = `mailto:${cleanedContact}`;
                                        label = "Email Address";
                                    } else if (isTelegram) {
                                        const handle = cleanedContact.startsWith("@") ? cleanedContact.substring(1) : cleanedContact.startsWith("t.me/") ? cleanedContact.split("/")[1] : cleanedContact;
                                        href = `https://t.me/${handle}`;
                                        label = "Telegram Handle";
                                    }

                                    return (
                                        <a 
                                            key={index}
                                            href={href}
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group/contact shadow-xl backdrop-blur-sm"
                                        >
                                            <span className="opacity-60 group-hover/contact:opacity-100 transition-opacity whitespace-nowrap">{label}:</span>
                                            <span className="font-bold underline underline-offset-4 decoration-white/20">{cleanedContact}</span>
                                            <FaArrowRight className="ml-2 transform -rotate-45 group-hover/contact:translate-x-1 group-hover/contact:-translate-y-1 transition-transform" />
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
