'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Button from '../../components/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <main className="w-full">
      <section className="flex min-h-screen items-center bg-bg-light pb-xl pt-[100px] md:pt-[150px]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
            }}
            className="grid gap-xl overflow-hidden rounded-[12px] bg-bg-light shadow-[0_30px_60px_rgba(0,0,0,0.05)] lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp} className="flex flex-col justify-between bg-primary p-xl text-bg-light">
              <div>
                <h1 className="mb-md font-serif text-[2.3rem] leading-tight text-secondary md:text-[3rem]">
                  Let’s create something beautiful.
                </h1>
                <p className="mb-xl max-w-lg text-[1.08rem] leading-[1.8] text-white/80">
                  Whether you’re redesigning a full home or refining a single room, our team is ready to translate your vision into a tactile, refined reality.
                </p>

                <div className="mb-lg">
                  <span className="mb-sm block font-sans uppercase tracking-[0.1em] text-[0.8rem] text-secondary">
                    <FiMapPin className="mr-2 inline" /> Office
                  </span>
                  <p className="text-[1.05rem] leading-[1.7] text-white/80">
                    A-615, Titanium Heights, near vodafone house, corporate road, Prahlad Nagar, Makarba, Ahmedabad, Gujarat, 380015
                  </p>
                </div>

                <div className="mb-lg">
                  <span className="mb-sm block font-sans uppercase tracking-[0.1em] text-[0.8rem] text-secondary">
                    <FiMail className="mr-2 inline" /> Inquiries
                  </span>
                  <a href="mailto:shreevlivings@gmail.com" className="text-[1.05rem] text-white/80 transition-colors hover:text-secondary">
                    shreevlivings@gmail.com
                  </a>
                </div>

                <div className="mb-lg">
                  <span className="mb-sm block font-sans uppercase tracking-[0.1em] text-[0.8rem] text-secondary">
                    <FiPhone className="mr-2 inline" /> Phone
                  </span>
                  <div className="space-y-1 text-[1.05rem] text-white/80">
                    <p>+91 99984 39939</p>
                    <p>+91 99983 13933</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative min-h-[500px] overflow-hidden">
              <div className="absolute inset-0">
                <Image src="/images/hero_interior_1779040229551.png" alt="Luxury interior" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131F38]/90 to-[#131F38]/20" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-xl text-bg-light">
                <h2 className="mb-sm font-serif text-[2.2rem] leading-tight md:text-[2.7rem]">Your Dream Space Awaits</h2>
                <p className="mb-lg max-w-md text-[1.05rem] leading-[1.8] text-white/80">
                  Connect with our design team today to begin curating your perfect environment.
                </p>
                <Button
                  variant="accent"
                  onClick={() => window.open('https://wa.me/919998439939', '_blank')}
                  className="w-fit"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
