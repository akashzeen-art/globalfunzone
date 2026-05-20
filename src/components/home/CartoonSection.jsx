import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPopup from '../VideoPopup';

const CartoonSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center -z-10 mix-blend-luminosity"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Storybook layered panels */}
          <div className="lg:w-1/2 relative h-[500px] w-full perspective-1000">
            <motion.div 
               initial={{ rotateY: -20, opacity: 0, x: -50 }}
               whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-purple-600 rounded-[3rem] shadow-2xl origin-left overflow-hidden border border-white/20 cursor-pointer"
               onClick={() => setActiveVideo(items[0])}
            >
              <img src={items[0]?.thumbnail} className="w-full h-full object-cover mix-blend-overlay opacity-50" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-2xl">
                <h3 className="text-white font-bold text-2xl mb-2">{items[0]?.title}</h3>
                <span className="text-blue-300 font-bold text-sm bg-blue-900/50 px-3 py-1 rounded">Featured Cartoon</span>
              </div>
            </motion.div>
            
            {/* Floating smaller panel */}
            <motion.div
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-4 top-10 w-2/3 aspect-video bg-slate-800 rounded-2xl shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] border border-slate-700 overflow-hidden cursor-pointer"
               onClick={() => setActiveVideo(items[1])}
            >
              <img src={items[1]?.thumbnail} className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 lg:pl-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold mb-6">
              <Tv size={20} /> Animated Magic
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-xl">
              Immerse in the Story.
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Dive into colorful worlds, meet fascinating characters, and go on grand adventures. Our cartoon library brings magical tales to life for kids of all ages.
            </p>
            
            <Link to="/category/cartoon" className="text-white font-bold text-lg hover:text-brand-pink transition-colors flex items-center gap-2 group">
              Explore Cartoon World 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CartoonSection;
