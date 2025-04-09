import { Component } from '@angular/core';
import { MainContentComponent } from '@ui/main-content/main-content.component';

@Component({
  selector: 'weatherly-mobile-layout',
  imports: [MainContentComponent],
  templateUrl: './mobile-layout.component.html',
  styleUrl: './mobile-layout.component.scss',
  standalone: true,
})
export class MobileLayoutComponent {}
