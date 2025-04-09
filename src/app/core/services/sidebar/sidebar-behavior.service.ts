import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarBehaviorService {
  toggleEvent$: Subject<void> = new Subject<void>();

  toggle() {
    this.toggleEvent$.next();
  }
}
