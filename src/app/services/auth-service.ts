// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) {}
  private userDetails!:any;
  onLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  onRegister(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,data);
  }
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(`http://localhost:8080/user/me`, { headers });
  }
}
