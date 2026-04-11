import React from "react";
import { ArrowLeft, Check, MoveRight } from "lucide-react";
import { ServicePolicies } from "./service-policies";
import CategoryFAQs from "./ui/category-faqs";
import { useTranslation } from "react-i18next";

interface PricingTier {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export default function WebDesignPricing({ onBack, onBook }: { onBack: () => void, onBook: () => void }) {
  const { t } = useTranslation();

  const PRICING_TIERS: PricingTier[] = [
    {
      id: "01",
      title: t('pricing_web.t1.title'),
      category: t('pricing_web.t1.cat'),
      description: t('pricing_web.t1.desc'),
      features: t('pricing_web.t1.f', { returnObjects: true }) as string[]
    },
    {
      id: "02",
      title: t('pricing_web.t2.title'),
      category: t('pricing_web.t2.cat'),
      description: t('pricing_web.t2.desc'),
      features: t('pricing_web.t2.f', { returnObjects: true }) as string[]
    },
    {
      id: "03",
      title: t('pricing_web.t3.title'),
      category: t('pricing_web.t3.cat'),
      description: t('pricing_web.t3.desc'),
      features: t('pricing_web.t3.f', { returnObjects: true }) as string[]
    },
    {
      id: "04",
      title: t('pricing_web.t4.title'),
      category: t('pricing_web.t4.cat'),
      description: t('pricing_web.t4.desc'),
      features: t('pricing_web.t4.f', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          {t('common.back_services')}
        </button>

        {/* Header */}
        <div className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-black dark:text-white">
                {t('pricing_web.title')}
            </h1>
            <div className="h-1.5 w-20 bg-black dark:bg-white mb-8"></div>
            <p className="text-lg md:text-xl font-medium text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                {t('pricing_web.desc')}
            </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PRICING_TIERS.map((tier) => (
                <div key={tier.id} className="group border border-blue-600 dark:border-blue-500 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-neutral-50 dark:bg-neutral-900/50">
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-white dark:bg-black px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                            {tier.category}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 min-h-[60px]">
                        {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                                <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button 
                        onClick={onBook}
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-700"
                    >
                        {t('common.get_started')}
                        <MoveRight className="size-4" />
                    </button>
                </div>
            ))}
        </div>

        <ServicePolicies />

        <CategoryFAQs 
          title="FAQ"
          description={t('category_faqs.web.desc')}
          onContactClick={onBook}
          faqItems={(t('category_faqs.web.items', { returnObjects: true }) as Array<{q: string, a: string}>).map((item, index) => ({
            id: `web-${index + 1}`,
            question: item.q,
            answer: item.a
          }))}
        />
      </div>
    </div>
  );
}
