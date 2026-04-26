import React from 'react';
import { ArrowUpRight, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    
    <footer className="bg-[#FFFAF5] dark:bg-[#0a0a0a] pt-24 md:pt-40 pb-12 px-6 md:px-12 border-t border-black/5 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Top CTA Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 md:mb-32">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[1px] bg-orange-600"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange-600">
                Start a Conversation
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-[6rem] font-serif text-black dark:text-white leading-[0.9] tracking-tight">
              Let's build <br />
              <span className="italic text-gray-400 dark:text-gray-500 font-light">your legacy.</span>
            </h2>
          </div>

          <button className="group flex items-center gap-4 text-black dark:text-white border-b border-black/20 dark:border-white/20 pb-4 hover:border-orange-600 dark:hover:border-orange-500 transition-all w-full lg:w-auto justify-between lg:justify-start">
            <span className="text-sm md:text-base uppercase tracking-[0.2em] font-bold group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              hello@studioarc.com
            </span>
            <ArrowUpRight size={24} className="group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* --- Middle Grid (Links & Newsletter) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Studio Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {/* Image only logo, text removed as requested */}
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=200&h=100&fit=crop" 
                alt="Studio Logo" 
                className="h-5 w-auto object-contain rounded-sm" 
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xs">
              A sustainable architecture and design practice focused on merging brutalist forms with organic materials.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black dark:text-white mb-2">Navigation</h4>
            {['Home', 'Studio Philosophy', 'Selected Works', 'Masterclasses', 'Shop Collection', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors w-fit">
                {item}
              </a>
            ))}
          </div>

          {/* Column 3: Contact / Location */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black dark:text-white mb-2">Locations</h4>
            <div className="mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1 text-black dark:text-white">Kerala Studio</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">124 Heritage Lane<br/>Kochi, KL 682001</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1 text-black dark:text-white">Auroville Outpost</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Earth Institute Rd<br/>Auroville, TN 605101</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black dark:text-white mb-2">Newsletter</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
              Subscribe for studio updates, workshop announcements, and design essays.
            </p>
            <form className="relative flex items-center border-b border-black/20 dark:border-white/20 focus-within:border-orange-600 dark:focus-within:border-orange-500 transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="w-full bg-transparent outline-none text-sm text-black dark:text-white placeholder:text-gray-400"
                required
              />
              <button type="submit" className="text-black dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors absolute right-0 p-1">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/5 dark:border-white/5">
          <p className="text-xs uppercase tracking-widest text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
            © {new Date().getFullYear()} Studio Arc. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-xs uppercase tracking-[0.2em] font-bold text-gray-600 dark:text-gray-400">
            <a href="#instagram" className="flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              <Instagram size={14} /> Instagram
            </a>
            <a href="#linkedin" className="flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="#twitter" className="flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              <Twitter size={14} /> Twitter (X)
            </a>
          </div>
        </div>

      </div>
    </footer>
    
   
  );
};

export default Footer;