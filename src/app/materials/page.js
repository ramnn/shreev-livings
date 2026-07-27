'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import Button from '../../components/Button';

const materialsData = [
  {
    id: 'tiles',
    title: 'Luxury Tiles',
    heading: 'Foundations of Elegance',
    description: 'Our curated collection of premium tiles includes everything from large-format Italian porcelain to intricately veined natural marble. Whether you are looking for a sleek, modern floor or a statement backsplash, our materials ensure unmatched durability and timeless beauty.',
    features: ['Large-Format Porcelain', 'Natural Calacatta Marble', 'Textured Ceramic', 'Slip-Resistant Finishes'],
    image: '/images/luxury_tiles_material_1780893606024.png',
    options: [
      { name: 'Calacatta Marble', desc: 'Classic white marble with bold veining for an ultra-luxury feel.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Onyx Stone', desc: 'Translucent and striking natural stone with warm, deep hues.', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Large-Format Porcelain', desc: 'Seamless, modern, and highly durable for high-traffic areas.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Textured Ceramic', desc: 'Adding depth and subtle shadows for beautiful backsplashes.', image: 'https://images.unsplash.com/photo-1598282361633-8a39f6004b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'wall-paneling',
    title: 'Wall Paneling',
    heading: 'Architectural Depth',
    description: 'Transform flat, uninspired walls into architectural masterpieces. Our custom wall paneling options range from acoustic wood fluting to classic wainscoting. Perfect for adding warmth, texture, and acoustic comfort to both residential and commercial spaces.',
    features: ['Solid Wood Fluting', 'Acoustic Slats', 'Classic Wainscoting', 'Custom Veneer Finishes'],
    image: '/images/wood_wall_paneling_1780893626005.png',
    options: [
      { name: 'Wood Fluting', desc: 'Contemporary vertical slats adding height and texture.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Classic Wainscoting', desc: 'Timeless elegance for formal dining and living rooms.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Acoustic Panels', desc: 'Sound-absorbing panels that don\'t compromise on style.', image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Upholstered Panels', desc: 'Soft, luxurious fabric panels perfect for bedroom walls.', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'ceiling-panels',
    title: 'Ceiling Panels',
    heading: 'The Fifth Wall',
    description: 'Elevate your design by utilizing the often-overlooked "fifth wall." Our modern ceiling panel systems integrate seamlessly with lighting and ventilation, offering options like drop acoustic panels, warm wood planks, and minimalist PVC designs.',
    features: ['Integrated Lighting', 'Acoustic Drop Panels', 'Warm Wood Planks', 'Minimalist PVC'],
    image: '/images/ceiling_panel_design_1780893639313.png',
    options: [
      { name: 'Wooden Drop Ceiling', desc: 'Warmth and elegance masking structural elements above.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Acoustic Baffles', desc: 'Modern hanging panels to control sound in open spaces.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Stretch Ceilings', desc: 'Flawless, perfectly smooth finishes with ambient backlighting.', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Coffered Ceilings', desc: 'Architectural grids adding traditional luxury and depth.', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'wallpapers',
    title: 'Wallpapers',
    heading: 'Bespoke Textures',
    description: 'Add immediate character and mood with our selection of premium wallpapers. From subtle geometric patterns and rich textures to custom-designed scenic murals, our high-quality wallpapers are durable, washable, and absolutely striking.',
    features: ['Textured Vinyl', 'Bespoke Scenic Murals', 'Subtle Geometric Patterns', 'Moisture-Resistant Options'],
    image: '/images/luxury_wallpaper_pattern_1780893652729.png',
    options: [
      { name: 'Textured Linen', desc: 'Subtle fabric texture that adds warmth without overwhelming.', image: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Metallic Geometrics', desc: 'Catching the light and adding a modern art deco touch.', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Scenic Murals', desc: 'Custom printed panoramic art pieces for statement walls.', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
      { name: 'Grasscloth', desc: 'Natural fibers bringing an organic, earthy feel to rooms.', image: 'https://images.unsplash.com/photo-1581850518616-bcb8077a2336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

export default function Materials() {
  const [activeTab, setActiveTab] = useState(materialsData[0].id);

  const activeMaterial = materialsData.find(m => m.id === activeTab);

  return (
    <main className="w-full">
      <section className="pt-[150px] pb-2xl min-h-screen text-text-dark bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-xl">
            <span className="font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block">Material Library</span>
            <h1 className="font-serif text-[3rem] mb-sm text-inherit">Curated Finishes</h1>
          </div>

          <div className="flex justify-center gap-md mb-xl flex-wrap">
            {materialsData.map((material) => (
              <button
                key={material.id}
                onClick={() => setActiveTab(material.id)}
                className={`py-[12px] px-[24px] rounded-[30px] font-sans font-medium transition-fast border ${activeTab === material.id ? 'bg-primary text-bg-light border-primary hover:text-bg-light' : 'text-text-muted bg-transparent border-black/10 hover:border-secondary hover:text-text-dark'}`}
              >
                {material.title}
              </button>
            ))}
          </div>

          <div className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
                  <div className="lg:pr-lg">
                    <h2 className="font-serif text-[3rem] mb-md text-text-dark">{activeMaterial.heading}</h2>
                    <p className="text-[1.1rem] leading-[1.8] text-text-muted mb-lg">{activeMaterial.description}</p>
                    
                    <div className="flex flex-col gap-sm mb-lg">
                      {activeMaterial.features.map((feature, idx) => (
                        <div className="flex items-center gap-[12px] text-text-dark font-medium" key={idx}>
                          <FiCheckCircle className="text-secondary" size={20} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                      <Button variant="primary" onClick={() => window.location.href='/contact'}>Request Samples</Button>
                    </div>
                  </div>

                  <div className="relative h-[450px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    <Image
                      src={activeMaterial.image}
                      alt={activeMaterial.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* OPTIONS GRID */}
                <div className="mt-xl pt-xl border-t border-black/5">
                  <h3 className="font-serif text-[2rem] mb-lg text-text-dark text-center">Explore {activeMaterial.title} Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {activeMaterial.options.map((opt, idx) => (
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
      <section className="py-[8rem] bg-secondary text-primary text-center">
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
            <Button variant="primary" className="bg-primary text-bg-light hover:bg-bg-light hover:text-primary" onClick={() => window.location.href='/contact'}>
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
