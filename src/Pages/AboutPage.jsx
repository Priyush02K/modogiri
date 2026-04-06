import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  PenTool,
  ArrowUpRight,
  Globe,
  Users,
  Camera,
  Quote,
  Trophy,
  Activity,
  Zap,
  Layers
} from 'lucide-react';
import Footer from '../components/Footer';

// ==========================================
// 1. BRAND DATA CONFIGURATION
// ==========================================

const PHILOSOPHY_PILLARS = [
  {
    title: 'The Ancestral Link',
    desc: 'Our designs are inspired by the timelessness of ancient Indian stepwells and caves—spaces that breathe naturally and age with dignity.',
    icon: <Globe size={24} className="text-orange-600" />
  },
  {
    title: 'Honest Brutalism',
    desc: 'We believe in the raw beauty of materials. Concrete, earth, and wood are left exposed to tell the story of their own creation.',
    icon: <PenTool size={24} className="text-orange-600" />
  },
  {
    title: 'Eco-Systemic Flow',
    desc: 'Architecture should not disrupt the horizon. We focus on zero-carbon footprints through rammed earth and solar-passive orientation.',
    icon: <Leaf size={24} className="text-orange-600" />
  }
];

const AWARDS = [
  { year: '2025', title: 'Sustainable Studio of the Year', body: 'AD Design Awards' },
  { year: '2024', title: 'Gold Medal for Innovation', body: 'Indian Institute of Architects' },
  { year: '2023', title: 'Top 50 Emerging Practices', body: 'Dezeen International' },
  { year: '2022', title: 'Excellence in Earth Building', body: 'Auroville Earth Institute' },
];

const INNOVATION_METRICS = [
  { label: 'Carbon Reduction', value: '65%', icon: <Leaf size={20} /> },
  { label: 'Local Materials', value: '90%', icon: <Layers size={20} /> },
  { label: 'Natural Lighting', value: '100%', icon: <Zap size={20} /> },
];

const STUDIO_GALLERY = [
  { 
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070', 
    label: 'The Workshop',
    span: 'md:col-span-2 md:row-span-2' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071', 
    label: 'Material Testing',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    url: 'https://images.unsplash.com/photo-1581291417004-6e7398463c68?q=80&w=2070', 
    label: 'Drafting Room',
    span: 'md:col-span-1 md:row-span-2' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974', 
    label: 'Principal at Work',
    span: 'md:col-span-1 md:row-span-1'
  }
];

const TEAM = [
  {
    name: 'Ar. Vikram Sharma',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&fit=crop'
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&fit=crop'
  },
  {
    name: 'Marcus Chen',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&fit=crop'
  }
];

// ==========================================
// 2. MAIN ABOUT COMPONENT
// ==========================================

