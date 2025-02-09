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
import { Dataset } from '@common/dataset';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stats-main-page',
  imports: [Toolbar, FormsModule, FishTableComponent, MatDialogModule],
  templateUrl: './stats-main-page.component.html',
  styleUrl: './stats-main-page.component.css'
})
export class StatsMainPageComponent {
  constructor(private router: Router, private communicationService: CommunicationService, private dialog: MatDialog, private snackBar: MatSnackBar) {}
  speciesFilter: string[] = [];
  speciesFilterInput: string = '';
  latitude: number = 0;
  longitude: number = 0;
  radius: number = 0;
  startDate: Date | undefined;
  endDate: Date | undefined;
  fishResults: Fish[] = [];
  dataset: Dataset = {username: '', title: '', description: '', data: this.fishResults};
  openCreation(){
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { title, description } = result;
        this.dataset.description = result.description;
        this.dataset.title = result.title;
        this.dataset.data = this.fishResults;
        this.dataset.username = sessionStorage.getItem('username') as string;
        this.communicationService.saveDataset(this.dataset).subscribe({
          next: () => {this.snackBar.open('Dataset created successfully.', 'Close', { duration: 3000 });}});
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

  download() {
    const header = ['Species', 'Date', 'Latitude', 'Longitude'];
    
    const rows = this.fishResults.map(fish => [
      fish.species, 
      fish.date ? fish.date.toString() : '',
      fish.latitude, 
      fish.longitude
    ]);
  
    const csvContent = [
      header.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const filename = 'fish_data.csv';
      link.setAttribute('href', URL.createObjectURL(blob));
      link.setAttribute('download', filename);
      link.click();
    }
  }
  
}
