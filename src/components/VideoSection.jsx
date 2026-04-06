import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, PictureInPicture, SkipForward } from 'lucide-react';

// You can mix and match direct MP4 links AND YouTube links here!
const STUDIO_VIDEOS = [
  {
    id: '01',
    title: 'Modern Japanese Architecture',
    src: "https://www.youtube.com/watch?v=XV-lIaO00H8" // Your requested YouTube video!
  },
  {
    id: '02',
    title: 'Blueprint & Design Phase',
    src: "https://assets.mixkit.co/videos/preview/mixkit-architect-working-on-a-plan-with-a-compass-4330-large.mp4"
  },
  {
    id: '03',
    title: 'Modern Brutalist Facade',
    src: "https://assets.mixkit.co/videos/preview/mixkit-modern-architectural-building-details-4172-large.mp4"
  },
  {
    id: '04',
    title: 'Organic Interior Flow',
    src: "https://assets.mixkit.co/videos/preview/mixkit-potted-plants-in-a-modern-living-room-5162-large.mp4"
  }
];

// Helper function to extract YouTube ID from any YouTube URL
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoSection = () => {
  const videoRef = useRef(null);
  const iframeRef = useRef(null); // Added reference for YouTube iframe
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeVideo = STUDIO_VIDEOS[currentIndex];
  const ytId = getYouTubeId(activeVideo.src);

  // Advance to the next video
  const playNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % STUDIO_VIDEOS.length);
    setIsPlaying(true);
  };

  // Jump to specific video
  const jumpToVideo = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  // Toggle Play/Pause using postMessage for YouTube, or native API for MP4
  const togglePlay = () => {
    if (ytId && iframeRef.current) {
      const func = isPlaying ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*');
    } else if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle Mute using postMessage for YouTube, or native API for MP4
  const toggleMute = () => {
    if (ytId && iframeRef.current) {
      const func = isMuted ? 'unMute' : 'mute';
      iframeRef.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*');
    } else if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Toggle Picture-in-Picture (Only works for native MP4s)
  const togglePiP = async () => {
    if (ytId) {
      // Browsers don't allow native PiP for iframes easily
      console.warn("Picture-in-Picture is only supported for native MP4 videos.");
      return; 
    }
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture();
      else await videoRef.current.requestPictureInPicture();
    } catch (error) {
      console.error("PiP failed", error);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600">
                Studio In Motion
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-[1.1]">
              The rhythm of <br className="hidden sm:block"/>
              <span className="italic text-gray-400 dark:text-gray-500 font-light">architectural creation.</span>
            </h2>
          </div>
        </div>

        {/* --- Cinematic Video Player --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden group bg-zinc-200 dark:bg-zinc-900 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideo.id}
              initial={{ opacity: 0, x: '10%' }}
              animate={{ opacity: 1, x: '0%' }}
              exit={{ opacity: 0, x: '-10%' }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              {ytId ? (
                /* YouTube Embed Player */
                <iframe
                  ref={iframeRef}
                  // We add enablejsapi=1 so our custom React buttons can control the YouTube iframe!
                  src={`https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&playsinline=1&loop=1&playlist=${ytId}`}
                  title={activeVideo.title}
                  allow="autoplay; encrypted-media"
                  className="w-full h-full object-cover pointer-events-none scale-[1.15] transition-transform duration-1000 group-hover:scale-[1.2]"
                />
              ) : (
                /* Standard MP4 Player */
                <video
                  ref={videoRef}
                  src={activeVideo.src}
                  autoPlay
                  onEnded={playNextVideo}
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dark Gradient Overlay & Controls Preventer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          {/* Center Play Overlay (Shows when paused) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isPlaying ? 0.8 : 1, opacity: isPlaying ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 border border-white/20"
            >
              <Play size={32} className="translate-x-1" />
            </motion.div>
          </div>

          {/* Bottom Interface Bar */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-30">
            
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Video {activeVideo.id} / 0{STUDIO_VIDEOS.length}
              </p>
              <h3 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                {activeVideo.title}
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
              
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 hidden sm:flex">
                {STUDIO_VIDEOS.map((vid, index) => (
                  <button
                    key={vid.id}
                    onClick={() => jumpToVideo(index)}
                    title={vid.title}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button onClick={playNextVideo} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all">
                  <SkipForward size={16} />
                </button>

                <button onClick={togglePiP} className={`w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${ytId ? 'bg-white/5 border-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20 border-white/10 text-white'}`} title={ytId ? "PiP unavailable for YouTube" : "Pop-out Player"}>
                  <PictureInPicture size={16} />
                </button>

                <button onClick={toggleMute} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                
                <button onClick={togglePlay} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-orange-600 hover:border-orange-600 hover:text-white flex items-center justify-center transition-all shadow-lg">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="translate-x-0.5" />}
                </button>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;