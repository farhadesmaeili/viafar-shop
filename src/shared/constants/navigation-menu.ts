export type NavigationMenuItem = {
  title: string;
  href: string;
};

export type NavigationMenuGroup = {
  title: string;
  items: NavigationMenuItem[];
};

export type NavigationItem = {
  title: string;
  href: string;
  megaMenu?: NavigationMenuGroup[];
  children?: NavigationMenuItem[];
};

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'products',
    href: '/products',
    megaMenu: [
      {
        title: 'collections',
        items: [
          {
            title: 'allProducts',
            href: '/products',
          },
          {
            title: 'featured',
            href: '/products/featured',
          },
          {
            title: 'newArrivals',
            href: '/products/new-arrivals',
          },
        ],
      },
      {
        title: 'glassTypes',
        items: [
          {
            title: 'glassPanels',
            href: '/products/glass-panels',
          },
          {
            title: 'glassSheets',
            href: '/products/glass-sheets',
          },
        ],
      },
    ],
  },
  {
    title: 'categories',
    href: '/categories',
  },
  {
    title: 'offers',
    href: '/offers',
  },
  {
    title: 'about',
    href: '/about',
  },
];
