import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

/**
 * DATA CONFIGURATION
 * I've used professional, high-contrast Unsplash images as demo placeholders.
 * When you change these locally, use transparent PNGs or SVGs for the best look.
 */
const PARTNERS = [
  { 
    id: 1,
    name: 'NIT Hamirpur', 
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 2,
    name: 'CEPT University', 
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 3,
    name: 'HFT Stuttgart', 
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 4,
    name: 'IIM Ahmedabad', 
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 5,
    name: 'HP PWD', 
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 6,
    name: 'IIT Delhi', 
    logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 7,
    name: 'SPA Delhi', 
    logo: 'https://images.unsplash.com/photo-1581291417004-6e7398463c68?w=400&h=400&fit=crop&q=80' 
  },
  { 
    id: 8,
    name: 'ETH Zurich', 
    logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop&q=80' 
  }
];

const Partners = () => {
  const scrollRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Smooth horizontal scroll logic
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; 
      
      // If we are at the end and trying to go right, loop back to start
      if (direction === 'right' && (current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10)) {
        current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        current.scrollBy({ 
          left: direction === 'left' ? -scrollAmount : scrollAmount, 
          behavior: 'smooth' 
        });
      }
    }
  };

  // Auto-play logic: triggers every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section 
      className="py-24 md:py-32 border-t border-black/5 dark:border-white/5 bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600 text-black dark:text-white">
                Clients & Collaborators
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-black dark:text-white">
              Trusted by leading <br/>
              <span className="italic text-gray-400 dark:text-gray-500 font-light">institutions & global brands.</span>
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setIsAutoPlaying(false);
                scroll('left');
              }} 
              className="w-14 h-14 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group active:scale-95 shadow-sm text-black dark:text-white"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => {
                setIsAutoPlaying(false);
                scroll('right');
              }} 
              className="w-14 h-14 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group active:scale-95 shadow-sm text-black dark:text-white"
              aria-label="Scroll Right"
            >
              <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- Logos Scroll Container --- */}
        <div className="relative group/container">
          {/* Edge Faders for a seamless look */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#FFFAF5] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#FFFAF5] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none hidden md:block"></div>

          <div 
            ref={scrollRef} 
            className="flex gap-8 md:gap-16 overflow-x-auto no-scrollbar scroll-smooth items-center py-6 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PARTNERS.map((p, idx) => (
              <motion.div 
                key={p.name} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="shrink-0 group/logo"
              >
                {/* Logo Card with Interaction */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 bg-white dark:bg-zinc-900/40 rounded-3xl border border-black/[0.03] dark:border-white/[0.03] flex items-center justify-center p-8 transition-all duration-500 hover:shadow-2xl hover:border-orange-600/20 group-hover/container:opacity-50 hover:!opacity-100 overflow-hidden">
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-w-full max-h-full object-cover rounded-xl grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-500 group-hover/logo:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover/logo:bg-transparent transition-colors" />
                  <span className="hidden text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 text-center leading-tight">
                    {p.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Collaboration Footer --- */}
        <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500">
            Expanding the boundaries of built space — Together.
          </p>
          <a href="/contact" className="group flex items-center gap-4 text-black dark:text-white font-serif italic text-xl hover:text-orange-600 transition-colors">
            Start a collaboration
            <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;