import { Component } from '@angular/core';
import { LoginForms } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: LoginForms = {
    email: '',
    password: '',
  };
  constructor(private authService: AuthService) {}
  submit() {
    this.authService.login(this.form);
    console.log(this.form);
  }
}
