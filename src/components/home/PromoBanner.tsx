import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PromoBanner() {
  return (
    <section className="bg-samsung-blue py-16 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-samsung-sharp text-3xl font-bold md:text-4xl">
            Galaxy S25 Ultra is here
          </h2>
          <p className="mb-8 text-lg">
            Experience the power of Galaxy AI with our most intelligent camera yet.
            Save up to $800 with eligible trade-in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="rounded-full bg-white px-6 text-samsung-blue hover:bg-gray-100">
              <Link href="/smartphones/galaxy-s25-ultra">Learn more</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent px-6 text-white hover:bg-white/10" variant="outline">
              <Link href="/smartphones/galaxy-s25-ultra">Buy now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
