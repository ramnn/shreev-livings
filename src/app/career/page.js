'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiCompass,
  FiStar,
  FiUsers,
} from 'react-icons/fi';
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

const stats = [
  { value: '8+', label: 'Years of delivering premium interiors' },
  { value: '25+', label: 'Design projects completed across residential and commercial spaces' },
  { value: '90%', label: 'Clients who return for future work or referrals' },
];

const openRoles = [
  {
    title: 'Interior Designer',
    type: 'Full Time',
    details: ['Space planning and concept development', 'Client presentation & material selection', 'Mood boards, layouts, and styling direction'],
  },
  {
    title: 'Project Coordinator',
    type: 'Full Time',
    details: ['Site coordination and vendor liaison', 'Execution tracking and timeline updates', 'Communication between design, procurement, and contractors'],
  },
  {
    title: '3D Visualizer',
    type: 'Hybrid',
    details: ['Luxury interior rendering and design storytelling', 'Material visualization and lighting studies', 'Collaboration with design and sales teams'],
  },
];

const values = [
  { icon: FiCompass, title: 'Design-led thinking', text: 'We value creative clarity, thoughtful planning, and spaces that feel deeply personal.' },
  { icon: FiUsers, title: 'Collaborative culture', text: 'Our work is shaped by teamwork, open communication, and respect for each voice.' },
  { icon: FiAward, title: 'Craftsmanship mindset', text: 'We care about details, finish quality, and a client experience that feels seamless.' },
  { icon: FiStar, title: 'Growth opportunity', text: 'From mentorship to leadership exposure, we invest in your learning and long-term design career.' },
];

const candidateHighlights = [
  'Strong eye for design, materials, and spatial flow',
  'Ability to translate ideas into practical, client-friendly solutions',
  'Attention to detail and ownership mindset',
  'Excellent communication and presentation skills',
  'Passion for luxury interiors and modern living',
  'Willingness to learn, adapt, and deliver exceptional work',
];

const hiringProcess = [
  'Apply with your portfolio and resume',
  'Initial conversation with the design leadership team',
  'Portfolio review and role-specific discussion',
  'Final interview and onboarding plan',
];

const benefits = [
  'Competitive salary and performance incentives',
  'Creative, fast-paced work environment',
  'Exposure to premium residential and commercial projects',
  'Career growth, mentoring, and design leadership opportunities',
  'Flexible and motivating team culture',
];

export default function Career() {
  return (
    <main className="w-full">
      <section className="bg-primary py-xl text-bg-light md:py-2xl" style={{ paddingTop: '100px' }}>
        <div className="container-custom grid items-center gap-xl md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Careers at Shreev Livings
            </motion.span>
            <motion.h1 variants={fadeInUp} className="mb-md font-serif text-[2.5rem] leading-tight md:text-[4rem]">
              Build spaces that transform how people live.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mb-lg max-w-xl text-[1.08rem] leading-[1.8] text-white/80">
              Join a design studio where creativity, craftsmanship, and client experience come together to craft timeless interiors for modern life.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-md">
              <Button variant="accent" href="/contact">Apply Now</Button>
              <Button variant="secondary" href="/services">Explore Our Work</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:h-[560px]"
          >
            <Image src="/images/portfolio_bedroom_1779040259154.png" alt="Luxury interior design studio" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-xl text-center">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Why join us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-text-dark">
              A design career shaped by creativity, detail, and purpose.
            </motion.h2>
          </motion.div>

          <div className="grid gap-lg md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-primary/10 bg-white p-xl text-center shadow-[0_10px_30px_rgba(19,31,56,0.04)]">
                <div className="mb-sm font-serif text-[2.5rem] text-primary">{stat.value}</div>
                <p className="text-[1rem] leading-[1.8] text-text-dark/75">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl max-w-3xl">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Our values
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem]">
              Thoughtful design starts with people, process, and passion.
            </motion.h2>
          </motion.div>

          <div className="grid gap-lg md:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-white/10 bg-white/5 p-lg backdrop-blur-sm">
                <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Icon size={22} />
                </div>
                <h3 className="mb-sm font-serif text-[1.6rem] text-bg-light">{title}</h3>
                <p className="text-[1rem] leading-[1.8] text-white/75">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl text-center">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Open roles
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-text-dark">
              Join the studio behind luxurious, liveable spaces.
            </motion.h2>
          </motion.div>

          <div className="grid gap-lg lg:grid-cols-3">
            {openRoles.map((role) => (
              <motion.article key={role.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-primary/10 bg-white p-xl shadow-[0_10px_30px_rgba(19,31,56,0.04)]">
                <div className="mb-md flex items-center justify-between gap-sm">
                  <h3 className="font-serif text-[1.8rem] text-primary">{role.title}</h3>
                  <span className="rounded-full border border-secondary/40 bg-secondary/10 px-sm py-xs text-[0.7rem] uppercase tracking-[0.12em] text-primary">
                    {role.type}
                  </span>
                </div>

                <ul className="space-y-sm text-[1rem] leading-[1.8] text-text-dark/75">
                  {role.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-sm">
                      <FiCheckCircle className="mt-1 flex-shrink-0 text-secondary" size={18} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-lg">
                  <Button variant="primary" href="/contact">
                    Apply for this role
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom grid gap-xl md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[420px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <Image src="/images/about_interior_1779040244800.png" alt="Interior design team" fill className="object-cover" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Who we’re looking for
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mb-md font-serif text-[2.2rem] md:text-[3rem] text-text-dark">
              People who care deeply about design and detail.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-md">
              {candidateHighlights.map((item) => (
                <div key={item} className="flex items-start gap-sm text-[1rem] leading-[1.8] text-text-dark/75">
                  <FiArrowRight className="mt-1 flex-shrink-0 text-secondary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-xl text-bg-light md:py-2xl">
        <div className="container-custom grid gap-xl md:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Benefits & growth
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mb-md font-serif text-[2.2rem] md:text-[3rem]">
              A studio environment where talent can grow with the brand.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-md">
            {benefits.map((benefit) => (
              <motion.div key={benefit} variants={fadeInUp} className="flex items-start gap-sm rounded-[8px] border border-white/10 bg-white/5 p-md">
                <FiBriefcase className="mt-1 flex-shrink-0 text-secondary" size={18} />
                <span className="text-[1rem] leading-[1.8] text-white/80">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-bg-light py-xl md:py-2xl">
        <div className="container-custom">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-xl text-center">
            <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
              Hiring process
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-text-dark">
              A simple, respectful process from first conversation to onboarding.
            </motion.h2>
          </motion.div>

          <div className="grid gap-lg md:grid-cols-4">
            {hiringProcess.map((step, index) => (
              <motion.div key={step} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[8px] border border-primary/10 bg-white p-lg text-center shadow-[0_10px_30px_rgba(19,31,56,0.04)]">
                <div className="mb-sm inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 font-serif text-[1.1rem] text-primary">
                  {index + 1}
                </div>
                <p className="text-[1rem] leading-[1.8] text-text-dark/75">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to join a team that shapes beautiful living spaces?" buttonLabel="Get in Touch" href="/contact" />
    </main>
  );
}
