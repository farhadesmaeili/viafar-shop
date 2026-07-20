'use client';

import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';
import { Container } from '@/shared/components/layout';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/components/ui';
import { NAVIGATION_ITEMS } from '@/shared/constants/navigation-menu';
import { cn } from '@/shared/lib/utils';

import { DesktopMegaMenu } from './components/desktop-mega-menu';

export function DesktopNavbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <div className="hidden lg:block">
      <Container>
        <NavigationMenu>
          <NavigationMenuList className="h-12 gap-1">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              /**
               * Mega Menu Item
               */
              if (item.megaMenu) {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className={cn(isActive && 'bg-muted text-primary')}>
                      {t(item.title)}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <DesktopMegaMenu groups={item.megaMenu} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              /**
               * Normal Link
               */
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={
                      <Link
                        href={item.href}
                        className={cn(
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                          'hover:bg-muted hover:text-primary',
                          isActive && 'bg-muted text-primary',
                        )}
                      />
                    }
                  >
                    {t(item.title)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </Container>
    </div>
  );
}
