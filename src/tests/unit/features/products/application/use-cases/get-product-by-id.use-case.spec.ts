import { describe, expect, it } from 'vitest';

import { ProductId } from '@/features/products/domain/value-objects';

import { ProductNotFoundError } from '@/features/products/application/errors';

import { GetProductByIdUseCase } from '@/features/products/application/use-cases/get-product-by-id.use-case';

import { CreateProductUseCase } from '@/features/products/application/use-cases/create-product.use-case';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('GetProductByIdUseCase', () => {
  const createRepositories = () => {
    const repository = new InMemoryProductRepository();

    const createProductUseCase = new CreateProductUseCase(repository);

    const getProductByIdUseCase = new GetProductByIdUseCase(repository);

    return {
      repository,
      createProductUseCase,
      getProductByIdUseCase,
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

  it('should return product by id successfully', async () => {
    const { createProductUseCase, getProductByIdUseCase } = createRepositories();

    const createdProduct = await createProductUseCase.execute(createInput());

    const result = await getProductByIdUseCase.execute({
      id: createdProduct.id,
    });

    expect(result.id).toBe(createdProduct.id);

    expect(result.sku).toBe('SKU-001');

    expect(result.name).toBe('Test Product');

    expect(result.slug).toBe('test-product');

    expect(result.status).toBe('draft');
  });

  it('should throw error when product does not exist', async () => {
    const { getProductByIdUseCase } = createRepositories();

    await expect(
      getProductByIdUseCase.execute({
        id: ProductId.generate().value(),
      }),
    ).rejects.toBeInstanceOf(ProductNotFoundError);
  });

  it('should throw error when id is invalid', async () => {
    const { getProductByIdUseCase } = createRepositories();

    await expect(
      getProductByIdUseCase.execute({
        id: 'invalid-id',
      }),
    ).rejects.toThrow();
  });
});
