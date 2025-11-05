import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private baseUrl = 'http://127.0.0.1:4000';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGY5NmQ4NTlmZTZmM2Y5OWM5OTU5ZTUiLCJhY3RpdmVSb2xlIjoiYWRtaW4iLCJlbWFpbCI6ImhhemVtaGVmbnlAZ21haWwuY29tIiwiaWF0IjoxNzYyMzQyNzQ4fQ.G0-sxElMx9LgpoTQiTx6fNBA97YkdgqgnunNcf3hEvU'; // توكن الادمن أو اليوزر
    return new HttpHeaders({
      token: `${token}`,
    });
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders(),
    });
  }

  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders(),
    });
  } 
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data, {
      headers: this.getHeaders(),
    });
  }
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }
}


