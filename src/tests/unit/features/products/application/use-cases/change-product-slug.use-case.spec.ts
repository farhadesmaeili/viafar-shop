import { describe, expect, it } from 'vitest';

import { ProductSlugAlreadyExistsError } from '@/features/products/application/errors';

import {
  ChangeProductSlugUseCase,
  CreateProductUseCase,
} from '@/features/products/application/use-cases';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory/in-memory-product.repository';

describe('ChangeProductSlugUseCase', () => {
  const createRepository = () => {
    const repository = new InMemoryProductRepository();

    return {
      repository,

      createProductUseCase: new CreateProductUseCase(repository),

      changeProductSlugUseCase: new ChangeProductSlugUseCase(repository),
    };
  };

  const createProductInput = (sku: string, slug: string) => ({
    sku,

    name: 'Test Product',

    slug,

    description: 'Test product description',

    price: {
      amount: 100000,

      currency: 'IRR' as const,
    },
  });

  it('should change product slug successfully', async () => {
    const { createProductUseCase, changeProductSlugUseCase } = createRepository();

    const product = await createProductUseCase.execute(createProductInput('SKU-001', 'old-slug'));

    const result = await changeProductSlugUseCase.execute({
      id: product.id,

      slug: 'new-slug',
    });

    expect(result.slug).toBe('new-slug');
  });

  it('should throw error when slug already exists', async () => {
    const { createProductUseCase, changeProductSlugUseCase } = createRepository();

    const firstProduct = await createProductUseCase.execute(
      createProductInput('SKU-001', 'product-one'),
    );

    await createProductUseCase.execute(createProductInput('SKU-002', 'product-two'));

    await expect(
      changeProductSlugUseCase.execute({
        id: firstProduct.id,

        slug: 'product-two',
      }),
    ).rejects.toBeInstanceOf(ProductSlugAlreadyExistsError);
  });

  it('should allow same slug for same product', async () => {
    const { createProductUseCase, changeProductSlugUseCase } = createRepository();

    const product = await createProductUseCase.execute(
      createProductInput('SKU-001', 'product-one'),
    );

    const result = await changeProductSlugUseCase.execute({
      id: product.id,

      slug: 'product-one',
    });

    expect(result.slug).toBe('product-one');
  });
});
