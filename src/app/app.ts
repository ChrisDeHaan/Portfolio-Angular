import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TranslocoPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
