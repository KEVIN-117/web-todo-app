import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MainComponent} from "../../shared/main/main.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MainComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
