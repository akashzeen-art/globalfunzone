import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, ShieldCheck, Smartphone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Making Screen Time <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Quality Time</span>
            </h1>
            <p className="text-xl text-slate-300 md:text-2xl leading-relaxed mb-10">
              FunFlix is a premium entertainment platform designed to bring families together. 
              We curate the very best in kids' entertainment, from laughing to learning.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/" className="bg-brand-purple hover:bg-brand-pink text-white font-bold px-8 py-4 rounded-full text-lg transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" /> Start Watching
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Image Split */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Built for Kids, <br/>Loved by Parents</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We believe that entertainment should be both fun and safe. Our platform is meticulously crafted to ensure that every video, every game, and every story contributes positively to your family's day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="text-4xl font-black text-brand-purple mb-2">10k+</div>
                  <div className="text-white font-bold">Episodes</div>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="text-4xl font-black text-brand-orange mb-2">7</div>
                  <div className="text-white font-bold">Categories</div>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="text-4xl font-black text-brand-pink mb-2">0</div>
                  <div className="text-white font-bold">Hidden Fees</div>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <div className="text-4xl font-black text-blue-500 mb-2">24/7</div>
                  <div className="text-white font-bold">Access</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 w-full h-[600px] rounded-3xl overflow-hidden relative shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
                alt="Family laughing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Watch Anywhere Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Anytime, Anywhere</h2>
            <p className="text-xl text-slate-400">Your favorite content syncs seamlessly across all your devices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile & Tablet</h3>
              <p className="text-slate-400">Download the app to keep the kids entertained during road trips or flights.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-brand-purple/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-10 h-10 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe Browsing</h3>
              <p className="text-slate-400">Set up PIN-protected profiles to ensure kids stay in their designated zones.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Family Plans</h3>
              <p className="text-slate-400">Up to 6 profiles per account, allowing everyone to maintain their watch history.</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
