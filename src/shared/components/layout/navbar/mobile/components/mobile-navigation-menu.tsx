'use client';

import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Link } from '@/i18n/navigation';
import { NAVIGATION_ITEMS } from '@/shared/constants/navigation-menu';
import { cn } from '@/shared/lib/utils';

type MobileNavigationMenuProps = {
  onNavigate?: () => void;
};

export function MobileNavigationMenu({ onNavigate }: MobileNavigationMenuProps) {
  const t = useTranslations('navigation');

  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <nav className="flex flex-col gap-1">
      {NAVIGATION_ITEMS.map((item) => {
        const hasChildren = item.children || item.megaMenu;

        if (!hasChildren) {
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium"
            >
              {t(item.title)}
            </Link>
          );
        }

        const isOpen = openItem === item.title;

        return (
          <div key={item.href}>
            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.title)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium',
                'hover:bg-muted',
              )}
            >
              {t(item.title)}

              <ChevronDown className={cn('size-4 transition-transform', isOpen && 'rotate-180')} />
            </button>

            {isOpen && (
              <div className="ms-4 mt-1 flex flex-col gap-1 border-s ps-3">
                {item.megaMenu?.flatMap((group) =>
                  group.items.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onNavigate}
                      className="text-muted-foreground hover:bg-muted hover:text-primary rounded-md px-3 py-2 text-sm"
                    >
                      {t(child.title)}
                    </Link>
                  )),
                )}

                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onNavigate}
                    className="text-muted-foreground hover:bg-muted hover:text-primary rounded-md px-3 py-2 text-sm"
                  >
                    {t(child.title)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
