import { DomainError } from '@/core/domain/errors';
export class InvalidProductNameError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
