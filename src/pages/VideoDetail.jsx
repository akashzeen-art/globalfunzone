import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, Plus, Bookmark } from 'lucide-react';
import { allVideos, categories } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import VideoCard from '../components/VideoCard';
import 'swiper/css';
import 'swiper/css/navigation';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [category, setCategory] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on load
    
    // Find video
    for (const cat of allVideos) {
      const found = cat.items.find(i => i.id === id);
      if (found) {
        setVideo(found);
        const videoCat = categories.find(c => c.id === found.categoryId);
        setCategory(videoCat);
        setRelatedVideos(cat.items.filter(i => i.id !== id).slice(0, 8));
        break;
      }
    }
  }, [id]);

  if (!video) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Loading...</div>;

  const isEbook = category?.slug === 'ebooks';

  return (
    <div className="bg-slate-900 min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-8 py-8">
        
        {/* Player Section */}
        <div className="bg-black w-full rounded-2xl overflow-hidden shadow-2xl relative mb-8 flex border border-slate-800/50">
          {isEbook ? (
            <div className="w-full flex">
              <div className="hidden md:block w-1/3 p-8 bg-slate-900">
                 <img src={video.thumbnail} className="w-full h-auto rounded-lg shadow-xl" alt="cover" />
              </div>
              <div className="w-full md:w-2/3 min-h-[60vh] flex flex-col items-center justify-center bg-slate-950 p-12 text-center">
                 <Bookmark className="w-16 h-16 text-brand-purple mb-6 opacity-80" />
                 <h2 className="text-3xl font-bold text-white mb-4">Read: {video.title}</h2>
                 <p className="text-slate-400 max-w-md mb-8">This is a mock reader view. In a real application, an epub or pdf reader would be mounted here.</p>
                 <button className="bg-brand-purple hover:bg-brand-pink text-white px-8 py-3 rounded-full font-bold transition-colors">
                   Start Reading
                 </button>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-video bg-slate-950">
              {video.videoUrl ? (
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full group flex items-center justify-center">
                  <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <div className="relative z-10 w-24 h-24 bg-brand-purple/90 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-pink transition-colors hover:scale-105 pl-2 shadow-[0_0_50px_rgba(139,92,246,0.5)]">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded text-xs font-bold text-white ${category?.color}`}>
                {category?.name}
              </span>
              <span className="text-slate-400 text-sm font-medium">{video.duration} • New</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{video.title}</h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {video.description} This is a longer mock description to show how the layout handles multiple lines of text. The whole family will absolutely love this piece of content. Don't forget to add it to your watchlist!
            </p>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Plus className="w-5 h-5" /> Watchlist
              </button>
              <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Heart className="w-5 h-5" /> Like
              </button>
              <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>
          </div>

          {/* Up Next / Sidebar */}
          <div className="lg:w-1/3 bg-slate-800/50 rounded-2xl p-6 border border-slate-800">
             <h3 className="text-white font-bold text-xl mb-6">Up Next</h3>
             <div className="flex flex-col gap-4">
               {relatedVideos.slice(0, 3).map(rv => (
                 <Link to={`/video/${rv.id}`} key={rv.id} className="flex gap-4 group">
                    <div className="w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img src={rv.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-[10px] rounded text-white font-bold">{rv.duration}</div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold group-hover:text-brand-pink transition-colors line-clamp-2 text-sm">{rv.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">{category?.name}</p>
                    </div>
                 </Link>
               ))}
             </div>
          </div>
        </div>

        {/* More Like This Slider */}
        <hr className="border-slate-800 mb-12" />
        <h2 className="text-3xl font-bold text-white mb-8">More from {category?.name}</h2>
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.5 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            className="pb-10"
          >
            {relatedVideos.map(vid => (
              <SwiperSlide key={vid.id} className="h-auto">
                <VideoCard item={vid} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  );
};

export default VideoDetail;
