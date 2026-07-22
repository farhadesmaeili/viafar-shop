import { prisma } from '@/core/infrastructure/database/prisma';

import type { ProductRepository } from '@/features/products/domain/repositories';

import type { Product } from '@/features/products/domain/entities';

import { ProductId, ProductSku, ProductSlug } from '@/features/products/domain/value-objects';

import { PrismaProductImageMapper } from './mappers/prisma-product-image.mapper';
import { PrismaProductModel3DMapper } from './mappers/prisma-product-model3d.mapper';
import { PrismaProductMapper } from './mappers/prisma-product.mapper';

export class PrismaProductRepository implements ProductRepository {
  public async findById(id: ProductId): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        id: id.value(),
      },

      include: {
        images: true,

        model3D: true,
      },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  public async findBySlug(slug: ProductSlug): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        slug: slug.value(),
      },

      include: {
        images: true,

        model3D: true,
      },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  public async findBySku(sku: ProductSku): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        sku: sku.value(),
      },

      include: {
        images: true,

        model3D: true,
      },
    });

    if (!product) {
      return null;
    }

    return PrismaProductMapper.toDomain(product);
  }

  public async save(product: Product): Promise<void> {
    await prisma.$transaction(async (tx) => {
      const productData = PrismaProductMapper.toPersistence(product);

      await tx.product.upsert({
        where: {
          id: productData.id,
        },

        create: productData,

        update: productData,
      });

      await tx.productImage.deleteMany({
        where: {
          productId: productData.id,
        },
      });

      if (product.images().length > 0) {
        await tx.productImage.createMany({
          data: product
            .images()
            .map((image) => PrismaProductImageMapper.toPersistence(productData.id, image)),
        });
      }

      const model3D = product.model3D();

      if (model3D) {
        await tx.productModel3D.upsert({
          where: {
            productId: productData.id,
          },

          create: PrismaProductModel3DMapper.toPersistence(
            crypto.randomUUID(),
            productData.id,
            model3D,
          ),

          update: {
            url: model3D.url(),

            previewImage: model3D.previewImage(),

            format: model3D.format(),

            fileSize: model3D.fileSize(),
          },
        });
      } else {
        await tx.productModel3D.deleteMany({
          where: {
            productId: productData.id,
          },
        });
      }
    });
  }

  public async delete(id: ProductId): Promise<void> {
    await prisma.product.delete({
      where: {
        id: id.value(),
      },
    });
  }

  public async existsBySlug(slug: ProductSlug): Promise<boolean> {
    const count = await prisma.product.count({
      where: {
        slug: slug.value(),
      },
    });

    return count > 0;
  }

  public async existsBySku(sku: ProductSku): Promise<boolean> {
    const count = await prisma.product.count({
      where: {
        sku: sku.value(),
      },
    });

    return count > 0;
  }
}
