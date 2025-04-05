import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  ViewChild,
} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay, take } from 'rxjs';
import {
  AsyncPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '@shared/infrastructure/sidebar/sidebar.service';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatIconButton } from '@angular/material/button';
import { SidebarContentItem } from '@shared/infrastructure/sidebar/sidebar.types';

@Component({
  imports: [
    MatIcon,
    AsyncPipe,
    MatToolbar,
    MatDivider,
    RouterOutlet,
    MatIconButton,
    MatSidenavModule,
    NgTemplateOutlet,
    NgComponentOutlet,
    MatSidenavContainer,
  ],
  selector: 'weatherly-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  headerTitle = input('Weather App');
  sidenavTitle = input('Side menu');

  private sidebarService = inject(SidebarService);
  private breakpointObserver = inject(BreakpointObserver);

  sidebarItems$: Observable<SidebarContentItem[]> =
    this.sidebarService.contentItems$;

  // Observable для определения, является ли устройство мобильным (Handset)
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(), // Кэшируем последнее значение для подписчиков
    );

  // Метод для закрытия сайдбара после клика на элемент на мобильных
  closeSidenavOnMobile(): void {
    this.isHandset$
      .pipe(take(1))
      .subscribe((isHandset) => {
        if (isHandset) {
          this.drawer.close();
        }
      })
      .unsubscribe();
  }
}
