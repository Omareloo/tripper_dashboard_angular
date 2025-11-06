import { Component } from '@angular/core';
import { Place } from '../../models/place';
import { CommonModule } from '@angular/common';
import { PlaceModal } from '../../components/place-modal/place-modal';
import { PlaceTable } from '../../components/place-table/place-table';

@Component({
  selector: 'app-places',
  templateUrl: './places.html',
    imports: [CommonModule, PlaceModal,PlaceTable], // ❌ مفيش PlaceTable هنا

  styleUrls: ['./places.css']
})
export class PlacesComponent {
  places: Place[] = [];
  showModal = false;
  editMode = false;
  viewMode = false; // 👁️ وضع العرض فقط
  selectedPlace: Place | null = null;

  openAddModal() {
    this.selectedPlace = null;
    this.editMode = false;
    this.viewMode = false;
    this.showModal = true;
  }

  openEditModal(place: Place) {
    this.selectedPlace = place;
    this.editMode = true;
    this.viewMode = false;
    this.showModal = true;
  }

  ViewPlace(place: Place) {
    this.selectedPlace = place;
    this.editMode = false;
    this.viewMode = true; // ✅ تفعيل وضع العرض فقط
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPlace = null;
  }

  savePlace(formData: FormData) {
    if (this.editMode) {
      console.log('Editing place...', formData);
      // TODO: API call for edit
    } else {
      console.log('Adding new place...', formData);
      // TODO: API call for add
    }
    this.closeModal();
  }

  deletePlace(id: string) {
    console.log('Deleting place with id:', id);
    // TODO: API call for delete
  }
}
