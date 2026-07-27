import { Hero } from '@/components/sections/Hero';
import { CompanyOverview } from '@/components/sections/CompanyOverview';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { About } from '@/components/sections/About';
import { Audiences } from '@/components/sections/Audiences';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductShowcase />
      <About />
      <Audiences />
      <ContactSection />
    </>
  );
}
