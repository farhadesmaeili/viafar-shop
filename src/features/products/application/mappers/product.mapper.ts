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
    };
  }
}
