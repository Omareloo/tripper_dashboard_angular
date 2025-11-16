import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-modal.html',
  styleUrls: ['./user-modal.css']
})
export class UserModal {
  @Input() user: User | null = null;
  @Output() closeModal = new EventEmitter<void>();
  @Output() verifyUser = new EventEmitter<User>();
  @Output() rejectUser = new EventEmitter<User>();
  @Input() hotels: any[] = [];
  @Input() experiences: any[] = [];

}
