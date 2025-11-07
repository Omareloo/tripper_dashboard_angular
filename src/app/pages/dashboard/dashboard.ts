import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from './../../services/dashboard';
import { Card } from '../../components/card/card';
import { Hotel } from '../../models/hotel';
import { User } from '../../models/user';
import { Experience } from '../../models/experience';
import { Reservation } from '../../models/reservation';
import { Place } from '../../models/place';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  hotels: Hotel[] = [];
  users: User[] = [];
  experience: Experience[] = [];
  reservation: Reservation[] = [];
  place: Place[] = [];

  stats: any[] = []; // دي اللي هتتعرض في الكروت

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadAllData();
  }

  loadAllData() {
    // نستخدم forkJoin لو حبيتهم في future، بس دلوقتي نعملها بسيط async calls
    this.loadHotels();
    this.loadUsers();
    this.getExperiences();
    this.loadReservations();
    this.getPlaces();
  }

  loadHotels() {
    this.dashboardService.getAllHotels().subscribe({
      next: (data) => {
        this.hotels = data;
        this.updateStats();
      },
      error: (err) => console.error('Error loading hotels:', err),
    });
  }

  loadUsers() {
    this.dashboardService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.updateStats();
      },
      error: (err) => console.error('Error loading users:', err),
    });
  }

  getExperiences() {
    this.dashboardService.getAllExperiences().subscribe({
      next: (data) => {
        this.experience = data;
        this.updateStats();
      },
      error: (err) => console.error('Error loading experiences:', err),
    });
  }

  loadReservations() {
    this.dashboardService.getAllReservations().subscribe({
      next: (data) => {
        this.reservation = data;
        this.updateStats();
      },
      error: (err) => console.error('Error fetching reservations:', err),
    });
  }

  getPlaces() {
    this.dashboardService.getAllPlaces().subscribe({
      next: (res: any) => {
        this.place = res.data;
        this.updateStats();
      },
      error: (err) => console.error('Error loading places:', err),
    });
  }

  updateStats() {
    this.stats = [
      {
        title: 'Hotels',
        count: this.hotels.length,
        icon: 'bi bi-building',
        color: 'primary',
      },
      {
        title: 'Users',
        count: this.users.length,
        icon: 'bi bi-people',
        color: 'success',
      },
      {
        title: 'Experiences',
        count: this.experience.length,
        icon: 'bi bi-stars',
        color: 'warning',
      },
      {
        title: 'Reservations',
        count: this.reservation.length,
        icon: 'bi bi-calendar-check',
        color: 'danger',
      },
      {
        title: 'Places',
        count: this.place.length,
        icon: 'bi bi-geo-alt',
        color: 'info',
      },
    ];
  }
}
