import { Identifier } from '../value-objects';
import { Entity } from './entity';

export abstract class AggregateRoot<TId extends Identifier> extends Entity<TId> {
  protected constructor(id: TId) {
    super(id);
  }
}
