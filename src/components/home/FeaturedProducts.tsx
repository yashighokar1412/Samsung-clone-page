import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredProducts = [
  {
    id: 1,
    title: 'Galaxy S25 Ultra',
    description: 'The ultimate Galaxy AI experience with powerful cameras and superior performance',
    imageSrc: '/images/s25-image.jpeg',
    href: '/smartphones/galaxy-s25-ultra',
  },
  {
    id: 2,
    title: 'QLED TVs',
    description: 'Experience breathtaking colors and clarity with industry-leading display technology',
    imageSrc: '/images/feature-1.jpeg',
    href: '/televisions-home-theater/tvs/qled-4k-tvs',
  },
  {
    id: 3,
    title: 'Bespoke AI Home',
    description: 'Discover smarter living with connected appliances that adapt to your lifestyle',
    imageSrc: '/images/bespoke-ai.jpg',
    href: '/home-appliances/bespoke',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center font-samsung-sharp text-3xl font-bold md:text-4xl">
          Shop all latest products and innovations
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-[280px] w-full">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-samsung text-xl font-bold">{product.title}</h3>
                  <p className="mb-6 text-gray-600">{product.description}</p>
                  <Button asChild className="w-full rounded-full">
                    <Link href={product.href}>Learn more</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
