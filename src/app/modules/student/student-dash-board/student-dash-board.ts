import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../../shared/button/button';
import { Footer } from '../../../shared/footer/footer';
import { Home } from '../../home/home';
interface Course{
  id:number;
  courseTitle:string;
  status:any;
}
@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe,  Button,Footer,TitleCasePipe,Home],
  templateUrl: './student-dash-board.html',
  styleUrls: ['./student-dash-board.scss'],
})

export class StudentDashBoard implements OnInit {
  student!: any;
  enrollments!:any;

  constructor(private auth: AuthService, private http: HttpClient, public router: Router) {}

  ngOnInit(): void {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  if (token && email) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // First: get student
    this.http.get<any>(`http://localhost:8080/student/${email}`, { headers }).subscribe({
      next: (res) => {
        this.student = res;
        console.log('Student data loaded:', this.student);

        // Only after student is loaded, get enrollments
        if (this.student?.id) {
          this.http
            .get<any[]>(`http://localhost:8080/enrollment/search/${this.student.id}`,{headers})
            .subscribe((enrollments) => {
              this.enrollments = enrollments;
              console.log('Enrollments loaded:', this.enrollments);
            });
        }
      },
      error: (err) => console.error('Error loading student data:', err),
    });
  }
}


  onSignOut(): void {
    localStorage.clear();
    this.router.navigate(['/app-login']);
  }

  onNavigate(path: string): void {
  this.router.navigate([path]);
}

}
