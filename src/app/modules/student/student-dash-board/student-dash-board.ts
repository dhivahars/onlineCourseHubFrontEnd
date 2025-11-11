import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { Footer } from '../../../shared/footer/footer';
import { Home } from '../../home/home';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, Button, Footer, TitleCasePipe, Home],
  templateUrl: './student-dash-board.html',
  styleUrls: ['./student-dash-board.scss'],
})
export class StudentDashBoard implements OnInit {
  student: any;
  enrollments: any;
  email:any;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.email=localStorage.getItem('email')
    this.auth.getUser().subscribe({
      next: (user) => {
        this.student = user;
        console.log('Student loaded:', this.student);
        if (this.student && this.student.id) {
          const token = localStorage.getItem('token');
         
          const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
          });

          this.http
            .get(`http://localhost:8080/enroll/search/${this.email}`, { headers })
            .subscribe({
              next: (enrollments) => {
                this.enrollments = enrollments;
                console.log('Enrollments loaded:', this.enrollments);
              },
              error: (err) => {
                console.error('Error loading enrollments:', err);
              },
            });
        }
      },
      error: (err) => {
        console.error('Error loading student data:', err);
      },
    });
  }

  onSignOut(): void {
    localStorage.clear();
    this.auth.clearUserCache(); // clear cached user
    this.router.navigate(['/app-login']);
  }

  onNavigate(path: string): void {
    this.router.navigate([path]);
  }
}
