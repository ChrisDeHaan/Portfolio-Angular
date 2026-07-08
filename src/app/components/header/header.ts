import { Component, DOCUMENT, inject } from '@angular/core';
import { ThemeService } from '@app/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  doc = inject(DOCUMENT);
  themeService = inject(ThemeService);

  onClick() {
    this.themeService.isLightMode ? this.themeService.replaceLightmode() : this.themeService.replaceDarkmode();
  }
}
