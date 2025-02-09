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
    return this.http.get<Publication[]>(
      `${this.apiUrl}/publications/user/${username}`
    );
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
    return this.http.post<Publication>(
      `${this.apiUrl}/publications`,
      publication
    );
  }

  saveDataset(dataset: Dataset): Observable<Dataset> {
    return this.http.post<Dataset>(`${this.apiUrl}/datasets`, dataset);
  }

  createFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(`${this.apiUrl}/fish/create`, fish);
  }

  updateUserLevel(username: string, level: number): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${username}/level`, {
      level,
    });
  }

  searchFish(
    species?: string[],
    longitude?: number,
    latitude?: number,
    radius?: number,
    startDate?: Date,
    endDate?: Date
  ): Observable<Fish[]> {
    let params: any = {};
    if (species) params.species = species;
    if (longitude) params.longitude = longitude;
    if (latitude) params.latitude = latitude;
    if (radius) params.radius = radius;
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

    return this.http.get<Fish[]>(`${this.apiUrl}/fish/search`, { params });
  }

  getSpeciesAI(longitude:number,latitude:number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/ai`,  {longitude,latitude})
  }
}
