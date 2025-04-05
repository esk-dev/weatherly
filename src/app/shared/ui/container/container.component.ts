import { Component } from '@angular/core';

@Component({
  selector: 'weatherly-container',
  imports: [],
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
      width: 100%;
    }
  `,
})
export class ContainerComponent {}
