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
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header extends BaseComponent {
  doc = inject(DOCUMENT);

  onClick() {
    this.themeService.isLightMode ? this.themeService.replaceLightmode() : this.themeService.replaceDarkmode();
  }

}
