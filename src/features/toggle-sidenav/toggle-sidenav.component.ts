import { Component, inject } from '@angular/core';
import { SidebarBehaviorService } from '@app/core/services/sidebar/sidebar-behavior.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'weatherly-toggle-sidenav',
  imports: [MatIcon, MatIconButton],
  templateUrl: './toggle-sidenav.component.html',
  standalone: true,
  styleUrl: './toggle-sidenav.component.scss',
})
export class ToggleSidenavComponent {
  private sidebarBehaviorService = inject(SidebarBehaviorService);

  toggle() {
    this.sidebarBehaviorService.toggle();
  }
}
