'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button';
import { servicesData } from '../../data/services';

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

export default function Services() {
  return (
    <main className="w-full">
      {/* HEADER SECTION */}
      <section className="bg-primary text-bg-light pt-[100px] md:pt-[150px] pb-xl md:pb-[80px]">
        <div className="container-custom">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ marginBottom: 0 }}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Expertise</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Our Comprehensive Services</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              From initial conceptualization to final execution, we offer a full spectrum of luxury interior design services tailored to your unique requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      {servicesData.map((service, index) => {
        const isEven = index % 2 === 1; // 0-indexed, so 1, 3 are even visually alternating
        return (
          <section key={service.id} className={`py-xl md:py-2xl ${isEven ? 'bg-primary text-bg-light' : 'bg-bg-light text-text-dark'}`}>
            <div className="container-custom">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-2xl items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Text Content */}
                <div className={`flex flex-col order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">{service.subtitle}</span>
                  <h3 className="font-serif text-[2rem] md:text-[2.5rem] mb-md text-inherit">{service.title}</h3>
                  <p className="text-[1.1rem] leading-[1.8] opacity-80 mb-lg">{service.description}</p>
                  
                  <div className="flex flex-col gap-sm mt-md mb-lg">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-sm text-[1.05rem] opacity-90">
                        <FiCheckCircle size={20} className="text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Button variant={isEven ? "secondary" : "primary"} href={`/services/${service.id}`}>
                      Explore Service
                    </Button>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`relative h-[400px] lg:h-[600px] w-full rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.05]"
                    sizes="(max-width: 992px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

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
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary" href="/contact">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
