import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import TrustSection from './components/TrustSection';
import Portfolio from './components/Portfolio';
import WhatsNew from './components/WhatsNew';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <TrustSection />
      <Portfolio />
      <WhatsNew />
      <Footer />
    </div>
  );
}

export default App;
