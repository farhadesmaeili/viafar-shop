import type { CurrencyCode } from '@/shared/constants/currencies';

export interface CreateProductInput {
  readonly sku: string;

  readonly name: string;

  readonly slug: string;

  readonly description: string;

  readonly price: {
    amount: number;
    currency: CurrencyCode;
  };
}
