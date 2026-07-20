'use client';

import { useLocale } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const locale = useLocale();

  return (
    <Link
      href="/"
      locale={locale}
      aria-label="Viafar"
      className={cn('text-2xl font-bold tracking-tight select-none', className)}
    >
      Viafar
    </Link>
  );
}
