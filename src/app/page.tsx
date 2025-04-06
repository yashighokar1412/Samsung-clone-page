import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PromoBanner } from '@/components/home/PromoBanner';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <PromoBanner />
        <CategoryGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
