import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Services = () => {
  const mainServices = SERVICES.filter(s => s.category === 'main');
  const addOns = SERVICES.filter(s => s.category === 'addon');

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Treatments</h2>
          <div className="w-20 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-muted max-w-xl mx-auto">
            Scientifically-backed, non-invasive procedures designed to detoxify, 
            contour, and rejuvenate your body.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {mainServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden rounded-3xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block">
                  {service.description}
                </span>
                <h3 className="text-3xl font-serif mb-4">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  {service.details}
                </p>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-brand-beige rounded-[3rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-2">Premium Add-Ons</h3>
            <p className="text-brand-muted text-sm">Enhance your results with these specialized treatments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon) => (
              <div key={addon.id} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img src={addon.image} alt={addon.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-serif mb-2">{addon.title}</h4>
                <p className="text-xs text-brand-muted mb-4 px-4">{addon.description}</p>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
