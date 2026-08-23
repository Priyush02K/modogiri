import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Plus, 
  Minus, 
  MapPin, 
  Compass, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// Fallback images in case local assets are missing in certain environments
import Gourmetchocolatebox  from "../assets/Gourmetchocolatebox.webp";
import Rendered from "../assets/Rendered.webp";
import Mud from "../assets/Mud.webp";
import Footer from "../components/Footer";

const PROJECTS = [
  {
    id: 'ARC-01',
    title: 'The Mud Tub',
    category: '01.ARCHITECTURE',
    location: 'Private Sanctuary',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    desc: 'Sculpted earthen bathtub balancing refined taste and organic expression.',
    details: 'Created for a modern couple exploring trust in earth building. Designed as a standout feature, the sculpted bathtub became a serene and elegant corner of the home.'
  },
  {
    id: 'ARC-03',
    title: 'Building with Earthbags',
    category: '01.ARCHITECTURE',
    location: 'Remote Mountains',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2067',
    desc: 'Strong, flexible structures using polypropylene bags filled with soil.',
    details: 'Ideal for remote regions, it eliminates heavy transport and concrete foundations. Resistant to fire, earthquakes, and floods while remaining environmentally friendly.'
  },
  {
    id: 'ARC-04',
    title: 'Public Bottle Toilet',
    category: '01.ARCHITECTURE',
    location: 'High-Altitude Trails',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070',
    desc: 'Reimagining waste plastic bottles as structural mountain bricks.',
    details: 'Proposes toilets in remote regions affected by plastic waste. Reimagines bottles as bricks, involving local communities to foster sustainability and ownership.'
  },
  {
    id: 'ARC-05',
    title: 'The Courtyard House',
    category: '01.ARCHITECTURE',
    location: 'Residential Suburb',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071',
    desc: 'Breathable interiors centered around a glass-lit courtyard.',
    details: 'Incorporates traditional Pataal stone slate roofing to balance contemporary living with cultural heritage for a family of five.'
  },
  {
    id: 'ARC-06',
    title: 'Mediterranean Hotel',
    category: '01.ARCHITECTURE',
    location: 'Pauri Garhwal',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070',
    desc: 'Coastal aesthetics adapted to Himalayan terrain.',
    details: 'Features whitewashed facades and terracotta roofing. Functions as a luxury escape and a community space for local gatherings.'
  },
  {
    id: 'ARC-07',
    title: 'Forest Hostel Unit',
    category: '01.ARCHITECTURE',
    location: 'Assam Forest',
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2070',
    desc: 'Biomimicry design inspired by the natural movement of water.',
    details: 'The roof is shaped like interconnected leaves that collect and direct rainwater into a storage tank for drinking and sanitation.'
  },
  {
    id: 'PROD-01',
    title: 'Gourmet Chocolate Box',
    category: '02.PRODUCTS',
    location: 'Studio',
    image: Gourmetchocolatebox,
    desc: 'Halloween packaging reimagined through Art Nouveau curves.',
    details: 'This project proposes a limited edition packaging design that reimagines the commercial aesthetic of Halloween. Moving away from traditional cartoonish tropes, this design seeks to bring a sense of sophistication, organic flow, and "dark romance" to the seasonal shelf.'
  },
  {
    id: 'PROD-02',
    title: 'Poki the Robo',
    category: '02.PRODUCTS',
    location: 'Studio',
    image: Rendered,
    desc: 'Interactive modular STEM companion for creative building.',
    details: 'Poki arrives as a friendly, relatable companion, but the real magic begins when you start creating. Its modular parts can be detached, recombined, and transformed into anything from vehicles and creatures to futuristic machines.'
  },
  {
    id: 'FEST-01',
    title: 'Cultural Preservation Initiative',
    category: '03.MUD & MUSIC FESTIVAL',
    location: 'Uttarakhand',
    image: Mud,
    desc: 'A festival celebrating the traditional music, culture, and architecture of Uttarakhand.',
    details: 'Mud and Music is a festival celebrating Uttarakhand’s traditional music, culture, and architecture. Bringing together local and international artists, the festival creates a platform to preserve Garhwal’s rich heritage through live performances, storytelling, music, crafts, and documentation.'
  }
];

