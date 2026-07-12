import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '@app/abstracts/base.component';
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
  onLinkedInClicked() {
    window.open(this.linksUrls.LinkedIn, "_blank");
  }

  onGitHubClicked() {
    window.open(this.linksUrls.GitHub, "_blank");
  }
}
