import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {}

  /** 🔐 Helper: Attach JWT token to headers */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  /** 📘 Get courses created by this mentor */
  getCoursesByMentor(mentorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorId}`, {
      headers: this.getAuthHeaders(),
    });
  }

  /** 👩‍🎓 Get students enrolled under this mentor */
  getStudentsUnderMentor(mentorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorId}/students`, {
      headers: this.getAuthHeaders(),
    });
  }

  // ✅ Optional — other course-related API calls
  // listAllCourses(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/list`, { headers: this.getAuthHeaders() });
  // }

  // getCourseById(id: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/search/${id}`, { headers: this.getAuthHeaders() });
  // }
}
