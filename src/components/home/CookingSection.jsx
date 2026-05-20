import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import VideoPopup from '../VideoPopup';

const CookingSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-24 relative overflow-hidden bg-[#fffdf0] text-slate-900">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      {/* Decorative floaters */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 bg-orange-300/30 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-orange-500/40">
              <ChefHat size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-orange-600">Get Cooking!</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              Whip up a storm with our fun family cooking adventures. Learn quick recipes, witness epic bake-offs, and discover kitchen creativity together.
            </p>
            <Link to="/category/cooking" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
              View All Recipes
            </Link>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-white rounded-3xl p-4 shadow-xl border border-orange-100"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 relative cursor-pointer" onClick={() => setActiveVideo(item)}>
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-orange-600 font-bold px-2 py-1 rounded text-xs">
                    {item.duration}
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 line-clamp-2 leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookingSection;
