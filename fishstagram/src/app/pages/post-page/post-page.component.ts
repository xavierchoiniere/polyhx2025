import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from '../../services/communication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-page',
  imports: [FormsModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  location: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private communcationService: CommunicationService, private snackBar: MatSnackBar) {}

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
          this.location = `Latitude: ${latitude}, Longitude: ${longitude}`;
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
    if (!this.location) {
      this.snackBar.open('Location is required.','Close',{duration:3000});
      return;
    }
  }
}
