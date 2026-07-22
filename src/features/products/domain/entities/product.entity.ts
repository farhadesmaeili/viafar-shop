import { AggregateRoot } from '@/core/domain/entities';
import { Money } from '@/core/domain/value-objects';

import {
  ImageId,
  ProductDescription,
  ProductId,
  ProductImage,
  ProductModel3D,
  ProductName,
  ProductSku,
  ProductSlug,
  ProductStatus,
} from '../value-objects';

import type { CreateProductProps, ProductProps, ReconstituteProductProps } from './product.props';

export class Product extends AggregateRoot<ProductId> {
  private props: ProductProps;

  private constructor(id: ProductId, props: ProductProps) {
    super(id);

    this.props = props;
  }

  public static create(data: CreateProductProps): Product {
    return new Product(data.id, {
      sku: data.sku,

      name: data.name,

      slug: data.slug,

      description: data.description,

      price: data.price,

      status: ProductStatus.create('draft'),

      images: [],

      model3D: undefined,

      createdAt: new Date(),

      updatedAt: new Date(),
    });
  }

  /**
   * Rebuild aggregate from persistence layer.
   * This method must only be used by repositories.
   */
  public static reconstitute(data: ReconstituteProductProps): Product {
    return new Product(data.id, data.props);
  }

  // ---------- Getters ----------

  public sku(): ProductSku {
    return this.props.sku;
  }

  public name(): ProductName {
    return this.props.name;
  }

  public slug(): ProductSlug {
    return this.props.slug;
  }

  public description(): ProductDescription {
    return this.props.description;
  }

  public price(): Money {
    return this.props.price;
  }

  public status(): ProductStatus {
    return this.props.status;
  }

  public images(): readonly ProductImage[] {
    return this.props.images;
  }

  public model3D(): ProductModel3D | undefined {
    return this.props.model3D;
  }

  public createdAt(): Date {
    return this.props.createdAt;
  }

  public updatedAt(): Date {
    return this.props.updatedAt;
  }

  // ---------- Behaviors ----------

  public rename(name: ProductName): void {
    this.props = {
      ...this.props,
      name,
      updatedAt: new Date(),
    };
  }

  public changeSlug(slug: ProductSlug): void {
    this.props = {
      ...this.props,
      slug,
      updatedAt: new Date(),
    };
  }

  public changeDescription(description: ProductDescription): void {
    this.props = {
      ...this.props,
      description,
      updatedAt: new Date(),
    };
  }

  public changePrice(price: Money): void {
    this.props = {
      ...this.props,
      price,
      updatedAt: new Date(),
    };
  }

  public changeStatus(status: ProductStatus): void {
    this.props = {
      ...this.props,
      status,
      updatedAt: new Date(),
    };
  }

  public attachModel3D(model: ProductModel3D): void {
    this.props = {
      ...this.props,
      model3D: model,
      updatedAt: new Date(),
    };
  }

  public detachModel3D(): void {
    this.props = {
      ...this.props,
      model3D: undefined,
      updatedAt: new Date(),
    };
  }

  public addImage(image: ProductImage): void {
    this.props = {
      ...this.props,
      images: [...this.props.images, image],
      updatedAt: new Date(),
    };
  }

  public removeImage(imageId: ImageId): void {
    this.props = {
      ...this.props,
      images: this.props.images.filter((image) => !image.id().equals(imageId)),
      updatedAt: new Date(),
    };
  }
}
