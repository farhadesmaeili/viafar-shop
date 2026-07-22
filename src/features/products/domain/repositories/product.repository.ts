import { Product } from '../entities';
import { ProductId, ProductSlug, ProductSku } from '../value-objects';

export interface ProductRepository {
  findById(id: ProductId): Promise<Product | null>;

  findBySlug(slug: ProductSlug): Promise<Product | null>;

  findBySku(sku: ProductSku): Promise<Product | null>;

  save(product: Product): Promise<void>;

  delete(id: ProductId): Promise<void>;

  existsBySlug(slug: ProductSlug): Promise<boolean>;

  existsBySku(sku: ProductSku): Promise<boolean>;
}
