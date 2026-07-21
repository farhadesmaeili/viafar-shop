import { Money } from '@/core/domain/value-objects';

import { Product } from '../../domain/entities';

import type { ProductRepository } from '../../domain/repositories';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
} from '../../domain/value-objects';

import { ProductSkuAlreadyExistsError, ProductSlugAlreadyExistsError } from '../errors';

import type { CreateProductInput, CreateProductOutput } from '../dto';

export class CreateProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  public async execute(input: CreateProductInput): Promise<CreateProductOutput> {
    const id = ProductId.generate();

    const sku = ProductSku.create(input.sku);

    const name = ProductName.create(input.name);

    const slug = ProductSlug.create(input.slug);

    const description = ProductDescription.create(input.description);

    const price = Money.create({
      amount: input.price.amount,
      currency: input.price.currency,
    });

    if (await this.repository.existsBySku(sku)) {
      throw new ProductSkuAlreadyExistsError();
    }

    if (await this.repository.existsBySlug(slug)) {
      throw new ProductSlugAlreadyExistsError();
    }

    const product = Product.create({
      id,
      sku,
      name,
      slug,
      description,
      price,
    });

    await this.repository.save(product);

    return {
      id: product.getId().value(),
      sku: product.sku().value(),
      slug: product.slug().value(),
    };
  }
}
