import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';
import { HeaderComponent } from '../header/header.component';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { FooterComponent } from '../footer/footer.component';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TabGroupComponent,
    FooterComponent,
    AccordionGroupComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    this.showComponent.set(true);
  }
}
