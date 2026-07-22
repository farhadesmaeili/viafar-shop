import { ProductMapper } from '../mappers';

import type { AddProductImageInput } from '../dto';

import { ProductNotFoundError } from '../errors';

import type { ProductRepository } from '../../domain/repositories';

import { ImageId, ProductId, ProductImage } from '../../domain/value-objects';

export class AddProductImageUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: AddProductImageInput) {
    const productId = ProductId.create(input.productId);

    const product = await this.repository.findById(productId);

    if (!product) {
      throw new ProductNotFoundError();
    }

    product.addImage(
      ProductImage.create({
        id: ImageId.create(input.image.id),

        url: input.image.url,

        alt: input.image.alt,

        width: input.image.width,

        height: input.image.height,

        sortOrder: input.image.sortOrder,

        isPrimary: input.image.isPrimary,
      }),
    );

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
