import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon, 
  ShoppingBag, 
  Calendar, 
  Search,
  ArrowRight,
  UserCog ,
  Hotel 
} from 'lucide-react';

import { Link } from "react-router-dom";
/**
 * Navbar.jsx 
 * IMPORTANT FIXES: 
 * - Removed 'bg-transparent' to prevent clashes with Vite's default dark background.
 * - Added strict 'bg-white' and 'text-black' fallbacks.
 */

const NAV_LINKS = [
  { name: 'Home', href: '/' },
{ name: 'Portfolio', href: "/portfolio" },
  { 
    name: 'Services', 
    href: '#', 
    dropdown: [
      { name: 'Workshops', href: '/workshops', icon: <Calendar size={16} />, desc: 'Sustainable design training' },
      { name: 'Consultation', href: '/consultation', icon: <UserCog size={16} />, desc: 'discussion between people before a decision is taken' },
      { name: 'Hospitality', href: '/hospitality', icon: <Hotel size={16} />, desc: 'looking after guests and being friendly' },

      { name: 'Shop', href: '/shop', icon: <ShoppingBag size={16} />, desc: 'Curated architectural products' }
    ] 
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },

];













const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  // Sync Dark Mode state with the HTML root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 text-black dark:text-white ${
        scrolled 
          ? 'py-3 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm' 
          : 'py-6 bg-white dark:bg-[#0a0a0a] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Identity / Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 bg-orange-600 rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-[135deg] duration-500">
            <span className="text-white -rotate-45 font-bold text-sm group-hover:rotate-[-135deg] transition-transform duration-500">M</span>
          </div>
          <h1 className="text-xl md:text-2xl font-serif tracking-tighter uppercase font-bold text-black dark:text-white transition-colors">
            Studio<span className="text-orange-600 italic">.</span>Arc
          </h1>
        </div>

        {/* Desktop Links - Hidden on smaller screens */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.href}
                className="flex items-center gap-1 text-[10px] uppercase tracking-[0.3em] font-black text-black dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors py-2"
              >
                
                {link.name}
                {link.dropdown && (
                  <ChevronDown 
                    size={12} 
                    className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                  />
                )}
              </Link>

              {/* Animated Dropdown Menu for Services */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 w-72 bg-white dark:bg-[#111111] shadow-2xl border border-gray-100 dark:border-white/5 p-3 rounded-xl mt-2"
                  >
                    {link.dropdown.map((sub) => (
                      <Link 
                        key={sub.name} 
                        to={sub.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 dark:hover:bg-white/5 transition-all group/item"
                      >
                        <div className="mt-1 p-2 bg-orange-100 dark:bg-orange-500/10 text-orange-600 rounded-md">
                          {sub.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold tracking-tight text-black dark:text-white">{sub.name}</p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-relaxed font-medium">{sub.desc}</p>
                        </div>
                        <ArrowRight size={14} className="ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-orange-600 self-center" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* User Interface Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors">
            <Search size={18} strokeWidth={2.5} />
          </button>
          
          {/* Dark Mode Switcher */}
          <button 
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-orange-600 dark:text-orange-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden ml-2 p-2 border border-black/10 dark:border-white/10 rounded-lg text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#0a0a0a] p-8 pt-24 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-8">
                {NAV_LINKS.map((link) => (
                  <div key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-3xl font-serif text-black dark:text-white hover:text-orange-600 transition-colors block font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="mt-4 ml-4 flex flex-col gap-4 border-l-2 border-orange-100 dark:border-white/10 pl-6">
                        {link.dropdown.map(sub => (
                          <Link 
                            key={sub.name} 
                            to={sub.href} 
                            className="text-[10px] uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-black"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;