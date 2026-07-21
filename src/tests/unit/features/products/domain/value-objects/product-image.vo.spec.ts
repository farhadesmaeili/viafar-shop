import { describe, expect, it } from 'vitest';

import { ImageId, ProductImage } from '@/features/products/domain/value-objects';

describe('ProductImage', () => {
  const createProps = () => ({
    id: ImageId.create('image-001'),

    url: ' https://example.com/image.jpg ',

    alt: ' Product Image ',

    width: 1200,

    height: 800,

    sortOrder: 0,

    isPrimary: true,
  });

  it('should create a valid product image', () => {
    const image = ProductImage.create(createProps());

    expect(image.id().value()).toBe('image-001');

    expect(image.url()).toBe('https://example.com/image.jpg');

    expect(image.alt()).toBe('Product Image');

    expect(image.width()).toBe(1200);

    expect(image.height()).toBe(800);

    expect(image.sortOrder()).toBe(0);

    expect(image.isPrimary()).toBe(true);
  });

  it('should throw when image id is invalid', () => {
    expect(() =>
      ProductImage.create({
        ...createProps(),
        id: 'invalid' as never,
      }),
    ).toThrow();
  });

  it('should throw when url is empty', () => {
    expect(() =>
      ProductImage.create({
        ...createProps(),
        url: '',
      }),
    ).toThrow();
  });

  it('should throw when width is invalid', () => {
    expect(() =>
      ProductImage.create({
        ...createProps(),
        width: 0,
      }),
    ).toThrow();
  });

  it('should throw when height is invalid', () => {
    expect(() =>
      ProductImage.create({
        ...createProps(),
        height: -1,
      }),
    ).toThrow();
  });

  it('should throw when sort order is negative', () => {
    expect(() =>
      ProductImage.create({
        ...createProps(),
        sortOrder: -1,
      }),
    ).toThrow();
  });
});
