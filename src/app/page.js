'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FiAward,
  FiBox,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiKey,
  FiLayers,
  FiMapPin,
  FiPenTool,
  FiPhone,
  FiPlus,
  FiShield,
  FiStar,
} from 'react-icons/fi';
import Button from '../components/Button';
import CtaSection from '../components/CtaSection';
import SectionHeader from '../components/SectionHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const stats = [
  { icon: FiHome, value: '100+', label: 'homes delivered' },
  { icon: FiMapPin, value: '5+', label: 'cities served' },
  { icon: FiLayers, value: '3', label: 'stores' },
  { icon: FiStar, value: '4.8★', label: 'average rating' },
];

const services = [
  { icon: FiKey, title: 'Turnkey Projects', description: 'End-to-end management from concept to final styling and handover.' },
  { icon: FiHome, title: 'Residential Design', description: 'Luxury homes designed around comfort, flow, and personal identity.' },
  { icon: FiLayers, title: 'Commercial Spaces', description: 'Workplaces and boutiques shaped for efficiency and brand presence.' },
  { icon: FiBox, title: '3D Visualization', description: 'Photorealistic previews to help clients make confident choices.' },
  { icon: FiPenTool, title: 'Custom Furniture', description: 'Bespoke pieces created to fit your exact lifestyle and dimensions.' },
  { icon: FiClock, title: 'Renovation & Styling', description: 'Transform existing spaces with premium materials and thoughtful detailing.' },
];

const process = [
  { no: '01', title: 'Consultation', description: 'We understand your vision, priorities, style, and project scope.' },
  { no: '02', title: 'Concept Design', description: 'Moodboards, layouts, and material direction begin to shape the experience.' },
  { no: '03', title: '3D Preview', description: 'Realistic visuals help you feel the space before execution begins.' },
  { no: '04', title: 'Material Selection', description: 'Premium finishes and custom pieces are aligned with your final vision.' },
  { no: '05', title: 'Execution', description: 'Our team coordinates quality checks, timelines, and craftsmanship.' },
  { no: '06', title: 'Styling & Handover', description: 'Every detail is refined before you step into your finished space.' },
];

const features = [
  { icon: FiAward, title: 'Uncompromising Quality', description: 'Premium selection of materials and long-lasting craftsmanship.' },
  { icon: FiShield, title: 'End-to-End Execution', description: 'Every stage handled with clarity, accountability, and attention to detail.' },
  { icon: FiStar, title: 'Bespoke Philosophy', description: 'Each project is designed around your way of living and entertaining.' },
  { icon: FiClock, title: 'On-Time Delivery', description: 'Structured planning keeps your project moving without unnecessary delay.' },
];

const portfolioPreview = [
  { title: 'The Evergreen Estate', category: 'Residential', image: '/images/portfolio_bedroom_1779040259154.png' },
  { title: 'Metropolitan Studio', category: 'Workspace', image: '/images/portfolio_office_1779040274216.png' },
];

