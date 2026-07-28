'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 }
  }
};

export default function Portfolio() {
  return (
    <main className="w-full">
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark" style={{ paddingTop: '100px' }}>
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md md:gap-0 mb-xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div>
              <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Selected Works</motion.span>
              <motion.h2 variants={fadeInUp} className="font-serif text-[2rem] md:text-[3rem] mb-sm text-inherit">Recent Projects</motion.h2>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-md"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group" variants={fadeInUp}>
              <div className="absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]">
                <Image 
                  src="/images/portfolio_bedroom_1779040259154.png" 
                  alt="Modern Master Bedroom" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100">
                <span className="text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0">Residential</span>
                <h3 className="text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0">The Evergreen Estate</h3>
              </div>
            </motion.div>
            <motion.div className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group" variants={fadeInUp} style={{ marginTop: '60px' }}>
              <div className="absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]">
                <Image 
                  src="/images/portfolio_office_1779040274216.png" 
                  alt="Chic Home Office" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100">
                <span className="text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0">Workspace</span>
                <h3 className="text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0">Metropolitan Studio</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-xl md:py-[8rem] bg-secondary text-primary text-center">
        <div className="container-custom">
          <motion.h2 
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] mb-[2rem] text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to transform your space?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
