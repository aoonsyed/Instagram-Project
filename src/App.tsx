import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Instagram, MessageCircle, X, ChevronRight, ArrowRight, Menu, Star, Mail, MapPin, Phone } from 'lucide-react';
import { PRODUCTS, SOCIAL_LINKS, TESTIMONIALS } from './constants';
import { Product, Category } from './types';
import butterflyLogo from './assets/butterfly.png';
import luxeBraceletPink from './assets/bracelets-pink.png';
import luxeBraceletRed from './assets/bracelets-red.png';
import luxeLashes from './assets/lashes-garden.png';

// --- Components ---

const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex-1 hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#collection" className="hover:text-brand-accent transition-colors">Collection</a>
          <a href="#about" className="hover:text-brand-accent transition-colors">Our Story</a>
        </div>

        <div className="flex-1 flex justify-center">
          <a href="#" className="inline-flex items-center gap-3 group">
            <img
              src={butterflyLogo}
              alt="Beautiful XoXo butterfly logo"
              className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-sm"
            />
            <h1 className="text-3xl md:text-4xl font-serif tracking-tighter italic group-hover:text-brand-accent transition-colors">
              Beautiful XoXo
            </h1>
          </a>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hidden md:block hover:text-brand-accent transition-colors">
            <Instagram size={20} />
          </a>
          <button onClick={onCartClick} className="relative hover:text-brand-accent transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-bg z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-4xl font-serif italic">
              <a href="#collection" onClick={() => setIsMobileMenuOpen(false)}>Collection</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={luxeLashes}
          alt="Beautiful XoXo lashes and jewelry"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/30 via-brand-secondary/10 to-brand-bg"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-xs uppercase tracking-[0.4em] mb-6 font-medium text-brand-accent"
        >
          Define Your Radiance
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif italic leading-none mb-8 text-brand-ink"
        >
          Be <span className="text-brand-accent">U</span> tiful <br /> <span className="md:ml-24">XoXo</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a 
            href="#collection" 
            className="inline-flex items-center gap-4 px-8 py-4 border border-brand-ink/20 rounded-full hover:bg-brand-ink hover:text-brand-bg transition-all duration-500 group"
          >
            <span className="text-sm uppercase tracking-widest font-medium">Explore Collection</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-[1px] h-24 bg-brand-ink animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-widest vertical-rl">Scroll</span>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
        {product.video_url ? (
          <video
            src={product.video_url}
            poster={product.image}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/5 transition-colors duration-500"></div>
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full py-3 bg-brand-bg text-brand-ink text-xs uppercase tracking-widest font-medium shadow-xl">
            Quick View
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1 block">{product.category}</span>
          <h3 className="text-lg font-serif italic">{product.name}</h3>
        </div>
        <span className="text-sm font-medium">${product.price}</span>
      </div>
    </motion.div>
  );
};