const faqs = [
  { question: 'What makes Shreev Livings different?', answer: 'We combine luxury aesthetics with practical living. Every space is designed for comfort, function, and a lasting impression.' },
  { question: 'Do you handle full execution?', answer: 'Yes. Our turnkey process includes design, sourcing, coordination, installation, and final styling.' },
  { question: 'Can you work within a budget?', answer: 'Absolutely. We align the design with your goals and keep the scope honest, efficient, and realistic.' },
  { question: 'Do you offer custom furniture?', answer: 'Yes, we create bespoke furniture and joinery to suit the proportions and character of your space.' },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-md">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-md py-sm text-left"
      >
        <span className="font-serif text-[1.2rem] text-inherit">{question}</span>
        <FiPlus className={`text-secondary transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} size={22} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="pb-sm text-[1rem] leading-[1.8] text-white/75">{answer}</p>
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const { scrollYProgress: aboutScroll } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });

  const heroY = useTransform(heroScroll, [0, 1], ['0%', '18%']);
  const aboutImageY = useTransform(aboutScroll, [0, 1], ['-10%', '12%']);

  return (
    <main className="w-full">
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-[100px] pb-[120px] text-bg-light">
        <div className="container-custom grid w-full items-center gap-lg md:grid-cols-2 md:gap-xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="z-10">
            <motion.h1 variants={fadeInUp} className="mb-md font-serif text-[2.1rem] leading-[1.1] md:text-[clamp(3rem,5vw,5.5rem)]">
              Designing Spaces That Breathe.
            </motion.h1>

            <motion.p variants={fadeInUp} className="mb-lg max-w-full text-[1.1rem] leading-[1.8] text-white/85">
              Shreev Livings creates refined interiors that blend luxury, comfort, and personality into every room.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-md sm:flex-row">
              <Button variant="accent" href="/portfolio">Explore Projects</Button>
              <Button variant="secondary" href="/contact">Book Consultation</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[42vh] min-h-[300px] w-full overflow-hidden rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:h-[72vh]"
          >
            <motion.div style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: heroY }}>
              <Image src="/images/hero_interior_1779040229551.png" alt="Luxury interior" fill className="object-cover" priority />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 -mt-[60px] mb-lg md:-mt-[80px]">
        <div className="container-custom">
          <div className="rounded-[20px] border border-white/10 bg-[#131F38]/90 px-[1.5rem] py-[1rem] text-bg-light shadow-[0_30px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-lg text-center">
              <motion.h2 variants={fadeInUp} className="font-serif text-[1.9rem] md:text-[2rem]">Numbers that tell our story</motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid grid-cols-1 gap-lg text-center sm:grid-cols-2 md:grid-cols-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div key={label} variants={fadeInUp} className="group flex flex-col items-center">
                  <div className="mb-sm flex h-[50px] w-[50px] items-center justify-center rounded-[12px] border border-white/20 transition-all duration-300 group-hover:-translate-y-[5px] group-hover:border-secondary">
                    <Icon size={24} className="text-bg-light group-hover:text-secondary" />
                  </div>
                  <div className="mb-xs font-serif text-[2rem]">{value}</div>
                  <div className="text-[0.9rem] uppercase tracking-[0.08em] text-white/75">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="bg-bg-light py-xl text-text-dark md:py-2xl">
        <div className="container-custom grid items-center gap-xl md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="md:pr-xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">About Us</motion.span>
            <motion.h2 variants={fadeInUp} className="mb-sm font-serif text-[2.2rem] md:text-[3rem]">Crafting Timeless Interiors</motion.h2>
            <motion.p variants={fadeInUp} className="mb-lg text-[1.08rem] leading-[1.8] text-text-dark/80">
              At Shreev Livings, we believe interiors should shape the way you live, feel, and connect. Our work blends clean geometry, premium finishes, and human warmth into timeless spaces.
            </motion.p>
            <motion.p variants={fadeInUp} className="mb-lg text-[1.08rem] leading-[1.8] text-text-dark/80">
              From residences to hospitality and commercial concepts, we craft spaces that feel elevated, effortless, and deeply personal.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-[2.5rem]">
              <Button variant="primary" href="/about">Read Our Story</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:h-[600px]"
          >
            <motion.div style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: aboutImageY }}>
              <Image src="/images/about_interior_1779040244800.png" alt="Minimalist kitchen" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom">
          <SectionHeader eyebrow="Our Expertise" title="Bespoke Services" description="Thoughtful design support for homes, studios, and commercial environments." dark />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeInUp} whileHover={{ y: -8 }} className="rounded-[8px] border border-white/10 bg-white/5 p-xl transition-all duration-300 hover:border-secondary/50 hover:bg-white/10">
                <Icon size={38} className="mb-md text-secondary" />
                <h3 className="mb-sm font-serif text-[1.5rem]">{title}</h3>
                <p className="text-[1rem] leading-[1.7] text-white/75">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-bg-light py-xl text-text-dark md:py-2xl">
        <div className="container-custom">
          <SectionHeader eyebrow="How We Work" title="The Design Process" description="A clear process that keeps creativity aligned with clarity, quality, and time." />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
            {process.map(({ no, title, description }) => (
              <motion.div key={no} variants={fadeInUp} className="group relative rounded-[8px] border border-black/5 bg-white p-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-[8px] hover:border-secondary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <span className="absolute right-[20px] top-[18px] font-serif text-[4rem] leading-none text-secondary/20 transition-all duration-300 group-hover:text-secondary/40">{no}</span>
                <h3 className="relative z-10 mb-sm mt-lg font-serif text-[1.5rem]">{title}</h3>
                <p className="relative z-10 text-[0.95rem] leading-[1.7] text-text-dark/75">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom">
          <SectionHeader eyebrow="Our Features" title="The Shreev Advantage" description="A luxury standard built on trust, clarity, and remarkable execution." dark />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={fadeInUp} className="border-b border-white/10 pb-lg text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-lg last:border-r-0">
                <Icon size={38} className="mx-auto mb-md text-secondary" />
                <h3 className="mb-sm font-serif text-[1.35rem]">{title}</h3>
                <p className="text-[0.95rem] leading-[1.7] text-white/75">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-bg-light py-xl text-text-dark md:py-2xl">
        <div className="container-custom">
          <div className="mb-xl flex flex-col items-start justify-between gap-md md:flex-row md:items-end">
            <div>
              <span className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">Selected Works</span>
              <h2 className="font-serif text-[2.2rem] md:text-[3rem]">Our Portfolio</h2>
            </div>
            <Button variant="secondary" href="/portfolio">View All Projects</Button>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-md md:grid-cols-2">
            {portfolioPreview.map(({ title, category, image }) => (
              <motion.div key={title} variants={fadeInUp} className="group relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:h-[540px]">
                <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-xl text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="mb-sm block text-[0.8rem] uppercase tracking-[0.15em] text-secondary">{category}</span>
                  <h3 className="font-serif text-[2.1rem] leading-tight">{title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-bg-light py-xl text-text-dark md:py-2xl">
        <div className="container-custom">
          <SectionHeader eyebrow="Our Resources" title="Curated Libraries" description="Explore premium finishes, surfaces, and lighting direction for your next transformation." />

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-md md:grid-cols-2">
            <motion.div variants={fadeInUp} className="group relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <Image src="/images/luxury_tiles_material_1780893606024.png" alt="Material library" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111e]/80 to-[#0a111e]/20" />
              <div className="absolute inset-x-0 bottom-0 p-xl text-white">
                <span className="mb-sm block text-[0.8rem] uppercase tracking-[0.15em] text-secondary">Textures & surfaces</span>
                <h3 className="font-serif text-[2.1rem]">Materials Library</h3>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <Image src="/images/lux_chandelier_1780896539792.png" alt="Lighting library" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a111e]/80 to-[#0a111e]/20" />
              <div className="absolute inset-x-0 bottom-0 p-xl text-white">
                <span className="mb-sm block text-[0.8rem] uppercase tracking-[0.15em] text-secondary">Illumination</span>
                <h3 className="font-serif text-[2.1rem]">Lighting Showcase</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom grid items-start gap-lg lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">FAQ</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem]">Elevating Everyday Living</motion.h2>
            <motion.p variants={fadeInUp} className="mt-lg max-w-full text-[1.08rem] leading-[1.8] text-white/75">
              We design with everyday rituals in mind, balancing beauty, function, and personal comfort in each room.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="flex flex-col gap-md">
            {faqs.map((faq) => (
              <motion.div key={faq.question} variants={fadeInUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* <CtaSection title="Ready to transform your space?" buttonLabel="Start Your Project" href="/contact" /> */}
    </main>
  );
}
