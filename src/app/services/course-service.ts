import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService{
   private baseUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient, private authService: AuthService) {}

   getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }
   getCoursesByMentor(mentorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorId}`, {
      headers: this.getHeaders(),
    });
  }
 
  /** 👩‍🎓 Get students enrolled under this mentor */
  getStudentsUnderMentor(mentorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorId}/students`, {
      headers: this.getHeaders(),
    });
  }
  // Get all courses
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/list`, { headers: this.getHeaders() });
  }

  // Get course by id
  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/${id}`, { headers: this.getHeaders() });
  }

  // Optionally: store courses in memory for fast access
  private coursesCache: any[] = [];

  cacheCourses(courses: any[]) {
    this.coursesCache = courses;
  }

  getCachedCourseById(id: number) {
    return this.coursesCache.find(course => course.id === id);
  }
}


