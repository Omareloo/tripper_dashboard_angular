import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Places } from './pages/places/places';
import { Hotels } from './pages/hotels/hotels';
import { Reservations } from './pages/reservations/reservations';
import { ExperienceComponent } from './pages/experiences/experiences';
import { LoginComponent } from './pages/login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'users', component: Users, canActivate: [AuthGuard] },
  { path: 'places', component: Places, canActivate: [AuthGuard] },
  { path: 'hotels', component: Hotels, canActivate: [AuthGuard] },
  { path: 'reservations', component: Reservations, canActivate: [AuthGuard] },
  { path: 'experiences', component: ExperienceComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '' },
];
