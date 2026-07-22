import type { ProductRepository } from '../../domain/repositories';

import { ProductId } from '../../domain/value-objects';

import { ProductNotFoundError } from '../errors';

import { ProductMapper } from '../mappers';

import type { GetProductByIdInput, GetProductByIdOutput } from '../dto';

export class GetProductByIdUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: GetProductByIdInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    return ProductMapper.toDetailOutput(product);
  }
}
