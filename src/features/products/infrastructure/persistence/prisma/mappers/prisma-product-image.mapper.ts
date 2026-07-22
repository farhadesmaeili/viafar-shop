import type { Prisma } from '@/generated/prisma/client';

import { ImageId, ProductImage } from '@/features/products/domain/value-objects';

export class PrismaProductImageMapper {
  public static toDomain(image: Prisma.ProductImageModel): ProductImage {
    return ProductImage.create({
      id: ImageId.create(image.id),

      url: image.url,

      alt: image.alt,

      width: image.width,

      height: image.height,

      sortOrder: image.sortOrder,

      isPrimary: image.isPrimary,
    });
  }

  public static toPersistence(
    productId: string,
    image: ProductImage,
  ): Prisma.ProductImageCreateManyInput {
    return {
      id: image.id().value(),

      productId,

      url: image.url(),

      alt: image.alt(),

      width: image.width(),

      height: image.height(),

      sortOrder: image.sortOrder(),

      isPrimary: image.isPrimary(),
    };
  }
}
