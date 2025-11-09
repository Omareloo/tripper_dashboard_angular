import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceTable } from '../../components/place-table/place-table';
import { PlaceModal } from '../../components/place-modal/place-modal';
import { Place } from '../../models/place';
import { PlacesService } from '../../services/places';
import { PlaceCard } from '../../components/place-card/place-card';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, PlaceTable, PlaceModal,PlaceCard],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class Places implements OnInit {
  showModal = false;
  showCard = false;
  editMode = false;
  selectedPlace: Place | null = null;
  places: any[] = [];

  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.placesService.getAllPlaces().subscribe({
      next: (res: any) => {
        // Backend responses vary across endpoints. Accept both raw array or wrapper { data: [...] }.
        this.places = Array.isArray(res) ? res : res?.data ?? [];
      },
      error: (err) => console.error('Error loading places:', err),
    });
  }

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

  ViewPlace(placeId: string) {
    this.selectedPlace = this.places.find((p) => p._id === placeId) || null;
    this.showCard = true;
  }

  closeCard() {
    this.showCard = false;
  }

  // 🟢 الحفظ (إضافة أو تعديل)
savePlace(payload: any) {
  console.log('savePlace called. editMode=', this.editMode, 'payload:', payload);

  // Helper to call update (payload can be FormData or JSON)
  const doUpdate = (id: string, body: any) =>
    this.placesService.updatePlace(id, body).subscribe({
      next: (res) => {
        const updatedPlace = res?.data ?? res;
        console.log('✅ Place updated successfully (raw response):', res);

        if (updatedPlace && updatedPlace._id) {
          const index = this.places.findIndex((p) => p._id === updatedPlace._id);
          if (index !== -1) {
            this.places[index] = updatedPlace;
          } else {
            console.warn('Updated place id not found in local list, refetching places');
            this.getPlaces();
          }
        } else {
          console.warn('Update response did not include updated place, refetching places');
          this.getPlaces();
        }

        this.closeModal();
      },
      error: (err) => console.error('Error updating place:', err),
    });

  // Create helper
  const doCreate = (body: any) =>
    this.placesService.createPlace(body).subscribe({
      next: () => {
        console.log('✅ Place created successfully');
        this.getPlaces();
        this.closeModal();
      },
      error: (err) => {
        console.error('Error creating place:', err);
      },
    });

  if (this.editMode && this.selectedPlace?._id) {
    doUpdate(this.selectedPlace._id, payload);
  } else {
    doCreate(payload);
  }
}


  deletePlace(id: string) {
    this.placesService.deletePlace(id).subscribe({
      next: () => {
        this.places = this.places.filter((p) => p._id !== id);
      },
      error: (err) => console.error('Error deleting place:', err),
    });
  }
}

