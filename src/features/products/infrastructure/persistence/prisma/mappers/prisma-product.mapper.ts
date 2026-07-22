import type { Prisma } from '@/generated/prisma/client';

import { Money } from '@/core/domain/value-objects';

import { Product } from '@/features/products/domain/entities';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
  ProductStatus,
} from '@/features/products/domain/value-objects';

import { PrismaProductImageMapper } from './prisma-product-image.mapper';
import { PrismaProductModel3DMapper } from './prisma-product-model3d.mapper';

export type PrismaProductAggregate = Prisma.ProductGetPayload<{
  include: {
    images: true;
    model3D: true;
  };
}>;

export class PrismaProductMapper {
  public static toDomain(product: PrismaProductAggregate): Product {
    return Product.reconstitute({
      id: ProductId.create(product.id),

      props: {
        sku: ProductSku.create(product.sku),

        name: ProductName.create(product.name),

        slug: ProductSlug.create(product.slug),

        description: ProductDescription.create(product.description),

        price: Money.create({
          amount: product.priceAmount,

          currency: product.priceCurrency,
        }),

        status: ProductStatus.create(product.status),

        images: product.images.map(PrismaProductImageMapper.toDomain),

        model3D: product.model3D ? PrismaProductModel3DMapper.toDomain(product.model3D) : undefined,

        createdAt: product.createdAt,

        updatedAt: product.updatedAt,
      },
    });
  }

  public static toPersistence(product: Product) {
    return {
      id: product.getId().value(),

      sku: product.sku().value(),

      name: product.name().value(),

      slug: product.slug().value(),

      description: product.description().value(),

      priceAmount: product.price().amount(),

      priceCurrency: product.price().currency(),

      status: product.status().value(),

      isPublished: false,

      createdAt: product.createdAt(),

      updatedAt: product.updatedAt(),
    };
  }
}
