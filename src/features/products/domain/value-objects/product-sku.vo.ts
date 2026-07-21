import { StringValueObject } from '@/core/domain/value-objects';

import { InvalidProductSkuError } from '../errors';

export class ProductSku extends StringValueObject {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ProductSku {
    const sku = value.trim().toUpperCase();

    if (!sku) {
      throw new InvalidProductSkuError('Product SKU cannot be empty.');
    }

    if (sku.length > 64) {
      throw new InvalidProductSkuError('Product SKU is too long.');
    }

    return new ProductSku(sku);
  }
}
