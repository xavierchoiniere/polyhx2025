import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Publication } from '@common/publication'
import { CommunicationService } from '../../services/communication.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule, MatCardModule, DatePipe, MatListModule],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})

export class AccountPageComponent {
  constructor(private communicationService: CommunicationService) {}
  currentScreen: string = 'Publications'; 
  isScientist: boolean = true; 

  publications: Publication[] = [];
  leaderboard = [
    { id: 1, icon: 'https://example.com/icon1.png', name: 'User One', level: 10 },
    { id: 2, icon: 'https://example.com/icon2.png', name: 'User Two', level: 8 },
    { id: 3, icon: 'https://example.com/icon3.png', name: 'User Three', level: 7 },
  ];

  ngOnInit() {
    this.communicationService.getPublicationsByUser(sessionStorage.getItem('username') as string).subscribe({
      next: (response) => {
        this.publications = response;
      }});
  }

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }
}