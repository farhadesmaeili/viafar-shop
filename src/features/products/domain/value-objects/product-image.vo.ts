import { ValueObject } from '@/core/domain/value-objects';

import { InvalidProductImageError } from '../errors';

import { ImageId } from './image-id.vo';

interface ProductImageProps {
  id: ImageId;
  url: string;
  alt: string;
  width: number;
  height: number;
  sortOrder: number;
  isPrimary: boolean;
}

export class ProductImage extends ValueObject<ProductImageProps> {
  private constructor(props: ProductImageProps) {
    super(props);
  }

  public static create(props: ProductImageProps): ProductImage {
    if (!(props.id instanceof ImageId)) {
      throw new InvalidProductImageError('Invalid image id.');
    }

    if (!props.url.trim()) {
      throw new InvalidProductImageError('Image url cannot be empty.');
    }

    if (props.width <= 0) {
      throw new InvalidProductImageError('Image width must be greater than zero.');
    }

    if (props.height <= 0) {
      throw new InvalidProductImageError('Image height must be greater than zero.');
    }

    if (props.sortOrder < 0) {
      throw new InvalidProductImageError('Sort order cannot be negative.');
    }

    return new ProductImage({
      ...props,
      url: props.url.trim(),
      alt: props.alt.trim(),
    });
  }

  public id(): ImageId {
    return this.props.id;
  }

  public url(): string {
    return this.props.url;
  }

  public alt(): string {
    return this.props.alt;
  }

  public width(): number {
    return this.props.width;
  }

  public height(): number {
    return this.props.height;
  }

  public sortOrder(): number {
    return this.props.sortOrder;
  }

  public isPrimary(): boolean {
    return this.props.isPrimary;
  }
}
