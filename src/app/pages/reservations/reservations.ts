import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../models/reservation';
import { ReservationTable } from '../../components/reservation-table/reservation-table';
import { ReservationModal } from '../../components/reservation-modal/reservation-modal';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReservationTable, ReservationModal],
  templateUrl: './reservations.html',
  styleUrl: './reservations.css',
})
export class Reservations implements OnInit {
  reservations: Reservation[] = [];
  selectedReservation: Reservation | null = null;

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAllReservations().subscribe({
      next: (data) => (this.reservations = data),
      error: (err) => console.error('Error fetching reservations:', err),
    });
  }

  openReservationDetails(reservation: Reservation) {
    this.selectedReservation = reservation;
  }

  closeReservationDetails() {
    this.selectedReservation = null;
  }
}
