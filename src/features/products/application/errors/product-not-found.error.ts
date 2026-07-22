import { ApplicationError } from '@/core/application/errors';
export class ProductNotFoundError extends ApplicationError {
  constructor() {
    super('Product not found.');
  }
}
