import { describe, expect, it } from 'vitest';

import { ProductSku } from '@/features/products/domain/value-objects';

describe('ProductSku', () => {
  it('should create a valid product sku', () => {
    const sku = ProductSku.create('macbook-001');

    expect(sku.value()).toBe('MACBOOK-001');
  });

  it('should trim spaces', () => {
    const sku = ProductSku.create('  sku-001  ');

    expect(sku.value()).toBe('SKU-001');
  });

  it('should convert lowercase letters to uppercase', () => {
    const sku = ProductSku.create('iphone-16');

    expect(sku.value()).toBe('IPHONE-16');
  });

  it('should throw when sku is empty', () => {
    expect(() => ProductSku.create('')).toThrow();
  });

  it('should throw when sku is too long', () => {
    const longSku = 'A'.repeat(65);

    expect(() => ProductSku.create(longSku)).toThrow();
  });

  it('should convert to string', () => {
    const sku = ProductSku.create('sku-001');

    expect(sku.toString()).toBe('SKU-001');
  });
});
