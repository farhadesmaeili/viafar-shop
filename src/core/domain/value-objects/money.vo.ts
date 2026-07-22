import { InvalidMoneyError } from '@/core/domain/errors/invalid-money.error';
import type { CurrencyCode } from '@/shared/constants/currencies';

import { ValueObject } from './value-object.vo';

export interface MoneyProps {
  amount: number;
  currency: CurrencyCode;
}

export class Money extends ValueObject<MoneyProps> {
  private constructor(props: MoneyProps) {
    super(props);
  }

  public static create(props: MoneyProps): Money {
    if (!Number.isInteger(props.amount)) {
      throw new InvalidMoneyError('Money amount must be an integer.');
    }

    if (props.amount < 0) {
      throw new InvalidMoneyError('Money amount cannot be negative.');
    }

    return new Money(props);
  }

  public amount(): number {
    return this.props.amount;
  }

  public currency(): CurrencyCode {
    return this.props.currency;
  }

  public toJSON(): MoneyProps {
    return {
      amount: this.props.amount,
      currency: this.props.currency,
    };
  }
}
