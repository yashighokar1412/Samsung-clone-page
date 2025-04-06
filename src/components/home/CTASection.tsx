import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="bg-samsung-lightgray py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-samsung-sharp text-3xl font-bold md:text-4xl">
            Upgrade your experience with Samsung
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Shop our latest products with exclusive offers only available direct from Samsung
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="rounded-full bg-samsung-blue px-8 py-6 text-white hover:bg-samsung-blue/90">
              <Link href="/shop">Shop now</Link>
            </Button>
            <Button asChild className="rounded-full bg-transparent px-8 py-6 text-samsung-blue hover:bg-samsung-blue/10" variant="outline">
              <Link href="/support">Get support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
