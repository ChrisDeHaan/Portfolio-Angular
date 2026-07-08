import { BreakpointObserver } from '@angular/cdk/layout';
import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BREAKPOINTS } from '@app/constants/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  private _breakpointObserver = inject(BreakpointObserver);
  private _destroyRef = inject(DestroyRef);

  private _isMobile = signal<boolean>(false);
  private _isTablet = signal<boolean>(false);
  private _isDesktop = signal<boolean>(false);

  /**
   * Monitor breakpoints for application
   */
  startBreakpointInterceptor() {
    this._breakpointObserver.observe([BREAKPOINTS.isMobile, BREAKPOINTS.isTablet, BREAKPOINTS.isDesktop])
      .pipe(takeUntilDestroyed(this._destroyRef)).subscribe((state) => {
        this._isMobile.set(state.breakpoints[BREAKPOINTS.isMobile]);
        this._isTablet.set(state.breakpoints[BREAKPOINTS.isTablet]);
        this._isDesktop.set(state.breakpoints[BREAKPOINTS.isDesktop]);
      })
  }

  isMobile = computed(() => this._isMobile());
  isTablet = computed(() => this._isTablet());
  isDesktop = computed(() => this._isDesktop());
}
