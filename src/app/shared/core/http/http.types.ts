import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Опции, которые можно передать в функцию simpleGetApiRequestOptions.
 * Позволяет использовать обычные объекты для headers и params.
 */
export interface InputApiOptions {
  /** Заголовки запроса (HttpHeaders или объект Record<string, string | string[]>) */
  headers?: HttpHeaders | Record<string, string | string[]>;

  /** Параметры URL запроса (объект Record<string, ...>) */
  params?: Record<
    string,
    | string
    | number
    | boolean
    | readonly (string | number | boolean)[]
    | null
    | undefined
  >;

  /** Сообщать ли о прогрессе выполнения запроса */
  reportProgress?: boolean;

  /** Какую часть ответа возвращать ('body', 'events', 'response') */
  observe?: 'body' | 'events' | 'response';

  /** Ожидаемый тип ответа ('arraybuffer', 'blob', 'json', 'text') */
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';

  /** Отправлять ли куки/данные аутентификации с запросом */
  withCredentials?: boolean;

  /** Контекст запроса (для интерсепторов и т.д.) */
  context?: HttpContext;
}

/**
 * Опции, обработанные функцией simpleGetApiRequestOptions.
 * Гарантированно содержит HttpHeaders и HttpParams, если они были переданы на вход.
 * Подходит для передачи в методы HttpClient.
 */
export interface ProcessedOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  observe?: 'body' | 'events' | 'response';
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  context?: HttpContext;
}
