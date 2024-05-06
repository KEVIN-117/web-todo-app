import {Component, input} from '@angular/core';

@Component({
  selector: 'dashboard-page-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  private title = input<string>('Title');

  getTitle() {
    return this.title()
  }


}
