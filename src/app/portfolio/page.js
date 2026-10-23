'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CtaSection from '../../components/CtaSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const projects = [
  {
    title: 'The Evergreen Estate',
    category: 'Residential',
    image: '/images/portfolio_bedroom_1779040259154.png',
    description: 'Warm minimalism with layered textures, bespoke furniture, and thoughtfully carved living zones.',
  },
  {
    title: 'Metropolitan Studio',
    category: 'Workspace',
    image: '/images/portfolio_office_1779040274216.png',
    description: 'A high-performing office concept balancing elegant finishes with modern productivity and comfort.',
  },
];

export default function Portfolio() {
  return (
    <main className="w-full">
      <section className="bg-bg-light py-xl text-text-dark md:py-2xl" style={{ paddingTop: '100px' }}>
        <div className="container-custom">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Selected Works
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-serif text-[2.4rem] leading-tight md:text-[3rem]">
              Recent Projects
            </motion.h1>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-md md:grid-cols-2">
            {projects.map(({ title, category, image, description }, index) => (
              <motion.article key={title} variants={fadeInUp} className={`${index % 2 === 1 ? 'md:mt-[60px]' : ''}`}>
                <div className="group relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:h-[560px]">
                  <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-xl text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="mb-sm block text-[0.8rem] uppercase tracking-[0.15em] text-secondary">{category}</span>
                    <h2 className="font-serif text-[2.1rem] leading-tight">{title}</h2>
                  </div>
                </div>
                <p className="mt-md max-w-xl text-[1rem] leading-[1.8] text-text-dark/75">{description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection title="Ready to transform your space?" buttonLabel="Start Your Project" href="/contact" />
    </main>
  );
}
