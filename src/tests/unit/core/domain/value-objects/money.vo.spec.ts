import { describe, expect, it } from 'vitest';

import { Money } from '@/core/domain/value-objects';
import { expectDifferentValueObjects, expectEqualValueObjects, expectValue } from '@/tests/helpers';

describe('Money', () => {
  it('should create a money value object', () => {
    const money = Money.create({
      amount: 100000,
      currency: 'IRR',
    });

    expectValue(money.amount(), 100000);
    expectValue(money.currency(), 'IRR');
  });

  it('should throw when amount is negative', () => {
    expect(() =>
      Money.create({
        amount: -1,
        currency: 'IRR',
      }),
    ).toThrow();
  });

  it('should throw when amount is not an integer', () => {
    expect(() =>
      Money.create({
        amount: 100.5,
        currency: 'IRR',
      }),
    ).toThrow();
  });

  it('should compare equal value objects', () => {
    const first = Money.create({
      amount: 1000,
      currency: 'USD',
    });

    const second = Money.create({
      amount: 1000,
      currency: 'USD',
    });

    expectEqualValueObjects(first, second);
  });

  it('should compare different value objects', () => {
    const first = Money.create({
      amount: 1000,
      currency: 'USD',
    });

    const second = Money.create({
      amount: 2000,
      currency: 'USD',
    });

    expectDifferentValueObjects(first, second);
  });

  it('should serialize to json', () => {
    const money = Money.create({
      amount: 1000,
      currency: 'EUR',
    });

    expect(money.toJSON()).toEqual({
      amount: 1000,
      currency: 'EUR',
    });
  });
});
