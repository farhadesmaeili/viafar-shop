import { Product } from '../../domain/entities';

import type { CreateProductOutput, GetProductByIdOutput } from '../dto';

export class ProductMapper {
  public static toCreateOutput(product: Product): CreateProductOutput {
    return {
      id: product.getId().value(),

      sku: product.sku().value(),

      slug: product.slug().value(),
    };
  }

  public static toDetailOutput(product: Product): GetProductByIdOutput {
    return {
      id: product.getId().value(),

      sku: product.sku().value(),

      name: product.name().value(),

      slug: product.slug().value(),

      description: product.description().value(),

      price: product.price().toJSON(),

      status: product.status().value(),

      images: product.images().map((image) => ({
        id: image.id().value(),

        url: image.url(),

        alt: image.alt(),

        width: image.width(),

        height: image.height(),

        sortOrder: image.sortOrder(),

        isPrimary: image.isPrimary(),
      })),

      model3D: product.model3D()
        ? {
            url: product.model3D()!.url(),

            previewImage: product.model3D()!.previewImage(),

            format: product.model3D()!.format(),

            fileSize: product.model3D()!.fileSize(),
          }
        : undefined,
    };
  }
}
