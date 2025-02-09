import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const userLoggedIn = this.isUserLoggedIn();

    if (!userLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  private isUserLoggedIn(): boolean {
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
      const elapsedTime = Date.now() - parseInt(loginTime);
      return elapsedTime < 5 * 60 * 1000;
    }
    return false;
  }
}
