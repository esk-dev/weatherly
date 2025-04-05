import { AbstractSerializer } from './abstract-serializer';

export class DefaultSerializerClass extends AbstractSerializer {
  override parse<P, R>(payload: P): R {
    console.log(payload);
    throw new Error('Method not implemented.');
  }
  override serialize(response: Record<string, string>): Record<string, string> {
    console.log(response);
    throw new Error('Method not implemented.');
  }
}
