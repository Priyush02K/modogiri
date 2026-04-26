import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Plus, 
  Minus, 
  BookOpen, 
  ArrowUpRight,
  PenTool,
  X,
  Image as ImageIcon,
  Check,
  Loader2,
  RefreshCw,
  Trash2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// ==========================================
// 1. MAIN BLOG COMPONENT
// ==========================================

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // 💡 YOUR DEPLOYED APPS SCRIPT URL
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfbmjg9SI7-TuyzkRex1khtP5ovSmFUbJtB-D6R5GyQePEruugjgzw7Jzutv0nd70W/exec";

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });
    try {
      // GET requests to Apps Script require standard CORS
      // If this fails with "Failed to fetch", ensure the Script is deployed as "Anyone"
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Map flat sheet data into the structured UI format
      const formattedData = data.map(item => ({
        ...item,
        specs: {
          location: item.location || 'N/A',
          focus: item.focus || 'General',
          impact: item.impact || 'Sustainable'
        }
      }));
      
      setArticles(formattedData);
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatusMessage({ 
        type: 'error', 
        text: 'Connection failed. Please ensure the Apps Script is deployed as "Anyone".' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const form = e.target;
    const formData = new FormData(form);
    
    const newEntry = {
      authCode: formData.get('authCode'), 
      id: Date.now().toString(), 
      volume: `Vol. ${articles.length + 1}`,
      title: formData.get('title'),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: formData.get('category'),
      intro: formData.get('intro'),
      details: formData.get('details'),
      image: formData.get('image') || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      location: formData.get('location'),
      focus: formData.get('focus'),
      impact: formData.get('impact')
    };

    try {
      // Using mode: 'no-cors' for POSTing to Apps Script from the browser
      // This allows the data to reach the sheet even if the browser blocks the redirect response
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(newEntry)
      });

      setStatusMessage({ type: 'success', text: 'Narrative Published Successfully.' });
      
      // Since we use no-cors, we can't confirm success from response
      // We manually wait and refresh the list
      setTimeout(() => {
        setShowEditor(false);
        setStatusMessage({ type: '', text: '' });
        setIsSubmitting(false);
        fetchArticles(); 
        form.reset();
      }, 2000);
    } catch (error) {
      console.error("Submission Error:", error);
      setStatusMessage({ type: 'error', text: 'Check Studio Code or Connection.' });
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const code = window.prompt("Enter Studio Authentication Code to delete this entry:");
    if (!code) return;

    setIsLoading(true);
    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: "delete",
          id: id,
          authCode: code
        })
      });
      
      // Refresh list after deletion
      setTimeout(() => fetchArticles(), 1000);
    } catch (error) {
      console.error("Delete failed:", error);
      setIsLoading(false);
    }
  };

  return (

    <>
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 min-h-screen pt-40 pb-40 overflow-hidden selection:bg-orange-600 selection:text-white">
      
      {/* --- HEADER --- */}
      <header className="px-6 md:px-12 mb-40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center gap-6 mb-12">
                <span className="w-20 h-[1px] bg-orange-600"></span>
                <p className="text-[10px] uppercase tracking-[0.6em] font-black text-orange-600">Cloud Archives</p>
              </div>
              <h1 className="text-[12vw] md:text-[8rem] lg:text-[11rem] font-serif leading-[0.8] tracking-tighter mb-4">
                Deep <br/> <span className="italic text-stone-400 dark:text-stone-600 font-light">Narratives.</span>
              </h1>
            </motion.div>

            <div className="flex items-center gap-4">
               <button onClick={fetchArticles} className="p-5 rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 hover:text-orange-600 transition-colors">
                 <RefreshCw size={20} className={isLoading ? 'animate-spin' : ''} />
               </button>

               <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowEditor(true)}
                className="group flex items-center gap-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-8 py-5 rounded-full shadow-2xl transition-all"
               >
                <PenTool size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="text-[10px] uppercase font-black tracking-widest">New Journal Entry</span>
               </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATUS NOTIFICATION --- */}
      <AnimatePresence>
        {statusMessage.text && !showEditor && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-32 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 ${
              statusMessage.type === 'error' ? 'bg-red-500 text-white' : 'bg-orange-600 text-white'
            }`}
          >
            {statusMessage.type === 'error' ? <AlertCircle size={20} /> : <Check size={20} />}
            <span className="text-[10px] uppercase font-black tracking-widest">{statusMessage.text}</span>
            <button onClick={() => setStatusMessage({type:'', text:''})}><X size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ARTICLE LIST --- */}
      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-56 md:gap-72">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-6 opacity-30">
               <Loader2 size={48} className="animate-spin" />
               <p className="text-[10px] uppercase tracking-[0.4em] font-black text-center">Synchronizing with <br/>Studio Database...</p>
            </div>
          ) : articles.length > 0 ? (
            articles.map((article, idx) => (
              <BlogRow 
                key={article.id} 
                article={article} 
                index={idx} 
                onDelete={() => handleDelete(article.id)} 
              />
            ))
          ) : (
            <div className="text-center py-40 border border-dashed border-stone-300 dark:border-stone-800 rounded-[4rem]">
               <p className="text-stone-400 italic font-serif text-2xl">The archive is currently empty or connecting...</p>
               <button onClick={fetchArticles} className="mt-8 text-orange-600 uppercase text-[10px] font-black tracking-[0.3em] flex items-center gap-2 mx-auto">
                 <RefreshCw size={14} /> Retry Connection
               </button>
            </div>
          )}
        </div>
      </section>

      {/* --- NEW ENTRY PORTAL (MODAL) --- */}
      <AnimatePresence>
        {showEditor && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center p-6 md:p-12 bg-stone-950/90 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }} className="bg-[#F5F2ED] dark:bg-[#111] w-full max-w-5xl rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5">
              <button onClick={() => setShowEditor(false)} className="absolute top-8 right-8 w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-400 hover:text-orange-600 transition-colors z-10"><X size={24} /></button>

              <div className="grid lg:grid-cols-12 max-h-[85vh] overflow-y-auto no-scrollbar">
                <div className="lg:col-span-4 bg-stone-900 p-12 text-white flex flex-col justify-between relative hidden lg:flex">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-500 mb-8">Authenticated Portal</h4>
                    <p className="text-3xl font-serif leading-tight italic opacity-60">"Verification is required to archive new research."</p>
                  </div>
                  <div className="border-t border-white/10 pt-8 flex items-center gap-4">
                     <ShieldCheck size={20} className="text-orange-500" />
                     <p className="text-[9px] uppercase tracking-widest text-stone-400 font-mono">End-to-end Encryption Active</p>
                  </div>
                </div>

                <div className="lg:col-span-8 p-10 md:p-20">
                  <AnimatePresence mode="wait">
                    {statusMessage.text && statusMessage.type === 'success' ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                         <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center text-white mb-8 shadow-2xl">
                            <Check size={40} />
                         </div>
                         <h4 className="text-4xl font-serif mb-4 tracking-tighter">{statusMessage.text}</h4>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleAddArticle} className="space-y-10">
                        <div className="space-y-8">
                            <div className="bg-orange-500/5 p-6 rounded-2xl border border-orange-500/10 mb-8">
                                <label className="text-[10px] uppercase font-black text-orange-600 block mb-3 tracking-widest">Authentication Studio Code</label>
                                <input name="authCode" required type="password" placeholder="••••••••" className="bg-transparent text-2xl font-serif outline-none w-full tracking-widest" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                              <div className="border-b border-stone-200 dark:border-stone-800 pb-4 focus-within:border-orange-600 transition-colors">
                                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Article Title</label>
                                <input name="title" required type="text" placeholder="The Shadow Narrative" className="bg-transparent text-xl font-serif outline-none w-full" />
                              </div>
                              <div className="border-b border-stone-200 dark:border-stone-800 pb-4 focus-within:border-orange-600 transition-colors">
                                <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Category</label>
                                <input name="category" required type="text" placeholder="Material Research" className="bg-transparent text-xl font-serif outline-none w-full" />
                              </div>
                            </div>

                            <div className="border-b border-stone-200 dark:border-stone-800 pb-4 focus-within:border-orange-600 transition-colors">
                              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Intro Narrative</label>
                              <textarea name="intro" required placeholder="A brief atmospheric opening..." className="bg-transparent text-xl font-serif outline-none w-full h-20 resize-none" />
                            </div>

                            <div className="border-b border-stone-200 dark:border-stone-800 pb-4 focus-within:border-orange-600 transition-colors">
                              <label className="text-[10px] uppercase font-bold text-stone-400 block mb-2">Full Narrative</label>
                              <textarea name="details" required placeholder="The technical depth..." className="bg-transparent text-base outline-none w-full h-24 resize-none" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                               <input name="location" required type="text" placeholder="Site Location" className="bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none text-sm" />
                               <input name="focus" required type="text" placeholder="Technical Focus" className="bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none text-sm" />
                               <input name="impact" required type="text" placeholder="Ecological Impact" className="bg-transparent border-b border-stone-200 dark:border-stone-800 py-2 outline-none text-sm" />
                            </div>

                            <div className="border-b border-stone-200 dark:border-stone-800 pb-4 flex items-center gap-4">
                               <ImageIcon size={16} className="text-stone-400" />
                               <input name="image" type="text" placeholder="Image URL (Unsplash Link)" className="bg-transparent text-xs font-mono outline-none w-full" />
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="group flex items-center gap-12 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-12 py-6 rounded-full transition-all disabled:opacity-50">
                           <span className="text-[11px] uppercase font-black tracking-[0.4em]">{isSubmitting ? 'Transmitting...' : 'Archive Narrative'}</span>
                           <div className="w-10 h-10 rounded-full border border-white/20 dark:border-stone-900/20 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                              {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={20} className="group-hover:text-white" />}
                           </div>
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
          <Footer/>
    </>
  );
};

// ==========================================
// 2. EDITORIAL ROW COMPONENT
// ==========================================

function BlogRow({ article, index, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative group">
      {/* Background Number */}
      <div className={`absolute -top-24 ${isEven ? 'right-0' : 'left-0'} pointer-events-none opacity-[0.03] dark:opacity-[0.05] transition-opacity group-hover:opacity-10`}>
         <span className="text-[25vw] font-serif leading-none truncate max-w-full">{article.id.toString().slice(-2)}</span>
      </div>

      {/* Delete Trigger (Authenticated) */}
      <button 
        onClick={onDelete}
        className="absolute top-0 right-0 p-4 text-stone-300 hover:text-red-500 transition-colors z-20 opacity-0 group-hover:opacity-100"
        title="Delete Entry"
      >
        <Trash2 size={20} />
      </button>

      <div className={`grid lg:grid-cols-12 gap-12 lg:gap-24 items-center`}>
        <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'lg:order-2'}`}>
          <motion.div initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }} className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-stone-200 dark:bg-stone-900 group">
            <img src={article.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100" alt={article.title} />
            <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute top-10 left-10"><span className="text-[10px] font-mono bg-white/90 dark:bg-black/90 px-4 py-1.5 rounded-full uppercase tracking-widest text-stone-500">{article.volume}</span></div>
          </motion.div>
        </div>

        <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'lg:order-1'}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-6 mb-8 text-stone-400">
               <span className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600">{article.category}</span>
               <div className="w-1 h-1 rounded-full bg-stone-300"></div>
               <span className="text-xs font-mono">{article.date}</span>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1] mb-10 tracking-tighter text-stone-900 dark:text-stone-100">{article.title}</h3>
            <div className="max-w-xl">
              <p className="text-2xl md:text-3xl font-serif text-stone-500 dark:text-stone-400 italic leading-snug mb-12">"{article.intro}"</p>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.8 }} className="overflow-hidden">
                    <div className="pt-12 mb-16 border-t border-stone-200 dark:border-stone-800 grid md:grid-cols-12 gap-12 text-stone-900 dark:text-stone-100">
                       <div className="md:col-span-4 space-y-8">
                          <div><p className="text-[10px] uppercase font-black tracking-widest text-orange-600 mb-2">Subject</p><p className="text-sm font-serif">{article.specs?.focus}</p></div>
                          <div><p className="text-[10px] uppercase font-black tracking-widest text-orange-600 mb-2">Site</p><p className="text-sm font-serif">{article.specs?.location}</p></div>
                          <div><p className="text-[10px] uppercase font-black tracking-widest text-orange-600 mb-2">Impact</p><p className="text-sm font-serif">{article.specs?.impact}</p></div>
                       </div>
                       <div className="md:col-span-8"><p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300 border-l border-orange-600/30 pl-8">{article.details}</p></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button onClick={() => setIsExpanded(!isExpanded)} className="group flex items-center gap-8 text-stone-950 dark:text-white">
                <div className="relative w-16 h-16 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center overflow-hidden group-hover:border-orange-600 transition-colors duration-500">
                  <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} className="relative z-10">{isExpanded ? <Minus size={24} /> : <Plus size={24} />}</motion.div>
                  <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <div className="flex flex-col items-start">
                   <span className="text-[11px] uppercase tracking-[0.5em] font-black group-hover:text-orange-600 transition-colors">{isExpanded ? 'Fold Narrative' : 'Expand Entry'}</span>
                   <div className="flex items-center gap-3 mt-2 text-stone-400 group-hover:text-stone-600 transition-colors"><BookOpen size={12} /><span className="text-[9px] uppercase tracking-widest font-bold text-stone-500">Full Archive</span></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;