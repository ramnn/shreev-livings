'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Button from '../../components/Button';
import CtaSection from '../../components/CtaSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const missionPoints = [
  {
    title: 'Design with intention',
    text: 'We create spaces that reflect your life, daily rhythm, and emotional comfort—not just trends.',
  },
  {
    title: 'Material honesty',
    text: 'Every finish, texture, and detail is chosen to add warmth, longevity, and tactile beauty.',
  },
  {
    title: 'Precision in execution',
    text: 'From concept sketches to final styling, we manage every layer with clarity and control.',
  },
];

const visionPillars = [
  'Spaces that feel elevated, effortless, and lived in',
  'Design that bridges luxury with real-world practicality',
  'A calmer, more meaningful way of living and working',
  'Projects shaped by trust, creativity, and timeless detail',
];

const founderJourney = [
  {
    year: '2012',
    title: 'The first spark',
    text: 'Our founder began with a simple belief: beautiful spaces should make people feel more at ease, more inspired, and more connected to home.',
  },
  {
    year: '2016',
    title: 'A design practice takes shape',
    text: 'What started as a passion evolved into a studio approach rooted in custom solutions, premium finishes, and personalized execution.',
  },
  {
    year: 'Now',
    title: 'Crafting lasting experiences',
    text: 'Today, Shreev Livings continues to shape homes and commercial spaces that balance aesthetics, functionality, and emotional resonance.',
  },
];

const projectHighlights = [
  {
    title: 'Bespoke living villas',
    text: 'Luxury residential interiors designed around comfort, flow, and everyday ritual.',
    image: '/images/portfolio_bedroom_1779040259154.png',
    tag: 'Residential',
  },
  {
    title: 'Commercial elegance',
    text: 'Workplaces and hospitality environments that feel refined, efficient, and memorable.',
    image: '/images/portfolio_office_1779040274216.png',
    tag: 'Commercial',
  },
  {
    title: 'Turnkey transformation',
    text: 'Full-scope interior solutions delivered with a seamless process from concept to finishing.',
    image: '/images/hero_interior_1779040229551.png',
    tag: 'Turnkey',
  },
];

export default function About() {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '12%']);

  return (
    <main className="w-full">
      <section ref={aboutRef} className="bg-bg-light py-xl text-text-dark md:py-2xl" style={{ paddingTop: '100px' }}>
        <div className="container-custom grid items-center gap-xl md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="md:pr-xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Our Philosophy
            </motion.span>
            <motion.h1 variants={fadeInUp} className="mb-sm font-serif text-[2.3rem] leading-tight md:text-[3rem]">
              Form meets perfect function.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-lg text-[1.08rem] leading-[1.8] text-text-dark/80">
              At Shreev Livings, we believe that your environment profoundly impacts your well-being. Our approach to interior design goes beyond simple aesthetics; we craft functional art that elevates your daily life.
            </motion.p>
            <motion.p variants={fadeInUp} className="mb-lg text-[1.08rem] leading-[1.8] text-text-dark/80">
              Whether it’s a sprawling residential estate or a boutique commercial space, we bring a meticulous eye for detail, premium materials, and a deep understanding of spatial harmony to every project.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-[2.5rem]">
              <Button variant="primary" href="/contact">Book Consultation</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:h-[600px]"
          >
            <motion.div style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: imageY }}>
              <Image src="/images/about_interior_1779040244800.png" alt="Luxurious interior" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="mission" className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Mission
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.1rem] md:text-[3rem] text-text-dark">
              To turn everyday spaces into deeply personal, beautifully lived environments.
            </motion.h2>
          </motion.div>

          <div className="grid gap-xl md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-lg md:grid-cols-3">
              {missionPoints.map((item) => (
                <motion.article key={item.title} variants={fadeInUp} className="rounded-[8px] border border-primary/10 bg-white p-lg shadow-[0_10px_30px_rgba(19,31,56,0.04)]">
                  <div className="mb-md h-10 w-10 rounded-full bg-secondary/15 text-center text-[1.2rem] leading-10 text-primary">•</div>
                  <h3 className="mb-sm font-serif text-[1.5rem] text-primary">{item.title}</h3>
                  <p className="text-[1rem] leading-[1.8] text-text-dark/75">{item.text}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-[360px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.07)]">
              <Image src="/images/hero_interior_1779040229551.png" alt="Mission and design concept" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom grid gap-xl md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Vision
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mb-md font-serif text-[2.1rem] md:text-[3rem]">
              Redefining luxury as a feeling of ease, beauty, and belonging.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.06rem] leading-[1.8] text-white/80">
              We envision interiors that honour both architectural intent and human experience—where every line, material, and light source contributes to a life that feels elevated and natural.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-md sm:grid-cols-2">
            {visionPillars.map((item, index) => (
              <motion.div key={item} variants={fadeInUp} className="rounded-[8px] border border-white/10 bg-white/5 p-lg backdrop-blur-sm">
                <div className="mb-sm flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10 font-serif text-[1.1rem] text-secondary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-[1rem] leading-[1.8] text-white/80">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="founder-journey" className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl max-w-3xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Founder journey
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.1rem] md:text-[3rem] text-text-dark">
              Built from curiosity, craft, and a love for meaningful spaces.
            </motion.h2>
          </motion.div>

          <div className="grid gap-lg md:grid-cols-3">
            {founderJourney.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative rounded-[8px] border border-primary/10 bg-white p-xl shadow-[0_10px_30px_rgba(19,31,56,0.04)]"
              >
                <div className="mb-md inline-flex rounded-full border border-secondary/40 bg-secondary/10 px-sm py-xs font-sans text-[0.75rem] uppercase tracking-[0.12em] text-primary">
                  {item.year}
                </div>
                <h3 className="mb-sm font-serif text-[1.7rem] text-primary">{item.title}</h3>
                <p className="text-[1rem] leading-[1.8] text-text-dark/75">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-bg-light pb-xl md:pb-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl text-center">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Projects brief
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.1rem] md:text-[3rem] text-text-dark">
              Signature work shaped by thoughtful detail and lasting comfort.
            </motion.h2>
          </motion.div>

          <div className="grid gap-xl md:grid-cols-3">
            {projectHighlights.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="overflow-hidden rounded-[8px] bg-white shadow-[0_10px_30px_rgba(19,31,56,0.05)]"
              >
                <div className="relative h-[270px] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-lg">
                  <span className="mb-sm inline-block rounded-full border border-primary/15 bg-primary/5 px-sm py-xs text-[0.7rem] uppercase tracking-[0.12em] text-primary">
                    {project.tag}
                  </span>
                  <h3 className="mb-sm font-serif text-[1.7rem] text-primary">{project.title}</h3>
                  <p className="text-[1rem] leading-[1.8] text-text-dark/75">{project.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to transform your space?" buttonLabel="Start Your Project" href="/contact" />
    </main>
  );
}
