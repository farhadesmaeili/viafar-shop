import { describe, expect, it } from 'vitest';

import { Money } from '@/core/domain/value-objects';

import { ProductNotFoundError } from '@/features/products/application/errors';
import { AddProductImageUseCase } from '@/features/products/application/use-cases';

import { Product } from '@/features/products/domain/entities';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
} from '@/features/products/domain/value-objects';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory';

describe('AddProductImageUseCase', () => {
  const createRepository = () => new InMemoryProductRepository();

  const createProduct = (): Product =>
    Product.create({
      id: ProductId.generate(),

      sku: ProductSku.create('SKU-001'),

      name: ProductName.create('Test Product'),

      slug: ProductSlug.create('test-product'),

      description: ProductDescription.create('Description'),

      price: Money.create({
        amount: 100000,
        currency: 'IRR',
      }),
    });

  it('should add image to product', async () => {
    const repository = createRepository();

    const product = createProduct();

    await repository.save(product);

    const useCase = new AddProductImageUseCase(repository);

    const output = await useCase.execute({
      productId: product.getId().value(),

      image: {
        id: '550e8400-e29b-41d4-a716-446655440001',

        url: 'https://example.com/image.jpg',

        alt: 'Product image',

        width: 1200,

        height: 800,

        sortOrder: 0,

        isPrimary: true,
      },
    });

    expect(output.images).toHaveLength(1);

    expect(output.images[0].url).toBe('https://example.com/image.jpg');
  });

  it('should persist image', async () => {
    const repository = createRepository();

    const product = createProduct();

    await repository.save(product);

    const useCase = new AddProductImageUseCase(repository);

    await useCase.execute({
      productId: product.getId().value(),

      image: {
        id: '550e8400-e29b-41d4-a716-446655440002',

        url: 'https://example.com/image.jpg',

        alt: 'Product image',

        width: 1200,

        height: 800,

        sortOrder: 0,

        isPrimary: true,
      },
    });

    const saved = await repository.findById(product.getId());

    expect(saved).not.toBeNull();

    expect(saved!.images()).toHaveLength(1);

    expect(saved!.images()[0].url()).toBe('https://example.com/image.jpg');
  });

  it('should throw when product does not exist', async () => {
    const repository = createRepository();

    const useCase = new AddProductImageUseCase(repository);

    await expect(
      useCase.execute({
        productId: '550e8400-e29b-41d4-a716-446655440999',

        image: {
          id: '550e8400-e29b-41d4-a716-446655440003',

          url: 'https://example.com/image.jpg',

          alt: 'Product image',

          width: 1200,

          height: 800,

          sortOrder: 0,

          isPrimary: true,
        },
      }),
    ).rejects.toThrow(ProductNotFoundError);
  });
});
