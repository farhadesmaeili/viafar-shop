import type { CurrencyCode } from '@/shared/constants/currencies';
import type { ProductStatusType } from '../../domain/value-objects';

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

  readonly status: ProductStatusType;

  readonly images: ReadonlyArray<{
    readonly id: string;

    readonly url: string;

    readonly alt: string;

    readonly width: number;

    readonly height: number;

    readonly sortOrder: number;

    readonly isPrimary: boolean;
  }>;

  readonly model3D?: {
    readonly url: string;

    readonly previewImage: string;

    readonly format: string;

    readonly fileSize: number;
  };
}
