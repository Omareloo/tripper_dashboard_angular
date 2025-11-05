import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Hotel } from '../models/hotel';

@Injectable({ providedIn: 'root' })
export class HotelService {
  constructor(private http: HttpService) {}

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('hotel');
  }

  getHotelById(id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`hotel/${id}`);
  }
}
