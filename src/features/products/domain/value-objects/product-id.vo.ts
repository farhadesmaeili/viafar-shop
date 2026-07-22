import { UuidIdentifier } from '@/core/domain/value-objects';

import { InvalidProductIdError } from '../errors';

export class ProductId extends UuidIdentifier {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ProductId {
    const id = value.trim();

    if (!id) {
      throw new InvalidProductIdError('Product id cannot be empty.');
    }

    if (!this.isValidUuid(id)) {
      throw new InvalidProductIdError('Product id must be a valid UUID.');
    }

    return new ProductId(id);
  }

  public static generate(): ProductId {
    return new ProductId(this.generateUuid());
  }
}
