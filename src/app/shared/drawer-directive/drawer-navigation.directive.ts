import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
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
  @Input() size = '330px';

  private subscription = new Subscription();

  constructor(
    private matDrawer: MatDrawer,
    private observer: BreakpointObserver,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.matDrawer.position = 'end';

    this.subscription = this.observer
      .observe([Breakpoints.XSmall])
      .subscribe((state) => this.updateView(state));
  }

  updateView(state: BreakpointState) {
    if (state.matches) {
      this.matDrawer.mode = 'over';
      this.matDrawer.disableClose = false;
      this.renderer.setStyle(this.elRef.nativeElement, 'width', '100%');
    } else {
      this.matDrawer.mode = 'side';
      this.matDrawer.disableClose = true;
      this.renderer.setStyle(this.elRef.nativeElement, 'width', this.size);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
