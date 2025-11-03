import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Place } from '../../models/place';

@Component({
  selector: 'app-place-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-table.html',
  styleUrl: './place-table.css',
})
export class PlaceTable {
  @Input() places: Place[] = [];
  @Output() onEdit = new EventEmitter<Place>();
  @Output() onDelete = new EventEmitter<string>();
}
