import { PrismaProductRepository } from '@/features/products/infrastructure/persistence/prisma';

import type { ProductRepository } from '@/features/products/domain/repositories';

export const repositories = {
  product: new PrismaProductRepository(),
} satisfies {
  product: ProductRepository;
};
