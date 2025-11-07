import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'we-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input({required:true}) label!:string;
  @Input() variant:string='primary';
  @Input() disabled:boolean=false;

  @Output() onClick=new EventEmitter<void>();

  handleClick()
  {
    if(!this.disabled)
    {
      this.onClick.emit();
    }
  }
}
