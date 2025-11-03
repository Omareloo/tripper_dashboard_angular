import { Component } from '@angular/core';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { UserTable } from '../../components/user-table/user-table';
import { UserModal } from '../../components/user-modal/user-modal';
@Component({
  selector: 'app-users',
  imports: [CommonModule, UserTable,UserModal],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users: User[] = [
    {
      id: 1,
      name: 'Omar Hossam',
      email: 'omar@example.com',
      phone: '01000000000',
      role: ['host'],
      activeRole: 'guest',
      isConfirmed: true,
      isVerified: 'pending',
      identityImageUrl: 'https://via.placeholder.com/300x200?text=ID+Card'
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      email: 'sara@example.com',
      phone: '01111111111',
      role: ['guest'],
      activeRole: 'guest',
      isConfirmed: false,
      isVerified: 'notVerified'
    }
  ];

  selectedUser: User | null = null;

  openUserDetails(user: User) {
    this.selectedUser = user;
  }

  closeUserDetails() {
    this.selectedUser = null;
  }

  verifyUser(user: User) {
    user.isVerified = 'verified';
  }

  rejectUser(user: User) {
    user.isVerified = 'rejected';
  }
}
