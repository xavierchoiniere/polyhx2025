import { Injectable } from '@angular/core';
import { CommunicationService } from './communication.service';
import { User } from '@common/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupVerificationService {

  constructor( private communicationService: CommunicationService, private router: Router, private snackBar: MatSnackBar) { }
  createAccount(user: User){
      this.communicationService.signup(user).subscribe
      ({next: ()=>  {this.router.navigate(['/feed']);},
        error: (errorHttp: HttpErrorResponse)=> this.snackBar.open(errorHttp.message, 'Close', {duration:3000})});
  }
  checkUsernameExistence(username: string): boolean{
    let returnedValue = false;
        this.communicationService.getUser(username).subscribe({
            next: (account) => {
                if (account) returnedValue = true;
            },
            error: (error) => {
                if (error.status === 404) returnedValue = false;
            },
        });
        return returnedValue;
  }
  verifyPassword(password: String): boolean {
    if (password && password.length > 7) return true;
    return false;
  }
  verifyEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && emailRegex.test(email)) return true;
    return false;
  }
  verifyUsername(username: string): boolean {
    if (username && username !== 'System') return true;
    return false;
  }
}
