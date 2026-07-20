'use client';

import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Input } from '@/shared/components/ui';

export function DesktopHeaderSearch() {
  const t = useTranslations('common');

  return (
    <div className="relative flex-1">
      <Search className="text-muted-foreground pointer-events-none absolute inset-s-3 top-1/2 size-5 -translate-y-1/2" />

      <Input type="search" placeholder={t('search')} className="h-10 ps-10" />
    </div>
  );
}
