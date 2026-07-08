import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { TranslocoPipe } from '@jsverse/transloco';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TranslocoPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  themeService = inject(ThemeService);

  ngOnInit(): void {
    if (this.themeService.isSystemDark) {
      this.themeService.replaceLightmode();
    } 
  }
}
