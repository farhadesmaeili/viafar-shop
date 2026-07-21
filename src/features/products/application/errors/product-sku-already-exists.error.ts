import { DomainError } from '@/core/domain/errors';

export class ProductSkuAlreadyExistsError extends DomainError {
  constructor() {
    super('Product SKU already exists.');
  }
}
