import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from '../../services/communication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Fish } from '@common/fish';

@Component({
  selector: 'app-post-page',
  imports: [FormsModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  locationInput: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  caption: string = '';
  fishData: Fish = {species: '', weight: 0, length: 0, location: {latitude: 0, longitude: 0}, imageUrl: '', date: new Date()}
  constructor(private communicationService: CommunicationService, private snackBar: MatSnackBar) {}

  isImage(): boolean {
    return this.imageUrl !== null;
  }
  previewImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      reader.onerror = (error) => {
        this.snackBar.open('An error occurred while reading the file. Please try again.', 'Close', {duration:3000});
      };
    }
    else { this.snackBar.open('No file selected. Please choose an image file.', 'Close', {duration:3000}); }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.locationInput = `Latitude: ${latitude}, Longitude: ${longitude}`;
          this.fishData.location.latitude = latitude;
          this.fishData.location.longitude = longitude;
        },
        (error) => {
          this.snackBar.open('Could not retrieve location.', 'Close', {duration:3000});
        }
      );
    } else {
      this.snackBar.open('Geolocation is not supported by this browser.', 'Close',{duration:3000});
    }
  }

  post() {
    if (!this.locationInput) {
      this.snackBar.open('Location is required.','Close',{duration:3000});
      return;
    }
    if (!this.caption) {
      this.snackBar.open('Caption is required.','Close',{duration:3000});
      return;
    }
    if (!this.imageUrl) {
      this.snackBar.open('Image is required.','Close',{duration:3000});
      return;
    }
    const newUsername = sessionStorage.getItem('username') as string;
    const newFishData = {... this.fishData, date: new Date(), imageUrl: this.imageUrl as string};
    this.communicationService.addPublication({ username: newUsername, data: newFishData, caption: this.caption }).subscribe();
    this.communicationService.createFish(newFishData).subscribe();
  }
}
