import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';


type InputType = 'text' | 'password' | 'number';

@Component({
  selector: 'app-input',
  standalone: false,
  
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  encapsulation:ViewEncapsulation.None
})
export class InputComponent implements OnInit {
  @Input() type:InputType = 'text';
  @Input() uid!:string;
  @Input() customInputCssClass:string = '';
  @Input() isMulty:boolean = false;
  @Input() optional:boolean = false;
  @Input() labelPlacement:'top'|'left' = "top";
  @Input({required:true}) placeholder:string = "";
  @Input({required:true})form:FormGroup = new FormGroup([]);
  @Input({required:true}) label:string = "";
  
  constructor(private el:ElementRef){
    
  }
  
  ngOnInit(): void {
    (<HTMLElement>this.el.nativeElement).classList.add(this.labelPlacement)
  }

}
