const fs = require('fs');
const path = require('path');

const cssMap = {
  main: "w-full",
  sectionTitle: "font-serif text-[3rem] mb-sm text-inherit",
  sectionSubtitle: "font-sans uppercase tracking-[0.15em] text-[0.9rem] text-secondary mb-md block",
  
  hero: "min-h-screen bg-primary text-bg-light flex items-center relative overflow-hidden pt-[100px] pb-[120px]",
  heroGrid: "grid grid-cols-1 md:grid-cols-2 gap-xl items-center w-full py-xl md:py-0",
  heroContent: "text-bg-light z-10",
  heroTitle: "font-serif text-[2.5rem] md:text-[clamp(3rem,5vw,5.5rem)] leading-[1.1] mb-md text-inherit",
  heroDescription: "text-[1.2rem] mb-lg opacity-90 font-light leading-[1.6]",
  heroButtons: "flex gap-md",
  heroImageContainer: "relative h-[50vh] md:h-[75vh] min-h-[400px] md:min-h-[500px] w-full rounded-[8px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
  heroImage: "object-cover",

  about: "py-2xl bg-bg-light text-text-dark",
  aboutGrid: "grid grid-cols-1 md:grid-cols-2 gap-xl items-center",
  aboutText: "md:pr-xl",
  aboutDescription: "text-[1.1rem] leading-[1.8] text-inherit opacity-80 mb-lg",
  aboutImageContainer: "",
  aboutImageWrapper: "relative h-[400px] md:h-[600px] rounded-[4px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]",
  aboutImage: "object-cover",

  stats: "p-0 mt-[-80px] relative z-20 mb-lg",
  statsContainer: "bg-[#131F38]/85 backdrop-blur-[20px] border border-white/10 rounded-[20px] py-[2.5rem] px-[2rem] text-bg-light shadow-[0_30px_60px_rgba(0,0,0,0.3)]",
  statsHeader: "text-center mb-lg",
  statsTitle: "font-serif text-[2rem] text-inherit",
  statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-lg md:gap-xl text-center",
  statItem: "flex flex-col items-center group",
  statIconWrapper: "w-[60px] h-[60px] border border-white/20 rounded-[12px] flex items-center justify-center mb-sm transition-fast group-hover:border-secondary group-hover:-translate-y-[5px]",
  statIcon: "text-bg-light transition-fast group-hover:text-secondary",
  statNumber: "font-serif text-[2.2rem] mb-xs text-inherit",
  statLabel: "font-sans text-[0.9rem] opacity-80",

  services: "py-2xl bg-primary text-bg-light",
  servicesHeader: "text-center mb-xl",
  servicesGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg",
  serviceCard: "bg-white/5 py-xl px-lg rounded-[4px] border border-white/10 transition-smooth hover:-translate-y-[10px] hover:bg-white/10 hover:border-secondary",
  serviceIcon: "text-secondary mb-md",
  serviceTitle: "font-serif text-[1.5rem] mb-sm text-inherit",
  serviceDescription: "text-inherit opacity-80 leading-[1.6]",

  portfolio: "py-2xl bg-bg-light text-text-dark",
  portfolioHeader: "flex flex-col md:flex-row justify-between items-start md:items-end gap-md md:gap-0 mb-xl",
  portfolioGrid: "grid grid-cols-1 md:grid-cols-2 gap-md",
  portfolioItem: "relative h-[400px] md:h-[550px] overflow-hidden rounded-[4px] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] group",
  portfolioImageWrapper: "absolute top-0 left-0 w-full h-full transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.08]",
  portfolioImage: "object-cover",
  portfolioOverlay: "absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0a111e]/85 to-[#0a111e]/20 opacity-0 transition-opacity duration-600 ease-out flex flex-col justify-end p-xl group-hover:opacity-100",
  portfolioItemTitle: "text-white font-serif text-[2.2rem] translate-y-[20px] transition-transform duration-600 ease-smooth group-hover:translate-y-0",
  portfolioItemCategory: "text-secondary uppercase tracking-[0.15em] text-[0.85rem] font-medium translate-y-[20px] transition-transform duration-600 ease-smooth delay-75 group-hover:translate-y-0",

  cta: "py-[8rem] bg-secondary text-primary text-center",
  ctaTitle: "font-serif text-[clamp(2.5rem,5vw,4rem)] mb-[2rem] text-primary",
  ctaButton: "bg-primary text-bg-light hover:bg-bg-light hover:text-primary",

  process: "py-2xl bg-bg-light text-text-dark",
  processHeader: "text-center mb-xl",
  processGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg",
  processStep: "relative py-xl px-lg bg-bg-light border border-black/5 rounded-[4px] transition-smooth hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-secondary group",
  processStepNumber: "font-serif text-[4rem] text-secondary opacity-20 absolute top-[20px] right-[20px] leading-none transition-smooth group-hover:opacity-80 group-hover:scale-110",
  processStepTitle: "font-serif text-[1.5rem] text-inherit mb-sm mt-lg relative z-10",
  processStepDescription: "text-inherit opacity-80 leading-[1.6] text-[0.95rem] relative z-10",

  faq: "py-2xl bg-primary text-bg-light",
  faqGrid: "grid grid-cols-1 lg:grid-cols-2 gap-lg lg:gap-xl items-start",
  faqHeader: "static lg:sticky lg:top-[120px] mb-lg lg:mb-0",
  faqList: "flex flex-col gap-md",
  faqItem: "border-b border-black/10 pb-md",
  faqQuestion: "flex justify-between items-center font-serif text-[1.4rem] text-inherit cursor-pointer py-sm transition-fast hover:text-secondary",
  faqIcon: "text-secondary transition-transform duration-300 ease-in-out",
  faqAnswerWrapper: "overflow-hidden",
  faqAnswer: "text-inherit opacity-80 leading-[1.8] pt-sm pb-sm",

  features: "py-2xl bg-primary text-bg-light",
  featuresHeader: "text-center mb-xl",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg",
  featureCard: "text-center py-xl px-md border-b sm:border-b-0 sm:border-r border-white/10 transition-fast hover:-translate-y-[5px] last:border-0",
  featureIcon: "text-secondary mb-md",
  featureTitle: "font-serif text-[1.3rem] mb-sm text-inherit",
  featureDescription: "text-inherit opacity-80 leading-[1.6] text-[0.95rem]"
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove import styles
  content = content.replace(/import styles from ['"]\.\.\/styles\/shared\.module\.css['"];\n?/g, '');
  content = content.replace(/import styles from ['"]\.\.\/\.\.\/styles\/shared\.module\.css['"];\n?/g, '');

  // Replace styles.xyz with "tailwind-classes"
  content = content.replace(/className=\{styles\.([a-zA-Z0-9_]+)\}/g, (match, p1) => {
    if (cssMap[p1]) {
      return `className="${cssMap[p1]}"`;
    }
    console.warn(`WARNING: Missing tailwind mapping for ${p1} in ${filePath}`);
    return `className="${p1}"`;
  });

  // Handle template literals like className={`container ${styles.heroGrid}`}
  content = content.replace(/className=\{`([^`]+)`\}/g, (match, p1) => {
    let newStr = p1.replace(/\$\{styles\.([a-zA-Z0-9_]+)\}/g, (m, c1) => {
      return cssMap[c1] ? cssMap[c1] : c1;
    });
    // Remove extra spaces
    newStr = newStr.replace(/\s+/g, ' ').trim();
    return `className="${newStr}"`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed ${filePath}`);
}

const filesToProcess = [
  'src/app/page.js',
  'src/app/about/page.js',
  'src/app/contact/page.js',
  'src/app/services/page.js',
  'src/app/portfolio/page.js',
  'src/app/materials/page.js',
  'src/app/lightings/page.js'
];

filesToProcess.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath);
  } else {
    console.warn(`File not found: ${fullPath}`);
  }
});
