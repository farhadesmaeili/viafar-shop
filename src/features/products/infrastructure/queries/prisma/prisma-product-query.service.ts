import type {
  GetProductByIdOutput,
  ListProductsInput,
  ListProductsOutput,
} from '@/features/products/application/dto';

import type { ProductQueryService } from '@/features/products/application/queries';

export class PrismaProductQueryService implements ProductQueryService {
  public async getProductById(id: string): Promise<GetProductByIdOutput | null> {
    void id;

    throw new Error('Not implemented.');
  }

  public async listProducts(input: ListProductsInput): Promise<ListProductsOutput> {
    void input;

    throw new Error('Not implemented.');
  }
}
