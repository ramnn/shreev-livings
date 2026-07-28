'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { servicesData } from '../../../data/services';
import Button from '../../../components/Button';
import { FiCheckCircle } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function ServiceDetail({ params }) {
  // In Next.js 15+ or React 19, `params` is a promise and must be unwrapped
  const resolvedParams = use(params);
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#131F38]/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center text-bg-light pt-2xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[1rem] text-secondary mb-md block">
              {service.subtitle}
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-[2.5rem] md:text-[4.5rem] mb-md text-inherit leading-tight">
              {service.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SERVICE SECTION */}
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <motion.div 
            className="md:pr-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Overview</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">The Philosophy</motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg">
              {service.aboutService}
            </motion.p>
          </motion.div>
          <motion.div 
            className="bg-primary text-bg-light p-xl rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-[1.8rem] mb-md text-secondary">Key Benefits</h3>
            <div className="flex flex-col gap-md">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-sm">
                  <FiCheckCircle size={22} className="text-secondary mt-[2px] flex-shrink-0" />
                  <p className="text-[1.05rem] opacity-90 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-xl md:py-2xl bg-primary text-bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Our Methodology</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">The Process</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {service.process.map((p, idx) => (
              <motion.div 
                key={idx}
                className="bg-[#1C2C4E] p-lg rounded-[8px] border border-white/5 hover:border-secondary/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
              >
                <span className="font-serif text-[3rem] text-secondary/40 block mb-sm">{p.step}</span>
                <h4 className="font-serif text-[1.5rem] mb-sm text-inherit">{p.title}</h4>
                <p className="text-[1rem] opacity-70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
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
            Let's start your project
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary" href="/contact">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
