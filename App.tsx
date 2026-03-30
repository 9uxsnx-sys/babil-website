import React, { useState } from 'react';
import HomePage from './components/home-page';
import { MenuToggleIcon } from './components/ui/menu-toggle-icon';
import { Component as TextRoll } from './components/ui/animated-menu';
import { RollingTextList } from './components/ui/rolling-list';
import { LanguageSelector } from './components/ui/language-selector-dropdown';
import WebDesignPricing from './components/web-design-pricing';
import AiServicesPricing from './components/ai-services-pricing';
import BusinessSystemsPricing from './components/business-systems-pricing';
import SmartSecurityPricing from './components/smart-security-pricing';
import MobileAppsPricing from './components/mobile-apps-pricing';
import B2BPricing from './components/b2b-pricing';
import ContactPage from './components/contact-page';
import { useTranslation } from 'react-i18next';

type Page = 'home' | 'services' | 'contact' | 'web-design' | 'ai-services' | 'business-systems' | 'smart-security' | 'mobile-apps' | 'b2b-services';

export default function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const MENU_ITEMS: { name: string; page: Page }[] = [
    { name: t('menu.home'), page: "home" },
    { name: t('menu.services'), page: "services" },
    { name: t('menu.contact'), page: "contact" },
  ];

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (id: number) => {
    // ID 1 corresponds to "AI Services"
    if (id === 1) handleNavigation('ai-services');
    // ID 2 corresponds to "Web Design & Dev"
    if (id === 2) handleNavigation('web-design');
    // ID 3 corresponds to "Mobile Apps"
    if (id === 3) handleNavigation('mobile-apps');
    // ID 4 corresponds to "Business Systems"
    if (id === 4) handleNavigation('business-systems');
    // ID 5 corresponds to "B2B" (formerly Tech Support)
    if (id === 5) handleNavigation('b2b-services');
    // ID 6 corresponds to "Smart Security"
    if (id === 6) handleNavigation('smart-security');
  };

  return (
    <div className="relative bg-white dark:bg-black min-h-screen">
      {/* Header - Absolute at the top (scrolls with page) */}
      <header className={`${isMenuOpen ? 'fixed' : 'absolute'} top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6 pointer-events-none`}>
        {/* Logo - Top Left */}
        <div className="pointer-events-auto">
          <button
            onClick={() => handleNavigation('home')}
            className="block"
            aria-label="Go to home"
          >
            <img
              src="/logo.png"
              alt="Babil Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </button>
        </div>
        {/* Controls - Top Right */}
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <LanguageSelector />
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors duration-300 ${isMenuOpen ? 'text-black' : 'text-black dark:text-white'}`}
            aria-label="Toggle menu"
          >
            <MenuToggleIcon open={isMenuOpen} className="size-10 md:size-12" />
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 md:gap-8">
          {MENU_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden"
              onClick={() => handleNavigation(item.page)}
            >
              <TextRoll
                center
                className="text-5xl md:text-7xl font-extrabold uppercase leading-[0.85] tracking-[-0.03em] text-black"
              >
                {item.name}
              </TextRoll>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="transition-colors duration-300">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigation} />
        )}
        
        {currentPage === 'services' && (
          <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 flex flex-col items-center">
               <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-center">
                 {t('menu.services')}
               </h1>
               <div className="h-1 w-full max-w-xs md:max-w-md bg-neutral-100 dark:bg-neutral-800 mb-8" />
            </div>
            <RollingTextList onItemClick={handleServiceClick} />
          </div>
        )}

        {currentPage === 'web-design' && (
          <WebDesignPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}

        {currentPage === 'ai-services' && (
          <AiServicesPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}

        {currentPage === 'mobile-apps' && (
          <MobileAppsPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}

        {currentPage === 'business-systems' && (
          <BusinessSystemsPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}

        {currentPage === 'b2b-services' && (
          <B2BPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}
        
        {currentPage === 'smart-security' && (
          <SmartSecurityPricing 
            onBack={() => handleNavigation('services')}
            onBook={() => handleNavigation('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onBack={() => handleNavigation('home')} />
        )}
      </div>
    </div>
  );
}
