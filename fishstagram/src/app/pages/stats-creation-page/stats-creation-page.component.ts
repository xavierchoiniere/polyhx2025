import { Component } from '@angular/core';
import { FishTableComponent } from "../../components/fish-table/fish-table.component";

@Component({
  selector: 'app-stats-creation-page',
  imports: [FishTableComponent],
  templateUrl: './stats-creation-page.component.html',
  styleUrl: './stats-creation-page.component.css'
})
export class StatsCreationPageComponent {
datasets: any;

}
