import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capstone-frontend';

  constructor(
    public auth: AuthService,
  ) {
  }

  onActivate(event) {
    // Perform required auth actions
    this.auth.load_jwts();
    this.auth.check_token_fragment();
  }
}
