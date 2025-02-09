import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Fish } from '@common/fish';

export interface FishData {
  species: string;
  date: string;
  latitude: number;
  longitude: number;
}

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
  @Input() fishResults: Fish[] = [];
  transformFishResultsToFishData(): FishData[] {
    const fishData: FishData[] = [];

    for (const fish of this.fishResults) {
      const data: FishData = {
        species: fish.species as string,
        date: fish.date.toString(),
        latitude: fish.latitude,
        longitude: fish.longitude,
      };

      fishData.push(data);
    }

    return fishData;
  }
  displayedColumns: string[] = ['species', 'date', 'latitude', 'longitude'];
  dataSource = new MatTableDataSource<FishData>(this.transformFishResultsToFishData());

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fishResults'] && this.fishResults) {
      this.dataSource.data = this.transformFishResultsToFishData();
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
