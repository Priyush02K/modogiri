import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  PenTool, 
  Leaf, 
  Camera, 
  Users, 
  ArrowUpRight, 
  Compass, 
  MapPin, 
  Award, 
  Check, 
  Sparkles,
  Building2,
  ShoppingBag,
  GraduationCap,
  Layers,
  HeartHandshake
} from 'lucide-react';


import Profile from "../assets/Profile.webp";
import Footer from "../components/Footer";



const WHAT_WE_OFFER = [
  {
    title: 'Architectural Design',
    desc: 'We design and create hybrid structures—from tiny homes and boutique spaces to functional additions—that integrate seamlessly into any landscape.',
    icon: <Building2 size={26} className="text-orange-600" />,
    tag: 'Design & Build'
  },
  {
    title: 'Curated Products',
    desc: 'Our line of products is crafted to blend beautifully within these earthen spaces. Each piece is designed to complement our architectural philosophy, bringing function and aesthetic harmony to your environment.',
    icon: <ShoppingBag size={26} className="text-orange-600" />,
    tag: 'Craft & Form'
  },
  {
    title: 'Hands-On Workshops & Tours',
    desc: 'We believe in sharing our knowledge. Throughout the year, we host hands-on workshops and educational tours that are open to all age groups. Join us to learn about our techniques, explore our materials, and get inspired to create something of your own.',
    icon: <GraduationCap size={26} className="text-orange-600" />,
    tag: 'Education & Community'
  }
];

const STUDIO_GALLERY = [
  { 
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070', 
    label: 'The Fabrication Workshop',
    span: 'md:col-span-2 md:row-span-2'
  },
  { 
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071', 
    label: 'Soil & Lime Testing',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    url: 'https://images.squarespace-cdn.com/content/v1/65c25f904928ac21cf7d6d02/9c8b19fb-00ee-4a28-b0fb-34462dd5065e/Toward+Front+Door.jpg', 
    label: 'Drafting Studio',
    span: 'md:col-span-1 md:row-span-2'
  },
  { 
    url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1974', 
    label: 'Principal Desk',
    span: 'md:col-span-1 md:row-span-1'
  }
];

// const TEAM = [
//   {
//     name: 'Ar. ABC XYZ',
//     role: 'Principal Architect & Founder',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&fit=crop'
//   },
//   {
//     name: 'Elena Rostova',
//     role: 'Head of Interior Research',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&fit=crop'
//   },
//   {
//     name: 'Marcus Chen',
//     role: 'Lead Structural Engineer',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&fit=crop'
//   }
// ];

const STATS = [
  { value: '15+', label: 'Years of Practice' },
  { value: '42k', label: 'Built Footprint (sqft)' },
  { value: '180+', label: 'Material R&D Tests' },
  { value: 'Net-0', label: 'Carbon Commitment' }
];

