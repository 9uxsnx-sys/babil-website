import React from 'react';
import { ArrowLeft, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactPage({ onBack }: { onBack: () => void }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-12 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-24">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              {t('contact.back')}
            </button>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none md:leading-[0.9]">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed font-medium">
              {t('contact.desc')}
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 flex flex-col gap-12 justify-between">
                
                <div className="space-y-10">
                    <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
                        <div className="flex items-center gap-3 mb-4 text-neutral-400">
                             <Mail className="size-5" />
                             <span className="text-xs font-bold uppercase tracking-widest">{t('contact.email')}</span>
                        </div>
                        <a href="mailto:babil.agency@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline decoration-neutral-200 dark:decoration-neutral-800 decoration-2 underline-offset-4">
                            babil.agency@gmail.com
                        </a>
                    </div>

                     <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
                        <div className="flex items-center gap-3 mb-4 text-neutral-400">
                             <Phone className="size-5" />
                             <span className="text-xs font-bold uppercase tracking-widest">{t('contact.call')}</span>
                        </div>
                        <a href="tel:0774276750" className="text-2xl md:text-3xl font-bold hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                            0774 27 67 50
                        </a>
                    </div>

                     <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
                        <div className="flex items-center gap-3 mb-4 text-neutral-400">
                             <MapPin className="size-5" />
                             <span className="text-xs font-bold uppercase tracking-widest">{t('contact.location')}</span>
                        </div>
                        <a href="https://maps.app.goo.gl/L1XWjkzWTyHfVM7V9" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 leading-tight hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors underline decoration-neutral-200 dark:decoration-neutral-800 decoration-2 underline-offset-4">
                            commercial center<br/>
                            Mohammedia Mall<br/>
                            floor 3
                        </a>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 lg:mt-auto">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">{t('contact.follow')}</p>
                    <div className="flex flex-col gap-4">
                        <SocialLink href="https://www.instagram.com/babil__inc?igsh=bWQ3M3hkY2thbmph" label="Instagram" />
                        <SocialLink href="https://wa.me/213774276750" label="WhatsApp" />
                    </div>
                </div>
            </div>

            {/* Right: Calendly Container */}
            <div className="lg:col-span-7">
                <div className="bg-neutral-100 dark:bg-neutral-900 rounded-[2.5rem] p-2 md:p-4 h-[650px] md:h-[750px] relative overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
                     <iframe 
                        src="https://calendly.com/george-y-luther/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                        width="100%" 
                        height="100%" 
                        title="Book a Consultation"
                        className="w-full h-full rounded-[2rem] bg-white border-0"
                     ></iframe>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
    return (
        <a 
            href={href} 
            className="group flex items-center justify-between w-full p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition-all duration-300"
        >
            <span className="font-bold uppercase tracking-wider">{label}</span>
            <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
    )
}
