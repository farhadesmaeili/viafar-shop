import { expect } from 'vitest';

interface ComparableValueObject {
  equals(other: unknown): boolean;
}

export function expectEqualValueObjects(
  first: ComparableValueObject,
  second: ComparableValueObject,
): void {
  expect(first.equals(second)).toBe(true);
}

export function expectDifferentValueObjects(
  first: ComparableValueObject,
  second: ComparableValueObject,
): void {
  expect(first.equals(second)).toBe(false);
}

export function expectValue<T>(value: T, expected: T): void {
  expect(value).toBe(expected);
}
