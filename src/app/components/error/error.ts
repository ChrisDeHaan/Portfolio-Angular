import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  template: ''
})
export class Error implements OnInit {
  private _router = inject(Router)

  ngOnInit(): void {
    this._router.navigate([''])
  }
}
