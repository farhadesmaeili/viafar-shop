import type { ProductRepository } from '../../domain/repositories';

import { ProductId, ProductStatus } from '../../domain/value-objects';

import { ProductMapper } from '../mappers';

import { ProductNotFoundError } from '../errors';

import type { ChangeProductStatusInput, GetProductByIdOutput } from '../dto';

export class ChangeProductStatusUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: ChangeProductStatusInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    const status = ProductStatus.create(input.status);

    product.changeStatus(status);

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
