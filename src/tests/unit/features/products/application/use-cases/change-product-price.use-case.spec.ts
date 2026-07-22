import { describe, expect, it } from 'vitest';

import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import { ChangeProductPriceUseCase } from '@/features/products/application/use-cases/change-product-price.use-case';

import { ProductNotFoundError } from '@/features/products/application/errors';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('ChangeProductPriceUseCase', () => {
  const createRepository = () => {
    const repository = new InMemoryProductRepository();

    return {
      createProductUseCase: new CreateProductUseCase(repository),

      changeProductPriceUseCase: new ChangeProductPriceUseCase(repository),
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

  it('should change product price successfully', async () => {
    const {
      createProductUseCase,

      changeProductPriceUseCase,
    } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    const result = await changeProductPriceUseCase.execute({
      id: product.id,

      price: {
        amount: 200000,

        currency: 'IRR',
      },
    });

    expect(result.price.amount).toBe(200000);
  });

  it('should throw error when product does not exist', async () => {
    const { changeProductPriceUseCase } = createRepository();

    await expect(
      changeProductPriceUseCase.execute({
        id: '550e8400-e29b-41d4-a716-446655440000',

        price: {
          amount: 200000,

          currency: 'IRR',
        },
      }),
    ).rejects.toBeInstanceOf(ProductNotFoundError);
  });

  it('should throw error for invalid price', async () => {
    const {
      createProductUseCase,

      changeProductPriceUseCase,
    } = createRepository();

    const product = await createProductUseCase.execute(createProductInput());

    await expect(
      changeProductPriceUseCase.execute({
        id: product.id,

        price: {
          amount: -100,

          currency: 'IRR',
        },
      }),
    ).rejects.toThrow();
  });
});
