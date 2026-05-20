import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPopup from '../VideoPopup';

const YogaSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-32 relative bg-emerald-50 overflow-hidden text-emerald-950">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      {/* Calm organic bg shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal-200/50 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-3xl z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-emerald-300/40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-3xl z-0"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
             initial={{ y: -30, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="text-teal-600 mb-6"
          >
             <Activity className="w-12 h-12 mx-auto stroke-1" />
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 2, delay: 0.3 }}
             className="text-4xl md:text-6xl font-light mb-6 tracking-wide text-emerald-900"
          >
             Breathe & Flow.
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 0.6 }}
             className="text-emerald-700/80 text-xl font-light leading-relaxed"
          >
             Discover peace, flexibility, and mindfulness. Gentle routines suitable for the whole family to unwind and reconnect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.slice(0, 3).map((item, idx) => (
             <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.8 + (idx * 0.3), ease: [0.25, 0.1, 0.25, 1] }}
             >
                <Link to={`/video/${item.id}`} className="group block" onClick={e => { e.preventDefault(); setActiveVideo(item); }}>
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-6 shadow-2xl shadow-emerald-900/10 transition-transform duration-700 group-hover:-translate-y-2">
                    <img src={item.thumbnail} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-emerald-900 font-medium text-xl mb-2 transition-colors group-hover:text-teal-600">{item.title}</h3>
                    <p className="text-emerald-700/60 text-sm font-light uppercase tracking-widest">{item.duration}</p>
                  </div>
                </Link>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
