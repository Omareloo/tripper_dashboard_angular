import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceTable } from '../../components/place-table/place-table';
import { PlaceModal } from '../../components/place-modal/place-modal';
import { Place } from '../../models/place';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, PlaceTable, PlaceModal],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class Places {
  showModal = false;
  editMode = false;
  selectedPlace: Place | null = null;

  places: Place[] = [
    {
      _id: '1',
      name: 'Cairo Tower',
      description: 'Famous tower in Cairo',
      images: [],
      address: { country: 'Egypt', city: 'Cairo' },
      starRating: 4.5,
    },
    {
      _id: '2',
      name: 'Luxor Temple',
      description: 'Ancient Egyptian temple',
      images: [],
      address: { country: 'Egypt', city: 'Luxor' },
      starRating: 4.8,
    },
  ];

  openAddModal() {
    this.editMode = false;
    this.selectedPlace = null;
    this.showModal = true;
  }

  openEditModal(place: Place) {
    this.editMode = true;
    this.selectedPlace = { ...place };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  savePlace(formData: FormData) {
  console.log('Ready to send:', Array.from(formData.entries()));

  // هنا بعدين هنستخدم service:
  // this.http.post('http://127.0.0.1:4000/places', formData).subscribe(...);

  this.closeModal();
}


  deletePlace(id: string) {
    this.places = this.places.filter((p) => p._id !== id);
  }
}
