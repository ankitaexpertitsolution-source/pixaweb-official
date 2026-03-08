import { Shield, RefreshCw, Zap, Code } from 'lucide-react';

export default function WhatsNew() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'We use state-of-the-art storage technology to protect your private.'
    },
    {
      icon: RefreshCw,
      title: 'Recurring Buys',
      description: 'It enables a series of NFTs, DAOs, and other new business.'
    },
    {
      icon: Zap,
      title: 'More On-Ramps',
      description: 'We use state-of-the-art storage DAOs, and other new business.'
    },
    {
      icon: Code,
      title: 'Trading API',
      description: 'It enables a series of NFTs, DAOs, and other new business.'
    }
  ];

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                What's <span className="text-neon-lime">new</span> we<br />
                provide for you ?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                This is a stable and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Phasellus can.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neon-lime/10 border-2 border-neon-lime rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-neon-lime" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-lime/20 blur-[80px] rounded-full" />

              <div className="relative z-10 w-80 h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-6 shadow-2xl mx-auto border-8 border-gray-700 overflow-hidden transform hover:rotate-2 transition-transform">
                <div className="absolute top-0 left-0 right-0 h-8 bg-deep-black rounded-t-[2.5rem] flex items-center justify-center">
                  <div className="w-24 h-1.5 bg-gray-600 rounded-full" />
                </div>

                <div className="mt-8 space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-neon-lime to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="text-deep-black" size={40} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative h-40">
                      <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none" aria-hidden="true">
                        <path
                          d="M 0,100 Q 50,80 100,70 T 200,50 T 300,30"
                          fill="none"
                          stroke="#BFFF47"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>

                    <div className="text-center space-y-4">
                      <h3 className="text-white font-bold text-2xl">Join to<br />building<br />crypto.</h3>
                      <button className="bg-neon-lime text-deep-black px-8 py-3 rounded-full font-semibold hover:bg-neon-lime/90 transition-all" aria-label="Get started with crypto">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-32 -left-8 w-24 h-24 border-2 border-neon-lime/30 rounded-full" />
              <div className="absolute bottom-32 -right-8 w-32 h-32 border-2 border-neon-lime/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
