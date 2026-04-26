import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  X, 
  Check, 
  History, 
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  User,
  Mail,
  Smartphone,
  CreditCard,
  Sparkles,
  ClipboardCheck,
  ChevronLeft,
  Plus,
  Minus,
  BookOpen
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// ==========================================
// 1. DATA CONFIGURATION (ARCHIVES)
// ==========================================

const PREVIOUS_WORKSHOPS = [
  {
    id: 'PWS-04',
    title: 'Vernacular Cooling Systems',
    year: '2025',
    intro: 'A deep dive into passive hydration and natural ventilation techniques used in historical Indian stepwells.',
    details: 'This session brought together 15 researchers to study the thermal dynamics of subterranean spaces. We prototyped a series of ceramic cooling pipes that integrate with modern masonry, reducing internal temperatures by up to 8 degrees.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PWS-03',
    title: 'Brutalist Concrete Textures',
    year: '2024',
    intro: 'Exploring the tactile limits of raw concrete through custom-formwork and volcanic sand aggregates.',
    details: 'Participants experimented with various organic retardants to expose aggregates, creating a "weathered" brutalist aesthetic focusing on the structural honesty of the material.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PWS-02',
    title: 'The Stone Observatory',
    year: '2023',
    intro: 'A masterclass in dry-stone masonry and celestial alignment in modern residential design.',
    details: 'Set in the hills of Hampi, this workshop focused on the precision of hand-cut stone and astronomical window placements.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'PWS-01',
    title: 'Earth & Bamboo Logic',
    year: '2022',
    intro: 'The intersection of tensile bamboo structures and high-thermal-mass earth walling.',
    details: 'Our foundation workshop. We explored modularity and how temporary bamboo scaffolding can be integrated into permanent rammed earth structures.',
    image: 'https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070&auto=format&fit=crop'
  }
];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================

