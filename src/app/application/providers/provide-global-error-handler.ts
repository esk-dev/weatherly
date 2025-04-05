import { ErrorHandler, Provider } from '@angular/core';
import { GlobalErrorHandler } from '@shared/infrastructure/errors/global-error-handler';

export function provideGlobalErrorHandler(): Provider {
  return {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  };
}
