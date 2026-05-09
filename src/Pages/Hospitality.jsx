import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Leaf, 
  Map, 
  MessageSquare, 
  ArrowUpRight,
  Plus, 
  Minus, 
  HelpCircle, 
  Hotel, 
  Utensils, 
  TreePine,
  MapPin,
  Mountain,
  Clock,
  Wind,
  History,
  Sun,
  Link
} from 'lucide-react';
import Footer from "../components/Footer";

// ==========================================
// 1. DATA CONFIGURATION
// ==========================================

const HOSPITALITY_SERVICES = [
  {
    id: 'H1',
    title: 'Eco-Resorts & Retreats',
    desc: 'Large-scale master planning for wellness destinations rooted in deep ecology.',
    icon: <TreePine size={24} />
  },
  {
    id: 'H2',
    title: 'Boutique Homestays',
    desc: 'Intimate residential conversions that celebrate local heritage and slow living.',
    icon: <Hotel size={24} />
  },
  {
    id: 'H3',
    title: 'Concept Dining',
    desc: 'Atmospheric restaurants and cafes where the architecture elevates the culinary journey.',
    icon: <Utensils size={24} />
  }
];

const HOSPITALITY_FAQ = [
  {
    question: "How do you balance sustainability with luxury guest expectations?",
    answer: "We define luxury through 'Haptic Quality'—the feel of hand-polished lime, the scent of reclaimed timber, and the comfort of natural thermal mass. True luxury in hospitality is the feeling of being perfectly synchronized with the local environment."
  },
  {
    question: "Do you handle the interior design and furniture as well?",
    answer: "Yes. For hospitality projects, we highly recommend an end-to-end approach including our bespoke 'Jali Collection' furniture to ensure the architectural narrative flows seamlessly into the guest experience."
  },
  {
    question: "Can you work with existing heritage structures?",
    answer: "Absolutely. Our expertise in vernacular styles like Koti Banal allows us to retrofit and preserve 50+ year old structures while integrating modern comforts without damaging the ancestral soul of the building."
  }
];

// ==========================================
// 2. MAIN COMPONENT (Hospitality)
// ==========================================

