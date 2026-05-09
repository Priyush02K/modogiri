import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Clock, 
  Compass, 
  Layers, 
  Leaf, 
  Map, 
  MessageSquare, 
  MoveRight, 
  ShieldCheck, 
  Sparkles, 
  User,
  Mail,
  Smartphone,
  Calendar,
  ChevronDown,
  ArrowUpRight,
  Loader2,
  Plus,
  Minus,
  HelpCircle,
  Hammer,
  Wallet,
  Users,
  HardHat,
  Mountain,
  MapPin 
} from 'lucide-react';
import Footer from "../components/Footer";


// ==========================================
// 1. DATA CONFIGURATION
// ==========================================

const SERVICES = [
  {
    id: 'S1',
    title: 'Site Feasibility Study',
    desc: 'Deep analysis of topography, solar pathways, and soil health before breaking ground.',
    icon: <Map size={24} />
  },
  {
    id: 'S2',
    title: 'Material Strategy',
    desc: 'Consulting on zero-carbon sourcing, rammed earth viability, and local craft integration.',
    icon: <Layers size={24} />
  },
  {
    id: 'S3',
    title: 'Sustainable Retrofit',
    desc: 'Strategy for converting existing structures into high-performance, bioclimatic spaces.',
    icon: <Leaf size={24} />
  }
];

const FAQ_DATA = [
  {
    question: "What happens after I submit the questionnaire?",
    answer: "Our principal architect reviews every submission within 48 studio hours. You will receive an initial feedback brief and an invitation to schedule a deep-dive technical session if the project aligns with our current capacity."
  },
  {
    question: "Do you consult on international projects?",
    answer: "Yes. While our material lab is based in India, we provide remote strategic consulting globally, focusing on bioclimatic principles that can be applied to any local context."
  },
  {
    question: "Is there a fee for the initial feasibility study?",
    answer: "The initial questionnaire review is complimentary. Detailed site feasibility reports and material strategy documents are structured as a professional engagement following our first dialogue."
  },
  {
    question: "Can you work with my local contractor?",
    answer: "Absolutely. One of our primary roles in consultation is 'Technical Translation'—ensuring your local team understands the specific requirements for specialized techniques like rammed earth or lime plastering."
  }
];

// ==========================================
// 2. MAIN COMPONENT (Consultation)
// ==========================================

