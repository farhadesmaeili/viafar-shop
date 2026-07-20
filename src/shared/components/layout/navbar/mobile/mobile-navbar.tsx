'use client';

import { Menu } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';

import type { Locale } from '@/i18n/config';
import { isRTL } from '@/i18n/config';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/components/ui';

import { MobileNavigationMenu } from './components/mobile-navigation-menu';

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const locale = useLocale() as Locale;

  const sheetSide = isRTL(locale) ? 'right' : 'left';

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              type="button"
              className="hover:bg-muted inline-flex size-10 items-center justify-center rounded-lg"
              aria-label="Open menu"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side={sheetSide} className="pt-16">
          <SheetHeader className="pe-12">
            <SheetTitle>Viafar</SheetTitle>
          </SheetHeader>

          <div className="px-4 pb-4">
            <MobileNavigationMenu onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
