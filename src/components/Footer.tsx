import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-bold text-white">CRYPTO<span className="text-neon-lime">.</span></span>
              <p className="text-gray-400 text-sm mt-4">
                NFTs are transforming the way we value digital products.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-neon-lime rounded-full flex items-center justify-center hover:bg-neon-lime/90 transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="text-deep-black" size={18} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon-lime rounded-full flex items-center justify-center hover:bg-neon-lime/90 transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="text-deep-black" size={18} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon-lime rounded-full flex items-center justify-center hover:bg-neon-lime/90 transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="text-deep-black" size={18} aria-hidden="true" />
              </a>
              <a href="#" className="w-10 h-10 bg-neon-lime rounded-full flex items-center justify-center hover:bg-neon-lime/90 transition-colors" aria-label="Follow us on YouTube">
                <Youtube className="text-deep-black" size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Spotlight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Promo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Merchants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">NFT Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Information</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Market Expers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Token Index</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Real Opinion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">NFT Checking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-lime transition-colors text-sm">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              NFTs are transforming the way we value digital.
            </p>
            <div className="flex space-x-2">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-neon-lime/50"
              />
              <button className="bg-neon-lime text-deep-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-neon-lime/90 transition-all whitespace-nowrap" aria-label="Subscribe to newsletter">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © 2024 CRYPTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
