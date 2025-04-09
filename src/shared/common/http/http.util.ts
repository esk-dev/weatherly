import { HttpHeaders, HttpParams } from '@angular/common/http';
import {
  InputApiOptions,
  ProcessedOptions,
} from '@shared/common/http/http.types';

/**
 * Упрощенная функция для преобразования "сырых" опций API запроса
 * в формат, подходящий для Angular HttpClient.
 *
 * @param options - Необязательные входные опции
 * @returns Обработанные опции или undefined, если опции не были переданы.
 */
export function getApiRequestOptions(
  options?: InputApiOptions,
): ProcessedOptions | undefined {
  if (!options) {
    return undefined;
  }

  const processedOptions: ProcessedOptions = {};

  if (options.headers) {
    processedOptions.headers =
      options.headers instanceof HttpHeaders
        ? options.headers // Если уже HttpHeaders, используем как есть
        : new HttpHeaders(options.headers); // Иначе создаем новый экземпляр
  }

  if (options.params) {
    let httpParams = new HttpParams(); // Начинаем с пустых HttpParams

    // Перебираем ключи объекта параметров
    for (const key in options.params) {
      // Проверяем, что это собственное свойство объекта (а не из прототипа)
      if (Object.prototype.hasOwnProperty.call(options.params, key)) {
        const value = options.params[key]; // Получаем значение

        if (value === null) {
          httpParams = httpParams.append(key, 'NULL');
        } else if (value !== undefined) {
          if (Array.isArray(value)) {
            value.forEach((item: string | number | boolean) => {
              if (item !== null && item !== undefined) {
                httpParams = httpParams.append(key, item.toString()); // Добавляем элемент как строку
              }
            });
          } else {
            httpParams = httpParams.append(key, value.toString()); // Добавляем как строку
          }
        }
      }
    }
    processedOptions.params = httpParams;
  }

  if (options.reportProgress !== undefined) {
    processedOptions.reportProgress = options.reportProgress;
  }
  if (options.observe !== undefined) {
    processedOptions.observe = options.observe;
  }
  if (options.responseType !== undefined) {
    processedOptions.responseType = options.responseType;
  }
  if (options.withCredentials !== undefined) {
    processedOptions.withCredentials = options.withCredentials;
  }
  if (options.context !== undefined) {
    processedOptions.context = options.context;
  }

  return processedOptions;
}
