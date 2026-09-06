import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Plus, 
  Minus, 
  MapPin, 
  Compass, 
  ChevronLeft, 
  ChevronRight,
  X,
  Maximize2,
  Image as ImageIcon
} from 'lucide-react';

// Fallback images in case local assets are missing in certain environments
import Rendered from "../assets/Rendered.webp";
import Mud from "../assets/Mud.webp";
import Footer from "../components/Footer";


import MudTub01 from "../assets/portfolioimg/TheMudTub01.jpg";
import MudTub02 from "../assets/portfolioimg/TheMudTub02.jpg";
import MudTub03 from "../assets/portfolioimg/TheMudTub03.jpg";

import BuildingWithEarthbags01 from "../assets/portfolioimg/BuildingWithEarthbags01.jpg";
import BuildingWithEarthbags02 from "../assets/portfolioimg/BuildingWithEarthbags02.jpg";
import BuildingWithEarthbags03 from "../assets/portfolioimg/BuildingWithEarthbags03.jpg";


import PublicBottleToilet01 from "../assets/portfolioimg/PublicBottleToilet01.jpg";
import PublicBottleToilet02 from "../assets/portfolioimg/PublicBottleToilet02.jpg";
import PublicBottleToilet03 from "../assets/portfolioimg/PublicBottleToilet03.jpg";


import TheCourtyardHouse01 from "../assets/portfolioimg/TheCourtyardHouse01.jpg";

import MediterraneanHotel01 from "../assets/portfolioimg/MediterraneanHotel01.jpg";
import MediterraneanHotel02 from "../assets/portfolioimg/MediterraneanHotel02.jpg";
import MediterraneanHotel03 from "../assets/portfolioimg/MediterraneanHotel03.jpg";


import ForestHostelUnit01 from "../assets/portfolioimg/ForestHostelUnit01.jpg";
import ForestHostelUnit02 from "../assets/portfolioimg/ForestHostelUnit02.jpg";
import ForestHostelUnit03 from "../assets/portfolioimg/ForestHostelUnit03.jpg";


import Gourmetchocolatebox from "../assets/Gourmetchocolatebox.webp";
import GourmetChocolateBox02 from "../assets/portfolioimg/GourmetChocolateBox02.jpg";
import GourmetChocolateBox03 from "../assets/portfolioimg/GourmetChocolateBox03.jpg";

import PokiRobo02 from "../assets/portfolioimg/PokiRobo02.jpg";
import PokiRobo03 from "../assets/portfolioimg/PokiRobo03.jpg";

import CulturalInitiative01 from "../assets/portfolioimg/CulturalInitiative01.jpg";
import CulturalInitiative02 from "../assets/portfolioimg/CulturalInitiative02.jpg";
import CulturalInitiative03 from "../assets/portfolioimg/CulturalInitiative03.jpg";





