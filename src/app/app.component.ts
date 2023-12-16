import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This selector is used in index.html
  templateUrl: './app.component.html', // Path to the HTML template
  styleUrls: ['./app.component.scss'] // Path to the styles (if you have any)
})
export class AppComponent {
  rainIntensity = 50; // Default value for the rain intensity
}


