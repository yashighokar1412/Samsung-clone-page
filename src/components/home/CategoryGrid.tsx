import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 'galaxy-s25-ultra',
    title: 'Galaxy S25 Ultra',
    href: '/smartphones/galaxy-s25-ultra',
    imageSrc: '/images/s25-image.jpeg',
  },
  {
    id: 'neo-qled-8k',
    title: 'Neo QLED 8K',
    href: '/televisions-home-theater/tvs/samsung-neo-qled-8k',
    imageSrc: '/images/feature-1.jpeg',
  },
  {
    id: 'bespoke-refrigerators',
    title: 'Bespoke Refrigerators',
    href: '/home-appliances/refrigerators/all-refrigerators',
    imageSrc: '/images/bespoke-ai.jpg',
  },
  {
    id: 'galaxy-book5-pro',
    title: 'Galaxy Book5 Pro',
    href: '/computing/galaxy-books/galaxy-book5-pro',
    imageSrc: '/images/feature-3.jpeg',
  },
  {
    id: 'the-frame-tv',
    title: 'The Frame TV',
    href: '/televisions-home-theater/tvs/the-frame',
    imageSrc: '/images/feature-2.jpeg',
  },
  {
    id: 'galaxy-watch-ultra',
    title: 'Galaxy Watch Ultra',
    href: '/watches/galaxy-watch-ultra',
    imageSrc: '/images/feature-1.jpeg',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center font-samsung-sharp text-3xl font-bold">
          Discover Galaxy
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link href={category.href} key={category.id}>
              <Card className="h-full overflow-hidden transition-transform hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="relative h-36 w-full">
                    <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-samsung text-sm font-medium">{category.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
