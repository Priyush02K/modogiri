import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Info, 
  Box, 
  Wind, 
  ArrowUpRight,
  ChevronRight,
  Hammer,
  Truck,
  ShieldCheck,
  MoveRight,
  Clock,
  MessageCircle
} from 'lucide-react';

// ==========================================
// 1. THE JALI COLLECTION DATA
// ==========================================

const WHATSAPP_NUMBER = "919876543210"; // Replace with your studio's WhatsApp number

const PRODUCTS = [
  {
    id: 'JC-01',
    name: 'The Obsidian Sconce',
    category: 'Lighting',
    price: '$850',
    status: 'available',
    description: 'A hand-cast concrete lighting fixture designed to create rhythmic shadows against raw textures.',
    longDesc: 'The Obsidian Sconce is an exercise in brutalist minimalism. Each piece is hand-cast in our Kochi studio using a proprietary blend of dark-pigmented concrete and volcanic sand. The internal LED is positioned to wash the wall in a soft gradient, emphasizing the surface texture of the architecture it inhabits.',
    materials: ['Pigmented Concrete', 'Oxidized Brass', 'Integrated LED'],
    dimensions: '300mm x 150mm x 100mm',
    weight: '4.2 kg',
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1974&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'JC-02',
    name: 'Teak Lattice Credenza',
    category: 'Furniture',
    price: '$3,200',
    status: 'available',
    description: 'Reclaimed teak wood paired with a hand-carved Jali pattern for natural ventilation.',
    longDesc: 'Inspired by traditional Indian Jali screens, this credenza allows air to flow through the storage compartment, making it ideal for tropical climates. The wood is sourced from FSC-certified reclaimed timber from the Western Ghats.',
    materials: ['Reclaimed Teak', 'Hand-turned Dowels', 'Wax Finish'],
    dimensions: '1800mm x 450mm x 750mm',
    weight: '62 kg',
    image: 'https://images.unsplash.com/photo-1581291417004-6e7398463c68?q=80&w=2070&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'JC-03',
    name: 'Brutalist Earth Basin',
    category: 'Hardware',
    price: '$1,100',
    status: 'available',
    description: 'A monolithic bathroom basin carved from a single block of pink Rajasthan limestone.',
    longDesc: 'The Earth Basin celebrates the weight of stone. Carved with CNC precision and finished by hand, it features a sloped interior that minimizes splashing while maintaining a sharp, architectural silhouette.',
    materials: ['Rajasthan Limestone', 'Honed Finish'],
    dimensions: '600mm x 400mm x 120mm',
    weight: '28 kg',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'JC-04',
    name: 'The Monolith Stool',
    category: 'Furniture',
    price: 'TBA',
    status: 'coming-soon',
    description: 'A structural exploration of form and void, carved from solid volcanic rock.',
    image: 'https://images.unsplash.com/photo-1551298370-9d3d53e40c71?q=80&w=2070&auto=format&fit=crop',
    featured: false
  },
  {
    id: 'JC-05',
    name: 'Flux Pendulum Light',
    category: 'Lighting',
    price: 'TBA',
    status: 'coming-soon',
    description: 'Kinetic architectural lighting using balanced copper weights and hand-blown glass.',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop',
    featured: false
  }
];

const COMMISSION_STEPS = [
  { id: '01', title: 'Consultation', desc: 'We discuss the spatial context and specific sizing requirements for your piece.' },
  { id: '02', title: 'Material Selection', desc: 'Choose from our curated library of hand-pigmented concrete or local timber.' },
  { id: '03', title: 'Fabrication', desc: '4-8 weeks of meticulous hand-crafting in our Kochi workshop.' },
  { id: '04', title: 'Installation', desc: 'White-glove delivery and installation guidance for architectural integration.' }
];

// ==========================================
// 2. MAIN SHOP COMPONENT
// ==========================================

const ShopPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-[#F5F2ED] dark:bg-[#0a0a0a] transition-colors duration-700 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen overflow-hidden relative">
      
      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            
            {/* --- CINEMATIC COVER HERO --- */}
            <header className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden bg-zinc-900">
              <div className="absolute inset-0 z-0">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 15, ease: "linear" }}
                  src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1974&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Shop Collection Cover"
                />
                <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              </div>

              <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-end">
                  <div className="lg:col-span-8">
                    <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                      <div className="flex items-center gap-6 mb-12">
                        <span className="w-16 h-[1px] bg-orange-600"></span>
                        <p className="text-[10px] uppercase tracking-[0.6em] font-black text-white/80">The Jali Collection // Artifacts</p>
                      </div>
                      <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-serif leading-[0.8] tracking-tighter mb-12 text-white">
                        Objects of <br/> <span className="italic text-stone-400 font-light">Intent.</span>
                      </h1>
                    </motion.div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right">
                    <p className="text-xl md:text-2xl font-serif text-stone-300 italic max-w-xs mb-10">
                      "Bespoke architectural pieces designed to age with the structures they inhabit."
                    </p>
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-white/60">
                       <ShoppingBag size={14} className="text-orange-600" /> Currently Shipping Globally
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* --- PRODUCT GRID --- */}
            <section className="px-6 md:px-12 pt-32 relative z-10">
              <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
                  {PRODUCTS.map((product, idx) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={product.status === 'available' ? () => setSelectedProduct(product) : undefined} 
                      index={idx} 
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* --- THE COMMISSION PROCESS --- */}
            <section className="mt-64 px-6 md:px-12 relative z-10">
              <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-12 gap-24 items-start">
                   <div className="lg:col-span-4">
                      <h2 className="text-[11px] uppercase tracking-[0.5em] font-black text-orange-600 mb-8">The Acquisition</h2>
                      <h3 className="text-5xl font-serif leading-tight mb-8">How we <br/><span className="italic text-stone-400">Collaborate.</span></h3>
                      <p className="text-stone-500 dark:text-stone-400 leading-relaxed">Most items are made-to-order to ensure material consistency and reduced waste. Our average lead time is 8 weeks.</p>
                   </div>
                   <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
                      {COMMISSION_STEPS.map((step) => (
                        <div key={step.id} className="p-10 bg-white dark:bg-stone-900/40 rounded-[2.5rem] border border-stone-200 dark:border-stone-800 hover:border-orange-600/30 transition-all group">
                           <span className="text-4xl font-serif text-stone-200 dark:text-stone-800 mb-6 block group-hover:text-orange-600/20 transition-colors">{step.id}</span>
                           <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                           <p className="text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-64 px-6 text-center relative z-10">
               <h2 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.8] tracking-tighter">Bespoke <br/> <span className="italic text-orange-600">Creation.</span></h2>
               <button className="group/btn bg-stone-950 dark:bg-white text-white dark:text-stone-950 px-16 py-8 rounded-full hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-8">
                  <span className="text-sm uppercase tracking-[0.4em] font-black">Discuss a custom piece</span>
                  <MoveRight size={24} className="group-hover/btn:translate-x-3 transition-transform" />
               </button>
            </section>

          </motion.div>
        ) : (
          <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 3. INTERNAL HELPER COMPONENTS
// ==========================================

function ProductCard({ product, onClick, index }) {
  const isComingSoon = product.status === 'coming-soon';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
      onClick={onClick}
    >
      <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-10 shadow-2xl bg-stone-200 dark:bg-stone-900">
        <img 
          src={product.image} 
          className={`w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 ${isComingSoon ? 'grayscale' : 'grayscale group-hover:grayscale-0'}`} 
          alt={product.name} 
        />
        <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-1000" />
        
        {!isComingSoon && (
          <div className="absolute top-10 right-10">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12">
              <Plus size={24} />
            </div>
          </div>
        )}

        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-stone-950/40 backdrop-blur-md border border-white/10 px-8 py-3 rounded-full flex items-center gap-3">
              <Clock size={14} className="text-orange-500" />
              <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white">Coming Soon</span>
            </div>
          </div>
        )}

        <div className="absolute bottom-10 left-10">
           <span className="text-[10px] font-mono bg-stone-950 text-white px-4 py-2 rounded-full tracking-widest uppercase border border-white/10 shadow-xl">
              {product.category}
           </span>
        </div>
      </div>

      <div className="flex justify-between items-end px-4">
        <div>
           <h4 className={`text-3xl font-serif mb-2 transition-colors ${isComingSoon ? 'text-stone-400' : 'group-hover:text-orange-600 text-stone-900 dark:text-stone-100'}`}>{product.name}</h4>
           <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">{product.id}</p>
        </div>
        <p className={`text-2xl font-serif italic ${isComingSoon ? 'text-stone-300 dark:text-stone-800' : 'text-stone-400'}`}>{product.price}</p>
      </div>
    </motion.div>
  );
}

