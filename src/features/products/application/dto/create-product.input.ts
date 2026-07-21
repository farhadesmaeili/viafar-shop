import type { CurrencyCode } from '@/shared/constants/currencies';

export interface CreateProductInput {
  readonly id: string;

  readonly sku: string;

  readonly name: string;

  readonly slug: string;

  readonly description: string;

  readonly amount: number;

  readonly price: {
    amount: number;
    currency: CurrencyCode;
  };
}
