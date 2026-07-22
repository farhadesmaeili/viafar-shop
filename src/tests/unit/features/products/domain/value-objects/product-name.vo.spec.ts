import { describe, expect, it } from 'vitest';

import { ProductName } from '@/features/products/domain/value-objects';

describe('ProductName', () => {
  it('should create a valid product name', () => {
    const name = ProductName.create('MacBook Pro');

    expect(name.value()).toBe('MacBook Pro');
  });

  it('should trim spaces', () => {
    const name = ProductName.create('  MacBook Pro  ');

    expect(name.value()).toBe('MacBook Pro');
  });

  it('should throw when name is too short', () => {
    expect(() => ProductName.create('ab')).toThrow();
  });

  it('should throw when name is too long', () => {
    const longName = 'a'.repeat(151);

    expect(() => ProductName.create(longName)).toThrow();
  });

  it('should compare equal names', () => {
    const first = ProductName.create('MacBook Pro');

    const second = ProductName.create('MacBook Pro');

    expect(first.equals(second)).toBe(true);
  });

  it('should convert to string', () => {
    const name = ProductName.create('MacBook Pro');

    expect(name.toString()).toBe('MacBook Pro');
  });
});
