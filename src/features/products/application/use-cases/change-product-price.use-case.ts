import { Money } from '@/core/domain/value-objects';

import type { ProductRepository } from '../../domain/repositories';

import { ProductId } from '../../domain/value-objects';

import { ProductMapper } from '../mappers';

import { ProductNotFoundError } from '../errors';

import type { ChangeProductPriceInput, GetProductByIdOutput } from '../dto';

export class ChangeProductPriceUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: ChangeProductPriceInput): Promise<GetProductByIdOutput> {
    const id = ProductId.create(input.id);

    const product = await this.repository.findById(id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    const price = Money.create({
      amount: input.price.amount,

      currency: input.price.currency,
    });

    product.changePrice(price);

    await this.repository.save(product);

    return ProductMapper.toDetailOutput(product);
  }
}
