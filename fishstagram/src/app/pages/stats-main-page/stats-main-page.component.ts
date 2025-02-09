import { Component } from '@angular/core';
import { Toolbar } from "../../components/toolbar";
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-stats-main-page',
  imports: [Toolbar, FormsModule],
  templateUrl: './stats-main-page.component.html',
  styleUrl: './stats-main-page.component.css'
})
export class StatsMainPageComponent {
  searchQuery = '';
  selectedFilter = '';
}
