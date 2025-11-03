import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  active = '/';
  links = [
    { path: '/', label: 'Dashboard', icon: 'bi-speedometer2' },
    { path: '/users', label: 'Users', icon: 'bi-people' },
    { path: '/hosts', label: 'Hosts', icon: 'bi-person-gear' },
    { path: '/places', label: 'Places', icon: 'bi-geo-alt' },
  ];

  setActive(link: string) {
    this.active = link;
  }

  activeLink() {
    return this.active;
  }
}
