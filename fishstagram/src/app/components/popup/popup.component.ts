import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  imports: [MatFormField, FormsModule, MatLabel, MatDialogModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  username: string = '';
  title: string = '';

  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  onSave(): void {
    this.dialogRef.close({ username: this.username, title: this.title });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
