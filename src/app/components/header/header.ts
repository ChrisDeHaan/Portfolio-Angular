import { Component, DOCUMENT, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  doc = inject(DOCUMENT);

  ngOnInit(): void {
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (darkModePreference) {
      this._replaceLightmode();
    }
  }

  onClick() {
    const lightMode = this.doc.body.classList.contains("lightmode");
    lightMode ? this._replaceLightmode() : this._replaceDarkmode();
    if (lightMode) {
      this.doc.body.classList.replace("lightmode", "darkmode");
    } else {
      this.doc.body.classList.replace("darkmode", "lightmode");
    }
  }

  private _replaceLightmode() {
    this.doc.body.classList.replace("lightmode", "darkmode");
  }

  private _replaceDarkmode() {
      this.doc.body.classList.replace("darkmode", "lightmode");
  }
}
