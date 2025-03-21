import { Component } from '@angular/core';
import { URL_ROUTE } from '../../app-routing.module';
import { CustomRoutingService } from '../../services/custom-routing.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router:CustomRoutingService){}

  navigate(url:URL_ROUTE){
    this.router.goTo(url);
    
  }
}
