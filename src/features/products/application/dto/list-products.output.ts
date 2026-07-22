import type { CurrencyCode } from '@/shared/constants/currencies';

export interface ProductListItemOutput {
  readonly id: string;

  readonly sku: string;

  readonly name: string;

  readonly slug: string;

  readonly price: {
    readonly amount: number;
    readonly currency: CurrencyCode;
  };

  readonly status: string;
}

export interface ListProductsOutput {
  readonly items: ProductListItemOutput[];

  readonly total: number;

  readonly page: number;

  readonly limit: number;

  readonly totalPages: number;
}
