'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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

export default function About() {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImageY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);

  return (
    <main className="w-full">
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark" style={{ paddingTop: '100px' }} ref={aboutRef}>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <motion.div 
            className="md:pr-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Our Philosophy</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2rem] md:text-[3rem] mb-sm text-inherit">Form meets perfect function.</motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg">
              At Shreev Livings, we believe that your environment profoundly impacts your well-being. Our approach to interior design goes beyond simple aesthetics; we craft functional art that elevates your daily life.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg">
              Whether it's a sprawling residential estate or a boutique commercial space, we bring a meticulous eye for detail, premium materials, and a deep understanding of spatial harmony to every project.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ marginTop: '2.5rem' }}>
              <Button variant="primary">Read Our Story</Button>
            </motion.div>
          </motion.div>
          
          <div className="aboutImageContainer">
            <motion.div 
              className="relative h-[400px] md:h-[600px] rounded-[4px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: aboutImageY }}>
                <Image 
                  src="/images/about_interior_1779040244800.png" 
                  alt="Minimalist Kitchen Design" 
                  fill 
                  className="object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </motion.div>
          </div>
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
