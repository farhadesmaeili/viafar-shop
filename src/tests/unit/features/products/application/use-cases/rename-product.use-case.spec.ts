import { describe, expect, it } from 'vitest';

import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import { RenameProductUseCase } from '@/features/products/application/use-cases/rename-product.use-case';

import { ProductNotFoundError } from '@/features/products/application/errors';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('RenameProductUseCase', () => {
  const createRepository = () => {
    const repository = new InMemoryProductRepository();

    return {
      repository,

      createProductUseCase: new CreateProductUseCase(repository),

      renameProductUseCase: new RenameProductUseCase(repository),
    };
  };

  const createProductInput = () => ({
    sku: 'SKU-001',

    name: 'Old Name',

    slug: 'old-name',

    description: 'Product description',

    price: {
      amount: 100000,

      currency: 'IRR' as const,
    },
  });

  it('should rename product successfully', async () => {
    const { createProductUseCase, renameProductUseCase } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    const result = await renameProductUseCase.execute({
      id: product.id,

      name: 'New Name',
    });

    expect(result.name).toBe('New Name');
  });

  it('should throw error when product does not exist', async () => {
    const { renameProductUseCase } = createRepository();

    await expect(
      renameProductUseCase.execute({
        id: '550e8400-e29b-41d4-a716-446655440000',

        name: 'New Name',
      }),
    ).rejects.toBeInstanceOf(ProductNotFoundError);
  });

  it('should throw error for invalid name', async () => {
    const { createProductUseCase, renameProductUseCase } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    await expect(
      renameProductUseCase.execute({
        id: product.id,

        name: '',
      }),
    ).rejects.toThrow();
  });
});
