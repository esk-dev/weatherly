import { sidebarContentItemsToken } from '@app/core/services/sidebar-content/sidebar-content.token';
import { SidebarContentItem } from '@app/core/services/sidebar-content/sidebar-content.types';

export function provideSidebarItems(items: SidebarContentItem[]) {
  return {
    provide: sidebarContentItemsToken,
    useValue: items ?? [],
  };
}
