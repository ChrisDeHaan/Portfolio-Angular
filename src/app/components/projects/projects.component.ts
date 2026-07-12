import { Component } from '@angular/core';
import { ProjectCardsComponent } from '../project-cards/project-cards.component';
import { BaseComponent } from '@app/abstracts/base.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardsComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent extends BaseComponent {}
