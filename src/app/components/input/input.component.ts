import { Component, Input } from '@angular/core';


type InputType = 'text' | 'password' | 'email'

@Component({
  selector: 'app-input',
  standalone: false,
  
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type:InputType = 'text';
  @Input() uid!:string;
  @Input({required:true}) placeholder:string = "";
  @Input({required:true}) label:string = "";
}
