import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BaseComponent } from '@app/abstracts/base.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-accordion-group',
  imports: [
    MatExpansionModule,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    TranslocoPipe,
    MatIcon
],
  templateUrl: './accordion-group.component.html',
  styleUrl: './accordion-group.component.scss'
})
export class AccordionGroupComponent extends BaseComponent {}
