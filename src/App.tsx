import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { StickyBooking } from './components/StickyBooking';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-dark/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center text-white font-serif italic text-xl">S</div>
            <span className="font-serif text-xl tracking-tight">Sculpt & Glow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Gallery', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-brand-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-brand-dark text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-dark font-serif italic text-2xl">S</div>
                <span className="font-serif text-3xl tracking-tight">Sculpt & Glow</span>
              </div>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed mb-8">
                A private, exclusive body sculpting studio dedicated to helping women achieve their silhouette goals through non-invasive, premium treatments.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Meet the Sculptor</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Before & After</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Preparation & Care</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Contact</h4>
              <ul className="space-y-4 text-white/40 text-sm">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-gold" /> (555) 123-4567</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-gold" /> hello@sculptglow.com</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-gold" /> Private Studio, [City]</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">
              © 2026 Sculpt & Glow Studio. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] text-white/20 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <StickyBooking />
    </div>
  );
}
