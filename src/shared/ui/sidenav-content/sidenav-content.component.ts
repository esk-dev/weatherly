import { Component, inject } from '@angular/core';
import { SidebarContentService } from '@app/core/services/sidebar/sidebar-content.service';
import { Observable } from 'rxjs';
import { SidebarContentItem } from '@app/core/services/sidebar/sidebar-content.types';
import {
  AsyncPipe,
  NgComponentOutlet,
  NgTemplateOutlet,
} from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'weatherly-sidenav-content',
  imports: [NgTemplateOutlet, AsyncPipe, MatDivider, NgComponentOutlet],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.scss',
  standalone: true,
})
export class SidenavContentComponent {
  private sidebarContentService = inject(SidebarContentService);

  sidebarItems$: Observable<SidebarContentItem[]> =
    this.sidebarContentService.contentItems$;
}
