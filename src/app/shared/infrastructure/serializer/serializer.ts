import { ClassProvider, InjectionToken, Type } from '@angular/core';
import { AbstractSerializer } from './abstract-serializer';

export const SERIALIZER: InjectionToken<AbstractSerializer> =
  new InjectionToken<AbstractSerializer>('Serializer Token');

export function provideSerializer(
  serializer: Type<AbstractSerializer>,
): ClassProvider {
  return {
    provide: SERIALIZER,
    useClass: serializer,
  };
}
