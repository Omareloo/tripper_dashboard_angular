import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserTable } from '../../components/user-table/user-table';
import { UserModal } from '../../components/user-modal/user-modal';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserTable, UserModal],
  templateUrl: './users.html',
  styleUrls: ['./users.css'],
})
export class Users implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res;
      this.filteredUsers = res;
    });
  }

 filterByStatus(status: string) {
  if (!status) {
    this.filteredUsers = this.users;
  } else {
    this.filteredUsers = this.users.filter(
      (u) => u.isVerified?.toLowerCase() === status.toLowerCase()
    );
  }
}


  openUserModal(user: User) {
    this.selectedUser = user;
  }

  closeUserModal() {
    this.selectedUser = null;
  }

  verifyUser(user: User) {
    this.userService.verifyUser(user._id, 'verified').subscribe(() => {
      this.loadUsers();
      this.closeUserModal();
    });
  }
rejectUser(user: User) {
  this.userService.verifyUser(user._id, 'rejected').subscribe(() => {
    this.loadUsers();
    this.closeUserModal();
  });
}

}
