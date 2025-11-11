import { Component, OnInit } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../services/course-services';

@Component({
  selector: 'mentor-dashboard',
  imports: [Button, CommonModule],
  templateUrl: './mentor-dashboard.html',
  styleUrls: ['./mentor-dashboard.scss'],
})
export class mentorDashboard implements OnInit {
  mentor: any;
  activeSection = 'profile'; // default section
  courses: any[] = [];
  students: any[] = [];

  constructor(
    private auth: AuthService,
    private courseService: CourseService, // ✅ Inject service
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.getUser().subscribe({
      next: (user) => {
        this.mentor = user;
        console.log('Mentor loaded:', this.mentor);
      },
      error: (err) => console.error('Error loading mentor data:', err),
    });
  }

  // ✅ Switch between sections
  setActive(section: string): void {
    this.activeSection = section;

    if (section === 'courses') {
      this.loadCourses();
    } else if (section === 'students') {
      this.loadStudents();
    }
  }

  // ✅ Fetch mentor courses
  loadCourses(): void {
    this.courseService.getCoursesByMentor(this.mentor.id).subscribe({
      next: (data) => (this.courses = data),
      error: (err) => console.error('Error loading courses:', err),
    });
  }

  // ✅ Fetch students under mentor
  loadStudents(): void {
    this.courseService.getStudentsUnderMentor(this.mentor.id).subscribe({
      next: (data) => (this.students = data),
      error: (err) => console.error('Error loading students:', err),
    });
  }

  onSignOut(): void {
    localStorage.clear();
    this.auth.clearUserCache();
    this.router.navigate(['/app-login']);
  }

  onNavigate(path: string): void {
    this.router.navigate([path]);
  }
}
