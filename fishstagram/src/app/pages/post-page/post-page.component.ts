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
  constructor(private communcationService: CommunicationService, private snackBar: MatSnackBar,) {}

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
        alert('An error occurred while reading the file. Please try again.');
      };
    }
    else { alert('No file selected. Please choose an image file.'); }
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
          alert('Could not retrieve location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  post() {
    if (!this.location) {
      alert('Location is required.');
      return;
    }
  }
}
