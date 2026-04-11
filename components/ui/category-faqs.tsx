'use client'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import { GridPattern } from './background-patterns'
import { ArrowUpRight } from 'lucide-react'

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface CategoryFAQsProps {
    title: string;
    description: string;
    faqItems: FAQItem[];
    onContactClick?: () => void;
}

export default function CategoryFAQs({ title, description, faqItems, onContactClick }: CategoryFAQsProps) {
    return (
        <section className="py-24 px-4 md:px-8 relative bg-white dark:bg-black transition-colors duration-300 overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
             <GridPattern 
                width={60} 
                height={60} 
                x={-1} 
                y={-1} 
                className="opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" 
            />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
                    
                    {/* Header Column */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-black dark:text-white">
                                {title}<span className="text-neutral-300 dark:text-neutral-700">s</span>
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-sm font-medium">
                                {description}
                            </p>
                            
                            {onContactClick && (
                                <div className="hidden lg:block">
                                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Still have questions?</p>
                                    <button
                                        onClick={onContactClick}
                                        className="group inline-flex items-center gap-2 text-black dark:text-white font-bold text-lg border-b-2 border-transparent hover:border-black dark:hover:border-white transition-all pb-1">
                                        Contact Us
                                        <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Accordion Column */}
                    <div className="lg:col-span-7">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full flex flex-col gap-4"
                        >
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-b border-neutral-200 dark:border-neutral-800"
                                >
                                    <AccordionTrigger className="text-xl md:text-2xl font-bold uppercase tracking-tight text-left py-6 text-neutral-400 hover:text-black dark:hover:text-white hover:no-underline transition-colors data-[state=open]:text-black dark:data-[state=open]:text-white">
                                        <div className="flex gap-4 md:gap-6">
                                            <span className="text-sm md:text-base font-bold text-neutral-300 dark:text-neutral-700 pt-1 font-mono">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span>{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed pl-[2.5rem] md:pl-[3.5rem] pb-8">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        
                        {/* Mobile Contact Link */}
                        {onContactClick && (
                            <div className="lg:hidden mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Still have questions?</p>
                                <button
                                    onClick={onContactClick}
                                    className="group inline-flex items-center gap-2 text-black dark:text-white font-bold text-lg border-b-2 border-transparent hover:border-black dark:hover:border-white transition-all pb-1">
                                    Contact Us
                                    <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