const ProductModal = ({ product, onClose }: { product: Product | null, onClose: () => void }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-brand-bg w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-sm"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-brand-ink/5 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="md:w-1/2 h-64 md:h-auto">
          {product.video_url ? (
            <video
              src={product.video_url}
              poster={product.image}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold mb-4 block">
            {product.category}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">{product.name}</h2>
          <p className="text-2xl font-light mb-8">${product.price}</p>
          
          <div className="h-[1px] w-full bg-brand-ink/10 mb-8"></div>
          
          <p className="text-brand-ink/70 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="space-y-4 mb-12">
            <h4 className="text-xs uppercase tracking-widest font-bold">Details</h4>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-brand-ink/60 italic">
                  <div className="w-1 h-1 bg-brand-accent rounded-full"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-brand-ink text-brand-bg py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-accent transition-colors duration-500">
              Add to Bag
            </button>
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 border border-brand-ink/20 text-xs uppercase tracking-[0.2em] font-bold hover:bg-brand-ink/5 transition-colors"
            >
              <MessageCircle size={18} />
              Inquire
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 block font-medium text-brand-accent">Voices of Beauty</span>
          <h2 className="text-5xl md:text-6xl font-serif italic">What Our Clients Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-bg p-12 rounded-2xl shadow-sm border border-brand-accent/10"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-lg italic font-serif mb-8 text-brand-ink/80">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                  {t.name[0]}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-24">
        <div className="md:w-1/2">
          <span className="text-xs uppercase tracking-[0.4em] mb-6 block font-medium text-brand-accent">Get In Touch</span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Let's Connect</h2>
          <p className="text-lg text-brand-ink/60 leading-relaxed mb-6">
            Have questions about our collection or need a custom consultation? 
            Our team is here to help you find your perfect glow.
          </p>
          <p className="text-sm text-brand-ink/50 leading-relaxed mb-12">
            We love hearing from you. Share your suggestions, custom ideas, or feedback so we can keep making Beautiful XoXo even more you.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold">Email</h4>
                <p className="text-brand-ink/60 italic">be.you.tiful752@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold">Phone</h4>
                <p className="text-brand-ink/60 italic">347-306-5783</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold">Location</h4>
                <p className="text-brand-ink/60 italic">New York City</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-brand-secondary/20 p-12 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Name</label>
                <input type="text" className="w-full bg-brand-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email</label>
                <input type="email" className="w-full bg-brand-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Subject</label>
              <input type="text" className="w-full bg-brand-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
              <textarea rows={4} className="w-full bg-brand-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-brand-ink text-brand-bg rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors duration-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-brand-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif italic mb-8">Beautiful XoXo</h2>
            <p className="text-brand-bg/60 max-w-md leading-relaxed mb-8">
              Crafting timeless beauty through exquisite artificial jewelry, nails, and lashes. 
              Based in the heart of New York, serving elegance worldwide.
            </p>
            <div className="flex gap-6">
              <a href={SOCIAL_LINKS.instagram} className="hover:text-brand-accent transition-colors"><Instagram size={24} /></a>
              <a href={SOCIAL_LINKS.whatsapp} className="hover:text-brand-accent transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Explore</h4>
            <ul className="space-y-4 text-sm text-brand-bg/60">
              <li><a href="#collection" className="hover:text-brand-bg transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-brand-bg/60">
              <li><a href="#" className="hover:text-brand-bg transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-brand-bg transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] w-full bg-brand-bg/10 mb-12"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-brand-bg/40">
          <p>© 2024 Beautiful XoXo. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-bg transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-bg transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  // In the "All" view, show products that have videos first.
  const sortedProducts = selectedCategory === 'All'
    ? filteredProducts.slice().sort((a, b) => Number(!!b.video_url) - Number(!!a.video_url))
    : filteredProducts;

  return (
    <div className="min-h-screen">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <Hero />

      <section id="collection" className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 block font-medium opacity-50">
            Curated Selection
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic">
            Our Collection
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16 text-[10px] uppercase tracking-[0.2em] font-bold">
          {(['All', 'Jewelry', 'Nails', 'Lashes', 'Accessories'] as Category[]).map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-2 border-b-2 transition-all duration-500 ${selectedCategory === cat ? 'border-brand-accent text-brand-ink' : 'border-transparent text-brand-ink/40 hover:text-brand-ink'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {sortedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section id="about" className="py-32 bg-brand-ink text-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
          <div className="md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[4/5] relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?q=80&w=800&auto=format&fit=crop" 
                alt="Jewelry Craft" 
                className="w-full h-full object-cover rounded-t-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-brand-bg/10 rounded-full z-0"></div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] mb-6 block font-medium opacity-50">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-12 leading-tight">Beyond <br /> Decoration</h2>
            <p className="text-xl font-light text-brand-bg/70 leading-relaxed mb-12 italic">
              "We believe that beauty is an expression of the soul. Our pieces are designed not just to adorn, but to empower and inspire confidence in every individual."
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-3xl font-serif italic mb-2">Quality</h4>
                <p className="text-sm text-brand-bg/50">Sourced with care, crafted for longevity.</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif italic mb-2">Design</h4>
                <p className="text-sm text-brand-bg/50">Modern trends met with timeless elegance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <Contact />

      <section className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-serif italic mb-12">Stay Connected</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <a 
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-10 py-5 border border-brand-ink/10 rounded-full hover:bg-brand-ink hover:text-brand-bg transition-all duration-500 group"
          >
            <Instagram size={20} />
            <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
          </a>
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-10 py-5 bg-brand-ink text-brand-bg rounded-full hover:bg-brand-accent transition-all duration-500 group"
          >
            <MessageCircle size={20} />
            <span className="text-xs uppercase tracking-widest font-bold">WhatsApp Business</span>
          </a>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      {/* Cart Sidebar (Simple Placeholder) */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[110]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-brand-ink/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-full max-w-md bg-brand-bg p-12 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif italic">Your Bag</h2>
                <button onClick={() => setIsCartOpen(false)}><X size={24} /></button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <ShoppingBag size={48} className="opacity-10 mb-6" />
                <p className="text-brand-ink/40 italic">Your bag is currently empty.</p>
              </div>
              <button className="w-full py-5 bg-brand-ink text-brand-bg text-xs uppercase tracking-widest font-bold">
                Continue Shopping
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
