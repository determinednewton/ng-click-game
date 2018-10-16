import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number;
  result: string;

  constructor() {

  }

  start() {
    timer(1000, 4000).subscribe((n) => {
      this.number = n;
    });
  }

  isMatch(type) {
    let match = false;
    if (type === 'even') {
      match = (this.number % 2 === 0);
    } else if (type === 'odd') {
      match = (this.number % 2 === 1);
    }
    this.result = `${this.number} is ${type}: ` + (match ? 'success' : 'false');
  }
}
