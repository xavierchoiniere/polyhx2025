import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Publication } from '@common/publication'
import { CommunicationService } from '../../services/communication.service';
import { MatListModule } from '@angular/material/list';
import { User } from '@common/user';

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule, MatCardModule, DatePipe, MatListModule],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})

export class AccountPageComponent {
  constructor(private communicationService: CommunicationService) {}
  currentScreen: string = 'Publications'; 
  isScientist: boolean = sessionStorage.getItem('isScientist') as unknown as boolean;
  rank: number = 1;

  publications: Publication[] = [];
  leaderboard: User[] = [];

  ngOnInit() {
    this.communicationService.getAllUsers().subscribe({
      next: (response) => {
        this.leaderboard = response;
      }
    });  
    this.communicationService.getPublicationsByUser(sessionStorage.getItem('username') as string).subscribe({
      next: (response) => {
        this.publications = response;
      }});
  
  }

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }
}