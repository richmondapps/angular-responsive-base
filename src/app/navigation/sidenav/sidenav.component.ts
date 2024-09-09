import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MenuItems {
  label: string;
  icon: string;
  route: string;
  displayLink?: boolean;
  access?: string;
  subMenuItems?: MenuItems[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  expandedItems = signal<string[]>([]);

  toggleExpanded(itemId: string) {
    const index = this.expandedItems().indexOf(itemId);
    if (index > -1) {
      this.expandedItems.set(
        this.expandedItems().filter((id) => id !== itemId)
      );
    } else {
      this.expandedItems.set([...this.expandedItems(), itemId]);
    }
  }

  menuItems = signal<MenuItems[]>([
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard',
    },
    {
      label: 'About',
      icon: 'info',
      route: 'about',
    },
    {
      label: 'Contact',
      icon: 'contact_page',
      route: 'contact',
    },
  ]);
}
