import type { GetProductByIdOutput, ListProductsInput, ListProductsOutput } from '../dto';

export interface ProductQueryService {
  getProductById(id: string): Promise<GetProductByIdOutput | null>;

  listProducts(input: ListProductsInput): Promise<ListProductsOutput>;
}