const CATEGORIES = ['ALL', '01.ARCHITECTURE', '02.PRODUCTS', '03.MUD & MUSIC FESTIVAL'];



const ProjectItem = React.forwardRef(({ project }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-[85vw] sm:w-[380px] md:w-[420px] shrink-0 snap-start group flex flex-col justify-between bg-white/70 dark:bg-stone-900/70 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 border border-stone-200/80 dark:border-stone-800/80 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div>
        {/* Project Thumbnail Frame */}
        <div className="relative overflow-hidden rounded-[2rem] bg-stone-200 dark:bg-stone-800 aspect-[1.4/1] mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Location Badge */}
          <div className="absolute top-5 left-5 opacity-90 group-hover:opacity-100 transition-opacity">
            <div className="bg-stone-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
               <MapPin size={12} className="text-orange-500" />
               <span className="text-[9px] uppercase font-black text-white tracking-[0.2em]">{project.location}</span>
            </div>
          </div>

          {/* Action Badge */}
          <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-11 h-11 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-xl">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* Content Info */}
        <div className="px-1">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] uppercase font-black text-orange-600 tracking-[0.35em]">{project.category}</span>
            <div className="h-[1px] flex-grow bg-stone-200 dark:bg-stone-800" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors leading-[1.1] tracking-tight">
            {project.title}
          </h3>
          
          <p className="text-base md:text-lg font-serif text-stone-500 dark:text-stone-400 leading-snug italic mb-6">
            "{project.desc}"
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden mb-6"
              >
                <div className="pt-4 pb-6 text-stone-600 dark:text-stone-300 text-sm leading-relaxed border-t border-stone-200 dark:border-stone-800 font-normal">
                  {project.details}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Expand Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-[10px] uppercase font-black tracking-[0.3em] text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-3 border-t border-stone-200 dark:border-stone-800 pt-4"
      >
        <div className="w-7 h-7 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-500">
          {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
        </div>
        {isExpanded ? 'Fold Narrative' : 'Process Details'}
      </button>
    </motion.div>
  );
});

ProjectItem.displayName = "ProjectItem";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 min-h-screen font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden">
      
      {/* Top Cover Hero */}
      <header className="relative h-[70vh] md:h-[75vh] flex items-end pb-20 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15 }}
            src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-55" 
            alt="Portfolio Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.6em] font-black text-white/80">Material & Sonic Archive</p>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.8] tracking-tighter text-white">
              Tactile <br/> <span className="italic text-stone-500 font-light">Memory.</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Sticky Tab Bar with Horizontal Controls */}
      <div className="sticky top-0 z-[100] bg-[#F5F2ED]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border-y border-stone-200 dark:border-stone-800 py-6 px-6 md:px-12 transition-all">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar py-2 w-full md:w-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-black transition-all relative py-2 px-1 ${
                  activeFilter === category 
                    ? 'text-orange-600' 
                    : 'text-stone-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-600" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Row Section */}
      <section className="py-20 md:py-28">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 md:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-6 md:px-12 py-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Studio Metrics Ticker */}
      <section className="py-20 px-6 md:px-12 border-t border-stone-200 dark:border-stone-900">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
           {[
             { label: 'Built Footprint', value: '42k sqft' },
             { label: 'Material R&D', value: '180+ Tests' },
             { label: 'Vernacular Saves', value: '12 Sites' },
             { label: 'Carbon Impact', value: 'Net Zero' }
           ].map((stat, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col gap-3 border-l-2 border-orange-600/40 pl-6"
             >
                <span className="text-[10px] uppercase font-black text-orange-600 tracking-[0.3em]">{stat.label}</span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-white tracking-tighter leading-none">{stat.value}</span>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="text-center border-t border-stone-200 dark:border-stone-800 pt-28 pb-36 px-6">
        <h2 className="text-6xl md:text-[9rem] font-serif mb-14 leading-[0.8] tracking-tighter text-stone-900 dark:text-white">
          Start a <br/> <span className="italic text-orange-600">Dialogue.</span>
        </h2>
        
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-14 md:px-20 py-7 md:py-9 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full text-xs md:text-sm uppercase font-black tracking-[0.5em] hover:scale-105 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          Initiate Project
        </button>
      </div>



    </div>

      <Footer/>
      
      </>
  );
};

export default Portfolio;
export const AboutPage = Portfolio;