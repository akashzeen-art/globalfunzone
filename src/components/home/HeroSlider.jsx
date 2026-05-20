import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { teasers } from '../../data/mockData';

const HeroSlider = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-slate-900 pt-16">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-purple/30 rounded-full blur-[80px] z-0 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px] z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full z-10"
      >
        {teasers.map((teaser) => (
          <SwiperSlide key={teaser.id}>
            <div className="relative w-full h-full">
              <video
                src={teaser.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
    </div>
  );
};

export default HeroSlider;
