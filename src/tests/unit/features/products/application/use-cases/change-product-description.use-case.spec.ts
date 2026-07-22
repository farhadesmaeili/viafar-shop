import { describe, expect, it } from 'vitest';

import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import { ChangeProductDescriptionUseCase } from '@/features/products/application/use-cases/change-product-description.use-case';

import { ProductNotFoundError } from '@/features/products/application/errors';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('ChangeProductDescriptionUseCase', () => {
  const createRepository = () => {
    const repository = new InMemoryProductRepository();

    return {
      createProductUseCase: new CreateProductUseCase(repository),

      changeProductDescriptionUseCase: new ChangeProductDescriptionUseCase(repository),
    };
  };

  const createProductInput = () => ({
    sku: 'SKU-001',

    name: 'Test Product',

    slug: 'test-product',

    description: 'Old description',

    price: {
      amount: 100000,

      currency: 'IRR' as const,
    },
  });

  it('should change product description successfully', async () => {
    const {
      createProductUseCase,

      changeProductDescriptionUseCase,
    } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    const result = await changeProductDescriptionUseCase.execute({
      id: product.id,

      description: 'New description',
    });

    expect(result.description).toBe('New description');
  });

  it('should throw error when product does not exist', async () => {
    const { changeProductDescriptionUseCase } = createRepository();

    await expect(
      changeProductDescriptionUseCase.execute({
        id: '550e8400-e29b-41d4-a716-446655440000',

        description: 'New description',
      }),
    ).rejects.toBeInstanceOf(ProductNotFoundError);
  });

  it('should throw error for invalid description', async () => {
    const {
      createProductUseCase,

      changeProductDescriptionUseCase,
    } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    await expect(
      changeProductDescriptionUseCase.execute({
        id: product.id,

        description: 'a'.repeat(5001),
      }),
    ).rejects.toThrow();
  });
});
