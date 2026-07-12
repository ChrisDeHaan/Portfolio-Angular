import { Component, input } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { MatIconModule } from "@angular/material/icon";
import { ButtonIconComponent } from '../shared/button-icon/button-icon.component';

@Component({
  selector: 'app-project-cards',
  imports: [
    TranslocoPipe,
    MatIconModule,
    ButtonIconComponent
],
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.scss'
})
export class ProjectCardsComponent extends BaseComponent{
  title = input.required<string>();
  description = input.required<string>();
  githubLink = input.required<string>();
  deployedLink = input.required<string>();
  projectImage = input.required<string>();
  altText = input.required<string>();

  onGitHubClicked() {
    window.open(this.githubLink(), "_blank");
  }
  
  onDeployedLinkClicked() {
    window.open(this.deployedLink(), "_blank");
  }
}
