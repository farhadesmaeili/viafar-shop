import { ValueObject } from '@/core/domain/value-objects';

interface ProductStatusProps {
  value: ProductStatusType;
}

export const PRODUCT_STATUSES = ['draft', 'active', 'archived'] as const;

export type ProductStatusType = (typeof PRODUCT_STATUSES)[number];

export class ProductStatus extends ValueObject<ProductStatusProps> {
  private constructor(props: ProductStatusProps) {
    super(props);
  }

  public static create(value: ProductStatusType): ProductStatus {
    return new ProductStatus({
      value,
    });
  }

  public value(): ProductStatusType {
    return this.props.value;
  }

  public isDraft(): boolean {
    return this.props.value === 'draft';
  }

  public isActive(): boolean {
    return this.props.value === 'active';
  }

  public isArchived(): boolean {
    return this.props.value === 'archived';
  }
}
