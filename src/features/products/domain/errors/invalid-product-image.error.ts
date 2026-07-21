import { DomainError } from '@/core/domain/errors';

export class InvalidProductImageError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
