import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarContentItem } from '@app/core/services/sidebar/sidebar-content.types';

@Injectable({
  providedIn: 'root',
})
export class SidebarContentService {
  private contentItemsSource = new BehaviorSubject<SidebarContentItem[]>([]);

  get contentItems$() {
    return this.contentItemsSource.asObservable();
  }

  private get currentItems(): SidebarContentItem[] {
    return this.contentItemsSource.getValue();
  }

  // Добавление элемента
  addContent(item: SidebarContentItem): void;
  addContent(item: SidebarContentItem[]): void;
  addContent(item: SidebarContentItem | SidebarContentItem[]): void {
    const payload: SidebarContentItem[] = Array.isArray(item) ? item : [item];
    const items = [...this.currentItems, ...payload];
    this.sortAndEmit(items);
  }

  // Удаление элемента по ID
  removeContent(id: string): void {
    const items = this.currentItems.filter((i) => i.id !== id);
    this.sortAndEmit(items);
  }

  // Обновление элемента (например, контекста или инпутов)
  updateContent(
    id: string,
    updates: Partial<Omit<SidebarContentItem, 'id'>>,
  ): void {
    const items = this.currentItems.map((item) =>
      item.id === id ? { ...item, ...updates } : item,
    );
    this.sortAndEmit(items);
  }

  // Очистка всего
  clearContent(): void {
    this.contentItemsSource.next([]);
  }

  private sortAndEmit(items: SidebarContentItem[]): void {
    // Сортируем по 'order', если он есть
    items.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
    this.contentItemsSource.next(items);
  }
}
