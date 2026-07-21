import { StringValueObject } from '@/core/domain/value-objects';

import { InvalidProductDescriptionError } from '../errors';

export class ProductDescription extends StringValueObject {
  private static readonly MAX_LENGTH = 5000;

  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ProductDescription {
    const description = value.trim();

    if (description.length > this.MAX_LENGTH) {
      throw new InvalidProductDescriptionError(
        `Product description must be at most ${this.MAX_LENGTH} characters.`,
      );
    }

    return new ProductDescription(description);
  }
}
