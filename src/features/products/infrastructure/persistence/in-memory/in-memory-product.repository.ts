import type { ProductRepository } from '@/features/products/domain/repositories';

import { Product } from '@/features/products/domain/entities';
import { ProductId, ProductSku, ProductSlug } from '@/features/products/domain/value-objects';

export class InMemoryProductRepository implements ProductRepository {
  private readonly products = new Map<string, Product>();

  public async findById(id: ProductId): Promise<Product | null> {
    return this.products.get(id.value()) ?? null;
  }

  public async findBySku(sku: ProductSku): Promise<Product | null> {
    for (const product of this.products.values()) {
      if (product.sku().equals(sku)) {
        return product;
      }
    }

    return null;
  }

  public async findBySlug(slug: ProductSlug): Promise<Product | null> {
    for (const product of this.products.values()) {
      if (product.slug().equals(slug)) {
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

  public async existsBySku(sku: ProductSku): Promise<boolean> {
    return (await this.findBySku(sku)) !== null;
  }

  public async existsBySlug(slug: ProductSlug): Promise<boolean> {
    return (await this.findBySlug(slug)) !== null;
  }

  public clear(): void {
    this.products.clear();
  }

  public count(): number {
    return this.products.size;
  }
}
