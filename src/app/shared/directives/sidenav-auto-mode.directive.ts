import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { distinctUntilKeyChanged, map, Subscription } from 'rxjs';

@Directive({
  selector: '[appSidenavAutoMode]',
})
export class SidenavAutoModeDirective {
  @Input() size = '300px';

  private subscription = new Subscription();

  constructor(
    private matSidenav: MatSidenav,
    private observer: BreakpointObserver,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.matSidenav.opened = true;

    this.subscription = this.observer
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Handset,
        Breakpoints.TabletPortrait,
      ])
      .pipe(distinctUntilKeyChanged('matches'))
      .subscribe((state) => this.updateView(state));
  }

  updateView(state: BreakpointState) {
    if (state.matches) {
      this.matSidenav.mode = 'over';
      this.matSidenav.disableClose = false;
      this.matSidenav.close();
    } else {
      this.matSidenav.mode = 'side';
      this.matSidenav.disableClose = true;
      this.matSidenav.open();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
