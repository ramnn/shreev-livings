import Image from 'next/image';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter, FiArrowRight } from 'react-icons/fi';

const branchLocations = [
	{
		name: 'Shreev Livings - Ahmedabad',
		address: 'A-615, Titanium Heights, near Vodafone House, Corporate Road, Prahlad Nagar, Makarba, Ahmedabad, Gujarat 380015',
		map: 'https://www.google.com/maps?q=' + encodeURIComponent('A-615, Titanium Heights, near Vodafone House, Corporate Road, Prahlad Nagar, Makarba, Ahmedabad, Gujarat 380015') + '&output=embed',
	},
	{
		name: 'Shreev Livings - Nikol',
		address: '113, First Floor, Kesar Plaza, Kathawada Rd, Vasant Vihar 2, Nava Naroda, Ahmedabad, Gujarat 382330',
		map: 'https://www.google.com/maps?q=' + encodeURIComponent('113, First Floor, Kesar Plaza, Kathawada Rd, Vasant Vihar 2, Nava Naroda, Ahmedabad, Gujarat 382330') + '&output=embed',
	},
	{
		name: 'Shreev Livings - Surat',
		address: '606, Rajhans Montessa, Dumas Rd, beside Le Meridien Hotel, near Airport, Surat, Gujarat 395007',
		map: 'https://www.google.com/maps?q=' + encodeURIComponent('606, Rajhans Montessa, Dumas Rd, beside Le Meridien Hotel, near Airport, Surat, Gujarat 395007') + '&output=embed',
	},
];

