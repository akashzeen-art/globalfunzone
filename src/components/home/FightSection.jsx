import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPopup from '../VideoPopup';

const FightSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-24 relative bg-red-900 overflow-hidden text-white" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      {/* Dynamic angular background cuts */}
      <div className="absolute inset-0 z-0 opacity-20 bg-black/50" style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}></div>
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <motion.div 
               initial={{ x: -100, opacity: 0, skewX: -20 }}
               whileInView={{ x: 0, opacity: 1, skewX: 0 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 100 }}
               className="flex items-center gap-4 mb-4"
            >
              <Swords className="w-12 h-12 text-red-400" />
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">Action Packed</h2>
            </motion.div>
            <p className="text-red-200 max-w-xl text-lg md:text-xl font-medium border-l-4 border-red-500 pl-4">
              Feel the adrenaline. The most intense martial arts, wrestling, and action content.
            </p>
          </div>
          <motion.div
             initial={{ scale: 0, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
          >
             <Link to="/category/fight" className="bg-white text-red-900 font-black px-8 py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-red-500 skew-x-[-10deg] inline-block">
               <span className="inline-block skew-x-[10deg]">Enter the Arena</span>
             </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((item, idx) => (
             <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50, skewX: -5 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative cursor-pointer overflow-hidden border-b-4 border-red-500 bg-black"
                onClick={() => setActiveVideo(item)}
             >
                <div className="aspect-[3/4] relative overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                  <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                     <h3 className="text-white font-black uppercase text-xl italic leading-tight">{item.title}</h3>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FightSection;
