import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'weatherly-footer',
  imports: [MatToolbar],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
