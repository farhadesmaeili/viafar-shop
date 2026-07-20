'use client';

import { NextIntlClientProvider } from 'next-intl';

import { ThemeProvider } from './theme-provider';

type AppProviderProps = {
  children: React.ReactNode;
  messages: Record<string, unknown>;
  locale: string;
};

export function AppProvider({ children, messages, locale }: AppProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Tehran">
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlClientProvider>
  );
}
