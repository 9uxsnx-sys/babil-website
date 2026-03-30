import React from "react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "./interactive-hover-button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GridPattern, DotPattern } from "./background-patterns";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

interface TitleComponentProps {
  onNavigate?: (page: 'home' | 'services' | 'contact') => void;
}

export default function TitleComponent({ onNavigate }: TitleComponentProps) {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith('fr');

  return (
    <section className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-32 pb-12 md:pt-48 md:pb-24 transition-colors duration-300 overflow-hidden">
        
        {/* Background Pattern */}
        <GridPattern 
            width={40} 
            height={40} 
            x={-1} 
            y={-1} 
            className="opacity-[0.3] [mask-image:linear-gradient(to_bottom,white,transparent)]" 
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* LEFT COLUMN: Typography & Stats */}
                <div className="flex flex-col justify-between h-full gap-12">
                    
                    {/* Main Title Block */}
                    <div>
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-8"
                         >
                            <div className="h-3 w-3 bg-black dark:bg-white rounded-full"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{t('hero.eyebrow')}</span>
                         </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-black uppercase tracking-tighter mb-8 leading-[0.95] text-4xl md:text-6xl lg:text-[4.5rem]"
                        >
                            {t('hero.title_line1')} <br />
                            {t('hero.title_line2')} <br />
                            <span className="text-neutral-400 dark:text-neutral-600">{t('hero.title_line3')}</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={cn(
                                "text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10",
                                // French text is typically 20-30% longer; give it more width to avoid narrow columns
                                isFr ? "max-w-lg" : "max-w-md"
                            )}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }} 
                            className={cn(
                                "flex flex-wrap gap-4",
                                // Tighter gap for French on mobile to encourage side-by-side fit
                                isFr && "gap-2 sm:gap-4"
                            )}
                        >
                            <InteractiveHoverButton 
                                text={t('hero.start_project')}
                                inverse
                                onClick={() => onNavigate?.('contact')}
                                className={cn(
                                    // French adjustments: tighter padding and smaller text on mobile to fit side-by-side
                                    isFr && "px-4 md:px-8 text-xs sm:text-sm min-w-0"
                                )}
                            />
                            <button 
                                onClick={() => onNavigate?.('services')}
                                className={cn(
                                    "px-8 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-sm font-bold uppercase tracking-widest hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors",
                                    // French adjustments: consistent with the primary button
                                    isFr && "px-4 text-xs sm:text-sm"
                                )}
                            >
                                {t('hero.our_services')}
                            </button>
                        </motion.div>
                    </div>

                    {/* Stats Row */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex items-center gap-8 md:gap-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
                    >
                        <div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">24/7</h3>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mt-2">{t('hero.stats.active_partners')}</p>
                        </div>
                        <div>
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">100%</h3>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mt-2">{t('hero.stats.process_opt')}</p>
                        </div>
                         <div className="hidden md:block">
                            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">2x</h3>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mt-2">{t('hero.stats.revenue_impact')}</p>
                        </div>
                    </motion.div>

                </div>

                {/* RIGHT COLUMN: Feature Card Style */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* The Card */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] p-12 h-[700px] relative overflow-hidden flex flex-col justify-between shadow-sm">
                        
                        {/* Background Decoration inside card */}
                        <DotPattern 
                            className="opacity-20 text-black dark:text-white" 
                            width={20} 
                            height={20} 
                            cx={1} 
                            cy={1} 
                            cr={1}
                        />
                         <div className="absolute top-0 right-0 p-12 opacity-5 dark:opacity-10 pointer-events-none">
                             <ArrowRight className="size-80 -rotate-45" />
                         </div>

                         {/* Card Header Content */}
                         <div className="relative z-10">
                             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-black rounded-full mb-8 border border-black/5 dark:border-white/10 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">{t('hero.card.tag')}</span>
                             </div>

                             <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-black dark:text-white">
                                {t('hero.card.title')}
                             </h2>
                        </div>

                         {/* Card Bottom Content */}
                        <div className="relative z-10">
                             <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">
                                {t('hero.card.desc')}
                             </p>

                             <ul className="space-y-5">
                                <li className="flex items-center gap-4 group">
                                    <div className="bg-black dark:bg-white p-1.5 rounded-full">
                                        <CheckCircle2 className="size-4 text-white dark:text-black" />
                                    </div>
                                    <span className="font-bold text-lg uppercase tracking-tight text-black dark:text-white group-hover:translate-x-1 transition-transform">
                                        {t('hero.card.list.custom_arch')}
                                    </span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                     <div className="bg-black dark:bg-white p-1.5 rounded-full">
                                        <CheckCircle2 className="size-4 text-white dark:text-black" />
                                    </div>
                                    <span className="font-bold text-lg uppercase tracking-tight text-black dark:text-white group-hover:translate-x-1 transition-transform">
                                        {t('hero.card.list.auto_logic')}
                                    </span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                     <div className="bg-black dark:bg-white p-1.5 rounded-full">
                                        <CheckCircle2 className="size-4 text-white dark:text-black" />
                                    </div>
                                    <span className="font-bold text-lg uppercase tracking-tight text-black dark:text-white group-hover:translate-x-1 transition-transform">
                                        {t('hero.card.list.data_sys')}
                                    </span>
                                </li>
                             </ul>
                        </div>
                    </div>

                    {/* Decorative element behind card */}
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800"></div>
                </motion.div>

            </div>
        </div>
    </section>
  );
}