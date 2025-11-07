import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputField } from './shared/input-field/input-field';
import { Login } from './modules/auth/login/login';
import { Home } from './modules/home/home';
import { Register } from './modules/auth/register/register';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputField,Login,Home,Register],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('OnlineCourseHub');
}
