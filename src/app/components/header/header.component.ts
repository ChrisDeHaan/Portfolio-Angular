import { Component, inject } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ButtonIconComponent } from "@shared/button-icon/button-icon.component";

@Component({
  selector: 'app-header',
  imports: [
    ButtonIconComponent,
    TranslocoPipe
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
