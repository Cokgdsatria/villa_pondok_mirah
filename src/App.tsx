/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Tv, 
  Coffee, 
  Wind, 
  Waves, 
  Utensils, 
  Car, 
  ShieldCheck, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X,
  MapPin,
  Phone,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import img1 from './assets/photo_11_jogloUnit.jpg'
import img2 from './assets/photo_12_joglo.jpg'
import img3 from './assets/photo_13_joglo.jpg'
import img5 from './assets/photo_1.jpg'
import img6 from './assets/photo_2.jpg'
import img7 from './assets/photo_3.jpg'
import img8 from './assets/photo_5.jpg'
import img9 from './assets/photo_6.jpg'
import img10 from './assets/photo_7.jpg'
import img11 from './assets/photo_8.jpg'
import img12 from './assets/photo_9.jpg'

const facilities = [
  { icon: <Waves className="w-6 h-6" />, name: 'Private Pool' },
  { icon: <Wifi className="w-6 h-6" />, name: 'High Speed WiFi' },
  { icon: <Wind className="w-6 h-6" />, name: 'Air Conditioning' },
  { icon: <Tv className="w-6 h-6" />, name: 'Smart TV' },
  { icon: <Utensils className="w-6 h-6" />, name: 'Fully Equipped Kitchen' },
  { icon: <Coffee className="w-6 h-6" />, name: 'Coffee Maker' },
  { icon: <Car className="w-6 h-6" />, name: 'Free Parking' },
  { icon: <ShieldCheck className="w-6 h-6" />, name: '24/7 Security' },
];

