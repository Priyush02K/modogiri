import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Plus, 
  Minus,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';

// ==========================================
// 1. BRANDED JOURNAL DATA
// ==========================================

const ARTICLES_DATA = [
  {
    id: 1,
    title: 'The Resurgence of Rammed Earth in Modern Urban Contexts',
    date: 'Oct 24, 2026',
    intro: 'Exploring how ancient thermal mass techniques are solving the modern energy crisis in tropical cities. Architecture is returning to the dirt as the design community rediscovers the intelligence of earth.',
    details: 'Rammed earth provides a natural battery for temperature regulation. In our recent projects in Kerala, we have observed a significant 6-degree Celsius difference between external ambient heat and internal sanctuaries, achieved entirely without mechanical cooling. This process involves compacting a damp mixture of subsoil that has suitable proportions of sand, gravel, clay, and stabilizer into an external formwork.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Brutalist Voids: A Study on Light and Shadow',
    date: 'Sep 12, 2026',
    intro: 'How the absence of structure creates the most impactful spatial experiences. We analyze the emotional weight of shadows in raw concrete environments.',
    details: 'A void is not empty space; it is a volume of potential. By strategically cutting apertures into monolithic concrete forms, we allow the sun to act as a dynamic painter. Throughout the day, the shifting geometry of light transforms the internal atmosphere from a sharp, energetic workspace to a soft, contemplative sanctuary. This dialogue between mass and nothingness is the core of our sculptural approach.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Sourcing Sustainable Timber: Our Journey to the Western Ghats',
    date: 'Aug 05, 2026',
    intro: 'A photographic journey into the heart of sustainable teak harvesting and the preservation of local craftsmanship.',
    details: 'Sustainable sourcing is the first step of architectural integrity. Our team spent three weeks documenting the cycle of harvesting in the Western Ghats, ensuring that every plank used in the Jali Collection comes from FSC-certified forests. We work directly with local families who have managed these groves for generations, blending traditional forest wisdom with modern environmental standards.',
    image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067&auto=format&fit=crop',
  },
    {
    id: 3,
    title: 'Sourcing Sustainable Timber: Our Journey to the Western Ghats',
    date: 'Aug 05, 2026',
    intro: 'A photographic journey into the heart of sustainable teak harvesting and the preservation of local craftsmanship.',
    details: 'Sustainable sourcing is the first step of architectural integrity. Our team spent three weeks documenting the cycle of harvesting in the Western Ghats, ensuring that every plank used in the Jali Collection comes from FSC-certified forests. We work directly with local families who have managed these groves for generations, blending traditional forest wisdom with modern environmental standards.',
    image: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32faa?q=80&w=2067&auto=format&fit=crop',
  }
];

// ==========================================
// 2. MAIN BLOG COMPONENT
// ==========================================

const BlogPage = () => {
  return (
    <>
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen pt-40 pb-24 overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="px-6 md:px-12 mb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-6 mb-8">
              <span className="w-16 h-[1px] bg-orange-600"></span>
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-orange-600">Spatial Narratives</p>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.85] tracking-tighter mb-12">
              The Studio <br/> <span className="italic text-stone-400 dark:text-stone-600 font-light">Journal.</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* --- ARTICLE LIST --- */}
      <section className="px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-32">
          {ARTICLES_DATA.map((article, idx) => (
            <BlogRow key={article.id} article={article} index={idx} />
          ))}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[0.8] tracking-tighter">Stay <span className="italic text-orange-600">Connected.</span></h2>
          <button className="group/btn bg-stone-900 dark:bg-white text-white dark:text-stone-900 px-12 py-6 rounded-full hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-6">
            <span className="text-xs uppercase tracking-[0.4em] font-black">Subscribe to Essays</span>
            <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>

<Footer/>
    </>
  );
};

// ==========================================
// 3. ROW COMPONENT
// ==========================================

function BlogRow({ article, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start"
    >
      {/* Image Column */}
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-200 dark:bg-stone-900">
          <img 
            src={article.image} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
            alt={article.title} 
          />
          <div className="absolute top-8 left-8">
            <span className="text-[10px] font-mono bg-white/90 dark:bg-black/90 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 uppercase tracking-widest text-stone-500">
              Entry 0{article.id}
            </span>
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className="lg:col-span-7 pt-4">
        <div className="flex items-center gap-4 mb-6 text-stone-400 font-mono text-xs">
          <span>{article.date}</span>
          <div className="w-1 h-1 rounded-full bg-orange-600"></div>
          <span className="uppercase tracking-widest">Vikram Sharma</span>
        </div>

        <h3 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-10 tracking-tight text-stone-900 dark:text-stone-100">
          {article.title}
        </h3>

        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl font-serif text-stone-500 dark:text-stone-400 italic leading-relaxed mb-8">
            "{article.intro}"
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="overflow-hidden"
              >
                <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-300 mb-10 border-l-2 border-orange-600/20 pl-8">
                  {article.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-4 text-stone-900 dark:text-white"
          >
            <div className="w-12 h-12 rounded-full border border-stone-300 dark:border-stone-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 group-hover:text-white transition-all duration-500">
              {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-orange-600 transition-colors">
              {isExpanded ? 'Fold Narrative' : 'Read Full Entry'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogPage;