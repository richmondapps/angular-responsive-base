import { computed, inject, Injectable } from '@angular/core';
import {
  Breakpoints,
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  breakpointObserver = inject(BreakpointObserver);

  phone = '(max-width: 599px)';
  tablet = '(min-width: 600px) and (max-width: 999px)';
  laptop = '(min-width: 1000px) and (max-width: 1599px)';
  desktop = '(max-width: 1600px)';

  screenWidth = toSignal(
    this.breakpointObserver.observe([
      this.phone,
      this.tablet,
      this.laptop,
      this.desktop,
    ])
  );

  phoneWidth = computed(() => this.screenWidth()?.breakpoints[this.phone]);

  tabletWidth = computed(() => this.screenWidth()?.breakpoints[this.tablet]);

  laptopWidth = computed(() => this.screenWidth()?.breakpoints[this.laptop]);

  desktopWidth = computed(() => this.screenWidth()?.breakpoints[this.desktop]);

  constructor() {}
}
