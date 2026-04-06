import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Globe,
  MessageSquare,
  ArrowRight,
  Plus
} from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate high-end transmission delay
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen overflow-hidden">
      
      {/* --- SECTION 1: CINEMATIC COVER HERO --- */}
      <header className="relative h-screen min-h-[750px] flex items-end pb-32 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Studio Contact Foundation"
          />
          <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-6 mb-12">
              <span className="w-16 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Collaborative Dialogue</p>
            </div>
            
            <h1 className="text-[14vw] md:text-[8rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-12 text-white">
              Initiate the <br/> <span className="italic text-stone-400 font-light">Conversation.</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-serif text-stone-300 leading-tight max-w-3xl italic">
              "Every built legacy begins with a single moment of shared intent. Let's define your spatial future."
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- SECTION 2: INSTITUTIONAL INFO GRID --- */}
      <section className="py-40 px-6 md:px-12 relative">
        {/* Decorative Background Number */}
        <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
           <span className="text-[25vw] font-serif leading-none">01</span>
        </div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-24 items-start relative z-10">
          
          {/* Left Column: Studio Directory */}
          <div className="lg:col-span-5 space-y-24">
            
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600 mb-10 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-orange-600"></span> Primary Inquiry
              </h2>
              <a href="mailto:hello@studioarc.com" className="text-4xl md:text-5xl lg:text-6xl font-serif hover:text-orange-600 transition-colors border-b border-stone-200 dark:border-stone-800 pb-4 block">
                hello@studioarc.com
              </a>
              <div className="flex items-center gap-12 mt-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-stone-400">Direct Line</span>
                  <p className="text-xl font-serif">+91 98765 43210</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-stone-400">Availability</span>
                  <p className="text-xl font-serif italic text-orange-600">Mon — Fri</p>
                </div>
              </div>
            </div>

            <div className="p-12 bg-white dark:bg-stone-900/30 rounded-[3rem] border border-stone-200 dark:border-stone-800 shadow-xl">
               <div className="flex items-center gap-4 mb-8">
                  <Clock size={18} className="text-stone-400" />
                  <span className="text-[10px] uppercase tracking-widest font-black">Institutional Hours</span>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
                    <span className="text-sm text-stone-500">Kochi Studio</span>
                    <span className="font-serif">09:00 - 18:00 IST</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
                    <span className="text-sm text-stone-500">Auroville Lab</span>
                    <span className="font-serif">10:00 - 17:00 IST</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-sm text-stone-500">Weekends</span>
                    <span className="font-serif italic text-stone-400">By Exclusive Appt.</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Narrative Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#111] p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-stone-100 dark:border-white/5 relative overflow-hidden">
              <h2 className="text-5xl md:text-7xl font-serif mb-16 leading-tight">Tell us about <br/><span className="italic text-stone-400">the vision.</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest font-black text-stone-400 group-focus-within:text-orange-600 transition-colors">Full Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-6 outline-none focus:border-orange-600 transition-colors font-serif text-2xl" placeholder="A. Architect" />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] uppercase tracking-widest font-black text-stone-400 group-focus-within:text-orange-600 transition-colors">Email Address</label>
                    <input type="email" required className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-6 outline-none focus:border-orange-600 transition-colors font-serif text-2xl" placeholder="contact@domain.com" />
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest font-black text-stone-400 group-focus-within:text-orange-600 transition-colors">Inquiry Focus</label>
                  <select className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-6 outline-none focus:border-orange-600 transition-colors font-serif text-2xl appearance-none cursor-pointer">
                    <option>Residential Sanctuary</option>
                    <option>Institutional Design</option>
                    <option>Sustainable Consulting</option>
                    <option>Press & Exhibition</option>
                  </select>
                </div>

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-widest font-black text-stone-400 group-focus-within:text-orange-600 transition-colors">Your Message</label>
                  <textarea rows="4" required className="w-full bg-transparent border-b border-stone-200 dark:border-stone-800 py-6 outline-none focus:border-orange-600 transition-colors font-serif text-2xl resize-none" placeholder="Briefly describe the site and scope..." />
                </div>

                <button 
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="group/btn relative w-full md:w-auto px-16 py-8 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-full font-black uppercase text-xs tracking-widest overflow-hidden transition-all disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-6">
                    {formState === 'idle' && (
                      <>Transmitting Intent <ArrowRight size={20} className="text-orange-600 group-hover/btn:translate-x-2 transition-transform" /></>
                    )}
                    {formState === 'sending' && "Processing..."}
                    {formState === 'success' && "Sent"}
                  </span>
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </button>
              </form>

              {/* Success Overlay */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-orange-600 flex flex-col items-center justify-center text-white text-center p-12 z-20"
                  >
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-10"
                    >
                       <MessageSquare size={40} />
                    </motion.div>
                    <h3 className="text-5xl md:text-7xl font-serif mb-6 tracking-tighter leading-none">Inquiry <br/> Logged.</h3>
                    <p className="text-white/80 text-lg max-w-xs mb-12 font-serif italic">We will respond within 48 studio hours.</p>
                    <button onClick={() => setFormState('idle')} className="group flex items-center gap-4 text-[10px] uppercase tracking-widest font-black border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all">
                      Log another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: GLOBAL FOOTPRINT --- */}
      <section className="py-40 px-6 md:px-12 bg-white dark:bg-stone-900/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 mb-8">Physical Presence</h2>
              <h3 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">Two Studios. <br/> <span className="italic text-stone-400">One Vision.</span></h3>
            </div>
            <p className="text-xl font-serif italic text-stone-400 max-w-xs md:text-right">Architecture rooted in regional intelligence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                city: 'Kochi, KL', 
                name: 'The Heritage Studio', 
                img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
                addr: '124 Old Port Road, Kochi 682001'
              },
              { 
                city: 'Auroville, TN', 
                name: 'The Earth Outpost', 
                img: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070',
                addr: 'Earth Institute, Township 605101'
              }
            ].map((loc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 shadow-2xl relative">
                  <img src={loc.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" alt={loc.city} />
                  <div className="absolute inset-0 bg-stone-950/20" />
                  <div className="absolute top-10 left-10">
                    <span className="text-[10px] font-mono bg-white/90 dark:bg-black/90 px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 uppercase tracking-widest text-stone-500">
                      Studio 0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start px-4">
                  <div>
                    <h4 className="text-4xl font-serif mb-2">{loc.name}</h4>
                    <p className="text-sm font-mono text-stone-400">{loc.addr}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-400 group-hover:bg-stone-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                    <MapPin size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SOCIAL DIRECTORY --- */}
      <section className="py-32 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
             <div className="flex gap-16 text-[10px] uppercase tracking-[0.4em] font-black text-stone-400">
                <a href="#" className="hover:text-orange-600 transition-colors flex items-center gap-3">Instagram <ArrowUpRight size={14} /></a>
                <a href="#" className="hover:text-orange-600 transition-colors flex items-center gap-3">LinkedIn <ArrowUpRight size={14} /></a>
                <a href="#" className="hover:text-orange-600 transition-colors flex items-center gap-3">Behance <ArrowUpRight size={14} /></a>
             </div>
             <p className="text-[11px] uppercase tracking-[0.5em] font-black text-stone-400 underline underline-offset-8">Studio Arc — Spatial Storytelling Collective</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;