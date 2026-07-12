import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    this.showComponent.set(true);
  }
}
