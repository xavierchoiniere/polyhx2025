
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@common/user'

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private readonly apiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.http.post<User>('${this.apiUrl}/signup', user);
  }

}
