import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative rounded-[2rem] bg-gradient-to-br from-black/80 via-black/70 to-black/80 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              type="button"
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:border-neon-lime/60 hover:text-neon-lime transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-neon-lime text-deep-black hover:bg-neon-lime/90 shadow-[0_0_18px_rgba(191,255,71,0.9)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-neon-lime/15 blur-3xl rounded-full" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-neon-lime/10 blur-3xl rounded-full" />
          </div>

          <div className="relative px-6 sm:px-10 py-10 sm:py-12 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-neon-lime/40 bg-black/40 px-4 py-1 text-xs font-medium tracking-[0.18em] uppercase text-neon-lime shadow-[0_0_18px_rgba(191,255,71,0.8)]">
                What Our Clients Say
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                What Our Global <span className="text-neon-lime">Clients Say</span>
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-1 text-lg" aria-label="5 out of 5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className="text-white drop-shadow-[0_0_10px_rgba(191,255,71,0.8)]"
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-3xl">
                &quot;Before Pixaweb, our site barely loaded. Now, with a 98 PageSpeed score, our conversions have
                tripled!&quot;
              </p>

              <div className="flex items-center gap-4 sm:gap-6 pt-2">
                <div className="relative">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-neon-lime shadow-[0_0_25px_rgba(191,255,71,0.9)] overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160"
                      alt="Profile photo of John Doe, Ecom Founder and Pixaweb client"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">John Doe</p>
                  <p className="text-gray-300 text-sm">Ecom Founder</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

