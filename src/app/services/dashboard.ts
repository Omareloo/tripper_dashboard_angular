import { Dashboard } from './../pages/dashboard/dashboard';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Experience } from '../models/experience';
import { Place } from '../models/place';
import { User } from '../models/user';
import { Reservation } from '../models/reservation';
import { map, Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpService) {}

  getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>('user');
}

  getAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>('places');
  }
  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('hotel');
  }

  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>('experience');
  } 

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<any[]>('api/reservations').pipe(
      map((data) =>
        data.map((r) => ({
          id: r._id,
          guestName: r.guestId?.name || 'Unknown',
          guestEmail: r.guestId?.email || '',
          hotelName: r.hotelId?.name || undefined,
          experienceName: r.experienceId?.name || undefined,
          checkIn: this.formatDate(r.checkIn),
          checkOut: r.checkOut ? this.formatDate(r.checkOut) : '-',
          totalPrice: r.totalPrice,
          guestsCount: r.guestsCount,
          status: r.status,
        }))
      )
    );
  }
  private formatDate(dateStr: string): string {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
}
