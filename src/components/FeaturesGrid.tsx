import { ArrowRight } from 'lucide-react';

export default function FeaturesGrid() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Your <span className="text-neon-lime">trusted</span> partner of<br />
            <span className="text-gray-400">cryptocurrency.</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Phasellus vitales est secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Phasellus can.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-neon-lime/50 transition-all duration-300">
            <div className="space-y-6">
              <span className="text-5xl font-bold text-white">01.</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Service for Any</h3>
                <h3 className="text-2xl font-bold text-white mb-4">Level of Expertise.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Phasellus vitales est secures a growing ecosystem of specialized blockchains.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-neon-lime rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-neon-lime/20">
            <div className="space-y-6">
              <span className="text-5xl font-bold text-deep-black">02.</span>
              <div>
                <h3 className="text-2xl font-bold text-deep-black mb-2">Industry</h3>
                <h3 className="text-2xl font-bold text-deep-black mb-4">best practices.</h3>
                <p className="text-deep-black/85 text-sm leading-relaxed mb-6">
                  Phasellus vitales est secures a growing ecosystem of specialized blockchains called parachains.
                </p>
                <button className="flex items-center space-x-2 text-deep-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Learn more about industry best practices">
                  <span>Learn More</span>
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-neon-lime/50 transition-all duration-300">
            <div className="space-y-6">
              <span className="text-5xl font-bold text-white">03.</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Protected</h3>
                <h3 className="text-2xl font-bold text-white mb-4">by insurance.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Phasellus vitales est secures a growing ecosystem of specialized blockchains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
