import type { ProductRepository } from '../../domain/repositories';

import { ProductId, ProductSlug } from '../../domain/value-objects';

import { ProductMapper } from '../mappers';

import { ProductNotFoundError, ProductSlugAlreadyExistsError } from '../errors';

import type { ChangeProductSlugInput, GetProductByIdOutput } from '../dto';

export class ChangeProductSlugUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: ChangeProductSlugInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    const slug = ProductSlug.create(input.slug);

    const existingProduct = await this.repository.findBySlug(slug);

    if (existingProduct && !existingProduct.getId().equals(product.getId())) {
      throw new ProductSlugAlreadyExistsError();
    }

    product.changeSlug(slug);

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
