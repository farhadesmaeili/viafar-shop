export const CURRENCIES = {
  IRR: {
    code: 'IRR',
    symbol: '﷼',
    name: 'Iranian Rial',
    fractionDigits: 0,
  },

  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    fractionDigits: 2,
  },

  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    fractionDigits: 2,
  },

  TRY: {
    code: 'TRY',
    symbol: '₺',
    name: 'Turkish Lira',
    fractionDigits: 2,
  },

  AED: {
    code: 'AED',
    symbol: 'د.إ',
    name: 'UAE Dirham',
    fractionDigits: 2,
  },

  SAR: {
    code: 'SAR',
    symbol: '﷼',
    name: 'Saudi Riyal',
    fractionDigits: 2,
  },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;
