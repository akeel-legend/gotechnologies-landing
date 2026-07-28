import { Hero } from '@/components/sections/Hero';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { PlatformVision } from '@/components/sections/PlatformVision';
import { Partner } from '@/components/sections/Partner';
import { ContactSection } from '@/components/sections/ContactSection';

// No separate "Closing" section here — the closing statement is now
// folded into the top of Footer.tsx (shared layout, appears after this
// page's content). See components/layout/Footer.tsx.
export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductShowcase />
      <PlatformVision />
      <Partner />
      <ContactSection />
    </>
  );
}
