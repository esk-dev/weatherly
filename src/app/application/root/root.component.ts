import { Component } from '@angular/core';
import { LayoutComponent } from '@shared/ui/layout/layout.component';
import { ToggleThemeComponent } from '../../features/toggle-theme/ui/toggle-theme/toggle-theme.component';

@Component({
  selector: 'weatherly-root',
  imports: [LayoutComponent, ToggleThemeComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
  standalone: true,
})
export class RootComponent {}
