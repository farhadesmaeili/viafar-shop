export interface AddProductImageInput {
  readonly productId: string;

  readonly image: {
    readonly id: string;

    readonly url: string;

    readonly alt: string;

    readonly width: number;

    readonly height: number;

    readonly sortOrder: number;

    readonly isPrimary: boolean;
  };
}
