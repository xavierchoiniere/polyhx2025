import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-post-page',
  imports: [FormsModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {
  location: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  constructor(private communcationService: CommunicationService) {}  // Inject ApiService

  isImage(): boolean {
    return this.imageUrl !== null;
  }
  previewImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log('File read successfully:', e.target.result);
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

    // Call the postData method from ApiService
    this.communcationService.postPublishData(this.location, this.imageUrl).subscribe({
      next: (response) => {
        console.log('Data posted successfully:', response);
        alert('Post successful!');
      },
      error: (error) => {
        console.error('Error occurred while posting data:', error);
        alert('An error occurred while posting data. Please try again.');
      },
    });
  }
}
