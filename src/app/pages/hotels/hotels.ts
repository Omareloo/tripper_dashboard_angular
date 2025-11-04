import { Component } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { CommonModule } from '@angular/common';
import { HotelTable } from '../../components/hotel-table/hotel-table';
import { HotelModal } from '../../components/hotel-modal/hotel-modal';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule, HotelTable, HotelModal],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css',
})
export class Hotels {
hotels: Hotel[] = [
    {
      id: '1',
      name: 'Grand Palace Hotel',
      description: 'A luxurious hotel in downtown Cairo with rooftop pool.',
      price: 250,
      images: ['https://via.placeholder.com/300x200'],
      amenities: ['WiFi', 'Pool', 'Gym', 'Spa'],
      address: {
        country: 'Egypt',
        city: 'Cairo',
        street: 'Tahrir Street 15'
      },
      starRating: 4.7,
      hostName: 'Omar Hossam',
      hostEmail: 'omar@example.com'
    },
    {
      id: '2',
      name: 'Desert Sands Resort',
      description: 'Relaxing resort with desert view and private villas.',
      price: 400,
      images: ['https://via.placeholder.com/300x200'],
      amenities: ['Breakfast', 'Parking', 'AC'],
      address: {
        country: 'Egypt',
        city: 'Siwa',
        street: 'Oasis Road 9'
      },
      starRating: 4.9,
      hostName: 'Ali Hassan',
      hostEmail: 'ali@example.com'
    }
  ];

  selectedHotel: Hotel | null = null;

  openHotelDetails(hotel: Hotel) {
    this.selectedHotel = hotel;
  }

  closeHotelDetails() {
    this.selectedHotel = null;
  }

  deleteHotel(hotel: Hotel) {
    this.hotels = this.hotels.filter(h => h.id !== hotel.id);
  }
}
