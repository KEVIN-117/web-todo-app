import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  users: { name: string, email: string }[] = [
    { name: 'John Doe', email: 'alguien@example.com' },
    { name: 'Jane Doe', email: '' },
  ]

  counter = signal(0)

  increment() {
    this.counter.set(this.counter() + 1)
  }

  decrement() {
    this.counter.set(this.counter() - 1)
  }


}
