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

const modularSolutionCards = [
  { title: 'Modular Kitchen', tag: 'Kitchen', desc: 'Smart layouts with efficient work zones, premium finishes, and storage that simplifies daily cooking.', image: '/images/service_modular.png' },
  { title: 'Wardrobes', tag: 'Storage', desc: 'Custom interior systems designed for effortless access, cleaner lines, and maximum storage efficiency.', image: '/images/wood_wall_paneling_1780893626005.png' },
  { title: 'Storage Walls', tag: 'Wall Units', desc: 'Built-in units that combine utility, display, and clutter-free organization in one sleek design.', image: '/images/ceiling_panel_design_1780893639313.png' },
  { title: 'TV & Utility Units', tag: 'Living', desc: 'Tailored media walls and utility cabinetry that blend technology with elegant interior finishes.', image: '/images/portfolio_bedroom_1779040259154.png' }
];

const modularLayouts = [
  { title: 'L-shape', tag: 'Compact', desc: 'Ideal for compact to medium spaces, offering efficient workflow and comfortable corner storage.', image: '/images/portfolio_bedroom_1779040259154.png' },
  { title: 'U-shape', tag: 'Premium', desc: 'Maximizes storage and prep area for larger kitchens with a more professional cooking layout.', image: '/images/service_modular.png' },
  { title: 'Parallel', tag: 'Narrow', desc: 'A streamlined setup for narrow spaces, keeping essentials close and movement efficient.', image: '/images/wood_wall_paneling_1780893626005.png' },
  { title: 'Island Kitchen', tag: 'Open Concept', desc: 'Adds a social dining and prep zone while creating a premium, open-concept look.', image: '/images/portfolio_office_1779040274216.png' },
  { title: 'Small Kitchens', tag: 'Smart', desc: 'Smart planning converts tight spaces into highly functional, clutter-free cooking zones.', image: '/images/lux_under_cabinet_1780896612137.png' }
];

const modularMaterials = [
  { title: 'BWP Plywood', tag: 'Core', desc: 'Moisture-resistant core material designed for long-term durability in kitchen environments.', image: '/images/luxury_tiles_material_1780893606024.png' },
  { title: 'HDHMR', tag: 'Durable', desc: 'High-density, stable board option that balances strength, finish appeal, and affordability.', image: '/images/luxury_wallpaper_pattern_1780893652729.png' },
  { title: 'Laminates', tag: 'Finish', desc: 'A versatile finish choice offering durable surfaces, texture variation, and easy maintenance.', image: '/images/wood_wall_paneling_1780893626005.png' },
  { title: 'Acrylic', tag: 'Gloss', desc: 'Glossy, premium finish that delivers a sleek modern look with a high-end visual impact.', image: '/images/lux_island_pendants_1780896600463.png' },
  { title: 'PU Finishes', tag: 'Luxury', desc: 'Contemporary textured or lacquered surfaces that add elegance and premium character.', image: '/images/ceiling_panel_design_1780893639313.png' }
];

const modularBudget = [
  { title: 'Cost Factors', desc: 'Cabinet size, material grade, hardware selection, appliances, and installation complexity influence the final quote.', image: '/images/luxury_tiles_material_1780893606024.png' },
  { title: 'Hardware Budgets', desc: 'Soft-close hinges, drawer systems, and pull-out organizers can significantly impact performance and cost.', image: '/images/lux_task_lamp_1780896713795.png' },
  { title: 'Price Comparisons', desc: 'We help compare material and finish choices so you can balance the look you want with your budget.', image: '/images/lux_recessed_light_1780896580218.png' }
];

const modularExecutionCare = [
  { title: 'Lighting', desc: 'Task, ambient, and under-cabinet lighting improve both visual comfort and kitchen usability.', image: '/images/lux_under_cabinet_1780896612137.png' },
  { title: 'Storage', desc: 'Smart organizers, pull-outs, and concealed storage keep every inch of the kitchen practical and efficient.', image: '/images/service_modular.png' },
  { title: 'Installation', desc: 'Precision measurement and clean installation ensure seamless alignment, finish quality, and longevity.', image: '/images/lux_wall_washer_1780896681142.png' },
  { title: 'Maintenance', desc: 'We guide care routines and durable finishes so your modular kitchen stays fresh and easy to maintain.', image: '/images/luxury_wallpaper_pattern_1780893652729.png' }
];

