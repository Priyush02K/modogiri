import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin,
  ArrowUpRight, 
  Quote, 
  Filter, 
  Sparkles, 
  MoveRight, 
  Leaf
} from 'lucide-react';

// ==========================================
// 1. BRANDED PROJECT DATA
// ==========================================

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'The Adobe Sanctuary',
    category: 'Residential',
    location: 'Ladakh, India',
    year: '2023',
    shortDesc: 'A passive-solar residence carved from the very earth it stands upon.',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    client: 'Private Collector',
    timeline: '18 Months',
    challenge: 'Building at 3,500m altitude where temperatures drop to -30°C, requiring zero reliance on fossil fuels for heating.',
    concept: 'Utilizing thermal mass through 600mm thick rammed earth walls and a trombe-wall system to capture high-altitude solar radiation.',
    materials: ['Rammed Earth', 'Reclaimed Pine', 'Local Slate', 'Triple-Glazed Low-E Glass'],
    sustainability: ['Passive Solar Heating', 'Greywater Recycling', 'Zero-KM Material Sourcing'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070'
    ]
  },
  {
    id: 2,
    title: 'Ethos Collective Hub',
    category: 'Commercial',
    location: 'Berlin, Germany',
    year: '2024',
    shortDesc: 'An adaptive-reuse office space fostering radical transparency and human connection.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    featured: false,
    client: 'Ethos Tech Group',
    timeline: '12 Months',
    challenge: 'Converting a 19th-century industrial warehouse into a biophilic workspace that breathes naturally.',
    concept: 'A central "green lung" atrium that regulates air quality and temperature through a specialized vertical forest.',
    materials: ['Exposed Brick', 'Recycled Steel', 'Living Moss Walls', 'Hempcrete Insulation'],
    sustainability: ['Natural Ventilation', 'Daylight Harvesting', 'Embodied Carbon Offset'],
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070'
    ]
  },
  {
    id: 3,
    title: 'The Mangrove Observatory',
    category: 'Research',
    location: 'Sundarbans, India',
    year: '2022',
    shortDesc: 'A low-impact research station floating amidst a fragile tidal ecosystem.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop',
    featured: false,
    client: 'WGE Foundation',
    timeline: '24 Months',
    challenge: 'Creating a durable structure in a highly corrosive saline environment without disturbing mangrove root systems.',
    concept: 'A modular, bamboo-poly-composite structure raised on stilts, mimicking the structural logic of the mangrove tree.',
    materials: ['Engineered Bamboo', 'Glass Fiber Reinforced Polymer', 'Oiled Teak', 'Copper Mesh'],
    sustainability: ['Solar Desalination', 'Bird-Safe Glazing', 'Non-Invasive Foundations'],
    gallery: [
      'https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070'
    ]
  },
  {
    id: 4,
    title: 'Aura Interior Atelier',
    category: 'Interior',
    location: 'Paris, France',
    year: '2023',
    shortDesc: 'Minimalist retail architecture focusing on the haptic quality of surfaces.',
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1974&auto=format&fit=crop',
    featured: false,
    client: 'Aura Couture',
    timeline: '6 Months',
    challenge: 'Creating a high-end luxury feel using only biodegradable and non-toxic interior finishes.',
    concept: 'Monolithic plaster surfaces paired with raw limestone blocks to create a cave-like serenity.',
    materials: ['Lime Plaster', 'Raw Limestone', 'Linen Textiles', 'Vegetable-Tanned Leather'],
    sustainability: ['VOC-Free Environments', 'Modular Fixtures', 'Circular Supply Chain'],
    gallery: [
      'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2070'
    ]
  }
];

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Interior', 'Research', 'Sustainable Design'];

// ==========================================
// 2. MAIN PORTFOLIO COMPONENT
// ==========================================