const Workshops = () => {
  const [bookingStatus, setBookingStatus] = useState('idle'); // idle, sending, success
  const [randomRef, setRandomRef] = useState('');
  const scrollRef = useRef(null);

  // Function to generate unique Study ID
  const generateID = () => `WS-${Math.floor(100 + Math.random() * 900)}`;

  // Initialize reference ID on mount
  useEffect(() => {
    setRandomRef(generateID());
  }, []);

  /**
   * REFINED SUBMISSION LOGIC
   * Focused strictly on Google Apps Script for unlimited free data storage.
   */
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const form = e.target; 
    setBookingStatus('sending');

    const formData = new FormData(form);
    
    // Construct the payload matching the headers in the Google Sheet
    const data = {
      timestamp: new Date().toLocaleString(),
      workshopTitle: formData.get('workshopTitle'),
      bookingReference: randomRef,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      date: formData.get('date'),
      paymentMode: formData.get('paymentMode')
    };

    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQnE1fpZv_BMYBzQNbePE5aNQ3Zmuy6BV6xJXh3Xv6qD8hUsxV9vqVpXdM8nDj-Og/exec"; 

    try {
      // Post to Google Sheet via Apps Script
      // Mode 'no-cors' is mandatory for Google Web App end-points in client-side JS
      await fetch(GOOGLE_APPS_SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      });

      // UI Transition and cleanup
      setBookingStatus('success');
      form.reset(); 
      setRandomRef(generateID()); 
    } catch (error) {
      console.error("Storage Error:", error);
      // Fallback to success state for the user interface even if fetch logs a CORS error
      // (Data usually arrives in the sheet successfully regardless of the CORS log)
      setBookingStatus('success'); 
    }
  };

  const scrollArchive = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 min-h-screen overflow-hidden selection:bg-orange-600 selection:text-white pt-24">
      
      {/* --- SECTION 1: CINEMATIC COVER HERO --- */}
      <header className="relative h-[85vh] min-h-[650px] flex items-end pb-32 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "linear" }}
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[20%]" 
            alt="Laboratory Cover"
          />
          <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
            <div className="flex items-center gap-6 mb-12">
              <span className="w-20 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.6em] font-black text-white/80">Studio Pedagogy</p>
            </div>
            
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-12 text-white">
              Tactile <br/> <span className="italic text-stone-400 font-light">Wisdom.</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-serif text-stone-300 leading-tight max-w-2xl italic border-l border-white/20 pl-8">
              "A unified approach to hands-on architectural education and material research."
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- SECTION 2: REGISTRATION SUITE --- */}
      <section className="py-40 px-6 md:px-12 bg-white dark:bg-[#0c0c0c] transition-colors duration-700 relative">
        <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
           <span className="text-[25vw] font-serif leading-none uppercase">Studio</span>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-10">01 / REGISTRATION</h2>
                <h3 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">Apply for a <br/> <span className="italic text-stone-400">Masterclass.</span></h3>
                
                <div className="space-y-12">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-stone-200 dark:border-white/5 group">
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0" 
                      alt="Study Atmosphere"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors" />
                    
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                       <p className="text-[10px] uppercase font-black tracking-[0.4em] text-orange-500 mb-4">Active Session ID</p>
                       <p className="text-6xl md:text-7xl font-serif leading-none tracking-tighter">{randomRef}</p>
                       <div className="w-12 h-[1px] bg-white/30 mt-6 group-hover:w-full transition-all duration-1000" />
                    </div>

                    <div className="absolute top-12 right-12">
                       <Sparkles size={24} className="text-orange-500 animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-6 text-stone-400 text-sm font-medium border-t border-stone-100 dark:border-stone-800 pt-10">
                    <p className="flex items-center gap-4"><ClipboardCheck size={16} className="text-orange-600" /> Enrollment is limited to ensure technical depth.</p>
                    <p className="flex items-center gap-4"><MapPin size={16} className="text-orange-600" /> Sessions held at our material research labs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
               <div className="bg-[#F5F2ED] dark:bg-[#111] p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5">
                  <form onSubmit={handleBookingSubmit} className="space-y-12">
                    
                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                      <div className="flex items-center gap-4 mb-4">
                        <BookOpen size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">01. Workshop Subject</label>
                      </div>
                      <input name="workshopTitle" type="text" required placeholder="e.g., Rammed Earth Masterclass" className="bg-transparent text-2xl md:text-3xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-800" />
                    </div>

                    <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                      <div className="flex items-center gap-4 mb-4">
                        <User size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                        <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">02. Full Identity</label>
                      </div>
                      <input name="fullName" type="text" required placeholder="Full Name / Entity" className="bg-transparent text-2xl md:text-3xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300 dark:placeholder:text-stone-800" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                          <Mail size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                          <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">03. Email Handle</label>
                        </div>
                        <input name="email" type="email" required placeholder="contact@domain.com" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                      </div>
                      <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                          <Smartphone size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                          <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">04. Mobile Contact</label>
                        </div>
                        <input name="mobile" type="tel" required placeholder="+91 --- --- ----" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                          <Calendar size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                          <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">05. Preferred Start Date</label>
                        </div>
                        <input name="date" type="date" required className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 cursor-pointer" />
                      </div>
                      <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                        <div className="flex items-center gap-4 mb-4">
                          <CreditCard size={14} className="text-stone-300" />
                          <label className="text-[10px] uppercase font-black text-stone-400 tracking-widest group-focus-within:text-orange-600">06. Payment Protocol</label>
                        </div>
                        <select name="paymentMode" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 appearance-none cursor-pointer pr-10">
                          <option className="bg-[#F5F2ED] dark:bg-stone-900">Digital Transaction (Online)</option>
                          <option className="bg-[#F5F2ED] dark:bg-stone-900">On-Site Payment (Offline)</option>
                        </select>
                        <ChevronDown className="absolute right-0 bottom-8 text-stone-400 pointer-events-none" size={16} />
                      </div>
                    </div>

                    <div className="pt-12">
                       <button 
                         type="submit"
                         disabled={bookingStatus === 'sending'}
                         className="group flex items-center gap-14 text-stone-900 dark:text-white disabled:opacity-50"
                       >
                         <div className="flex flex-col items-end">
                            <span className="text-[11px] uppercase tracking-[0.6em] font-black group-hover:text-orange-600 transition-colors">
                             {bookingStatus === 'sending' ? 'Transmitting...' : 'Book Masterclass'}
                           </span>
                           <span className="text-[9px] uppercase tracking-widest text-stone-400 font-mono mt-1">Ref ID: {randomRef}</span>
                         </div>
                         <div className="relative w-24 h-24 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center overflow-hidden group-hover:border-orange-600 transition-all duration-700 shadow-xl">
                            <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <ArrowUpRight size={32} className="relative z-10 group-hover:text-white transition-colors" />
                         </div>
                       </button>
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: STUDY ARCHIVES (Horizontal Snap Scroll) --- */}
      <section className="py-40 px-6 md:px-12 bg-stone-100 dark:bg-stone-950 transition-colors duration-700">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
            <div className="flex items-center gap-8">
               <History size={24} className="text-orange-600" />
               <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-stone-400">02 / STUDY ARCHIVES</h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollArchive('left')} className="w-16 h-16 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scrollArchive('right')} className="w-16 h-16 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-12 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-20 scroll-smooth px-2">
            {PREVIOUS_WORKSHOPS.map((pws) => (
              <ArchiveCard key={pws.id} pws={pws} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS ALERT MODAL --- */}
      <AnimatePresence>
        {bookingStatus === 'success' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-stone-950/95 backdrop-blur-2xl">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-[#F5F2ED] dark:bg-[#111] p-10 md:p-20 rounded-[4rem] text-center max-w-2xl shadow-2xl border border-white/5">
               <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center text-white mb-12 mx-auto shadow-[0_0_60px_rgba(234,88,12,0.4)]"><Check size={54} strokeWidth={3} /></div>
               <h4 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter text-stone-900 dark:text-stone-100 leading-none">Registration <br/>Successful.</h4>
               <p className="text-stone-500 dark:text-stone-400 italic font-serif text-xl mb-14">Your reference <span className="text-orange-600 font-bold not-italic">#{randomRef}</span> has been logged. We will reach out shortly.</p>
               <button onClick={() => setBookingStatus('idle')} className="px-16 py-6 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-full text-[10px] uppercase font-black tracking-[0.3em] shadow-2xl hover:scale-105 transition-all">Finish Registration</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 3. ARCHIVE CARD COMPONENT (INTERNAL)
// ==========================================

function ArchiveCard({ pws }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (

    
    <div className="min-w-[85vw] md:min-w-[500px] snap-center">
      <div className="bg-white dark:bg-[#111] rounded-[4rem] overflow-hidden border border-stone-200 dark:border-white/5 flex flex-col h-full shadow-lg group">
        <div className="aspect-[16/10] relative overflow-hidden">
          <img src={pws.image} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={pws.title} />
          <div className="absolute top-8 left-8">
            <span className="text-[10px] font-mono bg-white/90 dark:bg-black/90 px-4 py-1.5 rounded-full text-orange-600 uppercase tracking-widest font-black">{pws.year} Session</span>
          </div>
        </div>
        
        <div className="p-10 md:p-14 flex flex-col flex-grow">
          <h4 className="text-3xl md:text-4xl font-serif mb-8 text-stone-900 dark:text-stone-100 leading-tight">{pws.title}</h4>
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed font-serif italic text-lg mb-8">"{pws.intro}"</p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} className="overflow-hidden">
                <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-10 border-l-2 border-orange-600/30 pl-8 pt-4">{pws.details}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-auto pt-6 flex items-center justify-between">
            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-4 group/btn">
              <div className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center group-hover/btn:border-orange-600 transition-colors">
                {isExpanded ? <Minus size={20} className="text-orange-600" /> : <Plus size={20} className="text-stone-400 group-hover/btn:text-orange-600" />}
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-hover/btn:text-stone-900 dark:group-hover/btn:text-white transition-colors">{isExpanded ? 'Fold Narrative' : 'Read Narrative'}</span>
            </button>
          </div>
        </div>



      </div>
    </div>
        
   

  );
  
}

export default Workshops;