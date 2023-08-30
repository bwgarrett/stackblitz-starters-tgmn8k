import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="true">hello</div>
  `,
})
export class SecondComponentInThisFile {
  name = 'Angular';
}

bootstrapApplication(App);
