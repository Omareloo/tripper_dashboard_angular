import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../models/reservation';
import { ReservationTable } from '../../components/reservation-table/reservation-table';
import { ReservationModal } from '../../components/reservation-modal/reservation-modal';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, ReservationTable, ReservationModal],
  templateUrl: './reservations.html',
  styleUrl: './reservations.css'
})
export class Reservations {
  reservations: Reservation[] = [
    {
      id: '1',
      guestName: 'Ahmed Hassan',
      guestEmail: 'ahmed@example.com',
      hotelName: 'Grand Palace Hotel',
      checkIn: '2025-10-01',
      checkOut: '2025-10-05',
      totalPrice: 1500,
      guestsCount: 2,
      status: 'confirmed'
    },
    {
      id: '2',
      guestName: 'Sara Ali',
      guestEmail: 'sara@example.com',
      experienceName: 'Nile Boat Tour',
      checkIn: '2025-11-10',
      checkOut: '2025-11-10',
      totalPrice: 500,
      guestsCount: 3,
      status: 'pending'
    },
    {
      id: '3',
      guestName: 'Omar Hossam',
      guestEmail: 'omar@example.com',
      hotelName: 'Desert Sands Resort',
      checkIn: '2025-11-12',
      checkOut: '2025-11-15',
      totalPrice: 2000,
      guestsCount: 4,
      status: 'completed'
    }
  ];

  selectedReservation: Reservation | null = null;

  openReservationDetails(reservation: Reservation) {
    this.selectedReservation = reservation;
  }

  closeReservationDetails() {
    this.selectedReservation = null;
  }

  deleteReservation(reservation: Reservation) {
    this.reservations = this.reservations.filter(r => r.id !== reservation.id);
  }
}
