import { Component } from '@angular/core';
import { LanguagePickerComponent, NavbarComponent, SocialBannerComponent } from "../../common";

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [LanguagePickerComponent, NavbarComponent, SocialBannerComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {

}