function ProductDetail({ product, onClose }) {
  const related = PRODUCTS.filter(p => p.id !== product.id && p.status === 'available').slice(0, 2);

  const handleWhatsAppInquiry = () => {
    const message = `Hello Studio Arc, I am interested in the ${product.name} (${product.id}) from the Jali Collection. I would like to discuss a potential commission.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20"
    >
      <button 
        onClick={onClose}
        className="flex items-center gap-6 text-stone-400 hover:text-orange-600 transition-colors mb-20 group"
      >
        <div className="w-14 h-14 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center group-hover:border-orange-600 transition-all">
          <ArrowLeft size={24} />
        </div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Archive Index</span>
      </button>

      <div className="grid lg:grid-cols-12 gap-24 items-start mb-48">
        <div className="lg:col-span-7 space-y-8">
           <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl bg-stone-200 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
           </div>
           <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square rounded-[2rem] overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <img src={product.image} className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" alt="detail" />
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-5 pt-12">
           <div className="mb-16">
              <p className="text-[11px] uppercase tracking-[0.4em] font-black text-orange-600 mb-8 border-l-2 border-orange-600 pl-6">{product.category} — {product.id}</p>
              <h2 className="text-6xl md:text-7xl font-serif leading-[1] mb-10 tracking-tighter text-stone-900 dark:text-stone-100">{product.name}</h2>
              <p className="text-4xl font-serif text-stone-400 mb-16">{product.price}</p>
              <p className="text-2xl leading-relaxed text-stone-600 dark:text-stone-400 font-serif italic mb-16">
                 "{product.description}"
              </p>
           </div>

           <div className="space-y-16 mb-24">
              <div className="pb-12 border-b border-stone-200 dark:border-stone-800">
                 <h4 className="text-[10px] uppercase tracking-widest font-black text-stone-400 mb-6 flex items-center gap-3">
                   <Info size={14} /> The Story of the Object
                 </h4>
                 <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
                    {product.longDesc}
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-12">
                 <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-stone-400 mb-6 flex items-center gap-3">
                      <Box size={14} /> Materiality
                    </h4>
                    <ul className="space-y-3">
                       {product.materials?.map(m => <li key={m} className="text-sm font-serif text-stone-800 dark:text-stone-200">{m}</li>)}
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-stone-400 mb-6 flex items-center gap-3">
                      <Wind size={14} /> Spatial footprint
                    </h4>
                    <p className="text-sm font-serif mb-2 text-stone-800 dark:text-stone-200">{product.dimensions}</p>
                    <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">Weight: {product.weight}</p>
                 </div>
              </div>
           </div>

           <button 
             onClick={handleWhatsAppInquiry}
             className="w-full group/btn relative py-10 bg-[#25D366] text-white rounded-full font-black uppercase text-xs tracking-widest overflow-hidden transition-all shadow-2xl"
           >
              <span className="relative z-10 flex items-center justify-center gap-8">
                 Inquire via WhatsApp <MessageCircle size={24} className="group-hover/btn:scale-110 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-stone-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
           </button>
           
           <div className="grid grid-cols-3 gap-6 mt-16 text-center">
              <div><Hammer size={16} className="mx-auto mb-2 text-stone-300" /><p className="text-[8px] uppercase tracking-widest font-bold text-stone-400">Hand-Cast</p></div>
              <div><Truck size={16} className="mx-auto mb-2 text-stone-300" /><p className="text-[8px] uppercase tracking-widest font-bold text-stone-400">Secure Freight</p></div>
              <div><ShieldCheck size={16} className="mx-auto mb-2 text-stone-300" /><p className="text-[8px] uppercase tracking-widest font-bold text-stone-400">Care Guide Incl.</p></div>
           </div>
        </div>
      </div>

      <section className="pt-32 border-t border-stone-200 dark:border-stone-800 pb-20">
         <h4 className="text-[11px] uppercase tracking-[0.5em] font-black text-stone-400 mb-20 text-center">Complimentary Objects</h4>
         <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {related.map(p => (
              <div key={p.id} onClick={() => { setSelectedProduct(p); window.scrollTo(0,0); }} className="group cursor-pointer flex gap-10 items-center">
                 <div className="w-40 h-40 rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                    <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold text-orange-600 mb-2">{p.category}</p>
                    <h5 className="text-2xl font-serif group-hover:text-orange-600 transition-colors text-stone-900 dark:text-stone-100">{p.name}</h5>
                    <p className="text-sm font-mono text-stone-400 mt-2">{p.price}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </motion.div>
  );
}

export default ShopPage;