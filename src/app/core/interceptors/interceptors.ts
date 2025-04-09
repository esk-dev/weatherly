import { errorInterceptor } from './error.interceptor';
import { HttpInterceptorFn } from '@angular/common/http';
import { cacheInterceptor } from './cache.interceptor';
import { credentialsInterceptor } from './credentials.interceptor';
import { httpLoggerInterceptor } from './http-logger.interceptor';

export const interceptors: HttpInterceptorFn[] = [
  errorInterceptor,
  credentialsInterceptor,
  httpLoggerInterceptor,
  cacheInterceptor,
];
