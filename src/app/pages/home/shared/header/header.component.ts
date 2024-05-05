import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CotextServiceService} from "../../../../services/cotext-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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
