import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./pages/home/shared/header/header.component";
import {FooterComponent} from "./pages/home/shared/footer/footer.component";
import {CotextServiceService} from "./services/cotext-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  themeContext: CotextServiceService;
  constructor(themeContext: CotextServiceService) {
    this.themeContext = themeContext;
  }
}
