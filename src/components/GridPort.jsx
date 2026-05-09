import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'ARC-01',
    title: 'Boutique Cottage',
    category: 'Residential',
    location: 'Farmstay Context',
    image: 'https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070',
    shortDesc: 'Wattle and Daub cottage with site-sourced bamboo and mud.',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'ARC-02',
    title: 'The Mud Tub',
    category: 'Residential',
    location: 'Private Sanctuary',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
    shortDesc: 'A sculpted earthen bathtub balancing refined taste and organic expression.',
    aspect: 'aspect-square'
  },
  {
    id: 'ARC-03',
    title: 'Building with Earthbags',
    category: 'Research',
    location: 'Remote Mountains',
    image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067',
    shortDesc: 'Strong, flexible structures using polypropylene bags filled with soil.',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'ARC-04',
    title: 'Public Bottle Toilet',
    category: 'Sustainable Design',
    location: 'Remote Mountains',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070',
    shortDesc: 'Reimagining waste plastic bottles as structural building bricks.',
    aspect: 'aspect-video'
  },
  {
    id: 'ARC-05',
    title: 'The Courtyard House',
    category: 'Residential',
    location: 'Residential Suburb',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071',
    shortDesc: 'Breathable interiors centered around a glass-lit courtyard.',
    aspect: 'aspect-[16/10]'
  },
  {
    id: 'ARC-06',
    title: 'Mediterranean Hotel',
    category: 'Commercial',
    location: 'Pauri Garhwal',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070',
    shortDesc: 'Coastal aesthetics adapted to Himalayan terrain.',
    aspect: 'aspect-[4/5]'
  }
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Cultural', 'Products', 'Workshops'];

export default function GridLayout() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0a0a0a] min-h-screen font-sans text-stone-900 dark:text-stone-100 transition-colors duration-700">
      <motion.div 
        key="grid-view" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
      >
        {/* --- MINIMAL HEADER --- */}
        <header className="pt-32 pb-16 px-6 md:px-12 max-w-[1500px] mx-auto border-b border-stone-100 dark:border-stone-900">
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl md:text-5xl font-serif leading-tight tracking-tight max-w-2xl">
              Architecture that <br />
              <span className="text-stone-400 italic font-light">shapes the human</span> experience.
            </h1>

            {/* --- ONE-LINE TABS --- */}
            <div className="flex items-center w-full overflow-hidden">
              <div className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                {CATEGORIES.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2.5 rounded-full text-[9px] uppercase tracking-widest font-black transition-all duration-300 whitespace-nowrap shrink-0 border ${
                      activeFilter === cat 
                      ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-lg' 
                      : 'bg-white/50 border-stone-200 text-stone-400 hover:text-stone-900 hover:border-stone-400 dark:bg-stone-900/50 dark:border-stone-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 px-6 md:px-12 pb-40">
          <div className="max-w-[1500px] mx-auto">
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-stone-200 dark:bg-stone-900 cursor-default"
    >
      <div className={`relative w-full h-full ${project.aspect} overflow-hidden`}>
        {/* Full color plane image */}
        <img 
          src={project.image} 
          className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110" 
          alt={project.title} 
        />
      </div>

      {/* --- OVERLAY REVEAL ON HOVER --- */}
      <div className="absolute inset-0 bg-stone-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
        <motion.div 
          className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-black text-orange-500 mb-3 block">{project.category}</span>
          <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight tracking-tight mb-3">
            {project.title}
          </h3>
          <p className="text-white/70 text-xs font-medium italic mb-6 line-clamp-3">
            {project.shortDesc}
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/50">
              <MapPin size={10} className="text-orange-500" />
              {project.location}
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}