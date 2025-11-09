import { Component } from '@angular/core';
import { InputField } from '../../shared/input-field/input-field';
import { Button } from '../../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  constructor(private router:Router){}
onLogClick(){
  this.router.navigate(['/app-login']);
}
isLogged():boolean{
  return !localStorage.getItem('token')
}
  openSignup() {
    this.router.navigate(['/register']);
  }

}
