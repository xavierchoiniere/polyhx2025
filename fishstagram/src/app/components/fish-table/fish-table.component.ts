import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

export interface FishData {
  species: string;
  date: string;
  latitude: number;
  longitude: number;
}

const FISH_DATA: FishData[] = [
  { species: 'Salmon', date: '2024-02-01', latitude: 48.858844, longitude: 2.294351 },
  { species: 'Tuna', date: '2024-02-02', latitude: 35.689487, longitude: 139.691706 },
  { species: 'Trout', date: '2024-02-03', latitude: -33.868820, longitude: 151.209290 },
  { species: 'Bass', date: '2024-02-04', latitude: 40.712776, longitude: -74.005974 }
];

@Component({
  selector: 'app-fish-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './fish-table.component.html',
  styleUrls: ['./fish-table.component.css']
})
export class FishTableComponent {
  displayedColumns: string[] = ['species', 'date', 'latitude', 'longitude'];
  dataSource = new MatTableDataSource<FishData>(FISH_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
