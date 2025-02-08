import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  username = '';
  email = '';
  password = '';
  isScientist = false;
  constructor(private router: Router) {}
  createAccount(){
    //call post to server with user interface created from the strings
    this.router.navigate(['/feed']);
  }
  focusEmail() {
    const passwordInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (passwordInput) {
        passwordInput.focus();
    }
  }
  focusPassword() {
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
    if (passwordInput) {
        passwordInput.focus();
    }
  }
}
