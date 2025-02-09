import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user = '';
  password = '';
  constructor(private router: Router) {}
  connect(){
    //check if password is good (server side check)
    this.router.navigate(['/feed']);
  }
  signUp(){
    this.router.navigate(['/signup']);
  }
  focusPassword() {
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
    if (passwordInput) {
        passwordInput.focus();
    }
  }
}
