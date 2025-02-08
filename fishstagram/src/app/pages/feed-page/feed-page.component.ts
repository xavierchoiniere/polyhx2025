import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-page',
  imports: [],
  templateUrl: './feed-page.component.html',
  styleUrl: './feed-page.component.css'
})
export class FeedPageComponent {
    constructor(private router: Router) {}
  openPost(){
    this.router.navigate(['/post']);
  }
}
