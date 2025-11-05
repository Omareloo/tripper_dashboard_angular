import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Places } from './pages/places/places';
import { Hotels } from './pages/hotels/hotels';
import { Reservations } from './pages/reservations/reservations';
import { ExperienceComponent } from './pages/experiences/experiences';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'users', component: Users },
  { path: 'places', component: Places },
  { path: 'hotels', component: Hotels },
  { path: 'reservations', component: Reservations },
  { path: 'experiences', component: ExperienceComponent },
  { path: '**', redirectTo: '' },
];
