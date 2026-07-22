import { describe, expect, it } from 'vitest';

import { ProductDescription } from '@/features/products/domain/value-objects';

describe('ProductDescription', () => {
  it('should create a valid product description', () => {
    const description = ProductDescription.create('A powerful laptop for professionals.');

    expect(description.value()).toBe('A powerful laptop for professionals.');
  });

  it('should trim spaces', () => {
    const description = ProductDescription.create('  Product description  ');

    expect(description.value()).toBe('Product description');
  });

  it('should allow empty description', () => {
    const description = ProductDescription.create('');

    expect(description.value()).toBe('');
  });

  it('should throw when description is too long', () => {
    const longDescription = 'a'.repeat(5001);

    expect(() => ProductDescription.create(longDescription)).toThrow();
  });

  it('should accept maximum length description', () => {
    const maxDescription = 'a'.repeat(5000);

    const description = ProductDescription.create(maxDescription);

    expect(description.value()).toBe(maxDescription);
  });

  it('should convert to string', () => {
    const description = ProductDescription.create('Laptop description');

    expect(description.toString()).toBe('Laptop description');
  });
});
