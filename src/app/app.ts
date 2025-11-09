import { Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputField } from './shared/input-field/input-field';
import { Login } from './modules/auth/login/login';
import { Home } from './modules/home/home';
import { Register } from './modules/auth/register/register';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnDestroy{
  protected readonly title = signal('OnlineCourseHub');
  ngOnDestroy(): void {
    localStorage.clear();
  }
}
