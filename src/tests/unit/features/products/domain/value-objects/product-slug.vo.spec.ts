import { describe, expect, it } from 'vitest';

import { ProductSlug } from '@/features/products/domain/value-objects';

describe('ProductSlug', () => {
  it('should create a valid product slug', () => {
    const slug = ProductSlug.create('macbook-pro');

    expect(slug.value()).toBe('macbook-pro');
  });

  it('should convert uppercase letters to lowercase', () => {
    const slug = ProductSlug.create('MacBook-Pro');

    expect(slug.value()).toBe('macbook-pro');
  });

  it('should trim spaces', () => {
    const slug = ProductSlug.create('  macbook-pro  ');

    expect(slug.value()).toBe('macbook-pro');
  });

  it('should throw when slug is empty', () => {
    expect(() => ProductSlug.create('')).toThrow();
  });

  it('should throw when slug format is invalid', () => {
    expect(() => ProductSlug.create('macbook pro')).toThrow();

    expect(() => ProductSlug.create('macbook@pro')).toThrow();
  });

  it('should convert to string', () => {
    const slug = ProductSlug.create('macbook-pro');

    expect(slug.toString()).toBe('macbook-pro');
  });
});
