import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart, ChevronRight, Filter, Star, Minus, Plus, Trash2, Mail, Phone, MapPin, Instagram, Send, Package, Award, Shield, Clock } from 'lucide-react';

const BeyondRealmsHome = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Face', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop' },
    { name: 'Eyes', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop' },
    { name: 'Lips', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop' },
    { name: 'Skincare', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop' }
  ];

  const featuredProducts = [
    { id: 1, name: 'Luminous Glow Serum', price: '₦15,000', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop' },
    { id: 2, name: 'Velvet Matte Lipstick', price: '₦8,500', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop' },
    { id: 3, name: 'Radiant Foundation', price: '₦18,000', image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop' },
    { id: 4, name: 'Hydrating Moisturizer', price: '₦12,000', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#2D2D2D]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-2xl font-light tracking-widest">BEYOND REALMS</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm tracking-wide hover:text-[#C9A98F] transition-colors">HOME</a>
              <a href="#shop" className="text-sm tracking-wide hover:text-[#C9A98F] transition-colors">SHOP</a>
              <a href="#collections" className="text-sm tracking-wide hover:text-[#C9A98F] transition-colors">COLLECTIONS</a>
              <a href="#about" className="text-sm tracking-wide hover:text-[#C9A98F] transition-colors">ABOUT</a>
              <a href="#contact" className="text-sm tracking-wide hover:text-[#C9A98F] transition-colors">CONTACT</a>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-5 h-5 cursor-pointer hover:text-[#C9A98F] transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-[#C9A98F] transition-colors" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-[#C9A98F] transition-colors" />
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-5 h-5 hover:text-[#C9A98F] transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C9A98F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-sm tracking-wide hover:text-[#C9A98F] transition-colors">HOME</a>
              <a href="#shop" className="block text-sm tracking-wide hover:text-[#C9A98F] transition-colors">SHOP</a>
              <a href="#collections" className="block text-sm tracking-wide hover:text-[#C9A98F] transition-colors">COLLECTIONS</a>
              <a href="#about" className="block text-sm tracking-wide hover:text-[#C9A98F] transition-colors">ABOUT</a>
              <a href="#contact" className="block text-sm tracking-wide hover:text-[#C9A98F] transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#FFE8D6] to-[#FFD4B8] opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Discover Your
            <span className="block text-[#C9A98F] italic">Inner Beauty</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Elevate your beauty routine with our carefully curated collection of premium cosmetics
          </p>
          <button className="bg-[#2D2D2D] text-white px-8 py-4 rounded-full hover:bg-[#C9A98F] transition-colors duration-300 text-sm tracking-wider">
            EXPLORE COLLECTION
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-[#C9A98F] rotate-90" />
        </div>
      </section>

      {/* Categories Section */}
      <section id="collections" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">Shop By Category</h3>
            <p className="text-gray-600">Explore our curated collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-3/4 mb-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-center text-lg tracking-wide group-hover:text-[#C9A98F] transition-colors">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">Featured Products</h3>
            <p className="text-gray-600">Discover our bestsellers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4 bg-[#FFF8F3]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#2D2D2D] px-6 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Quick Add
                  </button>
                </div>
                <h4 className="text-sm mb-2 font-light">{product.name}</h4>
                <p className="text-[#C9A98F] font-medium">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border border-[#2D2D2D] text-[#2D2D2D] px-8 py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-colors duration-300 text-sm tracking-wider">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-20 px-4 bg-linear-to-br from-[#FFE8D6] to-[#FFF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-light mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond Realms was born from a vision to redefine beauty standards and empower individuals to embrace their authentic selves. We believe beauty transcends the physical—it's about confidence, self-expression, and inner radiance.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every product in our collection is carefully selected to ensure the highest quality, ethical sourcing, and exceptional results.
              </p>
              <button className="border border-[#2D2D2D] text-[#2D2D2D] px-8 py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-colors duration-300 text-sm tracking-wider">
                LEARN MORE
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=700&fit=crop" 
                  alt="Brand Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-[#2D2D2D] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-light mb-4">Stay Connected</h3>
          <p className="text-gray-300 mb-8">Subscribe to receive updates on new products, restocks, and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-[#C9A98F] text-white placeholder-gray-400"
            />
            <button className="bg-[#C9A98F] text-white px-8 py-3 rounded-full hover:bg-[#B8977E] transition-colors duration-300 text-sm tracking-wider">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-light mb-4 tracking-widest">BEYOND REALMS</h4>
              <p className="text-sm text-gray-600">Elevating beauty beyond boundaries</p>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-sm tracking-wide">SHOP</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Face</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Eyes</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Lips</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Skincare</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-sm tracking-wide">COMPANY</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-sm tracking-wide">CONNECT</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-[#C9A98F] transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Beyond Realms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeyondRealmsHome;