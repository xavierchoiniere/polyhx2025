import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { Dataset } from '@common/dataset';


@Component({
  selector: 'app-dataset-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './data-set-table.component.html',
  styleUrls: ['./data-set-table.component.css']
})
export class DatasetTableComponent implements OnInit {
  @Input() datasetResults: Dataset[] = [];

  displayedColumns: string[] = ['title', 'description', 'count'];

  dataSource = new MatTableDataSource<Dataset>(this.datasetResults);

  ngOnInit(): void {
    this.dataSource.data = this.datasetResults;
  }

  getCount(values: number[]): number {
    return values.length;
  }
}