export function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] dark:bg-[#0a0a0a] transition-colors duration-500 font-sans text-stone-900 dark:text-stone-100 selection:bg-orange-600 selection:text-white min-h-screen overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <header className="relative h-[90vh] min-h-[700px] flex items-end pb-24 overflow-hidden bg-stone-950">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1518481612222-68bab828fd1b?q=80&w=2070" 
            className="w-full h-full object-cover opacity-50 grayscale" 
            alt="MADOGIRI Architectural Foundation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        </div>

        <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-orange-600"></span>
                  <p className="text-[20px] uppercase tracking-[0.5em] font-black text-orange-500"> Studio</p>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-[5rem] font-serif leading-[0.85] tracking-tighter mb-8 text-white">
                  <span className="italic text-stone-400 font-light">MADOGIRI.</span>
                </h1>
                
                <p className="text-2xl md:text-3xl font-serif text-stone-300 leading-tight max-w-2xl italic font-light">
                 ‘Earth turns to gold in the hands of the wise.’ -RUMI

                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-left lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-orange-600 pl-4 lg:pl-0 lg:pr-4"
              >
                <p className="text-[10px] uppercase tracking-widest font-black text-stone-400 mb-1">Principal & Founder</p>
                <p className="text-lg font-serif text-white">AR STUTI PANWAR</p>
                <p className="text-xs font-mono text-orange-500 mt-2">B.ARCH / MDES / VERNACULAR RESEARCHER / INFOVORE</p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <section className="bg-stone-900 text-stone-200 py-12 px-6 md:px-12 border-b border-stone-800">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-1 border-l border-stone-800 pl-6"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-orange-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOUNDER SECTION (COMPACT IMAGE SIZE) --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-b border-stone-200 dark:border-stone-800">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Founder Image - Compact & Smaller Frame */}
          <div className="lg:col-span-4 max-w-sm w-full mx-auto lg:mx-0 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800 bg-stone-200 dark:bg-stone-900"
            >
              <img 
                src={Profile} 
                alt="Founder - AR STUTI PANWAR" 
                className="w-full h-full object-cover   transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[9px] uppercase tracking-[0.4em] font-black text-orange-500 mb-1">Founder's Journey</p>
                <p className="text-xl font-serif">AR STUTI PANWAR</p>
                <p className="text-[11px] text-stone-300 font-mono">B.ARCH / MDES / VERNACULAR RESEARCHER / INFOVORE </p>
              </div>
            </motion.div>
          </div>

          {/* Founder Narrative Text */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={16} className="text-orange-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">Our Story & Origin</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Rediscovering built forms <br/>
              <span className="italic text-stone-400 font-light">through earth & travel.</span>
            </h2>

            <div className="space-y-5 text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed">
              <p>
              Though I graduated as an architect, a lingering sense of incompleteness led me to pursue a Master’s in Product Design in Florence, Italy. Yet, it wasn’t until I left the classroom and immersed myself in the rural landscapes of India and Europe that I  found my true north : vernacular and earthen architecture.
              </p>
              <p>
               Since 2021, I have traded the drafting table for the construction site, actively building with various natural techniques to hone my hands-on craft. Today, my work sits at the intersection of past and future. 
              </p>
              <p>
               Alongside a dedicated team of natural builders, rural communities, I research and design hybrid structures and products that amalgamate time-tested vernacular wisdom with modern material discoveries. Our ultimate goal? To craft beautiful, grounded earthen spaces that don't just shelter, but deeply enhance the human experience.              </p>
              <p className="font-serif italic text-lg md:text-xl text-stone-900 dark:text-white border-l-2 border-orange-600 pl-6 my-4">
                "We now with a team of natural builders aim to build beautiful hybrid earthen spaces that can enhance an overall experience ."
              </p>
            </div>
          </div>

        </div>
      </section>

      {}
      {/* --- WHO WE ARE --- */}
      <section className="py-24 px-6 md:px-12 bg-stone-100/70 dark:bg-stone-900/40 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake size={18} className="text-orange-600" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">Identity & Purpose</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                Who We Are
              </h2>
            </div>
            
            <div className="lg:col-span-8 border-l-2 border-stone-300 dark:border-stone-800 pl-6 lg:pl-12">
              <p className="text-xl md:text-2xl font-serif text-stone-800 dark:text-stone-200 leading-relaxed italic font-light">
                <strong className="font-semibold not-italic text-stone-900 dark:text-white">STUDIOMADOGIRI</strong> is a design studio with a dual focus: creating innovative products and thoughtful buildings. We believe that great design is a solution—a way to harmonize our needs with the natural world. Our work is a constant exploration of how we can live better, smarter, and more gently on the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* --- OUR APPROACH: THE ART OF THE HYBRID STRUCTURE --- */}
      <section className="py-28 px-6 md:px-12 max-w-[1500px] mx-auto border-b border-stone-200 dark:border-stone-800">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Compass size={18} className="text-orange-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">Design Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Our Approach: <br/>
              <span className="italic text-stone-400 font-light">The Art of the Hybrid Structure</span>
            </h2>
            <div className="w-16 h-[2px] bg-orange-600 mb-6"></div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-stone-900 p-8 md:p-12 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <p className="text-xl md:text-2xl font-serif text-stone-900 dark:text-white mb-6 italic">
              "How do we create spaces that fit anywhere and feel like everywhere? By marrying the best of both worlds."
            </p>
            <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg leading-relaxed">
              We specialize in designing hybrid structures that artfully blend natural, earthen materials with the strength and reliability of conventional ones. The result is a building that is sustainable, durable, and uniquely beautiful—perfectly adapted to its environment.
            </p>
          </div>
        </div>
      </section>

      {}
      {/* --- WHAT WE OFFER --- */}
      <section className="py-28 px-6 md:px-12 max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Layers size={18} className="text-orange-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">Capabilities & Scope</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif">What We Offer</h2>
          </div>
          <p className="max-w-md text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            Bridging architectural forms, product design, and hands-on community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {WHAT_WE_OFFER.map((offer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-600 dark:hover:border-orange-600 transition-all duration-300 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {offer.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-mono text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-500/10 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-500/20">
                    {offer.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif mb-4 text-stone-900 dark:text-stone-100 group-hover:text-orange-600 transition-colors">
                  {offer.title}
                </h3>

                <p className="text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
                  {offer.desc}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-2 text-xs font-mono text-stone-400 group-hover:text-orange-600 transition-colors">
                <span>Explore Offering</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {}
      {/* --- STUDIO ATMOSPHERE (BENTO GRID) --- */}
      <section className="py-24 px-6 md:px-12 bg-stone-100 dark:bg-stone-900/30 border-y border-stone-200 dark:border-stone-800">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Camera size={16} className="text-orange-600" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-500">Behind the Scenes</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif">Atmosphere & Context</h2>
            </div>
            <p className="text-base font-serif italic text-stone-500 dark:text-stone-400">Capturing our daily practice and tactile experiments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
            {STUDIO_GALLERY.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.99 }}
                className={`group relative rounded-3xl overflow-hidden shadow-md bg-stone-200 dark:bg-zinc-900 border border-stone-200 dark:border-stone-800 ${img.span}`}
              >
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  alt={img.label} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[9px] uppercase tracking-widest font-black text-orange-500 mb-1">Studio Archive</p>
                  <p className="text-lg font-serif text-white">{img.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      {/* --- THE COLLECTIVE / TEAM --- */}
      {/* <section className="py-28 px-6 md:px-12 max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users size={16} className="text-orange-600" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-orange-600">Our Practitioners</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif">The Collective</h2>
          </div>
          <p className="max-w-md text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
            Architects, researchers, and craftsmen working together to redefine sustainable, zero-carbon built environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TEAM.map((member, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center p-6 rounded-3xl bg-white/50 dark:bg-stone-900/50 border border-stone-200/60 dark:border-stone-800"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-stone-200 dark:border-stone-800 grayscale group-hover:grayscale-0 group-hover:border-orange-600 transition-all duration-500">
                <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-widest font-black text-orange-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {}
      {/* --- FOOTER CTA --- */}


      <Footer/>
    </div>
  );
}

export default AboutPage;