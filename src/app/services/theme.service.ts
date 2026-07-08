import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  doc = inject(DOCUMENT);

  replaceLightmode() {
    this.doc.body.classList.replace("lightmode", "darkmode");
  }

  replaceDarkmode() {
      this.doc.body.classList.replace("darkmode", "lightmode");
  }

  get isSystemDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  get isLightMode() {
    return this.doc.body.classList.contains("lightmode");
  }
}
