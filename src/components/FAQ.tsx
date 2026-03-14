import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Preparation & Care</h2>
          <p className="text-brand-muted text-sm">Everything you need to know for a successful session.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-brand-gold bg-brand-beige/30' : 'border-brand-dark/5'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-serif text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-brand-gold" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-brand-muted text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-brand-dark text-white rounded-[3rem] text-center">
          <h3 className="text-3xl font-serif mb-4">Ready to Transform?</h3>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto">
            Book your private consultation today and start your journey to a more confident you.
          </p>
          <button className="bg-brand-gold text-white px-12 py-4 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};
