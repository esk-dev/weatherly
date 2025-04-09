import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'weatherly-main-content',
  imports: [RouterOutlet],
  templateUrl: './main-content.component.html',
  standalone: true,
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