export default function Footer() {
	return (
		<footer className="bg-primary text-bg-light">
			<div className="container-custom pt-xl pb-xl">
				{/* <div className="mb-xl rounded-[28px] border border-white/10 bg-white/5 p-lg shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:p-xl">
					<div className="flex flex-col gap-lg md:flex-row md:items-center md:justify-between">
						<div>
							<p className="mb-sm font-sans uppercase tracking-[0.18em] text-[0.72rem] text-secondary">Shreev Livings</p>
							<h3 className="max-w-[540px] font-serif text-[1.7rem] leading-tight text-white md:text-[2.2rem]">
								Design spaces that feel personal, warm, and timeless.
							</h3>
						</div>

						<Link
							href="/contact"
							className="inline-flex w-fit items-center justify-center rounded-full border border-secondary bg-secondary px-lg py-md font-sans text-[0.78rem] uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d7b670]"
						>
							Book Consultation
						</Link>
					</div>
				</div> */}

				<div className="mb-xl overflow-hidden rounded-[30px] border border-[#ecd29b]/30 bg-[radial-gradient(circle_at_top_left,_rgba(217,183,96,0.24),_transparent_28%),linear-gradient(135deg,#171819_0%,#0f1112_100%)] p-lg shadow-[0_20px_60px_rgba(0,0,0,0.2)] md:p-xl">
					<div className="flex flex-col gap-lg lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-md sm:gap-lg">
							<div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-secondary/40 bg-white/5 text-secondary shadow-[inset_0_0_20px_rgba(217,183,96,0.12)]">
								<svg viewBox="0 0 120 120" className="h-[42px] w-[42px]" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M30 58L60 34L90 58" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M40 54V82C40 85.314 42.686 88 46 88H74C77.314 88 80 85.314 80 82V54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M54 88V68H66V88" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M34 58H86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
									<path d="M25 90H95" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
									<circle cx="86" cy="46" r="8" stroke="currentColor" strokeWidth="3.5"/>
									<path d="M86 54V86" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
								</svg>
							</div>

							<div>
								<p className="mb-xs font-sans uppercase tracking-[0.18em] text-[0.72rem] text-secondary">Ready to transform your space?</p>
								<h3 className="max-w-[540px] font-serif text-[1.75rem] leading-tight text-white md:text-[2.2rem]">
									Bring warmth, function, and personality into every corner.
								</h3>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-sm lg:justify-end">
							<Link
								href="/contact"
								className="inline-flex items-center gap-sm rounded-full border border-secondary bg-secondary px-lg py-md font-sans text-[0.78rem] uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d7b670]"
							>
								<span>Book Consultation</span>
								<FiArrowRight size={16} />
							</Link>
							<a
								href="tel:+919998439939"
								className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-lg py-md font-sans text-[0.78rem] uppercase tracking-[0.14em] text-white/90 transition-all duration-300 hover:border-secondary hover:text-secondary"
							>
								Call Us
							</a>
						</div>
					</div>
				</div>

				<div className="mb-xl grid grid-cols-1 gap-lg md:grid-cols-3">
					{branchLocations.map((branch) => (
						<div key={branch.name} className="overflow-hidden rounded-[18px] border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
							<div className="h-[170px] w-full overflow-hidden border-b border-white/10">
								<iframe
									title={branch.name}
									src={branch.map}
									width="100%"
									height="100%"
									style={{ border: 0 }}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							</div>

							<div className="p-lg">
								<h4 className="mb-sm font-serif text-[1.3rem] text-white">{branch.name}</h4>
								<p className="text-[0.95rem] leading-[1.8] text-white/75">{branch.address}</p>
								<a
									href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
									target="_blank"
									rel="noreferrer"
									className="mt-md inline-block text-[0.8rem] uppercase tracking-[0.14em] text-secondary transition-fast hover:text-[#d7b670]"
								>
									Open in Maps
								</a>
							</div>
						</div>
					))}
				</div>

				

				<div className="rounded-[28px] border border-white/10 bg-white/5 p-lg md:p-xl">
					<div className="grid grid-cols-1 gap-xl xl:grid-cols-[1.5fr_0.8fr_0.9fr_1.1fr]">
						<div className="max-w-[360px]">
							<div className="mb-md inline-block">
								<Image src="/images/logo.png" alt="Shreev Livings Logo" width={200} height={110} style={{ objectFit: 'contain' }} />
							</div>
							<p className="text-[0.98rem] leading-[1.8] text-white/70">
								Elevating everyday spaces into extraordinary experiences through modern, tailored interior design.
							</p>
						</div>

						<div className="flex flex-col gap-sm">
							<h4 className="mb-md font-sans text-[0.78rem] uppercase tracking-[0.16em] text-secondary">Explore</h4>
							<Link href="/about" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">About Us</Link>
							<Link href="/services" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Services</Link>
							<Link href="/portfolio" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Portfolio</Link>
							<Link href="/career" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Career</Link>
							<Link href="/contact" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Contact</Link>
						</div>

						<div className="flex flex-col gap-sm">
							<h4 className="mb-md font-sans text-[0.78rem] uppercase tracking-[0.16em] text-secondary">Services</h4>
							<Link href="/services" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Turnkey Projects</Link>
							<Link href="/services" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Residential Design</Link>
							<Link href="/lightings" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Lighting Solutions</Link>
							<Link href="/materials" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">Material Palette</Link>
						</div>

						<div className="flex flex-col gap-sm">
							<h4 className="mb-md font-sans text-[0.78rem] uppercase tracking-[0.16em] text-secondary">Connect</h4>
							<a href="mailto:shreevlivings@gmail.com" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">shreevlivings@gmail.com</a>
							<a href="tel:+919998439939" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">+91 99984 39939</a>
							<a href="tel:+919998313993" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">+91 99983 13993</a>
							<a href="tel:+919998187993" className="text-[0.95rem] text-white/75 transition-fast hover:text-secondary">+91 99981 87993</a>

							<div className="mt-sm flex gap-md">
								<a href="https://www.instagram.com/shreevlivings/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all duration-300 hover:border-secondary hover:text-secondary">
									<FiInstagram size={18} />
								</a>
								<a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all duration-300 hover:border-secondary hover:text-secondary">
									<FiFacebook size={18} />
								</a>
								<a href="mailto:shreevlivings@gmail.com" aria-label="Email" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-all duration-300 hover:border-secondary hover:text-secondary">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
										<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" />
										<path d="m5 7 7 5 7-5" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10 py-md">
				<div className="container-custom flex flex-col items-center justify-between gap-sm text-center text-[0.82rem] text-white/60 md:flex-row md:text-left">
					<p>&copy; {new Date().getFullYear()} Shreev Livings. All rights reserved.</p>
					<p>Crafted for modern living.</p>
				</div>
			</div>
		</footer>
	);
}
