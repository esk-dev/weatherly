import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DesktopLayoutComponent } from '@ui/desktop-layout/desktop-layout.component';
import { ToggleThemeComponent } from '@features/toggle-theme/ui/toggle-theme/toggle-theme.component';
import { HeaderComponent } from '@widgets/header/header.component';
import { FooterComponent } from '@widgets/footer/footer.component';
import { BreakpointService } from '@shared/infrastructure/breakpoint/breakpoint.service';
import { AsyncPipe } from '@angular/common';
import { ToggleSidenavComponent } from '@features/toggle-sidenav/toggle-sidenav.component';
import { MobileLayoutComponent } from '@ui/mobile-layout/mobile-layout.component';
import { SidenavContentComponent } from '@ui/sidenav-content/sidenav-content.component';

@Component({
  selector: 'weatherly-root',
  imports: [
    DesktopLayoutComponent,
    ToggleThemeComponent,
    HeaderComponent,
    FooterComponent,
    AsyncPipe,
    ToggleSidenavComponent,
    MobileLayoutComponent,
    SidenavContentComponent,
  ],
  templateUrl: './root.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  private breakpointService = inject(BreakpointService);

  isHandset$ = this.breakpointService.isHandset$;
}