const turnkeyApproach = [
  { title: 'Concept to Completion', tag: 'Full Service', desc: 'We curate the entire design journey from briefing and layouts to final execution and handover.', image: '/images/service_turnkey.png' },
  { title: 'Procurement', tag: 'Vendor Managed', desc: 'Materials, fixtures, finishes, and custom pieces are sourced and coordinated under one system.', image: '/images/luxury_tiles_material_1780893606024.png' },
  { title: 'Site Execution', tag: 'On Site', desc: 'Our project managers supervise quality, coordination, and delivery to keep every milestone on track.', image: '/images/portfolio_office_1779040274216.png' },
  { title: 'Final Styling', tag: 'Handover', desc: 'The space is polished, perfected, and presented as a complete, ready-to-use environment.', image: '/images/hero_interior_1779040229551.png' }
];

const turnkeyDelivery = [
  { title: 'Design Planning', desc: 'Detailed concepts, space planning, mood boards, and budget alignment before execution begins.', image: '/images/about_interior_1779040244800.png' },
  { title: 'Execution Control', desc: 'Timelines, site coordination, and contractor management are handled in-house for smooth delivery.', image: '/images/lux_task_lamp_1780896713795.png' },
  { title: 'Material Expertise', desc: 'We select premium finishes, sources, and furniture that suit both aesthetics and durability.', image: '/images/luxury_wallpaper_pattern_1780893652729.png' },
  { title: 'Post-Install Care', desc: 'Final styling, punch-list review, and handover support ensure a complete and polished finish.', image: '/images/lux_under_cabinet_1780896612137.png' }
];

const residentialServiceTypes = [
  { title: 'Living Room Styling', tag: 'Comfort', desc: 'Warm, layered interiors that balance conversation comfort, media walls, furniture planning, and statement detailing.', image: '/images/portfolio_bedroom_1779040259154.png' },
  { title: 'Bedroom Design', tag: 'Rest', desc: 'Calm and tailored bedroom spaces that combine storage, lighting, textures, and restful ambience.', image: '/images/hero_interior_1779040229551.png' },
  { title: 'Kitchen & Dining', tag: 'Function', desc: 'Efficient layouts for family living with premium finishes, durable surfaces, and beautiful daily-use detailing.', image: '/images/service_modular.png' },
  { title: 'Complete Home Turnkey', tag: 'Full Home', desc: 'Turnkey residential execution that covers planning, custom furniture, decor, and final styling as one cohesive experience.', image: '/images/about_interior_1779040244800.png' }
];

const residentialProcess = [
  { step: '01', title: 'Discovery & Briefing', desc: 'We understand your family lifestyle, storage needs, aesthetic preferences, and budget priorities.' },
  { step: '02', title: 'Design Development', desc: 'We create layouts, palettes, material boards, and custom concepts suited to your home’s character.' },
  { step: '03', title: 'Execution & Procurement', desc: 'Our team manages sourcing, fabrication, civil coordination, and fitment with strict quality checks.' },
  { step: '04', title: 'Final Styling & Handover', desc: 'The space is styled, refined, and delivered ready for move-in with a polished, lived-in feel.' }
];

const commercialServiceTypes = [
  { title: 'Office Design', tag: 'Workspace', desc: 'Smart workplace planning that blends productivity, flexibility, and premium brand presence across every department.', image: '/images/portfolio_office_1779040274216.png' },
  { title: 'Retail Experience', tag: 'Brand', desc: 'Customer-focused retail environments designed to encourage engagement, product storytelling, and conversion.', image: '/images/luxury_tiles_material_1780893606024.png' },
  { title: 'Hospitality Fit-Out', tag: 'Guest', desc: 'Brand-led hospitality interiors that deliver memorable guest journeys with refined comfort and impact.', image: '/images/hero_interior_1779040229551.png' },
  { title: 'Turnkey Commercial', tag: 'Execution', desc: 'From concept to final fit-out, we manage the entire commercial transformation with precision and control.', image: '/images/about_interior_1779040244800.png' }
];

const commercialProcess = [
  { step: '01', title: 'Brand Discovery', desc: 'We define your business identity, customer journey, and operational goals before design begins.' },
  { step: '02', title: 'Spatial Planning', desc: 'Layouts are optimized for workflow, circulation, customer experience, and future scalability.' },
  { step: '03', title: 'Procurement & Build', desc: 'Materials, furnishings, fixtures, and execution are managed through a controlled delivery process.' },
  { step: '04', title: 'Launch & Styling', desc: 'We complete final styling and tuning so the space is ready for opening day or daily operations.' }
];

