import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'web-todo-app';
  name = 'Alguien';
  persons = ['Alguien', 'Otro', 'Otro más']
}
