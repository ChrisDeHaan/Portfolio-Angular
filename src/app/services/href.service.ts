import { DOCUMENT, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrefService {
  doc = inject(DOCUMENT);

  openWindow(url: string, target = "_blank") {
    const window = this.doc.defaultView;

    if (window) {
      window.open(url, target);
    }
  }
}
