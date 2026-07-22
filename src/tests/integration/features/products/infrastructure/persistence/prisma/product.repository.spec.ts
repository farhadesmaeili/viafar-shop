import { afterAll, beforeEach, describe, expect, it } from 'vitest';

import { prisma } from '@/core/infrastructure/database/prisma';

import { PrismaProductRepository } from '@/features/products/infrastructure/persistence/prisma';

import { makeProduct } from '@/tests/helpers/factories/product.factory';

describe('PrismaProductRepository (integration)', () => {
  const repository = new PrismaProductRepository();

  beforeEach(async () => {
    await prisma.productImage.deleteMany();

    await prisma.productModel3D.deleteMany();

    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should save and find product by id', async () => {
    const product = makeProduct();

    await repository.save(product);

    const result = await repository.findById(product.getId());

    expect(result).not.toBeNull();

    expect(result?.name().value()).toBe(product.name().value());

    expect(result?.sku().value()).toBe(product.sku().value());
  });

  it('should find product by slug', async () => {
    const product = makeProduct();

    await repository.save(product);

    const result = await repository.findBySlug(product.slug());

    expect(result).not.toBeNull();

    expect(result?.slug().value()).toBe(product.slug().value());
  });

  it('should delete product', async () => {
    const product = makeProduct();

    await repository.save(product);

    await repository.delete(product.getId());

    const result = await repository.findById(product.getId());

    expect(result).toBeNull();
  });
});
