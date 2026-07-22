import { describe, expect, it } from 'vitest';

import { ProductStatus } from '@/features/products/domain/value-objects';

describe('ProductStatus', () => {
  it('should create draft status', () => {
    const status = ProductStatus.create('draft');

    expect(status.value()).toBe('draft');
  });

  it('should create active status', () => {
    const status = ProductStatus.create('active');

    expect(status.value()).toBe('active');
  });

  it('should create archived status', () => {
    const status = ProductStatus.create('archived');

    expect(status.value()).toBe('archived');
  });

  it('should identify draft status', () => {
    const status = ProductStatus.create('draft');

    expect(status.isDraft()).toBe(true);
    expect(status.isActive()).toBe(false);
    expect(status.isArchived()).toBe(false);
  });

  it('should identify active status', () => {
    const status = ProductStatus.create('active');

    expect(status.isDraft()).toBe(false);
    expect(status.isActive()).toBe(true);
    expect(status.isArchived()).toBe(false);
  });

  it('should identify archived status', () => {
    const status = ProductStatus.create('archived');

    expect(status.isDraft()).toBe(false);
    expect(status.isActive()).toBe(false);
    expect(status.isArchived()).toBe(true);
  });
});
