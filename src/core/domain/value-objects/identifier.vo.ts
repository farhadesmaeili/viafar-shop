import { StringValueObject } from './string-value-object.vo';
export abstract class Identifier extends StringValueObject {
  protected constructor(value: string) {
    super(value);
  }
}
