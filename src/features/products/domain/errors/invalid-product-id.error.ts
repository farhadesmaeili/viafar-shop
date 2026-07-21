import { DomainError } from '@/core/domain/errors';

export class InvalidProductIdError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
