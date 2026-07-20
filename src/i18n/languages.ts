import type { Locale } from './config';

export type Language = {
  code: Locale;
  label: string;
  flag: string;
};

export const LANGUAGES: readonly Language[] = [
  {
    code: 'fa',
    label: 'فارسی',
    flag: '🇮🇷',
  },
  {
    code: 'en',
    label: 'English',
    flag: '🇺🇸',
  },
  {
    code: 'tr',
    label: 'Türkçe',
    flag: '🇹🇷',
  },
  {
    code: 'ar',
    label: 'العربية',
    flag: '🇸🇦',
  },
] as const;
