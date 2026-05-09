import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight,
  Plus, 
  Minus, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  Leaf
} from 'lucide-react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
// ==========================================
// 1. DATA: INTEGRATED STUDIO ARCHIVE
// ==========================================

const PROJECTS = [
  // --- 01. ARCHITECTURE ---
  {
    id: 'ARC-01',
    title: 'Boutique Cottage',
    category: '01.ARCHITECTURE',
    location: 'Farmstay Context',
    area: '500 sqft',
    image: 'https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070',
    desc: 'Wattle and Daub cottage with site-sourced bamboo and mud.',
    details: 'Designed for the client’s grandparents, this cottage embraces a minimal, earthen aesthetic using the Wattle and Daub technique. Key features—including the bed, bathtub, and storage—were sculpted organically using river stones, cob, and recycled materials.'
  },
  {
    id: 'ARC-02',
    title: 'The Mud Tub',
    category: '01.ARCHITECTURE',
    location: 'Private Sanctuary',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2070',
    desc: 'Sculpted earthen bathtub balancing refined taste and organic expression.',
    details: 'Created for a modern couple exploring trust in earth building. Designed as a standout feature, the sculpted bathtub became a serene and elegant corner of the home.'
  },
  {
    id: 'ARC-03',
    title: 'Building with Earthbags',
    category: '01.ARCHITECTURE',
    location: 'Remote Mountains',
    image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067',
    desc: 'Strong, flexible structures using polypropylene bags filled with soil.',
    details: 'Ideal for remote regions, it eliminates heavy transport and concrete foundations. Resistant to fire, earthquakes, and floods while remaining environmentally friendly.'
  },
  {
    id: 'ARC-04',
    title: 'Public Bottle Toilet',
    category: '01.ARCHITECTURE',
    location: 'High-Altitude Trails',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070',
    desc: 'Reimagining waste plastic bottles as structural mountain bricks.',
    details: 'Proposes toilets in remote regions affected by plastic waste. Reimagines bottles as bricks, involving local communities to foster sustainability and ownership.'
  },
  {
    id: 'ARC-05',
    title: 'The Courtyard House',
    category: '01.ARCHITECTURE',
    location: 'Residential Suburb',
    area: '2592 sqft',
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
    image: 'https://images.unsplash.com/photo-1541888071855-6b45a6669b3d?q=80&w=2070',
    desc: 'Biomimicry design inspired by the natural movement of water.',
    details: 'The roof is shaped like interconnected leaves that collect and direct rainwater into a storage tank for drinking and sanitation.'
  },

  // --- 02. PRODUCTS ---
  {
    id: 'PROD-01',
    title: 'Gourmet Chocolate Box',
    category: '02.PRODUCTS',
    location: 'Packaging Lab',
    image: 'https://images.unsplash.com/photo-1549007994-cb92cafabf10?q=80&w=2070',
    desc: 'Halloween packaging reimagined through Art Nouveau curves.',
    details: 'Refined design using floral motifs and flowing organic lines to blend vintage elegance with seasonal themes.'
  },
  {
    id: 'PROD-02',
    title: 'Poki the Robo',
    category: '02.PRODUCTS',
    location: 'STEM Workshop',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecaea7?q=80&w=2070',
    desc: 'Interactive modular STEM companion for creative building.',
    details: 'Designed for children aged 8-15. Features a node-based system to transform from a humanoid into vehicles or custom machines.'
  },
  // --- 03. MUD & MUSIC FESTIVAL ---
  {
    id: 'FEST-01',
    title: 'Cultural Preservation Initiative',
    category: '03.MUD & MUSIC FESTIVAL',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070',
    desc: 'Preserving heritage music, craft, and architectural identity.',
    details: 'A platform for local artists to collaborate with global practitioners. At its heart is the naturally built "Mud and Music" amphitheatre, supporting long-term documentation and digital archiving of Garhwali traditions.'
  }
];

const CATEGORIES = ['ALL', '01.ARCHITECTURE', '02.PRODUCTS', '03.MUD & MUSIC FESTIVAL'];

// ==========================================
// 2. PROJECT ITEM COMPONENT
// ==========================================

