import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@common/user';
import { Publication } from '@common/publication';
import { Fish } from '@common/fish';
import { Dataset } from '@common/dataset';

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

  getDatasetsByUser(username: string): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(`${this.apiUrl}/datasets/${username}`);
  }

  addPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(`${this.apiUrl}/publications`, publication);
  }

  createFish(fish: Fish): Observable<Fish>{
    return this.http.post<Fish>(`${this.apiUrl}/fish/create`, fish)
  }

  getSpeciesAI(longitude:number,latitude:number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/ai`,  {longitude,latitude})
  }
}
