import { describe, expect, it } from 'vitest';

import { ProductModel3D } from '@/features/products/domain/value-objects';

describe('ProductModel3D', () => {
  const createProps = () => ({
    url: ' https://example.com/model.glb ',

    previewImage: ' https://example.com/preview.jpg ',

    format: 'glb' as const,

    fileSize: 500000,
  });

  it('should create a valid 3d model', () => {
    const model = ProductModel3D.create(createProps());

    expect(model.url()).toBe('https://example.com/model.glb');

    expect(model.previewImage()).toBe('https://example.com/preview.jpg');

    expect(model.format()).toBe('glb');

    expect(model.fileSize()).toBe(500000);
  });

  it('should throw when url is empty', () => {
    expect(() =>
      ProductModel3D.create({
        ...createProps(),
        url: '',
      }),
    ).toThrow();
  });

  it('should throw when file size is invalid', () => {
    expect(() =>
      ProductModel3D.create({
        ...createProps(),
        fileSize: 0,
      }),
    ).toThrow();
  });

  it('should support different model formats', () => {
    const model = ProductModel3D.create({
      ...createProps(),
      format: 'gltf',
    });

    expect(model.format()).toBe('gltf');
  });
});
