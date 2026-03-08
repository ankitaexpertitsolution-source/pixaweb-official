import { TrendingUp, ArrowRight, HelpCircle } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-neon-lime text-sm font-semibold">$ 54.928 USD</p>
                  <p className="text-gray-400 text-xs mt-1">Phasellus vitales est secures a grow<br />ecosystem of specialized blockchains<br />called parachains.</p>
                </div>
              </div>

              <div className="relative h-48">
                <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#BFFF47" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#BFFF47" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,120 Q 50,100 100,80 T 200,60 T 300,40 T 400,20"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                  />
                  <circle cx="50" cy="100" r="8" fill="#BFFF47" />
                  <circle cx="150" cy="70" r="8" fill="#BFFF47" />
                  <circle cx="250" cy="50" r="8" fill="#BFFF47" />
                </svg>

                <div className="absolute top-0 left-4 bg-deep-black/80 backdrop-blur-sm border border-neon-lime rounded-xl p-3">
                  <p className="text-neon-lime text-xl font-bold">54.928 USD</p>
                  <p className="text-green-400 text-xs flex items-center">
                    <TrendingUp size={12} className="mr-1" aria-hidden="true" />
                    +43.56%
                  </p>
                </div>

                <div className="absolute bottom-12 right-8 bg-deep-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                  <p className="text-white text-lg font-bold">1.44.928 BTC</p>
                  <p className="text-gray-400 text-xs">Phasellus vitales est secures a grow<br />ecosystem of specialized.</p>
                </div>
              </div>

              <div className="bg-deep-black/50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-2xl font-bold">54.928 USD</p>
                    <p className="text-green-400 text-sm flex items-center mt-1">
                      <TrendingUp size={14} className="mr-1" aria-hidden="true" />
                      +43.56%
                    </p>
                  </div>
                  <button className="bg-neon-lime text-deep-black px-4 py-1 rounded-full text-sm font-semibold" aria-label="Withdraw funds">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Trusted <span className="text-neon-lime">platform</span><br />
                anytime & anywhere.
              </h2>
              <div className="flex space-x-1 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-neon-lime text-2xl">★</span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-neon-lime/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-neon-lime rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phasellus vitales est secures a growing ecosystem</h4>
                  <p className="text-gray-400 text-sm">of specialized blockchains called parachains. Apps and services on Phasellus can ecosystem of specialized called.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-neon-lime/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-neon-lime rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phasellus vitales and secures a growing ecosystem</h4>
                  <p className="text-gray-400 text-sm">of specialized blockchains called parachains. Apps and services on Phasellus can ecosystem of specialized called.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 bg-neon-lime text-deep-black px-6 py-3 rounded-full font-semibold hover:bg-neon-lime/90 transition-all" aria-label="Learn more about trusted platform">
                <span>Learn More</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button className="flex items-center space-x-2 text-white px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-neon-lime/50 transition-all" aria-label="Ask a question">
                <span>Ask question ?</span>
                <HelpCircle size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
