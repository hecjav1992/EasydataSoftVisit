import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadMapService {
  private apiUrl = 'https://localhost:7071/api/LoadMap';
  
  constructor(private http: HttpClient) { }
  getItems2(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
