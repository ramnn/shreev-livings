import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-primary text-bg-light pt-2xl">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-lg md:gap-xl pb-xl">
        <div className="max-w-[400px]">
          <div style={{ marginBottom: '1rem' }}>
            <Image src="/images/logo.png" alt="Shreev Livings Logo" width={240} height={120} style={{ objectFit: 'contain' }} />
          </div>
          <p className="text-white/70 leading-relaxed">
            Elevating everyday spaces into extraordinary experiences through modern, tailored interior design.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h4 className="font-sans uppercase tracking-[0.1em] text-[0.9rem] mb-md text-secondary">Explore</h4>
          <Link href="/about" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">About Us</Link>
          <Link href="/services" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">Services</Link>
          <Link href="/portfolio" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">Portfolio</Link>
          <Link href="/contact" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">Contact</Link>
        </div>

        <div className="flex flex-col gap-sm">
          <h4 className="font-sans uppercase tracking-[0.1em] text-[0.9rem] mb-md text-secondary">Connect</h4>
          <a href="mailto:shreevlivings@gmail.com" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">shreevlivings@gmail.com</a>
          <a href="tel:+919998439939" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">+91 99984 39939</a>
          <a href="tel:+919998313993" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">+91 99983 13993</a>
          <a href="tel:+919998187993" className="text-bg-light/80 transition-fast text-[0.95rem] hover:opacity-100 hover:text-secondary">+91 99981 87993</a>
          <div className="flex gap-md mt-sm">
            <a href="#" aria-label="Instagram" className="text-bg-light/80 transition-fast hover:opacity-100 hover:text-secondary"><FiInstagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-bg-light/80 transition-fast hover:opacity-100 hover:text-secondary"><FiFacebook size={20} /></a>
            <a href="#" aria-label="Twitter" className="text-bg-light/80 transition-fast hover:opacity-100 hover:text-secondary"><FiTwitter size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-md text-center text-[0.85rem] opacity-70">
        <div className="container-custom">
          <p>&copy; {new Date().getFullYear()} Shreev Livings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
