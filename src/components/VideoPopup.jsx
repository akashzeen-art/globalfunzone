import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

const VideoPopup = ({ item, onClose }) => {
  const videoRef = useRef(null);

  if (!item) return null;

  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {});
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl bg-black"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-brand-purple transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <video
          ref={videoRef}
          key={item.videoUrl}
          src={item.videoUrl}
          controls
          autoPlay
          muted
          controlsList="nodownload"
          onCanPlay={handleCanPlay}
          className="w-full aspect-video"
        />
        <div className="p-3 bg-slate-900">
          <h3 className="text-white font-bold text-sm">{item.title}</h3>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoPopup;
