'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [turnkeyDropdownOpen, setTurnkeyDropdownOpen] = useState(false);

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
          <Image src="/images/logo.png" alt="Shreev Livings Logo" width={200} height={100} style={{ objectFit: 'contain' }} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-lg">
          <Link href="/about" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">About US</Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-2 text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full"
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
            >
              <span>Services</span>
              <FiChevronDown size={14} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-4 w-64 rounded-md border border-white/10 bg-[#131F38]/95 p-2 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm"
                >
                  <div className="relative">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-white/5 hover:text-accent"
                      onClick={() => setTurnkeyDropdownOpen((prev) => !prev)}
                    >
                      <span>Turnkey</span>
                      <FiChevronDown size={12} className={`transition-transform ${turnkeyDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {turnkeyDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 ml-2 rounded-md border border-white/10 bg-[#1B2B4E] p-2"
                        >
                          <Link href="/services/residential" className="block rounded-md px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/90 hover:bg-white/5 hover:text-accent" onClick={() => { setServicesDropdownOpen(false); setTurnkeyDropdownOpen(false); }}>Residential</Link>
                          <Link href="/services/commercial" className="block rounded-md px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/90 hover:bg-white/5 hover:text-accent" onClick={() => { setServicesDropdownOpen(false); setTurnkeyDropdownOpen(false); }}>Commercial</Link>
                          <Link href="/services/hospitality" className="block rounded-md px-3 py-2 text-xs uppercase tracking-[0.12em] text-white/90 hover:bg-white/5 hover:text-accent" onClick={() => { setServicesDropdownOpen(false); setTurnkeyDropdownOpen(false); }}>Hospitality</Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/services/modular"
                    className="mt-2 block rounded-md px-3 py-2 text-sm uppercase tracking-[0.12em] text-white/90 transition-colors hover:bg-white/5 hover:text-accent"
                    onClick={() => { setServicesDropdownOpen(false); setTurnkeyDropdownOpen(false); }}
                  >
                    Modular
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/career" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Career</Link>
          <Link href="/portfolio" className="text-[0.85rem] uppercase tracking-[0.15em] font-medium text-white relative transition-fast after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-fast hover:text-accent hover:after:w-full">Projects</Link>
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

            <div className="border-b border-white/5 py-md">
              <div className="flex items-center justify-between text-[1.1rem] text-white">
                <span>Services</span>
                <FiChevronDown size={16} className="text-white/80" />
              </div>

              <div className="mt-md ml-3 space-y-md">
                <div>
                  <div className="mb-sm text-white/80 uppercase tracking-[0.12em] text-sm">Turnkey</div>
                  <div className="space-y-md pl-2">
                    <Link href="/services/residential" className="block text-white/90" onClick={() => setMobileMenuOpen(false)}>Residential</Link>
                    <Link href="/services/commercial" className="block text-white/90" onClick={() => setMobileMenuOpen(false)}>Commercial</Link>
                    <Link href="/services/hospitality" className="block text-white/90" onClick={() => setMobileMenuOpen(false)}>Hospitality</Link>
                  </div>
                </div>
                <Link href="/services/modular" className="block text-white/90" onClick={() => setMobileMenuOpen(false)}>Modular</Link>
              </div>
            </div>

            <Link href="/career" className="py-md text-[1.1rem] text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Career</Link>
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
