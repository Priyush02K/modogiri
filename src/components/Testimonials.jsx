import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Studio.Arc didn't just build us a house; they sculpted a sanctuary. The way the natural light interacts with the rammed earth walls throughout the day is nothing short of poetic.",
    client: "Elena Rostova",
    project: "The Obsidian Villa"
  },
  {
    id: 2,
    quote: "Working with Vikram and his team was a revelation. They possess a profound respect for the environment. Our headquarters feels less like a corporate office and more like a living, breathing ecosystem.",
    client: "Marcus Chen",
    project: "Aura Headquarters"
  },
  {
    id: 3,
    quote: "The brutalist concrete forms initially felt intimidating, but the integration of warm timber and bamboo completely softened the space. It is a masterpiece of balance and restraint.",
    client: "Sarah Jenkins",
    project: "Desert Canvas Residence"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic: cycles through testimonials every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 8000); 
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const modernEase = [0.25, 1, 0.5, 1];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-black/5 dark:border-white/5 overflow-hidden flex flex-col justify-center min-h-[70vh]">
      
      {/* Massive Background Quote Icon for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <Quote className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] text-black/[0.02] dark:text-white/[0.02] rotate-12" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col h-full">
        
        {/* --- Section Header --- */}
        <div className="flex items-center justify-center gap-4 mb-16 md:mb-24">
          <span className="w-8 h-[1px] bg-orange-600"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600 text-center">
            The Lived Experience
          </span>
          <span className="w-8 h-[1px] bg-orange-600"></span>
        </div>

        {/* --- Typography Slider --- */}
        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center text-center px-4 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.7, ease: modernEase }}
              className="flex flex-col items-center"
            >
              {/* The Massive Quote */}
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-[1.3] md:leading-[1.2] mb-12 max-w-5xl mx-auto tracking-tight">
                "{TESTIMONIALS[current].quote}"
              </h3>

              {/* Client & Project Details */}
              <div className="flex flex-col items-center gap-2">
                <p className="font-serif text-xl md:text-2xl text-black dark:text-white">
                  {TESTIMONIALS[current].client}
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-gray-400">
                    Client, {TESTIMONIALS[current].project}
                  </p>
                  <span className="w-4 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- Controls --- */}
        <div className="mt-20 flex items-center justify-center gap-8">
          
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/30 dark:hover:border-white/30 flex items-center justify-center text-black dark:text-white transition-all group"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  current === index 
                    ? 'w-8 bg-orange-600' 
                    : 'w-2 bg-black/10 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/30 dark:hover:border-white/30 flex items-center justify-center text-black dark:text-white transition-all group"
            aria-label="Next Testimonial"
          >
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;