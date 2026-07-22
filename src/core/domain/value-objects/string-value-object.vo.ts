import { ValueObject } from './value-object.vo';

interface StringValueObjectProps {
  value: string;
}

export abstract class StringValueObject extends ValueObject<StringValueObjectProps> {
  protected constructor(value: string) {
    super({
      value,
    });
  }

  public value(): string {
    return this.props.value;
  }

  public toString(): string {
    return this.props.value;
  }
}
