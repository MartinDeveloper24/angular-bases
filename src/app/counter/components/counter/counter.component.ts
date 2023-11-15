import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter }}</h2>
    <button (click)="updateCounterBy( +1 )">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="updateCounterBy( -1 )">-1</button>
  `
})

export class CounterComponent {
  title: string = 'Counter';
  counter: number = 10;

  constructor() {}

  updateCounterBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

}
