'use client';

import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Image from 'next/image';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <main className="w-full">
      <section className="min-h-screen pt-[150px] pb-[100px] bg-bg-light flex items-center md:pt-[120px]">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-xl bg-bg-light rounded-[8px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
            }}
          >
            
            {/* Left Side: Contact Information */}
            <motion.div className="bg-primary text-bg-light p-xl flex flex-col justify-between" variants={fadeInUp}>
              <div>
                <h1 className="font-serif text-[3rem] mb-md text-secondary">Let's create something beautiful.</h1>
                <p className="text-[1.1rem] leading-[1.6] opacity-90 mb-xl">
                  Whether you're looking to completely remodel your home or simply need expert styling advice, our team is ready to bring your vision to life.
                </p>
                
                <div className="mb-lg">
                  <span className="uppercase text-[0.85rem] tracking-[0.1em] text-secondary mb-sm block"><FiMapPin className="inline mr-2"/> Office</span>
                  <p className="text-[1.1rem] leading-[1.5]">A-615, Titanium Heights, near vodafone house, corporate road, Prahlad Nagar, Makarba, Ahmedabad, Gujarat, 380015</p>
                </div>
                
                <div className="mb-lg">
                  <span className="uppercase text-[0.85rem] tracking-[0.1em] text-secondary mb-sm block"><FiMail className="inline mr-2"/> Inquiries</span>
                  <p className="text-[1.1rem] leading-[1.5]">shreevlivings@gmail.com</p>
                </div>
                
                <div className="mb-lg">
                  <span className="uppercase text-[0.85rem] tracking-[0.1em] text-secondary mb-sm block"><FiPhone className="inline mr-2"/> Phone</span>
                  <p className="text-[1.1rem] leading-[1.5]">+91 99984 39939</p>
                  <p className="text-[1.1rem] leading-[1.5]">+91 99983 13933</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Creative Section Replacement */}
            <motion.div className="h-full min-h-[500px] relative rounded-[4px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]" variants={fadeInUp}>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image src="/images/hero_interior_1779040229551.png" alt="Luxury Interior" fill className="object-cover w-full h-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#131F38]/90 to-[#131F38]/20 flex flex-col justify-end items-start p-2xl text-bg-light">
                  <h3 className="font-serif text-[2.5rem] mb-sm text-white">Your Dream Space Awaits</h3>
                  <p className="font-sans text-[1.1rem] mb-lg opacity-90">Connect with our principal designers today to begin curating your perfect environment.</p>
                  <Button variant="accent" onClick={() => window.open('https://wa.me/919998439939', '_blank')}>Contact Us</Button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}