const Infos = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === activeFilter || (activeFilter === 'Sustainable Design' && p.sustainability.length > 0));
  }, [activeFilter]);

  const featuredProject = PROJECTS_DATA.find(p => p.featured);

  return (
    <div className="relative z-0 top-27 bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen">
      
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div key="index" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            
            {/* --- HERO COVER (FIXED STACKING) --- */}
            <header className="relative z-0 h-[90vh] min-h-[700px] flex items-end pb-32 overflow-hidden">
              <div className="absolute inset-0 z-[-1]">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 15, ease: "linear" }}
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Studio Architecture Cover"
                />
                <div className="absolute inset-0 bg-stone-950/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              </div>

              <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
                  <div className="flex items-center gap-6 mb-12">
                    <span className="w-16 h-[1px] bg-orange-600"></span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Spatial Archive // Vol. 04</span>
                  </div>
                  <h1 className="text-[13vw] md:text-[8rem] lg:text-[11.5rem] font-serif leading-[0.8] tracking-tighter mb-16 text-white">
                    Honest <br/> <span className="italic text-stone-400 font-light">Materials.</span> <br/> Human <span className="text-orange-600">Scale.</span>
                  </h1>
                  <div className="grid lg:grid-cols-12 gap-12 border-t border-white/20 pt-12">
                    <div className="lg:col-span-5">
                      <p className="text-xl md:text-2xl font-serif leading-relaxed text-stone-300">
                        We build for the spirit. A curated dialogue between the raw landscape and the modern inhabitant.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </header>

            {/* --- FEATURED PROJECT --- */}
            <section className="py-40 px-6 md:px-12">
              <div className="max-w-[1400px] mx-auto">
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[85vh] rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
                  onClick={() => setSelectedProject(featuredProject)}
                >
                  <img src={featuredProject.image} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Featured" />
                  <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute bottom-16 left-16 right-16 flex flex-col md:flex-row justify-between items-end text-white">
                    <div className="max-w-2xl">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">Spotlight Narrative</span>
                      <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-none tracking-tighter">{featuredProject.title}</h2>
                      <p className="text-xl opacity-80 leading-relaxed max-w-lg">{featuredProject.shortDesc}</p>
                    </div>
                    <div className="mt-12 md:mt-0 px-12 py-6 border border-white/30 backdrop-blur-xl rounded-full hover:bg-white hover:text-black transition-all group/btn flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-widest font-black">Process Deep-dive</span>
                      <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* --- STICKY FILTER --- */}
            <section className="sticky top-16 md:top-24 z-40 bg-[#F5F2ED]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border-y border-stone-200 dark:border-stone-800 py-8 px-6 md:px-12">
              <div className="max-w-[1400px] mx-auto flex overflow-x-auto no-scrollbar gap-12 items-center">
                <Filter size={16} className="text-orange-600 shrink-0" />
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveFilter(cat)}
                    className={`whitespace-nowrap text-[11px] uppercase tracking-[0.4em] font-black transition-all relative py-2 ${activeFilter === cat ? 'text-orange-600' : 'text-stone-400 hover:text-stone-900 dark:hover:text-white'}`}
                  >
                    {cat}
                    {activeFilter === cat && (
                      <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-600" />
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* --- GRID --- */}
            <section className="py-32 px-6 md:px-12">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
                {filteredProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
                ))}
              </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-48 px-6">
              <div className="max-w-[1400px] mx-auto text-center">
                <h2 className="text-8xl md:text-[11rem] font-serif mb-20 leading-[0.8] tracking-tighter">Initiate Your <br/> <span className="italic text-orange-600">Legacy.</span></h2>
                <button className="group/btn bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 px-16 py-8 rounded-full hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-8">
                  <span className="text-sm uppercase tracking-[0.4em] font-black">Start Your Project</span>
                  <MoveRight size={24} className="group-hover/btn:translate-x-3 transition-transform" />
                </button>
                <p className="mt-12 text-stone-400 text-xs font-mono">Current consultation wait-time: 4 days.</p>
              </div>
            </section>

          </motion.div>
        ) : (
          <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 3. INTERNAL HELPER COMPONENTS
// ==========================================

function ProjectCard({ project, onClick }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 bg-stone-200 dark:bg-stone-900 relative shadow-lg">
        <img src={project.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={project.title} />
        <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12">
          <ArrowUpRight size={24} />
        </div>
      </div>
      <div className="flex justify-between items-start mb-6 px-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] font-black text-orange-600 mb-3">{project.category}</p>
          <h3 className="text-4xl font-serif text-stone-900 dark:text-stone-100 leading-tight group-hover:text-orange-600 transition-colors">{project.title}</h3>
        </div>
        <span className="text-sm font-mono text-stone-400 mt-2">{project.year}</span>
      </div>
      <p className="text-base text-stone-500 dark:text-stone-400 font-medium leading-relaxed px-2 mb-8 line-clamp-2">
        {project.shortDesc}
      </p>
      <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-black text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white transition-all px-2">
        <MapPin size={14} className="text-orange-600" />
        {project.location}
      </div>
    </motion.div>
  );
}

function CaseStudy({ project, onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      key="casestudy"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="bg-[#F5F2ED] dark:bg-[#0a0a0a] min-h-screen pb-40"
    >
      <div className="h-screen relative mb-32 overflow-hidden z-0">
        <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
        <div className="absolute inset-0 bg-stone-950/50" />
        
        {/* Navigation button with high Z-index to ensure it is above fixed navbars if they overlap */}
        <button 
          onClick={onClose}
          className="absolute top-12 left-6 md:left-12 flex items-center gap-6 text-white group z-[60]"
        >
          <div className="w-14 h-14 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={24} />
          </div>
          <span className="text-[11px] uppercase tracking-[0.4em] font-black hidden sm:block">Archive Index</span>
        </button>

        <div className="absolute bottom-24 left-12 right-12 z-10">
          <div className="max-w-[1400px] mx-auto">
             <span className="text-[10px] uppercase tracking-[0.5em] font-black text-orange-600 mb-8 block">Narrative — {project.id}</span>
            <h1 className="text-[12vw] font-serif text-white leading-[0.8] tracking-tighter">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Case Study Details... */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-16 border-l border-stone-200 dark:border-stone-800 pl-12 h-fit">
            <div>
              <p className="text-[11px] uppercase tracking-widest font-black text-orange-600 mb-4">Location</p>
              <p className="text-2xl font-serif">{project.location}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-black text-orange-600 mb-4">Inhabitant</p>
              <p className="text-2xl font-serif">{project.client}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-black text-orange-600 mb-4">Chronology</p>
              <p className="text-2xl font-serif">{project.timeline}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-black text-orange-600 mb-4">Year</p>
              <p className="text-2xl font-serif">{project.year}</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-24">
              <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-12 flex items-center gap-6">
                <span className="w-16 h-[1px] bg-orange-600"></span> The Challenge
              </h2>
              <p className="text-4xl md:text-5xl font-serif text-stone-500 dark:text-stone-400 leading-[1.3] italic">
                "{project.challenge}"
              </p>
            </div>
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-12 flex items-center gap-6">
                <span className="w-16 h-[1px] bg-orange-600"></span> Architectural Response
              </h2>
              <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-16 text-stone-700 dark:text-stone-300">
                {project.concept}
              </p>
            </div>
          </div>
        </div>

        {/* Closing Actions... */}
        <div className="text-center py-40 border-t border-stone-200 dark:border-stone-800">
           <p className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-20 underline underline-offset-8">Conclusion</p>
           <h3 className="text-7xl md:text-[10rem] font-serif mb-24 italic leading-[0.8] tracking-tighter">A dialogue between <br/> stone and <span className="text-orange-600">spirit.</span></h3>
           <button onClick={onClose} className="text-xs uppercase tracking-[0.5em] font-black border-b border-stone-950 dark:border-white pb-3 hover:text-orange-600 hover:border-orange-600 transition-all">
             Back to Index
           </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Infos;