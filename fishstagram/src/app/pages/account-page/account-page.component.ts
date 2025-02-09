import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})
export class AccountPageComponent {
  currentScreen: string = 'posts'; 
  isScientist: boolean = false; 

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }
}