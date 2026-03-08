import { CircleUser as UserCircle, Shield, Lightbulb, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Build your <span className="text-neon-lime">crypto</span> portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Phasellus vitales est secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Phasellus can ecosystem of specialized called.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-neon-lime/50 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-neon-lime/10 border-2 border-neon-lime rounded-2xl flex items-center justify-center group-hover:bg-neon-lime/20 transition-all">
                <UserCircle className="text-neon-lime" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Fund your account</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Open your crypto account today and start trading crypto. You can fund funds with a variety of payment.
                </p>
              </div>
              <button className="flex items-center space-x-2 text-white font-semibold group-hover:text-neon-lime transition-colors">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="group bg-neon-lime rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-neon-lime/20">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-deep-black/10 border-2 border-deep-black rounded-2xl flex items-center justify-center">
                <Shield className="text-deep-black" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-deep-black mb-3">Verify your identity</h3>
                <p className="text-deep-black/70 text-sm leading-relaxed mb-6">
                  Complete our identity verification process to secure your account and discover what Phasellus has to offer.
                </p>
              </div>
              <button className="flex items-center space-x-2 text-deep-black font-semibold bg-white/90 px-6 py-3 rounded-full hover:bg-white transition-colors">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-neon-lime/50 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-neon-lime/10 border-2 border-neon-lime rounded-2xl flex items-center justify-center group-hover:bg-neon-lime/20 transition-all">
                <Lightbulb className="text-neon-lime" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Start trading</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  You're good to go! Buy crypto with NFTs, DeFi, and over new business. Phasellus has to offer.
                </p>
              </div>
              <button className="flex items-center space-x-2 text-white font-semibold group-hover:text-neon-lime transition-colors">
                <span>Learn More</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
