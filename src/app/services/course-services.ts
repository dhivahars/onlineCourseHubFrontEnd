import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) {}

  /**  Helper: Attach JWT token to headers */
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  /**  Get courses created by this mentor */
  getCoursesByMentor(mentorEmail: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorEmail}`, {
      headers: this.getAuthHeaders(),
    });
  }

  /** Get students enrolled under this mentor */
  getStudentsUnderMentor(mentorId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentor/${mentorId}/students`, {
      headers: this.getAuthHeaders()
    });
  }

  // /** Create new course */
  // createCourse(courseData: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/create/?email=${localStorage.getItem('email')}`, (courseData), {
  //     headers: this.getAuthHeaders(),
  //   });
  // }

  /** Update course */
  updateCourse(courseId: number, courseData: any): Observable<any> {
    console.log(courseData);
    
    return this.http.patch(`${this.baseUrl}/update/${courseId}`, courseData, {
      headers: this.getAuthHeaders(),
    });
  }

  /**  Delete course */
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${courseId}`, {
      headers: this.getAuthHeaders(),
      responseType: 'text' // because backend returns a String message
    });
  }
}
