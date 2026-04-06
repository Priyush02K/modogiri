import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Residential from "../assets/RESIDENTIAL.jpg";
import Cultural from "../assets/Cultural.jpg";
import Commercial from "../assets/Commercial.jpg";
import Earth from "../assets/Earth.jpg";
import Products from "../assets/Products.jpg";
import Desert from "../assets/Desert.jpeg";
Desert



// --- Portfolio Data ---
const PROJECTS = [
  {
    id: 1,
    title: 'The Obsidian Villa',
    category: 'Residential',
    image: Residential,
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 2,
    title: 'Lumina Pavilion',
    category: 'Cultural',
    image: Cultural,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 3,
    title: 'Aura Headquarters',
    category: 'Commercial',
    image: Commercial,
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 4,
    title: 'Earth & Bamboo',
    category: 'Workshops',
    image: Earth,
    aspectRatio: 'aspect-square',
  },
  {
    id: 5,
    title: 'The Jali Collection',
    category: 'Products',
    image: Products,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 6,
    title: 'Desert Canvas',
    category: 'Residential',
    image: Desert,
    aspectRatio: 'aspect-[4/5]',
  }
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Cultural', 'Products', 'Workshops'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Section Header & Filters --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-black dark:text-white leading-[1.1]">
              Architecture that <br className="hidden md:block"/>
              <span className="italic text-gray-400 dark:text-gray-500 font-light">shapes the human</span> experience.
            </h2>
          </div>

          {/* Filtering System */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg'
                    : 'bg-transparent text-gray-500 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* --- Masonry Grid --- */}
        {/* We use CSS columns for a true masonry effect that adapts to image heights */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project Image Wrapper */}
                <div className={`w-full relative overflow-hidden bg-gray-200 dark:bg-zinc-800 ${project.aspectRatio}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-400">
                        {project.category}
                      </span>
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-serif text-white">
                          {project.title}
                        </h3>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-2 hover:border-orange-600 dark:hover:border-orange-500 transition-colors">
            <span className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              View Complete Archive
            </span>
            <ArrowUpRight size={16} className="group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;