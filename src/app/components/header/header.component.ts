import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BaseComponent } from '@app/abstracts/base.component';
import { TranslocoService } from '@jsverse/transloco';

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
  private _translocoService = inject(TranslocoService);

  onThemeChange() {
    this.themeService.isLightMode ? this.themeService.replaceLightmode() : this.themeService.replaceDarkmode();
  }

  onLanguageChange() {
    this._translocoService.activeLang() === "en-us" ? this._translocoService.setActiveLang("es-us") : this._translocoService.setActiveLang("en-us");
    
  }

}
