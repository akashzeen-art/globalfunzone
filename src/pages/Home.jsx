import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Tv } from 'lucide-react';

import HeroSlider from '../components/home/HeroSlider';
import CookingSection from '../components/home/CookingSection';
import ComedySection from '../components/home/ComedySection';
import CartoonSection from '../components/home/CartoonSection';
import GamesSection from '../components/home/GamesSection';
import FightSection from '../components/home/FightSection';
import YogaSection from '../components/home/YogaSection';
import EbooksSection from '../components/home/EbooksSection';
import WatchAnywhereSection from '../components/home/WatchAnywhereSection';

import { allVideos } from '../data/mockData';

const Home = () => {
  // Setup for Geometric scroll section (Transition)
  const geoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: geoRef,
    offset: ["start end", "end start"]
  });
  
  const clipPath = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)', 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)']
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  // Extract mock data for each category
  const getItems = (slug) => {
    const catIndex = {
      'cooking': 0,
      'comedy': 1,
      'cartoon': 2,
      'games': 3,
      'fight': 4,
      'yoga': 5,
      'ecookbooks': 6,
      'eyogabooks': 7
    }[slug];
    return allVideos[catIndex]?.items || [];
  };

  return (
    <div className="bg-slate-900 w-full overflow-hidden">
      <HeroSlider />

      {/* Unique Category Sections */}
      <CookingSection items={getItems('cooking')} />
      <ComedySection items={getItems('comedy')} />
      <CartoonSection items={getItems('cartoon')} />

      {/* Geometric Transforming Transition Section */}
      <section ref={geoRef} className="py-32 relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
        {/* The background shifts using scale & clip path */}
        <motion.div 
          style={{ clipPath, scale }}
          className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-orange z-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-30 object-cover w-full h-full"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            One Platform.<br/>Many Worlds.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 drop-shadow-lg"
          >
            Stay entertained with content spanning across completely different interactive worlds designed specifically for you.
          </motion.p>
        </div>
      </section>

      {/* More Unique Category Sections */}
      <GamesSection items={getItems('games')} />
      <FightSection items={getItems('fight')} />
      <YogaSection items={getItems('yoga')} />
      <EbooksSection items={getItems('ecookbooks')} title="E-Cookbooks" />
      <EbooksSection items={getItems('eyogabooks')} title="E-Yoga Books" />

      <WatchAnywhereSection />



    </div>
  );
};

export default Home;
