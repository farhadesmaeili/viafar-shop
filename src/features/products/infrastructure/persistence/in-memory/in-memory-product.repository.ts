import { Product } from '@/features/products/domain/entities';
import type { ProductRepository } from '@/features/products/domain/repositories';
import { ProductId, ProductSku, ProductSlug } from '@/features/products/domain/value-objects';

export class InMemoryProductRepository implements ProductRepository {
  private readonly products: Map<string, Product> = new Map();

  public async findById(id: ProductId): Promise<Product | null> {
    return this.products.get(id.value()) ?? null;
  }

  public async findByIdValue(id: string): Promise<Product | null> {
    return this.products.get(id) ?? null;
  }

  public async findBySlug(slug: ProductSlug): Promise<Product | null> {
    for (const product of this.products.values()) {
      if (product.slug().equals(slug)) {
        return product;
      }
    }

    return null;
  }

  public async findBySku(sku: ProductSku): Promise<Product | null> {
    for (const product of this.products.values()) {
      if (product.sku().equals(sku)) {
        return product;
      }
    }

    return null;
  }

  public async save(product: Product): Promise<void> {
    this.products.set(product.getId().value(), product);
  }

  public async delete(id: ProductId): Promise<void> {
    this.products.delete(id.value());
  }

  public async existsBySlug(slug: ProductSlug): Promise<boolean> {
    const product = await this.findBySlug(slug);

    return product !== null;
  }

  public async existsBySku(sku: ProductSku): Promise<boolean> {
    const product = await this.findBySku(sku);

    return product !== null;
  }
}
