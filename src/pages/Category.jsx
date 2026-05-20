import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChefHat, Smile, Tv, Gamepad2, Swords, Activity, BookOpen } from 'lucide-react';
import { categories, allVideos } from '../data/mockData';
import VideoCard from '../components/VideoCard';
import PdfModal from '../components/PdfModal';

const IconMap = {
  cooking: ChefHat,
  comedy: Smile,
  cartoon: Tv,
  games: Gamepad2,
  fight: Swords,
  yoga: Activity,
  ebooks: BookOpen
};

const ThemeMap = {
  cooking: {
    bg: "bg-orange-50 text-orange-950",
    banner: "bg-gradient-to-r from-orange-400 to-yellow-400",
    animation: { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1, transition: { type: "spring" } } },
    mood: "Delicious & Fun"
  },
  comedy: {
    bg: "bg-fuchsia-50 text-fuchsia-950",
    banner: "bg-gradient-to-r from-fuchsia-500 to-pink-500",
    animation: { initial: { scale: 0.5, opacity: 0, rotate: -10 }, animate: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", bounce: 0.6 } } },
    mood: "Laugh Out Loud!"
  },
  cartoon: {
    bg: "bg-slate-900 text-white",
    banner: "bg-gradient-to-r from-blue-900 to-purple-900",
    animation: { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 1.2 } } },
    mood: "Magical Adventures"
  },
  games: {
    bg: "bg-zinc-950 text-white",
    banner: "bg-[linear-gradient(45deg,#000000,#064e3b)] border-b-4 border-green-500",
    animation: { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.2 } } },
    mood: "Level Up"
  },
  fight: {
    bg: "bg-black text-white",
    banner: "bg-gradient-to-r from-red-900 to-black",
    clip: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    animation: { initial: { x: -100, skewX: -20, opacity: 0 }, animate: { x: 0, skewX: 0, opacity: 1, transition: { type: "spring" } } },
    mood: "Action Packed"
  },
  yoga: {
    bg: "bg-emerald-50 text-emerald-950",
    banner: "bg-gradient-to-r from-teal-100 to-emerald-200 text-emerald-900",
    animation: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 2 } } },
    mood: "Breathe & Flow."
  },
  ecookbooks: {
    bg: "bg-slate-50 text-slate-800",
    banner: "bg-gradient-to-r from-orange-400 to-yellow-400",
    animation: { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.6 } } },
    mood: "Delicious Recipes"
  },
  eyogabooks: {
    bg: "bg-slate-50 text-slate-800",
    banner: "bg-gradient-to-r from-teal-100 to-emerald-200 text-emerald-900",
    animation: { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.6 } } },
    mood: "Wellness Library"
  },
  ebooks: {
    bg: "bg-slate-50 text-slate-800",
    banner: "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800",
    animation: { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.6 } } },
    mood: "The Library"
  }
};

const Category = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [videos, setVideos] = useState([]);
  const [activePdf, setActivePdf] = useState(null);
  const theme = ThemeMap[slug] || ThemeMap.cartoon;
  const CategoryIcon = IconMap[slug] || PlayCircle;

  useEffect(() => {
    window.scrollTo(0, 0); 
    const foundCat = categories.find(c => c.slug === slug);
    if (foundCat) {
      setCategory(foundCat);
      const catVideos = allVideos.find(v => v.categoryId === foundCat.id);
      setVideos(catVideos ? catVideos.items : []);
    }
  }, [slug]);

  if (!category) return <div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="text-white text-2xl font-bold">Category not found</div></div>;

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Dynamic Themed Hero */}
      <div 
        className={`relative pt-32 pb-24 overflow-hidden ${theme.banner}`}
        style={theme.clip ? { clipPath: theme.clip } : {}}
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={theme.animation.initial}
            animate={theme.animation.animate}
            className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <div className="w-28 h-28 rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center flex-shrink-0 shadow-2xl">
              <CategoryIcon size={56} className={['yoga','ebooks','ecookbooks','eyogabooks'].includes(slug) ? 'text-slate-600' : 'text-white'} />
            </div>
            <div>
              <span className={`font-black tracking-widest uppercase text-sm mb-2 block ${['yoga','ebooks','ecookbooks','eyogabooks'].includes(slug) ? 'text-black/50' : 'text-white/60'}`}>
                {theme.mood}
              </span>
              <h1 className={`text-6xl md:text-8xl font-black mb-4 drop-shadow-xl capitalize ${['yoga','ebooks','ecookbooks','eyogabooks'].includes(slug) ? 'text-black/80' : 'text-white'}`}>
                {category.name}
              </h1>
              <p className={`text-xl font-medium max-w-2xl ${['yoga','ebooks','ecookbooks','eyogabooks'].includes(slug) ? 'text-black/70' : 'text-white/90 drop-shadow'}`}>
                {category.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
             <div className="text-sm font-bold opacity-70">
                <Link to="/" className="hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <span>{category.name}</span>
             </div>
          </div>

          {(slug === 'ecookbooks' || slug === 'eyogabooks') ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 pt-4 pb-12">
              {videos.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                  whileHover={{ y: -20 }}
                  className="w-full sm:w-48 shadow-[15px_15px_30px_rgba(0,0,0,0.1)] relative group cursor-pointer"
                  onClick={() => item.pdfUrl && setActivePdf(item)}
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
                      <span className="text-brand-purple text-sm font-bold bg-white/10 px-3 py-1 rounded-full">Read</span>
                    </div>
                  </div>
                  <div className="mt-4 opacity-100 group-hover:opacity-0 transition-opacity">
                    <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{item.title}</h4>
                    <span className="text-slate-500 text-xs">{item.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {videos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 8) * 0.05 }}
                    className="h-full"
                  >
                    <VideoCard item={video} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
      <PdfModal item={activePdf} onClose={() => setActivePdf(null)} />
    </div>
  );
};

export default Category;
