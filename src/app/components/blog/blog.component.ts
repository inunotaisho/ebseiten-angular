import { Component } from '@angular/core';
import { NavbarComponent, LanguagePickerComponent } from '../../common';

@Component({
  selector: 'app-blog',
  standalone: true,
    imports: [
    NavbarComponent,
    LanguagePickerComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
