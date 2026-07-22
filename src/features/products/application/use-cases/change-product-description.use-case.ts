import type { ProductRepository } from '../../domain/repositories';

import { ProductDescription, ProductId } from '../../domain/value-objects';

import { ProductMapper } from '../mappers';

import { ProductNotFoundError } from '../errors';

import type { ChangeProductDescriptionInput, GetProductByIdOutput } from '../dto';

export class ChangeProductDescriptionUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: ChangeProductDescriptionInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    const description = ProductDescription.create(input.description);

    product.changeDescription(description);

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
