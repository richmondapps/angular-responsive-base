import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreakpointObserverService } from './services/breakpoint-observer.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    SidenavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  breakpointObserverService = inject(BreakpointObserverService);

  collapsed = signal(true);
  sidenavWidth = computed(() => (this.collapsed() ? '0px' : '300px'));

  screenWidthTabletOrLess = computed(() => {
    if (
      this.breakpointObserverService.phoneWidth() ||
      this.breakpointObserverService.tabletWidth()
    ) {
      console.log('screenWidthTabletOrLess TRUE');
      return true;
    } else {
      console.log('screenWidthTabletOrLess FALSE');
      return false;
    }
  });
}
