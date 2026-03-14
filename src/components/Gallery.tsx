import React from 'react';
import { motion } from 'motion/react';

export const Gallery = () => {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Real Results</h2>
          <p className="text-brand-muted text-sm">A glimpse into the transformations our clients experience.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)] rounded-2xl overflow-hidden group"
            >
              <img
                src={img}
                alt={`Transformation ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500 origin-center"
              />
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