const galleryImages = [
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

const UnitSlider = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/slider overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-mirah-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-mirah-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-mirah-white/40 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-mirah-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-mirah-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-mirah-white/40 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-4 bg-mirah-white' : 'w-1 bg-mirah-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "628123456789"; // Placeholder number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Pondok%20Mirah,%20saya%20tertarik%20untuk%20booking%20villa.`;

  return (
    <div className="min-h-screen selection:bg-mirah-red/20 selection:text-mirah-red">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-mirah-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-4"
          >
            <img 
              src="/logo.png" 
              alt="Pondok Mirah Logo" 
              className="w-10 h-10 md:w-14 lg:w-16 object-contain brightness-0 invert"
              style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback jika logo.png belum diunggah
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-8 h-8 md:w-10 md:h-10 bg-mirah-red rounded-full flex-shrink-0 items-center justify-center">
              <span className="text-mirah-white font-serif font-bold text-[10px] md:text-xs">PM</span>
            </div>
            <span className={`font-serif text-lg md:text-xl tracking-widest uppercase whitespace-nowrap ${scrolled ? 'text-stone-900' : 'text-mirah-white'}`}>
              Pondok Mirah
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center gap-10">
            {['Home', 'About', 'Units', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-mirah-red ${scrolled ? 'text-stone-600' : 'text-mirah-white/90'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${scrolled ? 'bg-mirah-red text-mirah-white hover:bg-mirah-red/90' : 'bg-mirah-white text-mirah-red hover:bg-mirah-white/90'}`}
            >
              Book Now
            </a>
          </div>

          {/* Tablet Menu (Compact) */}
          <div className="hidden md:flex xl:hidden items-center gap-6">
            {['Home', 'About', 'Units', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`text-[10px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-mirah-red ${scrolled ? 'text-stone-600' : 'text-mirah-white/90'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all ${scrolled ? 'bg-mirah-red text-mirah-white hover:bg-mirah-red/90' : 'bg-mirah-white text-mirah-red hover:bg-mirah-white/90'}`}
            >
              Book
            </a>
            <button 
              className="text-mirah-red ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className={scrolled ? 'text-mirah-red' : 'text-mirah-white'} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-mirah-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-mirah-red' : 'text-mirah-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-mirah-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Home', 'About', 'Units', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif text-stone-800 hover:text-mirah-red transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-10 py-4 bg-mirah-red text-mirah-white rounded-full text-sm uppercase tracking-widest font-bold"
            >
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={img1} 
            alt="Pondok Mirah Villa" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-mirah-white/80 uppercase tracking-[0.4em] text-sm mb-6"
          >
            Experience Serenity
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-9xl text-mirah-white font-serif mb-12"
          >
            Pondok Mirah
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href="#about"
              className="inline-flex items-center gap-4 text-mirah-white group"
            >
              <span className="text-xs uppercase tracking-[0.3em] border-b border-mirah-white/30 pb-1 group-hover:border-mirah-white transition-all">
                Discover More
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-gradient-to-b from-mirah-white/50 to-transparent" />
        </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 bg-mirah-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Sanctuary</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              A masterpiece of traditional heritage.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light">
              Terletak di jantung keindahan alam, Pondok Mirah menawarkan pengalaman menginap yang kental dengan nuansa tradisional. 
              Setiap sudut villa dirancang dengan detail kayu jati yang elegan untuk memberikan ketenangan maksimal bagi Anda dan keluarga.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-stone-100 pt-8">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-serif text-mirah-red">2</p>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Wooden Houses</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-serif text-mirah-red">2</p>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Bedrooms</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-serif text-mirah-red">2</p>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Bathrooms</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
          >
            <img 
              src={img11} 
              alt="Villa Interior" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Villa Types Section */}
      <section id="units" className="py-32 px-6 bg-mirah-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Villa</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Traditional Heritage</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Joglo Unit */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 shadow-lg">
                <UnitSlider 
                  images={[
                    img1,
                    img2,
                    img3
                  ]} 
                  alt="Rumah Joglo Kayu" 
                />
                <div className="absolute top-6 left-6 bg-mirah-red text-mirah-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold z-20">
                  Joglo Wooden House
                </div>
              </div>
              <h3 className="text-3xl font-serif text-stone-900 mb-4 text-center">Rumah Joglo Kayu</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 text-center">
                Rasakan kehangatan arsitektur tradisional Jawa dengan sentuhan kayu jati yang elegan. 
                Sangat cocok bagi Anda yang mencari suasana klasik, tenang, dan menyatu dengan alam.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {['Struktur Kayu Jati Pilihan', 'Ukiran Tradisional', 'Suasana Hangat & Klasik'].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-sm text-stone-500">
                    <div className="w-1 h-1 bg-mirah-red rounded-full" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Amenities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Curated Facilities</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-mirah-white p-8 md:p-10 flex flex-col items-center text-center group hover:bg-mirah-red transition-colors duration-500"
              >
                <div className="text-mirah-red mb-6 group-hover:text-mirah-white transition-colors">
                  {facility.icon}
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-stone-600 group-hover:text-mirah-white/90 transition-colors">
                  {facility.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-mirah-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Visual Journey</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Gallery</h2>
            </div>
            <p className="text-stone-500 max-w-md text-sm leading-relaxed">
              Intip keindahan setiap sudut Pondok Mirah melalui lensa kami. Keindahan yang menanti kehadiran Anda.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-mirah-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Find Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Our Location</h2>
          </div>
          
          <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.946320504144!2d115.263152!3d-8.505505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d7f9f9f9f9f%3A0x9f9f9f9f9f9f9f9f!2sPondok%20Mirah%20Ubud!5e0!3m2!1sen!2sid!4v1711000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Pondok Mirah Ubud Location"
            ></iframe>
            <div className="absolute bottom-6 right-6">
              <a 
                href="https://maps.app.goo.gl/X2sRy6urjjvRXcoCA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mirah-white text-mirah-red px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-stone-50 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-mirah-red text-mirah-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-mirah-white/60 text-xs uppercase tracking-[0.4em] font-bold mb-8 block">Ready to visit?</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-12">Plan Your Stay</h2>
          <p className="text-mirah-white/80 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Kami siap menyambut Anda di Pondok Mirah. Hubungi kami untuk informasi lebih lanjut mengenai ketersediaan dan harga spesial.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-10 md:px-12 py-5 md:py-6 bg-mirah-white text-mirah-red rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-stone-100 transition-all shadow-xl w-full md:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 fill-mirah-red" />
              Contact via WhatsApp
            </a>
          </div>

          <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 border-t border-mirah-white/10 pt-12 md:pt-16">
            <div className="flex flex-col items-center gap-4">
              <MapPin className="w-6 h-6 text-mirah-white/40" />
              <p className="text-xs uppercase tracking-widest text-mirah-white/60">Location</p>
              <p className="text-sm">Ubud, Bali, Indonesia</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Phone className="w-6 h-6 text-mirah-white/40" />
              <p className="text-xs uppercase tracking-widest text-mirah-white/60">Phone</p>
              <p className="text-sm">+62 812 3456 789</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Instagram className="w-6 h-6 text-mirah-white/40" />
              <p className="text-xs uppercase tracking-widest text-mirah-white/60">Instagram</p>
              <p className="text-sm">@pondokmirah_villa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-500 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} Pondok Mirah Villa. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
