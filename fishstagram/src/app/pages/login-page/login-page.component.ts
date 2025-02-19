import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  username = '';
  password = '';
  constructor(
    private router: Router,
    private communicationService: CommunicationService,
    private snackBar: MatSnackBar
  ) {}

  connect() {
    this.communicationService.login(this.username, this.password).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/feed']);
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('isScientist', response.isScientist.toString());
          localStorage.setItem('loginTime', Date.now().toString());
        } else {
          this.snackBar.open('Wrong username or password.', 'Close', { duration: 3000 });
        }
      },
      error: (error) => {
        this.snackBar.open('Login failed.', 'Close', { duration: 3000 });
      },
    });
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  focusPassword() {
    const passwordInput = document.querySelector(
      'input[type="password"]'
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.focus();
    }
  }
}
