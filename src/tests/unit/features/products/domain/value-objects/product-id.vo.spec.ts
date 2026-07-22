import { describe, expect, it } from 'vitest';

import { ProductId } from '@/features/products/domain/value-objects';

describe('ProductId', () => {
  it('should create product id from uuid', () => {
    const id = '550e8400-e29b-41d4-a716-446655440000';

    const productId = ProductId.create(id);

    expect(productId.value()).toBe(id);
  });

  it('should generate a valid uuid', () => {
    const productId = ProductId.generate();

    expect(productId.value()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });

  it('should throw when id is empty', () => {
    expect(() => ProductId.create('')).toThrow();
  });

  it('should throw when id is invalid uuid', () => {
    expect(() => ProductId.create('product-123')).toThrow();
  });

  it('should compare same ids as equal', () => {
    const id = '550e8400-e29b-41d4-a716-446655440000';

    const first = ProductId.create(id);
    const second = ProductId.create(id);

    expect(first.equals(second)).toBe(true);
  });

  it('should compare different ids as not equal', () => {
    const first = ProductId.generate();
    const second = ProductId.generate();

    expect(first.equals(second)).toBe(false);
  });
});
