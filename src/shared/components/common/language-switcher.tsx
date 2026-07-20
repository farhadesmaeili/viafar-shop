'use client';

import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';

import type { Locale } from '@/i18n/config';
import { LANGUAGES } from '@/i18n/languages';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/shared/lib/utils';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui';

type LanguageSwitcherProps = {
  variant?: 'default' | 'compact';
};

export function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;

  const router = useRouter();
  const pathname = usePathname();

  const current = LANGUAGES.find((language) => language.code === locale) ?? LANGUAGES[0];

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;

    router.replace(pathname, {
      locale: nextLocale,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" size={variant === 'compact' ? 'icon' : 'default'} />}
      >
        {variant === 'compact' ? (
          <span>{current.flag}</span>
        ) : (
          <>
            <span>{current.flag}</span>
            <span>{current.label}</span>
          </>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLocale(language.code)}
            className={cn(
              'flex items-center justify-between',
              language.code === locale && 'bg-accent',
            )}
          >
            <div className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </div>

            {language.code === locale && <Check className="size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
