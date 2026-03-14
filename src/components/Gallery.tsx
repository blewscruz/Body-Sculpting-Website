import React from 'react';
import { motion } from 'motion/react';

export const Gallery = () => {
  const images = [
    'https://picsum.photos/seed/ba1/600/800',
    'https://picsum.photos/seed/ba2/600/800',
    'https://picsum.photos/seed/ba3/600/800',
    'https://picsum.photos/seed/ba4/600/800',
    'https://picsum.photos/seed/ba5/600/800',
    'https://picsum.photos/seed/ba6/600/800',
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Real Results</h2>
          <p className="text-brand-muted text-sm">A glimpse into the transformations our clients experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt={`Transformation ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">View Result</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-muted italic">
            *Results vary by individual. Consistency and aftercare are key to optimal outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
