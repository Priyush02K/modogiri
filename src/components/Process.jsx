import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, PenTool, Leaf, Hammer, ArrowRight } from 'lucide-react';
import Phase1 from "../assets/phase1.jpg"
import Phase2 from "../assets/phase2.jpg"
import Phase3 from "../assets/phase3.jpg"
import Phase4 from "../assets/phase4.jpg"

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Site & Context Analysis',
    desc: 'Every project begins by listening to the land. We study the topography, solar pathways, and local climate to ensure the architecture responds organically to its environment rather than dominating it.',
    image: Phase1,
    icon: <Compass size={20} />
  },
  {
    id: '02',
    title: 'Conceptual Blueprinting',
    desc: 'We translate environmental data into spatial poetry. Through rigorous 3D modeling and hand-drawn sketches, we refine the brutalist forms, light wells, and the functional flow of the space.',
    image: Phase2,
    icon: <PenTool size={20} />
  },
  {
    id: '03',
    title: 'Sustainable Sourcing',
    desc: 'Our material lab procures local, zero-carbon elements. From compressed stabilized earth blocks (CSEB) to reclaimed timber and bamboo, we ensure every texture tells a story of ecological responsibility.',
    image: Phase3,
    icon: <Leaf size={20} />
  },
  {
    id: '04',
    title: 'Construction & Realization',
    desc: 'Our master craftsmen and engineers bring the vision out of the dirt. We oversee every poured concrete wall and rammed earth pillar, ensuring the final structure matches the absolute precision of the blueprint.',
    image: Phase4,
    icon: <Hammer size={20} />
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play logic: cycles through steps every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === PROCESS_STEPS.length - 1 ? 0 : prev + 1));
    }, 5000); 
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle user click: set the step and stop auto-playing so they can read in peace
  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FFFAF5] dark:bg-[#0a0a0a] transition-colors duration-500 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black dark:text-white leading-[1.1]">
              From raw concept <br className="hidden md:block"/>
              <span className="italic text-gray-400 dark:text-gray-500 font-light">to lived reality.</span>
            </h2>
          </div>
        </div>

        {/* --- Interactive Layout Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Accordion Steps */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`group relative pl-6 md:pl-8 py-2 md:py-4 border-l-2 cursor-pointer transition-all duration-500 ${
                    isActive 
                      ? 'border-orange-600' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                  }`}
                >
                  {/* Step Title & Icon */}
                  <div className={`flex items-center gap-4 transition-colors duration-500 ${isActive ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400'}`}>
                    <span className="font-mono text-xs font-bold shrink-0">{step.id}</span>
                    <h3 className="text-2xl md:text-3xl font-serif">
                      {step.title}
                    </h3>
                  </div>

                  {/* Expanding Description (Framer Motion) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 max-w-md">
                          {step.desc}
                        </p>
                        <div className="flex items-center gap-3 text-orange-600 dark:text-orange-500">
                          <span className="p-2 rounded-full bg-orange-100 dark:bg-orange-500/10">
                            {step.icon}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                            Phase {step.id}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Dynamic Image Showcase */}
          <div className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[650px] w-full rounded-2xl overflow-hidden order-1 lg:order-2 shadow-2xl bg-gray-200 dark:bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={PROCESS_STEPS[activeStep].image} 
                  alt={PROCESS_STEPS[activeStep].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Subtle Image Tag */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-white/50"></span>
                  <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold drop-shadow-md">
                    Studio Archive — {PROCESS_STEPS[activeStep].id}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;