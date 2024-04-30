import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForms } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  Users: any[] = [
    {
      email: 'phuoc@gmail.com',
      password: '123456789',
    },
  ];

  constructor(private router: Router) {}

  login(form: LoginForms) {
    if (
      form.email === this.Users[0].email &&
      form.password === this.Users[0].password
    ) {
      this.isAuthenticated = true;
      this.router.navigate(['']);
      alert('Login successful');
    } else {
      alert('Login not successful');
      this.isAuthenticated = false;
    }
  }
}