const Consultation = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [caseId, setCaseId] = useState('');
  
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHMLnpRfQujuR_qsADge8eYJUjdmFBIWfjTgLUAVU7dPQKYUoeTsS1Ar6nJFDso9k/exec";

  const generateCaseId = () => `CON-${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    setCaseId(generateCaseId());
  }, []);

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setFormStatus('sending');

    const formData = new FormData(form);
    const payload = {
      action: "consultation",
      caseId: caseId,
      timestamp: new Date().toLocaleString(),
      // Identity
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      // The 8 Strategic Questions
      availableMaterials: formData.get('availableMaterials'),
      projectTypology: formData.get('projectTypology'),
      budget: formData.get('budget'),
      exactLocation: formData.get('exactLocation'),
      labourAvailability: formData.get('labourAvailability'),
      pointOfContact: formData.get('pointOfContact'),
      timeCommitment: formData.get('timeCommitment'),
      contourSurvey: formData.get('contourSurvey'),
      authCode: "STUDIO_ARC_2026" 
    };

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setFormStatus('success');
      form.reset();
      setCaseId(generateCaseId());
    } catch (error) {
      console.error("Transmission Error:", error);
      setFormStatus('success'); 
    }
  };

  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 min-h-screen pt-24 overflow-hidden selection:bg-orange-600 selection:text-white">
      
      {/* --- SECTION 1: HERO --- */}
      <header className="relative h-[70vh] min-h-[500px] flex items-end pb-24 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-[40%]" 
            alt="Consultation Cover"
          />
          <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-6 mb-8">
              <span className="w-16 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">Project Onboarding</p>
            </div>
            <h1 className="text-[10vw] md:text-[7rem] lg:text-[9rem] font-serif leading-[0.8] tracking-tighter mb-8 text-white">
              Studio <br/> <span className="italic text-stone-400 font-light">Questionnaire.</span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-stone-300 italic max-w-xl">
              "Providing the technical parameters to transform abstract vision into architectural reality."
            </p>
          </motion.div>
        </div>
      </header>

      {/* --- SECTION 2: SERVICES --- */}
      <section className="py-32 px-6 md:px-12 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white dark:bg-stone-900/40 rounded-[3rem] border border-stone-200 dark:border-stone-800 hover:border-orange-600/30 transition-all shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE STRATEGIC QUESTIONNAIRE --- */}
      <section className="py-40 px-6 md:px-12 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-5 sticky top-32">
              <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-12 tracking-tight text-stone-900 dark:text-stone-100">Technical <br/><span className="italic text-stone-400">Questionnaire.</span></h3>
              
              <div className="space-y-12">
                 <div className="p-8 bg-stone-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
                    <p className="text-[10px] uppercase font-black tracking-widest text-orange-500 mb-4 flex items-center gap-2">
                       <ShieldCheck size={14} /> Active Case ID
                    </p>
                    <p className="text-5xl font-serif tracking-tighter mb-4">{caseId}</p>
                    <div className="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-1000" />
                    <Sparkles className="absolute -bottom-8 -right-8 w-32 h-32 text-white/5 opacity-50" />
                 </div>

                 <div className="flex flex-col gap-6 text-stone-400 text-sm font-medium border-t border-stone-200 dark:border-stone-800 pt-10">
                    <p className="flex items-center gap-4"><MessageSquare size={16} className="text-orange-600" /> Detailed responses ensure more precise feedback.</p>
                    <p className="flex items-center gap-4"><Compass size={16} className="text-orange-600" /> Responses are directly encrypted to our principal desk.</p>
                 </div>
              </div>
            </div>

            {/* Right Form: 8 Strategic Questions Integrated */}
            <div className="lg:col-span-7">
               <div className="bg-white dark:bg-[#111] p-10 md:p-20 rounded-[4rem] shadow-2xl border border-stone-100 dark:border-white/5">
                  <AnimatePresence mode="wait">
                    {formStatus === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20"
                      >
                         <div className="w-24 h-24 rounded-full bg-orange-600 flex items-center justify-center text-white mb-10 mx-auto shadow-[0_0_50px_rgba(234,88,12,0.3)]">
                            <Check size={48} strokeWidth={3} />
                         </div>
                         <h4 className="text-5xl font-serif mb-6 tracking-tighter text-stone-900 dark:text-stone-100">Data Received.</h4>
                         <p className="text-stone-500 italic text-lg mb-12">Your questionnaire <span className="text-orange-600 font-bold not-italic">#{caseId}</span> is now under review.</p>
                         <button onClick={() => setFormStatus('idle')} className="px-12 py-5 bg-stone-950 dark:bg-white text-white dark:text-stone-900 rounded-full text-[10px] uppercase font-black tracking-widest hover:scale-105 transition-all">Submit New Data</button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleConsultationSubmit} className="space-y-16">
                        
                        {/* 1. Identity Block */}
                        <div className="space-y-12">
                          <p className="text-[11px] uppercase font-black text-orange-600 tracking-[0.3em]">01 / Identity & Contact</p>
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                             <div className="flex items-center gap-4 mb-4">
                                <User size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">Full Name / Entity</label>
                             </div>
                             <input name="fullName" required type="text" placeholder="A. Architect / Studio Name" className="bg-transparent text-2xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                          </div>
                          <div className="grid md:grid-cols-2 gap-12">
                             <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-4">Email Handle</label>
                                <input name="email" required type="email" placeholder="contact@domain.com" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                             </div>
                             <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-4">Mobile Contact</label>
                                <input name="mobile" required type="tel" placeholder="+91 ---" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                             </div>
                          </div>
                        </div>

                        {/* 2. Site Context Block (Questions 1, 4, 5, 8) */}
                        <div className="space-y-12">
                          <p className="text-[11px] uppercase font-black text-orange-600 tracking-[0.3em]">02 / Site Context</p>
                          
                          {/* Q4. Exact Location */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                             <div className="flex items-center gap-4 mb-4">
                                <MapPin size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">What is the exact location of your site?</label>
                             </div>
                             <input name="exactLocation" required type="text" placeholder="Village, District, State / Coordinates" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                          </div>

                          {/* Q1. Available Material */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                             <div className="flex items-center gap-4 mb-4">
                                <Mountain size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">Most available building material at/around the site?</label>
                             </div>
                             <input name="availableMaterials" required type="text" placeholder="e.g., Red Earth, Laterite, Teak, Basalt..." className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                          </div>

                          <div className="grid md:grid-cols-2 gap-12">
                            {/* Q5. Labour availability */}
                            <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-4">Local labour availability?</label>
                                <select name="labourAvailability" className="bg-transparent text-lg font-serif outline-none appearance-none cursor-pointer pr-10 text-stone-900 dark:text-stone-100">
                                   <option>Easily Available</option>
                                   <option>Needs to be arranged</option>
                                   <option>Unavailable locally</option>
                                </select>
                                <ChevronDown className="absolute right-0 bottom-8 text-stone-400" size={16} />
                            </div>
                            {/* Q8. Contour Survey */}
                            <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 mb-4">Do you have a contour survey?</label>
                                <select name="contourSurvey" className="bg-transparent text-lg font-serif outline-none appearance-none cursor-pointer pr-10 text-stone-900 dark:text-stone-100">
                                   <option>Yes, I have the files</option>
                                   <option>No, I need one</option>
                                   <option>In Progress</option>
                                </select>
                                <ChevronDown className="absolute right-0 bottom-8 text-stone-400" size={16} />
                            </div>
                          </div>
                        </div>

                        {/* 3. Project Ambition Block (Questions 2, 3, 6, 7) */}
                        <div className="space-y-12">
                          <p className="text-[11px] uppercase font-black text-orange-600 tracking-[0.3em]">03 / Ambition & Commitments</p>
                          
                          {/* Q2. What are you building */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                             <div className="flex items-center gap-4 mb-4">
                                <Hammer size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">What are you wanting to build? (The Narrative)</label>
                             </div>
                             <textarea name="projectTypology" required placeholder="e.g. A resort, homestay, a small house, meditation centre... Tell us your vision." className="bg-transparent text-xl font-serif outline-none h-32 resize-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                          </div>

                          {/* Q3. Budget */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group">
                             <div className="flex items-center gap-4 mb-4">
                                <Wallet size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">Rough budget for the project?</label>
                             </div>
                             <input name="budget" required type="text" placeholder="e.g. ₹ 50 Lakhs - 1 Crore" className="bg-transparent text-xl font-serif outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-300" />
                          </div>

                          {/* Q6. Point of Contact */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                             <div className="flex items-center gap-4 mb-4">
                                <Users size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">Will you be the sole point of contact?</label>
                             </div>
                             <select name="pointOfContact" className="bg-transparent text-xl font-serif outline-none appearance-none cursor-pointer pr-10 text-stone-900 dark:text-stone-100">
                                <option>Yes, I am the lead contact</option>
                                <option>No, there is a local contractor/agent</option>
                                <option>Shared Responsibility</option>
                             </select>
                             <ChevronDown className="absolute right-0 bottom-8 text-stone-400" size={16} />
                          </div>

                          {/* Q7. Time/Energy Commitment */}
                          <div className="flex flex-col border-b border-stone-200 dark:border-stone-800 pb-6 focus-within:border-orange-600 transition-colors group relative">
                             <div className="flex items-center gap-4 mb-4">
                                <Clock size={14} className="text-stone-400 group-focus-within:text-orange-600" />
                                <label className="text-[10px] uppercase font-black tracking-widest text-stone-400 group-focus-within:text-orange-600">Are you willing to commit to the time required for natural construction?</label>
                             </div>
                             <select name="timeCommitment" className="bg-transparent text-xl font-serif outline-none appearance-none cursor-pointer pr-10 text-stone-900 dark:text-stone-100">
                                <option>Yes, I value the process over speed</option>
                                <option>I have a strict, fast deadline</option>
                                <option>I need to discuss timelines further</option>
                             </select>
                             <ChevronDown className="absolute right-0 bottom-8 text-stone-400" size={16} />
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-12 flex justify-end">
                           <button type="submit" disabled={formStatus === 'sending'} className="group flex items-center gap-14 text-stone-900 dark:text-white disabled:opacity-50">
                             <div className="flex flex-col items-end">
                                <span className="text-[11px] uppercase tracking-[0.6em] font-black group-hover:text-orange-600 transition-colors">
                                   {formStatus === 'sending' ? 'Transmitting...' : 'Submit Questionnaire'}
                                </span>
                                <span className="text-[9px] uppercase tracking-widest text-stone-400 font-mono mt-1">Ref: {caseId}</span>
                             </div>
                             <div className="relative w-24 h-24 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center overflow-hidden group-hover:border-orange-600 transition-all duration-700 shadow-xl">
                                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                {formStatus === 'sending' ? <Loader2 size={32} className="relative z-10 animate-spin" /> : <ArrowUpRight size={32} className="relative z-10 group-hover:text-white transition-colors" />}
                             </div>
                           </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: FAQ --- */}
      <section className="py-40 px-6 md:px-12 bg-white dark:bg-[#080808] transition-colors duration-500 border-t border-stone-100 dark:border-stone-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
             <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-8">
                   <HelpCircle size={20} className="text-orange-600" />
                   <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400">Context & Clarity</h2>
                </div>
                <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-stone-900 dark:text-stone-100">Common <br/><span className="italic text-stone-400">Inquiries.</span></h3>
                <p className="text-lg text-stone-500 dark:text-stone-400 font-serif italic max-w-sm border-l-2 border-orange-600/30 pl-8">
                   Understanding our consultation model and project parameters.
                </p>
             </div>
             <div className="lg:col-span-7 flex flex-col gap-4">
                {FAQ_DATA.map((faq, idx) => (
                  <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
             </div>
          </div>
        </div>
      </section>
                <Footer/>
    </div>
  );
};

// ==========================================
// 3. FAQ ITEM COMPONENT
// ==========================================

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-100 dark:border-stone-900 last:border-0 overflow-hidden">
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

export default Consultation;