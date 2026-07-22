import { ApplicationError } from '@/core/application/errors';

export class ProductSkuAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Product SKU already exists.');
  }
}
