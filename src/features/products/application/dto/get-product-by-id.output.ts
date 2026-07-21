import type { CurrencyCode } from '@/shared/constants/currencies';

export interface GetProductByIdOutput {
  readonly id: string;

  readonly sku: string;

  readonly name: string;

  readonly slug: string;

  readonly description: string;

  readonly price: {
    readonly amount: number;
    readonly currency: CurrencyCode;
  };

  readonly status: string;
}