const Hospitality = () => {
  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 min-h-screen pt-24 overflow-hidden selection:bg-orange-600 selection:text-white">
      
      {/* --- SECTION 1: HERO --- */}
      <header className="relative h-[85vh] min-h-[650px] flex items-end pb-32 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "linear" }}
            src="https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[20%]" 
            alt="Himalayan Architecture"
          />
          <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
            <div className="flex items-center gap-6 mb-12">
              <span className="w-16 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Experience Design</p>
            </div>
            <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-8 text-white">
              Sacred <br/> <span className="italic text-stone-400 font-light">Leisure.</span>
            </h1>
            <p className="text-xl md:text-3xl font-serif text-stone-300 italic max-w-2xl leading-tight">
              "We don't build hotels. We create sanctuaries where the environment is the primary amenity."
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- SECTION 2: THE PHILOSOPHY --- */}
      <section className="py-40 px-6 md:px-12 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-[1400px] mx-auto text-center">
           <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600 mb-10">The Narrative of Stay</h2>
           <h3 className="text-4xl md:text-7xl font-serif mb-12 leading-[1.1] tracking-tight max-w-4xl mx-auto">Designing for <span className="italic text-stone-400">Belonging.</span></h3>
           <div className="grid md:grid-cols-3 gap-12 mt-24">
              {HOSPITALITY_SERVICES.map((s) => (
                <div key={s.id} className="text-left p-10 bg-white dark:bg-stone-900/40 border border-stone-100 dark:border-white/5 rounded-[3rem] group hover:border-orange-600/30 transition-all shadow-sm">
                   <div className="w-14 h-14 rounded-2xl bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                      {s.icon}
                   </div>
                   <h4 className="text-2xl font-serif mb-4">{s.title}</h4>
                   <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SECTION 3: APPLES & GULAAB (LIVING HERITAGE) --- */}
      <section className="py-40 px-6 md:px-12 bg-white dark:bg-[#0c0c0c] transition-colors duration-700 relative overflow-hidden">
        {/* Large Background Text */}
        <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
           <span className="text-[25vw] font-serif leading-none uppercase">Dharali</span>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group bg-stone-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" 
                  alt="Apples & Gulaab House" 
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-1000" />
                
                {/* Floating Badge */}
                <div className="absolute top-12 left-12">
                   <div className="bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl px-6 py-3 rounded-full border border-black/5 dark:border-white/10 flex items-center gap-4">
                      <History size={16} className="text-orange-600" />
                      <span className="text-[10px] uppercase font-black tracking-widest text-stone-500">Living Heritage</span>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <MapPin size={18} className="text-orange-600" />
                  <p className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400">Harshil Valley, Uttarakhand</p>
                </div>

                <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12 tracking-tight text-stone-900 dark:text-stone-100">
                  Apples & Gulaab: <br/> <span className="italic text-stone-400">A Living Heritage.</span>
                </h3>

                <div className="space-y-8 text-xl md:text-2xl font-serif text-stone-500 dark:text-stone-400 italic leading-relaxed border-l-2 border-orange-600/30 pl-10 mb-16">
                   <p>
                    "Nestled in the breathtaking Harshil Valley, within the serene embrace of Dharali Village, stands our home—a 40-year-old sanctuary built of mud, stone, and wood."
                   </p>
                   <p className="text-base not-italic font-sans font-medium text-stone-400 leading-relaxed">
                    Surrounded by lush apple orchards, this house is more than just a shelter; it is a preservation of memory. We invite you to experience the timeless wisdom of the <span className="text-stone-900 dark:text-white underline underline-offset-4 decoration-orange-600/40">Koti Banal style</span> of architecture.
                   </p>
                </div>

                {/* Heritage Spec Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-10 border-y border-stone-100 dark:border-stone-900">
                   <div>
                      <p className="text-[9px] uppercase font-black text-orange-600 mb-2 tracking-widest">Chronology</p>
                      <p className="text-sm font-serif">40 Years Old</p>
                   </div>
                   <div>
                      <p className="text-[9px] uppercase font-black text-orange-600 mb-2 tracking-widest">Materiality</p>
                      <p className="text-sm font-serif">Deodar Wood</p>
                   </div>
                   <div>
                      <p className="text-[9px] uppercase font-black text-orange-600 mb-2 tracking-widest">Regulation</p>
                      <p className="text-sm font-serif">Self-Insulating</p>
                   </div>
                   <div>
                      <p className="text-[9px] uppercase font-black text-orange-600 mb-2 tracking-widest">Energy</p>
                      <p className="text-sm font-serif">Net Zero</p>
                   </div>
                </div>

                <div className="space-y-8 text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                   <p>
                    Designed for those who truly appreciate vernacular craft, our home is a testament to ancestral knowledge. Built with humility and deep respect for the Himalayas, the structure is a masterclass in natural insulation. 
                   </p>
                   <p className="flex items-center gap-4 text-stone-900 dark:text-white font-bold">
                    <Sun size={20} className="text-orange-600" />
                    Cool in the summer, warm in the winter—without artificial heating.
                   </p>
                   <p>
                    Here, you can disconnect from the modern world and reconnect with the earth. Breathe in the rustic, grounding scent of Deodar wood and absorb the slow, rhythmic pace of the traditional Garhwali lifestyle.
                   </p>
                </div>

                <div className="mt-16">
                  <button className="group flex items-center gap-6 text-stone-900 dark:text-white border-b-2 border-orange-600 pb-3 hover:gap-10 transition-all duration-500">
                    <span className="text-[11px] uppercase font-black tracking-[0.4em]">Inhabit a piece of history</span>
                    <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CONTEXT & CLARITY (FAQ) --- */}
      <section className="py-40 px-6 md:px-12 bg-transparent transition-colors duration-500 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
             <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle size={20} className="text-orange-600" />
                   <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400">Context & Clarity</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-stone-900 dark:text-stone-100">Hospitality <br/><span className="italic text-stone-400">Logistics.</span></h3>
                <p className="text-lg text-stone-500 dark:text-stone-400 font-serif italic max-w-sm border-l-2 border-orange-600/30 pl-8">
                   Understanding our specialized approach to commercial leisure spaces.
                </p>
             </div>
             <div className="lg:col-span-7 flex flex-col gap-4">
                {HOSPITALITY_FAQ.map((faq, idx) => (
                  <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-48 px-6 text-center border-t border-stone-200 dark:border-stone-800">
        <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter">Ready to <br/><span className="italic text-orange-600">Envision?</span></h2>
     <a href="/consultation">  <button className="px-16 py-6 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full text-[10px] uppercase font-black tracking-widest hover:scale-105 transition-all shadow-2xl">
          Start a Consultation
        </button> </a>
      </section>
<Footer />
    </div>
  );
};

// ==========================================
// 3. FAQ ITEM COMPONENT
// ==========================================

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 dark:border-stone-800 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <h4 className={`text-xl md:text-2xl font-serif transition-colors duration-500 ${isOpen ? 'text-orange-600' : 'text-stone-900 dark:text-stone-100 group-hover:text-orange-600'}`}>
          {question}
        </h4>
        <div className={`w-10 h-10 rounded-full border transition-all duration-500 flex items-center justify-center ${isOpen ? 'border-orange-600 bg-orange-600 text-white rotate-180' : 'border-stone-200 dark:border-stone-800 text-stone-400'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="pb-10 text-stone-500 dark:text-stone-400 leading-relaxed text-lg max-w-2xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hospitality;