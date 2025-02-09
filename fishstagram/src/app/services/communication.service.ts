import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@common/user';
import { Publication } from '@common/publication';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private readonly apiUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/signup`, user);
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/login`, {
      username,
      password,
    });
  }
  
  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/publications`);
  }
  getPublicationsByUser(username: string): Observable<Publication[]> {
    return this.http.get<Publication[]>(`${this.apiUrl}/publications/user/${username}`);
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${username}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(`${this.apiUrl}/publications`, publication);
  }
}
