import { DomainError } from '@/core/domain/errors';

export class InvalidProductDescriptionError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
