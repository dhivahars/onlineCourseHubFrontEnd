import { Component, OnInit } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { InputField } from '../../../shared/input-field/input-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [Button,InputField,ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit{
 login!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.login = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
}
get f(){
  return this.login.controls;
}
onSubmit(): void {
    if (this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }
    console.log(this.login.value);
  }
}
