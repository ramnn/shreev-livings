'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiHome, FiLayout, FiBox, FiKey, FiLayers, FiPenTool, FiPlus, FiAward, FiClock, FiStar, FiShield, FiMapPin } from 'react-icons/fi';
import Button from '../components/Button';

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-black/10 pb-md">
      <div className="flex justify-between items-center font-serif text-[1.4rem] text-inherit cursor-pointer py-sm transition-fast hover:text-secondary" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <FiPlus className="text-secondary transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}" size={24} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-inherit opacity-80 leading-[1.8] pt-sm pb-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutImageY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section ref={heroRef} className="min-h-screen bg-primary text-bg-light flex items-center relative overflow-hidden pt-[100px] pb-[120px]">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl items-center w-full pt-md pb-xl md:py-0">
          <motion.div 
            className="text-bg-light z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="font-serif text-[2rem] md:text-[clamp(3rem,5vw,5.5rem)] leading-[1.1] mb-md text-inherit">
              Designing Spaces That Breathe.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[1.2rem] mb-lg opacity-90 font-light leading-[1.6]">
              Shreev Livings creates sophisticated, tailored interiors that seamlessly blend modern elegance with everyday comfort.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-md">
              <Button variant="accent" href="/portfolio">Explore Portfolio</Button>
              <Button variant="secondary" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }} href="/contact">Book Consultation</Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[40vh] md:h-[75vh] min-h-[300px] md:min-h-[500px] w-full rounded-[8px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] mt-md md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div style={{ width: '100%', height: '110%', position: 'absolute', top: '-5%', y: heroY }}>
              <Image 
                src="/images/hero_interior_1779040229551.png" 
                alt="Modern Luxury Living Room" 
                fill 
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="p-0 mt-[-60px] md:mt-[-80px] relative z-20 mb-lg">
        <div className="container-custom">
          <div className="bg-[#131F38]/85 backdrop-blur-[20px] border border-white/10 rounded-[20px] py-[2.5rem] px-[2rem] text-bg-light shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <motion.div 
              className="text-center mb-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-[1.8rem] md:text-[2rem] text-inherit">Numbers that tell our story</motion.h2>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg md:gap-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                { icon: FiHome, num: "100+", label: "homes delivered" },
                { icon: FiMapPin, num: "5+", label: "cities served" },
                { icon: FiLayers, num: "3", label: "stores" },
                { icon: FiStar, num: "4.8★", label: "average rating" }
              ].map((stat, idx) => (
                <motion.div key={idx} className="flex flex-col items-center group" variants={fadeInUp}>
                  <div className="w-[60px] h-[60px] border border-white/20 rounded-[12px] flex items-center justify-center mb-sm transition-fast group-hover:border-secondary group-hover:-translate-y-[5px]">
                    <stat.icon size={28} className="text-bg-light transition-fast group-hover:text-secondary" />
                  </div>
                  <div className="font-serif text-[2.2rem] mb-xs text-inherit">{stat.num}</div>
                  <div className="font-sans text-[0.9rem] opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark" ref={aboutRef}>
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <motion.div 
            className="md:pr-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">About Us</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Crafting Timeless Interiors</motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg">
              At Shreev Livings, we believe that your environment profoundly impacts your well-being. Our approach to interior design goes beyond simple aesthetics; we craft functional art that elevates your daily life.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg">
              Whether it's a sprawling residential estate or a boutique commercial space, we bring a meticulous eye for detail, premium materials, and a deep understanding of spatial harmony to every project.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ marginTop: '2.5rem' }}>
              <Button variant="primary" href="/about">Read Our Story</Button>
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

      {/* SERVICES SECTION */}
      <section className="py-xl md:py-2xl bg-primary text-bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Our Expertise</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Bespoke Services</motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: FiKey, title: "Turnkey Projects", desc: "End-to-end project management, from initial concept to final flawless execution." },
              { icon: FiHome, title: "Residential Design", desc: "Full-scale interior architecture and spatial planning for luxury homes." },
              { icon: FiLayout, title: "Commercial Spaces", desc: "Creating inspiring, brand-aligned environments for offices and boutiques." },
              { icon: FiBox, title: "3D Visualization", desc: "Photorealistic 3D renderings to help you visualize your space before construction." },
              { icon: FiLayers, title: "Custom Furniture", desc: "Bespoke furniture design and sourcing tailored to your specific aesthetic." },
              { icon: FiPenTool, title: "Renovation & Styling", desc: "Comprehensive renovation services and finishing touches to elevate your existing space." }
            ].map((service, idx) => (
              <motion.div key={idx} className="bg-white/5 py-xl px-lg rounded-[4px] border border-white/10 transition-smooth hover:-translate-y-[10px] hover:bg-white/10 hover:border-secondary" variants={fadeInUp} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                <service.icon size={42} className="text-secondary mb-md" />
                <h3 className="font-serif text-[1.5rem] mb-sm text-inherit">{service.title}</h3>
                <p className="text-inherit opacity-80 leading-[1.6]">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">How We Work</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">The Design Process</motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { num: "01", title: "Consultation & Brief", desc: "We start by understanding your vision, lifestyle, and requirements to establish the creative direction." },
              { num: "02", title: "Concept & Space Planning", desc: "Our architects optimize spatial flow and develop initial mood boards to define the exact aesthetic." },
              { num: "03", title: "3D Visualization", desc: "We create photorealistic 3D renders so you can accurately visualize your fully transformed space." },
              { num: "04", title: "Material Selection", desc: "We guide you through selecting premium materials, custom furnishings, and bespoke lighting fixtures." },
              { num: "05", title: "Execution & Build", desc: "Our team manages all procurement and coordinates with expert contractors for flawless site execution." },
              { num: "06", title: "Styling & Handover", desc: "The final touch: we meticulously style the interiors and hand over your ready-to-live-in dream home." }
            ].map((step, idx) => (
              <motion.div key={idx} className="relative py-xl px-lg bg-bg-light border border-black/5 rounded-[4px] transition-smooth hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-secondary group" variants={fadeInUp}>
                <span className="font-serif text-[4rem] text-secondary opacity-20 absolute top-[20px] right-[20px] leading-none transition-smooth group-hover:opacity-80 group-hover:scale-110">{step.num}</span>
                <h3 className="font-serif text-[1.5rem] text-inherit mb-sm mt-lg relative z-10">{step.title}</h3>
                <p className="text-inherit opacity-80 leading-[1.6] text-[0.95rem] relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-xl md:py-2xl bg-primary text-bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Our Features</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">The Shreev Advantage</motion.h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: FiAward, title: "Uncompromising Quality", desc: "We source the finest materials globally to ensure unparalleled craftsmanship and durability." },
              { icon: FiShield, title: "End-to-End Execution", desc: "From concept to handover, we manage every detail with complete transparency and accountability." },
              { icon: FiStar, title: "Bespoke Philosophy", desc: "No two projects are alike. We design tailored environments reflecting your unique lifestyle." },
              { icon: FiClock, title: "On-Time Delivery", desc: "Our strict project management ensures your dream space is handed over exactly when promised." }
            ].map((feature, idx) => (
              <motion.div key={idx} className="text-center py-xl px-md border-b sm:border-b-0 sm:border-r border-white/10 transition-fast hover:-translate-y-[5px] last:border-0" variants={fadeInUp}>
                <feature.icon size={40} className="text-secondary mb-md" />
                <h3 className="font-serif text-[1.3rem] mb-sm text-inherit">{feature.title}</h3>
                <p className="text-inherit opacity-80 leading-[1.6] text-[0.95rem]">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW SECTION */}
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
        <div className="container-custom">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md md:gap-0 mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div>
              <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Selected Works</motion.span>
              <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Our Portfolio</motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Button variant="secondary" href="/portfolio">View All Projects</Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: 'The Azure Residence', category: 'Residential', image: '/images/portfolio_bedroom_1779040259154.png' },
              { title: 'Lumina Corporate', category: 'Commercial', image: '/images/portfolio_office_1779040274216.png' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group"
                variants={fadeInUp}
                onClick={() => router.push('/portfolio')}
              >
                <div className="absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100">
                  <span className="text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0">{item.category}</span>
                  <h3 className="text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MATERIALS & LIGHTINGS SHOWCASE SECTION */}
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container-custom">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Our Resources</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Curated Libraries</motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our extensive libraries of premium materials and bespoke lighting solutions to inspire your next project.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group"
              variants={fadeInUp}
              onClick={() => router.push('/materials')}
              style={{ height: '400px' }}
            >
              <div className="absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]">
                <Image src="/images/luxury_tiles_material_1780893606024.png" alt="Materials Library" fill className="object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100">
                <span className="text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0">Textures & Surfaces</span>
                <h3 className="text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0">Materials Library</h3>
              </div>
            </motion.div>

            <motion.div 
              className="relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group"
              variants={fadeInUp}
              onClick={() => router.push('/lightings')}
              style={{ height: '400px' }}
            >
              <div className="absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]">
                <Image src="/images/lux_chandelier_1780896539792.png" alt="Lightings Library" fill className="object-cover" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100">
                <span className="text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0">Illumination</span>
                <h3 className="text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0">Lightings Showcase</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ / WHY CHOOSE US SECTION */}
      <section className="py-xl md:py-2xl bg-primary text-bg-light">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-start">
          <motion.div 
            className="static lg:sticky lg:top-[120px] mb-lg lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">FAQ</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Elevating Everyday Living</motion.h2>
            <motion.p variants={fadeInUp} className="text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg" style={{ marginTop: '1.5rem' }}>
              We don't just design spaces; we curate lifestyles. Here are some of the reasons our clients trust us with their most personal environments.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { q: "What makes Shreev Livings different from other design firms?", a: "We blend sophisticated aesthetics with functional pragmatism. Our end-to-end turnkey solutions mean you have a single point of contact from initial concept to final handover, ensuring quality and consistency." },
              { q: "Do you handle everything from design to execution?", a: "Yes, our Turnkey Projects cover everything. We manage design, procurement, contractor coordination, and final styling so you can enjoy a stress-free experience." },
              { q: "Can you work within a specific timeline and budget?", a: "Absolutely. Transparency is a core value. We establish clear timelines and realistic budgets during the consultation phase and employ strict project management to adhere to them." },
              { q: "Do you provide 3D visualizations before starting work?", a: "Yes, we provide photorealistic 3D renders during the design phase. This ensures you have a clear, accurate vision of your transformed space before any construction begins." },
              { q: "Do you offer custom furniture design?", a: "We specialize in bespoke furniture. If we can't source the perfect piece for your space, our artisans will custom-build it to your exact specifications and style." }
            ].map((faq, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <FAQItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
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
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary" href="/contact">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
