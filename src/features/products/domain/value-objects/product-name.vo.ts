import { StringValueObject } from '@/core/domain/value-objects';

import { InvalidProductNameError } from '../errors';

export class ProductName extends StringValueObject {
  private static readonly MIN_LENGTH = 3;
  private static readonly MAX_LENGTH = 150;

  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ProductName {
    const name = value.trim();

    if (name.length < this.MIN_LENGTH) {
      throw new InvalidProductNameError(
        `Product name must be at least ${this.MIN_LENGTH} characters.`,
      );
    }

    if (name.length > this.MAX_LENGTH) {
      throw new InvalidProductNameError(
        `Product name must be at most ${this.MAX_LENGTH} characters.`,
      );
    }

    return new ProductName(name);
  }
}
