import { describe, expect, it } from 'vitest';

import { Money } from '@/core/domain/value-objects';

import { Product } from '@/features/products/domain/entities/product.entity';

import {
  ImageId,
  ProductDescription,
  ProductId,
  ProductImage,
  ProductModel3D,
  ProductName,
  ProductSku,
  ProductSlug,
  ProductStatus,
} from '@/features/products/domain/value-objects';

describe('Product Entity', () => {
  const createProduct = (): Product => {
    return Product.create({
      id: ProductId.create('550e8400-e29b-41d4-a716-446655440000'),
      sku: ProductSku.create('SKU-001'),
      name: ProductName.create('Test Product'),
      slug: ProductSlug.create('test-product'),
      description: ProductDescription.create('Test product description'),
      price: Money.create({
        amount: 100000,
        currency: 'IRR',
      }),
    });
  };

  it('should create a product', () => {
    const product = createProduct();

    expect(product.getId().value()).toBe('550e8400-e29b-41d4-a716-446655440000');

    expect(product.name().value()).toBe('Test Product');

    expect(product.status().value()).toBe('draft');

    expect(product.images()).toHaveLength(0);

    expect(product.model3D()).toBeUndefined();
  });

  it('should rename product', () => {
    const product = createProduct();

    product.rename(ProductName.create('New Product'));

    expect(product.name().value()).toBe('New Product');
  });

  it('should change price', () => {
    const product = createProduct();

    product.changePrice(
      Money.create({
        amount: 200000,
        currency: 'IRR',
      }),
    );

    expect(product.price().amount()).toBe(200000);
  });

  it('should change status', () => {
    const product = createProduct();

    product.changeStatus(ProductStatus.create('active'));

    expect(product.status().isActive()).toBe(true);
  });

  it('should attach 3d model', () => {
    const product = createProduct();

    const model = ProductModel3D.create({
      url: 'https://example.com/model.glb',
      previewImage: 'https://example.com/preview.jpg',
      format: 'glb',
      fileSize: 500000,
    });

    product.attachModel3D(model);

    expect(product.model3D()).toBeDefined();

    expect(product.model3D()!.url()).toBe('https://example.com/model.glb');
  });

  it('should detach 3d model', () => {
    const product = createProduct();

    const model = ProductModel3D.create({
      url: 'https://example.com/model.glb',
      previewImage: 'https://example.com/preview.jpg',
      format: 'glb',
      fileSize: 500000,
    });

    product.attachModel3D(model);

    expect(product.model3D()).toBeDefined();

    product.detachModel3D();

    expect(product.model3D()).toBeUndefined();
  });

  it('should add image', () => {
    const product = createProduct();

    const image = ProductImage.create({
      id: ImageId.generate(),
      url: 'https://example.com/image.jpg',
      alt: 'Product image',
      width: 1200,
      height: 800,
      sortOrder: 0,
      isPrimary: true,
    });

    product.addImage(image);

    expect(product.images()).toHaveLength(1);
  });

  it('should remove image', () => {
    const product = createProduct();

    const imageId = ImageId.generate();

    const image = ProductImage.create({
      id: imageId,
      url: 'https://example.com/image.jpg',
      alt: 'Product image',
      width: 1200,
      height: 800,
      sortOrder: 0,
      isPrimary: true,
    });

    product.addImage(image);

    expect(product.images()).toHaveLength(1);

    product.removeImage(imageId);

    expect(product.images()).toHaveLength(0);
  });
});
