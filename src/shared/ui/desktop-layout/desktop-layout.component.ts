import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  InputSignal,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { Observable, tap } from 'rxjs';
import { SidebarContentItem } from '@app/core/services/sidebar/sidebar-content.types';
import { SidebarContentService } from '@app/core/services/sidebar/sidebar-content.service';
import { SidebarBehaviorService } from '@app/core/services/sidebar/sidebar-behavior.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MainContentComponent } from '@ui/main-content/main-content.component';
import { SidenavContentComponent } from '@ui/sidenav-content/sidenav-content.component';

@Component({
  imports: [
    MatSidenavModule,
    MatSidenavContainer,
    MainContentComponent,
    SidenavContentComponent,
  ],
  selector: 'weatherly-desktop-layout',
  standalone: true,
  templateUrl: './desktop-layout.component.html',
  styleUrl: './desktop-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopLayoutComponent implements OnInit {
  @ViewChild('leftSidenav') drawer!: MatSidenav;

  headerTitle: InputSignal<string> = input('Weather App');
  sidenavTitle: InputSignal<string> = input('Side menu');

  private destroyRef$ = inject(DestroyRef);
  private sidebarBehaviorService = inject(SidebarBehaviorService);
  private sidebarContentService = inject(SidebarContentService);

  sidebarItems$: Observable<SidebarContentItem[]> =
    this.sidebarContentService.contentItems$;

  toggleEvent$ = this.sidebarBehaviorService.toggleEvent$.pipe(
    tap(() => {
      if (this.drawer.opened) {
        this.drawer.close();
      } else {
        this.drawer.open();
      }
    }),
  );

  ngOnInit() {
    this.toggleEvent$.pipe(takeUntilDestroyed(this.destroyRef$)).subscribe();
  }
}
