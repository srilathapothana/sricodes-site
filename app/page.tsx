import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Work />
      <About />
      <Pricing />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
