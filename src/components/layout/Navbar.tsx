import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const mainNavItems = [
  {
    title: 'Offers',
    href: '/offers',
    subItems: [
      { title: 'All Offers', href: '/offers/all' },
      { title: 'Smartphone Offers', href: '/offers/smartphone' },
      { title: 'Watches & Audio Offers', href: '/offers/watches-audio' },
      { title: 'TV & Home Theater Offers', href: '/offers/tv-home-theater' },
      { title: 'Appliance Offers', href: '/offers/appliance' },
    ]
  },
  {
    title: 'Mobile',
    href: '/mobile',
    subItems: [
      { title: 'Discover Mobile', href: '/mobile' },
      { title: 'Galaxy Smartphone', href: '/smartphones' },
      { title: 'Galaxy Tab', href: '/tablets' },
      { title: 'Galaxy Watch', href: '/watches' },
      { title: 'Galaxy Buds', href: '/mobile-audio' },
      { title: 'Galaxy Ring', href: '/rings/galaxy-ring' },
      { title: 'Galaxy Accessories', href: '/mobile-accessories' },
    ]
  },
  {
    title: 'TV & Audio',
    href: '/tvs',
    subItems: [
      { title: 'Shop All TVs', href: '/televisions-home-theater/tvs/all-tvs' },
      { title: 'Neo QLED TVs', href: '/televisions-home-theater/tvs/samsung-neo-qled-8k' },
      { title: 'OLED TVs', href: '/televisions-home-theater/tvs/oled-tvs' },
      { title: 'QLED TVs', href: '/televisions-home-theater/tvs/qled-4k-tvs' },
      { title: 'Crystal UHD TVs', href: '/televisions-home-theater/tvs/crystal-uhd-tvs' },
      { title: 'Sound Devices', href: '/televisions-home-theater/home-theater/all-home-theater' },
    ]
  },
  {
    title: 'Appliances',
    href: '/home-appliances',
    subItems: [
      { title: 'Refrigerators', href: '/home-appliances/refrigerators/all-refrigerators' },
      { title: 'Washers', href: '/home-appliances/washers/all-washers' },
      { title: 'Dryers', href: '/home-appliances/dryers/all-dryers' },
      { title: 'Ranges', href: '/home-appliances/ranges/all-ranges' },
      { title: 'Microwaves', href: '/home-appliances/microwaves/all-microwaves' },
      { title: 'Dishwashers', href: '/home-appliances/dishwashers/all-dishwashers' },
      { title: 'Vacuums', href: '/home-appliances/vacuums/all-vacuums' },
    ]
  },
  {
    title: 'Computing & Displays',
    href: '/computing',
    subItems: [
      { title: 'All Laptops', href: '/computing/galaxy-books/all-galaxy-books' },
      { title: 'Galaxy Book5 Pro 360', href: '/computing/galaxy-books/galaxy-book5-pro-360' },
      { title: 'Galaxy Book5 Pro', href: '/computing/galaxy-books/galaxy-book5-pro' },
      { title: 'Computer Monitors', href: '/monitors' },
      { title: 'Gaming Monitors', href: '/monitors/gaming-monitors' },
    ]
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/samsung-logo.svg"
              alt="Samsung"
              width={105}
              height={16}
              priority
            />
          </Link>
          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="h-9 font-samsung text-sm">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/shop/cart" className="hidden md:block">
            <Button variant="ghost" size="sm">Cart</Button>
          </Link>
          <Link href="/account" className="hidden md:block">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/search" className="hidden md:block">
            <Button variant="ghost" size="sm">Search</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <div key={item.title} className="py-2">
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-semibold"
                    >
                      {item.title}
                    </Link>
                    <div className="ml-4 flex flex-col gap-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
