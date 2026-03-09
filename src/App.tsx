import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import TrustSection from './components/TrustSection';

const Portfolio = lazy(() => import('./components/Portfolio'));
const WhatsNew = lazy(() => import('./components/WhatsNew'));
const Testimonial = lazy(() => import('./components/Testimonial'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <TrustSection />
      <Suspense fallback={<div className="min-h-[400px]" aria-busy="true" />}>
        <Portfolio />
        <WhatsNew />
        <Testimonial />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
