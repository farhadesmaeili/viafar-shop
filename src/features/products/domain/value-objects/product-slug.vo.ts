import { StringValueObject } from '@/core/domain/value-objects';

import { InvalidProductSlugError } from '../errors';

export class ProductSlug extends StringValueObject {
  private static readonly REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ProductSlug {
    const slug = value.trim().toLowerCase();

    if (!slug) {
      throw new InvalidProductSlugError('Product slug cannot be empty.');
    }

    if (!this.REGEX.test(slug)) {
      throw new InvalidProductSlugError('Invalid product slug format.');
    }

    return new ProductSlug(slug);
  }
}
