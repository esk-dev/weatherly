import { Component } from '@angular/core';
import { ContainerComponent } from '@ui/container/container.component';

@Component({
  selector: 'weatherly-dashboard',
  imports: [ContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {}
