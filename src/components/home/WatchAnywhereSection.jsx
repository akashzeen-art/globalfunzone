import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, TabletSmartphone, Smartphone } from 'lucide-react';

const WatchAnywhereSection = () => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-10"
        >
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4">Watch Anywhere.</h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            Your family's favorite content, perfectly optimized for every screen size. From the living room TV to your morning commute.
          </p>
        </motion.div>

        <div className="flex flex-row items-end justify-center gap-4 md:gap-16">
          
          {/* Mobile Screen */}
          <motion.div
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, margin: "0px" }}
             transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
             className="flex flex-col items-center"
          >
             <div className="w-14 h-28 md:w-32 md:h-64 border-2 md:border-8 border-slate-700 bg-slate-950 rounded-2xl relative overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="absolute top-1 w-1/3 h-1 bg-slate-800 rounded-full"></div>
                <Smartphone className="w-6 h-6 md:w-12 md:h-12 text-slate-700" />
             </div>
             <div className="mt-2 text-slate-300 font-bold text-xs md:text-base">Mobile</div>
          </motion.div>

          {/* TV / Desktop Screen */}
          <motion.div
             initial={{ y: 50, opacity: 0, scale: 0.9 }}
             whileInView={{ y: 0, opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "0px" }}
             transition={{ duration: 0.8, type: "spring" }}
             className="flex flex-col items-center z-10"
          >
             <div className="w-44 h-28 md:w-96 md:h-60 border-2 md:border-8 border-slate-700 bg-slate-950 rounded-xl relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex items-center justify-center shadow-brand-purple/20">
                <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80" className="opacity-50 object-cover w-full h-full absolute" />
                <Monitor className="w-10 h-10 md:w-16 md:h-16 text-slate-300 relative z-10 drop-shadow-lg" />
             </div>
             <div className="w-16 md:w-32 h-1 md:h-2 bg-slate-700 mt-1 md:mt-2 rounded"></div>
             <div className="mt-2 text-slate-300 font-bold text-xs md:text-base">Desktop & TV</div>
          </motion.div>

          {/* Tablet Screen */}
          <motion.div
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true, margin: "0px" }}
             transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
             className="flex flex-col items-center"
          >
             <div className="w-20 h-28 md:w-48 md:h-60 border-2 md:border-8 border-slate-700 bg-slate-950 rounded-2xl relative overflow-hidden shadow-2xl flex items-center justify-center">
                <TabletSmartphone className="w-8 h-8 md:w-12 md:h-12 text-slate-700" />
             </div>
             <div className="mt-2 text-slate-300 font-bold text-xs md:text-base">Tablet</div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default WatchAnywhereSection;
