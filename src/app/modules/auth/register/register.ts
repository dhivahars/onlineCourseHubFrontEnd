import { Component, OnInit } from '@angular/core';
import { InputField } from '../../../shared/input-field/input-field';
import { Button } from '../../../shared/button/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputField,Button,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  

}
