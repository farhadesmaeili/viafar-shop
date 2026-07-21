import { Identifier } from '@/core/domain/value-objects';

import { InvalidProductImageError } from '../errors';

export class ImageId extends Identifier {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ImageId {
    const id = value.trim();

    if (!id) {
      throw new InvalidProductImageError('Image id cannot be empty.');
    }

    return new ImageId(id);
  }
}
