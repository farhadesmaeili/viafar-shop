import { ApplicationError } from '@/core/application/errors';

export class ProductAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Product already exists.');
  }
}
