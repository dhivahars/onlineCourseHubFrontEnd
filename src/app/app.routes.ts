import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Login } from './modules/auth/login/login';
import { mentorDashboard } from './modules/mentor/mentor-dashboard/mentor-dashboard';
import { StudentDashBoard } from './modules/student/student-dash-board/student-dash-board';
import { Register } from './modules/auth/register/register';
import { MyCourses } from './modules/student/my-courses/my-courses';
import { Course } from './modules/course/course';
import { StudentProfile } from './modules/student/profile/profile';

export const routes: Routes = [{
    path: '',
    redirectTo:'app-home',
    pathMatch:'full' 
  },
  {
    path:'app-home',
    component:Home
  },
  {
    path: 'app-login',
    component: Login, 
  },
  {
    path:'student-dashboard',
    component:StudentDashBoard
  },
  {
    path:'mentor-dashboard',
    component:mentorDashboard
  },
{
    path:'app-register',
    component:Register
},
{
    path:'app-my-courses',
    component:MyCourses
},{
  path:'app-course/:id',
  component:Course
},
{
  path:'student-profile',
  component:StudentProfile
}];
