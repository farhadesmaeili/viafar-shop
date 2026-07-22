import { Identifier } from '../value-objects';

export abstract class Entity<TId extends Identifier> {
  protected constructor(protected readonly id: TId) {}

  public getId(): TId {
    return this.id;
  }

  public equals(other: Entity<TId>): boolean {
    return this.id.equals(other.id);
  }
}
