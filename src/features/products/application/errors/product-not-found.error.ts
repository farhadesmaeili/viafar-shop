import { DomainError } from '@/core/domain/errors';

export class ProductNotFoundError extends DomainError {
  constructor() {
    super('Product not found.');
  }
}
