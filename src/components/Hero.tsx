import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Hero = ({ onBook }: { onBook?: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
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
          <span className="text-brand-gold uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Exclusive • Private • Relaxing
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-dark mb-8 leading-snug">
            Sculpt Your <br />
            <span className="italic">Dream Silhouette</span>
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg mb-12 font-light leading-relaxed">
            Experience premium body contouring in our private VIP suite.
            Dedicated to helping women feel confident, healed, and beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBook}
              className="bg-brand-dark text-white px-10 py-4 rounded-full hover:bg-brand-gold transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
            >
              Book Your Session
            </button>
            <a href="#services" className="border border-brand-dark/20 text-brand-dark px-10 py-4 rounded-full hover:bg-white transition-colors duration-300 text-sm tracking-widest uppercase font-medium inline-block">
              View Services
            </a>
          </div>
        </motion.div>

        {/* Social Proof Widget */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 max-w-5xl mx-auto w-full"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-16 bg-white shadow-2xl px-8 py-4 rounded-3xl md:rounded-full border border-brand-gold/20 flex-col md:flex-row text-center md:text-left">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold drop-shadow-sm" />
              ))}
            </div>
            <div className="hidden md:block w-px h-6 bg-brand-dark/20 mx-2"></div>
            <div className="flex flex-col">
              <span className="text-base font-black text-brand-dark leading-none">5.0 Star Rating</span>
              <span className="text-[11px] font-bold text-brand-muted uppercase tracking-widest mt-1">From 200+ Happy Clients</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl text-left flex flex-col justify-between h-full min-h-[240px] shadow-xl border border-white hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-2 text-9xl text-brand-gold/10 font-serif leading-none select-none">
                  "
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold drop-shadow-sm" />
                    ))}
                  </div>
                  <p className="text-base text-brand-dark leading-relaxed font-medium">"{review.text}"</p>
                </div>

                <div className="flex items-center justify-between pt-6 mt-6 border-t border-brand-dark/10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-dark font-serif font-bold text-lg">
                      {review.author[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-brand-dark">{review.author}</span>
                      <span className="text-[10px] text-brand-muted uppercase tracking-wider flex items-center gap-1 mt-0.5">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        Verified
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-brand-gold font-black uppercase tracking-widest bg-brand-gold/10 px-3 py-1.5 rounded-full">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
