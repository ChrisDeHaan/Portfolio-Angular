import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TranslocoPipe } from '@jsverse/transloco';
import { BaseComponent } from './abstracts/base.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TranslocoPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App extends BaseComponent implements OnInit {
  ngOnInit(): void {
    if (this.themeService.isSystemDark) {
      this.themeService.replaceLightmode();
    } 

    this.breakpointService.startBreakpointInterceptor();
  }
}
