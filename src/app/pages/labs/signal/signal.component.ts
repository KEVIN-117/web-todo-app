import {Component, signal} from '@angular/core';
@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  counter = signal<number>(0);
  private _counter = 0;
  increment() {
    this.counter.set(this.counter() + 1)
  }

  decrement() {
    this.counter.set(this.counter() - 1)
  }

  reset() {
    this.counter.set(0)
  }

  getCounter() {
    return this.counter()
  }


  increment_Counter() {
    this._counter++
  }

  decrement_Counter() {
    this._counter--
  }

  reset_Counter() {
    this._counter = 0
  }

  getCounter_Counter() {
    return this._counter
  }

}
