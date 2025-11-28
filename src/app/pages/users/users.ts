import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
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

  hostHotels: any[] = [];
  hostExperiences: any[] = [];

  constructor(
    private userService: UserService,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.filteredUsers = res;
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.toast.error('Failed to load users. Please try again.');
      }
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
    this.hostHotels = [];
    this.hostExperiences = [];

    if (user.role.includes('host')) {
      this.userService.getHotelsByHost(user._id).subscribe({
        next: (res) => {
          this.hostHotels = res;
        },
        error: (err) => {
          console.error('Error loading hotels:', err);
          this.toast.warning('Could not load hotels for this host');
        }
      });

      this.userService.getExperiencesByHost(user._id).subscribe({
        next: (res) => {
          this.hostExperiences = res;
        },
        error: (err) => {
          console.error('Error loading experiences:', err);
          this.toast.warning('Could not load experiences for this host');
        }
      });
    }
  }

  closeUserModal() {
    this.selectedUser = null;
    this.hostHotels = [];
    this.hostExperiences = [];
  }

  onVerifyUser(event: {user: User, reason: string}) {
    this.userService.verifyUser(event.user._id, 'verified', event.reason).subscribe({
      next: (response) => {
        this.toast.success(`${event.user.name} has been verified successfully! Email sent.`);
        this.loadUsers();
        this.closeUserModal();
      },
      error: (err) => {
        console.error('Error verifying user:', err);
        this.toast.error('Failed to verify user. Please try again.');
      }
    });
  }

  onRejectUser(event: {user: User, reason: string}) {
    this.userService.verifyUser(event.user._id, 'rejected', event.reason).subscribe({
      next: (response) => {
        this.toast.success(`${event.user.name} has been rejected. Email sent.`);
        this.loadUsers();
        this.closeUserModal();
      },
      error: (err) => {
        console.error('Error rejecting user:', err);
        this.toast.error('Failed to reject user. Please try again.');
      }
    });
  }
}