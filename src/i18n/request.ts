import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale: Locale =
    requestedLocale && locales.includes(requestedLocale as Locale)
      ? (requestedLocale as Locale)
      : defaultLocale;

  return {
    locale,
    timeZone: 'Asia/Tehran',
    messages: (await import(`@/i18n/messages/${locale}.json`)).default,
  };
});
