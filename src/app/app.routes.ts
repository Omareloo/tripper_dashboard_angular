import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/users/users';
import { Hosts } from './pages/hosts/hosts';
import { Places } from './pages/places/places';


export const routes: Routes = [
     { path: '', component: Dashboard },
  { path: 'users', component: Users },
  { path: 'hosts', component: Hosts },
  { path: 'places', component: Places },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





