import { ValueObject } from '@/core/domain/value-objects';

import { InvalidProductModel3DError } from '../errors';

export type ProductModelFormat = 'glb' | 'gltf' | 'fbx';

interface ProductModel3DProps {
  url: string;
  previewImage: string;
  format: ProductModelFormat;
  fileSize: number;
}

export class ProductModel3D extends ValueObject<ProductModel3DProps> {
  private constructor(props: ProductModel3DProps) {
    super(props);
  }

  public static create(props: ProductModel3DProps): ProductModel3D {
    if (!props.url.trim()) {
      throw new InvalidProductModel3DError('Model url cannot be empty.');
    }

    if (props.fileSize <= 0) {
      throw new InvalidProductModel3DError('Invalid file size.');
    }

    return new ProductModel3D({
      ...props,
      url: props.url.trim(),
      previewImage: props.previewImage.trim(),
    });
  }

  public url(): string {
    return this.props.url;
  }

  public previewImage(): string {
    return this.props.previewImage;
  }

  public format(): ProductModelFormat {
    return this.props.format;
  }

  public fileSize(): number {
    return this.props.fileSize;
  }
}
