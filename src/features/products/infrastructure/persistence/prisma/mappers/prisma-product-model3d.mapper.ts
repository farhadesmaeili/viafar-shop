import type { Prisma } from '@/generated/prisma/client';

import { ProductModel3D } from '@/features/products/domain/value-objects';

export class PrismaProductModel3DMapper {
  public static toDomain(model: Prisma.ProductModel3DModel): ProductModel3D {
    return ProductModel3D.create({
      url: model.url,

      previewImage: model.previewImage,

      format: model.format,

      fileSize: model.fileSize,
    });
  }

  public static toPersistence(
    id: string,
    productId: string,
    model: ProductModel3D,
  ): Prisma.ProductModel3DUncheckedCreateInput {
    return {
      id,

      productId,

      url: model.url(),

      previewImage: model.previewImage(),

      format: model.format(),

      fileSize: model.fileSize(),
    };
  }
}
