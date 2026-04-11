import React from 'react';
import TitleComponent from './ui/dynamic-text-slider';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { VelocityScroll } from './ui/scroll-based-velocity';
import { ArrowUpRight, Star, CheckCircle2, ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import { DotPattern, GridPattern } from './ui/background-patterns';
import FAQs from './ui/faqs';
import { useTranslation } from 'react-i18next';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'contact' | 'web-design' | 'business-systems') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <TitleComponent onNavigate={onNavigate} />

      {/* 2. SERVICES MARQUEE */}
      <div className="w-full border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 backdrop-blur-sm py-4 overflow-hidden relative z-10">
        <VelocityScroll 
          text={t('home.marquee')}
          default_velocity={1.5}
          numRows={1}
          className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 select-none"
        />
      </div>

      {/* 3. FEATURED SERVICES */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative">
        <DotPattern 
            className="opacity-40 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]" 
            width={20} 
            height={20} 
            cx={1} 
            cy={1} 
            cr={1}
        />
        <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">{t('home.capabilities.title')}</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md">{t('home.capabilities.desc')}</p>
                </div>
                <button 
                    onClick={() => onNavigate('services')}
                    className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                >
                    {t('home.capabilities.view_all')} <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <ProjectCard 
                    title={t('services_list.web_design')} 
                    category={t('services_list.categories.digital')}
                    price="Website Solutions"
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                    onClick={() => onNavigate('web-design')}
                />
                <ProjectCard 
                    title={t('services_list.business_systems')} 
                    category={t('services_list.categories.solutions')}
                    price="Business Systems"
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
                    onClick={() => onNavigate('business-systems')}
                />
            </div>
        </div>
      </section>

      {/* 4. THE BLUEPRINT */}
      <section className="py-24 bg-neutral-50 dark:bg-[#050505] border-y border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
        <GridPattern 
            width={60} 
            height={60} 
            x={-1} 
            y={-1} 
            className="opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" 
        />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left: Sticky Header */}
                <div className="lg:col-span-5 relative">
                    <div className="lg:sticky lg:top-32">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none md:leading-[0.9]">
                            {t('home.blueprint.title')}
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                            {t('home.blueprint.desc')}
                        </p>
                        <InteractiveHoverButton text={t('home.blueprint.start_build')} onClick={() => onNavigate('contact')} />
                    </div>
                </div>

                {/* Right: Steps List */}
                <div className="lg:col-span-7 flex flex-col gap-12">
                    <StepItem 
                        step="01" 
                        title={t('home.blueprint.steps.s01.title')} 
                        desc={t('home.blueprint.steps.s01.desc')} 
                    />
                    <StepItem 
                        step="02" 
                        title={t('home.blueprint.steps.s02.title')} 
                        desc={t('home.blueprint.steps.s02.desc')} 
                    />
                    <StepItem 
                        step="03" 
                        title={t('home.blueprint.steps.s03.title')} 
                        desc={t('home.blueprint.steps.s03.desc')} 
                    />
                    <StepItem 
                        step="04" 
                        title={t('home.blueprint.steps.s04.title')} 
                        desc={t('home.blueprint.steps.s04.desc')} 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* 5. THE GUARANTEE */}
      <section className="py-24 px-4 md:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center justify-between shadow-2xl">
                
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <CheckCircle2 className="size-64 -rotate-12" />
                </div>
                
                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="px-3 py-1 bg-white/20 dark:bg-black/10 rounded-full backdrop-blur-md border border-white/10 dark:border-black/10">
                            <span className="text-xs font-bold uppercase tracking-widest">{t('home.guarantee.tag')}</span>
                        </div>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                        {t('home.guarantee.title')}
                    </h3>
                    <p className="text-lg text-neutral-300 dark:text-neutral-600 font-medium leading-relaxed">
                        {t('home.guarantee.desc')}
                    </p>
                </div>
                
                <div className="relative z-10 flex flex-col gap-4 min-w-[250px] w-full md:w-auto">
                     <div className="bg-white/10 dark:bg-black/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 dark:border-black/10 flex items-center gap-4 hover:bg-white/20 dark:hover:bg-black/10 transition-colors cursor-default">
                        <ShieldCheck className="size-6 shrink-0" />
                        <span className="font-bold">{t('home.guarantee.lifetime')}</span>
                     </div>
                     <div className="bg-white/10 dark:bg-black/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 dark:border-black/10 flex items-center gap-4 hover:bg-white/20 dark:hover:bg-black/10 transition-colors cursor-default">
                        <Zap className="size-6 shrink-0" />
                        <span className="font-bold">{t('home.guarantee.rapid')}</span>
                     </div>
                     <div className="bg-white/10 dark:bg-black/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 dark:border-black/10 flex items-center gap-4 hover:bg-white/20 dark:hover:bg-black/10 transition-colors cursor-default">
                        <Lock className="size-6 shrink-0" />
                        <span className="font-bold">{t('home.guarantee.ip')}</span>
                     </div>
                </div>

            </div>
        </div>
      </section>

      {/* 6. IMPACT METRICS */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 border-t border-neutral-200 dark:border-neutral-800 relative">
         <GridPattern 
            width={40} 
            height={40} 
            x={-1} 
            y={-1} 
            className="opacity-30 [mask-image:radial-gradient(500px_circle_at_left,white,transparent)]" 
        />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch relative z-10">
            
            {/* Left: Big Numbers */}
            <div className="flex flex-col justify-between gap-12 py-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-8xl md:text-[8rem] font-black tracking-tighter leading-[0.8]">100%</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 pl-2">{t('home.impact.projects')}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-8xl md:text-[8rem] font-black tracking-tighter leading-[0.8]">Zero</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 pl-2">{t('home.impact.delivery')}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-8xl md:text-[8rem] font-black tracking-tighter leading-[0.8]">24/7</h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 pl-2">{t('home.impact.uptime')}</p>
                </div>
            </div>

            {/* Right: Context Card */}
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl p-10 md:p-16 flex flex-col justify-center h-full relative overflow-hidden">
                <DotPattern className="opacity-10 absolute inset-0" width={16} height={16} />
                <div className="relative z-10">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[1.1] md:leading-[0.9] text-black dark:text-white">
                        {t('home.impact.card_title')}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-md font-medium">
                        {t('home.impact.card_desc')}
                    </p>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-500/20 p-1.5 rounded-full">
                                <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-500" strokeWidth={3} />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                {t('home.impact.list.arch')}
                            </span>
                        </li>
                         <li className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-500/20 p-1.5 rounded-full">
                                <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-500" strokeWidth={3} />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                {t('home.impact.list.ai')}
                            </span>
                        </li>
                         <li className="flex items-start gap-4 group">
                            <div className="mt-1 bg-emerald-500/20 p-1.5 rounded-full">
                                <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-500" strokeWidth={3} />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-tight text-neutral-900 dark:text-white group-hover:translate-x-1 transition-transform">
                                {t('home.impact.list.security')}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* 7. CORE DISCIPLINES */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 relative">
        <DotPattern className="opacity-20 [mask-image:radial-gradient(400px_circle_at_right,white,transparent)]" width={24} height={24} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <ServiceSummaryCard 
                number="01" 
                title={t('home.disciplines.d01.title')} 
                desc={t('home.disciplines.d01.desc')} 
            />
            <ServiceSummaryCard 
                number="02" 
                title={t('home.disciplines.d02.title')} 
                desc={t('home.disciplines.d02.desc')} 
            />
            <ServiceSummaryCard 
                number="03" 
                title={t('home.disciplines.d03.title')} 
                desc={t('home.disciplines.d03.desc')} 
            />
        </div>
      </section>

      {/* 8. FAQs Section */}
      <FAQs />

      {/* 9. FOOTER */}
      <footer className="py-24 px-4 md:px-8 text-center bg-neutral-50 dark:bg-[#050505] border-t border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
        <GridPattern 
            width={100} 
            height={100} 
            x={-1} 
            y={-1} 
            className="opacity-10 absolute inset-0"
        />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none md:leading-[0.9]">
                {t('footer.ready')} <br />
                <span className="text-neutral-400 dark:text-neutral-600">{t('footer.scale')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
                {t('footer.desc')}
            </p>
            <InteractiveHoverButton text={t('footer.get_in_touch')} onClick={() => onNavigate('contact')} />
            
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm font-bold uppercase tracking-widest text-neutral-400">
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Email</a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
            </div>
            
            <div className="mt-12 text-xs text-neutral-400">
                © {new Date().getFullYear()} BABLE. {t('footer.rights')}
            </div>
        </div>
      </footer>
    </div>
  );
}

