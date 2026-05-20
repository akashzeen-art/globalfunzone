import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = ({ items }) => {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Dynamic Grid Background Lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-xl bg-neon-green/10 border border-green-500/20 mb-6"
          >
            <Gamepad2 className="text-green-500 w-12 h-12" />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          >
            Level Up
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Gamer tips, intense walkthroughs, and absolute fun. Watch your favorite games played by the best in the business.
          </p>
        </div>

        {/* Transforming Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {items.slice(0, 5).map((item, idx) => {
            const isLarge = idx === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl overflow-hidden border-2 border-slate-800 hover:border-green-500 transition-colors cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setActiveGame(item)}
              >
                <div className="block w-full h-full">
                  <img src={item.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className={`text-white font-bold ${isLarge ? 'text-3xl' : 'text-lg'} mb-2 line-clamp-2 leading-tight drop-shadow-md`}>
                      {item.title}
                    </h3>
                    <div className="h-1 w-12 bg-green-500 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {activeGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setActiveGame(null)}>
          <div className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveGame(null)} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-green-500 transition-colors">
              <X className="w-4 h-4" />
            </button>
            <iframe src={activeGame.gameUrl} className="w-full aspect-video border-none" title={activeGame.title} allowFullScreen />
            <div className="p-3 bg-zinc-900">
              <h3 className="text-white font-bold text-sm">{activeGame.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GamesSection;
