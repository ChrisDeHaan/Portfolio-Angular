import { Component } from '@angular/core';
import { BaseComponent } from '@app/abstracts/base.component';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about-me',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent extends BaseComponent {
}
