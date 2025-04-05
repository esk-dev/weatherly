import { ErrorHandler, inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@shared/infrastructure/errors/error.service';
import { LoggerService } from '@shared/infrastructure/logger/logger.service';
import { NotificationService } from '@shared/infrastructure/notifications/notification.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  private _errorService = inject(ErrorService);
  private _logger = inject(LoggerService);
  private _notifier = inject(NotificationService);

  handleError(error: Error | HttpErrorResponse): void {
    let message: string;
    let stackTrace: string;

    if (error instanceof HttpErrorResponse) {
      message = this._errorService.getServerMessage(error);
      stackTrace = this._errorService.getServerStack(error);
      this._notifier.showError(message);
    } else {
      message = this._errorService.getClientMessage(error);
      stackTrace = this._errorService.getClientStack(error);
      this._notifier.showError(message);
    }
    this._logger.logError(message, stackTrace ?? '');
    console.error(error, stackTrace);
  }
}
