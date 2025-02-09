import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Publication } from '@common/publication'
import { Fish } from '@common/fish'
import { DatePipe } from '@angular/common';
import { CommunicationService } from '../../services/communication.service';
import { Toolbar } from "../../components/toolbar";

@Component({
  selector: 'app-feed-page',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, DatePipe, Toolbar],
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.css'
})
export class FeedPageComponent {
  constructor(private router: Router, private communicationService: CommunicationService) {}
  publications: Publication[] = [];
  ngOnInit(){
    this.communicationService.getAllPublications().subscribe({next: (response) => {this.publications = response}});
    this.publications.sort((a, b) => {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);
      return dateB.getTime() - dateA.getTime();
    });
  }

}
