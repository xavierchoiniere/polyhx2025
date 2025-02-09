import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Publication } from '@common/publication'

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule, MatCardModule, DatePipe],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})

export class AccountPageComponent {
  currentScreen: string = 'Publications'; 
  isScientist: boolean = true; 

  

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }
}