const PROJECTS = [
  {
    id: 'ARC-01',
    title: 'The Mud Tub',
    category: '01.ARCHITECTURE',
    location: 'Private Sanctuary',
    image:MudTub01 ,
    desc: 'Sculpted earthen bathtub balancing refined taste and organic expression.',
    details: 'Created for a modern couple exploring trust in earth building. Designed as a standout feature, the sculpted bathtub became a serene and elegant corner of the home.',
    gallery: [
        MudTub01,
        MudTub02,
        MudTub03,
    
    ]
  },
  {
    id: 'ARC-03',
    title: 'Building with Earthbags',
    category: '01.ARCHITECTURE',
    location: 'Remote Mountains',
    image: BuildingWithEarthbags01,
    desc: 'Strong, flexible structures using polypropylene bags filled with soil.',
    details: 'Ideal for remote regions, it eliminates heavy transport and concrete foundations. Resistant to fire, earthquakes, and floods while remaining environmentally friendly.',
    gallery: [
      BuildingWithEarthbags01,
      BuildingWithEarthbags02,
      BuildingWithEarthbags03,
     
    ]
  },
  {
    id: 'ARC-04',
    title: 'Public  Toilet',
    category: '01.ARCHITECTURE',
    location: 'High-Altitude Trails',
    image: PublicBottleToilet01,
    desc: 'Building sustainable toilets from discarded bottles, with local communities at the heart of the process.',
    details: (
  <>
    This proposal explores using discarded bottles as building blocks for toilets in remote mountain regions affected by tourism and bottle waste.
    <br /><br />

    The project aims to educate and involve local communities in bottle construction, encouraging them to collect materials and help build sustainable sanitation spaces.
    <br /><br />

    Community involvement creates a stronger sense of ownership and responsibility, helping ensure the structures are maintained and used effectively.
  </>
),    gallery: [
      PublicBottleToilet01,
      PublicBottleToilet02,
      PublicBottleToilet03
    ]
  },
  {
    id: 'ARC-05',
    title: 'The Courtyard House',
    category: '01.ARCHITECTURE',
    location: 'Residential Suburb',
    image: TheCourtyardHouse01,
    desc: 'Breathable interiors centered around a glass-lit courtyard.',
    details: 'Incorporates traditional Pataal stone slate roofing to balance contemporary living with cultural heritage for a family of five.',
    gallery: [
     
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070'
    ]
  },
  {
    id: 'ARC-06',
    title: 'Mediterranean Hotel',
    category: '01.ARCHITECTURE',
    location: 'Pauri Garhwal',
    image: MediterraneanHotel01,
    desc: 'Coastal aesthetics adapted to Himalayan terrain.',
    details: 'Features whitewashed facades and terracotta roofing. Functions as a luxury escape and a community space for local gatherings.',
    gallery: [
      MediterraneanHotel01,
      MediterraneanHotel02,
      MediterraneanHotel03
    ]
  },
  {
    id: 'ARC-07',
    title: 'Forest Hostel Unit',
    category: '01.ARCHITECTURE',
    location: 'Assam Forest',
    image: ForestHostelUnit01,
    desc: 'Biomimicry design inspired by the natural movement of water.',
    details: 'The roof is shaped like interconnected leaves that collect and direct rainwater into a storage tank for drinking and sanitation.',
    gallery: [
      ForestHostelUnit01,
      ForestHostelUnit02,
      ForestHostelUnit03
    ]
  },
  {
    id: 'PROD-01',
    title: 'Gourmet Chocolate Box',
    category: '02.PRODUCTS',
    location: 'Studio',
    image: Gourmetchocolatebox,
    desc: 'Halloween packaging reimagined through Art Nouveau curves.',
    details: 'This project proposes a limited edition packaging design that reimagines the commercial aesthetic of Halloween. Moving away from traditional cartoonish tropes, this design seeks to bring a sense of sophistication, organic flow, and "dark romance" to the seasonal shelf.',
    gallery: [
      Gourmetchocolatebox,
      GourmetChocolateBox02,
      GourmetChocolateBox03
    ]
  },
  {
    id: 'PROD-02',
    title: 'Poki the Robo',
    category: '02.PRODUCTS',
    location: 'Studio',
    image: Rendered,
    desc: 'Interactive modular STEM companion for creative building.',
    details: 'Poki arrives as a friendly, relatable companion, but the real magic begins when you start creating. Its modular parts can be detached, recombined, and transformed into anything from vehicles and creatures to futuristic machines.',
    gallery: [
      Rendered,
      PokiRobo02,
       PokiRobo03
    ]
  },
  {
    id: 'FEST-01',
    title: 'Cultural Preservation Initiative',
    category: '03.MUD & MUSIC FESTIVAL',
    location: 'Uttarakhand',
    image: Mud,
    desc: 'A festival celebrating the traditional music, culture, and architecture of India.',
  details: (
    <>
      Mud and Music Festival is a celebration of Earth, traditional music, and creative expression.
      <br /><br />
      The festival brings together earthen art, mud architecture, handmade instruments, folk traditions, and indigenous rhythms from around the world.
      <br /><br />
      The vision came to life through our 2025 pilot project in Tehri Garhwal, Uttarakhand.
    </>

),    gallery: [
      Mud,
      CulturalInitiative01,
      CulturalInitiative02,
      CulturalInitiative03
    ]
  }
];

const CATEGORIES = ['ALL', '01.ARCHITECTURE', '02.PRODUCTS', '03.MUD & MUSIC FESTIVAL'];

