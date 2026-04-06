import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CalendarDays, ShoppingBag } from 'lucide-react';
import Hero1  from "../assets/hero1.jpg";
import Hero2  from "../assets/hero2.jpg";
import Hero3  from "../assets/hero3.jpg";
import Hero4  from "../assets/hero4.jpg";

import Portfolio from './Portfolio';
// --- Branding & Business Pillar Slider Data ---
const SLIDES = [
  {
    id: '01',
    category: 'Philosophy',
    title: 'Rooted in Context',
    subtitle: 'A branding-focused architecture practice merging brutalist forms with organic Indian materials.',
    tag: 'Our Manifesto',
    actionText: 'Read Philosophy',
    icon: null,
    image: Hero1   // ✅ FIXED
  },
  {
    id: '02',
    category: 'Portfolio',
    title: 'Auro Earth Center',
    subtitle: 'Rammed earth and compressed stabilized blocks forming magnificent vaulted structures.',
    tag: 'Auroville, India',
    actionText: 'View Project',
    icon: null,
    image: Hero2
  },
  {
    id: '03',
    category: 'Workshops',
    title: 'Earth Building 101',
    subtitle: 'Join our immersive hands-on workshops. Learn sustainable masonry and bamboo crafting.',
    tag: 'Next: Oct 12 • 4 Seats Left', 
    actionText: 'Book Your Seat',
    icon: <CalendarDays size={14} className="mr-2" />,
    image: Hero3
  },
  {
    id: '04',
    category: 'Shop',
    title: 'The Jali Collection',
    subtitle: 'Curated architectural products, lighting, and bespoke furniture designed by our studio.',
    tag: 'New Arrivals • In Stock', 
    actionText: 'Shop Collection',
    icon: <ShoppingBag size={14} className="mr-2" />,
    image: Hero4
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6500); 
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const jumpToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  const modernEase = [0.25, 1, 0.5, 1];

  return (
    <section className="relative min-h-screen pt-24 pb-0 flex flex-col justify-end bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-x-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-6 px-6 md:px-12 z-0 opacity-50">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-l border-black/[0.04] dark:border-white/[0.03] hidden md:block" />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 flex-grow">
        
        {/* --- LEFT COLUMN: Typography & Business Pillars --- */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 md:px-12 py-12 lg:py-0 order-2 lg:order-1 flex-grow">
          
          {/* Animated Text Content */}
          <div className="min-h-[380px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: modernEase }}
                className="flex flex-col"
              >
                {/* Section Kicker */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600">
                    {SLIDES[current].category}
                  </span>
                  <span className="w-8 h-[1px] bg-black/20 dark:bg-white/20" />
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {SLIDES[current].tag}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-serif leading-[1.1] text-black dark:text-white mb-6">
                  {SLIDES[current].title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i === 1 ? <span className="italic text-gray-400 dark:text-gray-500 font-light mr-3 inline-block">{word}</span> : <span className="mr-3 inline-block">{word}</span>}
                    </React.Fragment>
                  ))}
                </h1>

                {/* Subtitle / Description */}
                <p className="max-w-sm text-gray-600 dark:text-gray-400 leading-relaxed text-sm font-medium mb-12 h-[60px]">
                  {SLIDES[current].subtitle}
                </p>

                {/* Dynamic Call-To-Action Button */}
                <button className="group flex items-center gap-4 w-fit text-black dark:text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center">
                    {SLIDES[current].icon}
                    {SLIDES[current].actionText}
                  </span>
                  <div className={`w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 ${current >= 2 ? 'bg-black dark:bg-white text-white dark:text-black group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white' : 'group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white'}`}>
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls - Cleaned up to be ultra-minimal */}
          <div className="mt-auto pb-12 pt-8 flex items-center gap-6 md:gap-8 border-t border-black/5 dark:border-white/5">
            
            {/* Number Indicator */}
            <div className="text-sm font-mono flex items-center gap-2 text-black dark:text-white shrink-0">
              <span className="font-bold">{SLIDES[current].id}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">0{SLIDES.length}</span>
            </div>

            {/* Auto-play Progress Bar */}
            <div className="flex-grow h-[1px] bg-black/10 dark:bg-white/10 relative overflow-hidden hidden sm:block">
              <motion.div 
                key={current}
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 6.5, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-full bg-orange-600 origin-left"
              />
            </div>
            
            {/* Manual Arrows */}
            <div className="flex items-center gap-1 shrink-0">
              <button 
                onClick={prevSlide}
                className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-black dark:text-white"
                aria-label="Previous Slide"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-black dark:text-white"
                aria-label="Next Slide"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN: Immersive Image Slider --- */}
        <div className="lg:col-span-7 relative h-[50vh] lg:min-h-[80vh] w-full order-1 lg:order-2 overflow-hidden px-4 lg:px-0 lg:pr-6 lg:pb-6 pt-4 lg:pt-6">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={current}
                className="absolute inset-0 w-full h-full bg-gray-200 dark:bg-zinc-800"
                initial={{ opacity: 0, scale: 1.05, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)' }}
                exit={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
                transition={{ duration: 1.2, ease: modernEase }}
              >
                <img 
                  src={SLIDES[current].image} 
                  alt={SLIDES[current].title} 
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay for text legibility and mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70" />
              </motion.div>
            </AnimatePresence>
            
            {/* Minimalist Design Accents */}
            <div className="absolute top-6 right-6 text-white/60 text-xs font-mono z-10 hidden md:block">+</div>
            <div className="absolute bottom-6 right-6 text-white/60 text-xs font-mono z-10 hidden md:block">+</div>
          </div>
        </div>

      </div>
    </section>




  );
};

export default Hero;