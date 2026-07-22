import { ApplicationError } from '@/core/application/errors';

export class ProductSlugAlreadyExistsError extends ApplicationError {
  constructor() {
    super('Product slug already exists.');
  }
}
