import { Component,EventEmitter,forwardRef,Input, Output } from '@angular/core';
import {  ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'we-input',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true
    }
  ]
})
export class InputField implements ControlValueAccessor{
  @Input() label:string='label'
  @Input() id!:string;
  @Input() type:string='text';
  @Input() placeholder:string='place holder';
  @Input() formControlName!:string;

  @Output() inputChange = new EventEmitter<string>();
  @Output() touched = new EventEmitter<void>();

  // onInput(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   this.inputChange.emit(inputElement.value);
  // }
  
  // onTouched(): void {
  //   this.touched.emit();
  // }
  value: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  // Called by Angular to update the input value
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Called by Angular to register change callback
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called by Angular to register touched callback
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Called when user types in input
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value); // notify Angular
  }

  // Called when input loses focus
  onBlur(): void {
    this.onTouched();
  }
}

