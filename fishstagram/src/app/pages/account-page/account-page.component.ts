import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { Publication } from '@common/publication'
import { Fish } from '@common/fish'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-account-page',
  imports: [MatIconModule, MatButtonToggleModule, MatCardModule, DatePipe],
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})

export class AccountPageComponent {
  currentScreen: string = 'posts'; 
  isScientist: boolean = false; 

  fish: Fish = {
    _id: 'fish1',
    species: 'Salmon',
    weight: 5.2,
    length: 75,
    location: { latitude: 47.6062, longitude: -122.3321 }, // Example location
    imageUrl: 'https://example.com/salmon.jpg',
    date: new Date('2023-10-01')
  };
  
  publications: Publication[] = [
    {
      _id: '2',
      username: 'angler99',
      data: {
        _id: 'fish2',
        species: 'Trout',
        weight: 3.8,
        length: 50,
        location: { latitude: 48.8566, longitude: 2.3522 }, // Example location
        imageUrl: 'https://example.com/trout.jpg',
        date: new Date('2023-09-25')
      },
      caption: 'Another great day by the river!',
      likes: 15
    },
    {
      _id: '3',
      username: 'bassmaster',
      data: {
        _id: 'fish3',
        species: 'Bass',
        weight: 4.5,
        length: 60,
        location: { latitude: 34.0522, longitude: -118.2437 }, // Example location
        imageUrl: 'https://example.com/bass.jpg',
        date: new Date('2023-09-30')
      },
      caption: 'Biggest catch of the season!',
      likes: 20
    }
  ];

  onToggleChange(event: any) {
    this.currentScreen = event.value;
  }
}