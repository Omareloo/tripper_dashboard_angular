import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private http: HttpService) {}

  // Get all places
  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>('places');
  }

  // Get place by ID
  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`places/${id}`);
  }

  // Create new place
  createPlace(formData: FormData): Observable<any> {
    return this.http.post<any>('places', formData);
  }

  // Update place
  updatePlace(id: string, formData: FormData): Observable<any> {
    return this.http.put<any>(`places/${id}`, formData);
  }

  // Delete place
  deletePlace(id: string): Observable<any> {
    return this.http.delete<any>(`places/${id}`);
  }
}
