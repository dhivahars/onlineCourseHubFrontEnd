import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputField } from './shared/input-field/input-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputField],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('OnlineCourseHub');
}
