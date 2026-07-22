import { DomainError } from '@/core/domain/errors';

export class InvalidProductModel3DError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}
