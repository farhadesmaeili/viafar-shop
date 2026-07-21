import { DomainError } from '@/core/domain/errors';

export class ProductSlugAlreadyExistsError extends DomainError {
  constructor() {
    super('Product slug already exists.');
  }
}