const ProjectItem = React.forwardRef(({ project }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className="w-[85vw] md:w-[420px] shrink-0 snap-start group pb-10"
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-200 dark:bg-stone-900 mb-10 shadow-2xl aspect-[1.5/1]"> 
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
          />
          
          <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-stone-950/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 flex items-center gap-3">
               <MapPin size={10} className="text-orange-500" />
               <span className="text-[9px] uppercase font-black text-white tracking-[0.2em]">{project.location}</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-3 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-xl">
              <ArrowUpRight size={22} />
            </div>
          </div>
        </div>

        <div className="px-2">
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[10px] uppercase font-black text-orange-600 tracking-[0.4em]">{project.category}</span>
            <div className="h-[1px] flex-grow bg-stone-200 dark:bg-stone-800" />
          </div>
          
          {/* Main title reduced slightly in size as requested */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 dark:text-white mb-6 group-hover:text-orange-600 transition-colors leading-[0.8] tracking-tighter">
            {project.title}
          </h3>
          
          <p className="text-2xl md:text-3xl font-serif text-stone-500 dark:text-stone-400 leading-tight mb-10 italic max-w-sm">
            "{project.desc}"
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-8"
              >
                <div className="pt-6 pb-10 text-stone-600 dark:text-stone-300 text-lg leading-relaxed border-t border-stone-200 dark:border-stone-800 mt-6 font-medium">
                  {project.details}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[11px] uppercase font-black tracking-[0.4em] text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-4 border-b border-stone-200 dark:border-stone-800 hover:border-orange-600 pb-3"
          >
            <div className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center">
              {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
            </div>
            {isExpanded ? 'Fold Narrative' : 'Process Details'}
          </button>
        </div>
      </motion.div>
    </div>
  );
});

ProjectItem.displayName = "ProjectItem";

// ==========================================
// 3. MAIN PORTFOLIO COMPONENT
// ==========================================

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.7;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 min-h-screen font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden">
      
      {/* Top Cover Hero */}
      <header className="relative h-[85vh] flex items-end pb-32 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20 }}
            src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070" 
            className="w-full h-full object-cover grayscale opacity-60" 
            alt="Portfolio Cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
        </div>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
            <div className="flex items-center gap-6 mb-12">
              <span className="w-16 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.6em] font-black text-white/80">Material & Sonic Archive</p>
            </div>
            <h1 className="text-8xl md:text-[13rem] font-serif leading-[0.75] tracking-tighter text-white">
              Tactile <br/> <span className="italic text-stone-500 font-light">Memory.</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-[100] bg-[#F5F2ED]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-3xl border-y border-stone-200 dark:border-stone-800 py-10 px-6 md:px-12 transition-all">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-14 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap text-[12px] uppercase tracking-[0.4em] font-black transition-all relative py-2 ${
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
          
          <div className="hidden lg:flex gap-6 items-center">
             <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mr-4">Glide to explore</span>
             <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 hover:text-orange-600 transition-all flex items-center justify-center"><ChevronLeft size={24} /></button>
             <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 hover:text-orange-600 transition-all flex items-center justify-center"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>

      {/* Horizontal 2-Row Grid - Increased horizontal padding as requested */}
      <section className="py-32 md:py-64">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {/* Increased horizontal padding to px-[10vw] md:px-[16vw] 
              for a more centered, wide-margin aesthetic.
          */}
          <div className="grid grid-rows-2 grid-flow-col gap-x-24 gap-y-12 px-[10vw] md:px-[16vw]">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </AnimatePresence>
            
            {/* Extended right-side spacer to maintain consistent padding at the end of the scroll */}
            <div className="w-[10vw] shrink-0 pointer-events-none" />
          </div>
        </div>
      </section>
	  
	  {/* --- STUDIO METRICS TICKER (Moved Above CTA as requested) --- */}
      <section className="py-32 px-6 md:px-12 border-t border-stone-200 dark:border-stone-900 mt-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-24">
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
               className="flex flex-col gap-4 border-l border-orange-600/30 pl-8"
             >
                <span className="text-[10px] uppercase font-black text-orange-600 tracking-[0.3em]">{stat.label}</span>
                <span className="text-5xl md:text-6xl font-serif text-stone-900 dark:text-white tracking-tighter leading-none">{stat.value}</span>
             </motion.div>
           ))}
        </div>
      </section>

	  

      {/* Footer CTA */}
      <div className="mt-20 text-center border-t border-stone-200 dark:border-stone-800 pt-56 pb-64 px-6">
        <h2 className="text-7xl md:text-[13rem] font-serif mb-20 leading-[0.7] tracking-tighter text-stone-900 dark:text-white">Start a <br/> <span className="italic text-orange-600">Dialogue.</span></h2>
        
        <Link
        to="/workshops"
        className="inline-flex items-center justify-center px-24 py-10 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full text-sm uppercase font-black tracking-[0.5em] hover:scale-105 transition-all shadow-[0_30px_100px_rgba(0,0,0,0.2)]"
      >
        Initiate Project
      </Link>
      </div>



      <Footer/>

    </div>
  );
};



export default Portfolio;