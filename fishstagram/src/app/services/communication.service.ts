// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private apiUrl = 'https://example.com/api';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Method to get data from API
//   getData(endpoint: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${endpoint}`);
//   }

  // Method to post data to API
  postPublishData(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${endpoint}`, data);
  }
}
