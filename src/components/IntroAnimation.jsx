import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Smile, Tv, Gamepad2, Swords, Activity, BookOpen } from 'lucide-react';

const categories = [
  { Icon: ChefHat,  label: 'Cooking',  color: 'from-orange-500 to-yellow-500',  glow: 'rgba(249,115,22,0.6)',  border: 'border-orange-500/40' },
  { Icon: Smile,    label: 'Comedy',   color: 'from-pink-500 to-fuchsia-500',    glow: 'rgba(236,72,153,0.6)',  border: 'border-pink-500/40' },
  { Icon: Tv,       label: 'Cartoon',  color: 'from-purple-500 to-blue-500',     glow: 'rgba(168,85,247,0.6)', border: 'border-purple-500/40' },
  { Icon: Gamepad2, label: 'Games',    color: 'from-green-500 to-emerald-400',   glow: 'rgba(34,197,94,0.6)',  border: 'border-green-500/40' },
  { Icon: Swords,   label: 'Fight',    color: 'from-red-500 to-rose-600',        glow: 'rgba(239,68,68,0.6)',  border: 'border-red-500/40' },
  { Icon: Activity, label: 'Yoga',     color: 'from-teal-400 to-cyan-400',       glow: 'rgba(20,184,166,0.6)', border: 'border-teal-400/40' },
  { Icon: BookOpen, label: 'E-Books',  color: 'from-yellow-400 to-amber-500',    glow: 'rgba(234,179,8,0.6)',  border: 'border-yellow-400/40' },
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 2,
}));

const IntroAnimation = ({ onComplete }) => {
  const [shouldUnmount, setShouldUnmount] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setShouldUnmount(true), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!shouldUnmount && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-10"
            style={{ background: 'conic-gradient(from 0deg, #7c3aed, #f97316, #ec4899, #7c3aed)' }}
          />

          {/* Floating particles */}
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-white/20"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
              animate={{ y: [-20, 20, -20], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Pulsing rings */}
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-brand-purple/20"
              initial={{ width: 80, height: 80, opacity: 0.8 }}
              animate={{ width: 80 + i * 180, height: 80 + i * 180, opacity: 0 }}
              transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          {/* Category cards */}
          <div className="absolute inset-0 pointer-events-none">
            {categories.map(({ Icon, label, color, glow, border }, i) => {
              const angle = (i / categories.length) * 2 * Math.PI - Math.PI / 2;
              const radius = Math.min(window.innerWidth, window.innerHeight) * 0.33;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: Math.cos(angle) * window.innerWidth, y: Math.sin(angle) * window.innerHeight, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, x, y, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.12, type: 'spring', stiffness: 120, damping: 14 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                    className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-2xl bg-slate-900/80 border ${border} backdrop-blur-md w-16 md:w-20 shadow-lg`}
                    style={{ boxShadow: `0 0 20px ${glow}` }}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span className="text-[9px] md:text-[11px] font-bold text-white/80 text-center leading-tight">{label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center logo with rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2, type: 'spring', bounce: 0.5 }}
            className="relative z-10 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full bg-brand-purple/20 blur-xl"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-dashed border-brand-purple/30"
            />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-900 border-2 border-brand-purple/50 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)]">
              <img
                src="/logo/35.png"
                alt="Global Funzone"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.7 }}
            className="relative z-10 mt-8 text-center"
          >
            <motion.p
              className="text-2xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-pink-400 to-brand-orange"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Global Fun Zone
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-brand-purple to-brand-orange mt-2 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 0.6 }}
              className="mt-3 text-slate-400 text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
            >
              Watch · Laugh · Play · Learn
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
