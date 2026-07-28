'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button';

const lightingsData = [
  {
    id: 'living-room',
    title: 'Living Room',
    heading: 'Ambient Elegance',
    description: 'The living room is the heart of the home, requiring a layered lighting approach. We combine ambient, task, and accent lighting to create a space that is both inviting for guests and relaxing for everyday living.',
    features: ['Layered Lighting Design', 'Dimmable Controls', 'Statement Centerpieces', 'Warm Color Temperatures'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    options: [
      { name: 'Statement Chandeliers', desc: 'Bold, sculptural fixtures that define the luxury aesthetic of the room.', image: '/images/lux_chandelier_1780896539792.png' },
      { name: 'Ambient Cove Lighting', desc: 'Hidden LED strips casting a soft, indirect glow across the ceiling.', image: '/images/lux_cove_light_1780896554759.png' },
      { name: 'Modern Floor Lamps', desc: 'Architectural floor lamps providing focused reading or accent light.', image: '/images/lux_floor_lamp_1780896567553.png' },
      { name: 'Recessed Downlights', desc: 'Sleek, glare-free architectural lighting for general illumination.', image: '/images/lux_recessed_light_1780896580218.png' }
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen & Dining',
    heading: 'Functional Brilliance',
    description: 'Kitchens demand bright, shadow-free illumination for prep work, while dining areas require intimate, mood-setting fixtures. Our lighting plans perfectly balance culinary functionality with dining elegance.',
    features: ['Shadow-free Task Lighting', 'Pendant Focal Points', 'Adjustable Dining Moods', 'Integrated Cabinet LEDs'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a8281?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    options: [
      { name: 'Island Pendants', desc: 'Elegant hanging fixtures providing task light and visual anchors.', image: '/images/lux_island_pendants_1780896600463.png' },
      { name: 'Under-Cabinet LEDs', desc: 'Continuous, shadowless task lighting for culinary workspaces.', image: '/images/lux_under_cabinet_1780896612137.png' },
      { name: 'Dining Room Fixtures', desc: 'Intimate, warm lighting designed to elevate the dining experience.', image: '/images/lux_dining_fixture_1780896624526.png' },
      { name: 'Track Lighting', desc: 'Flexible, directional spotlights for modern kitchens and pantries.', image: '/images/lux_track_lighting_1780896637141.png' }
    ]
  },
  {
    id: 'walls-artwork',
    title: 'Walls & Artwork',
    heading: 'Curated Highlights',
    description: 'Great interior design features curated art and textured walls. We use specialized lighting techniques to draw the eye, highlight textures, and present your artwork in gallery-quality illumination.',
    features: ['High CRI LEDs for Color Accuracy', 'Glare Reduction', 'Adjustable Beams', 'Wall Grazing Techniques'],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    options: [
      { name: 'Picture Lights', desc: 'Classic overhead brass or modern sleek bars to illuminate canvases.', image: '/images/lux_picture_light_1780896656395.png' },
      { name: 'Architectural Sconces', desc: 'Decorative wall-mounted fixtures adding soft ambient light.', image: '/images/lux_wall_sconce_1780896667249.png' },
      { name: 'Wall Washers', desc: 'Evenly distributing light across a wall to make spaces feel larger.', image: '/images/lux_wall_washer_1780896681142.png' },
      { name: 'Accent Spotlights', desc: 'Narrow beam angles to dramatically highlight sculptures or features.', image: '/images/lux_accent_spotlight_1780896692775.png' }
    ]
  },
  {
    id: 'workspaces',
    title: 'Workspaces',
    heading: 'Focused Productivity',
    description: 'Whether it is a home office or a commercial studio, workspace lighting must reduce eye strain and foster focus. We integrate smart, ergonomic lighting that adapts to your workflow throughout the day.',
    features: ['Anti-Glare Diffusers', 'Circadian Rhythm Sync', 'Ergonomic Task Lighting', 'Shadow Reduction'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    options: [
      { name: 'Task Lamps', desc: 'Adjustable, focused lighting for meticulous desk work.', image: '/images/lux_task_lamp_1780896713795.png' },
      { name: 'Diffused Panels', desc: 'Overhead flat panels providing even, soft illumination.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Monitor Halos', desc: 'Bias lighting to reduce eye strain during screen-heavy tasks.', image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Ergonomic Desk Lights', desc: 'Smart lights that adjust color temperature based on the time of day.', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Landscape',
    heading: 'Nightscape Architecture',
    description: 'Extend your living space into the outdoors. Our landscape and exterior lighting designs enhance safety, highlight architectural facades, and create magical environments for evening entertaining.',
    features: ['Weatherproof IP65+ Ratings', 'Low-Voltage Safety', 'Smart Timers & Sensors', 'Subtle Landscaping Integration'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    options: [
      { name: 'Pathway Bollards', desc: 'Low-level lighting guiding the way safely through gardens.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Tree Up-lighting', desc: 'Dramatic illumination showcasing the canopy and trunks of trees.', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Patio String Lights', desc: 'Warm, festoon-style lighting for festive outdoor dining.', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Facade Lighting', desc: 'Architectural grazing to emphasize exterior stone or brickwork.', image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

export default function Lightings() {
  const [activeTab, setActiveTab] = useState(lightingsData[0].id);

  const activeLighting = lightingsData.find(l => l.id === activeTab);

  return (
    <main className="w-full">
      <section className="pt-[100px] md:pt-[150px] pb-xl md:pb-2xl min-h-screen text-text-dark bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-xl">
            <span className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Illumination</span>
            <h1 className="font-serif text-[2.2rem] md:text-[3rem] mb-sm text-inherit">Bespoke Lighting Solutions</h1>
          </div>

          <div className="flex justify-center gap-md mb-xl flex-wrap">
            {lightingsData.map((lighting) => (
              <button
                key={lighting.id}
                onClick={() => setActiveTab(lighting.id)}
                className={`py-[12px] px-[24px] rounded-[30px] font-sans font-medium transition-fast border ${activeTab === lighting.id ? 'bg-primary text-bg-light border-primary hover:text-bg-light' : 'text-text-muted bg-transparent border-black/10 hover:border-secondary hover:text-text-dark'}`}
              >
                {lighting.title}
              </button>
            ))}
          </div>

          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLighting.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                  <div className="lg:pr-lg">
                    <h2 className="font-serif text-[2rem] md:text-[3rem] mb-md text-text-dark">{activeLighting.heading}</h2>
                    <p className="text-[1.1rem] leading-[1.8] text-text-muted mb-lg">{activeLighting.description}</p>
                    
                    <div className="flex flex-col gap-sm mb-lg">
                      {activeLighting.features.map((feature, idx) => (
                        <div className="flex items-center gap-[12px] text-text-dark font-medium" key={idx}>
                          <FiCheckCircle className="text-secondary" size={20} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                      <Button variant="primary" onClick={() => window.location.href='/contact'}>Consult a Lighting Expert</Button>
                    </div>
                  </div>

                  <div className="relative h-[450px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    <Image
                      src={activeLighting.image}
                      alt={activeLighting.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* OPTIONS GRID */}
                <div className="mt-xl pt-xl border-t border-black/5">
                  <h3 className="font-serif text-[1.8rem] md:text-[2rem] mb-lg text-text-dark text-center">Explore {activeLighting.title} Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {activeLighting.options.map((opt, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-bg-light rounded-[8px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-smooth hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                      >
                        <div className="relative h-[250px] w-full">
                          <Image 
                            src={opt.image} 
                            alt={opt.name} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                        <div className="p-md">
                          <h4 className="font-serif text-[1.25rem] mb-xs text-text-dark">{opt.name}</h4>
                          <p className="text-text-muted text-[0.9rem] leading-[1.5]">{opt.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
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
            Let us illuminate your vision.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary" onClick={() => window.location.href='/contact'}>
              Design Your Lighting Plan
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
