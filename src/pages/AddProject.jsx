import { motion } from "framer-motion";

const AddProject = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
       {/* Background Blobs */}
       <div className="glow-blob w-[500px] h-[500px] bg-brand-primary/10 top-0 left-[-200px] blur-[120px]" />
       
       <div className="custom-container px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Submit Your Project
          </motion.h1>
          <p className="text-zinc-400 text-lg mb-8">
            This page is currently under construction. Soon you&apos;ll be able to self-list your project here.
          </p>
       </div>
    </div>
  );
};

export default AddProject;