/* --- SUB COMPONENTS --- */

function ProjectCard({ title, category, price, image, onClick }: { title: string, category: string, price: string, image: string, onClick?: () => void }) {
    return (
        <div onClick={onClick} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-6 relative">
                 <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {price}
                 </div>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-1">{title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{category}</p>
                </div>
                <div className="size-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                    <ArrowUpRight className="size-5" />
                </div>
            </div>
        </div>
    )
}

function StepItem({ step, title, desc }: { step: string, title: string, desc: string }) {
    return (
        <div className="border-l border-neutral-300 dark:border-neutral-700 pl-8 md:pl-12 py-2 relative group">
            <span className="absolute -left-[3px] top-2 w-[5px] h-[40px] bg-black dark:bg-white scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></span>
            <span className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Step {step}</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">{desc}</p>
        </div>
    )
}

function ServiceSummaryCard({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="bg-black text-white dark:bg-white dark:text-black p-8 md:p-10 rounded-2xl flex flex-col justify-between min-h-[300px] group hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl md:text-6xl font-black tracking-tighter text-neutral-200 dark:text-neutral-800 select-none">
                {number}
            </div>
            <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{title}</h3>
                <p className="text-neutral-400 dark:text-neutral-600 text-sm leading-relaxed font-medium">
                    {desc}
                </p>
            </div>
        </div>
    )
}
