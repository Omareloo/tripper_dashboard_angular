import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'app-reservation-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-table.html',
  styleUrls: ['./reservation-table.css']
})
export class ReservationTable {
  @Input() reservations: Reservation[] = [];
  @Output() viewReservation = new EventEmitter<Reservation>();

  onView(reservation: Reservation) {
    this.viewReservation.emit(reservation);
  }
}
