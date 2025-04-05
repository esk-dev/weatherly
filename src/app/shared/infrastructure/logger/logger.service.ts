import { inject, Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private _locale = inject(LOCALE_ID);

  logError(message: string, error: string) {
    console.error(message, error);
  }

  logRequest(url: string, payload: Record<string, unknown>, reqDate: Date) {
    console.log(
      url,
      payload,
      new Intl.DateTimeFormat(this._locale).format(reqDate),
    );
  }
}
