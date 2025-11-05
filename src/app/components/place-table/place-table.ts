import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'place-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-table.html',
  styleUrls: ['./place-table.css'],
})
export class PlaceTable {
  @Input() places: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<string>();
}
