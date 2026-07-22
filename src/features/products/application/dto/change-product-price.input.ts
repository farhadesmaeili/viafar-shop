import type { CurrencyCode } from '@/shared/constants/currencies';

export interface ChangeProductPriceInput {
  readonly id: string;

  readonly price: {
    readonly amount: number;

    readonly currency: CurrencyCode;
  };
}
