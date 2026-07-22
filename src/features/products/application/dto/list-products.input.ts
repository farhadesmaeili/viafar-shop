export interface ListProductsInput {
  readonly page: number;

  readonly limit: number;

  readonly search?: string;

  readonly status?: 'draft' | 'active' | 'archived';
}
