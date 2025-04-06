import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-hero.jpg"
          alt="Unlock the future of home tech"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 font-samsung-sharp text-4xl font-bold md:text-5xl lg:text-6xl">
          Unlock the future of home tech
        </h1>
        <p className="mb-8 max-w-[600px] text-lg">
          Experience the next generation of connected home solutions with Samsung AI technology
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="rounded-full bg-white px-6 text-black hover:bg-gray-100">
            <Link href="/tvs">Explore TVs</Link>
          </Button>
          <Button asChild className="rounded-full bg-transparent px-6 text-white hover:bg-white/10" variant="outline">
            <Link href="/home-appliances">Shop Appliances</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
