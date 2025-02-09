import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import {User} from '@common/user'
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupVerificationService } from '../../services/signup-verification.service';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  user: User = {username: '', email: '', password: '', isScientist: false, level: 0}
  constructor( private signUpService: SignupVerificationService, private snackBar: MatSnackBar) {}
  createAccount(){
    const username = this.user.username.trim();
    if(this.signUpService.checkUsernameExistence(username)){
      this.snackBar.open('Username already in use, please try another one.', 'Close', {duration:3000})
      return;
    }
    if (!this.signUpService.verifyUsername(username)){
      this.snackBar.open('Username is invalid, please try another one.', 'Close', {duration:3000})
      return;
    }
    if (!this.signUpService.verifyPassword(this.user.password)){
      this.snackBar.open('Password is too short, have at least 8 characters.', 'Close', {duration:3000})
      return;
    }
    if (!this.signUpService.verifyEmail(this.user.email as string)){
      this.snackBar.open('Email is invalid.', 'Close', {duration:3000})
      return;
    }
    this.signUpService.createAccount(this.user);
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
