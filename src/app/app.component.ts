import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WelcomePageComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
