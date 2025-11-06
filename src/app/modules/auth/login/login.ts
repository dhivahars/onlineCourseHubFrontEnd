import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { InputField } from '../../../shared/input-field/input-field';

@Component({
  selector: 'app-login',
  imports: [Button,InputField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
