import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.html',
  styleUrls: ['./user-table.css']
})
export class UserTable {
  @Input() users: User[] = [];
  @Output() viewUser = new EventEmitter<User>();
  @Output() verifyUser = new EventEmitter<User>();
  @Output() rejectUser = new EventEmitter<User>();

  onView(user: User) {
    this.viewUser.emit(user);
  }

  onVerify(user: User) {
    if (confirm(`Approve verification for ${user.name}?`)) {
      this.verifyUser.emit(user);
    }
  }

  onReject(user: User) {
    if (confirm(`Reject verification for ${user.name}?`)) {
      this.rejectUser.emit(user);
    }
  }
}
