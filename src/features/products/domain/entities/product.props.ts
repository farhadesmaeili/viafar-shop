import { Money } from '@/core/domain/value-objects';

import {
  ProductDescription,
  ProductId,
  ProductImage,
  ProductModel3D,
  ProductName,
  ProductSku,
  ProductSlug,
  ProductStatus,
} from '../value-objects';

export interface ProductProps {
  readonly sku: ProductSku;

  readonly name: ProductName;

  readonly slug: ProductSlug;

  readonly description: ProductDescription;

  readonly price: Money;

  readonly status: ProductStatus;

  readonly images: readonly ProductImage[];

  readonly model3D?: ProductModel3D;

  readonly createdAt: Date;

  readonly updatedAt: Date;
}

export interface CreateProductProps {
  readonly id: ProductId;

  readonly sku: ProductSku;

  readonly name: ProductName;

  readonly slug: ProductSlug;

  readonly description: ProductDescription;

  readonly price: Money;
}
