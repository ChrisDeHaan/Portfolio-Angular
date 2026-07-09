import { computed, inject, signal, WritableSignal } from "@angular/core";
import { ICONS, ICONS_SET } from "@app/constants/icons.constants";
import { BreakpointService } from "@app/services/breakpoints.service";
import { ThemeService } from "@app/services/theme.service";

export abstract class BaseComponent {
  breakpointService = inject(BreakpointService);
  themeService = inject(ThemeService);

  isMobile = computed(() => this.breakpointService.isMobile());
  isTablet = computed(() => this.breakpointService.isTablet());
  isDesktop = computed(() => this.breakpointService.isDesktop());

  showComponent: WritableSignal<boolean> = signal(false);

  get icons() {
    return ICONS;
  }

  get iconSet() {
    return ICONS_SET;
  }

  get isLightMode() {
    return this.themeService.isLightMode;
  }
}
