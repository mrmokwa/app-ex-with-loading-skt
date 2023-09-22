import { Directive, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appDrawerNavigation]',
})
export class DrawerNavigationDirective implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(
    private matDrawer: MatDrawer,
    private observer: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.matDrawer.position = 'end';

    this.subscription = this.observer
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((state) => this.updateView(state));
  }

  updateView(state: BreakpointState) {
    if (state.matches) {
      this.matDrawer.mode = 'over';
      this.matDrawer.disableClose = false;
    } else {
      this.matDrawer.mode = 'side';
      this.matDrawer.disableClose = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
