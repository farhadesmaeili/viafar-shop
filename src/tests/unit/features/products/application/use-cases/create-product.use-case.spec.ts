import { describe, expect, it } from 'vitest';

import { ProductId } from '@/features/products/domain/value-objects';

import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import {
  ProductSkuAlreadyExistsError,
  ProductSlugAlreadyExistsError,
} from '@/features/products/application/errors';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('CreateProductUseCase', () => {
  const createUseCase = () => {
    const repository = new InMemoryProductRepository();

    const useCase = new CreateProductUseCase(repository);

    return {
      repository,
      useCase,
    };
  };

  const createInput = () => ({
    sku: 'SKU-001',
    name: 'Test Product',
    slug: 'test-product',
    description: 'Test product description',
    price: {
      amount: 100000,
      currency: 'IRR' as const,
    },
  });

  it('should create a product successfully', async () => {
    const { repository, useCase } = createUseCase();

    const result = await useCase.execute(createInput());

    expect(result.id).toBeDefined();

    expect(result.sku).toBe('SKU-001');

    expect(result.slug).toBe('test-product');

    const product = await repository.findById(ProductId.create(result.id));

    expect(product).not.toBeNull();
  });

  it('should throw error when sku already exists', async () => {
    const { useCase } = createUseCase();

    await useCase.execute(createInput());

    await expect(
      useCase.execute({
        ...createInput(),
        slug: 'another-product',
      }),
    ).rejects.toBeInstanceOf(ProductSkuAlreadyExistsError);
  });

  it('should throw error when slug already exists', async () => {
    const { useCase } = createUseCase();

    await useCase.execute(createInput());

    await expect(
      useCase.execute({
        ...createInput(),
        sku: 'SKU-002',
      }),
    ).rejects.toBeInstanceOf(ProductSlugAlreadyExistsError);
  });
});
