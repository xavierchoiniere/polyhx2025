import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  user = '';
  password = '';
  constructor(private router: Router, private communicationService: CommunicationService) {}
  connect(){
    this.communicationService.login(this.user, this.password).subscribe(
      {next: (response)=> {if (response){
        this.router.navigate(['/feed']);}
        else alert('Wrong password');
      }})

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
