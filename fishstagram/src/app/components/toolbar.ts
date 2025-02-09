import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
    selector: 'toolbar',
    templateUrl: 'toolbar.html',
    styleUrl: 'toolbar.css',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  })
  export class Toolbar {

    isScientist: boolean = sessionStorage.getItem('isScientist') as unknown as boolean;
  
    
    ngOnInit(): void {
      const storedValue = sessionStorage.getItem('isScientist');
      this.isScientist = storedValue === 'true';
  
      console.log('isScientist:', this.isScientist);
    }
    constructor(private router: Router) {}
      
    openPost(){
      this.router.navigate(['/post']);
    }
    openAccount(){
      this.router.navigate(['/account']);
    }
    openFeed(){
      this.router.navigate(['/feed']);
    }
  }