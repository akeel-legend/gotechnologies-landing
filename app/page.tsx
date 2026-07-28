import { Hero } from '@/components/sections/Hero';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { PlatformVision } from '@/components/sections/PlatformVision';
import { Partner } from '@/components/sections/Partner';
import { ContactSection } from '@/components/sections/ContactSection';
import { Closing } from '@/components/sections/Closing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductShowcase />
      <PlatformVision />
      <Partner />
      <ContactSection />
      <Closing />
    </>
  );
}
