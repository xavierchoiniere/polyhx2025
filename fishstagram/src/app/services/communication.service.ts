
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError  } from 'rxjs';
import { User } from '@common/user'

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private readonly apiUrl: string = 'http://localhost:4200/api';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/signup`, user);
  }
  
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/login`, { username, password });
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/account/${username}`);
  }

}
