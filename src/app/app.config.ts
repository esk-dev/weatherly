import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEnvironment } from '@shared/common/environment/env';
import { provideGlobalErrorHandler } from '@app/core/providers/provide-global-error-handler';
import { environment } from '../environments/environment';
import { interceptors } from '@app/core/interceptors/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGlobalErrorHandler(),
    provideEnvironment(environment),
    provideHttpClient(withInterceptors(interceptors)),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
