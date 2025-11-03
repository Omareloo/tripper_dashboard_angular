import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats = [
    { title: 'Users', count: 1280, icon: 'bi-people-fill', color: 'primary' },
    { title: 'Hosts', count: 320, icon: 'bi-person-gear', color: 'success' },
    { title: 'Places', count: 540, icon: 'bi-geo-alt-fill', color: 'info' },
    { title: 'Reservations', count: 875, icon: 'bi-calendar-check', color: 'warning' },
  ];
}
