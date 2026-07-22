import { DomainError } from '@/core/domain/errors';

export class InvalidProductSlugError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
