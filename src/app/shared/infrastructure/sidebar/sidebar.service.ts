import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarContentItem } from '@shared/infrastructure/sidebar/sidebar.types';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private contentItemsSource = new BehaviorSubject<SidebarContentItem[]>([]);
  contentItems$ = this.contentItemsSource.asObservable();

  private get currentItems(): SidebarContentItem[] {
    return this.contentItemsSource.getValue();
  }

  // Добавление элемента
  addContent(item: SidebarContentItem): void {
    const items = [...this.currentItems, item];
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
