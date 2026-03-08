import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">CRYPTO<span className="text-neon-lime">.</span></span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#news" className="text-gray-300 hover:text-white transition-colors">What's new?</a>
              <button className="bg-neon-lime text-deep-black px-6 py-2 rounded-full font-semibold hover:bg-neon-lime/90 transition-all" aria-label="Explore platform">
                Explore now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-deep-black/95 backdrop-blur-lg border-t border-white/5">
          <div className="px-4 pt-2 pb-3 space-y-3">
            <a href="#home" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="#services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="#about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="#news" className="block text-gray-300 hover:text-white py-2">What's new?</a>
            <button className="w-full bg-neon-lime text-deep-black px-6 py-2 rounded-full font-semibold mt-2" aria-label="Explore platform">
              Explore now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
