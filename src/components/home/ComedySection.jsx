import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';
import VideoPopup from '../VideoPopup';

const ComedySection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-24 relative overflow-hidden bg-brand-purple">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      {/* Playful background elements taking full width bouncy spring */}
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ type: "spring", bounce: 0.6, duration: 1 }}
           className="w-20 h-20 mx-auto bg-brand-pink text-white rounded-[2rem] rotate-12 flex items-center justify-center mb-6 shadow-2xl"
        >
          <Smile size={40} className="-rotate-12" />
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Laugh Out Loud!</h2>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-16 font-medium">
          Hilarious sketches, funny pranks, and endless giggles. Because the best times are when you're laughing together.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 150, damping: 10 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              className="bg-white p-3 rounded-2xl shadow-xl transform transition-transform cursor-pointer"
              onClick={() => setActiveVideo(item)}
            >
              <div className="rounded-xl overflow-hidden aspect-square relative group">
                <img src={item.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-purple/20 transition-opacity opacity-0 group-hover:opacity-100"></div>
              </div>
              <h3 className="font-bold text-slate-800 mt-3 text-sm md:text-base line-clamp-1">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComedySection;
