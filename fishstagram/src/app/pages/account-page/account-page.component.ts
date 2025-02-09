import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Publication } from '@common/publication'
import { CommunicationService } from '../../services/communication.service';
import { MatListModule } from '@angular/material/list';
import { User } from '@common/user';
import { Dataset } from '@common/dataset';
import { Toolbar } from "../../components/toolbar";
import { DatasetTableComponent } from "../../components/data-set-table/data-set-table.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule, MatCardModule, DatePipe, MatListModule, Toolbar, DatasetTableComponent, MatProgressBarModule],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})

export class AccountPageComponent {
  constructor(private communicationService: CommunicationService) { }
  currentScreen: string = 'Publications';
  isScientist: boolean = sessionStorage.getItem('isScientist') as unknown as boolean;
  username: string = sessionStorage.getItem('username') as string;
  rank: number = 1;
  publications: Publication[] = [];
  leaderboard: User[] = [];
  datasets: Dataset[] = [];

  incRank() {
    this.rank++;
  }

  ngOnInit() {
    this.communicationService.getAllUsers().subscribe({
      next: (response) => {
        this.leaderboard = response.sort((a, b) => b.level - a.level);
      }
    });
    this.communicationService.getPublicationsByUser(this.username).subscribe({
      next: (response) => {
        this.publications = response;
      }
    });
    if (this.isScientist) {
      this.communicationService.getDatasetsByUser(this.username).subscribe({
        next: (response) => {
          this.datasets = response;
        }
      });
    }
  }

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }

  isYourUser(username: String): boolean {
    if(username === sessionStorage.getItem('username')) return true;
    return false
  }
}