import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private http: HttpService) {}

  getAllExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>('experiance');
  }

  getExperienceById(id: string): Observable<Experience> {
    return this.http.get<Experience>(`experiance/${id}`);
  }

  // createExperience(data: Experience): Observable<Experience> {
  //   return this.http.post<Experience>('experience', data);
  // }

  // updateExperience(id: string, data: Partial<Experience>): Observable<Experience> {
  //   return this.http.patch<Experience>(`experience/${id}`, data);
  // }

  deleteExperience(id: string): Observable<any> {
    return this.http.delete<any>(`experiance/${id}`);
  }
}
