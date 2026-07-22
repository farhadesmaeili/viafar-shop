import { expect } from 'vitest';

interface ValueObjectLike {
  equals(other: unknown): boolean;
}

export function expectValueObjectEquals(first: ValueObjectLike, second: ValueObjectLike): void {
  expect(first.equals(second)).toBe(true);
}

export function expectValueObjectNotEquals(first: ValueObjectLike, second: ValueObjectLike): void {
  expect(first.equals(second)).toBe(false);
}
