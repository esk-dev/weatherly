import { Component } from '@angular/core';
import { ContainerComponent } from '@shared/ui/container/container.component';

@Component({
  selector: 'weatherly-dashboard',
  imports: [ContainerComponent],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {}
