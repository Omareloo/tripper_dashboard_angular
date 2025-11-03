import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Places } from './pages/places/places';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'users', component: Users },
  { path: 'places', component: Places },
];
