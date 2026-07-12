import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '@app/abstracts/base.component';
import { HrefService } from '@app/services/href.service';
import { ButtonIconComponent } from "@shared/button-icon/button-icon.component";

@Component({
  selector: 'app-footer',
  imports: [
    MatIconModule,
    ButtonIconComponent
],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseComponent {
  private _hrefService = inject(HrefService);

  onLinkedInClicked() {
    this._hrefService.openWindow(this.linksUrls.LinkedIn);
  }

  onGitHubClicked() {
    this._hrefService.openWindow(this.linksUrls.GitHub);
  }
}