const hospitalityServiceTypes = [
  { title: 'Boutique Hotels', tag: 'Guest', desc: 'Refined hospitality interiors designed to deliver comfort, mood, and memorable brand impressions.', image: '/images/portfolio_office_1779040274216.png' },
  { title: 'Restaurants & Lounges', tag: 'Dining', desc: 'Atmospheric dining spaces shaped around guest flow, ambience, and day-to-night functionality.', image: '/images/service_turnkey.png' },
  { title: 'Resorts & Villas', tag: 'Luxury', desc: 'Immersive spaces that connect local identity, comfort, and premium resort-level storytelling.', image: '/images/hero_interior_1779040229551.png' },
  { title: 'Full Hospitality Styling', tag: 'Handover', desc: 'We manage all phases of the hospitality environment, from concept to final guest-ready styling.', image: '/images/about_interior_1779040244800.png' }
];

const hospitalityProcess = [
  { step: '01', title: 'Guest Journey Mapping', desc: 'We understand the target audience, service style, and emotional experience you want to create.' },
  { step: '02', title: 'Theme & Mood Design', desc: 'Materials, colors, lighting, and furnishings are shaped to create the intended atmosphere.' },
  { step: '03', title: 'Execution Management', desc: 'Our project team runs procurement, site checks, and coordination to keep quality consistent.' },
  { step: '04', title: 'Final Experience Styling', desc: 'The completed space is styled and refined to ensure a warm, premium guest experience.' }
];

