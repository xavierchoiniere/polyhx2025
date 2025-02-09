import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  imports: [MatFormFieldModule, FormsModule, MatLabel, MatDialogModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  description: string = '';
  title: string = '';

  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  onSave(): void {
    this.dialogRef.close({ title: this.title, description: this.description });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
