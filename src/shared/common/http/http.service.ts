import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getApiRequestOptions } from './http.util';
import { ENVIRONMENT, IEnvironment } from '../environment/env';
import { InputApiOptions } from '@shared/common/http/http.types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject(ENVIRONMENT) private readonly environment: IEnvironment,
  ) {}

  makeUrl(url: string): string {
    return url.indexOf('http') === 0
      ? url
      : `${this.environment.API_URL}${url}`;
  }

  get<T = void>(
    url: string,
    options?: Partial<InputApiOptions>,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    const processedOptions = getApiRequestOptions(options);
    return this.httpClient.get<T>(
      this.makeUrl(url),
      processedOptions as unknown,
    );
  }

  post<T = void>(
    url: string,
    body?: unknown | null,
    options?: Partial<InputApiOptions>,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    const processedOptions = getApiRequestOptions(options);
    return this.httpClient.post<T>(
      this.makeUrl(url),
      body ?? null,
      processedOptions as unknown,
    );
  }

  patch<T = void>(
    url: string,
    body: unknown | null,
    options?: Partial<InputApiOptions>,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    const processedOptions = getApiRequestOptions(options);
    return this.httpClient.patch<T>(
      this.makeUrl(url),
      body,
      processedOptions as unknown,
    );
  }

  put<T = void>(
    url: string,
    body: unknown | null,
    options?: Partial<InputApiOptions>,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    const processedOptions = getApiRequestOptions(options);
    return this.httpClient.put<T>(
      this.makeUrl(url),
      body,
      processedOptions as unknown,
    );
  }

  delete<T = void>(
    url: string,
    options?: Partial<InputApiOptions>,
  ): Observable<T | HttpResponse<T> | HttpEvent<T>> {
    const processedOptions = getApiRequestOptions(options);
    return this.httpClient.delete<T>(
      this.makeUrl(url),
      processedOptions as unknown,
    );
  }
}
