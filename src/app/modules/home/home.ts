import { Component } from '@angular/core';
import { InputField } from '../../shared/input-field/input-field';
import { Button } from '../../shared/button/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button,RouterOutlet],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor(private route:Router){}
  openSignup() {
    this.route.navigate(['/signup']);
  }

}
