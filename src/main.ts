import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    // uncomment the next line to see the Angular Language Service
    // warning in the SecondComponentInThisFile go away.
    // NgIf
  ],
  template: `my-app`,
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
