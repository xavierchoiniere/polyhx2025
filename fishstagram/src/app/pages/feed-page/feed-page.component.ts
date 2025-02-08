import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Publication } from '@common/publication'
import { Fish } from '@common/fish'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feed-page',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, DatePipe],
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.css'
})
export class FeedPageComponent {
  constructor(private router: Router) {}

  publications: Publication[] = []; //get list from DB
  openPost(){
    this.router.navigate(['/post']);
  }
  openAccount(){
    this.router.navigate(['/account']);
  }
}
