import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000" 
                alt="The Sculptor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">
              Meet Your Sculptor
            </span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              Dedicated to Your <br />
              <span className="italic">Healing & Confidence</span>
            </h2>
            
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                Hi, I'm [Owner Name]. My passion for body sculpting goes beyond aesthetics. 
                I believe in the power of touch to heal, detoxify, and restore confidence.
              </p>
              <p>
                With certifications in advanced body contouring and specialized lymphatic drainage, 
                I provide a safe, professional, and deeply relaxing environment for women at every stage of their journey—whether you're looking for a post-op recovery partner or a signature glow-up.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                'Certified Body Sculptor',
                'Post-Op Care Specialist',
                'Body Positivity Advocate',
                'Licensed & Insured'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-3xl border border-brand-gold/10">
              <h4 className="font-serif text-xl mb-2">Private Studio Protocol</h4>
              <p className="text-sm text-brand-muted">
                Located in a private studio in [City]. To maintain an exclusive VIP experience, 
                the exact address is provided upon booking. Please text when you arrive to be greeted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
