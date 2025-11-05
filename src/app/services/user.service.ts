import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpService) {}

  getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>('user');
}


  verifyUser(userId: string, status: 'verified' | 'rejected'): Observable<any> {
  return this.http.patch<any>(`user/verify/${userId}`, { status });
}

}
