import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './place-modal.html',
  styleUrl: './place-modal.css',
})
export class PlaceModal {
  @Input() editMode = false;
  @Input() place: Place | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<FormData>();

  formData: Place = {
    name: '',
    description: '',
    images: [],
    address: { country: '', city: '' },
  };

  selectedFiles: File[] = [];

  ngOnInit() {
    if (this.editMode && this.place) {
      this.formData = { ...this.place };
    }
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) this.selectedFiles = Array.from(input.files);
  }

  save() {
    const form = new FormData();
    form.append('name', this.formData.name);
    form.append('description', this.formData.description);
    form.append('address[country]', this.formData.address.country);
    form.append('address[city]', this.formData.address.city);

    this.selectedFiles.forEach(file => form.append('images', file));

    this.onSave.emit(form);
  }
}
