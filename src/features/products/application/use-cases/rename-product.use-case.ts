import type { ProductRepository } from '../../domain/repositories';

import { ProductId, ProductName } from '../../domain/value-objects';

import { ProductNotFoundError } from '../errors';

import { ProductMapper } from '../mappers';

import type { GetProductByIdOutput, RenameProductInput } from '../dto';

export class RenameProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: RenameProductInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    const name = ProductName.create(input.name);

    product.rename(name);

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
