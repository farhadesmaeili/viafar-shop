import { describe, expect, it } from 'vitest';

import { Money } from '@/core/domain/value-objects';

import { ProductNotFoundError } from '@/features/products/application/errors';
import { SetProductModel3DUseCase } from '@/features/products/application/use-cases';

import { Product } from '@/features/products/domain/entities';

import {
  ProductDescription,
  ProductId,
  ProductName,
  ProductSku,
  ProductSlug,
} from '@/features/products/domain/value-objects';

import { InMemoryProductRepository } from '@/features/products/infrastructure/persistence/in-memory';

describe('SetProductModel3DUseCase', () => {
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

  it('should set 3d model', async () => {
    const repository = createRepository();

    const product = createProduct();

    await repository.save(product);

    const useCase = new SetProductModel3DUseCase(repository);

    const output = await useCase.execute({
      productId: product.getId().value(),
      model3D: {
        url: 'https://example.com/model.glb',
        previewImage: 'https://example.com/preview.jpg',
        format: 'glb',
        fileSize: 500000,
      },
    });

    expect(output.model3D).toBeDefined();

    expect(output.model3D!.url).toBe('https://example.com/model.glb');

    expect(output.model3D!.format).toBe('glb');
  });

  it('should persist 3d model', async () => {
    const repository = createRepository();

    const product = createProduct();

    await repository.save(product);

    const useCase = new SetProductModel3DUseCase(repository);

    await useCase.execute({
      productId: product.getId().value(),
      model3D: {
        url: 'https://example.com/model.glb',
        previewImage: 'https://example.com/preview.jpg',
        format: 'glb',
        fileSize: 500000,
      },
    });

    const saved = await repository.findById(product.getId());

    expect(saved).not.toBeNull();

    expect(saved!.model3D()).toBeDefined();

    expect(saved!.model3D()!.url()).toBe('https://example.com/model.glb');
  });

  it('should throw when product does not exist', async () => {
    const repository = createRepository();

    const useCase = new SetProductModel3DUseCase(repository);

    await expect(
      useCase.execute({
        productId: '550e8400-e29b-41d4-a716-446655440999',
        model3D: {
          url: 'https://example.com/model.glb',
          previewImage: 'https://example.com/preview.jpg',
          format: 'glb',
          fileSize: 500000,
        },
      }),
    ).rejects.toThrow(ProductNotFoundError);
  });
});
