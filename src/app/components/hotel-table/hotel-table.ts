import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-table.html',
  styleUrls: ['./hotel-table.css']
})
export class HotelTable {
  @Input() hotels: Hotel[] = [];
  @Output() viewHotel = new EventEmitter<Hotel>();
  @Output() deleteHotel = new EventEmitter<Hotel>();

  onView(hotel: Hotel) {
    this.viewHotel.emit(hotel);
  }

  onDelete(hotel: Hotel) {
    if (confirm(`Are you sure you want to delete "${hotel.name}"?`)) {
      this.deleteHotel.emit(hotel);
    }
  }
}
