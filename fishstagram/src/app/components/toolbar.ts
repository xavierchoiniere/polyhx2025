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
    constructor(private router: Router) {}
      
    openPost(){
      this.router.navigate(['/post']);
    }
    openAccount(){
      this.router.navigate(['/account']);
    }
  }