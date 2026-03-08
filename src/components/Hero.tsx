import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">KEEP YOUR MONEY SAFE !</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Best <span className="text-gray-400">crypto</span><br />
                <span className="text-neon-lime">investing platform</span><br />
                <span className="text-gray-400">for your future.</span>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-lime to-green-400 border-2 border-deep-black" />
                ))}
              </div>
              <span className="text-white font-semibold text-xl">168K+</span>
              <span className="text-gray-400">Active Users</span>
            </div>

            <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="bg-neon-lime rounded-full p-3">
                <ArrowRight className="text-deep-black" size={24} />
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Phasellus vitales est secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Phasellus can.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-lime/20 blur-[100px] rounded-full" />

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-72 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl transform rotate-6 relative overflow-hidden border-8 border-gray-700">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-deep-black rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-600 rounded-full" />
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-neon-lime/20 rounded-full mx-auto flex items-center justify-center">
                        <TrendingUp className="text-neon-lime" size={32} />
                      </div>
                      <p className="text-white font-bold text-xl">BITCOIN ETH</p>
                      <p className="text-gray-400 text-sm">Ethereum</p>
                    </div>
                    <div className="bg-neon-lime rounded-xl p-4 text-center">
                      <p className="text-deep-black font-bold text-2xl">$96.10</p>
                      <p className="text-deep-black/70 text-sm">10% of the future</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 top-32 w-64 h-[550px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl transform -rotate-12 border-8 border-gray-700 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-deep-black rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full" />
                  </div>
                  <div className="mt-12 text-center space-y-4">
                    <p className="text-white font-bold text-lg">Join to<br />building<br />crypto.</p>
                    <button className="bg-neon-lime text-deep-black px-6 py-2 rounded-full font-semibold text-sm">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 -left-10 w-32 h-32 border-2 border-neon-lime/30 rounded-full" />
              <div className="absolute bottom-20 -right-10 w-40 h-40 border-2 border-neon-lime/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
