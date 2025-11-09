import { Component, OnInit } from '@angular/core';
import { InputField } from '../../../shared/input-field/input-field';
import { Button } from '../../../shared/button/button';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [InputField,Button],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  registerDetails!:FormGroup
  constructor(public rd:FormBuilder){}
  ngOnInit(): void {
    this.registerDetails=this.rd.group({
      username:['']
    })
  }
onRegister(){}

}
