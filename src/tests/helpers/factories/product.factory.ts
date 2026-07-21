import { Money } from '@/core/domain/value-objects';

import { Product } from '@/features/products/domain/entities';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
} from '@/features/products/domain/value-objects';

export function makeProduct(): Product {
  return Product.create({
    id: ProductId.generate(),

    sku: ProductSku.create('SKU-001'),

    name: ProductName.create('MacBook Pro'),

    slug: ProductSlug.create('macbook-pro'),

    description: ProductDescription.create('Apple laptop'),

    price: Money.create({
      amount: 100000,
      currency: 'USD',
    }),
  });
}
