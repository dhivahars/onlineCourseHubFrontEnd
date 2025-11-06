import { Component,EventEmitter,Input, Output } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'we-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
})
export class InputField {
  @Input() label:string='label'
  @Input() id!:string;
  @Input() type:string='text';
  @Input() placeholder:string='place holder';
  @Input() formControlName!:string;

  @Output() inputChange = new EventEmitter<string>();
  @Output() touched = new EventEmitter<void>();

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.inputChange.emit(inputElement.value);
  }
  
  onTouched(): void {
    this.touched.emit();
  }
}

