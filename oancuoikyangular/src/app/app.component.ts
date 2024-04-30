import { Component,Input } from '@angular/core';
import { Products } from './products';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() productHome: Products[] = [];
  title = 'lab8_4';
  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout() {
    // this.authService.logout();
  }

  
}
