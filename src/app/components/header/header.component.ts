import { Component, DOCUMENT, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BaseComponent } from '@app/abstracts/base.component';

@Component({
  selector: 'app-header',
  imports: [
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseComponent {
  doc = inject(DOCUMENT);

  onTheme() {
    this.themeService.isLightMode ? this.themeService.replaceLightmode() : this.themeService.replaceDarkmode();
  }

  onLanguage() {
    return;
  }

}
