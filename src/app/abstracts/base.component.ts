import { computed, inject } from "@angular/core";
import { BreakpointService } from "@app/services/breakpoints.service";

export abstract class BaseComponent {
  breakpointService = inject(BreakpointService);

  isMobile = computed(() => this.breakpointService.isMobile());
  isTablet = computed(() => this.breakpointService.isTablet());
  isDesktop = computed(() => this.breakpointService.isDesktop());
}
