import { TemplateRef, Type } from '@angular/core';

export interface SidebarContentItem {
  id: string; // Уникальный идентификатор для управления
  order?: number; // Для сортировки
  template?: TemplateRef<unknown>;
  context?: unknown; // Контекст для шаблона
  component?: Type<unknown>;
  inputs?: Record<string, unknown>; // Входные данные для компонента
}
