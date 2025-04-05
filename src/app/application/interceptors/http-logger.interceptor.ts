import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { LoggerService } from '@shared/infrastructure/logger/logger.service';

export const httpLoggerInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const loggerService = inject(LoggerService);
  const { urlWithParams, body } = req;
  loggerService.logRequest(
    urlWithParams,
    body as Record<string, unknown>,
    new Date(),
  );
  return next(req);
};
