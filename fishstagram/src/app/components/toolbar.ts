import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.html',
    styleUrl: 'toolbar.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  })
  export class Toolbar {

    isScientist: boolean = sessionStorage.getItem('isScientist') as unknown as boolean;
    userName: string = " " + sessionStorage.getItem('username') as string;
  
    ngOnInit(): void {
      const storedValue = sessionStorage.getItem('isScientist');
      this.isScientist = storedValue === 'true';
  
      console.log('isScientist:', this.isScientist);
    }
    constructor(private router: Router) {}
      
    openPost(){
      this.router.navigate(['/post']);
    }
    openStats(){
      this.router.navigate(['/main-stats']);
    }
    openAccount(){
      this.router.navigate(['/account']);
    }
    openFeed(){
      this.router.navigate(['/feed']);
    }

    logout(){
      localStorage.removeItem('loginTime');
      this.router.navigate(['/login']);
    }
  }