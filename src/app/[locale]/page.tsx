'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const common = useTranslations('common');
  const navigation = useTranslations('navigation');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">{common('welcome')}</h1>

      <div className="flex gap-4">
        <span>{navigation('home')}</span>
        <span>{navigation('products')}</span>
      </div>
    </main>
  );
}
