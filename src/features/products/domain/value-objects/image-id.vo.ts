import { UuidIdentifier } from '@/core/domain/value-objects';

import { InvalidProductImageError } from '../errors';

export class ImageId extends UuidIdentifier {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): ImageId {
    const id = value.trim();

    if (!id) {
      throw new InvalidProductImageError('Image id cannot be empty.');
    }

    if (!this.isValidUuid(id)) {
      throw new InvalidProductImageError('Image id must be a valid UUID.');
    }

    return new ImageId(id);
  }

  public static generate(): ImageId {
    return new ImageId(this.generateUuid());
  }
}
