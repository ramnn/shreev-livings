'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-in-out ${isScrolled ? 'bg-[#131F38]/98 backdrop-blur-md py-sm shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'py-md bg-primary'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="font-serif text-[1.5rem] font-medium text-text-dark tracking-[0.02em]">
          <Image src="/images/logo.png" alt="Shreev Livings Logo" width={180} height={90} style={{ objectFit: 'contain' }} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-lg">
          <Link href="/about" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">About</Link>
          <Link href="/services" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Services</Link>
          <Link href="/materials" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Materials</Link>
          <Link href="/lightings" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Lightings</Link>
          <Link href="/portfolio" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Portfolio</Link>
          <Button variant="primary" href="/contact">Book Consultation</Button>
        </nav>

        <button
          className="block md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="flex flex-col absolute top-full left-0 w-full bg-primary p-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/about" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/services" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/materials" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Materials</Link>
            <Link href="/lightings" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Lightings</Link>
            <Link href="/portfolio" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Button variant="primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)} href="/contact">
              Book Consultation
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
