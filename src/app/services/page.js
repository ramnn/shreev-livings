'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button';
import CtaSection from '../../components/CtaSection';
import SectionHeader from '../../components/SectionHeader';
import { servicesData } from '../../data/services';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

export default function Services() {
  return (
    <main className="w-full">
      <section className="bg-primary py-xl text-bg-light md:py-2xl" style={{ paddingTop: '100px' }}>
        <div className="container-custom">
          <SectionHeader eyebrow="Expertise" title="Our Comprehensive Services" description="A full spectrum of luxury design support, from first concept to final styling and handover." dark />
        </div>
      </section>

      {servicesData.map((service, index) => {
        const isEven = index % 2 === 1;

        return (
          <section key={service.id} className={isEven ? 'bg-primary py-xl text-bg-light md:py-2xl' : 'bg-bg-light py-xl text-text-dark md:py-2xl'}>
            <div className="container-custom">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="grid items-center gap-lg lg:grid-cols-2"
              >
                <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.span variants={fadeInUp} className="mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary">
                    {service.subtitle}
                  </motion.span>
                  <motion.h2 variants={fadeInUp} className="mb-md font-serif text-[2.2rem] leading-tight md:text-[2.8rem]">
                    {service.title}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="mb-lg text-[1.05rem] leading-[1.8] opacity-80">
                    {service.description}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="mb-lg space-y-sm">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-sm text-[1rem] leading-[1.7]">
                        <FiCheckCircle className="mt-1 flex-shrink-0 text-secondary" size={18} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Button variant={isEven ? 'secondary' : 'primary'} href={`/services/${service.id}`}>
                      Explore Service
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  variants={fadeInUp}
                  className={`order-1 relative h-[360px] overflow-hidden rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] md:h-[520px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </section>
        );
      })}

      <CtaSection title="Ready to transform your space?" buttonLabel="Start Your Project" href="/contact" />
    </main>
  );
}
