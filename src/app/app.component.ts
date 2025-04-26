import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Schwent Detailing, LLC';
  primaryLogoURL = 'https://storage.googleapis.com/sdlcc-assets/primaryLogo-1650.png';
}