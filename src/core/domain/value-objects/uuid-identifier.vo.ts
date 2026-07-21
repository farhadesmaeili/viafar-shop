import { randomUUID } from 'node:crypto';

import { Identifier } from './identifier.vo';

export abstract class UuidIdentifier extends Identifier {
  private static readonly UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  protected constructor(value: string) {
    super(value);
  }

  protected static generateUuid(): string {
    return randomUUID();
  }

  protected static isValidUuid(value: string): boolean {
    return this.UUID_REGEX.test(value);
  }
}
