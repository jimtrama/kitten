import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input()
  loading:boolean = false;

  @Input()
  style:string = '';

  @ViewChild("theBtn",{static:true})btn!:ElementRef;

  constructor(private elRef:ElementRef){
    
  }

  ngOnInit(): void {
    if(this.style==='rounded'){
      (<HTMLElement>this.btn.nativeElement).classList.add('rounded')
      this.style = "";
    }else{
      (<HTMLElement>this.btn.nativeElement).classList.add(this.style)
    }
  }

  @Output() click : EventEmitter<Element> = new EventEmitter();
  onClick(e:Event){
    e.stopPropagation();
    const element = (<HTMLElement>this.elRef.nativeElement).children[0];
    this.click.emit(element);
  }

}
