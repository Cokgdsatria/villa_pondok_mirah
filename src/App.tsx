import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ArrowRight
} from 'lucide-react';
import logo from '/public/logo.png';

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
  "https://picsum.photos/seed/villa1/1200/800",
  "https://picsum.photos/seed/villa2/800/1200",
  "https://picsum.photos/seed/villa3/1200/800",
  "https://picsum.photos/seed/villa4/800/800",
  "https://picsum.photos/seed/villa5/1200/800",
  "https://picsum.photos/seed/villa6/800/1200",
];

const HoverSlider = ({  images, alt  }: { images: string[], alt:string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState (false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered && images.length >1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    } else {
      setCurrentIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <div 
              key={i}
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

  const whatsappNumber = "62895630476317"; //placeholder Number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20Pondok%20Mirah,%20saya%20tertarik%20untuk%20booking%20villa.`;

  return (
    <div className="min-h-screen selection:bg-mirah-red/20 selection:text-mirah-red">

    {/* Navigation */}
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-mirah-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
        >
          <img 
            src={logo} 
            alt="Pondok Mirah Logo"
            className="w-10 h-10 object-contain"
          />
          <span className={`font-serif text-xl tracking-widest uppercase ${scrolled ? 'text-stone-900' : 'text-mirah-white'}`}>Pondok Mirah</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {['Home', 'About', 'Units', 'Facilities', 'Gallery', 'Contact'].map((item) => (
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
            target='_blank'
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${scrolled ? 'bg-mirah-red text-mirah-white hover:bg-mirah-red/90' : 'bg-mirah-white text-mirah-red hover:bg-mirah-white/90'}`}
          >
            Book Now
          </a>
        </div>
        {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-mirah-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-mirah-red' : 'text-mirah-white'}/>}
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
            {['Home', 'About', 'Units', 'Facilities', 'Gallery', 'Contact'].map((item) => (
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
            src="https://picsum.photos/seed/pondokmirah/1920/1080" 
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
      <section id="about" className="py-32 px-6 bg-mirah-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Sanctuary</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              A blend of traditional charm and modern luxury.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 text-lg font-light">
              Terletak di jantung keindahan alam, Pondok Mirah menawarkan pengalaman menginap yang tak terlupakan. 
              Setiap sudut villa dirancang dengan detail untuk memberikan kenyamanan maksimal bagi Anda dan keluarga.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-stone-100 pt-8">
              <div>
                <p className="text-3xl font-serif text-mirah-red">3</p>
                <p className="text-xs uppercase tracking-widest text-stone-400 mt-1">Bedrooms</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-mirah-red">4</p>
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
              src="https://picsum.photos/seed/interior/800/1000" 
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
            <span className="text-mirah-red text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Units</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Choose Your Style</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Joglo Unit */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 shadow-lg">
                <HoverSlider 
                  images={[
                    "https://picsum.photos/seed/joglo1/1200/800",
                    "https://picsum.photos/seed/joglo2/1200/800",
                    "https://picsum.photos/seed/joglo3/1200/800"
                  ]} 
                  alt="Rumah Joglo Kayu" 
                />
                <div className="absolute top-6 left-6 bg-mirah-red text-mirah-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold z-20">
                  Traditional Heritage
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Rumah Joglo Kayu</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Rasakan kehangatan arsitektur tradisional Jawa dengan sentuhan kayu jati yang elegan. 
                Sangat cocok bagi Anda yang mencari suasana klasik, tenang, dan menyatu dengan alam.
              </p>
              <ul className="space-y-2 mb-8">
                {['Struktur Kayu Jati Pilihan', 'Ukiran Tradisional', 'Suasana Hangat & Klasik'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-stone-500">
                    <div className="w-1 h-1 bg-mirah-red rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Modern Unit */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8 shadow-lg">
                <HoverSlider 
                  images={[
                    "https://picsum.photos/seed/modern1/1200/800",
                    "https://picsum.photos/seed/modern2/1200/800",
                    "https://picsum.photos/seed/modern3/1200/800"
                  ]} 
                  alt="Rumah Beton Besi" 
                />
                <div className="absolute top-6 left-6 bg-stone-900 text-mirah-white px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold z-20">
                  Modern Industrial
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Rumah Beton Besi</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Desain kontemporer yang memadukan kekuatan beton dan estetika besi. 
                Menawarkan ruang yang luas, pencahayaan alami yang maksimal, dan gaya hidup modern yang chic.
              </p>
              <ul className="space-y-2 mb-8">
                {['Desain Minimalis Industrial', 'Ruang Terbuka Luas', 'Material Modern & Kokoh'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-stone-500">
                    <div className="w-1 h-1 bg-mirah-red rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-mirah-white p-10 flex flex-col items-center text-center group hover:bg-mirah-red transition-colors duration-500"
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

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-mirah-red text-mirah-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-mirah-white/60 text-xs uppercase tracking-[0.4em] font-bold mb-8 block">Ready to visit?</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-12">Plan Your Stay</h2>
          <p className="text-mirah-white/80 text-lg mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Kami siap menyambut Anda di Pondok Mirah. Hubungi kami untuk informasi lebih lanjut mengenai ketersediaan dan harga spesial.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-12 py-6 bg-mirah-white text-mirah-red rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-100 transition-all shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-mirah-red" />
              Contact via WhatsApp
            </a>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-12 border-t border-mirah-white/10 pt-16">
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
  )
 
}