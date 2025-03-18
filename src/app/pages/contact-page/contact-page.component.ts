import { Component } from '@angular/core';
import { CustomRoutingService } from '../../services/custom-routing.service';
@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  

  constructor(private router:CustomRoutingService){
    
  }

  account(){
    this.router.goTo("account");
   
  }
}