const FullscreenGallery = ({ activeProject, activeImageIndex, onClose, onPrev, onNext, onSelectIndex }) => {
  if (!activeProject) return null;

  const currentGallery = activeProject.gallery && activeProject.gallery.length > 0 
    ? activeProject.gallery 
    : [activeProject.image];

  const currentImage = currentGallery[activeImageIndex] || activeProject.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-10 select-none"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-20">
        <div className="flex items-center gap-6">
          <div className="bg-white/10 px-4 py-2 rounded-full border border-white/10 flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 font-bold">
              {activeProject.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white text-xs font-serif">{activeProject.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-stone-400 font-mono text-xs tracking-widest">
            <MapPin size={12} className="text-orange-500" />
            <span>{activeProject.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-stone-400 tracking-widest">
            <span className="text-white font-bold">{activeImageIndex + 1}</span> / {currentGallery.length}
          </span>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-orange-600 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 shadow-xl"
            aria-label="Close Fullscreen View"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main View Area with Floating Chevron Buttons */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* On-screen floating chevron left arrow */}
        {currentGallery.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 md:left-6 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-orange-600 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 shadow-2xl"
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Animated Image View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeProject.id}-${activeImageIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[90vw] max-h-[72vh] md:max-h-[78vh] flex items-center justify-center rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-stone-900"
          >
            <img
              src={currentImage}
              alt={`${activeProject.title} view ${activeImageIndex + 1}`}
              className="w-full h-full object-contain max-h-[72vh] md:max-h-[78vh]"
            />
          </motion.div>
        </AnimatePresence>

        {/* On-screen floating chevron right arrow */}
        {currentGallery.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 md:right-6 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/60 hover:bg-orange-600 border border-white/15 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-110 shadow-2xl"
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip and Live Preview Dots */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 z-20 border-t border-white/10 pt-4">
        <p className="text-stone-400 font-serif italic text-xs md:text-sm max-w-xl text-center sm:text-left line-clamp-2">
          "{activeProject.desc}"
        </p>

        <div className="flex items-center gap-6">
          {/* Live Preview Dots */}
          {currentGallery.length > 1 && (
            <div className="flex items-center gap-2">
              {currentGallery.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={() => onSelectIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeImageIndex === idx 
                      ? 'w-6 bg-orange-500' 
                      : 'w-2 bg-white/30 hover:bg-white/70'
                  }`}
                  aria-label={`Jump to photo ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Thumbnail Strip */}
          {currentGallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
              {currentGallery.map((thumb, idx) => (
                <button
                  key={`thumb-${idx}`}
                  onClick={() => onSelectIndex(idx)}
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx 
                      ? 'border-orange-600 scale-105 shadow-lg' 
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectItem = React.forwardRef(({ project, onOpenGallery }, ref) => {
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
        {/* Project Thumbnail Frame - Clickable to launch Fullscreen Lightbox */}
        <div 
          onClick={() => onOpenGallery(project, 0)}
          className="relative overflow-hidden rounded-[2rem] bg-stone-200 dark:bg-stone-800 aspect-[1.4/1] mb-8 cursor-pointer"
        >
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
            <div className="w-11 h-11 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
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
          
          <h3 
            onClick={() => onOpenGallery(project, 0)}
            className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-4 group-hover:text-orange-600 transition-colors leading-[1.1] tracking-tight cursor-pointer"
          >
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

      {/* Action Footer Buttons */}
      <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-800 pt-4 mt-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[10px] uppercase font-black tracking-[0.3em] text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-3"
        >
          <div className="w-7 h-7 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center text-stone-500">
            {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
          </div>
          {isExpanded ? 'Fold Narrative' : 'Process Details'}
        </button>

        <button 
          onClick={() => onOpenGallery(project, 0)}
          className="text-[10px] uppercase font-black tracking-[0.3em] text-orange-600 hover:text-stone-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Full View</span>
          <Maximize2 size={12} />
        </button>
      </div>
    </motion.div>
  );
});

ProjectItem.displayName = "ProjectItem";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const scrollContainerRef = useRef(null);

  // Lightbox Modal State
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    project: null,
    imageIndex: 0
  });

  const filteredProjects = activeFilter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  const handleOpenGallery = (project, startIndex = 0) => {
    setGalleryModal({
      isOpen: true,
      project: project,
      imageIndex: startIndex
    });
  };

  const handleCloseGallery = () => {
    setGalleryModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleNextImage = useCallback(() => {
    if (!galleryModal.project) return;
    const gallery = galleryModal.project.gallery || [galleryModal.project.image];
    setGalleryModal(prev => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % gallery.length
    }));
  }, [galleryModal.project]);

  const handlePrevImage = useCallback(() => {
    if (!galleryModal.project) return;
    const gallery = galleryModal.project.gallery || [galleryModal.project.image];
    setGalleryModal(prev => ({
      ...prev,
      imageIndex: (prev.imageIndex - 1 + gallery.length) % gallery.length
    }));
  }, [galleryModal.project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!galleryModal.isOpen) return;
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'Escape') handleCloseGallery();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryModal.isOpen, handleNextImage, handlePrevImage]);

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
                <ProjectItem 
                  key={project.id} 
                  project={project} 
                  onOpenGallery={handleOpenGallery}
                />
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

        {/* Lightbox Modal Mounted via AnimatePresence */}
        <AnimatePresence>
          {galleryModal.isOpen && (
            <FullscreenGallery
              activeProject={galleryModal.project}
              activeImageIndex={galleryModal.imageIndex}
              onClose={handleCloseGallery}
              onPrev={handlePrevImage}
              onNext={handleNextImage}
              onSelectIndex={(index) => setGalleryModal(prev => ({ ...prev, imageIndex: index }))}
            />
          )}
        </AnimatePresence>

      </div>

      <Footer/>
    </>
  );
};

export default Portfolio;
export const AboutPage = Portfolio;