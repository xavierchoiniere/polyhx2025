import { Component } from '@angular/core';
import { Toolbar } from "../../components/toolbar";
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Fish } from '@common/fish';

@Component({
  selector: 'app-stats-main-page',
  imports: [Toolbar, FormsModule],
  templateUrl: './stats-main-page.component.html',
  styleUrl: './stats-main-page.component.css'
})
export class StatsMainPageComponent {
  constructor(private router: Router) {}
  speciesFilter: string = '';
  latitude: number = 0;
  longitude: number = 0;
  radius: number = 0;
  startDate: Date = new Date();
  endDate: Date = new Date();
  fishResults: Fish[] = [];
  openCreation(){
    this.router.navigate(['/creation-stats']);
  }

  search(){
    if(this.speciesFilter || (this.latitude && this.longitude && this.radius) || (this.startDate && this.endDate)){

    }
  }
}
