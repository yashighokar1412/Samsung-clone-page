import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { title: 'Smartphones', href: '/smartphones' },
      { title: 'Tablets', href: '/tablets' },
      { title: 'Watches', href: '/watches' },
      { title: 'TVs', href: '/tvs' },
      { title: 'Appliances', href: '/home-appliances' },
      { title: 'Computing', href: '/computing' },
    ],
  },
  {
    title: 'Support',
    links: [
      { title: 'Contact Us', href: '/support/contact-us' },
      { title: 'Product Help', href: '/support/product-help' },
      { title: 'Order Support', href: '/support/order-help' },
      { title: 'Samsung Care+', href: '/support/samsung-care-plus' },
      { title: 'Warranty', href: '/support/warranty' },
      { title: 'Repairs', href: '/support/repairs' },
    ],
  },
  {
    title: 'Account',
    links: [
      { title: 'My Account', href: '/account' },
      { title: 'Samsung Rewards', href: '/rewards' },
      { title: 'Samsung Members', href: '/account/samsung-members' },
      { title: 'Product Registration', href: '/support/register' },
      { title: 'Samsung Business', href: '/business' },
      { title: 'Education Offers', href: '/shop/offer-program/education' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { title: 'Company Info', href: '/about' },
      { title: 'Investor Relations', href: '/about/investor-relations' },
      { title: 'Newsroom', href: '/newsroom' },
      { title: 'Samsung Careers', href: '/about/careers' },
      { title: 'Corporate Responsibility', href: '/about/responsibility' },
      { title: 'Samsung Experience Stores', href: '/stores' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-samsung text-base font-bold">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="font-samsung text-sm text-gray-600 hover:text-black hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between pb-10 md:flex-row">
          <div className="mb-6 flex items-center md:mb-0">
            <Link href="/">
              <Image
                src="/images/samsung-logo.svg"
                alt="Samsung"
                width={100}
                height={16}
              />
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-black hover:underline">Privacy</Link>
            <Link href="/legal" className="hover:text-black hover:underline">Legal</Link>
            <Link href="/accessibility" className="hover:text-black hover:underline">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-black hover:underline">Sitemap</Link>
          </div>
        </div>

        <div className="pb-8 text-center text-xs text-gray-500">
          <p>© 2025 SAMSUNG. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
