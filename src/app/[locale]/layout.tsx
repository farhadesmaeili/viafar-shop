import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/700.css';

import { isRTL, locales, type Locale } from '@/i18n/config';
import { MainLayout } from '@/shared/components/layout';
import { AppProvider } from '@/shared/providers';

import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Viafar',
  description: 'Viafar Shop',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  console.log('Layout locale:', currentLocale);
  const messages = await getMessages({
    locale: currentLocale,
  });

  const rtl = isRTL(currentLocale);

  const fontClass = rtl ? 'font-vazirmatn' : 'font-geist';

  return (
    <html lang={currentLocale} dir={rtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${fontClass} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppProvider locale={currentLocale} messages={messages}>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
