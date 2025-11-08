  import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
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
  export class PlaceModal implements OnChanges {
    @Input() editMode = false;
    @Input() viewMode = false;
    @Input() place: Place | null = null;

    @Output() onClose = new EventEmitter<void>();
    @Output() onSave = new EventEmitter<FormData>();

    formData: any = {
      name: '',
      description: '',
      images: [],
      address: { country: '', city: '' },
    };

    selectedFiles: File[] = [];

    ngOnChanges(changes: SimpleChanges) {
      if (changes['place'] && this.place) {
        this.formData = {
          ...this.place,
          address: this.place.address || { country: '', city: '' },
        };
      } else if (!this.place) {
        // 🔁 إعادة ضبط النموذج عند الإضافة الجديدة
        this.formData = {
          name: '',
          description: '',
          images: [],
          address: { country: '', city: '' },
        };
        this.selectedFiles = [];
      }
    }

    onFilesSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files) this.selectedFiles = Array.from(input.files);
    }

 save() {
  if (this.viewMode) return;

  const form = new FormData();
  if (this.place?._id) form.append('id', this.place._id); // 🔥 أضف الـ ID لما تكون في edit mode

  form.append('name', this.formData.name);
  form.append('description', this.formData.description);
  form.append('address[country]', this.formData.address.country);
  form.append('address[city]', this.formData.address.city);

  this.selectedFiles.forEach(file => form.append('images', file));

  console.log('🧾 FormData before emit:', Object.fromEntries(form.entries()));

  this.onSave.emit(form);
}

  }
