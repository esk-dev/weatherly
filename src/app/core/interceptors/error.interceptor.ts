import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import {
  catchError,
  delay,
  mergeMap,
  Observable,
  of,
  retryWhen,
  throwError,
} from 'rxjs';

export const maxRetries = 2;
export const delayMs = 2000;

export const errorInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    retryWhen((error) =>
      error.pipe(
        mergeMap((error, index) => {
          if (index < maxRetries && error.status == 500) {
            return of(error).pipe(delay(delayMs));
          }
          throw error;
        }),
      ),
    ),
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent && error.status === 401) {
        const errorMessage = `Ошибка авторизации: ${error.error.message}`;
        console.error(errorMessage, error);
      }

      return throwError(() => error);
    }),
  );
};
