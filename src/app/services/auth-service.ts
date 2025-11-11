import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private cachedUser: any = null; 

  constructor(private http: HttpClient) {}

  onLogin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  onRegister(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

getUser(): Observable<any> {
  if (this.cachedUser) {
    return of(this.cachedUser);
  }

  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  // ✅ Fetch from backend
  return new Observable((observer) => {
    this.http.get<any>('http://localhost:8080/user/me', { headers }).subscribe({
      next: (user) => {
        this.cachedUser = user;

        if (user && user.email) {
          localStorage.setItem('email', user.email);
        }

        observer.next(user);  // send data
        observer.complete();  // finish observable
      },
      error: (err) => {
        observer.error(err);  // handle error
      },
    });
  });
}
  clearUserCache() {
    this.cachedUser = null;
  }
}
