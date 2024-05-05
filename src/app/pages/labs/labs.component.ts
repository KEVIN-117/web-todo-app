import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";
import {CotextServiceService} from "../../services/cotext-service.service";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  protected readonly RouterOutlet = RouterOutlet;
  constructor(private themeContext: CotextServiceService) {
  }
  toggleTheme() {
    const currentTheme = this.themeContext.getTheme();
    if (currentTheme === 'light') {
      this.themeContext.setDarkTheme();
    } else {
      this.themeContext.setLightTheme();
    }
  }
}
