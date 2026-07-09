import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';
import { HeaderComponent } from '../header/header';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslocoPipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    this.showComponent.set(true);
  }
}
