import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BaseComponent } from '@app/abstracts/base.component';
import { AboutMeComponent } from "../about-me/about-me.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-tab-group',
  imports: [
    MatTabsModule,
    MatIconModule,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    TranslocoPipe
],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss'
})
export class TabGroupComponent extends BaseComponent {

}