const AboutPage = () => {
  return (
       <>
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-500 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen overflow-hidden">
      
      {/* --- SECTION 1: COVER HERO --- */}
      <header className="relative h-[95vh] min-h-[750px] flex items-end pb-24 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            src="https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Studio Architectural Foundation"
          />
          <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <span className="w-16 h-[1px] bg-orange-600"></span>
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/80">The Mind Behind the Form</p>
                </div>
                
                <h1 className="text-[14vw] md:text-[8rem] lg:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12 text-white">
                  Vikram <br/> 
                  <span className="italic text-stone-400 font-light">Sharma</span>
                </h1>
                
                <p className="text-2xl md:text-4xl font-serif text-stone-300 leading-tight max-w-3xl italic">
                  "Architecture is the silent conversation between the earth's weight and the sky's light."
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="text-right"
               >
                 <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Current Status</p>
                 <p className="text-xl font-serif text-white border-b border-orange-600 pb-2">Principal Architect & Founder</p>
               </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SECTION 2: DESIGN PHILOSOPHY --- */}
      <section className="py-32 px-6 md:px-12 bg-stone-50 dark:bg-[#0c0c0c] border-y border-stone-200 dark:border-stone-800 transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600 mb-8">Approach & Vision</h2>
              <h3 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-stone-900 dark:text-stone-100">Sculpting with <br/><span className="italic text-stone-400 dark:text-stone-600">Intention.</span></h3>
              <div className="space-y-6 text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                <p>
                  Our journey is rooted in the belief that a building should belong to its site. We draw inspiration from the structural honesty of <strong>Ancient Stepwells</strong> and the raw rhythm of <strong>Sustainable Brutalism</strong>.
                </p>
                <p>
                  Every project is an experiment in innovation—merging thermal mass with natural light to create spaces that breathe.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-stone-100 dark:border-white/5 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-3 text-stone-900 dark:text-stone-100">{pillar.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed max-w-lg">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ADDITION: AWARDS & RECOGNITION --- */}
      <section className="py-32 px-6 md:px-12 bg-transparent">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Trophy size={18} className="text-orange-600" />
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 dark:text-stone-500">Recognition & Awards</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AWARDS.map((award, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-stone-200 dark:border-stone-800 pb-8"
              >
                <p className="text-xs font-mono text-orange-600 mb-4">{award.year}</p>
                <h3 className="text-xl font-serif mb-2 group-hover:text-orange-600 transition-colors">{award.title}</h3>
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{award.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ATMOSPHERE & CONTEXT (BENTO GRID) --- */}
      <section className="py-32 px-6 md:px-12 bg-transparent transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="flex items-center gap-4">
              <Camera size={18} className="text-orange-600" />
              <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 dark:text-stone-500">Atmosphere & Context</h2>
            </div>
            <p className="text-xl font-serif italic text-stone-400">Capturing the studio's daily pulse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
            {STUDIO_GALLERY.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`group relative rounded-3xl overflow-hidden shadow-xl bg-stone-200 dark:bg-zinc-900 border border-black/5 dark:border-white/5 ${img.span}`}
              >
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  alt={img.label} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-orange-500 mb-2">Studio View</p>
                  <p className="text-xl font-serif text-white">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADDITION: INNOVATION & SUSTAINABILITY LAB --- */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto bg-stone-100 dark:bg-stone-900/30 rounded-[3rem] p-12 md:p-24 border border-stone-200 dark:border-stone-800">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Activity size={18} className="text-orange-600" />
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-500">The Innovation Lab</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Data-Driven <br/> <span className="italic">Sustainability.</span></h3>
              <p className="text-stone-500 dark:text-stone-400 max-w-md leading-relaxed mb-12">
                We utilize computational design tools to simulate sun-paths and airflow, ensuring every structure achieves maximum efficiency with zero reliance on mechanical cooling.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {INNOVATION_METRICS.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-orange-600 mb-2">{metric.icon}</div>
                    <p className="text-2xl font-serif text-stone-900 dark:text-stone-100">{metric.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
               <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070" className="w-full h-full object-cover grayscale" alt="Innovation" />
               <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE TEAM --- */}
      <section className="py-32 px-6 md:px-12 bg-stone-900 text-white rounded-[4rem] mx-4 md:mx-12 overflow-hidden relative shadow-2xl">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Users size={16} className="text-orange-500" />
                <h2 className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-500">The Collective</h2>
              </div>
              <h3 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">United by <span className="italic text-stone-500">Craft.</span></h3>
            </div>
            <p className="max-w-xs text-stone-400 text-sm leading-relaxed border-l border-stone-800 pl-8">
              A diverse group of architects and researchers working together to define the next era of Indian minimalist design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-full overflow-hidden mb-8 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-95 shadow-inner">
                  <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-serif mb-1">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-black text-orange-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      </section>

      {/* --- SECTION 5: FINAL CALL TO ACTION --- */}
      <section className="py-56 px-6 text-center bg-transparent transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-[10rem] font-serif mb-12 leading-[0.8] tracking-tighter text-stone-900 dark:text-white">What do <br/> you <span className="italic text-orange-600">Want?</span></h2>
          <p className="text-xl text-stone-400 dark:text-stone-500 mb-16 max-w-xl mx-auto font-serif">Every great building starts with a desire for something better. Let's define yours.</p>
          
          <button className="group/btn bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-16 py-8 rounded-full hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-8">
            <span className="text-sm uppercase tracking-[0.4em] font-black">Begin the Dialogue</span>
            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white group-hover/btn:translate-x-2 transition-transform">
              <ArrowUpRight size={24} />
            </div>
          </button>
        </motion.div>
      </section>

    </div>
    <Footer/>
 </>
  );
};

export default AboutPage