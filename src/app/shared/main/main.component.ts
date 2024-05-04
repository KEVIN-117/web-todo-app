import { Component } from '@angular/core';
import {CotextServiceService} from "../../services/cotext-service.service";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private themeContext:CotextServiceService) {
  }
}
