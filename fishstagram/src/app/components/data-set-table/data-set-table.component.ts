import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';

interface Dataset {
  name: string;
  date: string;
  values: number[]; // Array of values
}

const DATASETS: Dataset[] = [
  { name: 'Ocean Temperatures', date: '2024-02-09', values: [23.5, 24.1, 22.8, 25.0] },
  { name: 'River Salinity', date: '2024-02-08', values: [0.3, 0.5, 0.4] },
  { name: 'Lake pH Levels', date: '2024-02-07', values: [7.2, 7.4, 7.3, 7.1, 7.5] }
];

@Component({
  selector: 'app-dataset-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './data-set-table.component.html',
  styleUrls: ['./data-set-table.component.css']
})
export class DatasetTableComponent {
  displayedColumns: string[] = ['name', 'date', 'count'];
  dataSource = DATASETS;
}
