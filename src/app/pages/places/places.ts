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
        this.places = res.data;
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

  savePlace(formData: FormData) {
    if (this.editMode && this.selectedPlace?._id) {
      this.placesService.updatePlace(this.selectedPlace._id, formData).subscribe({
        next: () => {
          this.getPlaces();
          this.closeModal();
        },
        error: (err) => console.error('Error updating place:', err),
      });
    } else {
      this.placesService.createPlace(formData).subscribe({
        next: () => {
          this.getPlaces();
          this.closeModal();
        },
        error: (err) => console.error('Error creating place:', err),
      });
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
