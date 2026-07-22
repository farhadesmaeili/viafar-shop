import { describe, expect, it } from 'vitest';

import { ChangeProductStatusUseCase } from '@/features/products/application/use-cases/change-product-status.use-case';
import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import { ProductNotFoundError } from '@/features/products/application/errors';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('ChangeProductStatusUseCase', () => {
  const createRepository = () => {
    const repository = new InMemoryProductRepository();

    return {
      createProductUseCase: new CreateProductUseCase(repository),

      changeProductStatusUseCase: new ChangeProductStatusUseCase(repository),
    };
  };

  const createProductInput = () => ({
    sku: 'SKU-001',

    name: 'Test Product',

    slug: 'test-product',

    description: 'Product description',

    price: {
      amount: 100000,

      currency: 'IRR' as const,
    },
  });

  it('should change product status successfully', async () => {
    const { createProductUseCase, changeProductStatusUseCase } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    const result = await changeProductStatusUseCase.execute({
      id: product.id,

      status: 'active',
    });

    expect(result.status).toBe('active');
  });

  it('should throw error when product does not exist', async () => {
    const { changeProductStatusUseCase } = createRepository();

    await expect(
      changeProductStatusUseCase.execute({
        id: '550e8400-e29b-41d4-a716-446655440000',

        status: 'active',
      }),
    ).rejects.toBeInstanceOf(ProductNotFoundError);
  });

  it('should support archived status', async () => {
    const { createProductUseCase, changeProductStatusUseCase } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    const result = await changeProductStatusUseCase.execute({
      id: product.id,

      status: 'archived',
    });

    expect(result.status).toBe('archived');
  });
});
