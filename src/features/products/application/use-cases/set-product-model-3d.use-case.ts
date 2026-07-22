import { ProductMapper } from '../mappers';

import type { SetProductModel3DInput } from '../dto';

import { ProductNotFoundError } from '../errors';

import type { ProductRepository } from '../../domain/repositories';

import { ProductId, ProductModel3D } from '../../domain/value-objects';

export class SetProductModel3DUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: SetProductModel3DInput) {
    const productId = ProductId.create(input.productId);

    const product = await this.repository.findById(productId);

    if (!product) {
      throw new ProductNotFoundError();
    }

    product.attachModel3D(
      ProductModel3D.create({
        url: input.model3D.url,

        previewImage: input.model3D.previewImage,

        format: input.model3D.format,

        fileSize: input.model3D.fileSize,
      }),
    );

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
