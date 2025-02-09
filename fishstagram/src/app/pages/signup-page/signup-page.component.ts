import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import {User} from '@common/user'
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  user: User = {username: '', email: '', password: '', isScientist: false, level: 0}
  constructor(private router: Router, private communicationService: CommunicationService, private snackBar: MatSnackBar) {}
  createAccount(){
    this.communicationService.signup(this.user).subscribe
    ({next: ()=>  {this.router.navigate(['/feed']);},
      error: (errorHttp: HttpErrorResponse)=> this.snackBar.open(errorHttp.message, 'Close', {duration:3000})});
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
