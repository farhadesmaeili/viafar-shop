import { Money } from '@/core/domain/value-objects';

import { Product } from '@/features/products/domain/entities';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
} from '@/features/products/domain/value-objects';

interface MakeProductOptions {
  sku?: string;
  slug?: string;
  name?: string;
  description?: string;
}

export function makeProduct(options: MakeProductOptions = {}): Product {
  const uniqueId = crypto.randomUUID().slice(0, 8);

  return Product.create({
    id: ProductId.generate(),

    sku: ProductSku.create(options.sku ?? `SKU-${uniqueId}`),

    name: ProductName.create(options.name ?? 'MacBook Pro'),

    slug: ProductSlug.create(options.slug ?? `macbook-pro-${uniqueId}`),

    description: ProductDescription.create(options.description ?? 'Apple laptop'),

    price: Money.create({
      amount: 100000,
      currency: 'USD',
    }),
  });
}
