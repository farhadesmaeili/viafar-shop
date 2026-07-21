import { DomainError } from '@/core/domain/errors';

export class ProductAlreadyExistsError extends DomainError {
  constructor() {
    super('Product already exists.');
  }
}
