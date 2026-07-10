import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseComponent } from '@app/abstracts/base.component';

@Component({
  selector: 'app-button-icon',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent extends BaseComponent {
  iconClass = input<string>('');
  set = input<string>('');
  icon = input<string>('');
  ariaLabel = input<string>('');
  clicked = output();

  onClick() {
    this.clicked.emit();
  }
}
