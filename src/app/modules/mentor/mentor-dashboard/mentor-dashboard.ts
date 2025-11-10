import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'mentor-dashboard',
  imports: [Button],
  templateUrl: './mentor-dashboard.html',
  styleUrls: ['./mentor-dashboard.scss'],
})
export class mentorDashboard {
constructor(private router:Router){}
onNavigate(path: string)
{
 this.router.navigate([path]);
}
onSignOut(): void {
    localStorage.clear();
    this.router.navigate(['/app-login']);
  }
}
