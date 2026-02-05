import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [showExit, setShowExit] = useState(false);

  useEffect(() => {
    // Start exit animation slightly before the total time
    const timer = setTimeout(() => setShowExit(true), 2500);
    const completeTimer = setTimeout(onComplete, 3000); 
    
    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: showExit ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative z-10 text-center px-4">
        <motion.p
          className="text-base md:text-2xl text-zinc-400 font-light tracking-wide mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web3 in the South is
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(254,101,0,0.5)]"
          style={{ backgroundImage: "linear-gradient(to right, var(--brand), #f97316, var(--brand))" }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          EVOLVING
        </motion.h1>
      </div>
      
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 blurred-blob rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
