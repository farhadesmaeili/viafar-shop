import { ProductMapper } from '../mappers';

import type { RemoveProductImageInput } from '../dto';

import { ProductNotFoundError } from '../errors';

import type { ProductRepository } from '../../domain/repositories';

import { ImageId, ProductId } from '../../domain/value-objects';

export class RemoveProductImageUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: RemoveProductImageInput) {
    const productId = ProductId.create(input.productId);

    const product = await this.repository.findById(productId);

    if (!product) {
      throw new ProductNotFoundError();
    }

    product.removeImage(ImageId.create(input.imageId));

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