export default function ServiceDetail({ params }) {
  const resolvedParams = use(params);
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full">
      
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

      
      <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
        <div className="container-custom">
          <motion.div
            className="text-center mb-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">What’s included</motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Designed for a seamless experience</motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
            {service.features.map((feature, idx) => (
              <motion.div
                key={feature}
                className="bg-white p-lg rounded-[8px] border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="mb-md flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-[1.1rem] font-serif font-semibold text-primary">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-[1.4rem] text-primary mb-xs">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {service.id === 'modular' && (
        <>
          <section className="py-xl md:py-2xl bg-primary text-bg-light">
            <div className="container-custom">
              <motion.div
                className="text-center mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Popular modular categories</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Smart spaces for everyday living</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
                {modularSolutionCards.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className="group overflow-hidden rounded-[12px] border border-white/10 bg-[#1C2C4E] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131F38]/85 via-[#131F38]/30 to-transparent" />
                      <span className="absolute left-lg top-lg inline-flex rounded-full border border-white/20 bg-white/10 px-sm py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-bg-light">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-lg">
                      <h3 className="font-serif text-[1.7rem] mb-sm text-inherit">{item.title}</h3>
                      <p className="text-[1rem] leading-[1.7] opacity-80">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
            <div className="container-custom">
              <motion.div
                className="mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Layouts & planning</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Kitchen layouts designed around flow</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-lg">
                {modularLayouts.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className={`${idx === 0 ? 'md:col-span-2 xl:col-span-2' : ''} group overflow-hidden rounded-[14px] border border-primary/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)]`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                  >
                    <div className={`grid ${idx === 0 ? 'md:grid-cols-[1.2fr_0.8fr]' : 'grid-cols-1'}`}>
                      <div className="relative h-[220px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-lg flex flex-col justify-center">
                        <span className="mb-sm inline-flex w-fit rounded-full bg-secondary/20 px-sm py-1 text-[0.65rem] uppercase tracking-[0.12em] text-primary">{item.tag}</span>
                        <h3 className="font-serif text-[1.8rem] text-primary mb-sm">{item.title}</h3>
                        <p className="text-[1rem] leading-[1.7] text-text-dark/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-[#f3efe9] text-text-dark">
            <div className="container-custom">
              <motion.div
                className="mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Materials</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Materials that balance beauty and endurance</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-md">
                {modularMaterials.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className="group relative overflow-hidden rounded-[14px] border border-[#d9d0c4] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                  >
                    <div className="relative h-[180px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-md">
                      <span className="mb-sm inline-flex rounded-full bg-primary/5 px-sm py-1 text-[0.62rem] uppercase tracking-[0.12em] text-primary">{item.tag}</span>
                      <h3 className="font-serif text-[1.4rem] text-primary mb-sm">{item.title}</h3>
                      <p className="text-[0.94rem] leading-[1.7] text-text-dark/75">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-primary text-bg-light">
            <div className="container-custom">
              <motion.div
                className="mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Cost & budget</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Transparent pricing with smart value</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {modularBudget.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className={`overflow-hidden rounded-[16px] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.12)] ${idx === 1 ? 'bg-[#1C2C4E]' : 'bg-[#162847]'}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <div className="relative h-[180px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover opacity-80" />
                    </div>
                    <div className="p-lg">
                      <div className="mb-md flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[1rem] font-serif font-semibold text-primary">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif text-[1.8rem] mb-sm text-inherit">{item.title}</h3>
                      <p className="text-[1rem] leading-[1.7] opacity-80">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
            <div className="container-custom">
              <motion.div
                className="mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Execution & care</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Details that make it last</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
                {modularExecutionCare.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className={`group overflow-hidden rounded-[18px] border border-primary/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${idx % 2 === 0 ? 'md:translate-y-5' : ''}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                  >
                    <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                      <div className="relative h-[220px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-lg flex flex-col justify-center">
                        <div className="mb-md flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[1rem] font-serif font-semibold text-primary">
                          {idx + 1}
                        </div>
                        <h3 className="font-serif text-[1.8rem] text-primary mb-sm">{item.title}</h3>
                        <p className="text-[1rem] leading-[1.7] text-text-dark/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      
      {service.id === 'residential' && (
        <>
          <section className="py-xl md:py-2xl bg-primary text-bg-light">
            <div className="container-custom">
              <motion.div
                className="text-center mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Residential service types</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Thoughtful living zones, beautifully executed</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
                {residentialServiceTypes.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className="group overflow-hidden rounded-[12px] border border-white/10 bg-[#1C2C4E] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131F38]/85 via-[#131F38]/30 to-transparent" />
                      <span className="absolute left-lg top-lg inline-flex rounded-full border border-white/20 bg-white/10 px-sm py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-bg-light">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-lg">
                      <h3 className="font-serif text-[1.7rem] mb-sm text-inherit">{item.title}</h3>
                      <p className="text-[1rem] leading-[1.7] opacity-80">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
            <div className="container-custom">
              <motion.div
                className="text-center mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Process</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">A simple journey from idea to home</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
                {residentialProcess.map((p, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-lg rounded-[8px] border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
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
        </>
      )}

      
      {service.id === 'turnkey' && (
        <>
          <section className="py-xl md:py-2xl bg-primary text-bg-light">
            <div className="container-custom">
              <motion.div
                className="text-center mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Turnkey journey</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">End-to-end delivery without the stress</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-lg">
                {turnkeyApproach.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#1C2C4E] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#131F38]/85 via-[#131F38]/30 to-transparent" />
                      <span className="absolute left-lg top-lg inline-flex rounded-full border border-white/20 bg-white/10 px-sm py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-bg-light">{item.tag}</span>
                    </div>
                    <div className="p-lg">
                      <h3 className="font-serif text-[1.7rem] mb-sm text-inherit">{item.title}</h3>
                      <p className="text-[1rem] leading-[1.7] opacity-80">{item.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-xl md:py-2xl bg-[#f4efe9] text-text-dark">
            <div className="container-custom">
              <motion.div
                className="mb-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">How we deliver</motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">A disciplined system for beautiful execution</motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-lg md:grid-cols-2">
                {turnkeyDelivery.map((item, idx) => (
                  <motion.article
                    key={item.title}
                    className={`group overflow-hidden rounded-[18px] border border-[#d7cfc3] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${idx % 2 === 0 ? 'md:translate-y-5' : ''}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                  >
                    <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                      <div className="relative h-[220px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-lg flex flex-col justify-center">
                        <div className="mb-md flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-[1rem] font-serif font-semibold text-primary">
                          {idx + 1}
                        </div>
                        <h3 className="font-serif text-[1.8rem] text-primary mb-sm">{item.title}</h3>
                        <p className="text-[1rem] leading-[1.7] text-text-dark/80">{item.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      
      {(service.id === 'turnkey' || service.id === 'modular') && (
        <section className="py-xl md:py-2xl bg-bg-light text-text-dark">
          <div className="container-custom">
            <motion.div
              className="text-center mb-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Related categories</motion.span>
              <motion.h2 variants={fadeInUp} className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">Built around your lifestyle</motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {servicesData
                .filter((item) => ['residential', 'commercial'].includes(item.id))
                .map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="bg-white rounded-[8px] border border-primary/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                  >
                    <div className="relative h-[220px] w-full">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>

                    <div className="p-lg">
                      <span className="mb-sm block font-sans uppercase tracking-[0.15em] text-[0.75rem] text-secondary">{item.subtitle}</span>
                      <h3 className="font-serif text-[1.9rem] text-primary mb-sm">{item.title}</h3>
                      <p className="text-[1rem] leading-[1.7] text-text-dark/80 mb-lg">{item.description}</p>
                      <Button variant="primary" href={`/services/${item.id}`}>
                        Explore {item.title}
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      
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
