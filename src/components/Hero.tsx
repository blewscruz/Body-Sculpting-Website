import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000" 
          alt="Spa Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/50 via-transparent to-brand-beige"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium mb-4 block">
            Exclusive • Private • Relaxing
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-6 leading-tight">
            Sculpt Your <br />
            <span className="italic">Dream Silhouette</span>
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg mb-10 font-light leading-relaxed">
            Experience premium body contouring in our private VIP suite. 
            Dedicated to helping women feel confident, healed, and beautiful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-brand-dark text-white px-10 py-4 rounded-full hover:bg-brand-gold transition-colors duration-300 text-sm tracking-widest uppercase font-medium">
              Book Your Session
            </button>
            <button className="border border-brand-dark/20 text-brand-dark px-10 py-4 rounded-full hover:bg-white transition-colors duration-300 text-sm tracking-widest uppercase font-medium">
              View Services
            </button>
          </div>
        </motion.div>

        {/* Social Proof Widget */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
            ))}
            <span className="text-sm font-medium ml-2 tracking-wide">5.0 Rating from 200+ Clients</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review) => (
              <div 
                key={review.id} 
                className="glass-card p-8 rounded-3xl text-left flex flex-col justify-between aspect-[4/5] hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-sm italic text-brand-muted leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-brand-dark/5">
                  <span className="text-xs font-bold uppercase tracking-widest">{review.author}</span>
                  <span className="text-[10px] text-brand-gold font-black uppercase tracking-tighter">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
