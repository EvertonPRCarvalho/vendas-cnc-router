import { useEffect } from 'react';
import Hero from '@/react-app/components/Hero';
import PriceSection from '@/react-app/components/PriceSection';
import WhatYouGet from '@/react-app/components/WhatYouGet';
import Benefits from '@/react-app/components/Benefits';
import Testimonials from '@/react-app/components/Testimonials';
import Guarantee from '@/react-app/components/Guarantee';
import FAQ from '@/react-app/components/FAQ';
import FinalCTA from '@/react-app/components/FinalCTA';

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 font-[Inter]">
      <Hero />
      <PriceSection />
      <WhatYouGet />
      <Benefits />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
