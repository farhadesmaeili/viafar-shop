import type { ProductStatusType } from '../../domain/value-objects';

export interface ChangeProductStatusInput {
  readonly id: string;

  readonly status: ProductStatusType;
}
