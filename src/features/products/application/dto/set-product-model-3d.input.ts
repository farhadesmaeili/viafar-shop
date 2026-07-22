export interface SetProductModel3DInput {
  readonly productId: string;

  readonly model3D: {
    readonly url: string;

    readonly previewImage: string;

    readonly format: 'glb' | 'gltf';

    readonly fileSize: number;
  };
}
