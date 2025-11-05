import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { CommonModule } from '@angular/common';
import { HotelTable } from '../../components/hotel-table/hotel-table';
import { HotelModal } from '../../components/hotel-modal/hotel-modal';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, HotelTable, HotelModal],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css',
})
export class Hotels implements OnInit {
  hotels: Hotel[] = [];
  selectedHotel: Hotel | null = null;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getAllHotels().subscribe({
      next: (data) => (this.hotels = data),
      error: (err) => console.error('Error loading hotels:', err),
    });
  }

  openHotelDetails(hotel: Hotel) {
    this.selectedHotel = hotel;
  }

  closeHotelDetails() {
    this.selectedHotel = null;
  }

  
}
