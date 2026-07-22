import { DomainError } from '@/core/domain/errors';

export class InvalidProductSkuError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
