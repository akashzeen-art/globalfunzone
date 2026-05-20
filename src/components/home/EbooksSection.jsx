import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PdfModal from '../PdfModal';

const EbooksSection = ({ items, title = 'The Library', subtitle = 'Turn pages, discover new worlds, and expand your imagination with our curated collection of interactive stories.' }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [activePdf, setActivePdf] = useState(null);

  const handleClick = (item) => {
    if (item.audioUrl) {
      setActiveItem(item);
    } else if (item.pdfUrl) {
      setActivePdf(item);
    }
  };

  return (
    <section className="py-24 relative bg-[#f1f5f9]">

      {/* Audio Popup */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setActiveItem(null)}>
          <div className="relative w-full max-w-md mx-4 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 p-6" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveItem(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-brand-purple transition-colors">
              <X className="w-4 h-4" />
            </button>
            <div className="flex gap-4 items-center mb-4">
              {activeItem.thumbnail && <img src={activeItem.thumbnail} className="w-16 h-20 object-cover rounded-lg" />}
              <h3 className="text-white font-bold text-sm">{activeItem.title}</h3>
            </div>
            <audio src={activeItem.audioUrl} controls autoPlay className="w-full" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-brand-purple w-8 h-8" />
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">{title}</h2>
            </div>
            <p className="text-slate-500 text-lg max-w-xl">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto pb-12 pt-8 snap-x snap-mandatory no-scrollbar gap-8 md:gap-12">
          {items.map((item, idx) => (
             <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                whileHover={{ y: -20 }}
                className="shrink-0 w-48 shadow-[15px_15px_30px_rgba(0,0,0,0.1)] snap-start relative group cursor-pointer"
                onClick={() => handleClick(item)}
             >
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/40 to-transparent z-10"></div>
                <div className="absolute -right-3 top-2 bottom-2 w-3 bg-slate-300 rounded-r-md skew-y-[45deg] origin-left group-hover:bg-slate-200 transition-colors"></div>

                <div className="aspect-[2/3] relative rounded-l-sm rounded-r-md overflow-hidden border-2 border-[#1E293B] bg-slate-200">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} className="w-full h-full object-cover relative z-0" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
                      <BookOpen className="w-12 h-12 text-orange-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <h3 className="text-white font-bold mb-2 line-clamp-3 text-xs">{item.title}</h3>
                     <span className="text-brand-purple text-sm font-bold bg-white/10 px-3 py-1 rounded-full">{item.audioUrl ? 'Listen' : 'Read'}</span>
                  </div>
                </div>

                <div className="mt-4 opacity-100 group-hover:opacity-0 transition-opacity">
                  <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{item.title}</h4>
                  <span className="text-slate-500 text-xs">{item.duration}</span>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <PdfModal item={activePdf} onClose={() => setActivePdf(null)} />
    </section>
  );
};

export default EbooksSection;
