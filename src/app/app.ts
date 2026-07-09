import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './abstracts/base.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
