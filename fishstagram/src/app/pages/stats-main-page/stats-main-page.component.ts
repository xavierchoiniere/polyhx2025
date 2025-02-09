import { Component } from '@angular/core';
import { Toolbar } from "../../components/toolbar";
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats-main-page',
  imports: [Toolbar, FormsModule],
  templateUrl: './stats-main-page.component.html',
  styleUrl: './stats-main-page.component.css'
})
export class StatsMainPageComponent {
  constructor(private router: Router) {}
  searchQuery = '';

  openCreation(){
    this.router.navigate(['/creation-stats']);
  }
}
