import { Component } from '@angular/core';
import { Toolbar } from "../../components/toolbar";
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Fish } from '@common/fish';
import { FishTableComponent } from "../../components/fish-table/fish-table.component";
import { CommunicationService } from '../../services/communication.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';

@Component({
  selector: 'app-stats-main-page',
  imports: [Toolbar, FormsModule, FishTableComponent, MatDialogModule],
  templateUrl: './stats-main-page.component.html',
  styleUrl: './stats-main-page.component.css'
})
export class StatsMainPageComponent {
  constructor(private router: Router, private communicationService: CommunicationService, private dialog: MatDialog,) {}
  speciesFilter: string[] = [];
  speciesFilterInput: string = '';
  latitude: number = 0;
  longitude: number = 0;
  radius: number = 0;
  startDate: Date = new Date();
  endDate: Date = new Date();
  fishResults: Fish[] = [];
  openCreation(){
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { username, title } = result;
        this.communicationService.saveDataset(result).subscribe();
      }
    });
  }

  search(){
    if(this.speciesFilter.length || (this.latitude && this.longitude && this.radius) || (this.startDate && this.endDate)){
      this.communicationService.searchFish(this.speciesFilter, this.longitude, this.latitude, this.radius, this.startDate, this.endDate).subscribe(
        {next: (response) => {
        this.fishResults = response;}})
    }
  }

  onSpeciesInputChange() {
    this.speciesFilter = this.speciesFilterInput.split(' ').filter(species => species.trim().length > 0);
  }
}
